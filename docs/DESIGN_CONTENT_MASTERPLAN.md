# První Vrstva — Design & Content Masterplan

## Status

Tento dokument je zdroj pravdy pro další vývoj produkčního webu `prvnivrstva.cz` v Astro/GitHub/Cloudflare Pages.
Lovable je od této chvíle pouze historická/reference verze a nemá se dál používat pro produkční změny.

## 1. Zamčený vizuální směr

- Teplý cream editorial základ.
- Černá/charcoal typografie.
- Výchozí akcent: oranžová.
- Prémiový magazín/editorial, ne SaaS dashboard.
- Velké reálné fotografie 3D tisku: první vrstva, tryska, dílna, tiskárny, filamenty, ruce, kalibrace, hotové díly.
- Vlastní technická ilustrace a infografiky mají doplňovat fotografie, ne je nahrazovat.

### Signature brand DNA

Hlavním rozpoznávacím motivem jsou **stopy první vrstvy a extruze**:

- dlouhé extruzní linky jako dělicí prvky,
- podtržení titulků,
- propojení ikon a sekcí,
- first-layer kontury,
- technické routing lines,
- motiv vrstvení v ikonách, logu a infografikách.

Web by měl být rozpoznatelný i bez loga.

## 2. Theme preference

### Průša — default

- cream / warm off-white,
- orange accent,
- charcoal typography,
- teplejší fotografie a ilustrace.

### Bambu — druhý režim

- stejný obsah a stejné layouty,
- cool cream/light neutral,
- teal-green accent,
- charcoal typography,
- chladnější vizuální treatment.

Header control přesně: **Bambu | Průša**.

Téma mění pouze design tokeny a image treatment. Nesmí měnit obsah, funkce ani layout.
Bez log výrobců a bez tvrzení o afiliaci.

### Preference později

- anonymní návštěvník: localStorage, pouze agregované statistiky,
- přihlášený uživatel: preference uložená k účtu,
- admin: počty, procenta, trend a preference registrovaných uživatelů,
- žádný fingerprinting anonymních návštěvníků.

## 3. Homepage — cílová kompozice

1. **Hero editorial spread**
   - dominantní serifový headline `První Vrstva.`
   - krátký claim: `3D tisk bez chaosu. Přehledně, lidsky, odborně.`
   - velké reálné makro první vrstvy/trysky,
   - extruzní stopa fyzicky propojuje text s obrazem.

2. **What we do strip**
   - Preciznost
   - Rychlost
   - Materiály
   - Kalibrace
   - Návody
   - vlastní jednoduché technické ikony.

3. **Skutečné projekty / skuteční lidé**
   - dílna,
   - tiskárny,
   - filamenty,
   - ruce s výtiskem,
   - reálné použití.

4. **Technické základy — vizuální infografika**
   - průměr trysky,
   - výška vrstvy,
   - tiskový objem,
   - teploty materiálů,
   - rozdíl kvality podle layer height.

5. **Hlavní témata**
   - testy tiskáren,
   - materiály,
   - kalibrace,
   - srovnání,
   - tipy a návody.

6. **Spodní CTA / komunita / newsletter**
   - výrazná tmavší sekce,
   - stále s extrusion-line DNA.

## 4. Obsahové pilíře

### A. Testy a profily tiskáren

Každý profil:

- výrobce / model,
- typ konstrukce,
- tiskový objem,
- materiálová kompatibilita,
- hlučnost,
- rychlost,
- software,
- spolehlivost,
- servisovatelnost,
- cena / hodnota,
- pro koho je stroj vhodný,
- reálné fotky,
- jasně oddělené výrobní specifikace, vlastní měření a redakční názor.

### B. Materiály a filamenty

- PLA, PETG, ASA, ABS, TPU, PA, PC, CF/GF a další,
- teplotní okno,
- sušení,
- hygroskopičnost,
- mechanické vlastnosti,
- UV / chemická odolnost,
- doporučené použití,
- problémy při tisku,
- reálné fotografie spoolů a vzorků,
- cenové porovnání až ve chvíli, kdy budou spolehlivá data.

### C. Troubleshooting

Atlas problémů:

- warping,
- stringing,
- under-extrusion,
- elephant foot,
- layer shift,
- poor first layer,
- ringing/ghosting,
- support issues,
- tolerance issues.

Každý problém:

- vizuální ilustrace symptomu,
- pravděpodobné příčiny,
- postup kontroly,
- oprava,
- materiálové rozdíly,
- odkazy na související návody.

### D. Návody / Academy

Cesta od začátečníka k pokročilému:

- výběr tiskárny,
- první filament,
- slicer,
- první vrstva,
- podpěry,
- tolerance,
- flow,
- sušení,
- technické materiály,
- enclosure,
- multimaterial.

### E. Nástroje

- kalkulačka ceny výtisku,
- flow calculator,
- drying reference,
- volumetric-flow reference,
- později comparison tools.

### F. Metodika

Transparentně ukazovat:

- co je výrobní údaj,
- co je vlastní měření,
- co je redakční hodnocení,
- co je demo/placeholder,
- jak vznikají závěry.

## 5. Vizuální pravidla obsahu

Každá hlavní stránka musí mít alespoň jeden autorský vizuální prvek:

- infografiku,
- technickou ilustraci,
- graf,
- srovnávací vizualizaci,
- schéma,
- makro foto,
- annotated image.

Dlouhé textové stěny nejsou cílem.

## 6. Co nedělat

- generický card-grid jako default,
- AI filler články,
- fake reviews,
- fake lab data,
- fake test hours,
- fake product photography,
- neon / glass / blobs / generic SaaS gradients,
- přemíra animací,
- výrobní loga v theme switcheru.

## 7. Content quality bar

Obsah má být:

- česky,
- praktický,
- zkušenostní,
- odborný,
- srozumitelný,
- workshop-authentic,
- bez SEO omáčky.

Preferovat vlastní zkušenosti, vlastní fotografie, vlastní tabulky a měření.

## 8. SEO workflow

SEO přichází po dokončení designu a datové architektury.

Doporučený postup:

1. keyword/topic ideace,
2. cluster / pillar mapping,
3. draft článku,
4. fact-check,
5. vlastní zkušenost/data/fotografie,
6. interní linkování,
7. title/description/schema,
8. publikace,
9. průběžná aktualizace.

Grok může pomáhat s ideací, SERP brainstormingem a draftem. Finální fakta, technická přesnost, tón a redakční kvalita se kontrolují zde.

## 9. Pořadí implementace

1. Sjednotit produkční Astro web podle zamčeného vizuálního směru.
2. Nahradit placeholdery reálnými fotografiemi.
3. Vytvořit znovupoužitelné komponenty pro extrusion-line DNA, ikony a infografiky.
4. Uspořádat content collections/data modely.
5. Rozšířit homepage a hlavní rubriky.
6. Přidat Průša/Bambu theme tokeny a přepínač.
7. Přidat ukládání preference a admin insight až spolu s účty/adminem.
8. Rozšířit články, SEO clustery a databázový obsah.

## 10. Produkční pravidlo

Od tohoto bodu se produkční změny dělají pouze v repozitáři `prochazkao-cmyk/prvnivrstva.cz`.
Lovable se dál nepoužívá jako vývojový nástroj pro První Vrstvu.
