import raw from '../../scripts/fixtures/filament-offers.example.json';
import { parseExampleOffers, type FilamentOffer } from './offers';

/**
 * EXAMPLE ONLY. Prices in the JSON fixture are invented.
 * They are NOT live shop prices.
 *
 * Local preview (never indexed, absent from production HTML):
 *   npm run dev
 *   open /srovnavac/?preview=1
 *
 * `astro build` sets import.meta.env.DEV to false, so the query does nothing
 * on Cloudflare Pages. Do not copy these rows into `offers`.
 */
export const filamentExampleOffers: FilamentOffer[] = parseExampleOffers(raw.offers);
