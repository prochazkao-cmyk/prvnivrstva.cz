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

export function textCount(count: number): string {
  if (count === 1) return '1 text';
  if (count >= 2 && count <= 4) return `${count} texty`;
  return `${count} textů`;
}
