# Revize identity filamentu

Vygenerováno `scripts/filament-normalize.mjs`. Nabídka bez značky, materiálu, barvy, hmotnosti nebo ověřeného průměru zůstává na vlastní dlaždici.
Klíč je značka, materiál, barva, hmotnost, průměr a balení. Produktová řada se přidá, jen když je v tabulce. Mezi obchody spojuje stejné EAN (značka, materiál a hmotnost po aliasu sedí) nebo `product-map.json`. V jednom obchodě stejný klíč sdílí dlaždici.

## Souhrn

| | počet |
| --- | ---: |
| nabídky | 3166 |
| dlaždice dřív (materiál + barva + hmotnost) | 633 |
| dlaždice teď | 1875 |
| nabídky spojené podle EAN | 88 |
| z toho mezi obchody | 64 |
| skupiny EAN mezi obchody spojené / nespojené | 32 / 5 |
| skupiny EAN spojené | 43 |
| skupiny EAN viděné a nespojené | 6 |
| nabídky na společné dlaždici v jednom obchodě | 1615 |
| nabídky spojené podle mapy | 0 |
| skupiny mapy spojené | 0 |
| nabídky v revizi | 825 |
| značky před aliasem / po aliasu | 37 / 35 |
| materiály před aliasem / po aliasu | 44 / 43 |
| barvy před aliasem / po aliasu | 59 / 35 |

## Důvody revize

| důvod | nabídek |
| --- | ---: |
| missing-diameter | 704 |
| missing-color | 92 |
| missing-material | 73 |
| ean-conflict | 12 |
| ean-material-conflict | 12 |
| form-param-disagrees | 12 |

## EAN přes víc obchodů

`ean:5903707918300` — Professional Lab · ABS · šedá · 1 kg · 1,75 mm · cívka (EAN 5903707918300)
- 3dfil `3dfil:3703` — PROF. LAB | ABS | Šedá | 1.75mm | 1kg
- filamenty-brno `filamenty-brno:FG-P3-E1` — Filament Professional Lab ABS+ 1,75 mm 1 kg, Šedá FG-P3-E1

`ean:5903707918317` — Professional Lab · ABS · žlutá · 1 kg · 1,75 mm · cívka (EAN 5903707918317)
- 3dfil `3dfil:4161` — PROF. LAB | ABS | Žlutá | 1.75mm | 1kg
- filamenty-brno `filamenty-brno:FG-P7-E1` — Filament Professional Lab ABS+ 1,75 mm 1 kg, Žlutá FG-P7-E1

`ean:5903707918508` — Professional Lab · PETG · černá · 1 kg · 1,75 mm · cívka (EAN 5903707918508)
- filamenty-brno `filamenty-brno:FG-P26-E1` — Filament Professional Lab PETG 1,75 mm 1 kg, Černá FG-P26-E1
- materialpro3d `materialpro3d:PETG175PL1BK` — PETG filament 1,75 mm černý Professional Lab 1 kg

## Příklad rozdělené dlaždice

Původní klíč `pla|modrá|1000`: 160 nabídek, 19 značek.
- `shop:materialpro3d:3DLabPrint**PLA*modr%C3%A1*1000*1.75*spool` — 3DLabPrint · PLA · modrá · 1 kg · 1,75 mm · cívka (materialpro3d, PolyLight 1.0 LW PLA námořnicky modrý filament 1,75 mm 3DLabPrint 1 kg)
- `offer:3dfil:436` — 3DPower · PLA · modrá · 1 kg · cívka (3dfil, 3DPOWER | PLA | Modrá | 1.75mm | 1kg)
- `ean:8594210630499` — ABAFLEX · PLA · modrá · 1 kg · 1,75 mm · cívka (filamenty-brno, Filament ABAFLEX PLA 1,75 mm 1 kg, Modrá)

## EAN, které se nespojilo

- EAN 5903707923939 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:4030 (PROF. LAB | PETG-CF | Red | 1.75mm | 1kg); filamenty-brno:FG-P210-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Červená FG-P210-E1)
- EAN 5903707923946 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:3651 (PROF. LAB | PETG-CF | Grey | 1.75mm | 1kg); filamenty-brno:FG-P211-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Šedá FG-P211-E1)
- EAN 5903707923953 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:3708 (PROF. LAB | PETG-CF | Green | 1.75mm | 1kg); filamenty-brno:FG-P212-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Zelená FG-P212-E1)
- EAN 5903707923960 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:4029 (PROF. LAB | PETG-CF | Purple | 1.75mm | 1kg); filamenty-brno:FG-P213-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Fialová FG-P213-E1)
- EAN 6932704920299 — 3dfil, filamenty-brno — ean-conflict, ean-material-conflict — 3dfil:3697 (ELEGOO | PETG-CF | Grey | 1.75mm | 1kg); filamenty-brno:50_203_0648 (Filament ELEGOO PETG-CF Carbon fiber 1,75 mm 0,5 kg, Šedá)
- EAN 6973090163327 — 3dfil — ean-conflict, ean-material-conflict — 3dfil:1354_ERN (PHAETUS | Aeworthy PETG-CF | černá | 1.75mm | 1kg Barva: Černá); 3dfil:211_CER (PHAETUS | ToughPETG-HF | zelená | 1.75mm | 1kg Barva: Černá)

Aliasové návrhy, které se neaplikují, jsou v `alias-candidates.json`.
Celý seznam nabídek v revizi je v `review.csv` a `review.json`.
