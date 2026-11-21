# Revize identity filamentu

Vygenerováno `scripts/filament-normalize.mjs`. Nabídka bez značky, materiálu, barvy, hmotnosti nebo ověřeného průměru zůstává na vlastní dlaždici. Barva, kterou feed a název nepotvrdí, je prázdná a na dlaždici je `neuvedeno`.
Klíč je značka, materiál, barva, hmotnost, průměr a balení. Produktová řada se přidá, jen když je v tabulce. Mezi obchody spojuje stejné EAN (značka, materiál a hmotnost po aliasu sedí) nebo `product-map.json`. V jednom obchodě stejný klíč sdílí dlaždici.

## Souhrn

| | počet |
| --- | ---: |
| nabídky | 3141 |
| dlaždice dřív (materiál + barva + hmotnost) | 687 |
| dlaždice teď | 2071 |
| nabídky spojené podle EAN | 83 |
| z toho mezi obchody | 60 |
| skupiny EAN mezi obchody spojené / nespojené | 28 / 8 |
| skupiny EAN spojené | 39 |
| skupiny EAN viděné a nespojené | 8 |
| nabídky na společné dlaždici v jednom obchodě | 1334 |
| nabídky spojené podle mapy | 0 |
| skupiny mapy spojené | 0 |
| nabídky v revizi | 987 |
| značky před aliasem / po aliasu | 39 / 37 |
| materiály před aliasem / po aliasu | 49 / 48 |
| barvy před aliasem / po aliasu | 69 / 69 |

## Důvody revize

| důvod | nabídek |
| --- | ---: |
| missing-diameter | 715 |
| missing-color | 289 |
| missing-material | 64 |
| ean-conflict | 16 |
| ean-material-conflict | 14 |
| form-param-disagrees | 11 |
| ean-brand-conflict | 2 |
| ean-weight-conflict | 2 |

## EAN přes víc obchodů

`ean:5903707918539` — Professional Lab · PETG · modrá · 1 kg · 1,75 mm · cívka (EAN 5903707918539)
- 3dfil `3dfil:3826` — PROF. LAB | PETG | Modrá | 1.75mm | 1kg
- filamenty-brno `filamenty-brno:FG-P29-E1` — Filament Professional Lab PETG 1,75 mm 1 kg, Modrá FG-P29-E1
- materialpro3d `materialpro3d:PETG175PL1BE` — PETG filament 1,75 mm modrý Professional Lab 1 kg

`ean:5903707918553` — Professional Lab · PETG · zelená · 1 kg · 1,75 mm · cívka (EAN 5903707918553)
- 3dfil `3dfil:2361` — PROF. LAB | PETG | Zelená | 1.75mm | 1kg
- filamenty-brno `filamenty-brno:FG-P31-E1` — Filament Professional Lab PETG 1,75 mm 1 kg, Zelená FG-P31-E1
- materialpro3d `materialpro3d:PETG175PL1GN` — PETG filament 1,75 mm zelený Professional Lab 1 kg

`ean:5903707918560` — Professional Lab · PETG · neuvedeno · 1 kg · 1,75 mm · cívka (EAN 5903707918560)
- 3dfil `3dfil:3464` — PROF. LAB | PETG | Transparent | 1.75mm | 1kg
- filamenty-brno `filamenty-brno:FG-P32-E1` — Filament Professional Lab PETG 1,75 mm 1 kg, Transparentní FG-P32-E1
- materialpro3d `materialpro3d:PETG175PL1T` — PETG filament 1,75 mm transparentní Professional Lab 1 kg

## Příklad rozdělené dlaždice

Původní klíč `pla|zelená|1000`: 131 nabídek, 19 značek.
- `offer:materialpro3d:PLA175LB1AGN` — 3DLabPrint · PLA · zelená · 1 kg · 1,75 mm · cívka (materialpro3d, PolyLight 1.0 LW PLA army green filament 1,75 mm 3DLabPrint 1 kg)
- `ean:5904323179458` — 3DPower · PLA · zelená · 1 kg · cívka (3dfil, 3DPOWER | PLA | Zelená "Military" | 1.75mm | 1kg)
- `offer:materialpro3d:PLA175AF1GN` — ABAFLEX · PLA · zelená · 1 kg · 1,75 mm · cívka (materialpro3d, PLA zelená 1 kg Abaflex 1,75 mm)

## EAN, které se nespojilo

- EAN 5903707919130 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:4709 (PROF. LAB | PLA Silk | White | 1.75mm | 1kg); filamenty-brno:FG-P89-E1 (Filament Professional Lab PLA Silk 1,75 mm 1 kg, Bílá FG-P89-E1)
- EAN 5903707920525 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:2399 (PROF. LAB | Pla Dual Silk | Černá-fialová | 1.75mm | 1kg); filamenty-brno:FG-P102-E1 (Filament Professional Lab PLA Silk 1,75 mm 1 kg, Dvoubarevný černě-fialová FG-P102-E1)
- EAN 5903707922932 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:4594 (PROF. LAB | PLA Wood | Maple Wood | 1.75mm | 1kg); filamenty-brno:FG-P159-E1 (Filament Professional Lab PLA 1,75 mm 1 kg, Javorová FG-P159-E1)
- EAN 5903707923922 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:3653 (PROF. LAB | PETG-CF | Blue | 1.75mm | 1kg); filamenty-brno:FG-P209-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Modrá FG-P209-E1)
- EAN 5903707923946 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:3651 (PROF. LAB | PETG-CF | Grey | 1.75mm | 1kg); filamenty-brno:FG-P211-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Šedá FG-P211-E1)
- EAN 5903707923953 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:3708 (PROF. LAB | PETG-CF | Green | 1.75mm | 1kg); filamenty-brno:FG-P212-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Zelená FG-P212-E1)
- EAN 6932704920299 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:3697 (ELEGOO | PETG-CF | Grey | 1.75mm | 1kg); filamenty-brno:50_203_0648 (Filament ELEGOO PETG-CF Carbon fiber 1,75 mm 0,5 kg, Šedá)
- EAN 6933582322250 — 3dfil, filamenty-brno — ean-brand-conflict, ean-conflict, ean-weight-conflict — 3dfil:4413 (SUNLU | PP | Natur | 1.75mm | 0,8kg); filamenty-brno:SUN-PP-PRI (Filament Sunlu PP 1,75 mm 1 kg, Přírodní)

Aliasové návrhy, které se neaplikují, jsou v `alias-candidates.json`.
Celý seznam nabídek v revizi je v `review.csv` a `review.json`.
