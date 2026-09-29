import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

function candidates(pathname) {
  const clean = decodeURIComponent(pathname).replace(/^\/+/, '');
  if (!clean) return [join(root, 'index.html')];
  if (extname(clean)) return [join(root, clean)];
  return [join(root, clean), join(root, clean, 'index.html'), join(root, `${clean}.html`)];
}

const htmlFiles = (await walk(root)).filter((file) => file.endsWith('.html'));
const failures = new Map();
const hrefPattern = /\bhref\s*=\s*["']([^"']+)["']/gi;

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(hrefPattern)) {
    const href = match[1].trim();
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const url = new URL(href, 'https://prvnivrstva.cz');
    if (url.pathname.startsWith('/_astro/')) continue;
    const options = candidates(url.pathname);
    const checks = await Promise.all(options.map(exists));
    if (checks.some(Boolean)) continue;
    const relativeFile = file.replace(root, '');
    const key = url.pathname;
    const refs = failures.get(key) ?? new Set();
    refs.add(relativeFile);
    failures.set(key, refs);
  }
}

if (failures.size) {
  console.error('\nBroken internal links:\n');
  for (const [href, refs] of failures) {
    console.error(`- ${href}`);
    for (const ref of refs) console.error(`    from ${ref}`);
  }
  process.exit(1);
}

console.log(`Internal link check OK (${htmlFiles.length} HTML files).`);
