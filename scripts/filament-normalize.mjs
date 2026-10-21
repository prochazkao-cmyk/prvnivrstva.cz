#!/usr/bin/env node
/**
 * Build explicit filament cards from the preview catalog.
 *
 * A card key is brand + material + color + weight + diameter + form.
 * Product line is added only when product-lines.json or product-map.json has it.
 * Refill comes from refill tokens on the product name or category. Otherwise the form is spool.
 * A shop diameter default applies only when field-rules.json lists that shop.
 * Offers join across shops when they share an EAN and brand, material, and weight agree,
 * or when product-map.json says so. Inside one shop, the same full key shares a card.
 * Missing brand, material, color, weight, or an unverified diameter stays on its own card.
 *
 *   node scripts/filament-normalize.mjs
 *   node scripts/filament-normalize.mjs --check
 */

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PREVIEW_PATH = path.join(ROOT, 'src/data/filament-preview.generated.json');
const FACTS_PATH = path.join(ROOT, 'src/data/filament-feed-facts.generated.json');
const ALIASES_PATH = path.join(ROOT, 'src/data/filament-normalization/aliases.json');
const CANDIDATES_PATH = path.join(ROOT, 'src/data/filament-normalization/alias-candidates.json');
const MAP_PATH = path.join(ROOT, 'src/data/filament-normalization/product-map.json');
const LINES_PATH = path.join(ROOT, 'src/data/filament-normalization/product-lines.json');
const RULES_PATH = path.join(ROOT, 'src/data/filament-normalization/field-rules.json');

export const FORM_TOKENS = {
  wholeWords: ['refill', 'náplň'],
  phrases: ['bez cívky'],
};
const CARDS_PATH = path.join(ROOT, 'src/data/filament-cards.generated.json');
const REVIEW_JSON_PATH = path.join(ROOT, 'src/data/filament-normalization/review.json');
const REVIEW_MD_PATH = path.join(ROOT, 'src/data/filament-normalization/review.md');
const REVIEW_CSV_PATH = path.join(ROOT, 'src/data/filament-normalization/review.csv');
const HISTORY_PATH = path.join(ROOT, 'src/data/filament-history.json');

const KEY_FIELDS = ['brand', 'productLine', 'material', 'color', 'weightGrams', 'diameterMm', 'form'];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function readJson(file) {
  return JSON.parse(await readFile(file, 'utf8'));
}

export function applyAlias(table, value) {
  if (typeof value !== 'string' || value === '') return null;
  if (Object.prototype.hasOwnProperty.call(table, value)) return table[value];
  return value;
}

export function validateAliases(aliases) {
  for (const kind of ['brand', 'material', 'color']) {
    const table = aliases[kind];
    assert(table && typeof table === 'object' && !Array.isArray(table), `aliases.${kind} must be an object`);
    for (const [key, value] of Object.entries(table)) {
      assert(key !== '' && typeof value === 'string' && value !== '', `bad alias ${kind}:${key}`);
      assert(!Object.prototype.hasOwnProperty.call(table, value), `alias chain ${kind}: ${key} -> ${value}`);
    }
  }
}

function validateLines(lines, offerIds) {
  assert(lines && lines.version === 1, 'product-lines version must be 1');
  assert(lines.byOfferId && typeof lines.byOfferId === 'object', 'product-lines.byOfferId missing');
  assert(lines.byEan && typeof lines.byEan === 'object', 'product-lines.byEan missing');
  for (const [offerId, line] of Object.entries(lines.byOfferId)) {
    assert(offerIds.has(offerId), `product line for unknown offer ${offerId}`);
    assert(typeof line === 'string' && line.trim() !== '', `empty product line for ${offerId}`);
  }
  for (const [ean, line] of Object.entries(lines.byEan)) {
    assert(/^\d{8,14}$/.test(ean), `product line EAN must be digits: ${ean}`);
    assert(typeof line === 'string' && line.trim() !== '', `empty product line for EAN ${ean}`);
  }
}

function validateMap(productMap, offerIds) {
  assert(productMap && productMap.version === 1 && Array.isArray(productMap.groups), 'product-map version must be 1');
  const byMember = new Map();
  for (const group of productMap.groups) {
    assert(typeof group.id === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(group.id), `bad map id ${group.id}`);
    assert(Array.isArray(group.members) && group.members.length >= 2, `map ${group.id} needs at least two members`);
    if (group.productLine !== undefined) {
      assert(typeof group.productLine === 'string' && group.productLine.trim() !== '', `map ${group.id} productLine`);
    }
    if (group.form !== undefined) assert(group.form === 'spool' || group.form === 'refill', `map ${group.id} form`);
    const seen = new Set();
    for (const member of group.members) {
      assert(typeof member === 'string' && member !== '', `map ${group.id} member`);
      assert(!seen.has(member), `duplicate member ${member} in ${group.id}`);
      seen.add(member);
      assert(offerIds.has(member), `map ${group.id} references unknown offer ${member}`);
      assert(!byMember.has(member), `${member} is in two map groups`);
      byMember.set(member, group);
    }
  }
  return byMember;
}

function tuple(identity) {
  return KEY_FIELDS.map((key) => (identity[key] == null ? '' : String(identity[key]))).join('\u001f');
}

function missingOf(identity) {
  const reasons = [];
  if (!identity.brand) reasons.push('missing-brand');
  if (!identity.material) reasons.push('missing-material');
  if (!identity.color) reasons.push('missing-color');
  if (!(identity.weightGrams > 0)) reasons.push('missing-weight');
  if (identity.diameterMm == null || !Number.isFinite(identity.diameterMm)) reasons.push('missing-diameter');
  if (identity.form !== 'spool' && identity.form !== 'refill') reasons.push('unknown-form');
  return reasons;
}

function escapeToken(value) {
  return value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
}

export function textHasRefill(text, tokens = FORM_TOKENS) {
  if (typeof text !== 'string' || text === '') return false;
  const words = Array.isArray(tokens.wholeWords) ? tokens.wholeWords : [];
  const phrases = Array.isArray(tokens.phrases) ? tokens.phrases : [];
  for (const token of [...phrases, ...words]) {
    if (typeof token !== 'string' || token.trim() === '') continue;
    const pattern = new RegExp(`(?:^|[^\\p{L}\\p{N}])${escapeToken(token)}(?:$|[^\\p{L}\\p{N}])`, 'iu');
    if (pattern.test(text)) return true;
  }
  return false;
}

function shopCardId(shopId, identity) {
  const body = KEY_FIELDS.map((key) => encodeURIComponent(identity[key] == null ? '' : String(identity[key]))).join('*');
  return `shop:${shopId}:${body}`;
}

function presentValues(members, read) {
  const values = [];
  for (const member of members) {
    const value = read(member);
    if (value == null || value === '') continue;
    if (!values.some((item) => item === value)) values.push(value);
  }
  values.sort((a, b) => String(a).localeCompare(String(b), 'cs'));
  return values;
}

function fold(value) {
  return (value ?? '').normalize('NFC').toLocaleLowerCase('cs-CZ');
}

function oldGroupKey(offer) {
  return [fold(offer.material), fold(offer.color), String(offer.weightGrams)].join('|');
}

function formatWeight(grams) {
  if (grams >= 1000 && grams % 50 === 0) return `${String(grams / 1000).replace('.', ',')} kg`;
  return `${String(grams).replace('.', ',')} g`;
}

function formatDiameter(mm) {
  return `${String(mm).replace('.', ',')} mm`;
}

export function cardTitle(identity) {
  const parts = [identity.brand, identity.productLine, identity.material, identity.color].filter((part) => part);
  if (identity.weightGrams > 0) parts.push(formatWeight(identity.weightGrams));
  if (identity.diameterMm != null) parts.push(formatDiameter(identity.diameterMm));
  if (identity.form === 'spool') parts.push('cívka');
  else if (identity.form === 'refill') parts.push('refill');
  else if (typeof identity.form === 'string' && identity.form !== '') parts.push(identity.form);
  return parts.join(' · ');
}

function countValues(offers, read) {
  return new Set(offers.map(read).filter((value) => value)).size;
}

/**
 * @param {object[]} offers preview rows. productName is ignored for identity.
 * @param {object} tables aliases, productMap, productLines, factsById
 */
export function normalizeOffers(offers, tables) {
  const { aliases, productMap, productLines, factsById } = tables;
  const formTokens = tables.formTokens ?? FORM_TOKENS;
  const diameterDefaults = new Map((tables.diameterDefaults ?? []).map((row) => [row.shopId, row.diameterMm]));
  validateAliases(aliases);
  const offerIds = new Set(offers.map((offer) => offer.productId));
  assert(offerIds.size === offers.length, 'duplicate productId in preview');
  validateLines(productLines, offerIds);
  const groupByMember = validateMap(productMap, offerIds);

  const rows = offers.map((offer) => {
    const fact = factsById[offer.productId] ?? {};
    const group = groupByMember.get(offer.productId) ?? null;
    const extraReasons = [];
    if (fact.invalidEan) extraReasons.push('invalid-ean');
    const tokenRefill = textHasRefill(offer.productName, formTokens) || textHasRefill(fact.categoryText, formTokens);
    let form = tokenRefill ? 'refill' : 'spool';
    let formSource = tokenRefill ? 'token' : 'default';
    if ((fact.form === 'spool' || fact.form === 'refill') && fact.form !== form) {
      extraReasons.push('form-param-disagrees');
    }
    let productLine = productLines.byOfferId[offer.productId] || (fact.ean ? productLines.byEan[fact.ean] : null) || null;
    if (group?.productLine) {
      if (productLine && productLine !== group.productLine) extraReasons.push('map-line-conflict');
      else productLine = group.productLine;
    }
    if (group?.form) {
      if (formSource === 'token' && form !== group.form) extraReasons.push('map-form-conflict');
      else {
        form = group.form;
        formSource = 'map';
      }
    }
    let diameterMm = typeof offer.diameterMm === 'number' && Number.isFinite(offer.diameterMm) ? offer.diameterMm : null;
    if (diameterMm == null && diameterDefaults.has(offer.shopId)) diameterMm = diameterDefaults.get(offer.shopId);
    const identity = {
      brand: applyAlias(aliases.brand, offer.brand),
      productLine,
      material: applyAlias(aliases.material, offer.material),
      color: applyAlias(aliases.color, offer.color),
      weightGrams: offer.weightGrams,
      diameterMm,
      form: form === 'spool' || form === 'refill' ? form : null,
    };
    return {
      offer,
      fact,
      group,
      identity,
      reasons: [...new Set([...missingOf(identity), ...extraReasons])],
      cardId: `offer:${offer.productId}`,
      match: 'single',
    };
  });

  const byId = new Map(rows.map((row) => [row.offer.productId, row]));

  for (const group of productMap.groups) {
    const members = group.members.map((id) => byId.get(id));
    const tuples = new Set(members.map((row) => tuple(row.identity)));
    const blocked = members.some((row) => missingOf(row.identity).length > 0 || row.reasons.includes('form-conflict') || row.reasons.includes('map-line-conflict') || row.reasons.includes('map-form-conflict'));
    if (!blocked && tuples.size === 1) {
      for (const row of members) {
        row.cardId = `map:${group.id}`;
        row.match = 'map';
      }
    } else {
      const conflict = tuples.size > 1;
      for (const row of members) {
        row.reasons = [...new Set([...row.reasons, conflict ? 'map-field-conflict' : 'map-not-merged'])];
      }
    }
  }

  const eanClusters = new Map();
  for (const row of rows) {
    if (!row.fact.ean || row.match === 'map') continue;
    const list = eanClusters.get(row.fact.ean) ?? [];
    list.push(row);
    eanClusters.set(row.fact.ean, list);
  }

  const eanGroupReports = [];
  for (const [ean, members] of eanClusters) {
    if (members.length < 2) continue;
    const shops = [...new Set(members.map((row) => row.offer.shopId))].sort();
    const ready = members.every((row) => row.identity.brand && row.identity.material && row.identity.weightGrams > 0);
    const sameCore = new Set(members.map((row) => [row.identity.brand, row.identity.material, row.identity.weightGrams].join('\u001f'))).size === 1;
    if (ready && sameCore) {
      for (const row of members) {
        row.cardId = `ean:${ean}`;
        row.match = 'ean';
      }
      eanGroupReports.push({
        ean,
        status: 'merged',
        shops,
        offerIds: members.map((row) => row.offer.productId).sort(),
        reasons: [],
      });
    } else {
      const reasons = ['ean-conflict'];
      if (new Set(members.map((row) => row.identity.brand ?? '')).size > 1) reasons.push('ean-brand-conflict');
      if (new Set(members.map((row) => row.identity.material ?? '')).size > 1) reasons.push('ean-material-conflict');
      if (new Set(members.map((row) => row.identity.weightGrams ?? '')).size > 1) reasons.push('ean-weight-conflict');
      for (const row of members) row.reasons = [...new Set([...row.reasons, ...reasons])].sort();
      eanGroupReports.push({
        ean,
        status: 'blocked',
        shops,
        offerIds: members.map((row) => row.offer.productId).sort(),
        reasons: [...reasons].sort(),
        offers: members.map((row) => ({
          offerId: row.offer.productId,
          shopId: row.offer.shopId,
          productName: row.offer.productName,
          reasons: row.reasons,
        })).sort((a, b) => a.offerId.localeCompare(b.offerId)),
      });
    }
  }
  eanGroupReports.sort((a, b) => a.ean.localeCompare(b.ean));

  const shopBuckets = new Map();
  for (const row of rows) {
    if (row.match !== 'single' || missingOf(row.identity).length > 0) continue;
    const cardId = shopCardId(row.offer.shopId, row.identity);
    const list = shopBuckets.get(cardId) ?? [];
    list.push(row);
    shopBuckets.set(cardId, list);
  }
  for (const [cardId, members] of shopBuckets) {
    if (members.length < 2) continue;
    for (const row of members) {
      row.cardId = cardId;
      row.match = 'shop';
    }
  }

  const cardBuckets = new Map();
  for (const row of rows) {
    const list = cardBuckets.get(row.cardId) ?? [];
    list.push(row);
    cardBuckets.set(row.cardId, list);
  }

  const cards = [...cardBuckets.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([cardId, members]) => {
    const weights = new Set(members.map((row) => row.identity.weightGrams));
    assert(weights.size === 1, `${cardId} mixed weights`);
    if (members.length > 1 && members[0].match !== 'ean') {
      assert(new Set(members.map((row) => tuple(row.identity))).size === 1, `${cardId} merged unequal keys`);
    }
    if (members[0].match === 'ean') {
      assert(new Set(members.map((row) => row.identity.brand)).size === 1, `${cardId} mixed brands`);
      assert(new Set(members.map((row) => row.identity.material)).size === 1, `${cardId} mixed materials`);
    }
    const lines = members.map((row) => row.identity.productLine);
    const productLine = lines.every((line) => line && line === lines[0]) ? lines[0] : null;
    const colors = presentValues(members, (row) => row.identity.color);
    const diameters = presentValues(members, (row) => row.identity.diameterMm);
    const forms = presentValues(members, (row) => row.identity.form);
    const identity = {
      brand: members[0].identity.brand,
      productLine,
      material: members[0].identity.material,
      color: colors.length === 1 ? colors[0] : (colors.length > 1 ? colors.join(' / ') : null),
      weightGrams: members[0].identity.weightGrams,
      diameterMm: diameters.length === 1 ? diameters[0] : null,
      form: forms.length === 1 ? forms[0] : null,
    };
    return {
      cardId,
      match: members[0].match,
      ean: members[0].match === 'ean' ? members[0].fact.ean : null,
      brand: members[0].identity.brand,
      productLine,
      material: members[0].identity.material,
      color: colors.length === 1 ? colors[0] : null,
      colorVariants: colors.length > 1 ? colors : undefined,
      weightGrams: identity.weightGrams,
      diameterMm: identity.diameterMm,
      form: identity.form,
      shopIds: [...new Set(members.map((row) => row.offer.shopId))].sort(),
      title: cardTitle(identity),
      offerIds: members.map((row) => row.offer.productId).sort(),
    };
  });

  const reasonCounts = new Map();
  const reviewOffers = [];
  for (const row of rows) {
    if (row.reasons.length === 0) continue;
    const reasons = [...row.reasons].sort();
    for (const reason of reasons) reasonCounts.set(reason, (reasonCounts.get(reason) ?? 0) + 1);
    reviewOffers.push({
      offerId: row.offer.productId,
      shopId: row.offer.shopId,
      productName: row.offer.productName,
      ean: row.fact.ean ?? null,
      cardId: row.cardId,
      reasons,
    });
  }
  reviewOffers.sort((a, b) => a.offerId.localeCompare(b.offerId));

  const oldBuckets = new Map();
  for (const offer of offers) {
    const key = oldGroupKey(offer);
    const list = oldBuckets.get(key) ?? [];
    list.push(offer);
    oldBuckets.set(key, list);
  }

  const splitSource = [...oldBuckets.values()]
    .filter((list) => new Set(list.map((offer) => offer.brand).filter(Boolean)).size >= 3)
    .sort((a, b) => b.length - a.length || a[0].productId.localeCompare(b[0].productId))[0];

  const splitExamples = [];
  if (splitSource) {
    const picked = [];
    const seenBrands = new Set();
    for (const offer of [...splitSource].sort((a, b) => (a.brand ?? '').localeCompare(b.brand ?? '', 'cs') || a.productId.localeCompare(b.productId))) {
      if (!offer.brand || seenBrands.has(offer.brand)) continue;
      seenBrands.add(offer.brand);
      const row = byId.get(offer.productId);
      picked.push({
        offerId: offer.productId,
        shopId: offer.shopId,
        brand: offer.brand,
        productName: offer.productName,
        cardId: row.cardId,
        title: cardTitle(row.identity),
      });
      if (picked.length === 3) break;
    }
    splitExamples.push({
      previousKey: oldGroupKey(splitSource[0]),
      previousOffers: splitSource.length,
      previousBrands: new Set(splitSource.map((offer) => offer.brand).filter(Boolean)).size,
      cards: picked,
    });
  }

  const matched = (match) => rows.filter((row) => row.match === match);
  const crossShopEanCards = cards.filter((card) => card.match === 'ean' && card.shopIds.length > 1);
  const crossShopExamples = [...crossShopEanCards]
    .sort((a, b) => b.offerIds.length - a.offerIds.length || a.cardId.localeCompare(b.cardId))
    .slice(0, 3)
    .map((card) => ({
      cardId: card.cardId,
      title: card.title,
      ean: card.ean,
      shops: card.shopIds,
      offers: card.offerIds.map((offerId) => {
        const row = byId.get(offerId);
        return { offerId, shopId: row.offer.shopId, productName: row.offer.productName };
      }),
    }));
  const offerFields = Object.fromEntries(rows.map((row) => [row.offer.productId, {
    brand: row.identity.brand,
    productLine: row.identity.productLine,
    material: row.identity.material,
    color: row.identity.color,
    diameterMm: row.identity.diameterMm,
    form: row.identity.form,
  }]).sort((a, b) => a[0].localeCompare(b[0])));
  const summary = {
    offers: offers.length,
    cardsBefore: oldBuckets.size,
    cardsAfter: cards.length,
    offersMatchedByEan: matched('ean').length,
    offersMatchedAcrossShopsByEan: rows.filter((row) => row.match === 'ean' && crossShopEanCards.some((card) => card.cardId === row.cardId)).length,
    eanGroupsMerged: cards.filter((card) => card.match === 'ean').length,
    eanGroupsCrossShop: eanGroupReports.filter((group) => group.shops.length > 1).length,
    eanGroupsCrossShopMerged: eanGroupReports.filter((group) => group.status === 'merged' && group.shops.length > 1).length,
    eanGroupsCrossShopBlocked: eanGroupReports.filter((group) => group.status === 'blocked' && group.shops.length > 1).length,
    eanGroupsBlocked: eanGroupReports.filter((group) => group.status === 'blocked').length,
    eanGroupsSeen: eanGroupReports.length,
    offersSharingShopKey: matched('shop').length,
    shopKeyCards: cards.filter((card) => card.match === 'shop').length,
    offersMatchedByMap: matched('map').length,
    mapGroupsMerged: cards.filter((card) => card.match === 'map').length,
    reviewOffers: reviewOffers.length,
    brandsBefore: countValues(offers, (offer) => offer.brand),
    brandsAfter: countValues(rows, (row) => row.identity.brand),
    materialsBefore: countValues(offers, (offer) => offer.material),
    materialsAfter: countValues(rows, (row) => row.identity.material),
    colorsBefore: countValues(offers, (offer) => offer.color),
    colorsAfter: countValues(rows, (row) => row.identity.color),
    reasons: Object.fromEntries([...reasonCounts.entries()].sort((a, b) => a[0].localeCompare(b[0]))),
  };

  const cardsDoc = {
    schemaVersion: 1,
    sourcePreview: 'src/data/filament-preview.generated.json',
    cards,
    offerFields,
  };
  const reviewDoc = {
    schemaVersion: 1,
    summary,
    splitExamples,
    crossShopExamples,
    eanGroups: eanGroupReports,
    offers: reviewOffers,
  };
  return {
    cardsDoc,
    reviewDoc,
    reviewMd: renderReview(reviewDoc),
    reviewCsv: renderReviewCsv(reviewDoc),
    byOfferId: new Map(rows.map((row) => [row.offer.productId, row.cardId])),
  };
}

function renderReview(review) {
  const { summary, splitExamples, crossShopExamples = [], eanGroups } = review;
  const reasonLines = Object.entries(summary.reasons)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([reason, count]) => `| ${reason} | ${count} |`);
  const exampleBlocks = splitExamples.map((example) => {
    const cards = example.cards
      .map((card) => `- \`${card.cardId}\` — ${card.title} (${card.shopId}, ${card.productName})`)
      .join('\n');
    return [
      `Původní klíč \`${example.previousKey}\`: ${example.previousOffers} nabídek, ${example.previousBrands} značek.`,
      cards,
    ].join('\n');
  });
  const crossBlocks = crossShopExamples.map((example) => {
    const offers = example.offers.map((offer) => `- ${offer.shopId} \`${offer.offerId}\` — ${offer.productName}`).join('\n');
    return [`\`${example.cardId}\` — ${example.title} (EAN ${example.ean})`, offers].join('\n');
  });
  const blocked = eanGroups.filter((group) => group.status === 'blocked');
  const blockedLines = blocked.map((group) => {
    const names = (group.offers ?? []).map((offer) => `${offer.offerId} (${offer.productName})`).join('; ');
    return `- EAN ${group.ean} — ${group.shops.join(', ')} — ${group.reasons.join(', ')} — ${names}`;
  });
  return [
    '# Revize identity filamentu',
    '',
    'Vygenerováno `scripts/filament-normalize.mjs`. Nabídka bez značky, materiálu, barvy, hmotnosti nebo ověřeného průměru zůstává na vlastní dlaždici.',
    'Klíč je značka, materiál, barva, hmotnost, průměr a balení. Produktová řada se přidá, jen když je v tabulce. Mezi obchody spojuje stejné EAN (značka, materiál a hmotnost po aliasu sedí) nebo `product-map.json`. V jednom obchodě stejný klíč sdílí dlaždici.',
    '',
    '## Souhrn',
    '',
    `| | počet |`,
    `| --- | ---: |`,
    `| nabídky | ${summary.offers} |`,
    `| dlaždice dřív (materiál + barva + hmotnost) | ${summary.cardsBefore} |`,
    `| dlaždice teď | ${summary.cardsAfter} |`,
    `| nabídky spojené podle EAN | ${summary.offersMatchedByEan} |`,
    `| z toho mezi obchody | ${summary.offersMatchedAcrossShopsByEan} |`,
    `| skupiny EAN mezi obchody spojené / nespojené | ${summary.eanGroupsCrossShopMerged} / ${summary.eanGroupsCrossShopBlocked} |`,
    `| skupiny EAN spojené | ${summary.eanGroupsMerged} |`,
    `| skupiny EAN viděné a nespojené | ${summary.eanGroupsBlocked} |`,
    `| nabídky na společné dlaždici v jednom obchodě | ${summary.offersSharingShopKey} |`,
    `| nabídky spojené podle mapy | ${summary.offersMatchedByMap} |`,
    `| skupiny mapy spojené | ${summary.mapGroupsMerged} |`,
    `| nabídky v revizi | ${summary.reviewOffers} |`,
    `| značky před aliasem / po aliasu | ${summary.brandsBefore} / ${summary.brandsAfter} |`,
    `| materiály před aliasem / po aliasu | ${summary.materialsBefore} / ${summary.materialsAfter} |`,
    `| barvy před aliasem / po aliasu | ${summary.colorsBefore} / ${summary.colorsAfter} |`,
    '',
    '## Důvody revize',
    '',
    '| důvod | nabídek |',
    '| --- | ---: |',
    ...reasonLines,
    '',
    '## EAN přes víc obchodů',
    '',
    crossBlocks.join('\n\n') || 'Žádné.',
    '',
    '## Příklad rozdělené dlaždice',
    '',
    exampleBlocks.join('\n\n') || 'Žádná smíšená dlaždice.',
    '',
    '## EAN, které se nespojilo',
    '',
    blockedLines.join('\n') || 'Žádné.',
    '',
    'Aliasové návrhy, které se neaplikují, jsou v `alias-candidates.json`.',
    'Celý seznam nabídek v revizi je v `review.csv` a `review.json`.',
    '',
  ].join('\n');
}

function csvCell(value) {
  const text = value == null ? '' : String(value);
  if (/[",\n\r]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
  return text;
}

export function renderReviewCsv(review) {
  const lines = ['offerId,shopId,ean,cardId,reasons,productName'];
  for (const offer of review.offers) {
    lines.push([
      offer.offerId,
      offer.shopId,
      offer.ean ?? '',
      offer.cardId,
      offer.reasons.join('|'),
      offer.productName,
    ].map(csvCell).join(','));
  }
  return `${lines.join('\n')}\n`;
}

export function historySnapshot(date, source, offers, byOfferId) {
  assert(/^\d{4}-\d{2}-\d{2}$/.test(date), `bad history date ${date}`);
  const rows = offers.map((offer) => {
    const cardId = byOfferId.get(offer.productId);
    assert(cardId, `history missing card for ${offer.productId}`);
    assert(typeof offer.price === 'number' && offer.price > 0, `price ${offer.productId}`);
    assert(typeof offer.weightGrams === 'number' && offer.weightGrams > 0, `weight ${offer.productId}`);
    assert(typeof offer.inStock === 'boolean', `inStock ${offer.productId}`);
    assert(offer.currency === 'CZK', `currency ${offer.productId}`);
    assert(offer.affiliateUrl === undefined, `history refuses affiliateUrl on ${offer.productId}`);
    return {
      offerId: offer.productId,
      cardId,
      shopId: offer.shopId,
      price: offer.price,
      weightGrams: offer.weightGrams,
      pricePerKg: offer.price / (offer.weightGrams / 1000),
      inStock: offer.inStock,
      currency: 'CZK',
    };
  }).sort((a, b) => a.offerId.localeCompare(b.offerId));

  const groups = new Map();
  for (const row of rows) {
    const list = groups.get(row.cardId) ?? [];
    list.push(row);
    groups.set(row.cardId, list);
  }
  const products = [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([cardId, list]) => {
    const stocked = list.filter((row) => row.inStock);
    const pool = stocked.length > 0 ? stocked : list;
    return {
      cardId,
      shopIds: [...new Set(list.map((row) => row.shopId))].sort(),
      offerIds: list.map((row) => row.offerId).sort(),
      pricePerKgMin: Math.min(...pool.map((row) => row.pricePerKg)),
      inStock: stocked.length > 0,
    };
  });

  return { date, source, offerCount: rows.length, offers: rows, products };
}

function selfTest() {
  const aliases = {
    brand: { ELEGOO: 'Elegoo' },
    material: { 'PLA +': 'PLA+' },
    color: { Black: 'černá', Transparent: 'transparentní' },
  };
  const base = {
    brand: 'Spectrum',
    material: 'PLA',
    color: 'černá',
    weightGrams: 1000,
    diameterMm: 1.75,
    price: 200,
    inStock: true,
    currency: 'CZK',
    category: 'filament',
  };
  const facts = {
    'shop-a:1': { ean: '8590000000001', form: 'spool' },
    'shop-b:1': { ean: '8590000000001', form: 'spool' },
  };
  const lines = { version: 1, byOfferId: {}, byEan: { '8590000000001': 'PLA Basic' } };
  const offers = [
    { ...base, productId: 'shop-a:1', shopId: 'shop-a', productName: 'název 1 kg se nečte', shopName: 'A' },
    { ...base, productId: 'shop-b:1', shopId: 'shop-b', productName: 'jiný název 2 kg', price: 180, shopName: 'B' },
  ];
  const merged = normalizeOffers(offers, { aliases, productMap: { version: 1, groups: [] }, productLines: lines, factsById: facts });
  assert(merged.cardsDoc.cards.length === 1, 'same EAN and full key should be one card');
  assert(merged.cardsDoc.cards[0].match === 'ean', 'merge kind is ean');
  assert(merged.cardsDoc.cards[0].productLine === 'PLA Basic', 'line comes from the EAN table');
  assert(merged.reviewDoc.summary.offersMatchedByEan === 2, 'both offers count as EAN matches');

  const conflict = normalizeOffers(
    [
      { ...base, productId: 'shop-a:1', shopId: 'shop-a', productName: '1 kg', weightGrams: 1000 },
      { ...base, productId: 'shop-b:1', shopId: 'shop-b', productName: '1 kg', weightGrams: 500 },
    ],
    { aliases, productMap: { version: 1, groups: [] }, productLines: lines, factsById: facts },
  );
  assert(conflict.cardsDoc.cards.length === 2, 'different weight must not share an EAN card');
  assert(conflict.reviewDoc.eanGroups[0].status === 'blocked', 'conflicting EAN is blocked');
  assert(conflict.reviewDoc.eanGroups[0].reasons.includes('ean-conflict'), 'conflict reason recorded');
  assert(conflict.cardsDoc.cards.every((card) => card.weightGrams === 1000 || card.weightGrams === 500), 'weight stays the field value');

  const lineOptional = normalizeOffers(
    [
      { ...base, productId: 'shop-a:2', shopId: 'shop-a', productName: 'PLA Black refill 1 kg' },
      { ...base, productId: 'shop-b:2', shopId: 'shop-b', productName: 'PLA Black spool 1 kg' },
    ],
    {
      aliases,
      productMap: { version: 1, groups: [] },
      productLines: { version: 1, byOfferId: {}, byEan: {} },
      factsById: {
        'shop-a:2': { ean: '8590000000002', form: null },
        'shop-b:2': { ean: '8590000000002', form: null },
      },
    },
  );
  assert(lineOptional.cardsDoc.cards.length === 1, 'missing product line must not block an agreeing EAN');
  assert(lineOptional.cardsDoc.cards[0].match === 'ean', 'agreeing EAN is one card');
  assert(lineOptional.cardsDoc.cards[0].productLine == null, 'unknown line stays empty');
  assert(lineOptional.cardsDoc.offerFields['shop-a:2'].form === 'refill', 'refill token marks refill');
  assert(lineOptional.cardsDoc.offerFields['shop-b:2'].form === 'spool', 'no token stays spool');
  assert(lineOptional.cardsDoc.offerFields['shop-a:2'].weightGrams === undefined, 'weight is not copied from the title');
  assert(lineOptional.cardsDoc.cards[0].weightGrams === 1000, 'title kilograms are ignored');

  const materialConflict = normalizeOffers(
    [
      { ...base, productId: 'shop-a:5', shopId: 'shop-a', productName: 'PETG-CF', material: 'PETG-CF' },
      { ...base, productId: 'shop-b:5', shopId: 'shop-b', productName: 'PETG', material: 'PETG' },
    ],
    {
      aliases,
      productMap: { version: 1, groups: [] },
      productLines: { version: 1, byOfferId: {}, byEan: {} },
      factsById: {
        'shop-a:5': { ean: '8590000000005' },
        'shop-b:5': { ean: '8590000000005' },
      },
    },
  );
  assert(materialConflict.cardsDoc.cards.length === 2, 'different material must not share an EAN');
  assert(materialConflict.reviewDoc.eanGroups[0].reasons.includes('ean-material-conflict'), 'material conflict is named');

  const colorStillMerges = normalizeOffers(
    [
      { ...base, productId: 'shop-a:6', shopId: 'shop-a', productName: 'PLA', color: 'zelená' },
      { ...base, productId: 'shop-b:6', shopId: 'shop-b', productName: 'PLA', color: 'Olivově zelená' },
    ],
    {
      aliases,
      productMap: { version: 1, groups: [] },
      productLines: { version: 1, byOfferId: {}, byEan: {} },
      factsById: {
        'shop-a:6': { ean: '8590000000006' },
        'shop-b:6': { ean: '8590000000006' },
      },
    },
  );
  assert(colorStillMerges.cardsDoc.cards.length === 1, 'color disagreement does not block an EAN');
  assert(colorStillMerges.cardsDoc.cards[0].color == null, 'disagreeing colors are not collapsed');

  const sameShop = normalizeOffers(
    [
      { ...base, productId: 'shop-a:7', shopId: 'shop-a', productName: 'PLA černá', price: 200 },
      { ...base, productId: 'shop-a:8', shopId: 'shop-a', productName: 'PLA černá druhý řádek', price: 180 },
    ],
    { aliases, productMap: { version: 1, groups: [] }, productLines: { version: 1, byOfferId: {}, byEan: {} }, factsById: {} },
  );
  assert(sameShop.cardsDoc.cards.length === 1 && sameShop.cardsDoc.cards[0].match === 'shop', 'one shop shares a full key');

  const crossKey = normalizeOffers(
    [
      { ...base, productId: 'shop-a:9', shopId: 'shop-a', productName: 'PLA černá' },
      { ...base, productId: 'shop-b:9', shopId: 'shop-b', productName: 'PLA černá' },
    ],
    { aliases, productMap: { version: 1, groups: [] }, productLines: { version: 1, byOfferId: {}, byEan: {} }, factsById: {} },
  );
  assert(crossKey.cardsDoc.cards.length === 2, 'the same key in two shops stays split without an EAN');

  assert(textHasRefill('Heureka Náplně a barvy do tiskáren') === false, 'Náplně is not the word náplň');
  assert(textHasRefill('Spectrum ReFill PLA') === true, 'ReFill is a refill token');
  assert(textHasRefill('vlákno bez cívky') === true, 'bez cívky is a refill phrase');

  const diameterDefault = normalizeOffers(
    [
      { ...base, productId: 'brno:1', shopId: 'filamenty-brno', productName: 'PLA', diameterMm: undefined },
      { ...base, productId: 'brno:2', shopId: 'filamenty-brno', productName: 'PLA', diameterMm: undefined },
      { ...base, productId: 'fil:1', shopId: '3dfil', productName: 'PLA 1.75 mm', diameterMm: undefined },
      { ...base, productId: 'fil:2', shopId: '3dfil', productName: 'PLA 1.75 mm jiný', diameterMm: undefined },
    ],
    {
      aliases,
      productMap: { version: 1, groups: [] },
      productLines: { version: 1, byOfferId: {}, byEan: {} },
      factsById: {},
      diameterDefaults: [{ shopId: 'filamenty-brno', diameterMm: 1.75 }],
    },
  );
  assert(diameterDefault.cardsDoc.offerFields['brno:1'].diameterMm === 1.75, 'verified shop default fills a missing diameter');
  assert(diameterDefault.cardsDoc.cards.some((card) => card.match === 'shop' && card.offerIds.includes('brno:1')), 'defaulted diameters can share a shop card');
  assert(diameterDefault.cardsDoc.offerFields['fil:1'].diameterMm == null, 'a shop without a verified default keeps an empty diameter');
  assert(diameterDefault.cardsDoc.cards.filter((card) => card.offerIds.includes('fil:1') || card.offerIds.includes('fil:2')).length === 2, 'unverified diameters stay on separate cards');

  const silk = applyAlias({ SILK: 'Silk', silk: 'Silk' }, 'SILK');
  assert(silk === 'Silk', 'SILK casing does not become PLA Silk');

  const mapped = normalizeOffers(
    [
      { ...base, productId: 'shop-a:3', shopId: 'shop-a', brand: 'ELEGOO', productName: 'Elegoo PLA Black' },
      { ...base, productId: 'shop-b:3', shopId: 'shop-b', brand: 'Elegoo', productName: 'Elegoo PLA černá' },
    ],
    {
      aliases,
      productMap: {
        version: 1,
        groups: [{ id: 'elegoo-pla-black-1kg', productLine: 'PLA Basic', form: 'spool', members: ['shop-a:3', 'shop-b:3'] }],
      },
      productLines: { version: 1, byOfferId: {}, byEan: {} },
      factsById: {},
    },
  );
  assert(mapped.cardsDoc.cards.length === 1 && mapped.cardsDoc.cards[0].match === 'map', 'explicit map merges');
  assert(mapped.cardsDoc.cards[0].brand === 'Elegoo', 'ELEGOO alias applies inside the map');
  assert(mapped.reviewDoc.summary.offersMatchedByMap === 2, 'map match count');

  const mapConflict = normalizeOffers(
    [
      { ...base, productId: 'shop-a:4', shopId: 'shop-a', color: 'černá' },
      { ...base, productId: 'shop-b:4', shopId: 'shop-b', color: 'bílá' },
    ],
    {
      aliases,
      productMap: {
        version: 1,
        groups: [{ id: 'bad-pair', productLine: 'PLA Basic', form: 'spool', members: ['shop-a:4', 'shop-b:4'] }],
      },
      productLines: { version: 1, byOfferId: {}, byEan: {} },
      factsById: {},
    },
  );
  assert(mapConflict.cardsDoc.cards.length === 2, 'map must not merge different colors');
  assert(mapConflict.reviewDoc.offers.some((offer) => offer.reasons.includes('map-field-conflict')), 'map conflict is reviewed');

  let chained = false;
  try {
    validateAliases({ brand: { A: 'B', B: 'C' }, material: {}, color: {} });
  } catch {
    chained = true;
  }
  assert(chained, 'alias chains are rejected');

  const history = historySnapshot('2026-10-21', 'test', offers, merged.byOfferId);
  assert(history.offers[0].pricePerKg === history.offers[0].price / (history.offers[0].weightGrams / 1000), 'Kč/kg is price over kilograms');
  assert(!('shippingPrice' in history.offers[0]), 'history does not invent shipping');
  assert(!('affiliateUrl' in history.offers[0]), 'history does not invent affiliateUrl');
  console.log('Filament normalize self-test OK.');
}

async function buildFromRepo() {
  const preview = await readJson(PREVIEW_PATH);
  const factsDoc = await readJson(FACTS_PATH);
  const aliases = await readJson(ALIASES_PATH);
  const candidates = await readJson(CANDIDATES_PATH);
  const productMap = await readJson(MAP_PATH);
  const productLines = await readJson(LINES_PATH);
  const rules = await readJson(RULES_PATH);
  assert(candidates.applied === false, 'alias-candidates.json is a review list, not an applied alias table');
  assert(JSON.stringify(rules.refillTokens) === JSON.stringify(FORM_TOKENS), 'refill tokens drifted from field-rules.json');
  assert(Array.isArray(rules.diameterDefaults), 'diameter defaults missing');
  for (const row of rules.diameterDefaults) {
    assert(row.diameterMm === 1.75 && row.rowsWithDiameter > 0 && row.distinctMm.length === 1 && row.distinctMm[0] === 1.75, `diameter default ${row.shopId} is not a verified 1.75`);
  }
  assert(preview._generated === true && Array.isArray(preview.offers), 'preview catalog missing');
  assert(factsDoc.schemaVersion === 1 && factsDoc.offers, 'facts catalog missing');
  const previewIds = new Set(preview.offers.map((offer) => offer.productId));
  const factIds = new Set(Object.keys(factsDoc.offers));
  assert(previewIds.size === factIds.size && [...previewIds].every((id) => factIds.has(id)), 'facts offer ids drifted from the preview');
  return normalizeOffers(preview.offers, {
    aliases,
    productMap,
    productLines,
    factsById: factsDoc.offers,
    diameterDefaults: rules.diameterDefaults,
  });
}

async function main() {
  selfTest();
  const check = process.argv.includes('--check');
  const built = await buildFromRepo();
  const cardsText = `${JSON.stringify(built.cardsDoc, null, 2)}\n`;
  const reviewText = `${JSON.stringify(built.reviewDoc, null, 2)}\n`;
  if (check) {
    const [cards, reviewJson, reviewMd, reviewCsv, history] = await Promise.all([
      readFile(CARDS_PATH, 'utf8'),
      readFile(REVIEW_JSON_PATH, 'utf8'),
      readFile(REVIEW_MD_PATH, 'utf8'),
      readFile(REVIEW_CSV_PATH, 'utf8'),
      readJson(HISTORY_PATH),
    ]);
    assert(cards === cardsText, 'filament-cards.generated.json is stale');
    assert(reviewJson === reviewText, 'review.json is stale');
    assert(reviewMd === built.reviewMd, 'review.md is stale');
    assert(reviewCsv === built.reviewCsv, 'review.csv is stale');
    const dates = history.snapshots.map((snapshot) => snapshot.date);
    assert(dates.join() === '2026-10-03,2026-10-21', `history dates drifted: ${dates.join()}`);
    const preview = await readJson(PREVIEW_PATH);
    const current = history.snapshots.find((snapshot) => snapshot.date === '2026-10-21');
    assert(current.offers.length === preview.offers.length, 'history offer count drifted');
    const previewById = new Map(preview.offers.map((offer) => [offer.productId, offer]));
    for (const row of current.offers) {
      const source = previewById.get(row.offerId);
      assert(source, `history offer ${row.offerId} is not in the preview`);
      assert(source.price === row.price && source.weightGrams === row.weightGrams, `history price drifted for ${row.offerId}`);
      assert(row.pricePerKg === row.price / (row.weightGrams / 1000), `Kč/kg drifted for ${row.offerId}`);
      assert(row.cardId === built.byOfferId.get(row.offerId), `history cardId drifted for ${row.offerId}`);
      assert(!('shippingPrice' in row) && !('affiliateUrl' in row), 'history row grew a forbidden field');
    }
    console.log(`Normalization check OK. Cards ${built.reviewDoc.summary.cardsBefore} -> ${built.reviewDoc.summary.cardsAfter}.`);
    return;
  }
  await writeFile(CARDS_PATH, cardsText);
  await writeFile(REVIEW_JSON_PATH, reviewText);
  await writeFile(REVIEW_MD_PATH, built.reviewMd);
  await writeFile(REVIEW_CSV_PATH, built.reviewCsv);
  console.log(JSON.stringify(built.reviewDoc.summary));
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
