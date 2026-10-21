import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { FilamentOffer, FilamentPackaging } from './offers';

/** Project-root path. import.meta.url points at the prerender chunk after `astro build`. */
const CARDS_FILE = join(process.cwd(), 'src/data/filament-cards.generated.json');

interface FilamentCard {
  cardId: string;
  brand: string | null;
  productLine: string | null;
  material: string | null;
  color: string | null;
  weightGrams: number;
  diameterMm: number | null;
  form: FilamentPackaging | null;
  offerIds: string[];
}

/**
 * Stamp the explicit card onto each preview offer.
 * Brand, material, and color are the alias-normalized values.
 * Product line and form stay empty unless a table or a form rule set them.
 */
export function offersWithCards(offers: FilamentOffer[]): FilamentOffer[] {
  if (!existsSync(CARDS_FILE)) throw new Error(`filament cards missing at ${CARDS_FILE}`);
  const raw = JSON.parse(readFileSync(CARDS_FILE, 'utf8')) as { schemaVersion?: unknown; cards?: unknown };
  if (raw.schemaVersion !== 1 || !Array.isArray(raw.cards)) {
    throw new Error('filament cards file must be schemaVersion 1');
  }

  const byOffer = new Map<string, FilamentCard>();
  for (const item of raw.cards) {
    if (typeof item !== 'object' || item === null) throw new Error('filament card is not an object');
    const card = item as FilamentCard;
    if (typeof card.cardId !== 'string' || card.cardId === '' || !Array.isArray(card.offerIds) || card.offerIds.length === 0) {
      throw new Error('filament card is missing cardId or offerIds');
    }
    for (const offerId of card.offerIds) {
      if (byOffer.has(offerId)) throw new Error(`${offerId} is on two filament cards`);
      byOffer.set(offerId, card);
    }
  }
  if (byOffer.size !== offers.length) {
    throw new Error(`filament cards cover ${byOffer.size} offers, preview has ${offers.length}`);
  }

  return offers.map((offer) => {
    const card = byOffer.get(offer.productId);
    if (!card) throw new Error(`${offer.productId} has no filament card`);
    if (card.weightGrams !== offer.weightGrams) {
      throw new Error(`${offer.productId} weight disagrees with its card`);
    }
    if (card.diameterMm !== (offer.diameterMm ?? null)) {
      throw new Error(`${offer.productId} diameter disagrees with its card`);
    }
    const stamped: FilamentOffer = { ...offer, cardId: card.cardId };
    if (card.brand) stamped.brand = card.brand;
    else delete stamped.brand;
    if (card.material) stamped.material = card.material;
    else delete stamped.material;
    if (card.color) stamped.color = card.color;
    else delete stamped.color;
    if (card.productLine) stamped.productLine = card.productLine;
    else delete stamped.productLine;
    if (card.form === 'spool' || card.form === 'refill') stamped.packaging = card.form;
    else delete stamped.packaging;
    return stamped;
  });
}
