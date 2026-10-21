# Identita filamentu

Dlaždice na `/srovnavac/` má klíč:

značka + materiál + barva + hmotnost (g) + průměr (mm) + balení (`spool` / `refill`).

Produktová řada se přidá jen tehdy, když je v `product-lines.json` nebo v `product-map.json`. Chybějící řada dlaždici nerozbije. Ve feedech pole řady není.

## Spojení

- Stejné EAN (tag `<EAN>`, 8–14 číslic) spojí nabídky, když po aliasu sedí značka, materiál a hmotnost. Jiná značka, jiný materiál nebo jiná hmotnost pod stejným EAN se nespojí a jde do revize.
- Skupina v `product-map.json` spojí nabídky bez společného EAN. Celý klíč musí sedět.
- V jednom obchodě nabídky se stejným klíčem sdílejí dlaždici.
- Stejný klíč ve dvou obchodech bez EAN nebo mapy zůstane na dvou dlaždicích.

Chybí-li značka, materiál, barva, hmotnost, nebo průměr, který tabulka nedovolí doplnit, nabídka zůstane sama a je v revizi.

## Tabulky

- `aliases.json` — přesná hodnota pole → kanonická hodnota. Cíl nesmí být zároveň klíč. Bez převodu, který tabulka výslovně nemá. `SILK` je `Silk`, ne `PLA Silk`. `CF` není `PETG-CF`. `Prof. Lab` a `Prof.Lab` jsou `Professional Lab`.
- `alias-candidates.json` — návrhy. `applied` musí zůstat `false`.
- `field-rules.json` — tokeny pro refill (`refill`, `náplň`, `bez cívky`) a průměr 1,75 mm jen pro Filamenty Brno. 3Dfil a Materialpro3D default nemají: 3Dfil průměr neuvádí, Materialpro3D má ve feedu i 2,85 mm.
- `product-lines.json` — ruční řada. `byOfferId` je `shopId:ITEM_ID`. `byEan` je přesný řetězec číslic.
- `product-map.json` — ruční spojení bez společného EAN.

Hmotnost se z názvu nečte. Průměr taky ne.

## Příkazy

```bash
npm run fetch:filament -- --write-preview src/data/filament-preview.generated.json
npm run facts:filament
npm run normalize:filament
npm run history:filament -- --date YYYY-MM-DD --preview src/data/filament-preview.generated.json --source "fetchedAt YYYY-MM-DD"
```

`facts:filament` čte `.cache/filament-feeds/` z téhož stažení a odmítne zápis, když cena nebo důkaz o průměru nesedí. `normalize:filament -- --check` cache nepotřebuje.

`history:filament` připíše jeden den do `src/data/filament-history.json`. Stejný den se nepřepíše. Skript nic neplánuje.

Snímek `2026-10-03` je z gitu `4caab44` a nemá EAN (`--no-facts`). Po doplnění mapy, která odkazuje na `productId` z toho souboru chybějící, ten den znovu nespouštějte.

## Revize

`npm run normalize:filament` zapíše `review.md`, `review.json` a `review.csv`.
