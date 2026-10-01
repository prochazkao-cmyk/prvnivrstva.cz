import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = path.resolve('src/content');
const articleDirs = ['clanky', 'rady-a-tipy', 'stroje', 'recenze', 'novinky', 'technologie'];

function parseFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = match[1];
  const data = {};
  let currentArray = null;
  for (const raw of fm.split('\n')) {
    const line = raw.trimEnd();
    if (!line.trim() || line.trimStart().startsWith('#')) continue;
    const arrayItem = line.match(/^\s+-\s+(.+)$/);
    if (arrayItem && currentArray) {
      data[currentArray].push(arrayItem[1].replace(/^['"]|['"]$/g, ''));
      continue;
    }
    const field = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);
    if (!field) continue;
    const [, key, rawValue] = field;
    const value = rawValue.trim();
    currentArray = null;
    if (!value) {
      data[key] = [];
      currentArray = key;
      continue;
    }
    if (/^(true|false)$/.test(value)) data[key] = value === 'true';
    else if (/^-?\d+(\.\d+)?$/.test(value)) data[key] = Number(value);
    else data[key] = value.replace(/^['"]|['"]$/g, '');
  }
  return data;
}

const errors = [];
const warnings = [];

for (const dir of articleDirs) {
  const absolute = path.join(root, dir);
  let entries = [];
  try {
    entries = await fs.readdir(absolute);
  } catch {
    continue;
  }

  for (const file of entries.filter((name) => /\.(md|mdx)$/.test(name))) {
    const full = path.join(absolute, file);
    const source = await fs.readFile(full, 'utf8');
    const fm = parseFrontmatter(source);
    const id = `${dir}/${file}`;

    if (fm.draft === true) continue;

    const evidence = fm.evidence ?? 'redakce';
    const contentMode = fm.contentMode ?? (dir === 'recenze' ? 'zdrojovany-profil' : 'redakcni');

    if (!fm.reviewedAt) warnings.push(`${id}: chybí reviewedAt`);
    if (!fm.sourceNote && evidence !== 'redakce') warnings.push(`${id}: evidence=${evidence}, ale chybí sourceNote`);

    if (contentMode === 'plny-test') {
      if (!fm.testDuration) errors.push(`${id}: contentMode=plny-test vyžaduje testDuration`);
      if (typeof fm.printHours !== 'number') errors.push(`${id}: contentMode=plny-test vyžaduje printHours`);
      if (!Array.isArray(fm.failures)) errors.push(`${id}: contentMode=plny-test vyžaduje failures (klidně prázdné pole)`);
      if (!['vlastni-mereni', 'kombinace'].includes(evidence)) {
        errors.push(`${id}: contentMode=plny-test vyžaduje evidence=vlastni-mereni nebo kombinace`);
      }
      if (dir === 'recenze' && !fm.disclosure) {
        errors.push(`${id}: plná recenze musí mít disclosure (koupeno/zapůjčeno/affiliate vztah)`);
      }
    }

    if (typeof fm.score === 'number') {
      if (contentMode !== 'plny-test') {
        errors.push(`${id}: číselné score je povoleno pouze s contentMode=plny-test`);
      }
      if (!fm.testDuration) errors.push(`${id}: číselné score vyžaduje testDuration`);
      if (typeof fm.printHours !== 'number') errors.push(`${id}: číselné score vyžaduje printHours`);
      if (!Array.isArray(fm.failures)) errors.push(`${id}: číselné score vyžaduje failures (klidně prázdné pole)`);
      if (!['vlastni-mereni', 'kombinace'].includes(evidence)) {
        errors.push(`${id}: číselné score vyžaduje evidence=vlastni-mereni nebo kombinace`);
      }
    }
  }
}

for (const warning of warnings) console.warn(`EDITORIAL WARNING: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`EDITORIAL ERROR: ${error}`);
  process.exit(1);
}
console.log(`Editorial checks passed${warnings.length ? ` with ${warnings.length} warning(s)` : ''}.`);
