---
title: "SLS: kdy dává smysl stroj a kdy zakázka"
description: "Prášek a laser místo cívky. Co SLS umí, proč je kolem stroje víc práce než kolem FDM, a kdy jeden díl patří do zakázkového prachu místo do nákupu stroje. Bez cen a bez vymyšlených parametrů."
publishedAt: 2026-10-03
updatedAt: 2026-10-03
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
evidence: "kombinace"
sourceNote: "Kontrola 3. 10. 2026 proti primeru SLS na tomhle webu, proti popisku oficiálního snímku Formlabs z roku 2025 na Wikimedia Commons a proti fotografiím Sharebot SnowWhite z 3D Printshow 2014. Ceny strojů ani zakázek tu nejsou."
---

**SLS speče prášek laserem. Okolní prášek díl drží, takže klasické podpěry jako u FDM odpadají.** Jeden díl nebo malá série proto často patří do zakázky. Vlastní stroj dává smysl až ve chvíli, kdy tu práci s práškem budete dělat pořád.

Krátký technický úvod je v [primeru SLS](/technologie/sls/). Tady je rozhodnutí mezi nákupem a servisem, které primer jen naznačuje.

## Co se při tisku děje

Vrstva prášku, laser speče průřez, další vrstva prášku. Po doběhnutí jobu se komora chladí. Teprve potom se díl vyndá a očistí. Prášek, který laser nespekl, jde zčásti znovu použít. Kolik přesně, říká výrobce stroje a materiálu. Obecné procento by bylo vymyšlené.

Nejčastější polymer v tomhle režimu je nylon, typicky PA12. Povrch je zrnitý. Barvení a impregnace jsou samostatné kroky po tisku. Teplota a rozměrové chování nylonu patří do návrhu dílu. Model nakreslený pro PLA na FDM se do prášku nepřeklopí jen výměnou sliceru.

Kovový tisk, který některé zakázkové weby označují jako SLM, je jiný proces. Název [3dtiskostrava.cz](https://www.3dtiskostrava.cz/) k 3. 10. 2026 zní FDM–SLM. To není nabídka polymerového SLS a tenhle průvodce ji tak nepoužívá.

<figure>
  <img src="/media/pruvodce/sls-formlabs-2025.png" alt="Oficiální řada Formlabs z roku 2025: Form 4L, práškový Fuse 1+ 30W a Form 4" loading="lazy" decoding="async" />
  <figcaption>Snímek Formlabs z roku 2025. Popisek výrobce na Commons uvádí Form 4L, Fuse 1+ 30W a Form 4. Práškový stroj je uprostřed. Foto: Formlabs Inc., CC BY 4.0, Wikimedia Commons. Není to test První vrstvy.</figcaption>
</figure>

Form 4 a Form 4L na krajích snímku jsou resinové tiskárny. Do SLS patří prostřední Fuse. Resinový řez je v [průvodci Chitubox a Lychee](/clanky/sla-slicery-chitubox-lychee/). Míchat ty dvě technologie v jedné poptávce skončí špatným materiálem.

## Stolní SLS existuje a pořád je to prášková dílna

Na veletrhu 3D Printshow v Londýně v roce 2014 fotil Creative Tools stroj Sharebot SnowWhite. Snímky jsou dobové. Nejsou to aktuální parametry a nejsou to doporučení ke koupi. Ukazují něco jiného: i menší SLS je uzavřený práškový stroj, ne tichá krabička vedle FDM.

<figure>
  <img src="/media/pruvodce/sls-snowwhite-01.jpg" alt="Prášková tiskárna Sharebot SnowWhite na veletrhu 3D Printshow 2014 v Londýně" loading="lazy" decoding="async" />
  <figcaption>Sharebot SnowWhite, 3D Printshow Londýn 2014. Foto: Creative Tools, CC BY 2.0, Wikimedia Commons.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/sls-snowwhite-03.jpg" alt="Jiný úhel na tiskárnu Sharebot SnowWhite na 3D Printshow 2014" loading="lazy" decoding="async" />
  <figcaption>Stejný stroj z jiného úhlu, stejný veletrh. Foto: Creative Tools, CC BY 2.0, Wikimedia Commons.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/sls-snowwhite-05.jpg" alt="Detail práškové tiskárny Sharebot SnowWhite na veletrhu v roce 2014" loading="lazy" decoding="async" />
  <figcaption>Detail SnowWhite, 2014. Foto: Creative Tools, CC BY 2.0, Wikimedia Commons. Historický snímek, ne aktuální nabídka.</figcaption>
</figure>

Kolem stroje je prášek ve vzduchu, čištění dílů, třídění použitého a nového prášku a čas, kdy komora chladne a nejde do ní sáhnout. To je práce, kterou FDM dílna v ceně „jedné cívky“ nemá. Než stroj koupíte, potřebujete místnost, odsávání podle pokynu výrobce a postup, kam přijde odpadní prášek. Ty podmínky jsou v dokumentaci konkrétního stroje. Obecný průvodce je nenahrazuje.

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
- [ ] Dobové fotky SnowWhite z roku 2014 nejsou nákupní rada. Aktuální řadu, včetně Fuse na snímku Formlabs z roku 2025, si ověřte u výrobce.

## Zdroje

- [SLS na První vrstvě](/technologie/sls/)
- [FDM na První vrstvě](/technologie/fdm/)
- [SLA na První vrstvě](/technologie/sla/)
- Oficiální snímek Formlabs 2025 na Wikimedia Commons, soubor Formlabs3Dprinters2025, licence CC BY 4.0, autor Formlabs Inc.
- Fotografie Sharebot SnowWhite, Creative Tools, CC BY 2.0, 3D Printshow Londýn 2014
