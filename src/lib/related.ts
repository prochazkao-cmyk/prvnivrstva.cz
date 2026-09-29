import type { Article } from './articles';

function intersectionCount(a: string[], b: string[]): number {
  const right = new Set(b.map((value) => value.toLocaleLowerCase('cs')));
  return a.reduce((score, value) => score + (right.has(value.toLocaleLowerCase('cs')) ? 1 : 0), 0);
}

/**
 * Related content is selected by topic overlap rather than category alone.
 * This intentionally creates useful cross-links: troubleshooting -> deep article,
 * machine profile -> review/comparison, material tip -> drying/material reference.
 */
export function pickRelated(article: Article, all: Article[], limit = 4): Article[] {
  return all
    .filter((candidate) => candidate.href !== article.href)
    .map((candidate) => {
      let score = 0;
      const tagOverlap = intersectionCount(article.tags, candidate.tags);
      const technologyOverlap = intersectionCount(article.technologies, candidate.technologies);

      score += tagOverlap * 4;
      score += technologyOverlap;
      if (candidate.category === article.category) score += 1.5;
      if (article.product && candidate.product === article.product) score += 8;
      if (article.product && candidate.title.toLocaleLowerCase('cs').includes(article.product.toLocaleLowerCase('cs'))) score += 3;
      if (article.category === 'stroje' && candidate.category === 'recenze') score += 1;
      if (article.category === 'recenze' && candidate.category === 'stroje') score += 1;
      if (article.category === 'rady-a-tipy' && candidate.category === 'clanky' && tagOverlap > 0) score += 1;

      return { candidate, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.candidate.publishedAt.getTime() - a.candidate.publishedAt.getTime();
    })
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}
