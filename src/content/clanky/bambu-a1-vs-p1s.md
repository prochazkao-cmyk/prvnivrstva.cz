---
title: "Bambu Lab A1 vs. P1S: kterou vybrat podle materiálu a použití"
description: "Zdrojované srovnání Bambu Lab A1 a P1S bez univerzálního vítěze. Rozhoduje otevřená vs. uzavřená konstrukce, materiály a způsob používání."
publishedAt: 2026-10-03
level: "začátečník"
technologies:
  - "FDM"
tags:
  - "bambu"
  - "a1"
  - "p1s"
  - "srovnani"
  - "nakupni-radce"
---
Bambu Lab A1 a P1S se na první pohled mohou zdát jako dvě cesty ke stejnému cíli. Obě mají podle dokumentace výrobce pracovní prostor **256 × 256 × 256 mm**, all-metal hotend s maximem **300 °C**, standardní 0,4mm trysku a maximální teplotu podložky **100 °C**. Přesto nejde o dvě téměř stejné tiskárny. Pro výběr je důležitější jejich konstrukce a materiálové zaměření než samotná tabulka maximálních hodnot.

Toto není vlastní fyzický test ani žebříček. Srovnání vychází z aktuální dokumentace Bambu Lab a z již publikovaných zdrojovaných profilů První Vrstvy.

## Nejkratší odpověď

Pokud plánujete převážně **PLA, PETG a TPU** a chcete jednoduchou otevřenou tiskárnu, A1 je logický kandidát k užšímu výběru. Pokud chcete pravidelně pracovat také s **ABS nebo ASA**, konstrukční rozdíl P1S je podstatný: P1S má z výroby uzavřenou komoru, zatímco A1 je otevřená tiskárna.

Neznamená to, že P1S je automaticky „lepší“. Znamená to, že je postavená pro širší materiálový scénář.

## A1 a P1S vedle sebe

| Vlastnost | Bambu Lab A1 | Bambu Lab P1S |
| --- | --- | --- |
| Konstrukce | otevřená | uzavřená |
| Pracovní prostor | 256 × 256 × 256 mm | 256 × 256 × 256 mm |
| Max. hotend | 300 °C | 300 °C |
| Max. podložka | 100 °C | 100 °C |
| Výrobcem uváděné ideální materiály | PLA, PETG, TPU, PVA | PLA, PETG, TPU, ABS, ASA, PVA, PET |
| ABS / ASA | výrobce je nedoporučuje | výrobce je uvádí jako ideální |
| Vícebarevný systém | AMS lite | AMS |
| Kinematika | otevřený bedslinger | CoreXY v uzavřeném těle |

Tabulka není bodovací systém. Uvádí rozdíly, které mají praktický dopad na rozhodnutí.

## 1. PLA a PETG: enclosure nemusí být důvod připlácet

Pro běžný domácí tisk z PLA a PETG není uzavřená komora sama o sobě podmínkou. Bambu Lab u A1 uvádí PLA, PETG, TPU a PVA jako ideální materiály. Pokud právě tyto filamenty tvoří téměř vše, co chcete tisknout, dává větší smysl řešit ergonomii, prostor kolem tiskárny, multicolor workflow a aktuální pořizovací náklady než kupovat enclosure jen proto, že jej dražší model má.

Podrobnosti najdete ve [zdrojovaném profilu Bambu Lab A1](/stroje/bambu-a1/).

## 2. ABS a ASA: tady už konstrukce mění rozhodnutí

U A1 výrobce řadí ABS, ASA, PC, PA, PET a vláknem plněné polymery mezi **nedoporučené** materiály. P1S naopak uvádí PLA, PETG, TPU, ABS, ASA, PVA a PET jako ideální a PA/PC jako materiály, které stroj zvládá.

Důvod není jen maximální teplota trysky. U materiálů náchylných k deformaci během chladnutí pomáhá omezení průvanu a stabilnější prostředí kolem výtisku. Proto není správné porovnávat A1 a P1S jen podle toho, že obě zvládnou 300 °C na hotendu.

Pokud se vám díly zvedají z podložky, podívejte se také na průvodce [warpingem a odlepováním rohů](/problemy/warping/).

## 3. Kompozity: enclosure není totéž co připravenost na abrazivní filament

Uzavřená P1S není ve standardním stavu univerzálním strojem na všechny CF/GF materiály. Oficiální specifikace P1S uvádí carbon/glass-fiber reinforced polymer jako **nedoporučený**. Při výběru technických filamentů proto kontrolujte také konkrétní trysku, extruder a doporučení výrobce filamentu; samotný kryt tiskárny nestačí.

## 4. Stejný pracovní prostor neznamená stejné chování

Obě tiskárny mají papírově stejných 256 × 256 × 256 mm. A1 ale pohybuje tiskovou podložkou v ose Y, zatímco P1S používá CoreXY uspořádání uvnitř skříně. To ovlivňuje fyzický prostor, který musíte tiskárně na stole nechat, i charakter konstrukce.

Samotný údaj „500 mm/s“, který výrobce uvádí u obou modelů, není dobrý podklad pro tvrzení, že budou konkrétní model tisknout stejně rychle. Skutečný čas závisí na geometrii, akceleraci, průtoku hotendu, materiálu a sliceru. Bez stejného měřicího protokolu z něj proto neděláme vlastní benchmark.

## 5. AMS lite vs. AMS

A1 patří do workflow s **AMS lite**. P1S lze spojit s klasickým **AMS**. V obou případech jde o cestu k automatickému přepínání filamentů a vícebarevnému tisku, ale fyzické provedení a umístění systému se liší.

Před nákupem proto nepočítejte pouze půdorys samotné tiskárny. Zvažte, kde bude zásobník filamentů, kudy povedou PTFE trubičky a zda chcete multicolor používat od začátku nebo jej přidat později.

## 6. Kdy dát A1 do užšího výběru

A1 stojí za zvážení zejména tehdy, když:

- tisknete převážně PLA, PETG nebo TPU,
- nepotřebujete z výroby uzavřenou komoru,
- chcete AMS lite nebo jednoduché domácí workflow,
- pracovní prostor 256 mm ve všech osách vám stačí,
- nechcete rozhodovat podle marketingového maxima rychlosti, ale podle reálného použití.

## 7. Kdy dát P1S do užšího výběru

P1S stojí za zvážení zejména tehdy, když:

- chcete z výroby uzavřenou konstrukci,
- počítáte s pravidelným ABS nebo ASA,
- preferujete CoreXY koncepci,
- chcete klasický AMS ekosystém,
- širší materiálové možnosti jsou pro vás důležitější než jednoduchost otevřeného stroje.

Podrobnější technické souvislosti jsou ve [zdrojovaném profilu Bambu Lab P1S](/recenze/bambu-p1s/).

## Co bych před objednávkou zkontroloval

Nejdřív si napište tři filamenty, ze kterých skutečně očekáváte nejvíc tisku. Potom největší rozměr typického dílu a místo, které máte pro tiskárnu a případný AMS. Teprve pak porovnejte aktuální ceny a balíčky u prodejců.

Cena je proměnlivá, proto ji do tohoto článku nezamykáme jako trvalý údaj. Stejně tak nepřidáváme univerzální skóre: uživatel zaměřený na PLA má jiné priority než někdo, kdo tiskne funkční ASA díly.

## Zdroje a metodika

Technické údaje byly 3. 10. 2026 ověřeny v oficiálních **Bambu Lab A1 Quick Start Guide** a **Bambu Lab P1S Quick Start Guide**. Stav P1S byl ověřen také v oficiálním oznámení Bambu Lab z roku 2026, podle kterého P1S zůstává ve výrobě a prodeji i po ukončení P1P.

Výrobní specifikace popisujeme jako tvrzení výrobce. Nezaměňujeme je za vlastní laboratorní měření První Vrstvy.

**Praktický závěr:** mezi A1 a P1S není potřeba hledat univerzálního vítěze. Nejdřív vyberte materiály. Pokud zůstanete u PLA/PETG/TPU, A1 může pokrýt požadovaný scénář bez enclosure. Pokud je důležitou součástí plánu ABS/ASA a chcete uzavřený stroj rovnou z výroby, P1S řeší právě tento konstrukční rozdíl.
