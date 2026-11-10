---
title: "Original Prusa MK4S — zdrojovaný profil a průvodce výběrem"
description: "Ověřené specifikace Original Prusa MK4S, materiály, Nextruder, enclosure, MMU3 a praktické rozhodování bez předstírání vlastního testu."
publishedAt: 2026-09-29
reviewedAt: 2026-10-03
level: "začátečník"
technologies:
  - "FDM"
tags:
  - "tiskarna"
  - "prusa"
  - "mk4s"
  - "fdm"
product: "Original Prusa MK4S"
contentMode: "zdrojovany-profil"
note: "Zdrojovaný profil podle aktuální dokumentace výrobce. Nejde o laboratorní test ani vlastní měření První Vrstvy."
sourceNote: "Primární zdroje: oficiální produktová stránka Original Prusa MK4S a Prusa Knowledge Base; ověřeno 3. 10. 2026."
---
Original Prusa MK4S je otevřená FDM tiskárna klasické konstrukce s pohyblivou podložkou. Tenhle profil odděluje **ověřitelné parametry výrobce od praktické interpretace**. Neudělujeme skóre a marketingová měření výrobce nevydáváme za vlastní test.

## Klíčové parametry

| Parametr | Údaj výrobce |
|---|---|
| Tiskový prostor | 250 × 210 × 220 mm |
| Filament | 1,75 mm |
| Výška vrstvy | 0,05–0,30 mm |
| Extruder | Nextruder, direct drive, planetová převodovka 10:1 |
| Standardní tryska | 0,4mm high-flow Prusa Nozzle, mosaz CHT |
| Max. teplota trysky | 290 °C |
| Max. teplota podložky | 120 °C |
| Tiskový povrch | magnetická vyhřívaná podložka + odnímatelný PEI pružný ocelový plát |
| Displej | 3,5\" barevný grafický LCD |
| Deska | 32bit xBuddy se STM32 |
| Tisková média / připojení | USB; NFC přijímač; ESP Wi‑Fi modul dodávaný s tiskárnou |
| Hmotnost / rozměry bez cívky | 7 kg; 500 × 550 × 400 mm |

Čísla v tabulce jsou specifikace výrobce, nikoli naše měření.

## Co MK4S mění proti starší filozofii MK řady

MK4S zůstává otevřeným bed-slingerem, ale výrobce u ní používá **360° chlazení** s výkonnější turbínou a high-flow trysku. Firmware podporuje Input Shaper a Pressure Advance. Praktický význam není „magické číslo rychlosti“, ale snaha zvýšit průtok a omezit artefakty při rychlejším pohybu. Konkrétní čas tisku vždy závisí na modelu, materiálu, profilu a nastavení sliceru.

Nextruder je direct-drive systém s 10:1 planetovou převodovkou. Tiskárna používá loadcell pro automatizaci práce s první vrstvou a mesh bed leveling se provádí v oblasti, kde se skutečně tiskne.

## Materiály: kde otevřená konstrukce stačí a kde už ne

Prusa uvádí podporu **PLA, PETG, Flex, PVA, PC, PP, CPE a PVB**. Pro **ABS, ASA, HIPS a PA** výrobce ve specifikaci počítá s použitím Original Prusa Enclosure s filtračním doplňkem.

To je důležitější než maximální teplota hotendu. Samotných 290 °C neznamená, že je otevřená tiskárna ideální pro každý technický filament. U materiálů citlivých na průvan a teplotní rozdíly pomáhá stabilnější prostředí enclosure omezit podmínky vedoucí k deformaci dílu.

Pokud řešíte právě zvedání rohů, navazuje náš [průvodce příčinami warpingu](/clanky/warping-u-abs-priciny-a-checklist/).

## První vrstva a tiskové pláty

MK4S používá magnetickou vyhřívanou podložku a odnímatelné pružné ocelové pláty s PEI. Automatická kalibrace s loadcell snižuje množství ručního nastavování před první vrstvou, ale nemění základní pravidla: povrch musí odpovídat materiálu a musí být čistý.

## PrusaSlicer, Connect a offline provoz

Výrobce nabízí PrusaSlicer a vzdálenou správu přes Prusa Connect / PrusaLink. Současně MK4S není odkázaná pouze na cloud: firmware lze aktualizovat přes USB a výrobce výslovně uvádí možnost zcela offline provozu. To je relevantní pro dílny, školy nebo firmy, které nechtějí podmiňovat základní tisk cloudovým účtem.

## MMU3: více materiálů jinou cestou

Pro vícebarevný a vícemateriálový tisk lze MK4S spojit s **MMU3**. Je dobré vědět o jednom detailu přímo z dokumentace Prusy: MMU3 funguje i s high-flow tryskou, ale výrobce doporučuje pro tuto kombinaci standardní trysku, protože vyšší volumetrický průtok může při přepínání zvyšovat množství odpadu. U bundle MK4S/MMU3 proto výrobce dodává standardní i high-flow trysku.

Nejde tedy jen o otázku „umí/neumí multicolor“. Před koupí je vhodné rozhodnout, zda je pro vás důležitější jednoduchý jednobarevný provoz, nebo automatické přepínání materiálu a s ním spojená složitější cesta filamentu.

## Servisovatelnost a konstrukce

Otevřená konstrukce zpřístupňuje mechaniku bez demontáže vnějšího pláště. Výrobce k MK4S udržuje samostatnou Knowledge Base s postupy pro montáž, údržbu, výměnu trysky, firmware a diagnostiku chyb. To je konkrétní vlastnost ekosystému, kterou lze před nákupem ověřit — na rozdíl od vágního tvrzení, že je nějaký stroj „opravitelnější“.

## Pro koho dává MK4S smysl

**Silný kandidát, pokud:**

- tisknete hlavně PLA, PETG, flexibilní nebo další materiály vhodné pro otevřený stroj,
- chcete přímý přístup k mechanice a rozsáhlé servisní dokumentaci,
- dává vám smysl PrusaSlicer, Prusa Connect/Link a možnost offline provozu,
- chcete možnost později doplnit enclosure nebo MMU3,
- tiskový prostor 250 × 210 × 220 mm odpovídá vašim dílům.

**Porovnejte rovnou s uzavřeným strojem, pokud:**

- je hlavním použitím pravidelný tisk velkých ABS/ASA/PA dílů,
- chcete enclosure integrovaný už v základní konstrukci,
- potřebujete větší tiskový prostor,
- preferujete automatický vícemateriálový systém jako hlavní součást workflow od prvního dne.

## MK4S versus uzavřená CoreXY tiskárna

Nedává smysl rozhodovat pouze podle deklarované rychlosti. MK4S a uzavřená CoreXY řeší část potřeb jinou konstrukcí. MK4S nabízí otevřený přístup k mechanice a volitelné rozšíření enclosure; uzavřený CoreXY stroj má kryt a stabilnější prostředí zabudované do základního konceptu.

Pokud vybíráte hlavně podle materiálů, začněte otázkou **co budete tisknout většinu času**. Pro PLA/PETG není enclosure automaticky výhoda. Pro pravidelný ABS/ASA tisk je naopak konstrukce pracovního prostoru podstatná.

## Co ověřit před nákupem

1. Změřte největší reálný díl proti prostoru 250 × 210 × 220 mm.
2. Sepište tři filamenty, které budete používat nejčastěji.
3. Pokud mezi nimi převažuje ABS/ASA/PA, započítejte enclosure už do rozhodování.
4. Rozhodněte, zda chcete MMU3 a zda vám vyhovuje jeho způsob práce.
5. Ověřte si prostor na stole: podložka se pohybuje v ose Y, takže nestačí jen půdorys rámu.
6. Aktuální cenu porovnejte až při nákupu; do profilu ji natvrdo nezapisujeme.

## Zdroje a metodika

Technické údaje jsme 3. 10. 2026 ověřili na aktuální produktové stránce **Original Prusa MK4S** a v **Prusa Knowledge Base**. Tvrzení výrobce o rychlosti, kvalitě, spolehlivosti nebo výsledcích interních testů nepřebíráme jako vlastní zjištění. Tento profil se může změnit na plnou recenzi teprve tehdy, až bude existovat skutečný redakční test s popsanou metodikou.

**Shrnutí:** MK4S je otevřený, modulární FDM stroj s Nextruderem, automatizovanou první vrstvou a rozsáhlou servisní dokumentací. Pro výběr jsou podstatnější rozměry dílů, materiály, potřeba enclosure a požadované workflow než marketingové pořadí nebo jedno číslo rychlosti.
