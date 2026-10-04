---
title: "Prusa MK4S vs. CORE One+: kterou vybrat podle materiálu a konstrukce"
description: "Zdrojované srovnání Original Prusa MK4S a CORE One+ bez umělého skóre. Rozhoduje otevřená vs. uzavřená konstrukce, komora, pracovní prostor a použití."
publishedAt: 2026-10-05
reviewedAt: 2026-10-05
level: "začátečník"
technologies:
  - "FDM"
tags:
  - "prusa"
  - "mk4s"
  - "core-one"
  - "srovnani"
  - "nakupni-radce"
---
Original Prusa MK4S a Prusa CORE One+ sdílejí část stejného ekosystému, ale konstrukčně míří na odlišné použití. **MK4S je otevřená kartézská tiskárna**, zatímco **CORE One+ je uzavřená CoreXY tiskárna s aktivně řízenou komorou**. Právě tento rozdíl je při výběru důležitější než hledání univerzálního vítěze.

Toto není vlastní fyzický test ani bodovaný žebříček. Srovnání vychází z aktuálních technických údajů výrobce Prusa Research a z katalogových profilů První Vrstvy.

## Nejkratší odpověď

Pokud tisknete hlavně **PLA, PETG a běžné funkční díly** a vyhovuje vám otevřená konstrukce, MK4S dává smysl jako jednodušší cesta do stejného Prusa ekosystému. Pokud chcete pravidelně tisknout materiály, kterým prospívá stabilnější tepelné prostředí, je zásadním rozdílem CORE One+: výrobce uvádí **uzavřenou komoru s maximální teplotou 55 °C**.

CORE One+ má také větší pracovní prostor zejména v ose Z. To ale samo o sobě neznamená, že je MK4S horší tiskárna — jde o jinou konstrukční volbu.

## MK4S a CORE One+ vedle sebe

| Vlastnost | Original Prusa MK4S | Prusa CORE One+ |
| --- | --- | --- |
| Kinematika | kartézská | CoreXY |
| Konstrukce | otevřená | uzavřená |
| Pracovní prostor | 250 × 210 × 220 mm | 250 × 220 × 270 mm |
| Max. teplota trysky | 290 °C | 290 °C |
| Max. teplota podložky | 120 °C | 120 °C |
| Aktivně řízená komora | ne | ano, až 55 °C |
| Extruder | Nextruder, direct drive | Nextruder, direct drive |
| Převod Nextruderu | 10:1 | 10:1 |
| Automatická první vrstva | Load Cell | Load Cell |
| Input Shaper | ano | ano |
| Odnímatelné PEI pláty | ano | ano |

## 1. Konstrukce je hlavní rozdíl

MK4S používá klasickou otevřenou kartézskou koncepci. CORE One+ přesouvá tisk do uzavřeného CoreXY stroje s ocelovým exoskeletem. Pro uživatele, který tiskne především PLA nebo PETG, není enclosure automaticky nutností. U materiálů citlivějších na teplotní změny je ale řízené prostředí komory prakticky významná vlastnost.

Výrobce u CORE One+ uvádí maximální teplotu komory **55 °C** a mezi podporovanými materiály uvádí také ABS, ASA, HIPS a PA při odpovídající konfiguraci filtrace. U MK4S výrobce pro tyto materiály zmiňuje použití Original Prusa Enclosure s pokročilou filtrací.

## 2. Pracovní prostor

MK4S nabízí **250 × 210 × 220 mm**. CORE One+ má **250 × 220 × 270 mm**. Rozdíl v X je nulový, v Y malý, ale CORE One+ přidává **50 mm výšky v ose Z**.

Pokud běžně tisknete nízké díly, samotný objem nemusí být rozhodující. U vysokých prototypů nebo modelů už může být vyšší Z konkrétní výhodou CORE One+.

## 3. Co mají společné

Oba stroje používají **Nextruder s direct drive a planetovým převodem 10:1**, Load Cell pro automatizaci první vrstvy, odnímatelné pružné ocelové pláty s PEI a Input Shaper. U obou výrobce uvádí maximální teplotu trysky **290 °C** a podložky **120 °C**.

Proto nedává smysl vybírat jen podle maximální teploty hotendu. Větší rozdíl vytváří mechanická architektura a prostředí kolem výtisku.

## 4. Kdy bych do užšího výběru dal MK4S

MK4S stojí za užší výběr, pokud:

- chcete otevřenou tiskárnu s velmi snadným přístupem k tiskové ploše a mechanice,
- tisknete převážně PLA, PETG, TPU a podobné materiály,
- nepotřebujete integrovanou uzavřenou komoru,
- chcete zůstat v ekosystému Nextruderu, Load Cell a PrusaSliceru.

Přečtěte si také samostatný [profil Original Prusa MK4S](/tiskarny/original-prusa-mk4s/).

## 5. Kdy bych do užšího výběru dal CORE One+

CORE One+ stojí za užší výběr, pokud:

- chcete uzavřenou CoreXY konstrukci přímo z výroby,
- plánujete častěji ABS, ASA, PA nebo jiné materiály citlivé na teplotní stabilitu,
- využijete aktivně řízenou komoru až do 55 °C,
- využijete vyšší pracovní prostor 270 mm v ose Z.

Podrobnosti jsou v [profilu Prusa CORE One+](/tiskarny/prusa-core-one-plus/).

## 6. Co z tabulky nezjistíte

Technické parametry neříkají, jak vám bude vyhovovat obsluha, reálná hlučnost v konkrétní místnosti, dlouhodobé opotřebení nebo kvalita konkrétního výtisku. Tyto věci je fér hodnotit až při skutečném redakčním testu se zveřejněnou metodikou. Proto jim zde nepřidělujeme body ani nevymýšlíme měření.

## Rozhodovací mapa

**Tisknu hlavně PLA/PETG a enclosure nepotřebuji →** začal bych porovnáním MK4S.

**Chci pravidelně ABS/ASA/PA a integrovanou komoru →** začal bych u CORE One+.

**Potřebuji výšku modelu nad 220 mm →** CORE One+ nabízí podle výrobce Z až 270 mm.

**Nevím, zda vůbec uzavřenou tiskárnu potřebuji →** nejdřív si ujasněte materiály v našem průvodci [Jak vybrat první 3D tiskárnu: 7 otázek](/clanky/jak-vybrat-prvni-3d-tiskarnu-7-otazek/).

## Zdroje

- Prusa Research — Original Prusa MK4S, technické parametry: https://www.prusa3d.com/product/original-prusa-mk4s-kit/
- Prusa Research — Prusa CORE One+ (Gen 2), technické parametry: https://www.prusa3d.com/product/prusa-core-one/

Specifikace ověřeny **5. 10. 2026**. Výrobci mohou hardware, příslušenství a podporované konfigurace průběžně měnit.