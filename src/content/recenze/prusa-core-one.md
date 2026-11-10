---
title: "Prusa CORE One+ (Gen 2): zdrojovaný profil"
description: "Aktualizovaný profil uzavřené CoreXY tiskárny Prusa CORE One+ Gen 2 podle aktuálních údajů výrobce. Konstrukce, materiály, INDX a rozdíly nové generace bez předstírání vlastního testu."
publishedAt: 2026-10-01
reviewedAt: 2026-10-03
author: "Ondřej Procházka"
draft: false
product: "Prusa CORE One+"
tags:
  - Prusa
  - CORE One
  - CORE One+
  - profil
level: "pokročilý"
technologies:
  - "FDM"
evidence: "vyrobce"
contentMode: "zdrojovany-profil"
sourceNote: "Profil vychází z aktuálních technických údajů a produktových podkladů Prusa Research pro CORE One+ (Gen 2), ověřeno 3. 10. 2026. Redakce tento kus pro tento článek neměřila ani nehodnotila bodovým skóre."
---

# Prusa CORE One+ (Gen 2): co nabízí podle aktuálních podkladů výrobce

**Toto není plná recenze ani vlastní laboratorní test.** Je to zdrojovaný produktový profil, který odděluje parametry deklarované výrobcem od praktické interpretace. Marketingová tvrzení Prusa Research zde nepřebíráme jako vlastní měření.

## Rychlá orientace

CORE One+ (Gen 2) je **plně uzavřená CoreXY** tiskárna s tiskovým prostorem **250 × 220 × 270 mm**. Výrobce uvádí maximální teplotu trysky **290 °C**, podložky **120 °C** a komory **55 °C**. Extruder Nextruder je direct drive a aktuální konfigurace používá 0,4mm high-flow Prusa Nozzle CHT.

To ji staví do jiné kategorie než otevřené domácí bedslingery: nejde jen o rychlost pohybu, ale především o řízenější prostředí pro materiály, které jsou citlivější na průvan a teplotní změny.

## Co přinesla generace Gen 2

Prusa u aktuální CORE One+ uvádí několik konkrétních konstrukčních změn oproti předchozí generaci:

- **GT1.5 řemeny**, jejichž cílem je omezit jemné vzory na hladkých površích,
- upravené **uchycení vyhřívané podložky** pro kratší čekání na zahřátí,
- **silikonové čistítko trysky** před tiskem,
- **odnímatelný horní panel bez nářadí**, který zjednodušuje přístup při údržbě.

Jde o popis změn výrobce, nikoli o naše potvrzení jejich velikosti nebo dopadu. Jak velký rozdíl dělají v praxi, lze férově určit až srovnatelným testem obou generací.

## Technický základ

Podle aktuální produktové dokumentace výrobce:

- tiskový prostor: **250 × 220 × 270 mm**,
- kinematika: **CoreXY**,
- extruder: **Nextruder, direct drive**, planetová převodovka 10:1,
- standardní tryska: **0,4 mm high-flow Prusa Nozzle CHT**,
- maximum trysky: **290 °C**,
- maximum podložky: **120 °C**,
- maximum komory: **55 °C**,
- displej: **3,5\" barevný**, dotykové ovládání,
- konektivita: **Ethernet, Wi-Fi, USB**, Prusa Connect a mobilní aplikace,
- první vrstva a mesh bed leveling: automatické,
- Input Shaper: podporován.

Výrobce uvádí rozměry stroje **415 × 444 × 555 mm** a hmotnost 22,5 kg. To je důležitější údaj pro plánování pracovního místa než samotný tiskový objem.

## Materiály: kde enclosure dává smysl

Prusa mezi podporovanými materiály uvádí PLA, PETG, Flex, PVA, PC, PP, CPE a PVB; s Advanced Filtration System také ABS, ASA, HIPS a PA. U abrazivních technických filamentů je potřeba řešit odpovídající odolnou trysku podle konkrétního materiálu.

Uzavřená komora je prakticky relevantní hlavně pro materiály, které těží ze stabilnějšího teplotního prostředí. Samotný enclosure ale není důkaz, že každý materiál bude bez ladění nebo že tiskárna automaticky překoná otevřený stroj v PLA.

Pokud řešíte deformace u ABS/ASA, navazuje na tento profil náš [checklist příčin warpingu](/clanky/warping-u-abs-priciny-a-checklist/).

## INDX a multimateriál: důležitá změna směru

Aktuální generace je připravená na rozšíření **Bondtech INDX**. Prusa u něj uvádí možnost pracovat až s **8 barvami nebo materiály** v jedné úloze. Princip je odlišný od systémů, které přivádějí více filamentů do jediné trysky: INDX je toolchangerové rozšíření.

Pro kupujícího je důležité oddělit dvě otázky: zda multi-material skutečně potřebuje a zda chce tuto funkci hned, nebo až později. Základní CORE One+ funguje jako samostatná jednotrysková tiskárna; INDX je rozšíření, nikoli podmínka běžného provozu.

## Filtrace a kamera nejsou totéž co standardní výbava

Výrobce nabízí pro CORE One+ volitelný **Advanced Filtration System** a FullHD kameru s nočním režimem. Při porovnávání cen konfigurací proto není správné automaticky počítat s tím, že každý kus má filtraci nebo kameru už v základu.

To je důležité hlavně při nákupu kvůli ASA/ABS: enclosure řeší teplotní stabilitu, zatímco filtrace řeší jinou část provozu. Jedno není náhradou druhého.

## Pro koho dává CORE One+ smysl

**Silný kandidát je pro uživatele, který:**

- chce uzavřený CoreXY v ekosystému Prusa,
- střídá běžné a technické materiály,
- oceňuje automatickou první vrstvu a integrovaný Prusa workflow,
- chce stroj, který lze později rozšiřovat,
- preferuje servisovatelnost a dostupnost konstrukční dokumentace před čistě uzavřeným appliance přístupem.

**Před koupí bych porovnal jinou kategorii, pokud:**

- tisknete téměř výhradně PLA/PETG a enclosure nepotřebujete,
- potřebujete výrazně větší pracovní prostor než 250 × 220 × 270 mm,
- hlavním kritériem je nejnižší pořizovací cena,
- očekáváte kameru, filtraci nebo multi-material automaticky v základní konfiguraci.

## CORE One+ vs. otevřená tiskárna

Pro PLA a PETG není enclosure automaticky výhoda. Otevřená tiskárna může být jednodušší a levnější cesta, pokud technické materiály nejsou součástí plánu. Pro tento scénář lze srovnat [zdrojovaný profil Bambu Lab A1](/stroje/bambu-a1/).

Naopak při pravidelném ABS/ASA, PC nebo podobných materiálech je uzavřená konstrukce jeden z parametrů, které mají při výběru skutečný praktický význam.

## CORE One+ vs. jiné uzavřené CoreXY

Samotné označení CoreXY neříká, která tiskárna je lepší. Porovnávejte pracovní prostor, teploty, materiálový rozsah, způsob automatizace, servisní model a multi-material řešení. Pro další konstrukční kontext máme také [zdrojovaný profil Elegoo Centauri Carbon](/stroje/elegoo-centauri-carbon/) a [Bambu Lab P1S](/recenze/bambu-p1s/).

## Co zatím netvrdíme

Bez vlastního srovnatelného testu zde **neuvádíme** vlastní hlučnost, spotřebu, rychlost benchmarku, přesnost, procento úspěšných tisků, dlouhodobou spolehlivost ani bodové skóre. Ani výrobcem uváděná marketingová srovnání rychlosti nebo spolehlivosti nepřepisujeme jako redakční výsledek.

Aktuální cenu rovněž neukládáme jako trvalou vlastnost profilu; mění se podle konfigurace, trhu a času.

## Checklist před koupí

1. Budete opravdu tisknout ABS/ASA/PC/PA, nebo převážně PLA/PETG?
2. Stačí vám pracovní prostor 250 × 220 × 270 mm?
3. Potřebujete filtraci a kameru — a máte je započítané v požadované konfiguraci?
4. Je pro vás budoucí INDX relevantní, nebo multi-material nepotřebujete?
5. Chcete sestavený stroj, nebo stavebnici a hlubší znalost konstrukce?
6. Je pro vás důležitější ekosystém a servisní filozofie, nebo pořizovací cena?

## Zdroje a metodika

Technické údaje a popis Gen 2 vycházejí z aktuálních produktových podkladů **Prusa Research**, ověřených 3. 10. 2026. Výrobce je primární zdroj pro specifikace vlastního produktu; jeho kvalitativní a marketingová tvrzení nepovažujeme za nezávislé měření.

- Prusa Research — CORE One+ (Gen 2), technické parametry, změny Gen 2, příslušenství a INDX: https://www.prusa3d.com/cs/produkt/prusa-core-one/
- Prusa Research — CORE One+, technické parametry a podporované materiály: https://www.prusa3d.com/cs/p/core-one-plus/

Další krok: projít [výběr 3D tiskáren](/nakupni-radci/) a porovnat konstrukční kategorii podle toho, co skutečně tisknete — ne podle jediného marketingového čísla.
