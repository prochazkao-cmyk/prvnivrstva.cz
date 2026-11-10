---
title: "Bambu Lab A1: profil tiskárny, parametry a pro koho dává smysl"
description: "Zdrojovaný profil Bambu Lab A1: tiskový objem, hotend, podložka, rychlost, materiály, AMS lite a praktické limity podle dokumentace výrobce."
publishedAt: 2026-10-03
brand: "Bambu Lab"
technology: "FDM"
tags:
  - "Bambu Lab"
  - "A1"
  - "FDM"
  - "AMS lite"
---

Bambu Lab A1 je otevřená FDM tiskárna s pohyblivou podložkou, která míří hlavně na uživatele hledající pohodlný vstup do 3D tisku, větší tiskový prostor než nabízí A1 mini a možnost vícebarevného tisku přes AMS lite. Tento profil není vlastní fyzický test První Vrstvy; technické údaje níže vycházejí z aktuální dokumentace výrobce.

> **Rozhodujete se mezi dvěma velikostmi?** Přečtěte si také náš [podrobný nákupní rádce Bambu Lab A1 vs. A1 mini](/clanky/bambu-lab-a1-vs-a1-mini/), kde rozdíly převádíme do konkrétních scénářů podle prostoru a materiálů.

## Nejdůležitější parametry

| Parametr | Bambu Lab A1 |
|---|---|
| Technologie | FDM |
| Tiskový objem | 256 × 256 × 256 mm |
| Maximální teplota hotendu | 300 °C |
| Maximální teplota podložky | 100 °C |
| Dodávaná tryska | 0,4 mm |
| Volitelné průměry trysek | 0,2 / 0,6 / 0,8 mm |
| Maximální deklarovaná rychlost pohybu hlavy | 500 mm/s |
| Maximální deklarované zrychlení | 10 000 mm/s² |
| Rozměry tiskárny | 465 × 410 × 430 mm |
| Hmotnost | 8,3 kg |

Hodnoty jsou specifikace výrobce, nikoli naše měření rychlosti nebo výkonu.

## Co znamená tiskový objem 256 × 256 × 256 mm

Proti A1 mini s objemem 180 × 180 × 180 mm nabízí A1 výrazně více prostoru ve všech osách. Prakticky to znamená méně dělení větších modelů na části a větší rezervu pro funkční díly, organizéry, dekorace nebo více menších objektů na jedné podložce.

Samotný tiskový objem ale není totéž co prostor potřebný na stole. A1 používá pohyblivou podložku, takže při umístění tiskárny je potřeba počítat také s jejím pohybem a s kabeláží za strojem.

## Hotend, trysky a podložka

Výrobce uvádí celokovový hotend s maximální teplotou 300 °C. Standardně je osazena tryska 0,4 mm a podporovány jsou také průměry 0,2, 0,6 a 0,8 mm. Vyhřívaná podložka má podle specifikace maximum 100 °C.

To ale neznamená, že je A1 univerzální tiskárna pro všechny materiály dosažitelné teplotou hotendu. Konstrukce je otevřená a výrobce rozlišuje materiály, které pro A1 považuje za ideální, a materiály, které nedoporučuje.

## Materiály: kde je A1 doma a kde už ne

Bambu Lab ve specifikaci označuje **PLA, PETG, TPU a PVA** jako ideální materiály. Naopak **ABS, ASA, PC, PA, PET a polymery vyztužené uhlíkovými nebo skleněnými vlákny** uvádí jako nedoporučené.

To je při výběru důležitější než samotná maximální teplota trysky. Pokud plánujete především PLA a PETG pro běžné domácí a hobby projekty, A1 konstrukčně odpovídá tomuto použití. Pokud je cílem pravidelný tisk technických materiálů citlivých na okolní teplotu, je vhodnější porovnat ji s uzavřenou tiskárnou určenou pro takový provoz.

## AMS lite a vícebarevný tisk

A1 lze používat s AMS lite. Smyslem není jen tisk barevných figurek: automatické podávání více filamentů může zjednodušit modely s barevnými popisy, značkami nebo podpůrným materiálem. Je ale dobré počítat s tím, že vícemateriálový tisk přidává další hardware kolem tiskárny a při změnách filamentu vzniká materiálový odpad.

Pokud vícebarevný tisk nepotřebujete, samotná A1 zůstává plnohodnotnou jednobarevnou tiskárnou a AMS lite není podmínkou provozu.

## Rychlost: 500 mm/s není automaticky rychlost každého výtisku

Výrobce deklaruje maximální rychlost pohybu tiskové hlavy 500 mm/s a maximální zrychlení 10 000 mm/s². Tato maxima nelze číst jako záruku, že celý model bude tisknutý konstantně 500 mm/s. Skutečnou rychlost omezuje geometrie modelu, zrychlení, průtok hotendu, filament, požadovaná kvalita a nastavení sliceru.

Proto zde z deklarovaného maxima nevytváříme vlastní časové benchmarky ani pořadí „nejrychlejších tiskáren“ bez srovnatelného fyzického testu.

## A1 vs. A1 mini: největší rozdíl je prostor

A1 mini má podle dokumentace výrobce tiskový objem 180 × 180 × 180 mm a maximální teplotu podložky 80 °C. A1 nabízí 256 × 256 × 256 mm a podložku do 100 °C. Obě používají podobnou koncepci otevřené tiskárny a výrobce u obou jako ideální uvádí PLA, PETG, TPU a PVA.

Pokud tisknete hlavně malé modely, může být A1 mini prostorově úspornější. A1 dává větší smysl tam, kde se 180mm rozměr mini verze stává pravidelným omezením. Pro rozhodnutí krok za krokem pokračujte na [A1 vs. A1 mini: kterou vybrat](/clanky/bambu-lab-a1-vs-a1-mini/).

## Pro koho A1 dává smysl

**Silný kandidát je pro:**

- začátečníka, který chce tisknout hlavně PLA a PETG,
- domácího makera, který využije 256mm tiskový prostor,
- uživatele, který chce možnost AMS lite,
- někoho, kdo nechce začínat na malé 180mm podložce.

**Před koupí bych hledal jinou kategorii, pokud:**

- chcete pravidelně tisknout ABS, ASA, PC nebo PA,
- potřebujete uzavřenou a tepelně stabilnější tiskovou komoru,
- je pro vás rozhodující minimální půdorys stroje,
- očekáváte, že marketingové maximum 500 mm/s bude běžná rychlost každého modelu.

## Co ověřit před nákupem

Nejdřív si určete největší modely, které skutečně chcete tisknout. Potom řešte materiály a teprve následně vícebarevný systém. U A1 také změřte reálné místo na stole s rezervou pro pohyb podložky a kabelů, nikoli jen statický rozměr těla tiskárny.

Pro první tisk doporučujeme navázat našimi průvodci [První vrstva nedrží](/rady-a-tipy/prvni-vrstva-nedrzi/), [Bed adheze: PEI, glue stick a brim](/rady-a-tipy/bed-adheze-glue-stick-pei-brim/) a [PETG první vrstva](/rady-a-tipy/petg-prvni-vrstva/).

## Zdroje a metodika

Primární zdroje:

- Bambu Lab — A1 Quick Start Guide a technická specifikace: https://cdn1.bambulab.com/documentation/quick-start-a75adcb1d5d5e/Quick%20Start%20Guide%20for%20A1.pdf
- Bambu Lab — A1 Combo Quick Start Guide: https://cdn1.bambulab.com/documentation/quick-start-b5f1a684f77/A1%20Combo%20Quick%20Start_V0%28EN%29.pdf
- Bambu Lab — A1 mini Quick Start Guide pro srovnání rozměrů a tiskového objemu: https://cdn1.bambulab.com/documentation/quick-start-b82993168480b/A1mini/Y.BC.SM.A00207-04_N1-%E5%A5%97%E8%A3%85-%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8%28%E8%8B%B1%E6%96%87%29.pdf

Profil je redakční syntéza veřejné dokumentace výrobce. Neobsahuje smyšlené vlastní testy, naměřené rychlosti, hlučnost, spotřebu ani redakční skóre.
