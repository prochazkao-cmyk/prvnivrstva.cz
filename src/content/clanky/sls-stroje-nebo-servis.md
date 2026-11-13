---
title: "SLS: kdy dává smysl stroj a kdy zakázka"
description: "Prášek a laser místo cívky. Co SLS umí, proč je kolem stroje víc práce než kolem FDM, a kdy jeden díl patří do zakázkového prachu místo do nákupu stroje. Bez cen a bez vymyšlených parametrů."
publishedAt: 2026-10-03
updatedAt: 2026-11-10
reviewedAt: 2026-10-03
author: "Redakce První vrstvy"
tags:
  - průvodce
  - SLS
  - zakázkový tisk
  - nylon
level: "pokročilý"
technologies:
  - "SLS"
evidence: "redakce"
sourceNote: "Kontrola 3. 10. 2026 proti primeru SLS na tomhle webu. Snímky jsou tisková fotografie Formlabs z 13. 10. 2026, Sinterit Lisa Pro z 12. 1. 2021 a dva práškové díly. Ceny strojů ani zakázek tu nejsou."
---

**SLS speče prášek laserem. Okolní prášek díl drží, takže klasické podpěry jako u FDM odpadají.** Jeden díl nebo malá série proto často patří do zakázky. Vlastní stroj dává smysl až ve chvíli, kdy tu práci s práškem budete dělat pořád.

Krátký technický úvod je v [primeru SLS](/technologie/sls/). Tady je rozhodnutí mezi nákupem a servisem, které primer jen naznačuje.

## Co se při tisku děje

Vrstva prášku, laser speče průřez, další vrstva prášku. Po doběhnutí jobu se komora chladí. Teprve potom se díl vyndá a očistí. Prášek, který laser nespekl, jde zčásti znovu použít. Kolik přesně, říká výrobce stroje a materiálu. Obecné procento by bylo vymyšlené.

Nejčastější polymer v tomhle režimu je nylon, typicky PA12. Povrch je zrnitý. Barvení a impregnace jsou samostatné kroky po tisku. Teplota a rozměrové chování nylonu patří do návrhu dílu. Model nakreslený pro PLA na FDM se do prášku nepřeklopí jen výměnou sliceru.

Kovový tisk, který některé zakázkové weby označují jako SLM, je jiný proces. Název [3dtiskostrava.cz](https://www.3dtiskostrava.cz/) k 3. 10. 2026 zní FDM–SLM. To není nabídka polymerového SLS a tenhle průvodce ji tak nepoužívá.

<figure>
  <img src="/media/pruvodce/sls-formlabs-2026.webp" alt="Tisková fotografie řady Formlabs z roku 2026, resinové stroje vlevo a práškové stroje vpravo" loading="lazy" decoding="async" />
  <figcaption>Tisková fotografie Formlabs z 13. 10. 2026. Popis souboru na Commons uvádí Form Studio 1, Form 4, Form 4L, Fuse 1+ a Fuse X1. Oranžové stroje vlevo jsou resin, šedé vpravo prášek. Licence CC BY 4.0, Wikimedia Commons. Jméno autora stránka souboru neuvádí. Není to test První vrstvy.</figcaption>
</figure>

Resinový řez je v [průvodci Chitubox a Lychee](/clanky/sla-slicery-chitubox-lychee/). Míchat ty dvě technologie v jedné poptávce skončí špatným materiálem.

## Stolní SLS existuje a pořád je to prášková dílna

Menší SLS není tichá krabička vedle FDM. Na snímku z 12. 1. 2021 je Sinterit Lisa Pro vedle stanice na prášek, pískovačky a vysavače do výbušného prostředí. To je obsluha prášku, ne jen tisk.

<figure>
  <img src="/media/pruvodce/sls-sinterit-phs.webp" alt="Sinterit Lisa Pro vedle stanice na prášek, pískovačky a vysavače" loading="lazy" decoding="async" />
  <figcaption>Sinterit Lisa Pro, Powder Handling Station, pískovačka a vysavač ATEX. Foto: Wzgardafull, 12. 1. 2021, CC BY-SA 4.0, Wikimedia Commons. Není to dílna První vrstvy.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/sls-bambshell.webp" alt="Ohebné mřížované díly vytištěné práškem na Sinterit Lisa" loading="lazy" decoding="async" />
  <figcaption>Ohebné díly ze Sinterit Lisa. Foto: FREEDEE, 29. 5. 2018, CC BY-SA 4.0, Wikimedia Commons. Není to náš výtisk.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/sls-pulley.webp" alt="Bílý práškový díl hřídele kladky vytištěný u 3D Systems" loading="lazy" decoding="async" />
  <figcaption>Díl, který si autor snímku nechal vytisknout u 3D Systems. Popis souboru říká Duraform HST, nylon 12 s vláknem. Foto: newman72, 30. 5. 2019, CC BY 2.0, Wikimedia Commons. Není to zakázka První vrstvy.</figcaption>
</figure>

Kolem stroje je prášek ve vzduchu, čištění dílů, třídění použitého a nového prášku a čas, kdy komora chladne a nejde do ní sáhnout. To je práce, kterou FDM dílna při tisku z jedné cívky neřeší. Než stroj koupíte, potřebujete místnost, odsávání podle pokynu výrobce a postup, kam přijde odpadní prášek. Ty podmínky jsou v dokumentaci konkrétního stroje. Obecný průvodce je nenahrazuje.

## Kdy vyhraje zakázka

Zakázka vyhraje, když platí aspoň jedna z těchto vět:

- potřebujete jeden díl, nebo pár dílů, a nemáte další frontu na příští měsíc,
- geometrie má vnitřní kanály, panty nebo mříž, které by na FDM chtěly podpěry v místě, odkud nejdou sundat,
- materiál má být nylon se zrnitým povrchem práškového tisku, ne vyhlazená PLA,
- nechcete řešit chladnutí komory, tryskání a sklad prášku,
- nevíte, jestli se díl v prášku vůbec povede, a chcete to zjistit na jednom kuse.

Do poptávky patří STEP nebo jiný objemový model, ne jen nízké STL, a věta, co díl musí vydržet a jaký povrch smí mít. Bez toho bureau odhadne technologii za vás a může zvolit FDM, SLA, nebo prášek. Když trváte na SLS, napište to.

Vlastní stroj vyhraje, když stejný typ nylonového dílu tisknete opakovaně, máte lidi na obsluhu prášku a vytížení zaplatí stroj i materiál, který leží v násypce mezi zakázkami. Číslo, od kterého se to „vyplatí“, sem nepatří. Závisí na stroji, prášku, mzdě a na tom, kolik prášku výrobce dovolí vrátit do dalšího jobu. To spočítejte z nabídek, ne z článku.

## Co FDM pořád umí líp

Velký dutý díl z PETG nebo ASA, který smí mít vrstvy a podpěry na nedůležité straně, je pořád práce pro stolní tiskárnu. SLS ho neudělá hezčí jen proto, že je průmyslovější. Udělá ho jinak: bez podpěr, se zrnem, za jiný proces.

Když váháte mezi technologií, projděte [FDM](/technologie/fdm/), [SLA](/technologie/sla/) a [SLS](/technologie/sls/) podle materiálu hotového dílu. Výběr stroje do domu začíná až ve chvíli, kdy technologie sedí. K tomu je [sedm otázek před první tiskárnou](/clanky/jak-vybrat-prvni-3d-tiskarnu-7-otazek/). SLS v nich skoro nikdy není první odpověď.

## Praktický závěr

- [ ] Jeden nylonový díl bez podpěr poptějte jako SLS zakázku. Stroj kvůli němu nekupujte.
- [ ] Do poptávky napište SLS, ať zakázka neskončí na FDM nebo na SLA.
- [ ] SLM a SLS nezaměňujte. Kov v názvu služby není nylonový prášek.
- [ ] Vlastní stroj počítejte včetně chladnutí, čištění a prášku, který mezi joby leží.
- [ ] Tiskové fotografie Formlabs a Sinteritu nejsou nákupní rada. Aktuální řadu si ověřte u výrobce.

## Zdroje

- [SLS na První vrstvě](/technologie/sls/)
- [FDM na První vrstvě](/technologie/fdm/)
- [SLA na První vrstvě](/technologie/sla/)
- [Formlabs3dprinters2026 na Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Formlabs3dprinters2026.png), CC BY 4.0, 13. 10. 2026
- [Sinterit PHS na Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sinterit_PHS.jpg), Wzgardafull, CC BY-SA 4.0, 12. 1. 2021
- [Bambshell SLS na Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bambshell_SLS_3D_printed_Sinterit_Lisa_009-e1532684478202.jpg), FREEDEE, CC BY-SA 4.0, 29. 5. 2018
- [SLS díl 3D Systems na Wikimedia Commons](https://commons.wikimedia.org/wiki/File:SLS_3D_Systems_Printed_Duraform_HST_Pulley_Shaft_(49014691207).jpg), newman72, CC BY 2.0, 30. 5. 2019
