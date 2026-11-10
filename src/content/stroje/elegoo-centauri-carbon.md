---
title: "Elegoo Centauri Carbon — zdrojovaný profil uzavřené CoreXY"
description: "Co Elegoo Centauri Carbon nabízí, pro koho dává smysl a co před nákupem ověřit. Zdrojovaný profil bez předstírání vlastního testu a bez číselného skóre."
publishedAt: 2026-10-01
reviewedAt: 2026-10-03
level: "pokročilý"
technologies:
  - "FDM"
tags:
  - "tiskarna"
  - "elegoo"
  - "centauri-carbon"
  - "corexy"
  - "fdm"
product: "Elegoo Centauri Carbon"
contentMode: "zdrojovany-profil"
note: "Zdrojovaný profil podle aktuální dokumentace výrobce. Nejde o plnou recenzi ani vlastní měření První Vrstvy."
sourceNote: "Primární zdroj: oficiální produktová stránka ELEGOO Centauri Carbon; ověřeno 3. 10. 2026."
---
Elegoo Centauri Carbon je uzavřená FDM tiskárna s kinematikou CoreXY. Tenhle text je **zdrojovaný profil**, ne vlastní test: odděluje parametry výrobce od vlastností, které musí potvrdit až fyzické měření. Číselné skóre proto nepřidáváme.

## Rychlý přehled

| Vlastnost | Údaj výrobce |
| --- | --- |
| Kinematika | CoreXY |
| Pracovní prostor | 256 × 256 × 256 mm |
| Hotend | až 320 °C |
| Vyhřívaná podložka | až 110 °C |
| Maximální rychlost | až 500 mm/s |
| Maximální zrychlení | až 20 000 mm/s² |
| Maximální uváděný průtok | 32 mm³/s |
| Displej | 4,3\" kapacitní dotykový |
| Konstrukce | plně uzavřená |
| Kamera | ano, v komoře |

Rychlost, zrychlení a průtok jsou **limity deklarované ELEGOO**, nikoli výsledky benchmarku První Vrstvy. Reálná rychlost závisí na modelu, materiálu, trysce, chlazení a nastavení sliceru.

## Konstrukce a proč je důležitá

Centauri Carbon kombinuje CoreXY s integrovanou hliníkovou konstrukcí a uzavřenou komorou. Pro výběr tiskárny je důležitější právě tato kombinace než samotná hodnota 500 mm/s: uzavřený prostor omezuje proudění okolního vzduchu a dává větší smysl u materiálů citlivých na teplotní změny.

Pokud řešíte ABS nebo ASA, navazuje na tento profil náš [checklist příčin warpingu](/clanky/warping-u-abs-priciny-a-checklist/). Enclosure není záruka bezchybného tisku; stále záleží na geometrii dílu, podložce, teplotách a nastavení procesu.

## Hotend a technické materiály

ELEGOO uvádí hotend do **320 °C**, podložku do **110 °C** a trysku z kombinace mosazi a kalené oceli určenou i pro abrazivnější filamenty. Výrobce Centauri Carbon přímo prezentuje pro tisk filamentů s uhlíkovými vlákny.

To je podstatný rozdíl proti tiskárně navržené hlavně pro PLA/PETG. Neznamená to ale, že každý CF filament lze tisknout jedním univerzálním profilem. Vždy je nutné respektovat doporučení výrobce konkrétního materiálu, včetně sušení a požadavků na trysku.

## Automatická kalibrace

Podle ELEGOO automatika zahrnuje:

- vyrovnání podložky,
- nastavení Z-offsetu,
- kalibraci kompenzace vibrací,
- kalibraci pressure advance.

Tiskárna před kalibrací používá také čistítko trysky na podložce. Automatizace snižuje počet ručních kroků, ale bez vlastního dlouhodobého testu ji nehodnotíme jako spolehlivější než konkurenční řešení.

## Chlazení a první vrstva

Centauri Carbon používá několik ventilátorů včetně pomocného chlazení modelu. Výrobce zároveň dodává oboustranný pružný tiskový plát; jedna strana je zaměřená na PLA.

U PLA může být uzavřená komora naopak něco, s čím je potřeba pracovat podle doporučeného profilu a podmínek. Uzavřená tiskárna není automaticky lepší pro každý polymer.

## Kamera, síť a ovládání

V komoře je kamera pro vzdálené sledování a časosběr. ELEGOO uvádí dual-band Wi-Fi a síťový přenos souborů přes LAN-enabled Wi-Fi. Ovládání na stroji zajišťuje **4,3\" kapacitní dotykový displej**.

Pro uživatele, který chce čistě lokální nebo automatizované workflow, doporučujeme před nákupem ověřit aktuální možnosti firmware, síťového rozhraní a konkrétní verze sliceru. Tyto části se mohou měnit aktualizacemi rychleji než mechanické parametry stroje.

## Bezpečnostní výbava a filtrace

Výrobce uvádí vestavěný vzduchový filtr, senzor konce filamentu, obnovu po výpadku napájení a kontrolu ventilátorů. Přítomnost filtru ale sama o sobě není důkazem konkrétní účinnosti pro VOC nebo ultrajemné částice; bez nezávislého měření takovou účinnost netvrdíme.

## Pro koho dává smysl

**Dává smysl zvažovat, pokud:**

- chcete uzavřenou CoreXY tiskárnu místo otevřeného bedslingeru,
- vedle PLA/PETG plánujete ABS, ASA nebo vybrané technické a kompozitní materiály,
- chcete automatickou kalibraci a integrovanou kameru,
- potřebujete pracovní prostor přibližně 256 mm ve všech třech osách,
- nechcete stavět enclosure jako dodatečný projekt.

**Před koupí porovnejte jinou variantu, pokud:**

- je prioritou zavedený vícebarevný nebo multi-material systém,
- požadujete konkrétní otevřený firmware nebo přesně definované lokální API,
- vybíráte primárně podle servisní sítě a dostupnosti dílů v ČR/SR,
- chcete aktivně vyhřívanou komoru s výrobcem definovanou cílovou teplotou.

## Centauri Carbon vs. Bambu Lab P1S

Oba stroje patří mezi uzavřené CoreXY tiskárny podobné velikostní třídy. Centauri Carbon má podle výrobce pracovní prostor **256 × 256 × 256 mm**, zatímco P1S používá stejný nominální objem 256 mm v každé ose. Rozhodnutí proto nedává smysl stavět jen na objemu.

U P1S je silným rozhodovacím bodem ekosystém AMS; u Centauri Carbon je potřeba vícebarevný workflow posuzovat podle aktuální nabídky ELEGOO. Podrobný zdrojovaný profil najdete u [Bambu Lab P1S](/recenze/bambu-p1s/).

## Centauri Carbon vs. Prusa CORE One+

[Prusa CORE One+](/recenze/prusa-core-one/) je také uzavřená CoreXY, ale představuje jiný ekosystém a servisní filozofii. Při porovnání se dívejte vedle pracovního prostoru a materiálů také na dostupnost dílů, dokumentaci, slicer, lokální workflow a způsob vícebarevného tisku.

Bez stejného fyzického testovacího protokolu První Vrstvy nevyhlašujeme vítěze podle marketingových rychlostí.

## Co zatím netvrdíme

Bez vlastního testu nepřebíráme marketingové formulace o kvalitě, spolehlivosti nebo bezchybném tisku jako redakční verdikt. Neuvádíme vlastní hlučnost, spotřebu, přesnost, dlouhodobou poruchovost ani dobu tisku benchmarků.

## Co před nákupem ověřit

1. Materiály, které budete skutečně tisknout většinu času.
2. Dostupnost spotřebních a servisních dílů v ČR/SR.
3. Požadovaný slicer a způsob lokálního/síťového ovládání.
4. Potřebu vícebarevného nebo multi-material tisku.
5. Zda potřebujete jen pasivně uzavřenou, nebo aktivně vyhřívanou komoru.
6. Aktuální cenu — do profilu ji natvrdo nezapisujeme bez stabilního CZ/SK cenového feedu.

## Zdroje a metodika

Parametry v profilu vycházejí z aktuální oficiální produktové stránky **ELEGOO Centauri Carbon**, znovu ověřené 3. 10. 2026. Marketingová tvrzení výrobce nepovažujeme za vlastní měření. Pokud stroj projde vlastním testovacím protokolem První Vrstvy, může na tento profil navázat samostatná plná recenze.

**Shrnutí:** Centauri Carbon je zajímavá uzavřená CoreXY zejména tam, kde uživatel chce vedle běžných filamentů pracovat i s technickými nebo abrazivními materiály a nechce enclosure řešit dodatečně. Rozhodnutí proti P1S nebo CORE One+ má stát hlavně na materiálech, ekosystému, síťovém workflow, servisu a vícebarevném tisku — ne na jednom čísle maximální rychlosti.
