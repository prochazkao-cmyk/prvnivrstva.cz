import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  reviewedAt: z.coerce.date().optional(),
  author: z.string().default('Redakce První vrstvy'),
  featured: z.boolean().default(false),
  hero: z.boolean().default(false),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  level: z.enum(['začátečník', 'pokročilý', 'profi']).optional(),
  technologies: z.array(z.string()).default([]),
  product: z.string().optional(),
  verdict: z.string().optional(),
  score: z.number().min(1).max(10).optional(),
  note: z.string().optional(),
  contentMode: z.enum(['redakcni', 'zdrojovany-profil', 'plny-test']).default('redakcni'),
  evidence: z.enum(['redakce', 'vyrobce', 'vlastni-mereni', 'kombinace', 'demo']).default('redakce'),
  sourceNote: z.string().optional(),
  disclosure: z.string().optional(),
  testDuration: z.string().optional(),
  printHours: z.number().nonnegative().optional(),
  failures: z.array(z.string()).optional(),
  affiliate: z.boolean().default(false),
});

function articles(directory: string) {
  return defineCollection({
    loader: glob({
      pattern: '**/*.{md,mdx}',
      base: `./src/content/${directory}`,
    }),
    schema: articleSchema,
  });
}

export const collections = {
  clanky: articles('clanky'),
  'rady-a-tipy': articles('rady-a-tipy'),
  stroje: articles('stroje'),
  tiskarny: articles('tiskarny'),
  recenze: articles('recenze'),
  novinky: articles('novinky'),
  technologie: articles('technologie'),
};
