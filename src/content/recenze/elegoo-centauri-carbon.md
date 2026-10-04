---
title: "Elegoo Centauri Carbon: zdrojovaný profil místo falešné recenze"
description: "Co nabízí Elegoo Centauri Carbon, komu dává smysl a co bez fyzického testu zatím nehodnotíme. Profil podle aktuálních podkladů výrobce."
publishedAt: 2026-10-04
reviewedAt: 2026-10-04
author: "Ondřej Procházka"
product: "Elegoo Centauri Carbon"
tags:
  - Elegoo
  - Centauri Carbon
  - CoreXY
  - uzavřená tiskárna
level: "pokročilý"
technologies:
  - "FDM"
contentMode: "zdrojovany-profil"
evidence: "vyrobce"
note: "Zdrojovaný produktový profil. Nejde o vlastní test ani redakční měření První Vrstvy."
sourceNote: "Primární zdroj: oficiální produktová stránka ELEGOO Centauri Carbon; ověřeno 4. 10. 2026."
---

# Elegoo Centauri Carbon: co víme z dokumentace a co musí potvrdit až test

Elegoo Centauri Carbon je **uzavřená CoreXY FDM tiskárna s pracovním prostorem 256 × 256 × 256 mm**. Výrobce ji staví mezi rychlé stroje připravené nejen pro PLA a PETG, ale také pro náročnější a abrazivní materiály. Tohle ale není hands-on recenze: níže oddělujeme ověřitelné specifikace výrobce od vlastností, které lze poctivě posoudit až na fyzickém stroji.

## Nejdůležitější parametry

| Vlastnost | Údaj výrobce |
| --- | --- |
| Kinematika | CoreXY |
| Pracovní prostor | 256 × 256 × 256 mm |
| Maximální teplota hotendu | 320 °C |
| Maximální teplota podložky | 110 °C |
| Konstrukce | plně uzavřená |
| Maximální deklarovaná rychlost | 500 mm/s |
| Maximální deklarované zrychlení | 20 000 mm/s² |
| Deklarovaný maximální průtok | 32 mm³/s |
| Displej | 4,3\" kapacitní dotykový |
| Kamera | ano, v komoře |

Rychlost, zrychlení a průtok jsou **hodnoty deklarované ELEGOO**, ne benchmark První Vrstvy. Reálný čas tisku ovlivňuje geometrie modelu, filament, tryska, chlazení i profil ve sliceru.

## Proč je důležitější konstrukce než číslo 500 mm/s

Centauri Carbon kombinuje CoreXY s integrovanou hliníkovou konstrukcí a uzavřenou komorou. Pro člověka vybírajícího tiskárnu je podstatnější právě celek: jak stabilní je mechanika, jak stroj pracuje s teplotou a jaké materiály zvládne dlouhodobě. Samotná maximální rychlost nic neříká o kvalitě konkrétního dílu.

Pokud vybíráte stroj hlavně pro ABS nebo ASA, pokračujte naším [rádcem pro výběr tiskárny pro ABS/ASA/CF](/clanky/jakou-tiskarnu-pro-abs-asa-cf/) a [checklistem warpingu](/clanky/warping-u-abs-priciny-a-checklist/). Uzavřená komora pomáhá omezit průvan a teplotní výkyvy, ale není zárukou bezchybného tisku každé geometrie.

## Hotend, podložka a abrazivní filamenty

ELEGOO uvádí **320 °C hotend**, podložku do **110 °C** a kombinovanou mosaznou/kalenou ocelovou trysku navrženou i pro materiály s vyššími nároky na odolnost proti opotřebení. Výrobce Centauri Carbon přímo prezentuje pro filamenty s uhlíkovými vlákny.

To je relevantní výbava, pokud chcete jít dál než PLA/PETG. Není to ale univerzální povolenka pro každý kompozit. U konkrétního filamentu je potřeba respektovat teplotní rozsah, doporučený průměr a materiál trysky i požadavky na sušení. Pro orientaci navazuje [průvodce PLA, PETG, ASA a TPU](/clanky/pla-petg-asa-tpu-ktery-material-kdy/) a [průvodce sušením filamentu](/clanky/suseni-filamentu-kdy-jak-cim/).

## Automatická kalibrace

Podle výrobce automatika zahrnuje vyrovnání podložky, Z-offset, kompenzaci vibrací a pressure advance. Součástí procesu je také čištění trysky před automatickým vyrovnáním.

To snižuje počet ručních kroků při přípravě stroje. Bez opakovaného fyzického testu ale netvrdíme, jak konzistentně automatika funguje po stovkách hodin provozu ani zda je spolehlivější než konkurenční řešení.

## Kamera, síť a ovládání

V komoře je kamera pro vzdálené sledování a časosběr. Výrobce uvádí dual-band Wi-Fi a síťový přenos souborů; na stroji je 4,3\" kapacitní dotykový displej.

Síťové funkce a software patří k částem produktu, které se mohou firmwarem měnit rychleji než mechanika. Pokud je pro vás zásadní čistě lokální provoz, API nebo konkrétní slicer, ověřte aktuální stav před nákupem místo spoléhání na starší screenshoty a recenze.

## Filtrace není totéž co laboratorně ověřené čištění vzduchu

Centauri Carbon má podle ELEGOO vestavěný vzduchový filtr. Samotná přítomnost filtru ale nedokazuje konkrétní účinnost pro VOC nebo ultrajemné částice. Bez nezávislého měření proto nepřevádíme marketingové tvrzení o filtraci na zdravotní verdikt.

## Kdy dává Centauri Carbon smysl

Dává smysl zařadit ji do užšího výběru, pokud chcete uzavřenou CoreXY, plánujete vedle PLA/PETG také ABS, ASA nebo vybrané kompozity, chcete automatickou kalibraci a kameru a pracovní prostor kolem 256 mm vám stačí.

Naopak před nákupem porovnejte alternativy, pokud je pro vás klíčový konkrétní vícebarevný ekosystém, otevřený firmware, přesně definované lokální API, aktivně vyhřívaná komora nebo servisní síť v ČR/SR.

## Centauri Carbon vs. Bambu Lab P1S

Oba stroje jsou uzavřené CoreXY podobné velikostní třídy a oba mají nominální pracovní prostor 256 mm v každé ose. Rozhodnutí proto nedává smysl stavět jen na objemu nebo marketingové maximální rychlosti.

U P1S je důležitým rozhodovacím bodem ekosystém AMS. U Centauri Carbon je potřeba posuzovat vícebarevný workflow podle aktuální nabídky ELEGOO. Podívejte se také na náš [zdrojovaný profil Bambu Lab P1S](/recenze/bambu-p1s/).

## Centauri Carbon vs. Prusa CORE One+

[Prusa CORE One+](/recenze/prusa-core-one/) představuje jiný ekosystém a servisní filozofii. Vedle materiálů a pracovního prostoru má smysl porovnat dostupnost dílů, dokumentaci, slicer, lokální workflow a servis. Bez stejného fyzického protokolu První Vrstvy nevyhlašujeme vítěze podle katalogových čísel.

## Co bez vlastního testu netvrdíme

Z dokumentace výrobce nelze poctivě odvodit:

- skutečnou hlučnost v běžném režimu,
- spotřebu při konkrétním benchmarku,
- rozměrovou přesnost opakovaných dílů,
- reálný čas stejného modelu proti konkurenci,
- teplotní stabilitu komory při dlouhém tisku,
- dlouhodobou poruchovost a servisní zkušenost,
- spolehlivost první vrstvy po stovkách tiskových hodin.

Tyto body patří až do skutečné recenze s měřením. Do té doby je nebudeme nahrazovat dojmem ani přebírat marketingové formulace jako vlastní závěr.

## Co ověřit před nákupem

1. Jaké materiály budete tisknout většinu času.
2. Zda potřebujete pasivně uzavřenou, nebo aktivně vyhřívanou komoru.
3. Dostupnost spotřebních a servisních dílů v ČR/SR.
4. Požadovaný slicer a způsob lokálního/síťového ovládání.
5. Potřebu vícebarevného nebo multi-material tisku.
6. Aktuální cenu a dostupnost — cenu do statického profilu nezapisujeme bez spolehlivého CZ/SK feedu.

## Zdroje a metodika

Technické údaje jsou převzaté z aktuální oficiální produktové stránky **ELEGOO Centauri Carbon**, ověřené 4. 10. 2026. Marketingová tvrzení výrobce nepovažujeme za vlastní měření. Samostatný [katalogový profil Centauri Carbon](/stroje/elegoo-centauri-carbon/) obsahuje další kontext k výbavě a rozhodování.

**Shrnutí:** Centauri Carbon je podle specifikací zajímavá hlavně jako uzavřená CoreXY pro uživatele, kteří chtějí vedle běžných filamentů pracovat i s náročnějšími nebo abrazivními materiály. O tom, zda je v praxi lepší než P1S, CORE One+ nebo jiná alternativa, ale rozhodne až srovnatelný fyzický test — ne tabulka maximálních hodnot.