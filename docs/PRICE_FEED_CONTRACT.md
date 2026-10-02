# První Vrstva — datový kontrakt srovnávače

Cíl: lokální CZ/SK ceny, které lze auditovat. Žádné ručně udržované „aktuální“ ceny.

## Preferované zdroje

1. XML feed přímo od obchodu.
2. API obchodu.
3. Affiliate síť / affiliate feed se souhlasem obchodníka.
4. Ruční import pouze jako dočasný interní zdroj; veřejná cena musí mít jasný čas kontroly.

Agresivní scraping není výchozí řešení.

## Povinná pole nabídky

- stabilní `productId`,
- přesný název produktu a varianta,
- obchod + země,
- měna,
- cena produktu,
- cena dopravy, pokud ji lze určit,
- skladová dostupnost,
- cílová URL,
- případná affiliate URL,
- čas stažení (`fetchedAt`),
- typ zdroje dat.

U filamentu je navíc povinná čistá hmotnost návinu `weightGrams` v gramech. Bez parseovatelné hmotnosti se nabídka zahodí. Hmotnost se nesmí doplnit z názvu („1 kg“ v titulku není údaj). Když feed hmotnost nemá, kilogram se nevymýšlí a nabídka se nezobrazí.

Volitelná pole filamentu, jen pokud je feed opravdu obsahuje: `material`, `brand`, `color`, `diameterMm`, `packaging` (`spool` / `refill`). Chybějící materiál se nedoplňuje — zejména ne výchozí hodnotou PLA.

## Normalizace produktů

Stejný model může mít více názvů. Varianty se nesmí omylem sloučit:

- kit vs. assembled,
- bez AMS vs. Combo,
- velikost cívky 750 g / 1 kg / 2 kg,
- různé materiály nebo barvy, pokud mění cenu,
- různé revize produktu.

Každá normalizační vazba má být verzovaná a dohledatelná.

## Řazení

Výchozí pravidla musí být explicitní. Affiliate provize není vstup do řazení — komparátory pole `affiliateUrl` nečtou.

### Filament (první vlna)

Výchozí klíč je **Kč/kg produktu**, doprava se do něj nepočítá:

`pricePerKg = price / (weightGrams / 1000)`

Stejný vzorec platí pro EUR/kg. Měny se nepřepočítávají odhadem kurzu.

Skupiny produktů i nabídky uvnitř skupiny se řadí podle tohoto klíče vzestupně. Nabídka bez hmotnosti (tiskárna, nebo filament, který validací neprošel) v Kč/kg pořadí není — do tabulky filamentu se taková řádka bez `weightGrams` nedostane.

Volitelný klíč je **celkem s dopravou** (`totalPrice = price + shippingPrice`), jen u nabídek, kde je `shippingPrice` ve feedu. Neznámá doprava se do tohoto pořadí nepočítá jako nula a v tabulce zůstane viditelná jako neznámá. Celkem se u ní neukáže.

### Tiskárna (později)

- celková cena produktu + známá doprava,
- stejné pravidlo pro neznámou dopravu: není to nula.

## Čerstvost dat

Každá nabídka musí mít `fetchedAt`. Výchozí okno je 36 hodin (`STALE_AFTER_MS`). Starší nabídka se v tabulce označí („starší 36 h“). Skrytí místo označení lze později zapnout per feed. Nikdy nezobrazovat starou cenu bez upozornění. Neplatné `fetchedAt` se bere jako zastaralé.

## Validace filamentového importu

Importér je `scripts/import-filament-feed.mjs`. Čte jen lokální soubor. Argument ve tvaru `https://…` odmítne — feed se stáhne ručně, skript obchody neprohlíží.

Řádek se zahodí, když:

- nejde přečíst kladnou hmotnost včetně jednotky (`g` / `kg`); holé číslo bez jednotky nestačí,
- hmotnost je jen v názvu produktu,
- víc net-hmotností si odporuje (`ambiguous-weight`),
- cena produktu chybí nebo není kladná,
- nejde určit sklad (u Heureka-like XML je `DELIVERY_DATE` &lt; 0 nebo prázdné neznámý stav, ne „skladem“),
- název sedí na ne-filament (startovní seznam: stretch, fólie, resin, pryskyřice, isopropyl, sušička). Špatně vyplněný materiál PLA takovou položku nezachrání,
- průměr nebo balení ve feedu jsou, ale nejdou převést na `diameterMm` / `spool|refill`.

Hmotnost:

- pole typu „hmotnost návinu“, „filament“, „netto“ má přednost a dostane `weightConfidence: net`,
- jediné obecné pole „Hmotnost“ / „Weight“ se přijme jako `unspecified` a v UI se označí „ověřit návin“ (může jít o hmotnost balíku),
- když jsou obě, vyhraje návin; balíková hmotnost se do Kč/kg nepoužije.

Doprava:

- jedna uvedená cena dopravy se uloží, včetně explicitní nuly,
- víc různých cen (výdejna 0 Kč a doručení 79 Kč) se neuhádne minimem. `shippingPrice` zůstane prázdné a report dostane `ambiguous-shipping`.

`productId` se mezi obchody neslučuje podle podobnosti názvu. Bez mapy je identita `shopId:ITEM_ID`. Společné id vznikne jen z explicitního JSON `--normalize` (klíč `shopId:ITEM_ID`).

Ukázkové nabídky v repu mají `example: true` a `source: manual-approved`. Do `uniqueShopCount()` a do zrušení `noindex` se nepočítají.

## Import a sloučení do `offers`

```bash
node scripts/import-filament-feed.mjs
node scripts/import-filament-feed.mjs --xml ./merchant-feed.xml \
  --shop-id shop --shop-name "Název obchodu" --country CZ --source xml \
  --normalize ./normalize.json --write src/data/offers.generated.ts
```

`src/data/offers.generated.ts` je v `.gitignore` a stránky ho nesmí importovat.

Postup, až bude skutečný feed:

1. Uložit XML nebo JSON od obchodu na disk. Nescrapovat e-shop.
2. Spustit importér a projít přijaté řádky i každý reject.
3. Zkontrolovat `weightConfidence` a varování k dopravě.
4. Doplnit normalizační mapu tam, kde jde prokazatelně o stejnou variantu (stejný návin, barva, průměr, cívka vs. refill).
5. Zkontrolované řádky zapsat do `offers` v `src/data/offers.ts`. U živých řádků nenastavovat `example: true`.
6. `noindex` na `/srovnavac/` spadne až když `isComparerIndexable()` uvidí aspoň 3 obchody, normalizaci, stale kontrolu, označené affiliate odkazy a tuto metodiku.

## Lokální náhled (bez živých cen)

Produkční pole `offers` zůstává prázdné, brána 0/3, `noindex`.

Náhled tabulky jen ve vývojovém serveru:

```bash
npm run dev
```

Pak otevřít `/srovnavac/?preview=1`. Stránka je statická, takže query čte prohlížeč a jen odkryje blok, který `astro dev` vykreslil. Ceny jsou vymyšlené fixture z `scripts/fixtures/filament-offers.example.json` (tři obchody, PLA 1 kg a PETG 750 g, aby bylo vidět Kč/kg proti ceně na štítku). `astro build` má `import.meta.env.DEV === false`, takže ten blok v nasazeném HTML není a query na produkci nic nepřidá.

## Brána pro veřejné spuštění

Srovnávač zůstává `noindex`, dokud:

- nejsou nejméně 3 stabilní obchody,
- není vyřešená normalizace produktů,
- není kontrola stale dat,
- nejsou označené affiliate odkazy,
- není veřejná metodika.

## Co měřit

- počet prokliků do obchodů,
- konverze/provize dostupné z affiliate sítě,
- podíl nabídek s čerstvými daty,
- chyby normalizace,
- výpadky jednotlivých feedů.
