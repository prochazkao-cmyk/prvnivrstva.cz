---
title: "Original Prusa MK4S: profil tiskárny a klíčové parametry"
description: "Zdrojovaný profil Original Prusa MK4S: 250 × 210 × 220 mm, Nextruder, Load Cell, high-flow CHT tryska, 360° chlazení, Input Shaper a MMU3."
publishedAt: 2026-10-05
brand: "Prusa Research"
technology: "FDM"
tags:
  - "Prusa"
  - "MK4S"
  - "FDM"
  - "Nextruder"
  - "MMU3"
---

Original Prusa MK4S je otevřená kartézská FDM tiskárna postavená kolem Nextruderu a automatické kalibrace první vrstvy přes Load Cell. Tento profil je katalogový a zdrojovaný: parametry níže vycházejí z aktuálních materiálů Prusa Research, nikoli z fyzického testu První Vrstvy.

## Nejdůležitější parametry

| Parametr | Original Prusa MK4S |
|---|---|
| Tiskový objem | 250 × 210 × 220 mm |
| Filament | 1,75 mm |
| Extruder | Nextruder, Direct Drive |
| Převod extruderu | planetová převodovka 10:1 |
| Dodávaná tryska | high-flow Prusa Nozzle, mosazná CHT 0,4 mm |
| Chlazení výtisku | 360° systém s vysokovýkonnou turbínou |
| Max. teplota trysky | 290 °C |
| Max. teplota podložky | 120 °C |
| Tiskový povrch | magnetická podložka + výměnný pružný ocelový PEI plát |
| Kalibrace podložky | automatický Mesh Bed Leveling v oblasti tisku |
| Senzor pro první vrstvu | Load Cell |
| Input Shaper | ano |
| Displej | 3,5″ barevný grafický |
| Připojení | Ethernet, Wi‑Fi, NFC, USB |
| Multi-material | kompatibilní s MMU3 |
| Hmotnost tiskárny | 7 kg |

Zdroj parametrů: oficiální produktová stránka Original Prusa MK4S, kontrolováno 5. 10. 2026.

## Co přinesla verze MK4S

Prusa u MK4S zdůrazňuje dvě hardwarové změny proti původní MK4: vysokoprůtokovou CHT trysku a přepracované 360° chlazení výtisku s výkonnější turbínou. Smyslem této kombinace je zvládnout vyšší průtok materiálu a současně účinně chladit čerstvě položené vrstvy.

To ale není totéž jako tvrdit konkrétní časovou úsporu u libovolného modelu. Reálná rychlost závisí na geometrii, materiálu, trysce a zvoleném profilu, proto zde nepřebíráme marketingové zkratky jako vlastní benchmark.

## Nextruder a automatická první vrstva

MK4S používá Direct Drive Nextruder s planetovou převodovkou 10:1 a celokovovou cestou filamentu. Load Cell v Nextruderu slouží k přesnému kontaktu s podložkou a automatizuje kalibraci první vrstvy.

Automatika ale nenahrazuje čistý a vhodně zvolený tiskový povrch. Pokud první vrstva nedrží, pokračujte na [návod k bezpečnému čištění tiskové podložky](/rady-a-tipy/bezpecne-cisteni-build-plate/) a diagnostiku [První vrstva nedrží](/rady-a-tipy/prvni-vrstva-nedrzi/).

## Otevřená konstrukce versus CORE One+

MK4S je otevřená tiskárna, zatímco [Prusa CORE One+](/tiskarny/prusa-core-one-plus/) používá uzavřenou CoreXY konstrukci s aktivně řízenou komorou. To je důležitější rozdíl než samotný seznam podporovaných filamentů.

Pro PLA, PETG a řadu běžných materiálů může být otevřená konstrukce praktická a snadno přístupná. U materiálů citlivých na průvan a teplotní gradienty je naopak relevantní enclosure. Prusa uvádí ABS, ASA, HIPS a PA pro MK4S při použití Original Prusa Enclosure s filtračním doplňkem.

## MMU3 a high-flow tryska

MK4S je kompatibilní s MMU3. Prusa současně upozorňuje na praktický detail: MMU3 funguje i s high-flow tryskou, ale vyšší objemový průtok může při vícebarevném tisku zvýšit množství odpadu při výměnách filamentu. Výrobce proto pro kombinaci MK4S + MMU3 doporučuje standardní trysku jako efektivnější variantu; u příslušných bundle ji dodává společně s high-flow tryskou.

To je přesně typ informace, který je při výběru důležitější než obecné tvrzení, že jedna tryska je vždy „lepší“.

## Konektivita a software

Oficiální specifikace uvádí Ethernet, Wi‑Fi modul dodávaný s tiskárnou, NFC přijímač a tisk z USB. MK4S pracuje s Prusa Connect a PrusaLink. Firmware řady MK4S zůstává aktivně aktualizovaný; v roce 2026 Prusa publikovala další firmware aktualizace i pro tuto řadu.

## Komu dává MK4S podle parametrů smysl

**Silné stránky na papíře:**

- automatická první vrstva přes Load Cell,
- Nextruder s Direct Drive,
- 360° chlazení a high-flow CHT tryska,
- výměnné PEI pružné pláty,
- Input Shaper,
- Ethernet, Wi‑Fi, NFC a Prusa Connect,
- kompatibilita s MMU3.

**Co je dobré před nákupem ověřit:**

- zda pro vaše materiály potřebujete enclosure,
- který tiskový plát odpovídá používanému filamentu,
- zda při MMU3 preferujete standardní nebo high-flow trysku,
- zda vám stačí tiskový objem 250 × 210 × 220 mm,
- zda je pro váš provoz výhodnější otevřená MK4S, nebo uzavřená [CORE One+](/tiskarny/prusa-core-one-plus/).

## MK4S není totéž co vlastní redakční test

Dokud První Vrstva neprovede a nezdokumentuje skutečný fyzický test, nebudeme tomuto modelu přidělovat vlastní skóre ani tvrdit vlastní naměřenou hlučnost, rychlost, spotřebu nebo kvalitu povrchu.

Při mechanickém posunu vrstev pokračujte do průvodce [Layer shift: proč se vrstvy posunou a jak najít příčinu](/rady-a-tipy/layer-shift/).

## Zdroje

- Prusa Research — **Original Prusa MK4S, oficiální produktová stránka a technické parametry**, kontrolováno 5. 10. 2026: https://www.prusa3d.com/de/produkt/original-prusa-mk4s-3d-printer/
- Prusa Research — **Oznamujeme Original Prusa MK4S**, 12. 8. 2024: https://blog.prusa3d.com/cs/oznamujeme-original-prusa-mk4s-spickove-360-chlazeni-high-flow-tryska-mobilni-aplikace-hackerboard-a-dalsi-novinky_100605/
- Prusa Research — **Original Prusa MK4S kit, technické parametry a poznámka k MMU3/high-flow trysce**, kontrolováno 5. 10. 2026: https://cdn.prusa3d.com/product/original-prusa-mk4s-3d-printer-kit/
- Prusa Knowledge Base — **Original Prusa MK4S / firmware a podpora**, kontrolováno 5. 10. 2026: https://help.prusa3d.com/cs/product/mk4s
