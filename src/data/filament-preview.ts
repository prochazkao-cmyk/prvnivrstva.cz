import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pricePerKg, type FilamentOffer, type WeightConfidence } from './offers';

const PREVIEW_FILE = join(dirname(fileURLToPath(import.meta.url)), 'filament-preview.generated.json');
const SHOP_IDS = new Set(['materialpro3d', 'filamenty-brno', '3dfil']);

/**
 * Local preview of accepted public-feed rows.
 * Call only from `astro dev`. Do not copy the result into `offers`.
 */
export function loadFilamentPreviewOffers(): FilamentOffer[] {
  const raw = JSON.parse(readFileSync(PREVIEW_FILE, 'utf8')) as { _generated?: unknown; offers?: unknown };
  if (raw._generated !== true || !Array.isArray(raw.offers)) {
    throw new Error('filament preview catalog must be the generated file with an offers array');
  }
  return raw.offers.map((item, index) => parsePreviewOffer(item, index));
}

function parsePreviewOffer(value: unknown, index: number): FilamentOffer {
  const label = `preview[${index}]`;
  if (typeof value !== 'object' || value === null) throw new Error(`${label}: not an object`);
  const row = value as Record<string, unknown>;
  if (row.example === true) throw new Error(`${label}: preview rows are not example fixtures`);
  if (row.category !== 'filament') throw new Error(`${label}: category must be filament`);
  if (row.source !== 'xml') throw new Error(`${label}: preview rows must come from the XML feed`);
  if (typeof row.shopId !== 'string' || !SHOP_IDS.has(row.shopId)) throw new Error(`${label}: unexpected shop`);
  if (typeof row.weightGrams !== 'number' || !(row.weightGrams > 0)) throw new Error(`${label}: weightGrams required`);
  if (typeof row.price !== 'number' || !(row.price > 0)) throw new Error(`${label}: price required`);
  if (typeof row.fetchedAt !== 'string' || Number.isNaN(Date.parse(row.fetchedAt))) {
    throw new Error(`${label}: fetchedAt required`);
  }
  if (typeof row.productName !== 'string' || typeof row.shopName !== 'string' || typeof row.url !== 'string') {
    throw new Error(`${label}: name, shop, and url required`);
  }
  if (row.affiliateUrl !== undefined) throw new Error(`${label}: affiliate URL must not be invented`);

  const offer: FilamentOffer = {
    productId: String(row.productId),
    productName: row.productName,
    shopId: row.shopId,
    shopName: row.shopName,
    country: row.country === 'SK' ? 'SK' : 'CZ',
    currency: 'CZK',
    price: row.price,
    inStock: row.inStock === true,
    url: row.url,
    fetchedAt: row.fetchedAt,
    source: 'xml',
    category: 'filament',
    weightGrams: row.weightGrams,
  };
  if (typeof row.shippingPrice === 'number') offer.shippingPrice = row.shippingPrice;
  if (typeof row.stockLabel === 'string') offer.stockLabel = row.stockLabel;
  if (typeof row.material === 'string') offer.material = row.material;
  if (typeof row.brand === 'string') offer.brand = row.brand;
  if (typeof row.color === 'string') offer.color = row.color;
  if (row.imageUrl !== undefined) {
    if (typeof row.imageUrl !== 'string') throw new Error(`${label}: imageUrl must be a string`);
    let image: URL;
    try {
      image = new URL(row.imageUrl);
    } catch {
      throw new Error(`${label}: imageUrl must be an absolute URL`);
    }
    if (image.protocol !== 'http:' && image.protocol !== 'https:') {
      throw new Error(`${label}: imageUrl must be http(s)`);
    }
    offer.imageUrl = image.href;
  }
  if (typeof row.diameterMm === 'number') offer.diameterMm = row.diameterMm;
  if (row.packaging === 'spool' || row.packaging === 'refill') offer.packaging = row.packaging;
  if (row.weightConfidence === 'net' || row.weightConfidence === 'unspecified') {
    offer.weightConfidence = row.weightConfidence satisfies WeightConfidence;
  }
  if (pricePerKg(offer) == null) throw new Error(`${label}: pricePerKg missing`);
  return offer;
}
