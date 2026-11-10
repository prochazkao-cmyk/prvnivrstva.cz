# První Vrstva — obsahový sprint „dílna, ne AI magazín“

## Cíl

Během jednoho AI pracovního bloku připravit pět původních českých článků, které mají čtenáři prakticky pomoct a současně budovat komunitu kolem První Vrstvy.

Neimitujeme jeden cizí článek, nepřekládáme All3DP ani jiný web a nevymýšlíme fyzické testy. Každý text vzniká z více zdrojů, technického kontextu a zkušeností, které lze férově označit.

Pracovní tón: člověk z dílny, který umí vysvětlit proč. Krátké věty, konkrétní situace, žádná SEO omáčka a žádné „v dnešní době 3D tisku“.

## Povinné redakční pravidlo

Každý draft musí před publikací odpovědět na čtyři otázky:

1. Co v textu pochází z dokumentace nebo veřejného zdroje?
2. Co je redakční interpretace?
3. Co je skutečná zkušenost, kterou umíme obhájit?
4. Tvrdíme někde, že jsme něco testovali nebo změřili, aniž bychom to opravdu udělali?

Pokud je odpověď na bod 4 ano, text se vrací k přepsání.

Pro články bez vlastního fyzického testu používat:
- `contentMode: "zdrojovany-profil"` nebo `redakcni`,
- `evidence: "vyrobce"`, `redakce` nebo `kombinace`,
- stručný `sourceNote`.

## 1. PLA vs. PLA+: kdy příplatek dává smysl a kdy je to jen nálepka

**Úkol čtenáře:** rozhodnout se mezi dvěma cívkami, ne naučit se marketingové definice.

**Hook:** PLA+ není jednotný technický standard. Dvě značky mohou pod stejným názvem prodávat směsi s odlišnými vlastnostmi.

**Osnova:**
- rychlá odpověď nahoře,
- proč „PLA+“ není jedna přesně definovaná receptura,
- houževnatost vs. tuhost vs. tisknutelnost — co si neplést,
- teplota, chlazení a adheze: proč nepřebírat profil naslepo,
- kdy má smysl připlatit,
- kdy obyčejné kvalitní PLA stačí,
- checklist před nákupem,
- závěr „kup podle datasheetu a použití, ne podle plusu v názvu“.

**Zdroje:** datasheety 3–4 výrobců, technické dokumentace filamentů, případně materiálové listy. Sekundární magazíny pouze pro ideaci témat.

**Vizuál:** jednoduchá redakční mapa „detail / houževnatost / teplota / cena“, nikoli falešná fotografie testovacích vzorků.

**Nesmí zaznít:** „PLA+ je o X % pevnější“ bez konkrétního produktu a měření.

## 2. Proč dvě barvy stejného filamentu nemusí tisknout úplně stejně

**Úkol čtenáře:** pochopit, proč změna barvy může vyžadovat drobnou korekci profilu.

**Hook:** pigment a další přísady nejsou jen kosmetika. Mohou ovlivnit optiku, tepelnou odezvu i chování taveniny — ale velikost rozdílu je závislá na konkrétní receptuře.

**Osnova:**
- co barvu v polymeru vytváří,
- proč nejde paušálně tvrdit „černá potřebuje X °C navíc“,
- jak si doma ověřit rozdíl bez pseudo-laboratoře,
- stejný model + stejný profil + jedna změna,
- co sledovat: flow, povrch, bridging, první vrstvu,
- kdy profil vůbec neměnit,
- mini-checklist po výměně barvy.

**Zdroje:** materiálové dokumentace výrobců, obecné polymerní zdroje k pigmentům, technické poznámky výrobců filamentů.

**Vizuál:** schéma „stejný polymer ≠ nutně stejná směs“.

**Nesmí zaznít:** univerzální tabulka teplot podle barev, pokud ji nepodporují konkrétní data.

## 3. Mokrý filament: co voda opravdu dělá a kdy sušení pomůže

Na webu už je kratší poradna `/rady-a-tipy/vlhky-filament/`. Tento text nemá být duplikát, ale hlubší článek nebo zásadní rozšíření stávajícího.

**Úkol čtenáře:** rozlišit vlhkost od špatné retrakce, flow nebo mechanického problému.

**Osnova:**
- hygroskopičnost není u všech polymerů stejná,
- co se děje v hotendu,
- slyšitelné a viditelné symptomy,
- PETG / TPU / PA / PVA vs. PLA,
- bezpečné sušení: proč datasheet konkrétní cívky vyhrává nad tabulkou z internetu,
- A/B postup před a po sušení,
- skladování po vysušení,
- kdy sušení pravděpodobně problém nevyřeší.

**Zdroje:** výrobci filamentů, materiálové listy, doporučení výrobců tiskáren.

**Vizuál:** diagnostický strom „prská → usušit → stejný test → lepší / stejné“.

## 4. Tree / organic supports vs. klasické podpěry: co vybrat podle geometrie

**Úkol čtenáře:** zvolit typ podpory podle modelu místo slepého používání jednoho presetu.

**Osnova:**
- co se pod názvem tree/organic support myslí v různých slicerech,
- organické tvary a figurky,
- rovné technické plochy,
- kontakt s modelem, stabilita a spotřeba,
- proč méně materiálu nemusí automaticky znamenat rychlejší nebo lepší tisk,
- 4 modelové situace: figurka, horizontální otvor, velká deska, mechanický díl,
- konkrétní rozhodovací tabulka.

**Zdroje:** dokumentace PrusaSlicer / OrcaSlicer / Bambu Studio podle aktuální implementace.

**Vizuál:** čtyři siluety modelů s doporučenou strategií. Schéma, ne falešný „náš test“.

## 5. Levný filament není vždy levný: skutečné náklady cívky

**Úkol čtenáře:** přestat porovnávat pouze cenu za kilogram.

**Hook:** rozdíl 100 Kč na cívce zmizí při jediném zkaženém delším tisku — ale nelze tvrdit, že dražší filament automaticky znamená méně zmetků.

**Osnova:**
- cena za kg je jen vstup,
- tolerance průměru a konzistence — co výrobce skutečně deklaruje,
- sušení, skladování a čas obsluhy,
- zmetek jako náklad materiálu + stroje + času,
- jak si vést jednoduchý vlastní záznam,
- kdy levná cívka dává perfektní smysl,
- kdy je konzistence důležitější než stokoruna.

**Zdroje:** datasheety, deklarované tolerance, naše kalkulačka ceny tisku; žádné neověřené žebříčky značek.

**Vizuál:** rozpad nákladu jednoho 8hodinového zmetku. Čísla buď uživatelský vstup v kalkulačce, nebo jasně označený modelový příklad.

## Styl textu

Preferovat:
- „Pokud se po sušení nic nezmění, vraťte vlhkost níž v seznamu podezřelých.“
- „Na krabičce může být stejné PLA. V receptuře už stejné být nemusí.“
- „Neměňte pět parametrů najednou. Pak nevíte, co pomohlo.“

Vyhodit:
- „Pojďme se podívat…“
- „Ve světě 3D tisku…“
- „Ať už jste začátečník nebo pokročilý…“
- „Revoluční“, „game changer“, „dokonalý“, pokud nejde o citaci.
- odstavce, které pouze opakují nadpis.

## Obrazový plán

Každý článek potřebuje minimálně:
- 1 hlavní vizuál,
- 1 rozhodovací schéma nebo annotated image,
- 1 praktický checklist.

Pořadí zdrojů obrázků:
1. vlastní fotka, pokud už existuje,
2. oprávněný press/media materiál,
3. licencovaný obrázek,
4. jasně ilustrační schéma/AI vizualizace.

AI obrázek nesmí předstírat výsledek našeho fyzického testu.

## Komunitní vrstva

Na konci relevantních článků přidat krátkou výzvu:

> Máš stejný problém jinak? Pošli fotku, model tiskárny, materiál a co už jsi zkusil na redakce@prvnivrstva.cz. Když z toho vznikne obecně užitečný postup, doplníme článek.

Cílem není diskusní fórum od prvního dne. Cílem je sbírat konkrétní případy, které dávají redakci témata a postupně vytvoří vlastní datovou vrstvu.

## Pořadí zpracování

1. PLA vs. PLA+
2. Barvy stejného filamentu
3. Mokrý filament — rozšíření existujícího textu
4. Tree / organic supports
5. Skutečné náklady levného filamentu

První dva texty jsou ideální pro rychlý start: mají široké publikum, nevyžadují předstíraný fyzický test a lze je postavit na více technických zdrojích.
