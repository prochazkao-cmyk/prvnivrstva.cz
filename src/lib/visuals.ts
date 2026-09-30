export type VisualAsset = {
  src: string;
  alt: string;
  source: string;
};

export const machineVisuals: Record<string, VisualAsset> = {
  'prusa-mk4s': {
    src: 'https://www.prusa3d.com/cdn-cgi/image/width%3D1024%2Cformat%3Dauto%2Cquality%3D85/content/images/product/6fa09199-b73f-4ad8-afe9-04f70c8f1d8c.jpg',
    alt: 'Original Prusa MK4S na produktové fotografii výrobce',
    source: 'Foto výrobce · Prusa Research',
  },
  'bambu-p1s-x1c': {
    src: 'https://bambulab-us.myshopify.com/cdn/shop/files/Group_48167_1_800x.png?v=1733448015',
    alt: 'Bambu Lab P1S s AMS na produktové fotografii výrobce',
    source: 'Foto výrobce · Bambu Lab',
  },
  'creality-k1-k1c': {
    src: 'https://cdn.shopify.com/s/files/1/0893/0603/8637/files/K1C_1_2.png?v=1762200602',
    alt: 'Creality K1C na produktové fotografii výrobce',
    source: 'Foto výrobce · Creality',
  },
  'formlabs-form-4': {
    src: 'https://formlabs-media.formlabs.com/filer_public/3f/30/3f30aed3-1e0c-44e5-9750-7465ecc415cc/formlabs_f4_front_cover_closed_eng_light_ik_240321_store.png',
    alt: 'Formlabs Form 4 na produktové fotografii výrobce',
    source: 'Foto výrobce · Formlabs',
  },
};

export const problemVisuals: Record<string, VisualAsset> = {
  warping: {
    src: 'https://help.prusa3d.com/wp-content/uploads/2022/02/90014ff5fc80d10b.jpg',
    alt: 'Makro výtisku se stringingem mezi kužely',
    source: 'Diagnostická fotografie · Prusa Knowledge Base',
  },
  stringing: {
    src: 'https://help.prusa3d.com/wp-content/uploads/2022/02/90014ff5fc80d10b.jpg',
    alt: 'Stringing a jemné vlasce mezi částmi výtisku',
    source: 'Diagnostická fotografie · Prusa Knowledge Base',
  },
  'prvni-vrstva': {
    src: 'https://help.prusa3d.com/wp-content/uploads/underextrusion.jpg',
    alt: 'Porovnání podextrudovaného a správného povrchu výtisku',
    source: 'Diagnostická fotografie · Prusa Knowledge Base',
  },
  'sloni-noha': {
    src: 'https://help.prusa3d.com/wp-content/uploads/elephant_foot.png',
    alt: 'Schéma rozšířené spodní vrstvy neboli elephant foot',
    source: 'Technická ilustrace · Prusa Knowledge Base',
  },
  'vlhky-filament': {
    src: 'https://help.prusa3d.com/wp-content/uploads/underextrusion.jpg',
    alt: 'Detail povrchu výtisku s vadami extruze',
    source: 'Diagnostická fotografie · Prusa Knowledge Base',
  },
  'petg-struny': {
    src: 'https://help.prusa3d.com/wp-content/uploads/2022/02/90014ff5fc80d10b.jpg',
    alt: 'PETG stringing mezi částmi modelu',
    source: 'Diagnostická fotografie · Prusa Knowledge Base',
  },
  'z-offset': {
    src: 'https://help.prusa3d.com/wp-content/uploads/underextrusion.jpg',
    alt: 'Detail rozdílu v extruzi a povrchu výtisku',
    source: 'Diagnostická fotografie · Prusa Knowledge Base',
  },
  flow: {
    src: 'https://help.prusa3d.com/wp-content/uploads/underextrusion.jpg',
    alt: 'Porovnání podextruze a správně vytištěného povrchu',
    source: 'Diagnostická fotografie · Prusa Knowledge Base',
  },
};

/**
 * Realistic editorial stand-ins for homepage photo gaps.
 * Not documentary photos of this workshop and not manufacturer assets.
 * See CONTENT_CREDITS.md.
 */
export const editorialVisuals = {
  heroWarm: {
    src: '/media/editorial/hero-first-layer-warm.jpg',
    alt: 'Makro trysky kladoucí první vrstvu na texturovanou podložku',
    source: 'Ilustrační záběr',
  },
  heroCool: {
    src: '/media/editorial/hero-first-layer-cool.jpg',
    alt: 'Makro první vrstvy v uzavřené tiskové komoře',
    source: 'Ilustrační záběr',
  },
  workshop: {
    src: '/media/editorial/workshop-bench.jpg',
    alt: 'Dílenský stůl se dvěma FDM tiskárnami, nářadím a filamentem',
    source: 'Ilustrační záběr',
  },
  handPrint: {
    src: '/media/editorial/hand-printed-part.jpg',
    alt: 'Ruka držící čerstvě vytištěný funkční díl',
    source: 'Ilustrační záběr',
  },
  filamentWarm: {
    src: '/media/editorial/filament-spools-warm.jpg',
    alt: 'Detail cívek filamentu v teplém světle dílny',
    source: 'Ilustrační záběr',
  },
  filamentCool: {
    src: '/media/editorial/filament-spools-cool.jpg',
    alt: 'Detail matných cívek filamentu v chladnějším světle',
    source: 'Ilustrační záběr',
  },
  printsBench: {
    src: '/media/editorial/prints-on-bench.jpg',
    alt: 'Hotové výtisky na pracovním stole',
    source: 'Ilustrační záběr',
  },
  layerCoarse: {
    src: '/media/editorial/first-layer-coarse.jpg',
    alt: 'Hrubší první vrstva s mezerami mezi linkami',
    source: 'Ilustrační záběr',
  },
  layerFine: {
    src: '/media/editorial/first-layer-fine.jpg',
    alt: 'Jemná první vrstva, linky se dotýkají',
    source: 'Ilustrační záběr',
  },
  bedCalibration: {
    src: '/media/editorial/bed-calibration.jpg',
    alt: 'Kalibrační čtverec první vrstvy na texturované podložce',
    source: 'Ilustrační záběr',
  },
  printToolHolder: {
    src: '/media/editorial/print-tool-holder.jpg',
    alt: 'Vytištěný držák na nářadí',
    source: 'Ilustrační záběr',
  },
  printLamp: {
    src: '/media/editorial/print-lamp.jpg',
    alt: 'Vytištěné geometrické stínidlo',
    source: 'Ilustrační záběr',
  },
  printHinge: {
    src: '/media/editorial/print-hinge.jpg',
    alt: 'Vytištěný náhradní klip',
    source: 'Ilustrační záběr',
  },
  printBins: {
    src: '/media/editorial/print-bins.jpg',
    alt: 'Vytištěné přihrádky na spojovací materiál',
    source: 'Ilustrační záběr',
  },
} as const satisfies Record<string, VisualAsset>;

export const materialVisuals = {
  prusament: {
    src: 'https://backend.prusa3d.com/cdn-cgi/image/format%3Dauto%2Cquality%3D85/wp-content/uploads/prusament05.jpg',
    alt: 'Cívky Prusamentu z oficiálních media assets',
    source: 'Foto výrobce · Prusa Research',
  },
  bambu: {
    src: 'https://cdn.shopify.com/s/files/1/0611/4036/9460/files/img_v2_9b68b7e9-b5cd-4ae8-8d1a-2f6d385379cg_2_1.png?v=1689064582',
    alt: 'Cívka Bambu Lab PLA Basic',
    source: 'Foto výrobce · Bambu Lab',
  },
};
