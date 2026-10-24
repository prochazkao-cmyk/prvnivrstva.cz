#!/usr/bin/env node
/**
 * Read EAN and explicit form rules from the cached Heureka XML that produced
 * the current preview. Does not change prices. Refuses to run when the cache
 * fetchedAt or the VAT price does not match the preview row.
 *
 *   node scripts/extract-filament-facts.mjs
 */

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PREVIEW_PATH = path.join(ROOT, 'src/data/filament-preview.generated.json');
const RULES_PATH = path.join(ROOT, 'src/data/filament-normalization/field-rules.json');
const OUT_PATH = path.join(ROOT, 'src/data/filament-feed-facts.generated.json');
const CACHE_DIR = path.join(ROOT, '.cache/filament-feeds');

function decodeXml(value) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function readTag(block, name) {
  const match = block.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`, 'i'));
  if (!match) return null;
  const text = decodeXml(match[1]).replace(/\s+/g, ' ').trim();
  return text || null;
}

function parseMoney(raw) {
  if (raw == null) return null;
  const text = String(raw).trim().replace(/\s/g, '').replace(',', '.');
  if (!/^\d+(\.\d+)?$/.test(text)) return null;
  const value = Number(text);
  return Number.isFinite(value) ? value : null;
}

function readParams(block) {
  const params = [];
  for (const match of block.matchAll(/<PARAM>([\s\S]*?)<\/PARAM>/gi)) {
    const name = readTag(match[1], 'PARAM_NAME');
    const value = readTag(match[1], 'VAL');
    if (name && value) params.push([name, value]);
  }
  return params;
}

export function indexShop(xml) {
  const items = new Map();
  for (const match of xml.matchAll(/<SHOPITEM>([\s\S]*?)<\/SHOPITEM>/gi)) {
    const block = match[1];
    const itemId = readTag(block, 'ITEM_ID');
    if (!itemId) continue;
    if (items.has(itemId)) throw new Error(`duplicate ITEM_ID ${itemId}`);
    const price = parseMoney(readTag(block, 'PRICE_VAT') ?? readTag(block, 'PRICE'));
    const eanRaw = readTag(block, 'EAN');
    items.set(itemId, {
      price,
      eanRaw,
      params: readParams(block),
      categoryText: readTag(block, 'CATEGORYTEXT'),
    });
  }
  return items;
}

function fold(value) {
  return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function parseDiameter(raw) {
  const text = String(raw).trim().toLowerCase().replace(/\s+/g, '').replace(',', '.');
  const match = text.match(/^(\d+(?:\.\d+)?)(mm)?$/);
  if (!match) return null;
  const value = Number(match[1]);
  if (!Number.isFinite(value) || value < 1 || value > 4) return null;
  return value;
}

function diameterEvidence(xml) {
  const values = new Map();
  let items = 0;
  let range285 = 0;
  for (const match of xml.matchAll(/<SHOPITEM>([\s\S]*?)<\/SHOPITEM>/gi)) {
    items += 1;
    const params = readParams(match[1]);
    if (params.some(([name, value]) => /prumer|diameter/.test(fold(name)) && /2[,.]85/.test(value))) range285 += 1;
    const parsed = [];
    for (const [name, value] of params) {
      if (!/prumer|diameter/.test(fold(name))) continue;
      const diameter = parseDiameter(value);
      if (diameter != null) parsed.push(diameter);
    }
    const unique = [...new Set(parsed)];
    if (unique.length === 1) values.set(unique[0], (values.get(unique[0]) ?? 0) + 1);
  }
  return { items, values, range285 };
}

export function assertDiameterEvidence(shopId, xml, rules) {
  const found = diameterEvidence(xml);
  const allowed = (rules.diameterDefaults ?? []).find((row) => row.shopId === shopId);
  const refused = (rules.diameterNoDefault ?? []).find((row) => row.shopId === shopId);
  if (allowed) {
    const distinct = [...found.values.keys()];
    const rows = found.values.get(allowed.diameterMm) ?? 0;
    if (distinct.length !== 1 || distinct[0] !== allowed.diameterMm || rows < 1) {
      throw new Error(
        `${shopId} diameters ${JSON.stringify(Object.fromEntries(found.values))} do not match the documented ${allowed.diameterMm} default`,
      );
    }
  }
  if (refused) {
    if (shopId === '3dfil' && found.values.size !== 0) {
      throw new Error(`3dfil diameter evidence changed: ${found.values.size} values across ${found.items} items`);
    }
    if (shopId === 'materialpro3d' && found.range285 < 1) {
      throw new Error('materialpro3d no longer has a 2.85 mm diameter range; the no-default rule needs a human check');
    }
  }
  return found;
}

/** Param observation only. The card form is decided later from refill tokens. */
export function observeParamForm(params) {
  const found = [];
  for (const [name, value] of params) {
    if (name === 'Refill' && value === 'Ano') found.push('refill');
    if (name === 'Refill' && value === 'NE') found.push('spool');
    if (name === 'Cívka' && value === 'refill - vlákno bez cívky') found.push('refill');
  }
  const forms = [...new Set(found)];
  if (forms.length > 1) return { form: null, formRule: null, formConflict: true };
  if (forms.length === 1) return { form: forms[0], formRule: found[0] === 'refill' ? 'param-refill' : 'param-spool', formConflict: false };
  return { form: null, formRule: null, formConflict: false };
}

export function normalizeEan(raw) {
  if (!raw) return { ean: null, invalidEan: null };
  const digits = raw.replace(/\s+/g, '');
  if (/^\d{8,14}$/.test(digits)) return { ean: digits, invalidEan: null };
  return { ean: null, invalidEan: raw };
}

async function main() {
  const preview = JSON.parse(await readFile(PREVIEW_PATH, 'utf8'));
  const rulesDoc = JSON.parse(await readFile(RULES_PATH, 'utf8'));
  if (!rulesDoc.refillTokens?.wholeWords?.includes('refill')) throw new Error('field-rules refill tokens missing');

  const byShop = new Map();
  for (const offer of preview.offers) {
    const list = byShop.get(offer.shopId) ?? [];
    list.push(offer);
    byShop.set(offer.shopId, list);
  }

  const shopMeta = [];
  const indexes = new Map();
  for (const [shopId, offers] of byShop) {
    const fetched = [...new Set(offers.map((offer) => offer.fetchedAt))];
    if (fetched.length !== 1) throw new Error(`${shopId} preview has mixed fetchedAt`);
    const meta = JSON.parse(await readFile(path.join(CACHE_DIR, `${shopId}.json`), 'utf8'));
    if (meta.fetchedAt !== fetched[0]) {
      throw new Error(`${shopId} cache fetchedAt ${meta.fetchedAt} != preview ${fetched[0]}`);
    }
    const xml = await readFile(path.join(CACHE_DIR, `${shopId}.xml`), 'utf8');
    assertDiameterEvidence(shopId, xml, rulesDoc);
    indexes.set(shopId, indexShop(xml));
    shopMeta.push({ shopId, fetchedAt: meta.fetchedAt, xmlBytes: Buffer.byteLength(xml) });
  }

  const facts = {};
  let priceMismatches = 0;
  for (const offer of preview.offers) {
    const itemId = offer.productId.slice(offer.shopId.length + 1);
    const item = indexes.get(offer.shopId)?.get(itemId);
    if (!item) throw new Error(`cached XML has no ${offer.productId}`);
    if (item.price == null || Math.abs(item.price - offer.price) > 0.001) {
      priceMismatches += 1;
      if (priceMismatches <= 8) {
        console.error(`price mismatch ${offer.productId}: xml ${item.price} preview ${offer.price}`);
      }
      continue;
    }
    const ruled = observeParamForm(item.params);
    const ean = normalizeEan(item.eanRaw);
    facts[offer.productId] = {
      ean: ean.ean,
      invalidEan: ean.invalidEan,
      form: ruled.formConflict ? null : ruled.form,
      formRule: ruled.formConflict ? null : ruled.formRule,
      formConflict: ruled.formConflict,
      categoryText: item.categoryText,
    };
  }
  if (priceMismatches > 0) {
    throw new Error(`${priceMismatches} cached prices do not match the preview. Facts were not written.`);
  }

  const ordered = Object.fromEntries(Object.entries(facts).sort((a, b) => a[0].localeCompare(b[0])));
  const document = {
    schemaVersion: 1,
    note: 'EAN is the Heureka <EAN> tag. form is only a param observation (Refill=Ano/NE or Cívka refill); the card decides spool/refill from field-rules refill tokens. categoryText is CATEGORYTEXT. Prices were checked against the preview and are not stored here.',
    shops: shopMeta.sort((a, b) => a.shopId.localeCompare(b.shopId)),
    offers: ordered,
  };
  await writeFile(OUT_PATH, `${JSON.stringify(document, null, 2)}\n`);
  const withEan = Object.values(ordered).filter((row) => row.ean).length;
  const withForm = Object.values(ordered).filter((row) => row.form).length;
  console.log(`Wrote facts for ${Object.keys(ordered).length} offers. EAN ${withEan}, form ${withForm}.`);
}

const invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (invokedDirectly) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
