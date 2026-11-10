---
title: "Bambu Lab P2S: zdrojovaný produktový profil"
description: "Co přináší Bambu Lab P2S proti P1S a otevřené A1. Profil podle primárních zdrojů výrobce, bez předstírání vlastního testu."
publishedAt: 2026-10-04
author: "Ondřej Procházka"
draft: false
product: "Bambu Lab P2S"
tags:
  - Bambu Lab
  - P2S
  - produktový profil
  - CoreXY
level: "pokročilý"
technologies:
  - "FDM"
contentMode: "zdrojovany-profil"
evidence: "vyrobce"
note: "Zdrojovaný profil podle aktuálních oficiálních materiálů výrobce. Nejde o vlastní fyzický test První Vrstvy."
sourceNote: "Primární zdroj: Bambu Lab, The Icon Redefined: meet the P2S, 14. 10. 2025; ověřeno 4. 10. 2026."
---

Bambu Lab P2S je uzavřená CoreXY tiskárna, kterou výrobce představil jako přepracovaného nástupce úspěšné řady P1. Tohle není fyzická recenze První Vrstvy: profil odděluje ověřitelné specifikace a funkce výrobce od věcí, které lze poctivě hodnotit až po vlastním měření.

## Rychlá orientace

Podle Bambu Lab má P2S pracovní prostor **256 × 256 × 256 mm**, hotend do **300 °C** a vyhřívanou podložku do **110 °C**. Standardní tryska má 0,4 mm a podporované jsou také 0,2, 0,6 a 0,8 mm.

Proti P1S není hlavní změnou větší tiskový prostor. P2S zůstává ve stejné 256mm třídě, ale přebírá část novější techniky z generace H: **PMSM servo extruder**, automatickou kalibraci dynamiky toku, **Adaptive Airflow**, 5palcový dotykový displej, 1080p kameru, kamerovou detekci vybraných chyb a rychlovýměnný hotend.

## Co je na P2S skutečně nové

### Servo extruder a kontrola toku

Výrobce uvádí PMSM servo extruder s maximální vytlačovací silou až 8,5 kg a průběžným snímáním odporu a polohy. Součástí systému je také automatická kalibrace dynamiky toku pomocí vířivoproudého senzoru. To jsou technické vlastnosti deklarované výrobcem; bez společného benchmarku z nich neděláme vlastní závěr o přesnosti nebo kvalitě povrchu.

### Adaptive Airflow

P2S umí podle režimu pracovat s prouděním vzduchu v komoře. U PLA a dalších nízkoteplotních materiálů může přivádět chladnější vzduch zvenku, zatímco u materiálů citlivých na průvan má systém pomáhat teplo v uzavřené komoře udržet. Důležitá hranice: **Bambu Lab u P2S v tomto zdroji neuvádí aktivně vyhřívanou komoru**, proto ji tak neoznačujeme.

Pokud vybíráte stroj hlavně pro ASA nebo ABS, přečtěte si také [jak vybírat uzavřenou tiskárnu pro ASA a ABS](/clanky/nejlepsi-uzavrena-tiskarna-pro-asa-abs/) a [checklist proti warpingu](/clanky/warping-u-abs-priciny-a-checklist/).

### Kamera a automatická kontrola

Bambu Lab uvádí detekci spaghetti, blobu na trysce a tisku do vzduchu. Kamera zároveň kontroluje typ podložky a trysky proti nastavení sliceru. P2S má 1080p live view s vyšší snímkovou frekvencí. **Úspěšnost detekce ale bez vlastního testu nehodnotíme.**

### Rychlovýměnný hotend

Nový mechanismus uvolňuje sestavu trysky a chladiče jedním klipem bez odpojování kabeláže. Praktická výhoda závisí na tom, jak často měníte průměr trysky; pro běžného uživatele s jednou 0,4mm tryskou to nemusí být zásadní důvod k upgradu.

## P2S vs. P1S: kdy má upgrade smysl

P2S není „větší P1S“. Pracovní prostor zůstává 256 × 256 × 256 mm. Smysl upgradu proto stojí hlavně na novější automatizaci, displeji, extruderu, airflow, kameře a výměně hotendu.

Pokud už P1S máte a funguje vám, samotný seznam nových funkcí není důkaz, že potřebujete měnit tiskárnu. Pro rozhodnutí jsou důležitější konkrétní problémy vašeho workflow: chcete častěji měnit trysky, potřebujete lepší lokální ovládání na displeji, spoléháte na vzdálený dohled nebo řešíte širší mix materiálů?

Pro kontext si můžete otevřít také [zdrojovaný profil P1S](/recenze/bambu-p1s/).

## P2S vs. A1: nejde jen o rychlost

[A1](/recenze/bambu-lab-a1/) je otevřený bedslinger se stejným 256mm pracovním rozsahem v každé ose. P2S je uzavřená CoreXY. Pokud tisknete převážně PLA a PETG a nepotřebujete kryt, A1 může být jednodušší volba. Jestli chcete častěji tisknout materiály, kterým prospívá stabilnější uzavřené prostředí, konstrukce P2S je podstatnější argument než marketingové maximum rychlosti.

Podrobnější rozhodovací strom najdete v [A1 vs. P2S](/clanky/bambu-a1-vs-p2s/).

## AMS 2 Pro a vícebarevný tisk

P2S Combo výrobce nabízí s **AMS 2 Pro**. Bambu Lab u něj zdůrazňuje i funkci sušení filamentu. To ale nemění základní otázku: pokud vícebarevný nebo multi-material tisk nevyužijete, nekupujte Combo jen kvůli tomu, že je systém technicky zajímavý.

## Co bez fyzického testu netvrdíme

Bez vlastního kusu a jednotného protokolu První Vrstvy neuvádíme vlastní:

- hlučnost,
- spotřebu elektřiny,
- rozměrovou přesnost,
- reálnou rychlost stejných benchmarků,
- stabilitu teploty v komoře,
- úspěšnost kamerové detekce,
- dlouhodobou poruchovost,
- servisní zkušenost.

Stejně tak nepřidáváme číselné skóre ani vítězný verdikt, který by vypadal jako výsledek neprovedeného srovnávacího testu.

## Pro koho P2S dává smysl

**Zařaďte ji do užšího výběru, pokud** chcete uzavřenou 256mm CoreXY, používáte Bambu Studio / Bambu Handy, chcete modernější ovládání než u P1S a využijete automatizaci nebo AMS 2 Pro.

**Dívejte se i jinam, pokud** potřebujete větší tiskový prostor, aktivně vyhřívanou komoru, maximálně otevřený firmware nebo je pro vás rozhodující lokální servis a dostupnost konkrétních dílů v ČR/SR.

## Zdroje

Primární podklad: **Bambu Lab — “The Icon Redefined: meet the P2S”**, zveřejněno 14. 10. 2025, ověřeno 4. 10. 2026. Z něj pocházejí zde uvedené technické parametry a popisy funkcí. Marketingová tvrzení výrobce nepřebíráme jako vlastní měření.

**Shrnutí:** P2S je modernizovaná uzavřená 256mm CoreXY, ne větší náhrada P1S. Největší posun je v extruderu, automatizaci, airflow, kameře, displeji a obsluze hotendu. Jestli jsou tyto změny důvodem ke koupi nebo upgradu, závisí na vašem workflow; vlastní verdikt o kvalitě, hlučnosti či spolehlivosti bude dávat smysl až po fyzickém testu.
