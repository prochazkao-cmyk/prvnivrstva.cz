---
title: "Creality K1C — zdrojovaný profil uzavřené CoreXY tiskárny"
description: "Aktuální profil Creality K1C podle dokumentace výrobce: 220 × 220 × 250 mm, 300 °C hotend, uzavřená CoreXY konstrukce, kamera a podpora kompozitních filamentů."
publishedAt: 2026-09-29
reviewedAt: 2026-10-03
level: "pokročilý"
technologies:
  - "FDM"
tags:
  - "tiskarna"
  - "creality"
  - "k1c"
  - "corexy"
  - "fdm"
product: "Creality K1C"
contentMode: "zdrojovany-profil"
note: "Zdrojovaný profil podle aktuálních materiálů Creality. Nejde o vlastní fyzický test První Vrstvy."
sourceNote: "Primární zdroje: oficiální produktová stránka Creality K1C, Creality Support a K1C 2025 User Manual; ověřeno 3. 10. 2026."
---
Creality K1C je **uzavřená CoreXY FDM tiskárna** zaměřená na rychlé domácí a dílenské použití včetně filamentů plněných uhlíkovými vlákny. Tenhle text je zdrojovaný produktový profil, ne vlastní laboratorní test. Deklarované rychlosti a další marketingové údaje výrobce proto nepovažujeme za naše měření.

## Základní parametry K1C

| Parametr | Údaj výrobce |
|---|---|
| Technologie | FDM, CoreXY |
| Tiskový prostor | 220 × 220 × 250 mm |
| Konstrukce | uzavřená |
| Maximální teplota trysky | 300 °C |
| Maximální teplota podložky | 100 °C |
| Tryska | 0,4 mm, ocelový hrot / integrovaný heatbreak |
| Extruder | přímý pohon |
| Podložka | flexibilní PEI |
| Displej | 4,3\" dotykový |
| Kamera | ano |
| Automatické vyrovnání | ano |
| Senzor filamentu | ano |
| Obnova po výpadku napájení | ano |
| Připojení | USB, LAN/Wi‑Fi podle workflow, Creality Cloud |

Creality u K1C uvádí maximální rychlost **600 mm/s** a zrychlení až **20 000 mm/s²**. Jsou to limity deklarované výrobcem, nikoli důkaz, že každý model nebo materiál má smysl tisknout těmito hodnotami. Pro výběr tiskárny jsou podstatnější konstrukce, materiálové možnosti, pracovní prostor a workflow.

## Proč je K1C zajímavější než původní obecné „K1/K1C“ srovnání

K1C má vlastní současnou dokumentaci a jasně definovanou konfiguraci. Výrobce uvádí uzavřený rám, direct-drive extruder, rychle vyměnitelnou trysku a cestu filamentu připravenou i pro abrazivnější kompozity. Proto dává větší smysl hodnotit K1C jako samostatný produkt než směšovat různé revize celé řady K1 do jednoho verdiktu.

## Materiály: kde enclosure skutečně pomáhá

Oficiální specifikace uvádějí PLA, PETG, TPU, PET, ABS, ASA, PA a PC a také PLA-CF, PA-CF a PET-CF. Uzavřená konstrukce je prakticky důležitá hlavně u materiálů citlivějších na průvan a teplotní změny. Neznamená to ale, že samotný box odstraní všechny problémy s deformací velkých ABS/ASA dílů.

Pokud kupujete K1C právě kvůli technickým filamentům, sledujte také požadavky konkrétního výrobce filamentu na sušení, teplotu podložky, povrch a trysku. U kompozitů je důležitá odolnost celé filamentové cesty, ne pouze maximální teplota hotendu.

Související praktický průvodce: [warping u ABS — příčiny a checklist](/clanky/warping-u-abs-priciny-a-checklist/).

## Kamera, automatika a síťové workflow

K1C má podle výrobce kameru, automatické vyrovnání podložky, input shaping, detekci filamentu a obnovu tisku po výpadku napájení. Současná podpora Creality uvádí Creality Print a síťový/cloudový provoz; tiskárna zároveň umí pracovat se soubory G-code.

Kameru je lepší chápat jako nástroj pro dohled nad tiskem než jako garanci automatického odhalení každého problému. Stejně tak automatické vyrovnání omezuje rutinní nastavování první vrstvy, ale nenahrazuje čistou podložku a správný profil materiálu.

## K1C versus Bambu P1S

Oba stroje patří do kategorie uzavřených CoreXY tiskáren a míří i za hranici základního PLA. Rozhodnutí proto nestavte jen na maximální rychlosti z produktové stránky. Porovnejte zejména:

- velikost dílů, které skutečně tisknete,
- materiály a kompozity, které chcete používat,
- způsob práce se slicerem a sítí,
- dostupnost dílů a dokumentace,
- zda chcete vícebarevný/multimateriálový ekosystém.

Pro Bambu máme samostatný [zdrojovaný profil P1S](/recenze/bambu-p1s/).

## K1C versus Prusa CORE One+

CORE One+ je také uzavřená CoreXY tiskárna, ale jde o jiný ekosystém a jiný přístup k dokumentaci, servisu a rozšiřování. K1C proto není vhodné zjednodušovat na „levnější CORE One+“ ani opačně. Smysluplnější je porovnat požadované materiály, pracovní prostor, lokální/cloud workflow a servisní očekávání.

Podrobnosti jsou v [profilu Prusa CORE One+](/stroje/prusa-core-one-plus/).

## Co před nákupem ověřit

1. **Rozměry největšího dílu.** K1C má 220 × 220 × 250 mm, takže 256mm konkurence může nabídnout více prostoru v X/Y.
2. **Skutečné materiály.** Pro PLA/PETG není uzavřený box jediným rozhodujícím faktorem; u ABS/ASA/PA/PC je konstrukce relevantnější.
3. **Kompozity.** Ověřte doporučení konkrétního filamentu, zejména sušení a vhodnou trysku.
4. **Workflow.** Rozhodněte, zda chcete USB/LAN, Creality Print a případně Creality Cloud.
5. **Prostor kolem stroje.** Výrobce uvádí rozměry tiskárny 355 × 355 × 482 mm; počítejte také s manipulací a větráním.
6. **Aktuální revizi a dokumentaci.** Při nákupu použitého kusu ověřte konkrétní verzi stroje a firmware.

## Co v tomto profilu záměrně netvrdíme

Bez vlastního opakovatelného testu nehodnotíme hlučnost, přesnost, spolehlivost, kvalitu konkrétního kusu ani reálnou rychlost proti konkurenci. Stejně tak nepřebíráme komunitní zkušenosti s QC jako univerzální vlastnost všech K1C. Takové závěry patří až do skutečného testu s popsanou metodikou.

## Zdroje a metodika

Technické údaje byly 3. 10. 2026 ověřeny proti oficiální produktové stránce **Creality K1C**, stránce **Creality Support** a aktuálnímu **K1C 2025 User Manual**. Údaje jako 600 mm/s a 20 000 mm/s² jsou prezentovány jako deklarace výrobce, nikoli jako výsledek měření První Vrstvy.

**Shrnutí:** K1C je kompaktní uzavřená CoreXY tiskárna s 300 °C hotendem, kamerou, automatickým levelingem a oficiální podporou řady technických i CF filamentů. Největší smysl dává vybírat ji podle materiálů, pracovního prostoru a požadovaného workflow — ne podle jediného čísla maximální rychlosti.
