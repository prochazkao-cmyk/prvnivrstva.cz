---
title: "Bambu Lab P2S: profil tiskárny, parametry a rozdíly proti P1S"
description: "Zdrojovaný profil Bambu Lab P2S: 256mm tiskový prostor, 300 °C hotend, 110 °C podložka, nový extruder, adaptivní airflow, AI detekce a praktické rozdíly proti P1S."
publishedAt: 2026-10-04
brand: "Bambu Lab"
technology: "FDM"
tags:
  - "Bambu Lab"
  - "P2S"
  - "P1S"
  - "FDM"
  - "AMS 2 Pro"
---

Bambu Lab P2S je uzavřená CoreXY FDM tiskárna, kterou výrobce uvedl jako modernizovaného nástupce koncepce P1 Series. Zachovává kompaktní tiskový objem 256 × 256 × 256 mm, ale přidává technologie převzaté z novější H Series: servo extruder, automatickou kalibraci dynamiky průtoku, adaptivní práci se vzduchem v komoře, modernější ovládání a pokročilejší kamerovou detekci chyb.

Tento profil není vlastní fyzický test První Vrstvy. Parametry a popis funkcí níže jsou redakční syntézou aktuálních materiálů výrobce; nevytváříme z nich vlastní benchmarky, měření hlučnosti ani skóre.

## Nejdůležitější parametry

| Parametr | Bambu Lab P2S |
|---|---|
| Technologie | FDM / CoreXY |
| Tiskový objem | 256 × 256 × 256 mm |
| Maximální teplota hotendu | 300 °C |
| Maximální teplota podložky | 110 °C |
| Dodávaná tryska | 0,4 mm |
| Podporované průměry trysek | 0,2 / 0,4 / 0,6 / 0,8 mm |
| Displej | 5″ dotykový |
| Kamera | 1080p, high-rate live view |
| Extruder | PMSM servo extruder |
| Filament cutter | vestavěný |
| Obnova po výpadku napájení | ano |

Hodnoty jsou specifikace výrobce, nikoli naše měření.

## Co se proti P1S skutečně změnilo

P2S není jen P1S s novým displejem. Výrobce uvádí nový PMSM servo extruder s maximální deklarovanou vytlačovací silou 8,5 kg a průběžným snímáním odporu a polohy. Smyslem této elektroniky je mimo jiné rozpoznávání prokluzu filamentu a ucpání. Číslo 8,5 kg zde uvádíme pouze jako parametr výrobce, nikoli jako námi ověřený výkon.

Další změnou je **Auto Flow Dynamics Calibration**. P2S používá senzor vířivých proudů pro automatickou kalibraci dynamiky průtoku. Pro uživatele je důležitá hlavně myšlenka: tiskárna má více kroků kalibrace řešit sama, místo aby byl výsledek závislý jen na ručně zvoleném profilu.

## Adaptivní airflow: PLA i teplejší materiály v uzavřené konstrukci

P2S má systém Adaptive Airflow. Pro nízkoteplotní materiály umí přivádět chladnější vzduch zvenku, zatímco v režimu zaměřeném na udržení tepla omezuje výměnu vzduchu a používá uhlíkový filtr.

To je podstatný konstrukční rozdíl proti otevřeným tiskárnám typu [Bambu Lab A1](/tiskarny/bambu-lab-a1/). Uzavřená konstrukce je vhodnější výchozí bod pro materiály citlivé na průvan a teplotní změny. Současně ale P2S nemá být zaměňována za tiskárnu s aktivně vyhřívanou komorou jen proto, že je uzavřená.

## AI detekce chyb: co výrobce slibuje a co z toho nevyvozujeme

Bambu Lab u P2S uvádí kamerovou detekci problémů jako spaghetti, blob na trysce a tisk „do vzduchu“. Systém také kontroluje shodu typu podložky a trysky s nastavením sliceru.

Je to funkce výrobce, nikoli náš důkaz bezchybného rozpoznávání. Bez vlastního opakovatelného testu proto neuvádíme procento úspěšnosti, počet zachráněných tisků ani tvrzení, že kamera zachytí každou chybu.

## Kamera a ovládání

P2S používá 5″ dotykový displej s druhou generací uživatelského rozhraní Bambu Lab. Kamera má podle výrobce 1080p obraz a vyšší snímkovou frekvenci pro vzdálené sledování a timelapse.

Pro srovnání: dokumentace P1S uvádí nízkofrekvenční kameru 1280 × 720 při 0,5 fps. Právě ovládání a vzdálený dohled tak patří mezi nejčitelnější generační změny, aniž bychom k tomu potřebovali vymýšlet subjektivní skóre.

## Tryska a servis

P2S používá quick-swap hotend, u kterého výrobce popisuje výměnu celé sestavy trysky a chladiče jedním zajišťovacím mechanismem bez odpojování kabeláže. Standard je 0,4 mm; výrobce uvádí podporu 0,2, 0,6 a 0,8 mm.

Pro uživatele, který střídá jemné detaily a rychlejší tisk větších funkčních dílů, je snadnější výměna průměru trysky prakticky relevantnější než samotný marketingový údaj o maximální rychlosti stroje.

## P2S vs. P1S

| Oblast | P2S | P1S |
|---|---|---|
| Tiskový objem | 256 × 256 × 256 mm | 256 × 256 × 256 mm |
| Max. hotend | 300 °C | 300 °C |
| Max. podložka | 110 °C | 100 °C |
| Ovládání | 5″ dotykový displej | jednodušší ovládací panel |
| Kamera | 1080p high-rate | 720p / 0,5 fps podle specifikace výrobce |
| Extruder | PMSM servo + monitoring | klasická konstrukce P1 Series |
| Flow dynamics | automatická senzorová kalibrace | bez nové P2S senzorové architektury |
| Airflow | adaptivní | konvenční chlazení P1S |
| Hotend | quick-swap sestava | starší konstrukce P1S |

P1S tím automaticky nepřestává dávat smysl. Bambu Lab při uvedení P2S výslovně uvedl, že P1S zůstává v nabídce a podporovaný. Výběr proto není „nový model vždy vítězí“, ale otázka toho, zda využijete komfortnější ovládání, kameru, novou extruzi a automatizaci. Pro opačný pohled a kompletní specifikaci starší generace pokračujte na [samostatný profil Bambu Lab P1S](/tiskarny/bambu-lab-p1s/).

## P2S a AMS 2 Pro

P2S Combo výrobce dodává s AMS 2 Pro. Vedle automatického přepínání filamentů AMS 2 Pro přidává aktivní sušení a odvětrávání. Vícebarevný tisk ale stále znamená více výměn materiálu a podle modelu také odpad při proplachování trysky.

Pokud tisknete převážně jednobarevné funkční díly, není AMS podmínkou smysluplného použití P2S. Pokud naopak chcete barvy, automatickou správu více cívek nebo sušení v rámci ekosystému, Combo je relevantní varianta k porovnání.

## Pro koho P2S dává smysl

**Silný kandidát je pro:**

- uživatele, který chce uzavřenou CoreXY tiskárnu v kompaktní 256mm třídě,
- někoho, kdo chce modernější automatizaci než nabízí P1S,
- uživatele, který využije lepší kamerový dohled a dotykové ovládání,
- provoz, kde je důležitá snadná výměna hotendu,
- zájemce o AMS 2 Pro a vícebarevný ekosystém Bambu Lab.

**Před nákupem bych porovnal jinou kategorii, pokud:**

- potřebujete větší tiskový prostor než 256 mm,
- potřebujete aktivně vyhřívanou komoru pro náročnější technické materiály,
- nový extruder, kamera a automatizace pro vás nemají praktickou hodnotu a výhodněji seženete P1S,
- hledáte otevřenou tiskárnu primárně pro PLA/PETG a prioritou je jednoduchost a menší investice.

## Co ověřit před nákupem

Nejdřív si určete materiály a velikost modelů. Potom rozhodujte, zda využijete AMS a zda pro vás mají cenu nové automatické funkce P2S. Pokud vybíráte mezi P1S a P2S, nesrovnávejte jen maximální teplotu hotendu: tiskový objem i 300 °C maximum jsou podobné, generační posun je hlavně v extruzi, senzorech, airflow, kameře, displeji a servisovatelnosti hotendu.

Po koupi doporučujeme navázat průvodci [První vrstva nedrží](/rady-a-tipy/prvni-vrstva-nedrzi/), [Bezpečné čištění tiskové podložky](/rady-a-tipy/bezpecne-cisteni-build-plate/) a [Layer shift](/rady-a-tipy/layer-shift/).

## Zdroje a metodika

Primární zdroje:

- Bambu Lab — „The Icon Redefined: meet the P2S“, oficiální představení P2S, 14. 10. 2025: https://blog.bambulab.com/the-icon-redefined-meet-the-p2s-a-completely-reengineered-version-of-the-ultra-productive-p1-series/
- Bambu Lab — P1S Quick Start Guide a technická specifikace pro srovnání: https://cdn1.bambulab.com/documentation/quick-start-59b0cefdc0fc4/P1S/English%20version-Quick%20Start%20Guide%20for%20P1S.pdf

Profil je redakční syntéza veřejné dokumentace výrobce. Neobsahuje vlastní fyzický test, smyšlené naměřené rychlosti, hlučnost, spotřebu, ceny ani redakční skóre.
