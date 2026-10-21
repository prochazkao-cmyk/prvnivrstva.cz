# Revize identity filamentu

Vygenerováno `scripts/filament-normalize.mjs`. Nabídka bez úplného klíče zůstává na vlastní dlaždici.
Klíč je značka, produktová řada, materiál, barva, hmotnost, průměr a balení. Spojení mezi obchody je jen stejné EAN nebo `product-map.json`.

## Souhrn

| | počet |
| --- | ---: |
| nabídky | 3166 |
| dlaždice dřív (materiál + barva + hmotnost) | 633 |
| dlaždice teď | 3166 |
| nabídky spojené podle EAN | 0 |
| skupiny EAN spojené | 0 |
| skupiny EAN viděné a nespojené | 49 |
| nabídky spojené podle mapy | 0 |
| skupiny mapy spojené | 0 |
| nabídky v revizi | 3166 |
| značky před aliasem / po aliasu | 37 / 36 |
| materiály před aliasem / po aliasu | 44 / 43 |
| barvy před aliasem / po aliasu | 59 / 38 |

## Důvody revize

| důvod | nabídek |
| --- | ---: |
| missing-product-line | 3166 |
| unknown-form | 2989 |
| missing-diameter | 709 |
| ean-not-merged | 100 |
| missing-color | 92 |
| missing-material | 73 |
| ean-conflict | 43 |

## Příklad rozdělené dlaždice

Původní klíč `pla|modrá|1000`: 160 nabídek, 19 značek.
- `offer:materialpro3d:PLA175LB1NYB` — 3DLabPrint · PLA · modrá · 1 kg · 1,75 mm (materialpro3d, PolyLight 1.0 LW PLA námořnicky modrý filament 1,75 mm 3DLabPrint 1 kg)
- `offer:3dfil:436` — 3DPower · PLA · modrá · 1 kg (3dfil, 3DPOWER | PLA | Modrá | 1.75mm | 1kg)
- `offer:filamenty-brno:ABA-PLA-MOD` — ABAFLEX · PLA · modrá · 1 kg · 1,75 mm (filamenty-brno, Filament ABAFLEX PLA 1,75 mm 1 kg, Modrá)

## EAN, které se nespojilo

- EAN 5903707918300 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:3703 (PROF. LAB | ABS | Šedá | 1.75mm | 1kg); filamenty-brno:FG-P3-E1 (Filament Professional Lab ABS+ 1,75 mm 1 kg, Šedá FG-P3-E1)
- EAN 5903707918317 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:4161 (PROF. LAB | ABS | Žlutá | 1.75mm | 1kg); filamenty-brno:FG-P7-E1 (Filament Professional Lab ABS+ 1,75 mm 1 kg, Žlutá FG-P7-E1)
- EAN 5903707918508 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:FG-P26-E1 (Filament Professional Lab PETG 1,75 mm 1 kg, Černá FG-P26-E1); materialpro3d:PETG175PL1BK (PETG filament 1,75 mm černý Professional Lab 1 kg)
- EAN 5903707918515 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:FG-P27-E1 (Filament Professional Lab PETG 1,75 mm 1 kg, Bílá FG-P27-E1); materialpro3d:PETG175PL1WE (PETG filament 1,75 mm bílý Professional Lab 1 kg)
- EAN 5903707918522 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:FG-P28-E1 (Filament Professional Lab PETG 1,75 mm 1 kg, Šedá FG-P28-E1); materialpro3d:PETG175PL1GY (PETG filament 1,75 mm šedý Professional Lab 1 kg)
- EAN 5903707918539 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:FG-P29-E1 (Filament Professional Lab PETG 1,75 mm 1 kg, Modrá FG-P29-E1); materialpro3d:PETG175PL1BE (PETG filament 1,75 mm modrý Professional Lab 1 kg)
- EAN 5903707918546 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:FG-P30-E1 (Filament Professional Lab PETG 1,75 mm 1 kg, Červená FG-P30-E1); materialpro3d:PETG175PL1RD (PETG filament 1,75 mm červený Professional Lab 1 kg)
- EAN 5903707918553 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:FG-P31-E1 (Filament Professional Lab PETG 1,75 mm 1 kg, Zelená FG-P31-E1); materialpro3d:PETG175PL1GN (PETG filament 1,75 mm zelený Professional Lab 1 kg)
- EAN 5903707918560 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:FG-P32-E1 (Filament Professional Lab PETG 1,75 mm 1 kg, Transparentní FG-P32-E1); materialpro3d:PETG175PL1T (PETG filament 1,75 mm transparentní Professional Lab 1 kg)
- EAN 5903707918577 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:4173 (PROF. LAB | PETG | Růžová | 1.75mm | 1kg); filamenty-brno:FG-P33-E1 (Filament Professional Lab PETG 1,75 mm 1 kg, Růžová FG-P33-E1)
- EAN 5903707918584 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:FG-P34-E1 (Filament Professional Lab PETG 1,75 mm 1 kg, Žlutá FG-P34-E1); materialpro3d:PETG175PL1YW (PETG filament 1,75 mm žlutý Professional Lab 1 kg)
- EAN 5903707918591 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:FG-P35-E1 (Filament Professional Lab PETG 1,75 mm 1 kg, Oranžová FG-P35-E1); materialpro3d:PETG175PL1OE (PETG filament 1,75 mm oranžový Professional Lab 1 kg)
- EAN 5903707918614 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:FG-P37-E1 (Filament Professional Lab PETG 1,75 mm 1 kg, Hnědá FG-P37-E1); materialpro3d:PETG175PL1BN (PETG filament 1,75 mm hnědý Professional Lab 1 kg)
- EAN 5903707920723 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:4164 (PROF. LAB | TPU | Modrá 95A | 1.75mm | 1kg); filamenty-brno:FG-P122-E1 (Filament Professional Lab TPU 95A 1,75 mm 1 kg, Modrá FG-P122-E1)
- EAN 5903707922239 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:3830 (PROF. LAB | ASA | Bílá | 1.75mm | 1kg); filamenty-brno:FG-P133-E1 (Filament Professional Lab ASA 1,75 mm 1 kg, Bílá FG-P133-E1)
- EAN 5903707922246 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:3701 (PROF. LAB | ASA | Stříbrná | 1.75mm | 1kg); filamenty-brno:FG-P134-E1 (Filament Professional Lab ASA 1,75 mm 1 kg, Stříbrná FG-P134-E1)
- EAN 5903707922253 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:3658 (PROF. LAB | ASA | Šedá | 1.75mm | 1kg); filamenty-brno:FG-P135-E1 (Filament Professional Lab ASA 1,75 mm 1 kg, Šedá FG-P135-E1)
- EAN 5903707922260 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:4163 (PROF. LAB | ASA | Modrá | 1.75mm | 1kg); filamenty-brno:FG-P136-E1 (Filament Professional Lab ASA 1,75 mm 1 kg, Modrá FG-P136-E1)
- EAN 5903707922277 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:3702 (PROF. LAB | ASA | Zelená | 1.75mm | 1kg); filamenty-brno:FG-P137-E1 (Filament Professional Lab ASA 1,75 mm 1 kg, Zelená FG-P137-E1)
- EAN 5903707922284 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:4162 (PROF. LAB | ASA | Červená | 1.75mm | 1kg); filamenty-brno:FG-P138-E1 (Filament Professional Lab ASA 1,75 mm 1 kg, Červená FG-P138-E1)
- EAN 5903707923663 — filamenty-brno, materialpro3d — ean-conflict, ean-not-merged, missing-product-line, unknown-form — filamenty-brno:FG-P195-E1 (Filament Professional Lab PETG 1,75 mm 1 kg, Olivově zelená FG-P195-E1); materialpro3d:PETG175PL1OGN (PETG filament 1,75 mm olivově zelený Professional Lab 1 kg)
- EAN 5903707923762 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:FG-P205-E1 (Filament Professional Lab PETG 1,75 mm 1 kg, Kávová FG-P205-E1); materialpro3d:PETG175PL1CE (PETG filament 1,75 mm hnědý Coffee Professional Lab 1 kg)
- EAN 5903707923779 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:FG-P206-E1 (Filament Professional Lab PETG 1,75 mm 1 kg, Fialová FG-P206-E1); materialpro3d:PETG175PL1PE (PETG filament 1,75 mm fialový Professional Lab 1 kg)
- EAN 5903707923939 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:4030 (PROF. LAB | PETG-CF | Red | 1.75mm | 1kg); filamenty-brno:FG-P210-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Červená FG-P210-E1)
- EAN 5903707923946 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:3651 (PROF. LAB | PETG-CF | Grey | 1.75mm | 1kg); filamenty-brno:FG-P211-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Šedá FG-P211-E1)
- EAN 5903707923953 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:3708 (PROF. LAB | PETG-CF | Green | 1.75mm | 1kg); filamenty-brno:FG-P212-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Zelená FG-P212-E1)
- EAN 5903707923960 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:4029 (PROF. LAB | PETG-CF | Purple | 1.75mm | 1kg); filamenty-brno:FG-P213-E1 (Filament Professional Lab PETG+CF 1,75 mm 1 kg, Fialová FG-P213-E1)
- EAN 5903707924226 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:4174 (PROF. LAB | PETG | Grass Green | 1.75mm | 1kg); filamenty-brno:FG-P223-E1 (Filament Professional Lab PETG 1,75 mm 1 kg, Světle zelená FG-P223-E1)
- EAN 5904323179045 — 3dfil — ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:1538 (3DPOWER | Pla | Žlutá "amber" | 1.75mm | 1kg); 3dfil:434 (3DPOWER | PLA | Žlutá | 1.75mm | 1kg)
- EAN 5904323179458 — 3dfil — ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:2246 (3DPOWER | PLA | Zelená "Military" | 1.75mm | 1kg); 3dfil:3907 (3DPOWER | PLA | Světle zelená | 1.75mm | 1kg)
- EAN 5906269965508 — 3dfil — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:2943 (NEBULA | PETG | Gray | 1.75mm | 1kg); 3dfil:3137 (NEBULA | PETG | Arctic Silver | 1.75mm | 1kg); 3dfil:3316 (NEBULA | PETG | Satin Silver | 1.75mm | 1kg)
- EAN 5906269965652 — 3dfil — ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:3079 (NEBULA | PETG | Lime Green | 1.75mm | 1kg); 3dfil:3317 (NEBULA | PETG | Emerald Green | 1.75mm | 1kg)
- EAN 5906269966307 — 3dfil — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:2984 (NEBULA | PETG | Yellow | 1.75mm | 1kg); 3dfil:3318 (NEBULA | PETG | Yellow Gold | 1.75mm | 1kg)
- EAN 5906269966451 — 3dfil — ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:2948 (NEBULA | PETG | Orange Fluo | 1.75mm | 1kg); 3dfil:3319 (NEBULA | PETG | Orange | 1.75mm | 1kg)
- EAN 6932704920299 — 3dfil, filamenty-brno — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:3697 (ELEGOO | PETG-CF | Grey | 1.75mm | 1kg); filamenty-brno:50_203_0648 (Filament ELEGOO PETG-CF Carbon fiber 1,75 mm 0,5 kg, Šedá)
- EAN 6973090163327 — 3dfil — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:1354_ERN (PHAETUS | Aeworthy PETG-CF | černá | 1.75mm | 1kg Barva: Černá); 3dfil:211_CER (PHAETUS | ToughPETG-HF | zelená | 1.75mm | 1kg Barva: Černá)
- EAN 8594210630178 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:ABA-PLA-SED (Filament ABAFLEX PLA 1,75 mm 1 kg, Šedá); materialpro3d:PLA175AF1GY (PLA šedá 1 kg Abaflex 1,75 mm)
- EAN 8594210630314 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:ABA-PETG-PLUS-ZLU (Filament ABAFLEX PETG+ 1,75 mm 1 kg, Žlutá); materialpro3d:PETG175AF1SYWT (PETG signální žlutá transparent 1,75 mm Abaflex 1 kg)
- EAN 8594210630406 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:ABA-PETG-PLUS-REFILL-CER (Filament ABAFLEX PETG+ 1,75 mm 1 kg REFILL, Černá); materialpro3d:PETGREF175AF1BK (PETG Refill černá 1,75 mm Abaflex 1 kg)
- EAN 8594210630499 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:ABA-PLA-MOD (Filament ABAFLEX PLA 1,75 mm 1 kg, Modrá); materialpro3d:PLA175AF1BE (PLA modrá 1 kg Abaflex 1,75 mm)
- EAN 8594210630529 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:ABA-PETG-PLUS-CER (Filament ABAFLEX PETG+ 1,75 mm 1 kg, Černá); materialpro3d:PETG175AF1BK (PETG černá 1,75 mm Abaflex 1 kg)
- EAN 8594210630550 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:ABA-PETG-PLUS-SED (Filament ABAFLEX PETG+ 1,75 mm 1 kg, Šedá); materialpro3d:PETG175AF1GY (PETG šedá 1,75 mm Abaflex 1 kg)
- EAN 8594210630574 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:ABA-PETG-PLUS-BIL (Filament ABAFLEX PETG+ 1,75 mm 1 kg, Bílá); materialpro3d:PETG175AF1WE (PETG bílá 1,75 mm Abaflex 1 kg)
- EAN 8594210630581 — filamenty-brno, materialpro3d — ean-not-merged, missing-product-line, unknown-form — filamenty-brno:ABA-PETG-PLUS-REFILL-BIL (Filament ABAFLEX PETG+ 1,75 mm 1 kg REFILL, Bílá); materialpro3d:PETGREF175AF1WE (PETG Refill bílá 1,75 mm Abaflex 1 kg)
- EAN 8594233080264 — 3dfil — ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:1902 (ZIRO | Pla Silk | Passionate | 1.75mm | 1kg); 3dfil:3527 (ZIRO | Pla Silk | Ember | 1.75mm | 1kg); 3dfil:3528 (ZIRO | Pla Silk | Champagne Sheen | 1.75mm | 1kg)
- EAN 8594233080721 — 3dfil — ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:2581 (ZIRO | Pla Matte | Gradient - Vibrant Coral | 1.75mm | 1kg); 3dfil:3525 (ZIRO | Pla Matte | Gradient - Gray Layer Rock | 1.75mm | 1kg)
- EAN 8594233080738 — 3dfil — ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:2584 (ZIRO | Pla Silk | Tri Color - Moonlit Lake | 1.75mm | 1kg); 3dfil:3529 (ZIRO | Pla Silk | Tri Color - Metal Blossom | 1.75mm | 1kg)
- EAN 8594233089540 — 3dfil — ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:4391 (ERYONE | TPU | 85A | Transparentní modrá | 1.75mm | 1kg); 3dfil:4392 (ERYONE | TPU | 85A | Transparentní červená | 1.75mm | 1kg)
- EAN 8720574342376 — 3dfil — ean-conflict, ean-not-merged, missing-diameter, missing-product-line, unknown-form — 3dfil:1531 (KEXCELLED | Pla Silk | Oranžová | 1.75mm | 1kg); 3dfil:1721 (KEXCELLED | Pla Silk | Zlatá | 1.75mm | 1kg)

Aliasové návrhy, které se neaplikují, jsou v `alias-candidates.json`.
Celý seznam nabídek v revizi je v `review.csv` a `review.json`.
