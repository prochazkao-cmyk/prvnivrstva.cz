/**
 * Color from a Heureka feed.
 *
 * The only color field is PARAM Barva or Color (3Dfil also has PARAM Multicolor).
 * The product name is not a color source. It is used only to reject a feed
 * color that names a different hue. A missing or conflicting color stays empty
 * so the card says neuvedeno instead of joining the wrong group.
 * Canonical names are lowercase Czech. Weight and diameter are not read here.
 */

const HUE = new Map([
  ['cerna', 'černá'],
  ['cerny', 'černá'],
  ['cerne', 'černá'],
  ['cernou', 'černá'],
  ['black', 'černá'],
  ['bila', 'bílá'],
  ['bily', 'bílá'],
  ['bile', 'bílá'],
  ['bilou', 'bílá'],
  ['white', 'bílá'],
  ['modra', 'modrá'],
  ['modry', 'modrá'],
  ['modre', 'modrá'],
  ['modrou', 'modrá'],
  ['blue', 'modrá'],
  ['zelena', 'zelená'],
  ['zeleny', 'zelená'],
  ['zelene', 'zelená'],
  ['zelenou', 'zelená'],
  ['green', 'zelená'],
  ['seda', 'šedá'],
  ['sedy', 'šedá'],
  ['sede', 'šedá'],
  ['sedou', 'šedá'],
  ['grey', 'šedá'],
  ['gray', 'šedá'],
  ['cervena', 'červená'],
  ['cerveny', 'červená'],
  ['cervene', 'červená'],
  ['cervenou', 'červená'],
  ['red', 'červená'],
  ['zluta', 'žlutá'],
  ['zluty', 'žlutá'],
  ['zlute', 'žlutá'],
  ['zlutou', 'žlutá'],
  ['yellow', 'žlutá'],
  ['ruzova', 'růžová'],
  ['ruzovy', 'růžová'],
  ['ruzove', 'růžová'],
  ['pink', 'růžová'],
  ['oranzova', 'oranžová'],
  ['oranzovy', 'oranžová'],
  ['oranzove', 'oranžová'],
  ['orange', 'oranžová'],
  ['fialova', 'fialová'],
  ['fialovy', 'fialová'],
  ['fialove', 'fialová'],
  ['purple', 'fialová'],
  ['violet', 'fialová'],
  ['hneda', 'hnědá'],
  ['hnedy', 'hnědá'],
  ['hnede', 'hnědá'],
  ['hnedou', 'hnědá'],
  ['brown', 'hnědá'],
  ['stribrna', 'stříbrná'],
  ['stribrny', 'stříbrná'],
  ['stribrne', 'stříbrná'],
  ['silver', 'stříbrná'],
  ['zlata', 'zlatá'],
  ['zlaty', 'zlatá'],
  ['zlate', 'zlatá'],
  ['gold', 'zlatá'],
  ['bezova', 'béžová'],
  ['bezovy', 'béžová'],
  ['bezove', 'béžová'],
  ['beige', 'béžová'],
  ['bronzova', 'bronzová'],
  ['bronzovy', 'bronzová'],
  ['bronze', 'bronzová'],
  ['medena', 'měděná'],
  ['medeny', 'měděná'],
  ['copper', 'měděná'],
  ['drevo', 'dřevo'],
  ['drevena', 'dřevo'],
  ['dreveny', 'dřevo'],
  ['wood', 'dřevo'],
  ['telova', 'tělová'],
  ['telovy', 'tělová'],
  ['skin', 'tělová'],
  ['tyrkysova', 'tyrkysová'],
  ['tyrkysovy', 'tyrkysová'],
  ['turquoise', 'tyrkysová'],
  ['azurova', 'azurová'],
  ['azurovy', 'azurová'],
  ['prirodni', 'přírodní'],
  ['natural', 'přírodní'],
  ['natur', 'přírodní'],
  ['transparentni', 'transparentní'],
  ['transparentne', 'transparentní'],
  ['transparent', 'transparentní'],
  ['pruhledna', 'transparentní'],
  ['pruhledny', 'transparentní'],
  ['pruhledne', 'transparentní'],
  ['clear', 'transparentní'],
  ['translucent', 'transparentní'],
  ['vicebarevna', 'vícebarevná'],
  ['vicebarevny', 'vícebarevná'],
  ['multicolor', 'vícebarevná'],
  ['rainbow', 'vícebarevná'],
  ['mramor', 'mramor'],
  ['mramorova', 'mramor'],
  ['marble', 'mramor'],
  ['mosazna', 'mosazná'],
  ['brass', 'mosazná'],
]);

const MODIFIER = new Map([
  ['matna', 'matná'],
  ['matny', 'matná'],
  ['matne', 'matná'],
  ['matte', 'matná'],
  ['metalicka', 'metalická'],
  ['metalicky', 'metalická'],
  ['metalicke', 'metalická'],
  ['metallic', 'metalická'],
  ['s trpytkami', 's třpytkami'],
  ['glitter', 's třpytkami'],
  ['sviti ve tme', 'svítí ve tmě'],
  ['svitici', 'svítící'],
  ['glow', 'svítící'],
]);

const MODIFIER_ORDER = ['matná', 'metalická', 's třpytkami', 'svítící', 'svítí ve tmě'];

function fold(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function unique(values) {
  const seen = new Set();
  const out = [];
  for (const value of values) {
    if (seen.has(value)) continue;
    seen.add(value);
    out.push(value);
  }
  return out;
}

export function canonicalizeColor(table, value) {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim().replace(/\s+/g, ' ');
  if (trimmed === '') return null;
  if (table && Object.prototype.hasOwnProperty.call(table, trimmed)) return table[trimmed];
  const lower = trimmed.toLocaleLowerCase('cs-CZ');
  if (table && Object.prototype.hasOwnProperty.call(table, lower)) return table[lower];
  return lower;
}

function analyze(value) {
  const folded = fold(value);
  if (MODIFIER.has(folded)) return { hues: [], modifiers: [MODIFIER.get(folded)], unknown: 0 };
  const tokens = folded.split(/[^a-z0-9]+/).filter(Boolean);
  const hues = [];
  const modifiers = [];
  let unknown = 0;
  for (const token of tokens) {
    if (HUE.has(token)) hues.push(HUE.get(token));
    else if (MODIFIER.has(token)) modifiers.push(MODIFIER.get(token));
    else unknown += 1;
  }
  return { hues: unique(hues), modifiers: unique(modifiers), unknown };
}

function nameHues(productName) {
  return analyze(productName || '').hues;
}

function contradicted(productName, allowed) {
  return nameHues(productName).some((hue) => !allowed.includes(hue));
}

function withModifiers(label, modifiers) {
  const extra = MODIFIER_ORDER.filter((item) => modifiers.includes(item));
  return [label, ...extra].join(' ');
}

/**
 * @param {Array<[string, string]>} params
 * @param {string} productName
 * @param {Record<string, string>} [aliases]
 * @returns {string | undefined} canonical color, or undefined when it is not reliable
 */
export function resolveFeedColor(params, productName, aliases = {}) {
  const rawValues = [];
  let multi = false;
  for (const [name, value] of params) {
    const key = fold(name);
    if (key === 'multicolor' && String(value ?? '').trim()) multi = true;
    if ((key === 'barva' || key === 'color') && String(value ?? '').trim()) rawValues.push(String(value).trim());
  }
  if (rawValues.length === 0 && !multi) return undefined;

  const canonicalValues = unique(rawValues.map((value) => canonicalizeColor(aliases, value)).filter(Boolean));
  const parts = canonicalValues.map((value) => ({ value, ...analyze(value) }));
  const opaque = parts.filter((part) => part.unknown > 0 || part.hues.length > 1);
  if (opaque.length > 0) {
    if (opaque.length === 1 && parts.length === 1 && !multi) {
      const allowed = opaque[0].hues;
      if (allowed.length > 0 && contradicted(productName, allowed)) return undefined;
      if (allowed.length === 0 && nameHues(productName).length > 0) return undefined;
      return opaque[0].value;
    }
    return undefined;
  }

  const hues = unique(parts.flatMap((part) => part.hues));
  const modifiers = unique(parts.flatMap((part) => part.modifiers));
  if (multi) hues.push('vícebarevná');
  const hueSet = unique(hues);
  if (hueSet.includes('vícebarevná')) return 'vícebarevná';

  const plain = hueSet.filter((hue) => hue !== 'vícebarevná');
  if (plain.length === 1) {
    if (contradicted(productName, plain)) return undefined;
    return withModifiers(plain[0], modifiers);
  }
  if (plain.length === 2 && plain.includes('transparentní')) {
    const other = plain.find((hue) => hue !== 'transparentní');
    if (contradicted(productName, plain)) return undefined;
    return withModifiers(`transparentní ${other}`, modifiers);
  }
  if (plain.length === 0 && modifiers.length > 0 && nameHues(productName).length === 0) {
    return withModifiers('', modifiers).trim();
  }
  return undefined;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

export function proveColorRules() {
  const aliases = {
    Bílá: 'bílá',
    Černá: 'černá',
    Červená: 'červená',
    Žlutá: 'žlutá',
    Hnědá: 'hnědá',
    Transparent: 'transparentní',
    Transparentní: 'transparentní',
    natural: 'přírodní',
    Multicolor: 'vícebarevná',
  };
  assert(resolveFeedColor([['Barva', 'Bílá']], 'PROF. LAB | PETG | MATTE Bílá | 1.75mm | 1kg', aliases) === 'bílá', 'agreeing white stays bílá');
  assert(resolveFeedColor([['Barva', 'bílá']], 'PETG filament bílý', aliases) === 'bílá', 'lowercase bílá stays bílá');
  assert(resolveFeedColor([['Barva', 'Bílá']], 'PROF. LAB | PETG | Transparent | 1.75mm | 1kg', aliases) === undefined, 'white param on a transparent spool is unknown');
  assert(resolveFeedColor([['Barva', 'Bílá']], 'ERYONE | ABS | Černá | 1.75mm | 1kg', aliases) === undefined, 'white param on a black spool is unknown');
  assert(resolveFeedColor([['Barva', 'Červená']], '3DPOWER | PETG | Select Žlutá | 1.75mm | 1kg', aliases) === undefined, 'red param on a yellow spool is unknown');
  assert(resolveFeedColor([['Barva', 'Hnědá']], 'GEEETECH | Pla | Bílá | 1.75mm | 1kg', aliases) === undefined, 'brown param on a white spool is unknown');
  assert(resolveFeedColor([['Barva', 'Černá']], 'PROF. LAB | PETG | Černá | 1.75mm | 1kg', aliases) === 'černá', 'agreeing black stays černá');
  assert(resolveFeedColor([['Barva', 'Šedá']], 'ELEGOO | Rapid PETG | Silver | 1.75mm | 1kg', aliases) === undefined, 'grey param on a silver name is unknown');
  assert(
    resolveFeedColor(
      [
        ['Barva', 'Transparentní'],
        ['Barva', 'Žlutá'],
      ],
      'Filament Professional Lab PETG, Transparentně žlutá',
      aliases,
    ) === 'transparentní žlutá',
    'transparent plus one hue stays a compound, not the first param',
  );
  assert(resolveFeedColor([], 'PROF. LAB | PETG | Černá', aliases) === undefined, 'a name alone does not invent a color');
  assert(resolveFeedColor([['Barva', 'natural']], 'PLA natural', aliases) === 'přírodní', 'natural aliases to přírodní');
  assert(resolveFeedColor([['Barva', 'Transparent']], 'PETG Transparent', aliases) === 'transparentní', 'Transparent aliases to transparentní');
  assert(
    resolveFeedColor(
      [
        ['Barva', 'Černá'],
        ['Barva', 'Červená'],
        ['Multicolor', 'Dvě barvy'],
      ],
      'PLA Silk Dual-color | Černá - Červená',
      aliases,
    ) === 'vícebarevná',
    'an explicit multicolor param is vícebarevná',
  );
  assert(
    resolveFeedColor(
      [
        ['Barva', 'Černá'],
        ['Barva', 'Bílá'],
      ],
      'PETG',
      aliases,
    ) === undefined,
    'two base hues without a rule are unknown',
  );
  assert(canonicalizeColor({ Bílá: 'bílá', transparent: 'transparentní' }, 'Bílá') === 'bílá', 'Bílá canonicalizes');
  assert(canonicalizeColor({ transparent: 'transparentní' }, 'Transparent') === 'transparentní', 'Transparent canonicalizes');
  assert(canonicalizeColor({}, 'Tyrkysová') === 'tyrkysová', 'unlisted colors still share one case');
  console.log('Filament color rules OK.');
}
