# Identita filamentu

Dlaždice na `/srovnavac/` není materiál + barva + hmotnost. Klíč je:

značka + produktová řada + materiál + barva + hmotnost (g) + průměr (mm) + balení (`spool` nebo `refill`).

Každá část musí přijít z pole feedu, nebo z tabulky v tomto adresáři. Název produktu se nečte. Podobnost řetězců nabídky nespojí.

Spojení mezi obchody:

1. stejné EAN (tag `<EAN>`, 8–14 číslic), a celý klíč souhlasí, nebo
2. skupina v `product-map.json`, a celý klíč souhlasí.

Jinak má nabídka vlastní `cardId` `offer:<shopId:ITEM_ID>` a řádek v revizi.

## Tabulky

- `aliases.json` — přesná hodnota pole → kanonická hodnota. Cíl nesmí být zároveň klíč (řetězení skript odmítne). Bez převodu velikosti písmen.
- `alias-candidates.json` — návrhy. `applied` musí zůstat `false`. Normalizátor je neaplikuje.
- `field-rules.json` — přesné dvojice parametr/hodnota pro balení. Ostatní hodnoty `Cívka` (AMS, hmotnost) balení nejsou.
- `product-lines.json` — řada, kterou feed nemá. `byOfferId` je `shopId:ITEM_ID`. `byEan` je přesný řetězec číslic.
- `product-map.json` — ruční spojení bez společného EAN. `productLine` a `form` sem patří jen jako zapsaná hodnota.

`src/data/filament-feed-facts.generated.json` drží EAN a balení z XML, které vyrobilo aktuální náhled. Ceny tam nejsou. Extrakce skončí chybou, když `fetchedAt` nebo cena nesedí na náhled.

## Příkazy

```bash
npm run fetch:filament -- --write-preview src/data/filament-preview.generated.json
npm run facts:filament
npm run normalize:filament
npm run history:filament -- --date YYYY-MM-DD --preview src/data/filament-preview.generated.json --source "fetchedAt YYYY-MM-DD"
```

`facts:filament` čte `.cache/filament-feeds/` z téhož stažení. Bez té cache se fakta znovu nesestaví; v gitu je vygenerovaný soubor, takže `normalize:filament --check` cache nepotřebuje.

`history:filament` připíše jeden den do `src/data/filament-history.json` (nabídka i dlaždice: cena, Kč/kg, sklad, obchod, datum). Stejný den se nepřepíše. Jiný obsah stejného data je chyba. Skript nic neplánuje.

Snímek `2026-10-03` je z gitu `4caab44` a nemá EAN (`--no-facts`), takže dlaždice toho dne jsou po jedné nabídce. Po doplnění mapy nebo řad, které v tom starém souboru nejsou, ten den znovu nespouštějte: kontrola odkáže na neznámé `productId`.

## Revize

`npm run normalize:filament` zapíše `review.md`, `review.json` a `review.csv`. Důvod znamená, že se nabídka nesmí automaticky sloučit. Nejčastěji chybí produktová řada (ve feedu není) nebo balení.
