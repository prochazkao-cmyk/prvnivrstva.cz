export const categoryOrder = [
  'clanky',
  'rady-a-tipy',
  'stroje',
  'recenze',
  'novinky',
  'technologie',
] as const;

export type CategoryId = (typeof categoryOrder)[number];

export interface Category {
  id: CategoryId;
  label: string;
  href: string;
  description: string;
  intro: string;
}

export const categories: Record<CategoryId, Category> = {
  clanky: {
    id: 'clanky',
    label: 'Články',
    href: '/clanky/',
    description: 'Delší texty k problémům, které se nevměstnají do návodu na půl stránky.',
    intro:
      'Pomalé čtení k věcem, které se v dílně opakují: materiály, volba stroje, firmware. Každý text má konkrétní závěr, ne jen přehled pojmů.',
  },
  'rady-a-tipy': {
    id: 'rady-a-tipy',
    label: 'Rady a tipy',
    href: '/rady-a-tipy/',
    description: 'Krátké postupy, které jdou zkusit ještě dnes.',
    intro:
      'Jedna potíž, jeden postup. Žádné „10 hacků, které musíte znát“. Když rada potřebuje výjimku, napíšeme ji.',
  },
  stroje: {
    id: 'stroje',
    label: 'Stroje',
    href: '/stroje/',
    description: 'Profily tiskáren. Komu sedí a kde je kompromis.',
    intro:
      'Přehledy strojů, ne unboxing. Silné stránky, slabiny a komu dává smysl — bez laboratorního protokolu. Hlubší verdikt, když ho máme, zůstává v recenzích.',
  },
  recenze: {
    id: 'recenze',
    label: 'Recenze',
    href: '/recenze/',
    description: 'Poznámky z dílny. Žádné unboxingové ódy.',
    intro:
      'Orientační verdikty, ne laboratorní protokol. Píšeme, komu stroj dává smysl a jakou daň za něj zaplatíte — časem, díly, nebo uzavřeným firmware.',
  },
  novinky: {
    id: 'novinky',
    label: 'Novinky',
    href: '/novinky/',
    description: 'Co se děje a co z toho má smysl řešit.',
    intro:
      'Měsíční přehledy. Ne každý launch, jen to, co mění nákup, údržbu, nebo způsob, jakým čtete tiskové zprávy.',
  },
  technologie: {
    id: 'technologie',
    label: 'Technologie',
    href: '/technologie/',
    description: 'FDM, SLA, SLS, MJF — kdy která metoda dává smysl.',
    intro:
      'Čtyři primery. Stolní tiskárna, pryskyřice a dva práškové procesy, které si většinou objednáte, ne koupíte do garáže.',
  },
};

export function isCategory(value: string): value is CategoryId {
  return (categoryOrder as readonly string[]).includes(value);
}
