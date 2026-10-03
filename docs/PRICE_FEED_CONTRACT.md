# První Vrstva — datový kontrakt srovnávače

Cíl: lokální CZ/SK ceny, které lze auditovat. Žádné ručně udržované „aktuální“ ceny.

## Preferované zdroje

1. XML feed přímo od obchodu.
2. API obchodu.
3. Affiliate síť / affiliate feed se souhlasem obchodníka.
4. Ruční import pouze jako dočasný interní zdroj; veřejná cena musí mít jasný čas kontroly.

Agresivní scraping není výchozí řešení.

## Výjimka provozovatele: tři veřejné feedy

Provozovatel 3. 10. 2026 zrušil pravidlo „nejdřív souhlas, potom jakýkoli fetch“ jen pro tři veřejné Heureka XML. Jiné obchody, HTML kategorií a hádání tajných URL to nepokrývá.

- Materialpro3D — `https://www.materialpro3d.cz/heureka/export/products.xml`
- Filamenty Brno — `https://www.filamentybrno.cz/heureka/export/products.xml`
- 3Dfil — `https://www.3dfil.cz/heureka/export/products.xml`

`npm run fetch:filament` bere jen tento seznam, představí se jako `PrvniVrstvaFilamentBot`, mezi obchody dvě vteřiny čeká, odpověď cachuje do `.cache/filament-feeds/` a při HTTP chybě, cizím přesměrování nebo ne-XML odpovědi skončí. Nejde do košíku, na přihlášení, na stránky produktů ani na další e-shopy. `Content-Signal: ai-train=no` se neobchází: XML se mapuje na řádky nabídek, neukládá se jako trénovací korpus.

Aurapol a Filament PM veřejný feed bez tajného tokenu nemají (u Filament PM obvyklé cesty vrací 404, u Aurapol je feed až za tokenem v administraci Upgates a token se nehádá). Jedna kategorie HTML u každého — Aurapol `/cz/pla`, Filament PM `/pla` — hmotnost návinu neobsahuje, jen filtr a „1 kg“ v názvu, takže se z HTML nic neimportuje. Místo nich je třetí zdroj veřejné XML 3Dfilu. Příkaz nezapisuje do `src/data/offers.ts`. `/srovnavac/` zůstává `noindex`, dokud zkontrolované řádky z aspoň tří obchodů nejsou ručně v `offers`.

Bez sítě: `npm run fetch:filament -- --offline` a stejná kontrola uvnitř `npm run import:filament` mapují ořezané výřezy v `scripts/fixtures/snapshots/` (popisy, obrázky a GPSR kontakty jsou pryč). Výřezy nejsou ukázkové fixture a do produkce se neimportují.

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

Importér je `scripts/import-filament-feed.mjs`. Čte jen lokální soubor. Argument ve tvaru `https://…` odmítne. Veřejné XML z výjimky výše stahuje jen `scripts/fetch-filament-feeds.mjs` a výsledek předá stejnému mapování.

Řádek se zahodí, když:

- nejde přečíst kladnou hmotnost včetně jednotky (`g` / `kg`); holé číslo bez jednotky nestačí,
- hmotnost je jen v názvu produktu,
- víc net-hmotností si odporuje (`ambiguous-weight`),
- cena produktu chybí nebo není kladná,
- nejde určit sklad (u Heureka-like XML je `DELIVERY_DATE` &lt; 0 nebo prázdné neznámý stav, ne „skladem“),
- název sedí na ne-filament (startovní seznam: stretch, fólie, resin, pryskyřice, isopropyl, sušička). Špatně vyplněný materiál PLA takovou položku nezachrání,
- průměr nebo balení ve feedu jsou, ale nejdou převést na `diameterMm` / `spool|refill`. Tolerance (`+/- 0,05 mm`) se přeskočí, když je vedle ní parseovatelný `Průměr struny` v rozsahu 1–4 mm. Dva různé parseovatelné průměry se neuhádnou. Když žádný průměr parseovat nejde, řádek se zahodí. Průměr z názvu se nebere.

Hmotnost:

- parametrem hmotnosti je jen pole, jehož název je hmotnost (`Hmotnost`, `Váha`, `Weight`, návin, netto). `Vlastnost filamentu` hmotnost není,
- pole typu „hmotnost návinu“, „hmotnost filamentu“, „netto“, „hmotnost bez obalu“ má přednost a dostane `weightConfidence: net`,
- jediné obecné pole „Hmotnost“ / „Váha“ / „Weight“ se přijme jako `unspecified` a v UI se označí „ověřit návin“ (může jít o hmotnost balíku),
- když jsou obě, vyhraje návin; balíková hmotnost se do Kč/kg nepoužije.

Balení: `Balení` / `Packaging` se převádí na `spool` nebo `refill`. Parametr `Refill: Ano` je refill. Z názvu produktu se refill ani cívka nedočtou.

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

1. U tří veřejných feedů z výjimky výše stačí `npm run fetch:filament`. Jinak uložit XML nebo JSON od obchodu na disk a e-shop nescrapovat.
2. Spustit importér a projít přijaté řádky i každý reject.
3. Zkontrolovat `weightConfidence` a varování k dopravě.
4. Doplnit normalizační mapu tam, kde jde prokazatelně o stejnou variantu (stejný návin, barva, průměr, cívka vs. refill).
5. Zkontrolované řádky zapsat do `offers` v `src/data/offers.ts`. U živých řádků nenastavovat `example: true`.
6. `noindex` na `/srovnavac/` spadne až když `isComparerIndexable()` uvidí aspoň 3 obchody, normalizaci, stale kontrolu, označené affiliate odkazy a tuto metodiku.

## Lokální náhled

Produkční pole `offers` zůstává prázdné, brána 0/3, `noindex`. Tři veřejné feedy samy bránu neotevřou: `productId` je pořád `shopId:ITEM_ID` a normalizace mezi obchody není hotová. `isComparerIndexable()` by po zápisu do `offers` pustilo indexaci jen podle počtu obchodů, což tenhle seznam nestačí. Dokud neplatí celá brána níže, řádky do `offers` nepatří.

Náhled přijatých řádků jen ve vývojovém serveru:

```bash
npm run dev
```

Pak otevřít `/srovnavac/?preview=1`. Stránka je statická, takže query čte prohlížeč a jen odkryje blok, který `astro dev` vykreslil. Tabulka bere vygenerovaný soubor `src/data/filament-preview.generated.json`: přijaté nabídky ze tří Heureka XML, seřazené podle Kč/kg, s obchodem, hmotností a časem stažení. Filtr materiálu, značky, barvy, průměru, hmotnosti a obchodu jen skrývá řádky. Mřížka sdruží nabídky se stejným materiálem, barvou a hmotností. Koupit vede na URL obchodu, nebo na `affiliateUrl`, když ji řádek má. Partnerský odkaz se u řádku označí a do řazení nevstupuje. Neznámá doprava není nula. Obnova:

```bash
npm run fetch:filament -- --write-preview src/data/filament-preview.generated.json
```

`astro build` má `import.meta.env.DEV === false`, takže se katalog do HTML pro Pages nezapíše. Vymyšlené fixture v `scripts/fixtures/filament-offers.example.json` zůstávají jen pro test importéru.

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
