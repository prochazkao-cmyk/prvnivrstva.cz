---
title: "Bambu Lab A1 mini: produktový profil a limity malé tiskárny"
description: "Zdrojovaný profil Bambu Lab A1 mini: tiskový objem, teploty, vhodné materiály, AMS Lite a praktické limity. Nejde o redakční fyzický test."
publishedAt: 2026-10-04
author: "Redakce První Vrstva"
draft: false
product: "Bambu Lab A1 mini"
tags:
  - Bambu Lab
  - A1 mini
  - produktový profil
level: "začátečník"
technologies:
  - "FDM"
contentMode: "zdrojovany-profil"
evidence: "vyrobce"
sourceNote: "Technické údaje jsou ověřené v oficiálních specifikacích a dokumentaci Bambu Lab. Nejde o vlastní fyzické měření ani redakční test."
---

# Bambu Lab A1 mini: co nabízí a kde jsou její limity

Bambu Lab A1 mini je kompaktní otevřená FDM tiskárna zaměřená hlavně na PLA, PETG a TPU. Tento profil **není fyzický redakční test**: technické údaje níže vycházejí z aktuální dokumentace výrobce a praktické závěry jsou odvozené pouze z těchto parametrů.

## Rychlá orientace

| Parametr | A1 mini |
| --- | --- |
| Tiskový objem | 180 × 180 × 180 mm |
| Maximální teplota hotendu | 300 °C |
| Maximální teplota podložky | 80 °C |
| Standardní tryska | 0,4 mm, nerezová ocel |
| Volitelné průměry trysek | 0,2 / 0,6 / 0,8 mm |
| Konstrukce | otevřená |
| Materiály označené výrobcem jako ideální | PLA, PETG, TPU, PVA |
| Materiály výrobcem nedoporučené | ABS, ASA, PC, PA, PET a plněné polymery |

Zdroj: oficiální technické specifikace a Quick Start dokumentace Bambu Lab.

## 180 mm není detail — je to hlavní rozhodovací parametr

Tiskový prostor **180 × 180 × 180 mm** je výrazně menší než 256mm třída běžná u větších hobby tiskáren. To samo o sobě není chyba: na drobné funkční díly, organizéry, figurky, prototypy a mnoho běžných modelů může být tento prostor dostatečný.

Před koupí je ale rozumné otevřít několik vlastních STL/3MF modelů ve sliceru a zkontrolovat jejich skutečné rozměry. Pokud často tisknete dlouhé držáky, větší krabičky, cosplay nebo díly přes 180 mm v některé ose, malý půdorys začne být praktickým omezením. Nejde tedy jen o otázku „vejde se mi tiskárna na stůl“, ale také „vejdou se moje díly do tiskárny“.

Pro srovnání: větší Bambu Lab A1 má podle výrobce tiskový objem **256 × 256 × 256 mm**. Pokud vybíráte mezi oběma modely, právě rozdíl tiskového prostoru je jeden z nejsnáze ověřitelných důvodů, proč připlatit za větší stroj.

## PLA, PETG a TPU dávají největší smysl

Výrobce označuje **PLA, PETG, TPU a PVA** jako ideální materiály. Naopak ABS, ASA, PC, PA, PET a polymery vyztužené uhlíkovými nebo skelnými vlákny uvádí jako nedoporučené.

To je důležitější než samotný údaj 300 °C na hotendu. Vysoká maximální teplota trysky automaticky neznamená, že je tiskárna vhodná pro každý vysokoteplotní materiál. A1 mini je otevřená a její podložka má maximum 80 °C; pro materiály citlivé na teplotní stabilitu je vhodnější hledat uzavřenou tiskárnu navrženou pro tento účel.

Pokud ještě nevíte, jaký materiál potřebujete, pokračujte na [PLA vs. PETG vs. ASA vs. TPU](/clanky/pla-petg-asa-tpu-ktery-material-kdy/). Pro ABS a ASA máme samostatný [průvodce výběrem uzavřené tiskárny](/clanky/nejlepsi-uzavrena-tiskarna-pro-asa-abs/).

## Co znamená 300 °C hotend v praxi

A1 mini má podle Bambu Lab celokovový hotend a maximální teplotu **300 °C**. Součástí je 0,4mm tryska a výrobce nabízí také 0,2, 0,6 a 0,8 mm.

Teplotní maximum ale berte jako technický limit komponenty, ne jako seznam doporučených materiálů. Při výběru filamentu má přednost tabulka kompatibility výrobce a požadavky konkrétního materiálu.

## Automatizace a senzory

Oficiální specifikace uvádějí senzor konce filamentu, detekci zamotání, obnovu po výpadku napájení a kameru s nízkou snímkovou frekvencí až do 1080p s podporou timelapse. Tyto funkce mohou snížit množství rutinní obsluhy, ale z katalogových údajů nelze poctivě určit například spolehlivost detekce v dlouhodobém provozu — to by vyžadovalo vlastní opakované testování.

## AMS Lite: více barev, ale počítejte s místem navíc

A1 mini lze používat v ekosystému AMS Lite. Pokud chcete vícebarevný tisk, nehodnoťte pouze půdorys samotné tiskárny: sestava s externím podavačem a cívkami zabere více pracovního prostoru. Při malém stole je proto vhodné plánovat celou sestavu, ne pouze rozměry těla tiskárny.

## Kdy A1 mini dává smysl

A1 mini je logická volba, pokud chcete kompaktní stroj především na PLA/PETG/TPU a víte, že se vaše typické modely vejdou do 180mm krychle. Její parametry také dávají smysl jako vstup do ekosystému Bambu Lab bez potřeby uzavřené komory.

Pokud naopak už teď víte, že budete tisknout větší díly nebo materiály typu ASA/ABS, je lepší řešit tento požadavek před nákupem než později hledat kompromisy.

## Co z tohoto profilu nevíme

Bez fyzického redakčního kusu netvrdíme nic o reálné hlučnosti, spotřebě, dlouhodobé spolehlivosti, přesnosti rozměrů ani úspěšnosti automatických funkcí. Tyto položky zůstávají otevřené pro budoucí **human-verified test** se stejnou metodikou jako u ostatních strojů.

## Kam dál

- [Jak vybrat první 3D tiskárnu: 7 otázek](/clanky/jak-vybrat-prvni-3d-tiskarnu-7-otazek/)
- [3D tiskárna do 10 000 Kč: jak vybírat](/clanky/nejlepsi-3d-tiskarna-do-10000-kc/)
- [Bambu Lab A1 – katalogový profil](/stroje/bambu-a1/)
- [Materiálový průvodce PLA/PETG/ASA/TPU](/clanky/pla-petg-asa-tpu-ktery-material-kdy/)

## Primární zdroje

- Bambu Lab — **A1 mini Technical Specifications / EU Store**: https://eu.store.bambulab.com/products/a1-mini
- Bambu Lab — **A1 mini Quick Start Guide**, technické specifikace: https://cdn1.bambulab.com/documentation/quick-start-b82993168480b/A1mini/Y.BC.SM.A00207-04_N1-%E5%A5%97%E8%A3%85-%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8%28%E8%8B%B1%E6%96%87%29.pdf
- Bambu Lab — **A1 Technical Specifications** (pro srovnání tiskového objemu): https://bambulab.com/en/a1/tech-specs

*Zdroje ověřeny 4. 10. 2026. Pokud výrobce specifikace změní, má přednost jeho aktuální dokumentace.*
