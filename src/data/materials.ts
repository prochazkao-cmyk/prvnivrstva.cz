export interface MaterialReference {
  slug: string;
  name: string;
  short: string;
  nozzle: string;
  bed: string;
  drying: string;
  enclosure: 'ne' | 'doporučeno' | 'podle dílu';
  moisture: 'nižší' | 'střední' | 'vyšší';
  bestFor: string;
  watchFor: string;
  sourceLabel: string;
  sourceUrl: string;
  sourceScope: string;
}

/**
 * Orientation data for the material chooser.
 * Printing ranges come from Prusa's public material guide; drying conditions are
 * explicitly scoped to Prusament/Prusa guidance and are NOT universal presets.
 * The page tells readers to prefer the datasheet for their exact filament.
 */
export const materials: MaterialReference[] = [
  {
    slug: 'pla',
    name: 'PLA',
    short: 'Nejjednodušší start pro prototypy, dekorace a běžné díly do interiéru.',
    nozzle: '185–235 °C',
    bed: '50–60 °C',
    drying: 'Prusament: 45 °C / 6 h',
    enclosure: 'ne',
    moisture: 'nižší',
    bestFor: 'prototypy, modely, kryty, vizuální díly',
    watchFor: 'nižší teplotní odolnost a křehčí chování než u houževnatějších materiálů',
    sourceLabel: 'Prusa Material Guide + Drying Filament',
    sourceUrl: 'https://help.prusa3d.com/filament-material-guide',
    sourceScope: 'Rozsah tisku je orientační materiálový guide; sušení je doporučení pro Prusament.',
  },
  {
    slug: 'petg',
    name: 'PETG',
    short: 'Univerzální technický filament s dobrou houževnatostí a přilnavostí vrstev.',
    nozzle: '215–270 °C',
    bed: '70–90 °C',
    drying: 'Prusament: 55 °C / 6 h',
    enclosure: 'ne',
    moisture: 'střední',
    bestFor: 'držáky, kryty, mechanické díly, běžná dílenská výroba',
    watchFor: 'stringing a příliš silná adheze na některých hladkých PEI površích',
    sourceLabel: 'Prusa PETG / Material Guide',
    sourceUrl: 'https://help.prusa3d.com/cs/article/petg_2059',
    sourceScope: 'Konkrétní Prusament profil je užší než obecný rozsah v materiálovém guide.',
  },
  {
    slug: 'asa',
    name: 'ASA',
    short: 'Technický materiál pro venek a teplejší prostředí, ale s výrazně vyššími nároky na tisk.',
    nozzle: '220–275 °C',
    bed: '90–110 °C',
    drying: 'Prusament: 80 °C / 4 h',
    enclosure: 'doporučeno',
    moisture: 'střední',
    bestFor: 'venkovní díly, kryty, funkční součásti s vyšší teplotní a UV odolností',
    watchFor: 'warping, smršťování a potřeba stabilnějšího tepelného prostředí',
    sourceLabel: 'Prusa ASA / Material Guide',
    sourceUrl: 'https://help.prusa3d.com/article/asa_1809',
    sourceScope: 'Obecný rozsah materiálu; konkrétní filament a stroj mohou používat užší profil.',
  },
  {
    slug: 'tpu',
    name: 'TPU / Flex',
    short: 'Pružné materiály pro tlumení, těsnění, gripy a díly, které se mají deformovat.',
    nozzle: '220–260 °C',
    bed: '40–85 °C',
    drying: 'Prusament TPU: 60 °C / 4–6 h',
    enclosure: 'podle dílu',
    moisture: 'vyšší',
    bestFor: 'těsnění, nožičky, ochranné prvky, pružné spojky a gripy',
    watchFor: 'podávání filamentu, rychlost tisku a citlivost na vlhkost',
    sourceLabel: 'Prusa Material Guide + Drying Filament',
    sourceUrl: 'https://help.prusa3d.com/filament-material-guide',
    sourceScope: 'Flex je široká rodina; tvrdost a výrobce výrazně mění vhodné nastavení.',
  },
];

export const materialSources = [
  {
    label: 'Prusa Knowledge Base — Filament Material Guide',
    url: 'https://help.prusa3d.com/filament-material-guide',
    note: 'Orientační rozsahy trysky/podložky a požadavky na enclosure/drybox.',
  },
  {
    label: 'Prusa Knowledge Base — Drying filament',
    url: 'https://help.prusa3d.com/article/drying-filament_332086',
    note: 'Doby a teploty sušení jsou výrobcem uváděné pro jeho materiály; nejsou univerzálním presetem.',
  },
  {
    label: 'Bambu Lab — Filament Guide',
    url: 'https://cdn1.bambulab.com/filament/filament-guide/bcv8wbl4hj/filament-guide-en.pdf',
    note: 'Druhý výrobní zdroj pro kontrolu, že doporučení se mezi konkrétními filamenty a ekosystémy liší.',
  },
] as const;
