const dateFormat = new Intl.DateTimeFormat('cs-CZ', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Prague',
});

const isoFormat = new Intl.DateTimeFormat('en-CA', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'Europe/Prague',
});

const scoreFormat = new Intl.NumberFormat('cs-CZ', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 1,
});

const scoreBadgeFormat = new Intl.NumberFormat('cs-CZ', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const priceFormat = new Intl.NumberFormat('cs-CZ', {
  maximumFractionDigits: 0,
});

export function formatDate(date: Date): string {
  return dateFormat.format(date);
}

export function isoDate(date: Date): string {
  return isoFormat.format(date);
}

export function formatReading(minutes: number): string {
  return `${minutes} min čtení`;
}

export function formatScore(score: number): string {
  return `${scoreFormat.format(score)} / 10`;
}

export function formatScoreBadge(score: number): string {
  return scoreBadgeFormat.format(score);
}

export function formatPriceCzk(amount: number): string {
  return `${priceFormat.format(amount)}\u00a0Kč`;
}

export function machineCount(count: number): string {
  if (count === 1) return '1 stroj';
  if (count >= 2 && count <= 4) return `${count} stroje`;
  return `${count} strojů`;
}

export function textCount(count: number): string {
  if (count === 1) return '1 text';
  if (count >= 2 && count <= 4) return `${count} texty`;
  return `${count} textů`;
}
