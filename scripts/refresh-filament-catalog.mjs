#!/usr/bin/env node
/**
 * Refresh the three public Heureka feeds and publish the catalog only when
 * the existing quality rules still hold.
 *
 *   node scripts/refresh-filament-catalog.mjs --self-test
 *   node scripts/refresh-filament-catalog.mjs --allow-cache
 *
 * A shop that fails to download, fails the diameter evidence, or drops below
 * 80% of its previous accepted rows keeps that shop's previous offers.
 * The merged catalog is written only when it still has all three shops and
 * at least 80% of the previous rows. Nothing is written when every shop fails
 * or the merged catalog would be empty or collapsed.
 *
 * Exit 0: every shop refreshed and files were written.
 * Exit 2: files were written, but at least one shop kept its previous rows.
 * Exit 1: nothing was written.
 * GitHub Actions commits the written files to main. This script does not push.
 */

import { appendFileSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { assertDiameterEvidence, indexShop, normalizeEan, observeParamForm } from './extract-filament-facts.mjs';
import { downloadShop, readFreshCache, writePreview, writeShopCache } from './fetch-filament-feeds.mjs';
import { looksLikeNonFilament, mapXmlFeed, pricePerKg } from './import-filament-feed.mjs';
import { historySnapshot, normalizeOffers } from './filament-normalize.mjs';
import { PUBLIC_SHOPS, REQUEST_GAP_MS } from './filament-shops.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PREVIEW_PATH = path.join(ROOT, 'src/data/filament-preview.generated.json');
const FACTS_PATH = path.join(ROOT, 'src/data/filament-feed-facts.generated.json');
const CARDS_PATH = path.join(ROOT, 'src/data/filament-cards.generated.json');
const REVIEW_JSON_PATH = path.join(ROOT, 'src/data/filament-normalization/review.json');
const REVIEW_MD_PATH = path.join(ROOT, 'src/data/filament-normalization/review.md');
const REVIEW_CSV_PATH = path.join(ROOT, 'src/data/filament-normalization/review.csv');
const HISTORY_PATH = path.join(ROOT, 'src/data/filament-history.json');
const ALIASES_PATH = path.join(ROOT, 'src/data/filament-normalization/aliases.json');
const CANDIDATES_PATH = path.join(ROOT, 'src/data/filament-normalization/alias-candidates.json');
const MAP_PATH = path.join(ROOT, 'src/data/filament-normalization/product-map.json');
const LINES_PATH = path.join(ROOT, 'src/data/filament-normalization/product-lines.json');
const RULES_PATH = path.join(ROOT, 'src/data/filament-normalization/field-rules.json');
const FACTS_NOTE =
  'EAN is the Heureka <EAN> tag. form is only a param observation (Refill=Ano/NE or Cívka refill); the card decides spool/refill from field-rules refill tokens. categoryText is CATEGORYTEXT. Prices were checked against the preview and are not stored here.';

export const COUNT_FLOOR = 0.8;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

export function countOk(previousCount, nextCount) {
  if (!(nextCount > 0)) return false;
  if (!(previousCount > 0)) return true;
  return nextCount >= Math.ceil(previousCount * COUNT_FLOOR);
}

export function decideCatalog(previousOffers, shopResults) {
  const failures = [];
  const offers = [];
  let refreshed = 0;
  for (const result of shopResults) {
    const previous = previousOffers.filter((offer) => offer.shopId === result.shopId);
    const usable = result.ok === true && Array.isArray(result.offers) && countOk(previous.length, result.offers.length);
    if (usable) {
      offers.push(...result.offers);
      refreshed += 1;
    } else {
      failures.push({
        shopId: result.shopId,
        reason: result.ok ? 'count-collapsed' : result.error || 'feed-failed',
        next: result.offers?.length ?? 0,
        previous: previous.length,
      });
      offers.push(...previous);
    }
  }
  const shopIds = new Set(offers.map((offer) => offer.shopId));
  const complete = PUBLIC_SHOPS.every((shop) => shopIds.has(shop.shopId));
  const previousTotal = previousOffers.length;
  const sizeOk = previousTotal === 0 ? offers.length > 0 : offers.length >= Math.ceil(previousTotal * COUNT_FLOOR);
  let publish = 'no';
  if (refreshed > 0 && complete && sizeOk && offers.length > 0) publish = failures.length === 0 ? 'clean' : 'partial';
  return { offers, failures, refreshed, publish };
}

export function auditOffers(offers) {
  const allowed = new Set(PUBLIC_SHOPS.map((shop) => shop.shopId));
  if (offers.length === 0) throw new Error('catalog is empty');
  for (const offer of offers) {
    if (!allowed.has(offer.shopId)) throw new Error(`unexpected shop ${offer.shopId}`);
    if (!(offer.weightGrams > 0)) throw new Error(`${offer.productId} is missing a feed weight`);
    if (offer.weightConfidence !== 'net' && offer.weightConfidence !== 'unspecified') {
      throw new Error(`${offer.productId} weight was not taken from a feed field`);
    }
    if (offer.category !== 'filament') throw new Error(`${offer.productId} is not filament`);
    if (looksLikeNonFilament(offer.productName ?? '')) throw new Error(`${offer.productId} is a non-filament product`);
    if (!(pricePerKg(offer) > 0)) throw new Error(`${offer.productId} has no price per kg`);
  }
}

function pragueDate(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Prague',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

export function upsertHistory(history, snapshot, today = pragueDate()) {
  const next = {
    schemaVersion: history.schemaVersion ?? 1,
    note: history.note,
    snapshots: history.snapshots.map((item) => item),
  };
  const index = next.snapshots.findIndex((item) => item.date === snapshot.date);
  if (index === -1) next.snapshots.push(snapshot);
  else if (JSON.stringify(next.snapshots[index]) !== JSON.stringify(snapshot)) {
    const latest = [...next.snapshots].sort((a, b) => a.date.localeCompare(b.date)).at(-1);
    if (snapshot.date !== today || latest?.date !== snapshot.date) {
      throw new Error(`Refusing to rewrite history date ${snapshot.date}`);
    }
    next.snapshots[index] = snapshot;
  }
  next.snapshots.sort((a, b) => a.date.localeCompare(b.date));
  return next;
}

function proveRefreshRules() {
  const shops = PUBLIC_SHOPS.map((shop) => shop.shopId);
  const previous = shops.flatMap((shopId) => Array.from({ length: 100 }, (_, index) => ({ shopId, productId: `${shopId}:${index}` })));
  const healthy = shops.map((shopId) => ({
    shopId,
    ok: true,
    offers: Array.from({ length: 90 }, (_, index) => ({ shopId, productId: `${shopId}:n${index}` })),
  }));
  const clean = decideCatalog(previous, healthy);
  assert(clean.publish === 'clean' && clean.failures.length === 0 && clean.offers.length === 270, 'healthy feeds publish');

  const oneDown = healthy.map((result, index) => (index === 0 ? { shopId: result.shopId, ok: false, error: 'HTTP 500', offers: [] } : result));
  const partial = decideCatalog(previous, oneDown);
  assert(partial.publish === 'partial', 'one failed feed still publishes the others');
  assert(partial.offers.filter((offer) => offer.shopId === shops[0]).every((offer) => offer.productId.includes(':') && !offer.productId.includes(':n')), 'failed shop keeps previous rows');
  assert(partial.failures[0].shopId === shops[0], 'failed shop is named');

  const collapsed = healthy.map((result, index) => (index === 1 ? { ...result, offers: result.offers.slice(0, 10) } : result));
  const kept = decideCatalog(previous, collapsed);
  assert(kept.publish === 'partial' && kept.failures[0].reason === 'count-collapsed', 'a collapsed shop keeps previous rows');
  assert(kept.offers.filter((offer) => offer.shopId === shops[1]).length === 100, 'collapsed shop does not replace the catalog');

  const allDown = shops.map((shopId) => ({ shopId, ok: false, error: 'timeout', offers: [] }));
  const none = decideCatalog(previous, allDown);
  assert(none.publish === 'no' && none.offers.length === previous.length, 'every feed failing publishes nothing');

  const wiped = decideCatalog(previous, shops.map((shopId) => ({ shopId, ok: true, offers: [] })));
  assert(wiped.publish === 'no', 'an empty import publishes nothing');

  assert(countOk(100, 80) === true && countOk(100, 79) === false && countOk(0, 0) === false, '80% floor');

  const history = upsertHistory(
    { schemaVersion: 1, note: 'n', snapshots: [{ date: '2026-10-03', offers: [] }, { date: '2026-10-21', offers: [{ offerId: 'a' }] }] },
    { date: '2026-10-24', offers: [{ offerId: 'b' }] },
    '2026-10-24',
  );
  assert(history.snapshots.map((item) => item.date).join() === '2026-10-03,2026-10-21,2026-10-24', 'history appends a new day');
  const replaced = upsertHistory(history, { date: '2026-10-24', offers: [{ offerId: 'c' }] }, '2026-10-24');
  assert(replaced.snapshots.at(-1).offers[0].offerId === 'c', 'the same Prague day can be replaced by a later successful run');
  let refused = false;
  try {
    upsertHistory(replaced, { date: '2026-10-21', offers: [{ offerId: 'nope' }] }, '2026-10-24');
  } catch {
    refused = true;
  }
  assert(refused, 'an older history day is not rewritten');
  console.log('Filament refresh rules OK.');
}

function parseArgs(argv) {
  const args = new Set(argv.filter((token) => token.startsWith('--')));
  for (const token of argv) {
    if (!token.startsWith('--')) throw new Error(`Unexpected argument ${token}`);
  }
  return args;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setOutput(key, value) {
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `${key}=${value}\n`);
  console.log(`output ${key}=${value}`);
}

async function readJson(file) {
  return JSON.parse(await readFile(file, 'utf8'));
}

function factFromItem(item) {
  const ruled = observeParamForm(item.params);
  const ean = normalizeEan(item.eanRaw);
  return {
    ean: ean.ean,
    invalidEan: ean.invalidEan,
    form: ruled.formConflict ? null : ruled.form,
    formRule: ruled.formConflict ? null : ruled.formRule,
    formConflict: ruled.formConflict,
    categoryText: item.categoryText,
  };
}

function itemIdOf(offer) {
  return offer.productId.slice(offer.shopId.length + 1);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  proveRefreshRules();
  if (args.has('--self-test')) return;

  const previousDoc = await readJson(PREVIEW_PATH);
  const previousOffers = previousDoc.offers;
  if (!Array.isArray(previousOffers) || previousOffers.length < 100) throw new Error('previous preview catalog is missing');
  const previousFacts = await readJson(FACTS_PATH);
  const rules = await readJson(RULES_PATH);
  const candidates = await readJson(CANDIDATES_PATH);
  assert(candidates.applied === false, 'alias-candidates.json must stay unapplied');

  const shopResults = [];
  for (let index = 0; index < PUBLIC_SHOPS.length; index += 1) {
    if (index > 0) await sleep(REQUEST_GAP_MS);
    const shop = PUBLIC_SHOPS[index];
    try {
      let loaded = null;
      if (args.has('--allow-cache')) loaded = await readFreshCache(shop);
      if (!loaded) {
        console.log(`${shop.shopName}: fetching ${shop.url}`);
        loaded = await downloadShop(shop, { writeCache: false });
      } else {
        console.log(`${shop.shopName}: using cache from ${loaded.fetchedAt}`);
      }
      const evidence = assertDiameterEvidence(shop.shopId, loaded.xml, rules);
      console.log(
        `${shop.shopName}: diameter evidence items=${evidence.items} values=${JSON.stringify(Object.fromEntries(evidence.values))} range285=${evidence.range285}`,
      );
      const mapped = mapXmlFeed(loaded.xml, {
        shopId: shop.shopId,
        shopName: shop.shopName,
        country: shop.country,
        currency: 'CZK',
        source: shop.source,
        fetchedAt: loaded.fetchedAt,
      });
      const reasons = new Map();
      for (const row of mapped.rejected) reasons.set(row.reason, (reasons.get(row.reason) ?? 0) + 1);
      console.log(
        `${shop.shopName}: accepted ${mapped.accepted.length}, rejected ${mapped.rejected.length} (${[...reasons.entries()].map(([reason, count]) => `${reason}=${count}`).join(', ') || 'none'})`,
      );
      auditOffers(mapped.accepted);
      shopResults.push({
        shopId: shop.shopId,
        ok: true,
        offers: mapped.accepted,
        xml: loaded.xml,
        fetchedAt: loaded.fetchedAt,
        bytes: Buffer.byteLength(loaded.xml),
      });
    } catch (error) {
      console.error(`${shop.shopName}: ${error.message}`);
      shopResults.push({ shopId: shop.shopId, ok: false, error: error.message, offers: [] });
    }
  }

  const decision = decideCatalog(previousOffers, shopResults);
  console.log(`Publish decision: ${decision.publish}. Refreshed shops: ${decision.refreshed}. Failures: ${decision.failures.length}.`);
  for (const failure of decision.failures) {
    console.error(`Keeping previous ${failure.shopId}: ${failure.reason} (next ${failure.next}, previous ${failure.previous})`);
  }
  if (decision.publish === 'no') {
    setOutput('publish', 'false');
    process.exitCode = 1;
    return;
  }

  try {
    auditOffers(decision.offers);
    const indexes = new Map();
    const shopMeta = [];
    for (const result of shopResults) {
      if (!decision.failures.some((failure) => failure.shopId === result.shopId) && result.ok) {
        indexes.set(result.shopId, indexShop(result.xml));
        shopMeta.push({ shopId: result.shopId, fetchedAt: result.fetchedAt, xmlBytes: result.bytes });
      } else {
        const previousMeta = previousFacts.shops.find((shop) => shop.shopId === result.shopId);
        if (!previousMeta) throw new Error(`no previous facts meta for ${result.shopId}`);
        shopMeta.push(previousMeta);
      }
    }
    const facts = {};
    for (const offer of decision.offers) {
      const index = indexes.get(offer.shopId);
      if (index) {
        const item = index.get(itemIdOf(offer));
        if (!item) throw new Error(`cached XML has no ${offer.productId}`);
        if (item.price == null || Math.abs(item.price - offer.price) > 0.001) {
          throw new Error(`price mismatch ${offer.productId}: xml ${item.price} preview ${offer.price}`);
        }
        facts[offer.productId] = factFromItem(item);
      } else {
        const previous = previousFacts.offers[offer.productId];
        if (!previous) throw new Error(`no previous facts for retained ${offer.productId}`);
        facts[offer.productId] = previous;
      }
    }
    const aliases = await readJson(ALIASES_PATH);
    const productMap = await readJson(MAP_PATH);
    const productLines = await readJson(LINES_PATH);
    const normalized = normalizeOffers(decision.offers, {
      aliases,
      productMap,
      productLines,
      factsById: facts,
      diameterDefaults: rules.diameterDefaults,
    });
    const date = pragueDate();
    const source = decision.failures.length === 0 ? `fetchedAt ${date}` : `fetchedAt ${date}; kept ${decision.failures.map((failure) => failure.shopId).join(', ')}`;
    const snapshot = historySnapshot(date, source, decision.offers, normalized.byOfferId);
    const history = upsertHistory(await readJson(HISTORY_PATH), snapshot, date);

    const orderedFacts = Object.fromEntries(Object.entries(facts).sort((a, b) => a[0].localeCompare(b[0])));
    await writePreview(decision.offers, PREVIEW_PATH);
    await writeFile(
      FACTS_PATH,
      `${JSON.stringify({ schemaVersion: 1, note: FACTS_NOTE, shops: shopMeta.sort((a, b) => a.shopId.localeCompare(b.shopId)), offers: orderedFacts }, null, 2)}\n`,
    );
    await writeFile(CARDS_PATH, `${JSON.stringify(normalized.cardsDoc, null, 2)}\n`);
    await writeFile(REVIEW_JSON_PATH, `${JSON.stringify(normalized.reviewDoc, null, 2)}\n`);
    await writeFile(REVIEW_MD_PATH, normalized.reviewMd);
    await writeFile(REVIEW_CSV_PATH, normalized.reviewCsv);
    await writeFile(HISTORY_PATH, `${JSON.stringify(history, null, 2)}\n`);
    for (const result of shopResults) {
      if (result.ok && !decision.failures.some((failure) => failure.shopId === result.shopId)) {
        const shop = PUBLIC_SHOPS.find((item) => item.shopId === result.shopId);
        await writeShopCache(shop, result.xml, result.fetchedAt);
      }
    }

    const colorCounts = new Map();
    let unknown = 0;
    for (const offer of decision.offers) {
      if (!offer.color) unknown += 1;
      else colorCounts.set(offer.color, (colorCounts.get(offer.color) ?? 0) + 1);
    }
    console.log(
      `Catalog ${decision.offers.length} offers, ${normalized.cardsDoc.cards.length} cards, ${colorCounts.size} colors, ${unknown} without a reliable color.`,
    );
    console.log(`Cards ${normalized.reviewDoc.summary.cardsBefore} -> ${normalized.reviewDoc.summary.cardsAfter}.`);
    setOutput('publish', 'true');
    if (decision.publish === 'partial') process.exitCode = 2;
  } catch (error) {
    console.error(error);
    console.error('Quality checks failed after the fetch. Previous catalog files were left in place.');
    setOutput('publish', 'false');
    process.exitCode = 1;
  }
}

const invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (invokedDirectly) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
