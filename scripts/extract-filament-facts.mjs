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

function indexShop(xml) {
  const items = new Map();
  for (const match of xml.matchAll(/<SHOPITEM>([\s\S]*?)<\/SHOPITEM>/gi)) {
    const block = match[1];
    const itemId = readTag(block, 'ITEM_ID');
    if (!itemId) continue;
    if (items.has(itemId)) throw new Error(`duplicate ITEM_ID ${itemId}`);
    const price = parseMoney(readTag(block, 'PRICE_VAT') ?? readTag(block, 'PRICE'));
    const eanRaw = readTag(block, 'EAN');
    items.set(itemId, { price, eanRaw, params: readParams(block) });
  }
  return items;
}

function formFromRules(params, rules) {
  const found = [];
  for (const rule of rules) {
    for (const [name, value] of params) {
      if (name === rule.param && value === rule.value) found.push(rule);
    }
  }
  const forms = [...new Set(found.map((rule) => rule.form))];
  if (forms.length > 1) return { form: null, formRule: null, formConflict: true };
  if (forms.length === 1) {
    return { form: forms[0], formRule: `${found[0].param}=${found[0].value}`, formConflict: false };
  }
  return { form: null, formRule: null, formConflict: false };
}

function normalizeEan(raw) {
  if (!raw) return { ean: null, invalidEan: null };
  const digits = raw.replace(/\s+/g, '');
  if (/^\d{8,14}$/.test(digits)) return { ean: digits, invalidEan: null };
  return { ean: null, invalidEan: raw };
}

async function main() {
  const preview = JSON.parse(await readFile(PREVIEW_PATH, 'utf8'));
  const rulesDoc = JSON.parse(await readFile(RULES_PATH, 'utf8'));
  if (!Array.isArray(rulesDoc.form)) throw new Error('field-rules.form missing');
  for (const rule of rulesDoc.form) {
    if (rule.form !== 'spool' && rule.form !== 'refill') throw new Error(`bad form rule ${rule.param}`);
  }

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
    const ruled = formFromRules(item.params, rulesDoc.form);
    let form = ruled.form;
    let formRule = ruled.formRule;
    let formConflict = ruled.formConflict;
    if (offer.packaging === 'spool' || offer.packaging === 'refill') {
      if (form && form !== offer.packaging) formConflict = true;
      if (!form && !formConflict) {
        form = offer.packaging;
        formRule = 'preview.packaging';
      }
    }
    if (formConflict) {
      form = null;
      formRule = null;
    }
    const ean = normalizeEan(item.eanRaw);
    facts[offer.productId] = {
      ean: ean.ean,
      invalidEan: ean.invalidEan,
      form,
      formRule,
      formConflict,
    };
  }
  if (priceMismatches > 0) {
    throw new Error(`${priceMismatches} cached prices do not match the preview. Facts were not written.`);
  }

  const ordered = Object.fromEntries(Object.entries(facts).sort((a, b) => a[0].localeCompare(b[0])));
  const document = {
    schemaVersion: 1,
    note: 'EAN is the Heureka <EAN> tag. form is only field-rules.json or the preview packaging field already taken from Balení/Refill. Prices were checked against the preview and are not stored here.',
    shops: shopMeta.sort((a, b) => a.shopId.localeCompare(b.shopId)),
    offers: ordered,
  };
  await writeFile(OUT_PATH, `${JSON.stringify(document, null, 2)}\n`);
  const withEan = Object.values(ordered).filter((row) => row.ean).length;
  const withForm = Object.values(ordered).filter((row) => row.form).length;
  console.log(`Wrote facts for ${Object.keys(ordered).length} offers. EAN ${withEan}, form ${withForm}.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
