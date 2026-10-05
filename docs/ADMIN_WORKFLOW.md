# Admin workflow

The `/admin/` page is a private editorial tool. It is intentionally not linked from the homepage.

## Cloudflare Pages variables

Add these variables under **Settings → Environment variables** for the production and preview environments:

- `OPENROUTER_API_KEY` — the OpenRouter key used only by the Pages Function.
- `ADMIN_ACCESS_TOKEN` — a separate long random token used to open the generator in `/admin/`.

Never put either value into the repository or browser code. The browser sends only `ADMIN_ACCESS_TOKEN` to the same-origin function; the OpenRouter key stays server-side.

## Workflow

1. Open `/admin/` and enter the admin access token.
2. Select an article and one of its five thematic slots.
3. Review or edit the prompt and choose a model.
4. Generate one image, inspect it, then approve or download it.
5. Add the approved asset to `public/images/` and use the copied Markdown in the article.

The first version deliberately keeps approval local to the browser and does not regenerate existing assets automatically. Durable image storage and automatic article commits can be added after the editorial flow has been used in practice.
