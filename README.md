# První vrstva

Statický redakční web [prvnivrstva.cz](https://prvnivrstva.cz) — praktický rozcestník 3D tisku pro CZ/EU.

Astro, TypeScript, Tailwind CSS. Články jsou Markdown a MDX v content collections. Build je čistě statický (`output: 'static'`) a patří na Cloudflare Pages. Žádný WordPress, žádné PHP, žádný serverový adaptér.

## Lokální vývoj

Potřeba je Node.js 22. Na Cloudflare klidně 22.19 nebo novější; lokálně stačí aktuální 22.

```bash
npm install
npm run dev
```

Vývojový server běží na [http://localhost:4321](http://localhost:4321).

Typy:

```bash
npm run check
```

## Build

```bash
npm run build
```

Hotové soubory jsou v `dist/`. Náhled toho, co se nasadí:

```bash
npm run preview
```

## Cloudflare Pages

Web je statický. Adaptér `@astrojs/cloudflare` nepřidávejte — je pro Workers a vykreslování na požádání. Tady se nasazuje složka `dist`.

V dashboardu: **Workers & Pages → Create → Pages → Connect to Git**.

| Nastavení | Hodnota |
| --- | --- |
| Production branch | `main` |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |

Když build image nenabídne Node 22 sama, přidejte proměnnou prostředí (Settings → Environment variables, Production i Preview):

| Name | Value |
| --- | --- |
| `NODE_VERSION` | `22` |

Další proměnné ani secrets projekt nepotřebuje.

Pages po uložení spustí build a nasadí `dist`. Další push na produkční větev nasadí znovu. Pull request dostane vlastní preview URL.

`public/_headers` se kopíruje do `dist` a Pages podle něj nastaví hlavičky (nosniff, referrer, frame, permissions) a roční cache pro `/_astro/*`.

`robots.txt` a `sitemap-index.xml` vzniknou při buildu. Kanonicá doména je v `astro.config.mjs` (`site: 'https://prvnivrstva.cz'`). Až bude doména v Pages, přidejte ji jako custom domain — URL v sitemapě a v Open Graph už na ni míří.

Neznámá cesta servíruje `dist/404.html`.

## Obsah

Texty leží v `src/content/` po rubrikách. Tvar frontmatteru je v `src/content.config.ts`. Nový text je soubor `.md` nebo `.mdx`. Adresa je `/rubrika/nazev-souboru/`.

| Rubrika | Cesta |
| --- | --- |
| Články | `/clanky/` |
| Rady a tipy | `/rady-a-tipy/` |
| Stroje | `/stroje/` |
| Recenze | `/recenze/` |
| Novinky | `/novinky/` |
| Technologie | `/technologie/` |

O webu je statická stránka `/o-nas/`.

Redakční podklady (ne stránky webu) jsou v `docs/STRUKTURA.md` a `docs/INDEX.md`. `STRUKTURA.md` popisuje i rubriky, které v tomhle vydání ještě nemají vlastní cestu. Živé jsou jen složky v `src/content/`.

## Značka

- `public/logo.svg` — značka (tři vrstvy, spodní je ta první)
- `public/favicon.svg`
- `public/og.png` a `public/apple-touch-icon.png`
