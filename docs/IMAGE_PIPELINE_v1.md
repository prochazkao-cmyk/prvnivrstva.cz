# Image Pipeline v1 (Economical)

## Objective
Ensure every "important" article has ~5 unique thematic visuals to avoid "text walls" and improve editorial quality.

## Definition of "Important"
1. Articles with `featured: true` or `hero: true`.
2. Main evergreen guides (e.g., Prusa vs Bambu).
3. High-traffic troubleshooting guides.

## Workflow
1. **Audit:** Check `src/pages/admin/index.astro` for articles with `< 5` visuals.
2. **Thematic Planning:** For each article, define 5 specific thematic needs (e.g., 1. Ecosystem, 2. Decision Tree, 3. Material Comparison, 4. TCO, 5. Checklist).
3. **Generation:** Use `imagegen` to create minimal, clean SVG-style illustrations.
4. **Integration:** Add images to the article and update frontmatter/content.
5. **Verification:** Verify render in preview.

## Cost Minimization Rules
- **No redundant generation:** If a visual already exists and fits, reuse it.
- **Thematic focus:** Generate only what is strictly necessary for the "editorial feel".
- **Low-res prototypes:** If requested, start with low-res/simple descriptions before final generation.
- **Batching:** Plan visuals for a whole article in one go to minimize prompts.

## Backlog & Tracking
| Article | Visuals | Needs | Status |
| --- | --- | --- | --- |
| Prusa vs Bambu | 5/5 | - | Done (PR #80) |
| ... | ... | ... | ... |
