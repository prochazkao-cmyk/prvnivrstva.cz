/**
 * Exactly three public Heureka feeds. No other shop URL is fetched.
 * Aurapol and Filament PM are recorded as skipped: they have no public
 * structured feed, and one filament-category HTML page each had no weight
 * field separate from the product title.
 */

export const BOT_UA =
  'PrvniVrstvaFilamentBot/1.0 (+https://prvnivrstva.cz/srovnavac/; public filament price feed)';

export const REQUEST_GAP_MS = 2000;
export const CACHE_MAX_AGE_MS = 12 * 60 * 60 * 1000;
export const SNAPSHOT_FETCHED_AT = '2026-10-03T11:20:00.000Z';

export const PUBLIC_SHOPS = [
  {
    shopId: 'materialpro3d',
    shopName: 'Materialpro3D',
    country: 'CZ',
    source: 'xml',
    kind: 'heureka-xml',
    url: 'https://www.materialpro3d.cz/heureka/export/products.xml',
    snapshot: 'scripts/fixtures/snapshots/materialpro3d.excerpt.xml',
    expectAccepted: [
      {
        itemId: 'ASA175FM75TYW',
        weightGrams: 750,
        weightConfidence: 'net',
        pricePerKg: 860,
        diameterMm: 1.75,
        shipping: 'unknown',
      },
      {
        itemId: 'PLA175PM1BEG',
        weightGrams: 1000,
        weightConfidence: 'net',
        pricePerKg: 399,
        diameterMm: 1.75,
        shipping: 'unknown',
      },
    ],
  },
  {
    shopId: 'filamenty-brno',
    shopName: 'Filamenty Brno',
    country: 'CZ',
    source: 'xml',
    kind: 'heureka-xml',
    url: 'https://www.filamentybrno.cz/heureka/export/products.xml',
    snapshot: 'scripts/fixtures/snapshots/filamenty-brno.excerpt.xml',
    expectAccepted: [
      {
        itemId: 'CR-PLA-WHITE',
        weightGrams: 1000,
        weightConfidence: 'net',
        pricePerKg: 399,
        diameterMm: 1.75,
        shipping: 'unknown',
      },
      {
        itemId: '67826',
        weightGrams: 5000,
        weightConfidence: 'net',
        pricePerKg: 431.8,
        diameterMm: 1.75,
        shipping: 0,
      },
    ],
  },
  {
    shopId: '3dfil',
    shopName: '3Dfil',
    country: 'CZ',
    source: 'xml',
    kind: 'heureka-xml',
    url: 'https://www.3dfil.cz/heureka/export/products.xml',
    snapshot: 'scripts/fixtures/snapshots/3dfil.excerpt.xml',
    expectAccepted: [
      {
        itemId: '148',
        weightGrams: 1000,
        weightConfidence: 'unspecified',
        pricePerKg: 399,
        shipping: 'unknown',
        packaging: null,
      },
      {
        itemId: '1852',
        weightGrams: 500,
        weightConfidence: 'unspecified',
        pricePerKg: 1998,
        shipping: 'unknown',
        packaging: 'refill',
      },
    ],
    expectRejected: [{ itemId: '1670', reason: 'not-filament-product' }],
  },
];

export const SKIPPED_SHOPS = [
  {
    shop: 'Aurapol',
    reason:
      'No public Heureka or Google feed. Upgates feed URLs use a secret admin token and were not guessed. The PLA category HTML (https://www.aurapol.com/cz/pla) has weight only as a filter and as “1 kg” in titles, which is not a weight field.',
  },
  {
    shop: 'Filament PM',
    reason:
      'https://www.filament-pm.cz/heureka/export/products.xml and the usual Google/Zboží paths return 404. One category page (https://www.filament-pm.cz/pla) has weight only as a filter and inside the product title. Title kilograms are not imported.',
  },
];
