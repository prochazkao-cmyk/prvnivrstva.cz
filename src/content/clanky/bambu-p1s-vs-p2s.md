---
title: "Bambu Lab P1S vs. P2S: kdy dává smysl novější generace"
description: "Zdrojované srovnání Bambu Lab P1S a P2S: stejný tiskový objem, ale rozdíly v extruderu, airflow, kameře, displeji, hotendu a automatizaci."
publishedAt: 2026-10-05
reviewedAt: 2026-10-05
level: "začátečník"
technologies:
  - "FDM"
tags:
  - "bambu"
  - "p1s"
  - "p2s"
  - "srovnani"
  - "nakupni-radce"
---

Bambu Lab P1S a P2S patří do stejné kompaktní třídy uzavřených CoreXY tiskáren. Na papíře mají obě pracovní prostor **256 × 256 × 256 mm** a maximální teplotu hotendu **300 °C**. Právě proto ale není dobré rozhodovat jen podle dvou nejviditelnějších čísel. P2S přidává novější extruder, automatickou kalibraci dynamiky průtoku, adaptivní práci se vzduchem, modernější kameru, dotykové ovládání a jednodušší výměnu hotendu.

Toto není vlastní fyzický test ani bodovací žebříček. Srovnání vychází z aktuálních primárních materiálů Bambu Lab. Výrobní specifikace uvádíme jako tvrzení výrobce, ne jako naše naměřené hodnoty.

## Nejkratší odpověď

**P1S dává smysl držet v užším výběru**, pokud chcete osvědčenou uzavřenou CoreXY platformu, 256mm pracovní prostor a novější komfortní funkce P2S pro vás nejsou důvodem ke změně modelu.

**P2S stojí za užší výběr**, pokud využijete novější automatizaci: PMSM servo extruder s monitoringem, Auto Flow Dynamics Calibration, Adaptive Airflow, 1080p high-rate kameru, 5″ dotykový displej a quick-swap hotend.

Neříkáme, že novější model je automaticky lepší nákup. Bambu Lab navíc v únoru 2026 výslovně uvedl, že P1S pokračuje ve výrobě a prodeji.

## P1S a P2S vedle sebe

| Oblast | Bambu Lab P1S | Bambu Lab P2S |
| --- | --- | --- |
| Konstrukce | uzavřená CoreXY | uzavřená CoreXY |
| Pracovní prostor | 256 × 256 × 256 mm | 256 × 256 × 256 mm |
| Max. hotend | 300 °C | 300 °C |
| Max. podložka | 100 °C | 110 °C |
| Ovládání | 2,7″ 192 × 64, tlačítka | 5″ dotykový displej, 2nd-Gen UI |
| Kamera | 1280 × 720 / 0,5 fps | 1080p high-rate live view |
| Extruder | konstrukce P1 Series | PMSM servo extruder s monitoringem |
| Flow dynamics | bez nové P2S senzorové architektury | automatická kalibrace přes eddy-current senzor |
| Práce se vzduchem | konvenční chlazení P1S | Adaptive Airflow |
| Hotend | starší konstrukce P1S | quick-swap sestava bez odpojování kabeláže |
| Multimaterial | AMS | P2S Combo s AMS 2 Pro |

Tabulka není skóre. Má ukázat, kde se generace skutečně liší a kde naopak zůstávají základní parametry podobné.

## 1. Tiskový prostor: P2S není větší P1S

Oba modely mají podle výrobce stejný pracovní prostor **256 × 256 × 256 mm**. Přechodem na P2S tedy nezískáte větší maximální model. Pokud je pro vás 256 mm limitující už dnes, generační upgrade v rámci této dvojice základní problém neřeší.

Stejně tak oba stroje uvádějí maximum hotendu 300 °C. Samotná maximální teplota proto není argument, který by mezi nimi rozhodoval.

## 2. Extruder a kalibrace: tady je P2S technicky jiná

Bambu Lab u P2S uvádí **PMSM servo extruder** s maximální deklarovanou vytlačovací silou 8,5 kg. Elektronika podle výrobce sleduje odpor a polohu a má pomáhat rozpoznat prokluz filamentu a ucpání.

Číslo 8,5 kg nepovažujeme za vlastní benchmark První Vrstvy. Je to specifikace výrobce a bez stejného laboratorního protokolu ji nepřevádíme na tvrzení typu „o tolik procent lepší tisk“.

P2S navíc používá **Auto Flow Dynamics Calibration** s eddy-current senzorem. Praktický rozdíl je v míře automatizace: novější stroj má dynamiku průtoku kalibrovat senzorově bez toho, aby uživatel spoléhal jen na ručně zvolený profil.

## 3. Adaptive Airflow: enclosure není celý příběh

P1S i P2S jsou uzavřené. P2S ale přidává **Adaptive Airflow System**. Výrobce popisuje dva důležité režimy: přívod chladnějšího vzduchu zvenku pro nízkoteplotní filamenty a režim, který omezuje výměnu vzduchu, aby v komoře zůstalo více tepla, přičemž interní vzduch prochází uhlíkovým filtrem.

To je konstrukčně zajímavější rozdíl než prosté „obě mají skříň“. Zároveň P2S neoznačujeme za tiskárnu s aktivně vyhřívanou komorou, protože uzavřená a řízeně větraná komora není totéž jako aktivní ohřev komory.

## 4. Kamera: z kontroly stavu k výrazně použitelnějšímu dohledu

Oficiální dokumentace P1S uvádí kameru **1280 × 720 při 0,5 fps**. Je použitelná pro základní vzdálenou kontrolu a timelapse, ale nízká snímková frekvence je zřejmým limitem.

P2S má podle výrobce **1080p high-rate live view** a přidává kamerovou detekci problémů, například spaghetti, blobu na trysce nebo tisku do vzduchu. Systém má také kontrolovat shodu podložky a trysky s nastavením sliceru.

To neznamená, že garantovaně zachytí každou chybu. Bez vlastního opakovatelného testu neuvádíme procenta úspěšnosti AI detekce ani počet „zachráněných tisků“.

## 5. Displej a každodenní ovládání

P1S používá podle Quick Start Guide **2,7″ displej 192 × 64** a tlačítkové ovládání. P2S přechází na **5″ dotykový displej** a druhou generaci uživatelského rozhraní Bambu Lab.

Pro uživatele, který většinu úloh posílá z Bambu Studio nebo telefonu, nemusí být displej hlavním důvodem výměny funkční P1S. Při časté obsluze přímo u stroje je ale generační rozdíl zřetelný už ze specifikace rozhraní.

## 6. Quick-swap hotend: malá změna, která může být prakticky velká

P2S používá quick-swap konstrukci, kde se sestava trysky a chladiče uvolní jedním zajišťovacím mechanismem bez odpojování kabeláže. Pokud pravidelně střídáte 0,2mm trysku pro detail a větší průměr pro rychlejší funkční díly, servisní ergonomie může být důležitější než marketingové maximum rychlosti pohybu.

Standardní průměr P2S je 0,4 mm; výrobce uvádí podporu 0,2 / 0,6 / 0,8 mm. P1S má rovněž 0,4mm standard a stejné volitelné průměry, ale starší konstrukci hotendu.

## 7. P1S není po příchodu P2S automaticky mrtvá platforma

Při uvedení P2S v říjnu 2025 Bambu Lab výslovně napsal, že P1S nekončí. V únoru 2026 při oznámení konce P1P výrobce znovu uvedl, že **P1S pokračuje ve výrobě a prodeji** a nemá být v dohledné době vyřazena.

To je důležité pro nákupní rozhodnutí: P1S není v tomto srovnání historický model bez podpory. Je to stále aktivní produktová větev, zatímco P2S nabízí novější funkční architekturu.

## 8. AMS vs. AMS 2 Pro

P1S je spojená s původním AMS ekosystémem. P2S Combo výrobce dodává s **AMS 2 Pro**, které přidává aktivní sušení a odvětrávání. Pokud tisknete převážně jednobarevné díly, multimateriálový systém nemusí být důvodem pro volbu konkrétní tiskárny.

Pokud naopak chcete automatické přepínání více filamentů a současně vás zajímá integrované sušení v novější generaci ekosystému, je rozdíl mezi variantami relevantní. Před objednávkou je vhodné ověřit aktuální kompatibilitu konkrétní sestavy a příslušenství přímo u výrobce.

## Kdy bych nechal P1S v užším výběru

P1S má smysl dál zvažovat zejména tehdy, když:

- chcete uzavřenou CoreXY tiskárnu a 256mm prostor vám stačí,
- nepotřebujete 5″ dotykové ovládání ani high-rate kameru,
- novější senzorová kalibrace a servo extruder nejsou pro vaše workflow zásadní,
- už máte P1S a řešíte, zda generační komfort ospravedlní výměnu funkčního stroje,
- rozhodujete podle konkrétní konfigurace a aktuální nabídky, nikoli podle toho, že jeden model má vyšší číslo v názvu.

Podrobné parametry najdete ve [zdrojovaném profilu Bambu Lab P1S](/tiskarny/bambu-lab-p1s/).

## Kdy bych dal do užšího výběru P2S

P2S stojí za zvážení zejména tehdy, když:

- chcete novější automatickou kalibraci dynamiky průtoku,
- využijete monitoring servo extruderu,
- je pro vás důležitý kvalitnější vzdálený dohled a kamerová detekce chyb,
- často obsluhujete tiskárnu přímo přes displej,
- měníte průměry trysek a oceníte quick-swap hotend,
- chcete Adaptive Airflow nebo variantu Combo s AMS 2 Pro.

Kompletní kontext je ve [zdrojovaném profilu Bambu Lab P2S](/tiskarny/bambu-lab-p2s/).

## Co bych před objednávkou zkontroloval

Nejdřív si napište, co vám na P1S nebo obecně na starší generaci skutečně chybí. Pokud odpověď zní „větší tiskový prostor“, P2S problém neřeší. Pokud je odpovědí kamera, lokální ovládání, jednodušší výměna hotendu, novější extruze a vyšší míra automatizace, právě tam má P2S nejčitelnější rozdíly.

Aktuální cenu zde záměrně nefixujeme. Mění se podle trhu, akcí, regionu a varianty Combo. Smysluplné je proto porovnat cenu až ve chvíli, kdy víte, které z generačních funkcí opravdu využijete.

## Zdroje a metodika

Primární zdroje ověřené 5. 10. 2026:

- Bambu Lab — **The Icon Redefined: meet the P2S**, oficiální představení P2S z 14. 10. 2025: https://blog.bambulab.com/the-icon-redefined-meet-the-p2s-a-completely-reengineered-version-of-the-ultra-productive-p1-series/
- Bambu Lab — **P1S Quick Start Guide**, technické specifikace P1S: https://cdn1.bambulab.com/documentation/quick-start-59b0cefdc0fc4/P1S/English%20version-Quick%20Start%20Guide%20for%20P1S.pdf
- Bambu Lab — **A farewell to P1P**, stav produktové řady a pokračování P1S, 10. 2. 2026: https://blog.bambulab.com/a-farewell-to-p1p/

Článek je redakční syntéza primárních zdrojů výrobce. Neobsahuje vlastní fyzický test, smyšlené naměřené rychlosti, hlučnost, spotřebu, ceny ani redakční skóre.

**Praktický závěr:** P2S nepřináší větší tiskový prostor ani vyšší maximální teplotu hotendu. Její generační posun je hlavně v extruderu, senzorové automatizaci, airflow, kameře, ovládání a servisní ergonomii. Pokud právě tyto oblasti řeší váš problém, P2S má smysl porovnat. Pokud ne, samotné stáří P1S není podle současných informací výrobce důvodem k automatické výměně.
