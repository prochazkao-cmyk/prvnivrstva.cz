export interface ShopOffer {
  /** Stable product key shared by all shops, e.g. bambu-lab-a1. */
  productId: string;
  productName: string;
  shopId: string;
  shopName: string;
  country: 'CZ' | 'SK';
  currency: 'CZK' | 'EUR';
  price: number;
  shippingPrice?: number;
  inStock: boolean;
  stockLabel?: string;
  url: string;
  affiliateUrl?: string;
  fetchedAt: string;
  source: 'xml' | 'api' | 'affiliate-feed' | 'manual-approved';
}

/**
 * Production rule: never hand-write "current" prices here.
 * This array is populated only by an approved feed/import pipeline.
 * Until at least three shops are connected, the public comparison page stays noindex.
 */
export const offers: ShopOffer[] = [];

export function totalPrice(offer: ShopOffer): number {
  return offer.price + (offer.shippingPrice ?? 0);
}

export function offersFor(productId: string): ShopOffer[] {
  return offers
    .filter((offer) => offer.productId === productId)
    .sort((a, b) => totalPrice(a) - totalPrice(b));
}

export function uniqueShopCount(): number {
  return new Set(offers.map((offer) => offer.shopId)).size;
}
