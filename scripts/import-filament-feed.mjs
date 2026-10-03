#!/usr/bin/env node
/**
 * Filament feed importer for První vrstva.
 *
 * Reads a local JSON fixture or a Heureka/Zboží-like XML file from disk.
 * Does not fetch URLs. Remote http(s) arguments are refused.
 * The allowlisted fetch of three public Heureka feeds lives in scripts/fetch-filament-feeds.mjs.
 *
 * Default (no args) validates the checked-in fixtures and exits non-zero on a broken rule.
 *
 *   node scripts/import-filament-feed.mjs
 *   node scripts/import-filament-feed.mjs --json scripts/fixtures/filament-offers.example.json
 *   node scripts/import-filament-feed.mjs --xml scripts/fixtures/heureka-filament.example.xml \
 *     --shop-id example-xml-shop --shop-name "Ukázkový XML obchod" --country CZ --source xml \
 *     --fetched-at 2026-01-15T08:00:00.000Z \
 *     --normalize scripts/fixtures/normalize.example.json
 *   node scripts/import-filament-feed.mjs --xml ./merchant-feed.xml --shop-id shop --shop-name "Shop" \
 *     --country CZ --source xml --write src/data/offers.generated.ts
 *
 * Merge path (also in docs/PRICE_FEED_CONTRACT.md):
 * 1. Save the merchant XML/API file locally. Do not point this script at a URL.
 * 2. Review accepted rows and every rejection. Generic weight is flagged, not guessed.
 * 3. Assign cross-shop productIds with an explicit --normalize map. Titles are not fuzzy-matched.
 * 4. Copy reviewed rows into `offers` in src/data/offers.ts. Leave example:true off real rows.
 * 5. /srovnavac/ stays noindex until uniqueShopCount() sees at least 3 non-example shops.
 */

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { PUBLIC_SHOPS, SNAPSHOT_FETCHED_AT } from './filament-shops.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const JSON_FIXTURE = path.join(ROOT, 'scripts/fixtures/filament-offers.example.json');
const XML_FIXTURE = path.join(ROOT, 'scripts/fixtures/heureka-filament.example.xml');
const NORMALIZE_FIXTURE = path.join(ROOT, 'scripts/fixtures/normalize.example.json');

const NON_FILAMENT = [
  /\bstretch\b/,
  /\bfolie\b/,
  /\bresin\b/,
  /\bpryskyrice\b/,
  /\bisopropyl\b/,
  /\bsusicka\b/,
];

function fold(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function refuseRemote(filePath) {
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(filePath)) {
    throw new Error(
      `Refusing to fetch ${filePath}. Save the feed locally and pass a file path. This importer does not scrape.`,
    );
  }
}

function decodeXml(value) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&amp;/g, '&')
    .trim();
}

function readTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, 'i'));
  return match ? decodeXml(match[1]) : undefined;
}

/** First IMGURL only. IMGURL_ALTERNATIVE does not match this tag. Non-http(s) values are dropped. */
function feedImageUrl(raw) {
  if (!raw) return undefined;
  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    return undefined;
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return undefined;
  return parsed.href;
}

function parseMoney(raw) {
  if (typeof raw === 'number') return Number.isFinite(raw) ? raw : null;
  if (raw === undefined || raw === null) return null;
  const text = String(raw).trim().replace(/\s/g, '').replace(',', '.');
  if (!/^\d+(\.\d+)?$/.test(text)) return null;
  const value = Number(text);
  if (!Number.isFinite(value)) return null;
  return value;
}

/**
 * Parse an explicit weight field. Unit is required.
 * "1 kg" in a product title must never be passed here by the caller.
 */
function parseWeightToGrams(raw) {
  if (typeof raw === 'number') return Number.isFinite(raw) && raw > 0 ? raw : null;
  const text = fold(raw).replace(/\s+/g, ' ').trim();
  const match = text.match(/^(\d+(?:[.,]\d+)?)\s*(kg|g|gramu|gramy|gram)$/);
  if (!match) return null;
  const value = Number(match[1].replace(',', '.'));
  if (!Number.isFinite(value) || value <= 0) return null;
  const grams = match[2] === 'kg' ? value * 1000 : value;
  if (!Number.isFinite(grams) || grams <= 0) return null;
  return Math.round(grams * 1000) / 1000;
}

function weightKind(name) {
  const normalized = fold(name);
  const mentionsWeight = /hmotnost|vaha|weight|mass|navin|netto/.test(normalized);
  if (!mentionsWeight) return null;
  if (/navin|netto|net weight|hmotnost materialu|bez obalu/.test(normalized)) return 'net';
  if (/filament/.test(normalized) && /hmotnost|vaha|weight|mass/.test(normalized)) return 'net';
  if (/hmotnost|vaha|weight|mass/.test(normalized)) return 'generic';
  return null;
}

function uniqueGrams(values) {
  const grams = values.map((value) => Math.round(value));
  return [...new Set(grams)];
}

function resolveWeight(params) {
  const net = [];
  const generic = [];
  for (const [name, raw] of params) {
    const kind = weightKind(name);
    if (!kind) continue;
    const grams = parseWeightToGrams(raw);
    if (grams == null) return { error: 'unparseable-weight', detail: `${name}=${raw}` };
    (kind === 'net' ? net : generic).push(grams);
  }
  if (net.length > 0) {
    const distinct = uniqueGrams(net);
    if (distinct.length > 1) return { error: 'ambiguous-weight', detail: distinct.join(',') };
    return { weightGrams: net[0], weightConfidence: 'net' };
  }
  if (generic.length > 0) {
    const distinct = uniqueGrams(generic);
    if (distinct.length > 1) return { error: 'ambiguous-weight', detail: distinct.join(',') };
    return { weightGrams: generic[0], weightConfidence: 'unspecified' };
  }
  return { error: 'missing-weight' };
}

function parseDiameter(raw) {
  const text = String(raw).trim().toLowerCase().replace(/\s+/g, '').replace(',', '.');
  const match = text.match(/^(\d+(?:\.\d+)?)(mm)?$/);
  if (!match) return null;
  const value = Number(match[1]);
  if (!Number.isFinite(value) || value < 1 || value > 4) return null;
  return value;
}

function parsePackaging(raw) {
  const text = fold(raw);
  if (/(civka|spool)/.test(text)) return 'spool';
  if (/refill/.test(text)) return 'refill';
  return null;
}

function looksLikeNonFilament(name) {
  const text = fold(name);
  return NON_FILAMENT.some((pattern) => pattern.test(text));
}

function readParams(block) {
  const params = [];
  for (const match of block.matchAll(/<PARAM>([\s\S]*?)<\/PARAM>/gi)) {
    const name = readTag(match[1], 'PARAM_NAME');
    const val = readTag(match[1], 'VAL');
    if (name && val) params.push([name, val]);
  }
  return params;
}

function paramValue(params, pattern) {
  const found = params.find(([name]) => pattern.test(fold(name)));
  return found?.[1];
}

/**
 * Prefer a real filament diameter (1–4 mm). Tolerance labels such as
 * "Tolerance/průměr = +/- 0,05 mm" are skipped when another param parses.
 * Conflicting parseable diameters are rejected. A title "1.75 mm" is never read.
 */
function readDiameter(params) {
  const candidates = params.filter(([name]) => /prumer|diameter/.test(fold(name)));
  if (candidates.length === 0) return {};
  const parsed = [];
  for (const [, raw] of candidates) {
    const value = parseDiameter(raw);
    if (value != null) parsed.push(value);
  }
  if (parsed.length === 0) {
    const detail = candidates.map(([name, raw]) => `${name}=${raw}`).join('; ');
    return { error: 'unparseable-diameter', detail };
  }
  const unique = [...new Set(parsed)];
  if (unique.length > 1) return { error: 'ambiguous-diameter', detail: unique.join(',') };
  return { diameterMm: unique[0] };
}

function readPackaging(params) {
  const named = params.find(([name]) => /^(baleni|packaging)$/.test(fold(name)));
  if (named) {
    const parsed = parsePackaging(named[1]);
    if (parsed == null) return { error: 'unparseable-packaging', detail: `${named[0]}=${named[1]}` };
    return { packaging: parsed };
  }
  const refill = params.find(([name]) => fold(name) === 'refill');
  if (refill && /^(ano|yes)$/.test(fold(refill[1]))) return { packaging: 'refill' };
  return {};
}

function readShipping(block) {
  const prices = [];
  for (const match of block.matchAll(/<DELIVERY_PRICE>([\s\S]*?)<\/DELIVERY_PRICE>/gi)) {
    const price = parseMoney(decodeXml(match[1]));
    if (price == null || price < 0) return { error: 'unparseable-shipping' };
    prices.push(price);
  }
  if (prices.length === 0) return {};
  const unique = [...new Set(prices)];
  if (unique.length > 1) return { warning: 'ambiguous-shipping' };
  return { shippingPrice: unique[0] };
}

function readStock(block) {
  const raw = readTag(block, 'DELIVERY_DATE');
  if (raw === undefined) return { error: 'unknown-stock' };
  if (!/^-?\d+$/.test(raw.trim())) return { error: 'unknown-stock', detail: raw };
  const days = Number(raw);
  if (days < 0) return { error: 'unknown-stock', detail: raw };
  if (days === 0) return { inStock: true, stockLabel: 'Skladem' };
  return { inStock: true, stockLabel: `dodání do ${days} dní` };
}

function shopScopedId(shopId, itemId) {
  return `${shopId}:${itemId}`;
}

export function mapXmlFeed(xml, options) {
  const { shopId, shopName, country, currency = 'CZK', source = 'xml', fetchedAt, normalize = new Map() } =
    options;
  const accepted = [];
  const rejected = [];
  const items = [...String(xml).matchAll(/<SHOPITEM>([\s\S]*?)<\/SHOPITEM>/gi)];
  if (items.length === 0) {
    rejected.push({ itemId: '(feed)', reason: 'no-shopitems' });
    return { accepted, rejected };
  }

  for (const match of items) {
    const block = match[1];
    const itemId = readTag(block, 'ITEM_ID') ?? readTag(block, 'PRODUCTNO') ?? '';
    const productName = readTag(block, 'PRODUCTNAME') ?? readTag(block, 'PRODUCT') ?? '';
    const label = itemId || productName || '(row)';
    if (!itemId || !productName) {
      rejected.push({ itemId: label, reason: 'missing-identity' });
      continue;
    }
    if (looksLikeNonFilament(`${productName} ${readTag(block, 'PRODUCT') ?? ''}`)) {
      rejected.push({ itemId, reason: 'not-filament-product', detail: productName });
      continue;
    }

    const params = readParams(block);
    const weight = resolveWeight(params);
    if (weight.error) {
      rejected.push({ itemId, reason: weight.error, detail: weight.detail });
      continue;
    }

    const price = parseMoney(readTag(block, 'PRICE_VAT') ?? readTag(block, 'PRICE'));
    if (price == null || price <= 0) {
      rejected.push({ itemId, reason: 'invalid-price' });
      continue;
    }

    const stock = readStock(block);
    if (stock.error) {
      rejected.push({ itemId, reason: stock.error, detail: stock.detail });
      continue;
    }

    const shipping = readShipping(block);
    if (shipping.error) {
      rejected.push({ itemId, reason: shipping.error });
      continue;
    }

    const url = readTag(block, 'URL');
    if (!url || !/^https?:\/\//i.test(url)) {
      rejected.push({ itemId, reason: 'missing-url' });
      continue;
    }
    const imageUrl = feedImageUrl(readTag(block, 'IMGURL'));

    const diameter = readDiameter(params);
    if (diameter.error) {
      rejected.push({ itemId, reason: diameter.error, detail: diameter.detail });
      continue;
    }

    const packagingResult = readPackaging(params);
    if (packagingResult.error) {
      rejected.push({ itemId, reason: packagingResult.error, detail: packagingResult.detail });
      continue;
    }
    const { packaging } = packagingResult;
    const { diameterMm } = diameter;

    const scoped = shopScopedId(shopId, itemId);
    const productId = normalize.get(scoped) ?? normalize.get(itemId) ?? scoped;
    const offer = {
      productId,
      productName,
      shopId,
      shopName,
      country,
      currency,
      price,
      inStock: stock.inStock,
      stockLabel: stock.stockLabel,
      url,
      fetchedAt,
      source,
      category: 'filament',
      weightGrams: weight.weightGrams,
      weightConfidence: weight.weightConfidence,
    };
    if (shipping.shippingPrice !== undefined) offer.shippingPrice = shipping.shippingPrice;
    const material = paramValue(params, /^material$/);
    const brand = readTag(block, 'MANUFACTURER');
    const color = paramValue(params, /^barva$|^color$/);
    if (imageUrl) offer.imageUrl = imageUrl;
    if (material) offer.material = material;
    if (brand) offer.brand = brand;
    if (color) offer.color = color;
    if (diameterMm !== undefined) offer.diameterMm = diameterMm;
    if (packaging) offer.packaging = packaging;
    if (shipping.warning) offer.importWarnings = [shipping.warning];
    accepted.push(offer);
  }

  return { accepted, rejected };
}

export function mapJsonOffers(payload) {
  const rows = Array.isArray(payload) ? payload : payload?.offers;
  if (!Array.isArray(rows)) {
    return { accepted: [], rejected: [{ itemId: '(file)', reason: 'json-offers-missing' }] };
  }
  const accepted = [];
  const rejected = [];
  rows.forEach((row, index) => {
    const itemId = row?.productId ?? `row-${index}`;
    if (!row || typeof row !== 'object') {
      rejected.push({ itemId, reason: 'not-an-object' });
      return;
    }
    if (row.category !== 'filament') {
      rejected.push({ itemId, reason: 'not-filament-category' });
      return;
    }
    if (looksLikeNonFilament(row.productName ?? '')) {
      rejected.push({ itemId, reason: 'not-filament-product' });
      return;
    }
    if (typeof row.weightGrams !== 'number' || !(row.weightGrams > 0)) {
      rejected.push({ itemId, reason: 'missing-weight' });
      return;
    }
    if (typeof row.price !== 'number' || !(row.price > 0)) {
      rejected.push({ itemId, reason: 'invalid-price' });
      return;
    }
    accepted.push(row);
  });
  return { accepted, rejected };
}

/** Same formula as pricePerKg() in src/data/offers.ts. Shipping is not included. */
export function pricePerKg(offer) {
  if (offer?.category !== 'filament') return null;
  if (!(offer.weightGrams > 0)) return null;
  return offer.price / (offer.weightGrams / 1000);
}

function loadNormalize(raw) {
  const map = new Map();
  if (!raw || typeof raw !== 'object') return map;
  for (const [key, value] of Object.entries(raw)) {
    if (key.startsWith('_')) continue;
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error(`Normalization value for ${key} must be a productId string`);
    }
    map.set(key, value);
  }
  return map;
}

export function generatedModule(offers, meta) {
  return `/**
 * Generated by scripts/import-filament-feed.mjs
 * DO NOT import this file from pages. It is gitignored.
 *
 * ${meta.fixture ? 'THIS OUTPUT IS FROM A FIXTURE. Prices are NOT live. Do not merge.' : 'Review every row before merging into src/data/offers.ts.'}
 * ${meta.note ?? 'This file must not be imported by pages. Production /srovnavac/ stays gated.'}
 *
 * Merge path:
 * 1. Read the importer report (accepted, rejected, weightConfidence, importWarnings).
 * 2. Confirm productId came from --normalize, not from a fuzzy title match.
 * 3. Copy the reviewed array into \`offers\` in src/data/offers.ts.
 * 4. Real rows must not set example:true.
 * 5. /srovnavac/ stays noindex until at least 3 non-example shops are present.
 *
 * Source file: ${meta.input}
 */
export const generatedOffers = ${JSON.stringify(offers, null, 2)};
`;
}

function printReport(title, result) {
  console.log(`${title}: accepted ${result.accepted.length}, rejected ${result.rejected.length}`);
  for (const row of result.rejected) {
    console.log(`  reject ${row.itemId}: ${row.reason}${row.detail ? ` (${row.detail})` : ''}`);
  }
  for (const offer of result.accepted) {
    const perKg = pricePerKg(offer);
    const warnings = offer.importWarnings?.length ? ` warnings=${offer.importWarnings.join(',')}` : '';
    console.log(
      `  ok ${offer.productId} ${offer.weightGrams}g ${perKg} ${offer.currency}/kg confidence=${offer.weightConfidence ?? 'n/a'}${warnings}`,
    );
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function selfTest() {
  const offersSource = await readFile(path.join(ROOT, 'src/data/offers.ts'), 'utf8');
  assert(
    offersSource.includes('return offer.price / (grams / 1000);'),
    'pricePerKg formula in src/data/offers.ts drifted from the importer',
  );

  const json = JSON.parse(await readFile(JSON_FIXTURE, 'utf8'));
  assert(
    /not live/i.test(json._comment ?? ''),
    'JSON fixture must keep a comment that prices are NOT live',
  );
  const jsonResult = mapJsonOffers(json);
  printReport('JSON fixture', jsonResult);
  assert(jsonResult.accepted.length === 3, 'JSON fixture should accept 3 example offers');
  assert(jsonResult.rejected.length === 0, 'JSON fixture should not reject its own examples');
  assert(jsonResult.accepted.every((offer) => offer.example === true), 'JSON examples must set example:true');
  assert(
    jsonResult.accepted.every((offer) => offer.source === 'manual-approved'),
    'JSON examples must use source manual-approved',
  );
  const perKg = Object.fromEntries(jsonResult.accepted.map((offer) => [offer.shopId, pricePerKg(offer)]));
  assert(perKg['example-shop-a'] === 499, 'shop A should be 499 Kč/kg');
  assert(perKg['example-shop-b'] === 459, 'shop B should be 459 Kč/kg');
  assert(perKg['example-shop-c'] === 532, '750 g at 399 Kč should be 532 Kč/kg, not the sticker price');

  const xml = await readFile(XML_FIXTURE, 'utf8');
  const fetchedAt = '2026-01-15T08:00:00.000Z';
  const xmlOptions = {
    shopId: 'example-xml-shop',
    shopName: 'Ukázkový XML obchod',
    country: 'CZ',
    currency: 'CZK',
    source: 'xml',
    fetchedAt,
  };
  const xmlResult = mapXmlFeed(xml, xmlOptions);
  printReport('XML fixture', xmlResult);
  assert(xmlResult.accepted.length === 2, 'XML fixture should accept the two real filament rows');
  assert(xmlResult.rejected.length === 2, 'XML fixture should reject the title-only kg and the stretch film');
  const reasons = Object.fromEntries(xmlResult.rejected.map((row) => [row.itemId, row.reason]));
  assert(reasons['fixture-pla-natural'] === 'missing-weight', '1 kg in the title must not invent weightGrams');
  assert(
    reasons['fixture-stretch-film'] === 'not-filament-product',
    'stretch film labeled PLA must be rejected',
  );
  const generic = xmlResult.accepted.find((offer) => offer.productId.endsWith('fixture-pla-1kg'));
  const net = xmlResult.accepted.find((offer) => offer.productId.endsWith('fixture-pla-net'));
  assert(generic?.weightGrams === 1000 && generic.weightConfidence === 'unspecified', 'generic Hmotnost stays flagged');
  assert(generic?.shippingPrice === 89, 'single delivery price is kept');
  assert(generic?.diameterMm === 1.75 && generic?.packaging === 'spool', 'diameter and spool should parse');
  assert(
    generic?.imageUrl === 'https://example.invalid/fixture/pla.jpg',
    'primary IMGURL is the product photo',
  );
  assert(net?.weightGrams === 1000 && net.weightConfidence === 'net', 'návin wins over parcel weight');
  assert(net?.imageUrl === undefined, 'javascript IMGURL must be dropped');
  assert(net?.shippingPrice === undefined, 'conflicting delivery prices must not become 0');
  assert(net?.importWarnings?.includes('ambiguous-shipping'), 'conflicting delivery prices are warned');
  assert(pricePerKg(net) === 610, 'net 1000 g keeps sticker price as Kč/kg');
  assert(!xmlResult.accepted.some((offer) => /stretch/i.test(offer.productName)), 'stretch film must not be imported');

  const normalize = loadNormalize(JSON.parse(await readFile(NORMALIZE_FIXTURE, 'utf8')));
  const normalized = mapXmlFeed(xml, { ...xmlOptions, normalize });
  const mapped = normalized.accepted.find((offer) => offer.weightConfidence === 'unspecified');
  assert(mapped?.productId === 'example-pla-black-1kg', 'normalize map should replace only the listed id');
  const unmapped = normalized.accepted.find((offer) => offer.weightConfidence === 'net');
  assert(
    unmapped?.productId === 'example-xml-shop:fixture-pla-net',
    'unlisted items stay shop-scoped and are not fuzzy-merged',
  );

  let remoteError = '';
  try {
    refuseRemote('https://shop.example/feed.xml');
  } catch (error) {
    remoteError = error.message;
  }
  assert(/does not scrape/i.test(remoteError), 'remote feed URLs must be refused');

  assert(
    /export const offers: ShopOffer\[\] = \[\];/.test(offersSource),
    'production offers must stay empty so /srovnavac/ stays noindex',
  );
  const perKgSort = offersSource.slice(
    offersSource.indexOf('export function compareByPricePerKg'),
    offersSource.indexOf('export function compareByTotalPrice'),
  );
  const totalSort = offersSource.slice(
    offersSource.indexOf('export function compareByTotalPrice'),
    offersSource.indexOf('export function isStale'),
  );
  assert(!/affiliate/i.test(perKgSort + totalSort), 'sort comparators must not read affiliate fields');

  const snapshotOffers = await provePublicSnapshots();
  const shopIds = new Set(snapshotOffers.map((offer) => offer.shopId));
  assert(shopIds.size === 3, 'snapshot proof must yield three distinct shops');
  assert(snapshotOffers.every((offer) => offer.example !== true), 'snapshot rows are not example fixtures');
  assert(snapshotOffers.every((offer) => offer.weightGrams > 0 && pricePerKg(offer) > 0), 'every snapshot offer needs weight and Kč/kg');

  await provePreviewCatalog();

  console.log('Filament feed importer self-test OK.');
}

/** The committed local-preview catalog is generated, real, and not production. */
async function provePreviewCatalog() {
  const previewPath = path.join(ROOT, 'src/data/filament-preview.generated.json');
  const preview = JSON.parse(await readFile(previewPath, 'utf8'));
  assert(preview._generated === true, 'preview catalog must be marked generated');
  assert(Array.isArray(preview.offers) && preview.offers.length > 100, 'preview catalog should hold the accepted public rows');
  const shops = new Set(preview.offers.map((offer) => offer.shopId));
  assert(
    [...shops].sort().join() === '3dfil,filamenty-brno,materialpro3d',
    'preview catalog must be exactly the three public shops',
  );
  for (const offer of preview.offers) {
    assert(offer.example !== true, 'preview rows must not be example fixtures');
    assert(offer.category === 'filament', 'preview rows must be filament');
    assert(offer.weightGrams > 0 && pricePerKg(offer) > 0, 'preview rows need weightGrams and pricePerKg');
    assert(typeof offer.fetchedAt === 'string' && offer.fetchedAt.length > 0, 'preview rows need fetchedAt');
    assert(typeof offer.shopName === 'string' && offer.shopName.length > 0, 'preview rows need a shop name');
    assert(offer.affiliateUrl === undefined, 'preview rows must not invent an affiliate URL');
    if (offer.imageUrl !== undefined) {
      assert(/^https?:\/\//i.test(offer.imageUrl), 'preview imageUrl must be an http(s) feed IMGURL');
      assert(!/filamentprice\.cz/i.test(offer.imageUrl), 'preview images must not come from filamentprice.cz');
    }
  }
  const withImage = preview.offers.filter((offer) => typeof offer.imageUrl === 'string').length;
  assert(withImage > 1000, 'preview catalog should keep IMGURL from the public feeds');
  console.log(`Preview images: ${withImage} of ${preview.offers.length} rows.`);
  const counts = Object.fromEntries(preview.shops.map((shop) => [shop.shopId, shop.accepted]));
  for (const shopId of shops) {
    const actual = preview.offers.filter((offer) => offer.shopId === shopId).length;
    assert(counts[shopId] === actual, `${shopId} preview count drifted`);
  }
  console.log(`Preview catalog: ${preview.offers.length} rows, shops ${[...shops].join(', ')}.`);
}

function almost(actual, expected, message) {
  assert(Number.isFinite(actual) && Math.abs(actual - expected) < 1e-9, message);
}

/** Map the committed public-feed excerpts. No network. */
export async function provePublicSnapshots() {
  const all = [];
  for (const shop of PUBLIC_SHOPS) {
    const xml = await readFile(path.join(ROOT, shop.snapshot), 'utf8');
    const result = mapXmlFeed(xml, {
      shopId: shop.shopId,
      shopName: shop.shopName,
      country: shop.country,
      currency: 'CZK',
      source: 'xml',
      fetchedAt: SNAPSHOT_FETCHED_AT,
    });
    printReport(`snapshot ${shop.shopId}`, result);
    for (const expected of shop.expectAccepted) {
      const offer = result.accepted.find((row) => row.productId === `${shop.shopId}:${expected.itemId}`);
      assert(offer, `${shop.shopId}:${expected.itemId} should be accepted`);
      assert(offer.weightGrams === expected.weightGrams, `${expected.itemId} weightGrams`);
      assert(offer.weightConfidence === expected.weightConfidence, `${expected.itemId} weight confidence`);
      almost(pricePerKg(offer), expected.pricePerKg, `${expected.itemId} pricePerKg`);
      if (expected.diameterMm !== undefined) {
        assert(offer.diameterMm === expected.diameterMm, `${expected.itemId} diameter`);
      }
      if (expected.shipping === 'unknown') {
        assert(offer.shippingPrice === undefined, `${expected.itemId} unknown shipping must not be zero`);
        assert(offer.importWarnings?.includes('ambiguous-shipping'), `${expected.itemId} ambiguous shipping warning`);
      } else if (expected.shipping === 0) {
        assert(offer.shippingPrice === 0, `${expected.itemId} explicit zero shipping`);
      }
      if (expected.packaging) assert(offer.packaging === expected.packaging, `${expected.itemId} packaging`);
      if (expected.packaging === null) assert(offer.packaging === undefined, `${expected.itemId} must not invent packaging`);
      assert(!('affiliateUrl' in offer), 'public feed rows must not invent an affiliate URL');
    }
    for (const expected of shop.expectRejected ?? []) {
      const row = result.rejected.find((item) => item.itemId === expected.itemId);
      assert(row?.reason === expected.reason, `${expected.itemId} should reject as ${expected.reason}`);
    }
    all.push(...result.accepted);
  }
  return all;
}

function parseArgs(argv) {
  const args = { _: [] };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith('--')) {
      args._.push(token);
      continue;
    }
    const key = token.slice(2);
    const next = argv[index + 1];
    if (next === undefined || next.startsWith('--')) {
      args[key] = true;
    } else {
      args[key] = next;
      index += 1;
    }
  }
  return args;
}

async function runCli(argv) {
  if (argv.length === 0 || argv.includes('--self-test')) {
    await selfTest();
    return;
  }

  const args = parseArgs(argv);
  if (args.json && args.xml) throw new Error('Pass either --json or --xml, not both');
  if (!args.json && !args.xml) throw new Error('Pass --json or --xml, or run with no args for the self-test');

  const input = path.resolve(String(args.json ?? args.xml));
  refuseRemote(String(args.json ?? args.xml));
  const raw = await readFile(input, 'utf8');
  let result;
  if (args.json) {
    result = mapJsonOffers(JSON.parse(raw));
  } else {
    for (const key of ['shop-id', 'shop-name', 'country', 'source']) {
      if (!args[key]) throw new Error(`--xml requires --${key}`);
    }
    if (!['CZ', 'SK'].includes(args.country)) throw new Error('--country must be CZ or SK');
    if (!['xml', 'api', 'affiliate-feed', 'manual-approved'].includes(args.source)) {
      throw new Error('--source must be xml, api, affiliate-feed, or manual-approved');
    }
    const normalize = args.normalize
      ? loadNormalize(JSON.parse(await readFile(path.resolve(String(args.normalize)), 'utf8')))
      : new Map();
    result = mapXmlFeed(raw, {
      shopId: String(args['shop-id']),
      shopName: String(args['shop-name']),
      country: args.country,
      currency: args.currency ?? 'CZK',
      source: args.source,
      fetchedAt: args['fetched-at'] ?? new Date().toISOString(),
      normalize,
    });
  }

  const fixture = /fixture|example/i.test(input);
  printReport(fixture ? 'FIXTURE (not live prices)' : path.basename(input), result);
  if (args.write) {
    refuseRemote(String(args.write));
    const output = path.resolve(String(args.write));
    await writeFile(output, generatedModule(result.accepted, { fixture, input }), 'utf8');
    console.log(`Wrote ${result.accepted.length} offers to ${output}. Do not import this module from pages.`);
  }
}

const invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname);
if (invokedDirectly) {
  runCli(process.argv.slice(2)).catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}
