# Revize identity filamentu

Vygenerováno `scripts/filament-normalize.mjs`. Nabídka bez značky, materiálu, barvy, hmotnosti nebo ověřeného průměru zůstává na vlastní dlaždici. Barva, kterou feed a název nepotvrdí, je prázdná a na dlaždici je `neuvedeno`.
Klíč je značka, materiál, barva, hmotnost, průměr a balení. Produktová řada se přidá, jen když je v tabulce. Mezi obchody spojuje stejné EAN (značka, materiál a hmotnost po aliasu sedí) nebo `product-map.json`. V jednom obchodě stejný klíč sdílí dlaždici.

## Souhrn

| | počet |
| --- | ---: |
| nabídky | 3107 |
| dlaždice dřív (materiál + barva + hmotnost) | 680 |
| dlaždice teď | 2081 |
| nabídky spojené podle EAN | 87 |
| z toho mezi obchody | 64 |
| skupiny EAN mezi obchody spojené / nespojené | 31 / 8 |
| skupiny EAN spojené | 42 |
| skupiny EAN viděné a nespojené | 8 |
| nabídky na společné dlaždici v jednom obchodě | 1276 |
| nabídky spojené podle mapy | 0 |
| skupiny mapy spojené | 0 |
| nabídky v revizi | 1011 |
| značky před aliasem / po aliasu | 38 / 36 |
| materiály před aliasem / po aliasu | 48 / 47 |
| barvy před aliasem / po aliasu | 69 / 69 |

## Důvody revize

| důvod | nabídek |
| --- | ---: |
| missing-diameter | 702 |
| missing-color | 312 |
| missing-material | 79 |
| ean-conflict | 16 |
| ean-material-conflict | 14 |
| form-param-disagrees | 10 |
| ean-brand-conflict | 2 |
| ean-weight-conflict | 2 |

## EAN přes víc obchodů

`ean:5903707918508` — Professional Lab · PETG · černá · 1 kg · 1,75 mm · cívka (EAN 5903707918508)
- 3dfil `3dfil:2360` — PROF. LAB | PETG | Černá | 1.75mm | 1kg
- filamenty-brno `filamenty-brno:FG-P26-E1` — Filament Professional Lab PETG 1,75 mm 1 kg, Černá FG-P26-E1
- materialpro3d `materialpro3d:PETG175PL1BK` — PETG filament 1,75 mm černý Professional Lab 1 kg

`ean:5903707918546` — Professional Lab · PETG · červená · 1 kg · 1,75 mm · cívka (EAN 5903707918546)
- 3dfil `3dfil:2359` — PROF. LAB | PETG | Červená | 1.75mm | 1kg
- filamenty-brno `filamenty-brno:FG-P30-E1` — Filament Professional Lab PETG 1,75 mm 1 kg, Červená FG-P30-E1
- materialpro3d `materialpro3d:PETG175PL1RD` — PETG filament 1,75 mm červený Professional Lab 1 kg

`ean:5903707918317` — Professional Lab · ABS · žlutá · 1 kg · 1,75 mm · cívka (EAN 5903707918317)
- 3dfil `3dfil:4161` — PROF. LAB | ABS | Žlutá | 1.75mm | 1kg
- filamenty-brno `filamenty-brno:FG-P7-E1` — Filament Professional Lab ABS+ 1,75 mm 1 kg, Žlutá FG-P7-E1

## Příklad rozdělené dlaždice

Původní klíč `pla|zelená|1000`: 129 nabídek, 19 značek.
- `offer:materialpro3d:PLA175LB1AGN` — 3DLabPrint · PLA · zelená · 1 kg · 1,75 mm · cívka (materialpro3d, PolyLight 1.0 LW PLA army green filament 1,75 mm 3DLabPrint 1 kg)
- `ean:5904323179458` — 3DPower · PLA · zelená · 1 kg · cívka (3dfil, 3DPOWER | PLA | Zelená "Military" | 1.75mm | 1kg)
- `offer:materialpro3d:PLA175AF1GN` — ABAFLEX · PLA · zelená · 1 kg · 1,75 mm · cívka (materialpro3d, PLA zelená 1 kg Abaflex 1,75 mm)

## EAN, které se nespojilo

- EAN 5903707922932 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:4594 (PROF. LAB | PLA Wood | Maple Wood | 1.75mm | 1kg); filamenty-brno:FG-P159-E1 (Filament Professional Lab PLA 1,75 mm 1 kg, Javorová FG-P159-E1)
- EAN 5903707923915 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:3652 (PROF. LAB | PETG-CF | Black | 1.75mm | 1kg); filamenty-brno:FG-P208-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Černá FG-P208-E1)
- EAN 5903707923922 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:3653 (PROF. LAB | PETG-CF | Blue | 1.75mm | 1kg); filamenty-brno:FG-P209-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Modrá FG-P209-E1)
- EAN 5903707923939 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:4030 (PROF. LAB | PETG-CF | Red | 1.75mm | 1kg); filamenty-brno:FG-P210-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Červená FG-P210-E1)
- EAN 5903707923946 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:3651 (PROF. LAB | PETG-CF | Grey | 1.75mm | 1kg); filamenty-brno:FG-P211-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Šedá FG-P211-E1)
- EAN 5903707923953 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:3708 (PROF. LAB | PETG-CF | Green | 1.75mm | 1kg); filamenty-brno:FG-P212-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Zelená FG-P212-E1)
- EAN 6932704920299 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:3697 (ELEGOO | PETG-CF | Grey | 1.75mm | 1kg); filamenty-brno:50_203_0648 (Filament ELEGOO PETG-CF Carbon fiber 1,75 mm 0,5 kg, Šedá)
- EAN 6933582322250 — 3dfil, filamenty-brno — ean-brand-conflict, ean-conflict, ean-weight-conflict — 3dfil:4413 (SUNLU | PP | Natur | 1.75mm | 0,8kg); filamenty-brno:SUN-PP-PRI (Filament Sunlu PP 1,75 mm 1 kg, Přírodní)

Aliasové návrhy, které se neaplikují, jsou v `alias-candidates.json`.
Celý seznam nabídek v revizi je v `review.csv` a `review.json`.
