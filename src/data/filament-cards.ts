import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { FilamentOffer, FilamentPackaging } from './offers';

/** Project-root path. import.meta.url points at the prerender chunk after `astro build`. */
const CARDS_FILE = join(process.cwd(), 'src/data/filament-cards.generated.json');

interface FilamentCard {
  cardId: string;
  title: string;
  weightGrams: number;
  offerIds: string[];
}

interface OfferFields {
  brand: string | null;
  productLine: string | null;
  material: string | null;
  color: string | null;
  diameterMm: number | null;
  form: FilamentPackaging | null;
}

/**
 * Stamp the explicit card onto each preview offer.
 * Brand, material, color, form, and a documented shop diameter default come from
 * `offerFields`. Weight stays the feed value.
 */
export function offersWithCards(offers: FilamentOffer[]): FilamentOffer[] {
  if (!existsSync(CARDS_FILE)) throw new Error(`filament cards missing at ${CARDS_FILE}`);
  const raw = JSON.parse(readFileSync(CARDS_FILE, 'utf8')) as {
    schemaVersion?: unknown;
    cards?: unknown;
    offerFields?: unknown;
  };
  if (raw.schemaVersion !== 1 || !Array.isArray(raw.cards) || typeof raw.offerFields !== 'object' || raw.offerFields === null) {
    throw new Error('filament cards file must be schemaVersion 1');
  }
  const offerFields = raw.offerFields as Record<string, OfferFields>;

  const byOffer = new Map<string, FilamentCard>();
  for (const item of raw.cards) {
    if (typeof item !== 'object' || item === null) throw new Error('filament card is not an object');
    const card = item as FilamentCard;
    if (typeof card.cardId !== 'string' || card.cardId === '' || typeof card.title !== 'string' || !Array.isArray(card.offerIds) || card.offerIds.length === 0) {
      throw new Error('filament card is missing cardId, title, or offerIds');
    }
    for (const offerId of card.offerIds) {
      if (byOffer.has(offerId)) throw new Error(`${offerId} is on two filament cards`);
      byOffer.set(offerId, card);
    }
  }
  if (byOffer.size !== offers.length || Object.keys(offerFields).length !== offers.length) {
    throw new Error(`filament cards cover ${byOffer.size} offers, preview has ${offers.length}`);
  }

  return offers.map((offer) => {
    const card = byOffer.get(offer.productId);
    const fields = offerFields[offer.productId];
    if (!card || !fields) throw new Error(`${offer.productId} has no filament card`);
    if (card.weightGrams !== offer.weightGrams) {
      throw new Error(`${offer.productId} weight disagrees with its card`);
    }
    if (offer.diameterMm != null && fields.diameterMm !== offer.diameterMm) {
      throw new Error(`${offer.productId} diameter disagrees with its card`);
    }
    const stamped: FilamentOffer = { ...offer, cardId: card.cardId, cardTitle: card.title };
    if (fields.brand) stamped.brand = fields.brand;
    else delete stamped.brand;
    if (fields.material) stamped.material = fields.material;
    else delete stamped.material;
    if (fields.color) stamped.color = fields.color;
    else delete stamped.color;
    if (fields.productLine) stamped.productLine = fields.productLine;
    else delete stamped.productLine;
    if (typeof fields.diameterMm === 'number') stamped.diameterMm = fields.diameterMm;
    if (fields.form === 'spool' || fields.form === 'refill') stamped.packaging = fields.form;
    else delete stamped.packaging;
    return stamped;
  });
}
