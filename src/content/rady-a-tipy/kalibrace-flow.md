---
title: "Kalibrace flow: extrusion multiplier krok za krokem"
description: "Jak poznat overextrusion a underextrusion, kdy má smysl měnit extrusion multiplier a jak flow ověřit měřením nebo vizuální metodou podle dokumentace Prusa."
publishedAt: 2026-09-29
updatedAt: 2026-10-03
level: "pokročilý"
technologies:
  - "FDM"
tags:
  - "kalibrace"
  - "flow"
  - "slicer"
---
Flow neboli **extrusion multiplier** jemně upravuje množství materiálu, které tiskárna vytlačuje. Není to univerzální číslo pro PLA nebo PETG: vhodná hodnota se může lišit podle materiálu, barvy i konkrétní cívky. Prusa proto kalibraci extrusion multiplieru označuje jako pokročilý krok pro konkrétní filament nebo aplikaci, ne jako povinnou proceduru nové tiskárny.

> Tento článek není záznam našeho laboratorního testu. Postup níže vychází z dokumentace výrobce; vlastní výsledek je potřeba ověřit na vaší tiskárně, filamentu a slicer profilu.

## Nejdřív ověřte, že opravdu řešíte flow

Než začnete měnit multiplier, zkontrolujte základní mechanický a tiskový stav. Výrazná underextrusion může mít jinou příčinu než špatně nastavený flow: částečně ucpanou trysku, problém s podáváním filamentu nebo nevhodnou teplotu. Stejně tak rozmáčknutá první vrstva není automaticky důkaz vysokého flow — může jít o příliš malou vzdálenost trysky od podložky.

Pokud problém vzniká hlavně na úplném spodku modelu, začněte průvodcem [Elephant foot](/rady-a-tipy/elephant-foot/). Pokud nedrží samotná první vrstva, pokračujte přes [První vrstva nedrží](/rady-a-tipy/prvni-vrstva-nedrzi/).

## Jak poznat příliš vysoký nebo nízký flow

Podle Prusa Knowledge Base se příliš vysoký průtok typicky projeví přebytkem materiálu a nerovným povrchem horních vrstev. Mírná underextrusion naopak vytváří viditelné mezery mezi liniemi nebo perimetry.

To je důležitější než slepě kopírovat číslo z internetu. Stejná hodnota multiplieru nemusí být správná pro jinou cívku, materiál ani sestavu tiskárny.

## Kde se flow nastavuje

V PrusaSliceru najdete **Extrusion multiplier** v nastavení filamentu. Hodnota 1 znamená 100 %, 0,95 znamená 95 % atd. Prusa současně upozorňuje, že firmware Flow a slicerový Extrusion multiplier jsou dvě samostatná nastavení stejného výsledného průtoku; změna jednoho automaticky nepřepisuje druhé.

Pro dlouhodobě opakovatelný profil je proto praktičtější vědět, kterou z těchto hodnot jste změnili, a nemíchat několik korekcí najednou.

## Metoda 1: přesné měření stěny

Oficiální postup Prusa používá kalibrační model vytištěný ve vase/spiral vase režimu a následné měření stěny. Princip je jednoduchý:

1. Použijte známý slicer profil a zkontrolujte nastavenou šířku extruze.
2. Vytiskněte kalibrační model ve vase režimu podle postupu výrobce.
3. Změřte stěnu na více místech a pracujte s průměrem měření.
4. Porovnejte naměřenou tloušťku s očekávanou šířkou extruze.
5. Prusa uvádí vztah **nový extrusion multiplier = očekávaná šířka extruze / průměrná naměřená tloušťka stěny** pro svůj popsaný kalibrační postup.
6. Hodnotu upravte, model vytiskněte znovu a výsledek znovu ověřte.

Konkrétní čísla z příkladu Prusa jsou navázaná na jejich uvedený 0,4mm nozzle profil a nelze je bezmyšlenkovitě přenášet na jinou trysku, výšku vrstvy nebo šířku extruze.

### Pozor na přesnost měření

Výrobce upozorňuje, že levná digitální posuvka nemusí být dostatečně přesná pro spolehlivé měření jediné tenké stěny. Pokud měření skáče o hodnotu podobnou korekci, kterou se snažíte provést, nedává smysl z něj vyrábět falešně přesný multiplier.

## Metoda 2: vizuální kontrola horní vrstvy

Prusa popisuje také vizuální metodu bez měřidla. Sleduje se horní povrch kalibračního modelu:

- přebytek materiálu a hrbolky u perimetrů ukazují směrem k příliš vysokému průtoku,
- viditelné mezery mezi liniemi ukazují směrem k příliš nízkému průtoku,
- cílem je souvislá a rovná horní vrstva bez zbytečného hromadění materiálu.

V oficiálním postupu se multiplier dolaďuje po malých krocích a tisk se opakuje. Nejde tedy o jednorázové „magické číslo“, ale o ověření změny na konkrétním filamentu.

## Co flow kalibrace neřeší

Flow není univerzální náhrada za opravu mechanické závady nebo špatné první vrstvy. Pokud tiskárna vynechává extruzi, prokluzuje filament, tryska je zanesená nebo je špatně nastavená první vrstva, nejprve řešte příčinu. Jinak multiplier pouze maskuje jiný problém.

Stejně tak nepoužívejte flow jako automatickou opravu každé rozměrové nepřesnosti. Rozměr dílu ovlivňuje geometrie modelu, první vrstva, materiál, slicer i konstrukční tolerance.

## Praktický rozhodovací postup

**Horní vrstvy jsou hladké a bez mezer?** Flow pravděpodobně není první parametr, který potřebujete měnit.

**Jsou mezi liniemi mezery?** Nejdřív vylučte problém s podáváním a tryskou; potom má smysl ověřit extrusion multiplier.

**Hromadí se materiál na horních plochách?** Ověřte flow kalibračním modelem místo náhodného snižování hodnoty.

**Problém je jen u podložky?** Přesuňte diagnostiku na první vrstvu nebo [Elephant foot](/rady-a-tipy/elephant-foot/), nikoli automaticky na flow.

## Zdroje a ověření

Primární zdroj: [Prusa Knowledge Base — Extrusion multiplier calibration](https://help.prusa3d.com/article/extrusion-multiplier-calibration_2257). Dokumentace výrobce popisuje význam extrusion multiplieru, přesnou i vizuální metodu a upozorňuje, že vhodná hodnota závisí na filamentu.

Doporučení v tomto článku nepředstavují vlastní měření První Vrstvy. Pokud později provedeme srovnávací fyzický test na konkrétní tiskárně a materiálu, bude označen samostatně jako vlastní test.