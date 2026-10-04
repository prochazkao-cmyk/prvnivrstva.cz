---
title: "Prusa CORE One+: profil tiskárny a klíčové parametry"
description: "Zdrojovaný profil Prusa CORE One+ (Gen 2): CoreXY, 250 × 220 × 270 mm, aktivně vyhřívaná komora, Nextruder, automatická první vrstva, MMU3 a INDX."
publishedAt: 2026-10-04
brand: "Prusa Research"
technology: "FDM"
tags:
  - "Prusa"
  - "CORE One+"
  - "CoreXY"
  - "FDM"
  - "MMU3"
  - "INDX"
---

Prusa CORE One+ (Gen 2) je uzavřená CoreXY FDM tiskárna s aktivně řízenou komorou. V katalogu První Vrstvy ji zařazujeme jako zdrojovaný produktový profil: níže uvedené parametry vycházejí z aktuálních materiálů Prusa Research, nikoli z našeho fyzického testu.

## Nejdůležitější parametry

| Parametr | Prusa CORE One+ (Gen 2) |
|---|---|
| Kinematika | CoreXY |
| Tiskový objem | 250 × 220 × 270 mm |
| Filament | 1,75 mm |
| Extruder | Nextruder, Direct Drive |
| Převod extruderu | planetová převodovka 10:1 |
| Dodávaná tryska | vysokoprůtoková mosazná Prusa Nozzle CHT 0,4 mm |
| Max. teplota trysky | 290 °C |
| Max. teplota podložky | 120 °C |
| Max. teplota komory | 55 °C |
| Tiskový povrch | magnetická podložka + výměnný pružný ocelový PEI plát |
| Kalibrace první vrstvy | plně automatická přes Load Cell |
| Input Shaper | ano |
| Displej | 3,5″ barevný, dotykový |
| Připojení | Ethernet, Wi-Fi, USB |
| Kamera | volitelné řešení uvnitř komory |
| HEPA filtrace | volitelné rozšíření |
| Multi-material | MMU3 (5 filamentů), INDX (až 8 filamentů) |

Zdroj parametrů: oficiální produktová stránka Prusa CORE One+ (Gen 2), kontrolováno 4. 10. 2026.

## Proč je důležitá aktivně řízená komora

Výrobce uvádí maximální teplotu komory 55 °C. To CORE One+ odlišuje od tiskáren, které mají pouze pasivní enclosure. Vyšší a stabilnější teplota okolí výtisku je relevantní zejména pro materiály náchylné k deformaci. Není ale správné z této jediné hodnoty odvozovat, že každý technický materiál bude bezproblémový — vždy záleží i na konkrétním filamentu, geometrii dílu, profilu a přípravě tiskového povrchu.

## Nextruder a první vrstva

CORE One+ používá přímý Nextruder s planetovou převodovkou 10:1. Prusa uvádí celokovový hotend, vysokoprůtokovou 0,4mm CHT trysku a systém rychlé výměny trysky.

Pro první vrstvu je podstatný Load Cell senzor. Výrobce uvádí plně automatickou kalibraci první vrstvy, takže uživatel nemá ručně nastavovat jednu univerzální hodnotu Z-offsetu jako u starších konstrukcí. Ani automatika ale neřeší mastný nebo nevhodně připravený plát — při problémech proto dává smysl projít náš [návod na čištění tiskové podložky](/clanky/cisteni-tiskove-podlozky-pei/) a diagnostiku [První vrstva nedrží](/clanky/prvni-vrstva-nedrzi/).

## Materiály

Prusa mezi podporovanými materiály uvádí PLA, PETG, Flex, PVA, PC, PP, CPE a PVB; mezi pokročilé řadí ABS, ASA, HIPS a PA. Tento seznam je informace výrobce, nikoli výsledek redakčního testu První Vrstvy.

U technických materiálů je rozumné ověřit také doporučenou trysku, vysušení filamentu a konkrétní profil. Maximální teplota hotendu sama o sobě není úplný údaj o kompatibilitě materiálu.

## MMU3 a INDX

CORE One+ podporuje dvě rozdílné cesty k vícemateriálovému nebo vícebarevnému tisku. Výrobce uvádí kompatibilitu s MMU3 pro pět filamentů a s INDX až pro osm filamentů. Jde o rozšíření; není správné je prezentovat jako standardní součást každé CORE One+.

## Kamera, filtrace a konektivita

Interní kamera je podle specifikace volitelná, stejně jako HEPA filtrace. Tiskárna podporuje Ethernet, Wi-Fi a USB a je kompatibilní s Prusa Connect a mobilní aplikací Prusa.

To je důležité při porovnávání katalogových položek: přítomnost uzavřené komory neznamená automaticky, že konkrétní balení obsahuje kameru nebo HEPA filtr.

## Komu dává CORE One+ podle parametrů smysl

**Silné stránky na papíře:**

- uzavřená CoreXY konstrukce s aktivně řízenou komorou do 55 °C,
- automatická první vrstva přes Load Cell,
- Nextruder s direct drive,
- výměnné PEI pláty,
- možnost MMU3 i INDX,
- Ethernet, Wi-Fi, USB a Prusa Connect.

**Co je dobré před nákupem ověřit:**

- zda konkrétní balení obsahuje požadovaný tiskový plát a příslušenství,
- zda potřebujete volitelnou kameru nebo HEPA filtr,
- kompatibilitu konkrétního technického filamentu s tryskou a profilem,
- zda je pro vaše modely dostatečný tiskový objem 250 × 220 × 270 mm.

## CORE One+ není totéž co vlastní redakční test

Tento profil slouží jako katalogový a rozhodovací podklad. Dokud První Vrstva neprovede a nezdokumentuje skutečný fyzický test, nebudeme doplňovat vlastní skóre, tvrzení o hlučnosti, spolehlivosti, kvalitě povrchu ani rychlosti reálných modelů.

Pokud už CORE One+ používáte a řešíte mechanický posun vrstev, pokračujte do diagnostiky [Layer shift: proč se vrstvy posunou a jak najít příčinu](/clanky/layer-shift-posun-vrstev/).

## Zdroje

- Prusa Research — **Prusa CORE One+ (Gen 2), oficiální produktová stránka a technické parametry**, kontrolováno 4. 10. 2026: https://www.prusa3d.com/cs/produkt/prusa-core-one-5/
- Prusa Research — **CORE One+ (Gen 2) Assembly kit, technické parametry**, kontrolováno 4. 10. 2026: https://www.prusa3d.com/cs/produkt/prusa-core-one-kit-sat/
