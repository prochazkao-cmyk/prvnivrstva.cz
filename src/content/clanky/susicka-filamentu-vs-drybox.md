---
title: "Sušička filamentu vs. drybox: kdy filament sušit a kdy ho jen držet v suchu"
description: "Praktický průvodce vlhkostí filamentu: rozdíl mezi aktivním sušením a dryboxem, orientační časy Prusamentu a bezpečný postup."
publishedAt: 2026-10-07
reviewedAt: 2026-10-07
level: "začátečník"
technologies:
  - "FDM"
tags:
  - "filament"
  - "sušení"
  - "drybox"
  - "poradna"
---

Vlhký filament a špatně skladovaný filament nejsou totéž. **Sušička aktivně odstraňuje vlhkost, zatímco běžný drybox má především zpomalit její další absorpci.** Právě záměna těchto dvou funkcí vede k častému zklamání: vložení už navlhlé cívky do boxu se silikagelem nemusí problém vyřešit.

## Rychlé rozhodnutí

| Situace | Co dává smysl |
| --- | --- |
| Cívka tiskne normálně a chcete ji chránit | uzavřený drybox / vakuový sáček s vysoušedlem |
| Filament je prokazatelně nebo pravděpodobně vlhký | aktivní sušení podle pokynů výrobce materiálu |
| Tisknete silně hygroskopický materiál | předsušení + udržování v suchu během tisku |
| Neznáte doporučenou teplotu | nejdřív ověřit datasheet nebo dokumentaci výrobce |

## Drybox není automaticky sušička

Prusa Research u USS Dryboxu výslovně uvádí, že box filament **nesuší**. Silikagel pomáhá udržovat nízkou vlhkost uvnitř a zpomaluje absorpci vody filamentem. Pokud je materiál už vlhký, výrobce doporučuje nejprve aktivní předsušení.

To je důležitý rozdíl při nákupu: označení „dry box“ samo o sobě neznamená, že zařízení obsahuje topení, řízené proudění vzduchu nebo jiný mechanismus pro aktivní sušení.

## Které materiály řešit nejvíc

Prusa uvádí, že materiály pro FFF tisk jsou obecně hygroskopické, ale míra citlivosti se liší. Jako výrazně citlivější příklady zmiňuje mimo jiné polyamidy, PVA a BVOH. U těchto materiálů dává suché skladování a podle potřeby předsušení větší smysl než spoléhat na běžné skladování v místnosti.

U nového nebo neznámého filamentu se neřiďte univerzální tabulkou z internetu. Teplotní limit může ovlivnit nejen polymer, ale i konkrétní směs a konstrukce cívky.

## Orientační režimy pro Prusament

Následující hodnoty jsou **doporučení Prusa Research pro vybrané Prusamenty**, nikoli naše měření a nelze je automaticky přenášet na stejně pojmenovaný materiál jiné značky.

| Prusament | Teplota | Čas |
| --- | ---: | ---: |
| PLA | 45 °C | 6 h |
| PETG | 55 °C | 6 h |
| ASA | 80 °C | 4 h |
| PC | 85 °C | 5 h |

| PA11CF | 90 °C | 6 h |
| TPU | 60 °C | 4 h |

U PCCF / PC Blend Carbon Fiber se jazykové verze dokumentace liší v doporučené teplotě. Dokud nebude rozdíl ověřen pro konkrétní produkt a cívku, tabulka jednotnou hodnotu neuvádí.\n\nPrusa upozorňuje, že překročení doporučené teploty může materiál změkčit a slepit. Před zahřátím proto ověřte také teplotní odolnost cívky.

## Praktický workflow

1. **Zjistěte přesný materiál a výrobce.** U směsí typu CF/GF nebo technických polymerů nestačí obecný název.
2. **Ověřte doporučenou teplotu a dobu sušení v primárním zdroji výrobce.**
3. **Zkontrolujte cívku.** Teplota bezpečná pro filament nemusí být automaticky bezpečná pro každou cívku.
4. **Po aktivním sušení omezte návrat vlhkosti.** Materiál přesuňte do uzavřeného boxu nebo vakuového sáčku s vhodným vysoušedlem.
5. **U velmi hygroskopických materiálů zvažte tisk přímo z dryboxu.**

## Co sledovat při výběru sušičky

Nejdůležitější není počet marketingových funkcí, ale zda zařízení bezpečně dosáhne teploty doporučené pro vaše materiály a zda umí odvádět uvolněnou vlhkost. Prusa u profesionálního řešení Memmert zdůrazňuje přesnou regulaci teploty, aktivní ventilaci a nastavitelný odvod vlhkosti.

Pro hobby použití proto porovnávejte především dosažitelnou a regulovatelnou teplotu, cirkulaci/odvod vlhkosti, prostor pro používané cívky a možnost podávat filament během tisku, pokud ji potřebujete.

## Co si z toho odnést

Pokud je cívka suchá, cílem je **udržet ji suchou**. Pokud už vodu absorbovala, potřebujete proces, který ji **aktivně odstraní**. U citlivých technických materiálů se obě fáze často kombinují: předsušení a následný tisk ze suchého prostředí.

Tento článek není vlastní laboratorní test sušiček. Uvedené teploty a časy jsou převzaté z aktuální dokumentace výrobce a před použitím je vždy vhodné ověřit pro konkrétní filament.

## Zdroje

- Prusa Research Knowledge Base — Sušení filamentu: https://help.prusa3d.com/cs/article/suseni-filamentu_332086
- Prusa Research Knowledge Base — Prusa USS Drybox: https://help.prusa3d.com/cs/article/prusa-uss-drybox_1014382
- Prusa Research Knowledge Base — Prusa Pro Filament Drybox: https://help.prusa3d.com/cs/article/prusa-pro-filament-drybox_725964
