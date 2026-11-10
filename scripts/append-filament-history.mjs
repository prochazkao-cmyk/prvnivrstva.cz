#!/usr/bin/env node
/**
 * Append one dated price snapshot. Does not schedule anything and does not write to git.
 *
 *   node scripts/append-filament-history.mjs --date 2026-10-21 \
 *     --preview src/data/filament-preview.generated.json \
 *     --source "fetchedAt 2026-10-21" 
 *
 *   node scripts/append-filament-history.mjs --date 2026-10-03 \
 *     --preview /path/to/old-preview.json --no-facts \
 *     --source "git snapshot without EAN"
 *
 * The same date is left untouched when the new snapshot is identical.
 * A different snapshot for an existing date fails instead of overwriting.
 */

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { historySnapshot, normalizeOffers } from './filament-normalize.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HISTORY_PATH = path.join(ROOT, 'src/data/filament-history.json');

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith('--')) throw new Error(`Unexpected argument ${token}`);
    const key = token.slice(2);
    const next = argv[index + 1];
    if (next === undefined || next.startsWith('--')) args[key] = true;
    else {
      args[key] = next;
      index += 1;
    }
  }
  return args;
}

async function readJson(file) {
  return JSON.parse(await readFile(file, 'utf8'));
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (typeof args.date !== 'string' || typeof args.preview !== 'string' || typeof args.source !== 'string') {
    throw new Error('Required: --date YYYY-MM-DD --preview file --source text');
  }
  const preview = await readJson(path.resolve(args.preview));
  const offers = preview.offers;
  if (!Array.isArray(offers)) throw new Error('preview has no offers');
  const aliases = await readJson(path.join(ROOT, 'src/data/filament-normalization/aliases.json'));
  const productMap = await readJson(path.join(ROOT, 'src/data/filament-normalization/product-map.json'));
  const productLines = await readJson(path.join(ROOT, 'src/data/filament-normalization/product-lines.json'));
  let factsById = {};
  if (!args['no-facts']) {
    const facts = await readJson(path.join(ROOT, 'src/data/filament-feed-facts.generated.json'));
    factsById = facts.offers;
  }
  const normalized = normalizeOffers(offers, { aliases, productMap, productLines, factsById });
  const snapshot = historySnapshot(args.date, args.source, offers, normalized.byOfferId);

  let history = { schemaVersion: 1, note: 'Append-only price snapshots. Kč/kg = price / (weightGrams / 1000). Shipping is not stored. No affiliate URL.', snapshots: [] };
  try {
    history = await readJson(HISTORY_PATH);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  const existing = history.snapshots.find((item) => item.date === snapshot.date);
  if (existing) {
    if (JSON.stringify(existing) !== JSON.stringify(snapshot)) {
      throw new Error(`Snapshot ${snapshot.date} already exists and differs. Refusing to overwrite.`);
    }
    console.log(`Snapshot ${snapshot.date} already matches ${HISTORY_PATH}.`);
    return;
  }
  history.snapshots.push(snapshot);
  history.snapshots.sort((a, b) => a.date.localeCompare(b.date));
  await writeFile(HISTORY_PATH, `${JSON.stringify(history, null, 2)}\n`);
  console.log(`Appended ${snapshot.date}: ${snapshot.offerCount} offers, ${snapshot.products.length} products.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
