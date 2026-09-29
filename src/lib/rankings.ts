import type { Article } from './articles';

/**
 * Editorial presentation for stroje cards.
 * Scores and prices that are not backed by a published recenze are drafts:
 * rounded orientation for the layout, not a lab result and not a shop price.
 */
export const rankFilters = [
  { id: 'all', label: 'Celkově' },
  { id: 'do-10000', label: 'Do 10 000 Kč' },
  { id: 'zacatecnik', label: 'Pro začátečníky' },
  { id: 'uzavrene', label: 'Uzavřené / technické materiály' },
  { id: 'multimaterial', label: 'Multimateriál' },
  { id: 'resin', label: 'Resin' },
] as const;

export type RankFilterId = Exclude<(typeof rankFilters)[number]['id'], 'all'>;
/** Extra card tags used by the homepage finder, not by the chip row. */
export type RankTag = RankFilterId | 'pla';

export const editorialNote =
  'Pořadí je redakční pohled pro běžnou dílnu, ne součet známek. Známka s odkazem na recenzi pochází z publikovaného textu. Ostatní známky a všechny ceny („od … Kč“) jsou redakční koncept k září 2026 — zaokrouhlený odhad, ne ceník obchodu. Specifikace jsou orientační, ověřte revizi u výrobce.';

export interface RankCard {
  id: string;
  href: string;
  name: string;
  order: number;
  badge: string;
  specLine: string;
  blurb: string;
  score: number | null;
  /** False only when the number is taken from a published recenze. */
  scoreDraft: boolean;
  scoreCaption: string;
  reviewHref?: string;
  priceFrom: number | null;
  priceCaption: string;
  filters: RankTag[];
  photoLabel: string;
  kinematics: string;
  volume: string;
  chamber: string;
  multi: string;
  software: string;
  level: string;
}

const profiles: Omit<RankCard, 'href'>[] = [
  {
    id: 'prusa-mk4s',
    name: 'Prusa MK4S',
    order: 1,
    badge: 'Volba redakce',
    specLine: 'Cartesian · 250×210×220 mm · otevřená',
    blurb:
      'Otevřená, opravitelná, servis z Prahy. Denní stroj na PLA a PETG — na velké ABS počítejte s boxem.',
    score: 8,
    scoreDraft: false,
    scoreCaption: 'recenze MK4S',
    reviewHref: '/recenze/prusa-mk4s/',
    priceFrom: 19000,
    priceCaption: 'redakční odhad · kit',
    filters: ['zacatecnik', 'pla'],
    photoLabel: '[FOTO: Prusa MK4S]',
    kinematics: 'Cartesian, pohyblivá deska',
    volume: '250 × 210 × 220 mm',
    chamber: 'Volitelná, není z výroby',
    multi: 'MMU — strmější než AMS',
    software: 'PrusaSlicer, otevřenější servis',
    level: 'Začátečník',
  },
  {
    id: 'bambu-p1s-x1c',
    name: 'Bambu Lab P1S / X1C',
    order: 2,
    badge: 'Rychlý start',
    specLine: 'CoreXY · 256×256×256 mm · uzavřená',
    blurb:
      'Rychlá uzavřená CoreXY a AMS skoro bez ladění. Daň je firmware, do kterého vás výrobce nepustí.',
    score: 8,
    scoreDraft: false,
    scoreCaption: 'recenze P1S',
    reviewHref: '/recenze/bambu-p1s/',
    priceFrom: 15000,
    priceCaption: 'redakční odhad · P1S bez AMS',
    filters: ['zacatecnik', 'uzavrene', 'multimaterial', 'pla'],
    photoLabel: '[FOTO: Bambu Lab P1S]',
    kinematics: 'CoreXY',
    volume: 'cca 256 × 256 × 256 mm',
    chamber: 'Z výroby, pasivní',
    multi: 'AMS',
    software: 'Bambu Studio, uzavřenější ekosystém',
    level: 'Začátečník',
  },
  {
    id: 'creality-k1-k1c',
    name: 'Creality K1 / K1C',
    order: 3,
    badge: 'Nejlepší poměr',
    specLine: 'CoreXY · cca 220×220×220 mm · uzavřená',
    blurb:
      'Rychlé CoreXY za dobré peníze. Bere se jako platforma k doladění, ne jako hotový luxus.',
    score: 7,
    scoreDraft: true,
    scoreCaption: 'redakční koncept',
    priceFrom: 12000,
    priceCaption: 'redakční odhad · K1',
    filters: ['uzavrene'],
    photoLabel: '[FOTO: Creality K1]',
    kinematics: 'CoreXY',
    volume: 'cca 220 × 220 × 220 mm',
    chamber: 'Z výroby',
    multi: 'Ne jako hlavní důvod nákupu',
    software: 'Creality Print, často Orca',
    level: 'Pokročilý',
  },
  {
    id: 'formlabs-form-4',
    name: 'Formlabs Form 4',
    order: 4,
    badge: 'Resin pro dílnu',
    specLine: 'Resin · kompaktní komora · PreForm',
    blurb:
      'Resinové workflow pro dílnu, která platí za opakovatelnost. Na občasné figurky je to overkill.',
    score: 8,
    scoreDraft: true,
    scoreCaption: 'redakční koncept',
    priceFrom: 90000,
    priceCaption: 'redakční odhad · stroj',
    filters: ['resin'],
    photoLabel: '[FOTO: Formlabs Form 4]',
    kinematics: 'Resin (LFS / MSLA)',
    volume: 'Menší než FDM — ověřte u výrobce',
    chamber: 'Uzavřený materiálový ekosystém',
    multi: 'Knihovna resinu Formlabs',
    software: 'PreForm, wash / cure',
    level: 'Profi',
  },
];

function fallback(article: Article, order: number): RankCard {
  const name = article.product ?? article.title;
  const filters: RankFilterId[] = article.level === 'začátečník' ? ['zacatecnik'] : [];
  return {
    id: article.id,
    href: article.href,
    name,
    order,
    badge: 'Profil',
    specLine: [article.technologies.join(' · '), article.level].filter(Boolean).join(' · ') || 'Viz profil',
    blurb: article.description,
    score: article.score ?? null,
    scoreDraft: article.score === undefined,
    scoreCaption: article.score === undefined ? 'známku doplníme' : 'z textu',
    priceFrom: null,
    priceCaption: 'cena v profilu',
    filters,
    photoLabel: `[FOTO: ${name}]`,
    kinematics: article.technologies[0] ?? '—',
    volume: 'Viz profil',
    chamber: 'Viz profil',
    multi: '—',
    software: '—',
    level: article.level ?? '—',
  };
}

export function buildRankCards(articles: Article[]): RankCard[] {
  const byId = new Map(articles.map((article) => [article.id, article]));
  const cards: RankCard[] = [];

  for (const profile of profiles) {
    const article = byId.get(profile.id);
    if (!article) continue;
    cards.push({ ...profile, href: article.href });
    byId.delete(profile.id);
  }

  let extra = cards.reduce((max, card) => Math.max(max, card.order), 0) + 1;
  for (const article of byId.values()) {
    cards.push(fallback(article, extra));
    extra += 1;
  }

  return cards.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name, 'cs'));
}
