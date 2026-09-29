import { getCollection, type CollectionEntry } from 'astro:content';
import { categories, categoryOrder, type CategoryId } from './categories';

export interface Article {
  id: string;
  category: CategoryId;
  title: string;
  description: string;
  publishedAt: Date;
  updatedAt?: Date;
  author: string;
  featured: boolean;
  hero: boolean;
  tags: string[];
  level?: string;
  technologies: string[];
  product?: string;
  verdict?: string;
  score?: number;
  note?: string;
  readingMinutes: number;
  href: string;
}

type AnyEntry =
  | CollectionEntry<'clanky'>
  | CollectionEntry<'rady-a-tipy'>
  | CollectionEntry<'stroje'>
  | CollectionEntry<'recenze'>
  | CollectionEntry<'novinky'>
  | CollectionEntry<'technologie'>;

function readingMinutesFromBody(body: string | undefined): number {
  if (!body) return 1;
  const words = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/^import\s.+$/gm, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_\[\]()`]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 180));
}

export function toArticle(category: CategoryId, entry: AnyEntry): Article {
  return {
    id: entry.id,
    category,
    title: entry.data.title,
    description: entry.data.description,
    publishedAt: entry.data.publishedAt,
    updatedAt: entry.data.updatedAt,
    author: entry.data.author,
    featured: entry.data.featured,
    hero: entry.data.hero,
    tags: entry.data.tags,
    level: entry.data.level,
    technologies: entry.data.technologies,
    product: entry.data.product,
    verdict: entry.data.verdict,
    score: entry.data.score,
    note: entry.data.note,
    readingMinutes: readingMinutesFromBody(entry.body),
    href: `/${category}/${entry.id}/`,
  };
}

async function loadCategory(category: CategoryId): Promise<AnyEntry[]> {
  switch (category) {
    case 'clanky':
      return getCollection('clanky');
    case 'rady-a-tipy':
      return getCollection('rady-a-tipy');
    case 'stroje':
      return getCollection('stroje');
    case 'recenze':
      return getCollection('recenze');
    case 'novinky':
      return getCollection('novinky');
    case 'technologie':
      return getCollection('technologie');
  }
}

export async function getArticles(category?: CategoryId): Promise<Article[]> {
  const ids = category ? [category] : [...categoryOrder];
  const groups = await Promise.all(
    ids.map(async (id) => {
      const entries = await loadCategory(id);
      return entries.filter((entry) => !entry.data.draft).map((entry) => toArticle(id, entry));
    }),
  );
  return groups.flat().sort((a, b) => {
    const byDate = b.publishedAt.getTime() - a.publishedAt.getTime();
    if (byDate !== 0) return byDate;
    return a.title.localeCompare(b.title, 'cs');
  });
}

export function categoryById(id: CategoryId) {
  return categories[id];
}
