---
title: "Prusa CORE One+ vs. CORE One L+: kdy dává smysl větší model"
description: "Zdrojované srovnání Prusa CORE One+ a CORE One L+ bez bodování: pracovní prostor, komora, hotend a praktické rozhodnutí podle velikosti dílů a materiálů."
publishedAt: 2026-10-05
reviewedAt: 2026-10-05
level: "začátečník"
technologies:
  - "FDM"
tags:
  - "prusa"
  - "core-one"
  - "core-one-l-plus"
  - "srovnani"
  - "nakupni-radce"
---

Prusa CORE One+ a CORE One L+ patří do stejné rodiny uzavřených CoreXY tiskáren, ale větší L+ není jen zvětšená skříň. Podle aktuálních specifikací Prusa Research se liší pracovním prostorem, maximální teplotou komory a možností vysokoteplotního hotendu. Toto srovnání není vlastní fyzický test ani bodovaný žebříček.

## Nejkratší odpověď

Pokud se vaše díly pohodlně vejdou do **250 × 220 × 270 mm**, samotná existence větší L+ není důvodem k upgradu. CORE One L+ začíná dávat praktický smysl tam, kde skutečně využijete **300 × 300 × 330 mm**, aktivní komoru do **60 °C** nebo volitelnou HighTemp konfiguraci hotendu.

![Redakční schéma pracovního prostoru Prusa CORE One+ 250 × 220 × 270 mm a CORE One L+ 300 × 300 × 330 mm; ilustrace není v měřítku.](/images/clanky/core-one-plus-vs-l-plus-size.svg)

*Redakční ilustrace podle rozměrů deklarovaných výrobcem; nejde o měření ani o obrázek v měřítku.*

## Parametry vedle sebe

| Vlastnost | CORE One+ (Gen 2) | CORE One L+ |
| --- | --- | --- |
| Kinematika | CoreXY | CoreXY |
| Konstrukce | uzavřená | uzavřená |
| Pracovní prostor | 250 × 220 × 270 mm | 300 × 300 × 330 mm |
| Extruder | Nextruder, direct drive | Nextruder, direct drive |
| Max. teplota trysky ve standardu | 290 °C | 290 °C |
| Max. teplota podložky | 120 °C | 120 °C |
| Max. teplota komory | 55 °C | 60 °C |
| HighTemp varianta | — | volitelný HT hotend, až 400 °C |

Údaje v tabulce jsou deklarované specifikace výrobce, nikoli naše měření.

## 1. Velikost: rozhodujte podle skutečných modelů

CORE One L+ přidává proti CORE One+ 50 mm v ose X, 80 mm v ose Y a 60 mm v ose Z. To je relevantní pro větší přípravky, prototypy a funkční díly, které by se na menší platformu nevešly nebo by se musely dělit.

Naopak pokud vaše běžné modely zůstávají hluboko pod limitem CORE One+, větší tiskový objem sám o sobě nepřináší automaticky lepší výsledek. Před nákupem proto dává větší smysl projít rozměry reálných STL/3MF projektů než porovnávat pouze objem v litrech.

## 2. Komora: 55 °C vs. 60 °C

Prusa u CORE One+ uvádí aktivně řízenou komoru do 55 °C, u CORE One L+ aktivní konvekční komoru do 60 °C. Rozdíl pěti stupňů nelze bez kontrolovaného testu převést na tvrzení o pevnosti, přesnosti nebo spolehlivosti výtisků.

Pro technické materiály je proto potřeba ověřit doporučení výrobce konkrétního filamentu: teplotu trysky a podložky, požadavky na komoru, vysušení i vhodnou trysku.

## 3. HighTemp není automatický důvod pro L+

Standardní CORE One L+ má stejně jako CORE One+ maximum trysky 290 °C. L+ ale výrobce nabízí také s HighTemp hotendem, u kterého uvádí maximum 400 °C a 0,4mm ObXidian 500 trysku.

Pro PLA, PETG nebo běžné ASA samotná hodnota 400 °C není výhoda, kterou musíte využít. HighTemp konfigurace dává smysl až tehdy, když ji vyžaduje konkrétní materiálový workflow.

## 4. Co mají společné

Oba modely používají CoreXY architekturu a Nextruder s direct drive. U obou výrobce uvádí automatizaci první vrstvy přes Load Cell a maximální teplotu podložky 120 °C. Proto je rozumné rozhodnutí stavět hlavně na velikosti dílů, požadovaném teplotním režimu a konkrétním materiálu, nikoli na marketingovém hledání univerzálního vítěze.

## Kdy bych do užšího výběru dal CORE One+

- vaše díly se vejdou do 250 × 220 × 270 mm;
- nepotřebujete HighTemp hotend;
- komora do 55 °C odpovídá vašemu materiálovému workflow;
- větší půdorys L+ byste reálně nevyužili.

Pokračujte na [zdrojovaný profil Prusa CORE One+](/tiskarny/prusa-core-one-plus/).

## Kdy bych do užšího výběru dal CORE One L+

- potřebujete až 300 × 300 × 330 mm;
- využijete aktivní komoru do 60 °C;
- konkrétní technický materiál vyžaduje volitelnou HighTemp konfiguraci;
- chcete omezit dělení rozměrnějších modelů na více částí.

Pokračujte na [zdrojovaný profil Prusa CORE One L+](/tiskarny/prusa-core-one-l-plus/).

## Co z parametrů nezjistíte

Tabulka neříká nic spolehlivého o reálné hlučnosti, dlouhodobé spolehlivosti, přesnosti konkrétních dílů ani kvalitě povrchu. První Vrstva tyto vlastnosti nebude bodovat bez skutečného zdokumentovaného testu.

## Zdroje

- Prusa Research — **Prusa CORE One+ (Gen 2)**, produktová stránka a technické parametry: https://www.prusa3d.com/product/prusa-core-one/
- Prusa Research — **Prusa CORE One L+**, produktová stránka a technické parametry: https://www.prusa3d.com/product/prusa-core-one-l/
- Prusa Research — **Prusa CORE One L+ HighTemp Hotend**, technické parametry: https://www.prusa3d.com/product/prusa-core-one-l-hightemp-hotend-3/

Specifikace ověřeny **5. 10. 2026**. Výrobce může konfigurace a příslušenství průběžně měnit.