---
title: "Uzavřená 3D tiskárna pro ASA a ABS: co opravdu potřebujete"
description: "Zdrojovaný nákupní rádce: proč je pro ASA a ABS důležitá stabilní komora, jak číst parametry výrobců a jak se liší P1S, CORE One+, K1C a Centauri Carbon."
publishedAt: 2026-09-30
updatedAt: 2026-10-04
reviewedAt: 2026-10-04
author: "Redakce První vrstvy"
draft: false
tags:
  - nákupní rádce
  - ASA
  - ABS
  - komora
  - CoreXY
level: "pokročilý"
contentMode: "zdrojovany-profil"
evidence: "vyrobce"
sourceNote: "Parametry tiskáren byly ověřeny 4. 10. 2026 v primárních materiálech Bambu Lab, Prusa Research, Creality a ELEGOO. Text není fyzický srovnávací test."
---

ASA a ABS jsou dobrý důvod, proč se při výběru FDM tiskárny přestat dívat jen na maximální rychlost. U větších dílů je důležitější **stabilní tepelné prostředí, dostatečně teplá podložka a správně zvolený hotend**. Uzavřený kryt pomáhá omezit prudké ochlazování výtisku, ale není totéž co aktivně řízená nebo vyhřívaná komora.

Tento rádce není žebříček vítězů ani náhrada fyzického testu. Porovnává ověřitelné konstrukční vlastnosti a údaje výrobců. Pokud řešíte konkrétní zvedání rohů, začněte také článkem [Warping u ABS/ASA: příčiny a checklist](/clanky/warping-u-abs-priciny-a-checklist/).

## Rychlá odpověď

Pro pravidelný tisk ASA/ABS hledejte především:

1. **uzavřený tiskový prostor**, který omezuje průvan a rychlé teplotní změny,
2. **vyhřívanou podložku** s teplotním rozsahem odpovídajícím profilu konkrétního filamentu,
3. **hotend s dostatečnou teplotní rezervou**,
4. rozumné možnosti **filtrace a větrání prostoru**, protože uzavřená tiskárna sama o sobě neznamená, že emise zmizely,
5. u CF/GF kompozitů navíc **otěruvzdornou trysku a vhodnou filamentovou cestu**.

## Uzavřená komora není automaticky vyhřívaná komora

Výrobci používají slovo „enclosed“ pro stroje s fyzickým krytem. Ten může teplo z podložky a hotendu uvnitř lépe udržet, ale z údaje „uzavřená tiskárna“ nelze automaticky odvodit konkrétní teplotu komory.

Pokud výrobce uvádí maximální nebo řízenou teplotu komory, je to podstatně přesnější údaj. Například Prusa u CORE One+ uvádí maximum komory 55 °C. U ostatních zde srovnávaných strojů proto konkrétní teplotu komory nepřidáváme, pokud ji primární specifikace jasně negarantuje.

## Čtyři aktuální konstrukce, které dávají smysl porovnat

| Tiskárna | Tiskový prostor | Max. tryska | Max. podložka | Co je důležité pro ASA/ABS |
| --- | --- | ---: | ---: | --- |
| [Bambu Lab P1S](/recenze/bambu-p1s/) | uzavřený | 300 °C | 100 °C | výrobce řadí ABS a ASA mezi podporované/ideální materiály; aktivní uhlíkový filtr |
| [Prusa CORE One+](/recenze/prusa-core-one/) | uzavřený, výrobce uvádí komoru do 55 °C | 290 °C | 120 °C | explicitně definovaná teplota komory; volitelná pokročilá filtrace |
| [Creality K1C](/stroje/creality-k1-k1c/) | uzavřený CoreXY | 300 °C | 100 °C | výrobce uvádí podporu ABS/ASA a také technických/kompozitních materiálů |
| [ELEGOO Centauri Carbon](/stroje/elegoo-centauri-carbon/) | plně uzavřený CoreXY | 320 °C | 110 °C | tvrzená ocel v trysce, zaměření i na CF filamenty, vestavěný filtr |

**Pozor:** tabulka neříká, že vyšší maximální teplota automaticky znamená lepší tisk. Jsou to limity deklarované výrobci, nikoli naše naměřené výsledky.

## Bambu Lab P1S: jednoduchý vstup do uzavřené CoreXY

Bambu Lab uvádí u P1S objem 256 × 256 × 256 mm, all-metal hotend s maximem 300 °C a podložku do 100 °C. V oficiální specifikaci jsou ABS a ASA mezi materiály označenými jako vhodné. P1S má uzavřené šasi a aktivní uhlíkový filtr.

Důležitá hranice se objeví u abrazivních kompozitů: standardní P1S má nerezovou trysku a výrobce u uhlíkovými či skelnými vlákny plněných polymerů uvádí „not recommended“. Pokud tedy vedle ASA plánujete často i CF/GF, nevybírejte jen podle toho, že je tiskárna uzavřená; ověřte i trysku a extruder.

## Prusa CORE One+: když chcete znát i teplotu komory

Prusa u CORE One+ uvádí 250 × 220 × 270 mm, hotend do 290 °C, podložku do 120 °C a maximální teplotu komory 55 °C. To je pro rozhodování užitečné, protože se nemusíme spokojit pouze s obecným označením „enclosed“.

Výrobce mezi pokročilými materiály uvádí ABS a ASA a nabízí volitelný Advanced Filtration System. CORE One+ proto dává smysl posuzovat hlavně tam, kde je tepelný režim komory důležitější než samotná marketingová rychlost stroje.

## Creality K1C: ASA/ABS plus důraz na kompozity

K1C je uzavřený CoreXY stroj. Creality uvádí hotend do 300 °C a podložku do 100 °C a mezi podporovanými materiály zmiňuje ABS, ASA, PA, PC i několik CF variant. Profil [Creality K1C](/stroje/creality-k1-k1c/) rozebírá konstrukci podrobněji.

Pro tento rádce je podstatné, že K1C kombinuje enclosure s filamentovou cestou zaměřenou i na abrazivnější materiály. To je jiný nákupní scénář než „chci pouze občas vytisknout ASA kryt“.

## ELEGOO Centauri Carbon: vyšší teplotní limit hotendu a CF zaměření

ELEGOO u Centauri Carbon uvádí plně uzavřenou komoru, 320 °C hotend, 110 °C podložku a mosazno-tvrzenou ocelovou trysku. Výrobce tiskárnu výslovně staví i pro filamenty vyztužené uhlíkovými vlákny a uvádí vestavěný vzduchový filtr.

To z ní nedělá automatického vítěze pro ASA. Znamená to ale, že při výběru stroje pro kombinaci **ASA/ABS + abrazivní kompozity** má smysl zahrnout [Centauri Carbon](/stroje/elegoo-centauri-carbon/) do užšího výběru.

## A co otevřená tiskárna?

Malé ABS/ASA díly lze za vhodných podmínek vytisknout i na otevřeném stroji, ale s rostoucí plochou dílu roste význam stabilního okolního prostředí. Pokud kupujete nový stroj právě kvůli pravidelnému ASA/ABS, enclosure je praktičtější výchozí bod než dodatečné řešení průvanu kolem otevřené tiskárny.

To neznamená, že enclosure opraví špatnou první vrstvu. Mastná podložka, nevhodný profil, geometrie dílu nebo špatně nastavená první vrstva mohou způsobit problém i v uzavřeném stroji. Praktický postup je v [checklistu warpingu](/clanky/warping-u-abs-priciny-a-checklist/) a v přehledu [adheze, PEI, brim a lepidlo](/rady-a-tipy/bed-adheze-glue-stick-pei-brim/).

## Pokud chcete tisknout CF/GF

Zkratka „CF“ nepopisuje jeden materiál. PLA-CF, PETG-CF, PA-CF nebo PC-CF mají rozdílné teplotní a sušicí požadavky. Společným tématem je abrazivita plniva: běžná měkká mosazná tryska se může opotřebovávat rychleji. Proto kontrolujte, co přesně výrobce tiskárny a trysky pro daný filament dovoluje.

U P1S je důležité výše zmíněné omezení standardní konfigurace pro CF/GF. K1C a Centauri Carbon naopak výrobci přímo prezentují i pro vybrané kompozity. U CORE One+ záleží na konkrétní trysce a materiálu; nespoléhejte na samotnou teplotu hotendu.

## Filtrace není náhrada větrání

Vestavěný filtr je užitečná vlastnost, ale z marketingového názvu filtru nelze odvodit nulové emise. Tiskárnu s ASA/ABS umístěte s ohledem na větrání místnosti a pokyny výrobce filamentu i stroje. Tento rádce proto neuděluje body za samotnou přítomnost filtru.

## Nákupní checklist

Před objednávkou si odpovězte:

- Budu tisknout ASA/ABS **občas**, nebo je to hlavní materiál?
- Jak velké a ploché díly budu tisknout?
- Uvádí výrobce jen enclosure, nebo i konkrétní teplotní režim komory?
- Stačí mi standardní polymery, nebo chci také CF/GF kompozity?
- Je osazená tryska vhodná pro abrazivní filament, který chci používat?
- Jaké jsou možnosti filtrace a jak budu větrat místnost?
- Je pro můj díl důležitější objem, servisovatelnost, workflow, nebo materiálová kompatibilita?

## Jak bych vybíral podle scénáře

**Chci hlavně běžné PLA/PETG a jen občas ASA:** neplaťte automaticky za nejvyšší teplotní limit. P1S, K1C i další uzavřené stroje mohou být konstrukčně relevantní; rozhodujte podle celého workflow a materiálů.

**ASA/ABS bude pravidelná pracovní náplň:** dávejte větší váhu stabilitě komory a jasně popsanému teplotnímu režimu. CORE One+ má výhodu v tom, že výrobce konkrétní maximální teplotu komory publikuje.

**Chci zároveň CF/GF:** kontrolujte především trysku, extruder a přesný seznam podporovaných filamentů. K1C a Centauri Carbon jsou v tomto směru výrobcem explicitně zaměřené na kompozity; standardní P1S má pro CF/GF v oficiální specifikaci omezení.

## Primární zdroje

- Bambu Lab — P1S Quick Start Guide / Specifications: https://cdn1.bambulab.com/documentation/quick-start-59b0cefdc0fc4/P1S/English%20version-Quick%20Start%20Guide%20for%20P1S.pdf
- Prusa Research — CORE One+ (Gen 2): https://www.prusa3d.com/product/prusa-core-one/
- Creality — K1C, oficiální produktové/specifikační materiály: https://www.creality.com/products/creality-k1c-3d-printer
- ELEGOO — Centauri Carbon: https://www.elegoo.com/products/centauri-carbon

Parametry a dostupné materiálové informace byly zkontrolovány **4. 10. 2026**. Výrobci mohou firmware, příslušenství a specifikace měnit; při nákupu proto znovu ověřte aktuální produktovou stránku.
