---
title: "Uzavřená 3D tiskárna pro ASA a ABS: co skutečně potřebujete"
description: "Zdrojovaný nákupní rádce: proč enclosure není totéž co řízená komora, jak číst specifikace a kdy dává smysl P1S, K1C nebo CORE One+."
publishedAt: 2026-10-04
author: "Redakce První vrstvy"
draft: false
tags:
  - nákupní rádce
  - ASA
  - ABS
  - komora
level: "pokročilý"
contentMode: "zdrojovany-profil"
evidence: "vyrobce"
sourceNote: "Technické parametry a deklarovaná kompatibilita vycházejí z aktuálních primárních zdrojů výrobců Bambu Lab, Creality a Prusa Research. Nejde o vlastní srovnávací test ani měření teploty komory."
---

Pokud chcete pravidelně tisknout **ASA nebo ABS**, samotný nápis „uzavřená tiskárna“ ještě neříká, jak dobře bude stroj držet teplotní podmínky během dlouhého tisku. Rozhodující je celý tepelný systém: kryt, vyhřívaná podložka, proudění vzduchu, řízení komory a profil konkrétního materiálu.

Tento článek není žebříček vítězů. Je to rozcestník, který odděluje **pasivní enclosure** od **měřené nebo aktivně řízené komory** a ukazuje, co výrobci u konkrétních strojů skutečně deklarují.

## Rychlá odpověď

- **Menší a běžné ASA/ABS díly:** smysl dává uzavřený stroj, u kterého výrobce ASA/ABS výslovně podporuje. Typickými příklady v našem katalogu jsou Bambu Lab P1S a Creality K1C.
- **Větší díly a důraz na tepelnou stabilitu:** zajímavější je stroj, který teplotu komory nejen uzavírá, ale také měří a řídí. Prusa u CORE One+ uvádí maximální teplotu komory 55 °C a aktivní řízení proudění.
- **Technické materiály nevybírejte jen podle krytu:** sledujte také limit podložky, hotendu, materiál trysky a doporučení výrobce filamentu.

## Enclosure není automaticky vyhřívaná komora

### 1. Pasivně uzavřený prostor

Kryt omezuje výměnu vzduchu s místností a pomáhá chránit model před průvanem. Vnitřek se ohřívá hlavně od podložky a hotendu. Pokud výrobce neuvádí řízenou teplotu komory, **nedoplňujeme ji odhadem**.

To je důležité při porovnávání tiskáren: dvě uzavřené skříně mohou mít podobný vzhled, ale z technické specifikace nelze automaticky vyvozovat stejnou teplotní stabilitu.

### 2. Měřená nebo aktivně řízená komora

Vyšší úroveň je systém, který pracuje s teplotou komory jako s řízeným parametrem. U CORE One+ Prusa uvádí maximální teplotu komory **55 °C**, maximální teplotu podložky **120 °C** a trysky **290 °C**. Výrobce současně popisuje aktivní řízení proudění v komoře.

To není důkaz, že každý ASA díl bude bez warpingu. Znamená to ale, že výrobce poskytuje konkrétní parametr komory, se kterým lze při výběru pracovat.

## Tři praktické příklady

### Bambu Lab P1S

P1S je uzavřená CoreXY tiskárna a Bambu Lab ji staví jako stroj schopný práce s materiály vyžadujícími enclosure. Pro výběr ASA/ABS je podstatné ověřit konkrétní profil materiálu a limity hotendu/podložky v aktuální dokumentaci výrobce.

**Pro koho dává smysl:** uživatel, který chce uzavřený univerzální stroj a nepotřebuje z katalogového listu garantovanou aktivně vyhřívanou komoru.

→ [Profil Bambu Lab P1S / X1C](/stroje/bambu-p1s-x1c/)

### Creality K1C

Creality u K1C uvádí **uzavřenou konstrukci**, CoreXY, maximální teplotu trysky **300 °C**, podložky **100 °C** a mezi podporovanými filamenty výslovně jmenuje **ABS i ASA**. Výrobce však v základních specifikacích neuvádí číselný limit aktivně vyhřívané komory; proto jej ani my nevymýšlíme.

**Pro koho dává smysl:** uživatel, který chce kompaktní uzavřenou CoreXY tiskárnu a potřebuje oficiálně deklarovanou podporu ASA/ABS.

→ [Profil Creality K1 / K1C](/stroje/creality-k1-k1c/)

### Prusa CORE One+

Prusa u CORE One+ zveřejňuje konkrétní tepelná data: komora do **55 °C**, podložka do **120 °C** a tryska do **290 °C**. To z ní dělá jiný typ volby než stroj, u kterého známe pouze fakt, že je uzavřený.

**Pro koho dává smysl:** uživatel, který při výběru klade vyšší důraz na řízené prostředí komory a chce mít jeho parametry explicitně popsané výrobcem.

→ [Profil Prusa CORE One+](/recenze/prusa-core-one/)

## Co kontrolovat před nákupem

1. **Výrobce skutečně uvádí ASA/ABS jako podporovaný materiál?** Nezaměňujte marketingovou fotografii krytu za materiálovou kompatibilitu.
2. **Je komora pouze uzavřená, nebo výrobce uvádí její řízení a teplotu?** Pokud číslo chybí, nepovažujte jej za známý parametr.
3. **Jaký je limit podložky a hotendu?** Materiálový profil musí zůstat uvnitř limitů stroje.
4. **Jaká je tryska?** U čistého ASA/ABS není abrazivita hlavní problém, ale plněné CF/GF varianty mohou vyžadovat odolnější trysku.
5. **Jak velký díl chcete tisknout?** Čím větší a plošší model, tím více se projeví smrštění a rozdíly teplot v průběhu tisku.
6. **Jak řešíte výpary a umístění tiskárny?** Enclosure není automaticky totéž co bezpečné odvětrání pracovního prostoru.

## Když už tiskárnu máte: nejdřív řešte proces

Warping nemusí znamenat, že musíte okamžitě koupit jiný stroj. Zkontrolujte čistotu podložky, první vrstvu, průvan, teplotní profil, geometrii modelu a případný brim. Pro systematickou diagnostiku pokračujte na [Warping u ABS: příčiny a checklist](/clanky/warping-u-abs-priciny-a-checklist/).

Pokud teprve vybíráte tiskárnu podle materiálu, navazuje širší průvodce [Jakou tiskárnu pro ABS, ASA a CF](/clanky/jakou-tiskarnu-pro-abs-asa-cf/). Základní rozdíly mezi materiály shrnuje také [PLA, PETG, ASA, TPU: který materiál kdy](/clanky/pla-petg-asa-tpu-ktery-material-kdy/).

## Zdroje a hranice článku

Technické údaje jsou převzaté z aktuálních produktových a podpůrných stránek výrobců. U parametrů, které výrobce neuvádí, nedoplňujeme vlastní odhad. Tento rádce neobsahuje vlastní měření teploty komory, hlučnosti, emisí, spotřeby ani míry warpingu a nevytváří z katalogových parametrů redakční skóre.

- Prusa Research — CORE One+ / technické parametry: https://www.prusa3d.com/product/prusa-core-one/
- Creality — K1C / technické parametry: https://www.creality.com/products/k1c-carbon-3d-printer
- Bambu Lab — P1S / produktová dokumentace: https://bambulab.com/en/p1
