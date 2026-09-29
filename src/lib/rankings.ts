import type { Article } from './articles';

/**
 * Editorial presentation for machine cards.
 * Unverified concepts never render as a numeric score in the UI.
 * PriceFrom is an editorial orientation only, never a live shop price.
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
/** Extra card tags used by the homepage finder, not by the chip row. */
export type RankTag = RankFilterId | 'pla';

export const editorialNote =
  'Pořadí karet je redakční orientace pro běžnou dílnu, ne laboratorní žebříček. Číselná známka se zobrazuje jen tam, kde odkazuje na publikovaný verdikt. Ceny („od … Kč“) jsou zaokrouhlený redakční odhad k září 2026, ne živý ceník. Technické specifikace před nákupem ověřte u výrobce.';

export interface RankCard {
  id: string;
  href: string;
  name: string;
  order: number;
  badge: string;
  specLine: string;
  blurb: string;
  score: number | null;
  /** True when the number is only an internal/editorial concept and must not render as a score. */
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
    blurb:
      'Otevřená a servisovatelná platforma pro PLA a PETG. Pokud už dnes potřebujete komoru, dívejte se jinam.',
    score: 8,
    scoreDraft: false,
    scoreCaption: 'publikovaný verdikt MK4S',
    reviewHref: '/recenze/prusa-mk4s/',
    priceFrom: 19000,
    priceCaption: 'redakční odhad · kit',
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
    badge: 'Rychlý ekosystém',
    specLine: 'CoreXY · 256×256×256 mm · uzavřená',
    blurb:
      'Rychlá uzavřená CoreXY s pohodlným multimateriálovým ekosystémem. Kompromisem je uzavřenější software a servisní filozofie.',
    score: 8,
    scoreDraft: false,
    scoreCaption: 'publikovaný verdikt P1S',
    reviewHref: '/recenze/bambu-p1s/',
    priceFrom: 15000,
    priceCaption: 'redakční odhad · P1S bez AMS',
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
    badge: 'CoreXY za nižší vstup',
    specLine: 'CoreXY · cca 220×220×220 mm · uzavřená',
    blurb:
      'Rychlé CoreXY za nižší vstupní cenu. Dává smysl uživateli, který počítá s větší ochotou ladit a ověřovat revizi stroje.',
    score: 7,
    scoreDraft: true,
    scoreCaption: 'známku zatím nezveřejňujeme',
    priceFrom: 12000,
    priceCaption: 'redakční odhad · K1',
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
    blurb:
      'Profesionálněji pojatý resinový workflow pro dílnu, která platí za opakovatelnost a návazný proces. Na občasné figurky je to jiná kategorie nákupu.',
    score: 8,
    scoreDraft: true,
    scoreCaption: 'známku zatím nezveřejňujeme',
    priceFrom: 90000,
    priceCaption: 'redakční odhad · stroj',
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
    score: article.score ?? null,
    scoreDraft: !hasPublishedScore,
    scoreCaption: hasPublishedScore ? 'z publikovaného textu' : 'bez ověřené známky',
    priceFrom: null,
    priceCaption: 'cena v profilu',
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
