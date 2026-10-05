---
title: "Bambu Lab P1S: profil tiskárny, parametry a srovnání s P2S"
description: "Zdrojovaný profil Bambu Lab P1S: 256mm tiskový prostor, 300 °C hotend, uzavřená CoreXY konstrukce, materiály, kamera a praktické srovnání s P2S."
publishedAt: 2026-10-04
brand: "Bambu Lab"
technology: "FDM"
tags:
  - "Bambu Lab"
  - "P1S"
  - "P2S"
  - "FDM"
  - "AMS"
---

Bambu Lab P1S je uzavřená CoreXY FDM tiskárna s tiskovým objemem 256 × 256 × 256 mm. V nabídce Bambu Lab představuje starší generaci P Series vedle novější P2S. Výrobce při uvedení P2S výslovně uvedl, že P1S zůstává v nabídce a bude nadále podporovaný.

Tento profil není vlastní fyzický test První Vrstvy. Parametry níže vycházejí z aktuální dokumentace výrobce; nevytváříme z nich vlastní benchmarky, měření hlučnosti, spolehlivosti ani redakční skóre.

> **Rozhodujete se mezi P1S a novější P2S?** Přejděte na [zdrojované srovnání Bambu Lab P1S vs. P2S](/clanky/bambu-p1s-vs-p2s/), které rozebírá rozdíly v extruderu, kalibraci průtoku, airflow, kameře, displeji a hotendu bez vymyšlených benchmarků.

> **Rozhodujete se mezi otevřenou A1 a uzavřenou P1S?** Pokračujte na [Bambu Lab A1 vs. P1S: co je důležitější než papírová rychlost](/clanky/bambu-a1-vs-p1s/).

## Nejdůležitější parametry

| Parametr | Bambu Lab P1S |
|---|---|
| Technologie | FDM / CoreXY |
| Tiskový objem | 256 × 256 × 256 mm |
| Hotend | all-metal |
| Maximální teplota hotendu | 300 °C |
| Maximální teplota podložky | 100 °C |
| Dodávaná tryska | 0,4 mm nerezová |
| Volitelné průměry trysek | 0,2 / 0,6 / 0,8 mm |
| Filament | 1,75 mm |
| Maximální rychlost pohybu toolheadu | 500 mm/s podle výrobce |
| Maximální akcelerace toolheadu | 20 m/s² podle výrobce |
| Kamera | 1280 × 720 / 0,5 fps, timelapse |
| Filament run-out senzor | ano |
| Obnova po výpadku napájení | ano |
| Filtr | aktivní uhlíkový |

Rychlost a akcelerace v tabulce jsou maximální specifikace výrobce, nikoli příslib stejné rychlosti pro každý model a materiál.

## Co P1S konstrukčně nabízí

P1S má uzavřenou skříň z plastu a skla na ocelovém šasi. Uzavření je prakticky relevantní zejména tehdy, když chcete omezit průvan a teplotní změny kolem výtisku. Samotná uzavřená skříň ale není totéž jako aktivně vyhřívaná komora.

Výrobce uvádí jako ideální materiály PLA, PETG, TPU, ABS, ASA, PVA a PET. PA a PC označuje jako použitelné. U polymerů vyztužených uhlíkovými nebo skelnými vlákny dokumentace P1S uvádí „Not Recommended“ v základní konfiguraci. Proto je lepší před nákupem pro technické kompozity ověřit aktuální doporučení výrobce, vhodnou trysku a extruderové díly, než vyvozovat kompatibilitu jen z maximální teploty hotendu.

Právě uzavřená konstrukce je jeden z hlavních rozhodovacích rozdílů proti [Bambu Lab A1](/tiskarny/bambu-lab-a1/). Pokud vybíráte mezi těmito dvěma kategoriemi, podrobněji je rozebírá [srovnání A1 vs. P1S](/clanky/bambu-a1-vs-p1s/).

## Kamera: užitečný dohled, ale starší generace

Integrovaná kamera podle specifikace výrobce pracuje v rozlišení 1280 × 720 při 0,5 fps a podporuje timelapse. Je tedy vhodná pro základní vzdálenou kontrolu stavu tisku, ale parametrově nejde o plynulý high-rate dohled novější P2S.

Pokud je pro vás vzdálené sledování jedna z hlavních funkcí, patří kamera mezi nejvýraznější praktické rozdíly, které má smysl před nákupem porovnat.

## Chlazení a filtrace

P1S má řízené ventilátory hotendu, dílu, řídicí desky a komory, pomocný ventilátor chlazení dílu a filtr s aktivním uhlím. To z ní dělá jinou kategorii než otevřená [Bambu Lab A1](/tiskarny/bambu-lab-a1/).

Filtr ale není důvod tvrdit, že tisk všech materiálů je bez emisí nebo že není potřeba řešit větrání místnosti. Takové tvrzení z technické specifikace výrobce nevyplývá.

## P1S vs. P2S

| Oblast | P1S | P2S |
|---|---|---|
| Tiskový objem | 256 × 256 × 256 mm | 256 × 256 × 256 mm |
| Max. hotend | 300 °C | 300 °C |
| Max. podložka | 100 °C | 110 °C |
| Kamera | 720p / 0,5 fps | 1080p high-rate podle výrobce |
| Ovládání | jednodušší panel | 5″ dotykový displej |
| Extruder | konstrukce P1 Series | PMSM servo extruder |
| Flow dynamics | bez nové P2S senzorové architektury | automatická senzorová kalibrace |
| Airflow | konvenční systém P1S | Adaptive Airflow |
| Hotend | starší servisní konstrukce | quick-swap sestava |

Podrobný profil novějšího modelu najdete na stránce [Bambu Lab P2S](/tiskarny/bambu-lab-p2s/). Pokud chcete místo katalogových parametrů rovnou rozhodnout mezi generacemi, pokračujte na [P1S vs. P2S: kdy dává smysl novější generace](/clanky/bambu-p1s-vs-p2s/).

P2S tedy nepřidává větší tiskový prostor ani vyšší maximální teplotu hotendu. Generační rozdíl je především v extruderu, automatizaci flow, airflow, kameře, displeji a konstrukci výměny hotendu. To je užitečnější vodítko než jednoduché tvrzení, že novější model musí být automaticky lepší pro každého.

## P1S a AMS

P1S podporuje ekosystém AMS pro automatické podávání a přepínání filamentů. Vícebarevný tisk ale podle geometrie modelu znamená další výměny materiálu a purge, takže samotná podpora AMS není automaticky argumentem pro jeho nákup.

Pro převážně jednobarevné funkční díly může P1S fungovat i bez AMS. Pokud chcete více barev nebo automatickou práci s více cívkami, porovnejte konkrétní generaci AMS a její kompatibilitu s aktuální konfigurací tiskárny.

## Pro koho P1S dává smysl

**Relevantní kandidát je pro:**

- uživatele, který chce uzavřenou CoreXY tiskárnu s prostorem 256 mm,
- tisk PLA/PETG i materiálů, kterým prospívá stabilnější prostředí uzavřené skříně,
- uživatele, kterému stačí jednodušší displej a základní kamera,
- zájemce o ekosystém Bambu Lab a AMS,
- situaci, kdy P1S dává proti P2S smysl podle aktuální nabídky a skutečně potřebných funkcí.

**Jinou kategorii bych porovnal, pokud:**

- potřebujete větší tiskový prostor než 256 mm,
- vyžadujete aktivně vyhřívanou komoru,
- chcete modernější kamerový dohled, dotykové ovládání a automatizaci P2S,
- hlavním cílem jsou abrazivní kompozity a nechcete řešit vhodnou hardwarovou konfiguraci,
- stačí vám otevřená tiskárna primárně pro PLA/PETG.

## Co ověřit před nákupem

Nejdřív si sepište materiály, největší rozměr běžných modelů a potřebu AMS. Potom porovnejte P1S s [P2S](/tiskarny/bambu-lab-p2s/) podle funkcí, které opravdu využijete. Pro podrobné rozhodnutí mezi oběma generacemi použijte [zdrojovaného rádce P1S vs. P2S](/clanky/bambu-p1s-vs-p2s/). Pokud současně zvažujete levnější otevřenou variantu, použijte také [rozhodovacího rádce A1 vs. P1S](/clanky/bambu-a1-vs-p1s/). Aktuální cenu zde záměrně nefixujeme, protože se mění podle trhu, akcí a varianty.

Po zprovoznění tiskárny navazují naše průvodce [První vrstva nedrží](/rady-a-tipy/prvni-vrstva-nedrzi/), [Bezpečné čištění tiskové podložky](/rady-a-tipy/bezpecne-cisteni-build-plate/) a [Layer shift](/rady-a-tipy/layer-shift/).

## Zdroje a metodika

Primární zdroje:

- Bambu Lab — P1S Quick Start Guide / technická specifikace: https://cdn1.bambulab.com/documentation/quick-start-59b0cefdc0fc4/P1S/English%20version-Quick%20Start%20Guide%20for%20P1S.pdf
- Bambu Lab — „The Icon Redefined: meet the P2S“, 14. 10. 2025, použito pro generační srovnání a potvrzení pokračující podpory P1S: https://blog.bambulab.com/the-icon-redefined-meet-the-p2s-a-completely-reengineered-version-of-the-ultra-productive-p1-series/

Profil je redakční syntéza veřejné dokumentace výrobce. Neobsahuje vlastní fyzický test, smyšlené naměřené rychlosti, hlučnost, spotřebu, ceny ani skóre.
