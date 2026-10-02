export type OfferCountry = 'CZ' | 'SK';
export type OfferCurrency = 'CZK' | 'EUR';
export type OfferSource = 'xml' | 'api' | 'affiliate-feed' | 'manual-approved';
export type FilamentPackaging = 'spool' | 'refill';
export type WeightConfidence = 'net' | 'unspecified';

interface ShopOfferBase {
  /** Stable product key shared by shops. Assigned by an explicit map, never by fuzzy title match. */
  productId: string;
  productName: string;
  shopId: string;
  shopName: string;
  country: OfferCountry;
  currency: OfferCurrency;
  /** Product price in `currency`. Shipping is separate. */
  price: number;
  /** Known shipping cost. Omit when the feed does not state it — never store a guessed 0. */
  shippingPrice?: number;
  inStock: boolean;
  stockLabel?: string;
  url: string;
  affiliateUrl?: string;
  /** ISO-8601 time the offer was read from a feed or approved by hand. */
  fetchedAt: string;
  source: OfferSource;
  /**
   * Checked-in fixtures only. Example rows never count toward the public shop gate
   * and must not be presented as live prices.
   */
  example?: boolean;
}

export interface FilamentOffer extends ShopOfferBase {
  category: 'filament';
  /**
   * Net filament mass in grams, taken from a feed field.
   * Required for every filament offer. Never invent this from the product title.
   */
  weightGrams: number;
  material?: string;
  brand?: string;
  color?: string;
  diameterMm?: number;
  packaging?: FilamentPackaging;
  /**
   * `net` = the feed named the value as filament / net mass.
   * `unspecified` = only a generic weight field was present; confirm it is not parcel weight.
   */
  weightConfidence?: WeightConfidence;
}

/** Printers and other goods. Filament mass is not optional here — it does not apply. */
export interface OtherOffer extends ShopOfferBase {
  category?: 'printer' | 'accessory';
}

export type ShopOffer = FilamentOffer | OtherOffer;

/**
 * Production rule: never hand-write "current" prices here.
 * Populate this array only from an approved feed import (`scripts/import-filament-feed.mjs`).
 * Until at least three non-example shops are connected, `/srovnavac/` stays noindex.
 */
export const offers: ShopOffer[] = [];

/** Default freshness window. A feed may later declare its own interval. */
export const STALE_AFTER_MS = 36 * 60 * 60 * 1000;

export const MIN_PUBLIC_SHOPS = 3;

export function isExampleOffer(offer: ShopOffer): boolean {
  return offer.example === true;
}

/** Rows that may eventually open the public gate. Fixtures are excluded. */
export function countableOffers(source: readonly ShopOffer[] = offers): ShopOffer[] {
  return source.filter((offer) => !isExampleOffer(offer));
}

export function totalPrice(offer: ShopOffer): number {
  return offer.price + (offer.shippingPrice ?? 0);
}

export function hasKnownShipping(offer: ShopOffer): boolean {
  return (
    typeof offer.shippingPrice === 'number' &&
    Number.isFinite(offer.shippingPrice) &&
    offer.shippingPrice >= 0
  );
}

/**
 * Kč/kg (or EUR/kg) of the product itself, shipping excluded.
 * Returns null when the offer is not a filament or the mass is missing — callers must not invent a kilogram.
 */
export function pricePerKg(offer: ShopOffer): number | null {
  if (offer.category !== 'filament') return null;
  const grams = offer.weightGrams;
  if (!Number.isFinite(grams) || grams <= 0) return null;
  return offer.price / (grams / 1000);
}

/** Affiliate fields are intentionally unread. Commission must not change order. */
export function compareByPricePerKg(a: ShopOffer, b: ShopOffer): number {
  const aKg = pricePerKg(a);
  const bKg = pricePerKg(b);
  if (aKg == null && bKg == null) return a.shopName.localeCompare(b.shopName, 'cs');
  if (aKg == null) return 1;
  if (bKg == null) return -1;
  const diff = aKg - bKg;
  if (diff !== 0) return diff;
  return a.shopName.localeCompare(b.shopName, 'cs');
}

/**
 * Shipping-inclusive order. Offers with unknown shipping sort after known totals
 * so a missing fee is not treated as free.
 */
export function compareByTotalPrice(a: ShopOffer, b: ShopOffer): number {
  const aKnown = hasKnownShipping(a);
  const bKnown = hasKnownShipping(b);
  if (aKnown && bKnown) {
    const diff = totalPrice(a) - totalPrice(b);
    if (diff !== 0) return diff;
  } else if (aKnown !== bKnown) {
    return aKnown ? -1 : 1;
  } else if (a.price !== b.price) {
    return a.price - b.price;
  }
  return a.shopName.localeCompare(b.shopName, 'cs');
}

export function isStale(offer: ShopOffer, now = Date.now()): boolean {
  const fetched = Date.parse(offer.fetchedAt);
  if (!Number.isFinite(fetched)) return true;
  return now - fetched > STALE_AFTER_MS;
}

export interface OfferGroup {
  productId: string;
  productName: string;
  offers: ShopOffer[];
  /** Lowest Kč/kg in the group, or null when no filament mass is known. */
  bestPerKg: number | null;
}

export function groupOffers(source: readonly ShopOffer[]): OfferGroup[] {
  const grouped = new Map<string, ShopOffer[]>();
  for (const offer of source) {
    const group = grouped.get(offer.productId) ?? [];
    group.push(offer);
    grouped.set(offer.productId, group);
  }

  const groups: OfferGroup[] = [...grouped.entries()].map(([productId, productOffers]) => {
    const sorted = [...productOffers].sort(compareByPricePerKg);
    const best = pricePerKg(sorted[0]);
    return {
      productId,
      productName: sorted[0]?.productName ?? productId,
      offers: sorted,
      bestPerKg: best,
    };
  });

  groups.sort((a, b) => {
    if (a.bestPerKg == null && b.bestPerKg == null) return a.productName.localeCompare(b.productName, 'cs');
    if (a.bestPerKg == null) return 1;
    if (b.bestPerKg == null) return -1;
    if (a.bestPerKg !== b.bestPerKg) return a.bestPerKg - b.bestPerKg;
    return a.productName.localeCompare(b.productName, 'cs');
  });

  return groups;
}

export function offersFor(productId: string, source: readonly ShopOffer[] = offers): ShopOffer[] {
  return source.filter((offer) => offer.productId === productId).sort(compareByPricePerKg);
}

export function uniqueShopCount(source: readonly ShopOffer[] = offers): number {
  return new Set(countableOffers(source).map((offer) => offer.shopId)).size;
}

export function isComparerIndexable(source: readonly ShopOffer[] = offers): boolean {
  const live = countableOffers(source);
  return live.length > 0 && new Set(live.map((offer) => offer.shopId)).size >= MIN_PUBLIC_SHOPS;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function requiredString(record: Record<string, unknown>, key: string, label: string): string {
  const value = record[key];
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`${label}: missing ${key}`);
  }
  return value;
}

/**
 * Runtime check for the checked-in preview fixtures.
 * Production `offers` stays empty; this only stops a broken example from rendering in dev.
 */
export function parseExampleOffers(input: unknown): FilamentOffer[] {
  if (!Array.isArray(input)) throw new Error('example offers must be an array');
  return input.map((item, index) => parseExampleOffer(item, `example[${index}]`));
}

function parseExampleOffer(value: unknown, label: string): FilamentOffer {
  if (!isRecord(value)) throw new Error(`${label}: not an object`);
  if (value.category !== 'filament') throw new Error(`${label}: category must be filament`);
  if (value.example !== true) throw new Error(`${label}: example:true is required on fixtures`);
  if (value.source !== 'manual-approved') throw new Error(`${label}: fixtures must use source manual-approved`);

  const weightGrams = value.weightGrams;
  if (typeof weightGrams !== 'number' || !Number.isFinite(weightGrams) || weightGrams <= 0) {
    throw new Error(`${label}: weightGrams must be a positive number — do not invent kilograms`);
  }

  const price = value.price;
  if (typeof price !== 'number' || !Number.isFinite(price) || price <= 0) {
    throw new Error(`${label}: price must be a positive number`);
  }

  const country = value.country;
  if (country !== 'CZ' && country !== 'SK') throw new Error(`${label}: country must be CZ or SK`);
  const currency = value.currency;
  if (currency !== 'CZK' && currency !== 'EUR') throw new Error(`${label}: currency must be CZK or EUR`);

  if (typeof value.inStock !== 'boolean') throw new Error(`${label}: inStock must be boolean`);
  if (!Number.isFinite(Date.parse(requiredString(value, 'fetchedAt', label)))) {
    throw new Error(`${label}: fetchedAt must be a parseable timestamp`);
  }

  const packaging = value.packaging;
  if (packaging !== undefined && packaging !== 'spool' && packaging !== 'refill') {
    throw new Error(`${label}: packaging must be spool or refill`);
  }
  const weightConfidence = value.weightConfidence;
  if (weightConfidence !== undefined && weightConfidence !== 'net' && weightConfidence !== 'unspecified') {
    throw new Error(`${label}: weightConfidence must be net or unspecified`);
  }
  if (value.shippingPrice !== undefined) {
    if (typeof value.shippingPrice !== 'number' || !Number.isFinite(value.shippingPrice) || value.shippingPrice < 0) {
      throw new Error(`${label}: shippingPrice must be a non-negative number when present`);
    }
  }
  if (value.diameterMm !== undefined) {
    if (typeof value.diameterMm !== 'number' || !Number.isFinite(value.diameterMm) || value.diameterMm <= 0) {
      throw new Error(`${label}: diameterMm must be a positive number when present`);
    }
  }

  const offer: FilamentOffer = {
    productId: requiredString(value, 'productId', label),
    productName: requiredString(value, 'productName', label),
    shopId: requiredString(value, 'shopId', label),
    shopName: requiredString(value, 'shopName', label),
    country,
    currency,
    price,
    inStock: value.inStock,
    url: requiredString(value, 'url', label),
    fetchedAt: requiredString(value, 'fetchedAt', label),
    source: 'manual-approved',
    example: true,
    category: 'filament',
    weightGrams,
  };

  if (typeof value.shippingPrice === 'number') offer.shippingPrice = value.shippingPrice;
  if (typeof value.stockLabel === 'string') offer.stockLabel = value.stockLabel;
  if (typeof value.affiliateUrl === 'string') offer.affiliateUrl = value.affiliateUrl;
  if (typeof value.material === 'string') offer.material = value.material;
  if (typeof value.brand === 'string') offer.brand = value.brand;
  if (typeof value.color === 'string') offer.color = value.color;
  if (typeof value.diameterMm === 'number') offer.diameterMm = value.diameterMm;
  if (packaging === 'spool' || packaging === 'refill') offer.packaging = packaging;
  if (weightConfidence === 'net' || weightConfidence === 'unspecified') offer.weightConfidence = weightConfidence;

  if (!offer.productName.toLowerCase().includes('fixture') && !offer.shopName.toLowerCase().includes('ukázkov')) {
    throw new Error(`${label}: fixture names must say they are examples (fixture / Ukázkový)`);
  }

  return offer;
}
