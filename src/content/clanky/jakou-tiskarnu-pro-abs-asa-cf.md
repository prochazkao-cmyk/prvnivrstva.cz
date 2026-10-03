---
title: "Chci tisknout ABS, ASA nebo CF: jakou 3D tiskárnu potřebuji?"
description: "Praktický zdrojovaný průvodce výběrem FDM tiskárny pro ABS, ASA a filamenty plněné uhlíkovým vláknem. Co řešit u komory, hotendu, trysky a podložky."
publishedAt: 2026-10-04
reviewedAt: 2026-10-04
level: "pokročilý"
technologies:
  - "FDM"
tags:
  - "abs"
  - "asa"
  - "carbon-fiber"
  - "materialy"
  - "nakupni-radce"
---
PLA a PETG zvládne široké spektrum dnešních FDM tiskáren. U **ABS, ASA a filamentů plněných uhlíkovým vláknem (CF)** už ale nestačí sledovat jen maximální teplotu hotendu. Důležitá je celá tepelná a materiálová cesta: konstrukce tiskárny, komora, podložka, hotend a u abrazivních filamentů také odolnost trysky.

Tento průvodce není fyzický test ani žebříček. Vychází z aktuálních specifikací výrobců a z produktových profilů První Vrstvy. Konkrétní doporučené teploty vždy ověřte také na technickém listu použitého filamentu.

## Nejkratší odpověď

- Pro **pravidelný ABS/ASA tisk** dává smysl začít u uzavřené tiskárny. Stabilnější tepelné prostředí pomáhá omezovat rychlé ochlazování výtisku, které souvisí s deformacemi a odlepováním rohů.
- Pro **CF filamenty** nestačí nápis „carbon“ v názvu materiálu. Ověřte konkrétní polymer (např. PLA-CF, PET-CF nebo PA-CF), požadované teploty a zejména vhodnost trysky pro abrazivní plnivo.
- Maximální teplota hotendu sama o sobě neříká, že tiskárna zvládne každý technický filament. Výrobce musí daný materiál podporovat a celý systém musí odpovídat jeho požadavkům.

## 1. Proč je u ABS a ASA důležitá komora

ABS a ASA jsou citlivější na teplotní rozdíly než běžné PLA. Uzavřený prostor kolem výtisku omezuje průvan a rychlé změny okolní teploty. To neznamená, že každá uzavřená tiskárna má aktivně vyhřívanou komoru: **enclosure** a **aktivně řízená teplota komory** jsou dvě různé vlastnosti.

Příkladem druhého přístupu je [Prusa CORE One+](/recenze/prusa-core-one/), u které Prusa uvádí maximální teplotu komory 55 °C. Naproti tomu [Creality K1C](/stroje/creality-k1c/) používá uzavřenou konstrukci a výrobce mezi podporovanými filamenty uvádí ABS i ASA.

Pokud už řešíte deformace výtisků, pokračujte také na náš [checklist warpingu u ABS a ASA](/clanky/warping-u-abs-priciny-a-checklist/).

## 2. Hotend a podložka: maxima nejsou závod

Vyšší číslo není automaticky lepší. Podstatné je, zda teplotní rozsah odpovídá filamentu, který chcete skutečně používat.

Z aktuálních údajů výrobců:

| Tiskárna | Max. hotend | Max. podložka | Konstrukce / komora |
| --- | ---: | ---: | --- |
| Bambu Lab P1S | 300 °C | 100 °C | uzavřená |
| Creality K1C | 300 °C | 100 °C | uzavřená |
| Prusa CORE One+ | 290 °C | 120 °C | uzavřená, výrobce uvádí komoru do 55 °C |
| Elegoo Centauri Carbon | 320 °C | 110 °C | plně uzavřená |

Tabulka neříká, která tiskárna tiskne lépe. Jen ukazuje konstrukční a teplotní rámec deklarovaný výrobci.

## 3. CF není jeden materiál

„CF“ znamená, že základní polymer obsahuje uhlíkové vlákno nebo uhlíkové plnivo. Chování **PLA-CF** proto není stejné jako u **PA-CF**. Rozhodující zůstává základní polymer: jeho teplota, nároky na sušení, komoru i podložku.

CF plnivo je zároveň abrazivní. Před nákupem tiskárny proto ověřte materiál trysky a doporučení výrobce pro konkrétní filament. Creality u K1C uvádí ocelovou špičku trysky a podporu PLA-CF, PA-CF a PET-CF. Elegoo u Centauri Carbon uvádí brass-hardened-steel nozzle a zaměření na CF filamenty.

U tiskárny, která má standardně mosaznou trysku, nelze automaticky předpokládat dlouhodobou vhodnost pro abrazivní plniva jen proto, že hotend dosáhne potřebné teploty.

## 4. Čtyři současné příklady bez pořadí vítězů

### Bambu Lab P1S

[P1S](/stroje/bambu-lab-p1s/) je uzavřená CoreXY tiskárna. Bambu Lab mezi ideálními materiály uvádí mimo jiné ABS a ASA. Pro kupujícího je důležité rozlišovat základní materiály od abrazivních CF variant a ověřit konfiguraci hotendu/trysky pro konkrétní filament.

### Creality K1C

[K1C](/stroje/creality-k1c/) má uzavřenou CoreXY konstrukci, hotend do 300 °C a podložku do 100 °C. Creality výslovně uvádí ABS, ASA, PA, PC a také PLA-CF, PA-CF a PET-CF. Pro CF je relevantní ocelová špička trysky.

### Prusa CORE One+

[CORE One+](/recenze/prusa-core-one/) kombinuje uzavřenou CoreXY konstrukci s výrobcem deklarovanou komorou do 55 °C, hotendem do 290 °C a podložkou do 120 °C. Prusa mezi pokročilými materiály uvádí ABS, ASA, HIPS a PA. Pro abrazivní kompozity je potřeba zvolit odpovídající trysku podle materiálu.

### Elegoo Centauri Carbon

[Centauri Carbon](/stroje/elegoo-centauri-carbon/) má plně uzavřenou konstrukci, hotend do 320 °C, podložku do 110 °C a výrobcem uváděnou trysku z kombinace mosazi a kalené oceli. Elegoo ji přímo prezentuje pro práci s CF filamenty.

## 5. Nákupní checklist

Před koupí tiskárny pro technické materiály si odpovězte na těchto sedm otázek:

1. **Jaký přesně filament budu tisknout?** ABS/ASA je jiný scénář než PA-CF.
2. **Je tiskárna uzavřená?** U pravidelného ABS/ASA je to podstatnější parametr než marketingová maximální rychlost.
3. **Uvádí výrobce daný materiál mezi podporovanými?** Neodvozujte kompatibilitu jen z maximální teploty hotendu.
4. **Jakou má tiskárna trysku?** Pro abrazivní CF plniva hledejte řešení určené pro abrazivní materiály.
5. **Stačí teplota podložky a hotendu pro konkrétní filament?** Řiďte se datasheetem filamentu, ne univerzálním číslem z internetu.
6. **Potřebuji aktivně řízenou komoru, nebo mi stačí enclosure?** Záleží na polymeru, velikosti dílu a požadavcích výrobce materiálu.
7. **Jak budu řešit výpary a umístění tiskárny?** Uzavřená skříň není totéž co garantované odstranění emisí; při práci s technickými materiály řešte větrání a doporučení výrobce filamentu.

## Co bych nevybíral podle tabulky

Samotných 290, 300 nebo 320 °C na hotendu není důvod ke koupi. Stejně tak deklarovaná maximální rychlost neříká nic o tom, jak se konkrétní velký ASA díl bude chovat. Pro tento účel je užitečnější správná konstrukce, teplotní stabilita a materiálová kompatibilita.

Pokud se rozhodujete mezi otevřenou a uzavřenou tiskárnou pro běžnější materiály, podívejte se také na [Bambu Lab A1 vs. P1S](/clanky/bambu-a1-vs-p1s/), kde je rozdíl konstrukcí vidět na dvou strojích se stejně velkým pracovním prostorem.

## Primární zdroje

- Bambu Lab — P1S: produktová stránka a technické specifikace výrobce, bambulab.com
- Creality — K1C Carbon Fiber 3D Printer: produktová stránka a support/specifications, creality.com
- Prusa Research — Prusa CORE One+ (Gen 2): technické parametry výrobce, prusa3d.com
- ELEGOO — Centauri Carbon: produktová stránka a technické parametry výrobce, elegoo.com

**Stav ověření:** specifikace zkontrolovány 4. 10. 2026 proti výše uvedeným primárním zdrojům. Článek neobsahuje vlastní laboratorní měření První Vrstvy.