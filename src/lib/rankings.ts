import type { Article } from './articles';

/**
 * Editorial presentation for machine cards.
 * Numeric scores only come from a published review with a documented test protocol.
 * Prices stay empty until the CZ/SK comparison feed is live; we never publish editorial estimates as current prices.
 */
export const rankFilters = [
  { id: 'all', label: 'Přehled' },
  { id: 'do-10000', label: 'Do 10 000 Kč' },
  { id: 'zacatecnik', label: 'Pro začátečníky' },
  { id: 'uzavrene', label: 'Uzavřené / technické materiály' },
  { id: 'multimaterial', label: 'Multimateriál' },
  { id: 'resin', label: 'Resin' },
] as const;

export type RankFilterId = Exclude<(typeof rankFilters)[number]['id'], 'all'>;
export type RankTag = RankFilterId | 'pla';

export const editorialNote =
  'Karty jsou profily podle použití, ne placený žebříček. Číselná známka se zobrazí až z recenze s testovacím protokolem. Ceny zobrazíme až z živých CZ/SK feedů s časem poslední aktualizace; affiliate provize nesmí měnit pořadí.';

export interface RankCard {
  id: string;
  href: string;
  name: string;
  order: number;
  badge: string;
  specLine: string;
  blurb: string;
  score: number | null;
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
    badge: 'Otevřená dílna',
    specLine: 'Cartesian · 250×210×220 mm · otevřená',
    blurb: 'Otevřená a servisovatelná platforma pro PLA a PETG. Pokud už dnes potřebujete komoru, dívejte se jinam.',
    score: null,
    scoreDraft: true,
    scoreCaption: 'bez testovací známky',
    reviewHref: '/recenze/prusa-mk4s/',
    priceFrom: null,
    priceCaption: 'živá CZ cena se připravuje',
    filters: ['zacatecnik', 'pla'],
    photoLabel: 'PROFIL STROJE',
    kinematics: 'Cartesian, pohyblivá deska',
    volume: '250 × 210 × 220 mm',
    chamber: 'Volitelná, není z výroby',
    multi: 'MMU',
    software: 'PrusaSlicer',
    level: 'Začátečník',
  },
  {
    id: 'bambu-p1s-x1c',
    name: 'Bambu Lab P1S / X1C',
    order: 2,
    badge: 'Uzavřený ekosystém',
    specLine: 'CoreXY · 256×256×256 mm · uzavřená',
    blurb: 'Uzavřená CoreXY s pohodlným multimateriálovým ekosystémem. Kompromisem je uzavřenější software a servisní filozofie.',
    score: null,
    scoreDraft: true,
    scoreCaption: 'bez testovací známky',
    reviewHref: '/recenze/bambu-p1s/',
    priceFrom: null,
    priceCaption: 'živá CZ cena se připravuje',
    filters: ['zacatecnik', 'uzavrene', 'multimaterial', 'pla'],
    photoLabel: 'PROFIL STROJE',
    kinematics: 'CoreXY',
    volume: 'cca 256 × 256 × 256 mm',
    chamber: 'Z výroby, pasivní',
    multi: 'AMS',
    software: 'Bambu Studio',
    level: 'Začátečník',
  },
  {
    id: 'creality-k1-k1c',
    name: 'Creality K1 / K1C',
    order: 3,
    badge: 'CoreXY profil',
    specLine: 'CoreXY · cca 220×220×220 mm · uzavřená',
    blurb: 'Profil stroje pro uživatele, který počítá s větší ochotou ladit a ověřovat konkrétní revizi stroje.',
    score: null,
    scoreDraft: true,
    scoreCaption: 'bez testovací známky',
    priceFrom: null,
    priceCaption: 'živá CZ cena se připravuje',
    filters: ['uzavrene'],
    photoLabel: 'PROFIL STROJE',
    kinematics: 'CoreXY',
    volume: 'cca 220 × 220 × 220 mm',
    chamber: 'Z výroby',
    multi: 'Ne jako hlavní důvod nákupu',
    software: 'Creality Print / Orca',
    level: 'Pokročilý',
  },
  {
    id: 'formlabs-form-4',
    name: 'Formlabs Form 4',
    order: 4,
    badge: 'Resin workflow',
    specLine: 'Resin · uzavřený pracovní proces · PreForm',
    blurb: 'Profesionálněji pojatý resinový workflow pro dílnu, která platí za opakovatelnost a návazný proces. Na občasné figurky je to jiná kategorie nákupu.',
    score: null,
    scoreDraft: true,
    scoreCaption: 'bez testovací známky',
    priceFrom: null,
    priceCaption: 'živá CZ cena se připravuje',
    filters: ['resin'],
    photoLabel: 'PROFIL STROJE',
    kinematics: 'Resin',
    volume: 'Ověřte aktuální specifikaci výrobce',
    chamber: 'Uzavřený materiálový ekosystém',
    multi: 'Materiálový systém Formlabs',
    software: 'PreForm',
    level: 'Profi',
  },
];

function fallback(article: Article, order: number): RankCard {
  const name = article.product ?? article.title;
  const filters: RankFilterId[] = article.level === 'začátečník' ? ['zacatecnik'] : [];
  const hasPublishedScore = article.score !== undefined && article.evidence !== 'demo';
  return {
    id: article.id,
    href: article.href,
    name,
    order,
    badge: 'Profil',
    specLine: [article.technologies.join(' · '), article.level].filter(Boolean).join(' · ') || 'Viz profil',
    blurb: article.description,
    score: hasPublishedScore ? article.score ?? null : null,
    scoreDraft: !hasPublishedScore,
    scoreCaption: hasPublishedScore ? 'z publikovaného testu' : 'bez testovací známky',
    priceFrom: null,
    priceCaption: 'živá CZ cena se připravuje',
    filters,
    photoLabel: 'PROFIL STROJE',
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
