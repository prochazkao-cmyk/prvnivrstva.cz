---
title: "SLA slicery: Chitubox a Lychee"
description: "Dva programy, které z modelu udělají vrstvy pro resinovou tiskárnu. Co o nich říká jejich dokumentace: soubory, podpěry, odeslání na tiskárnu. Bez žebříčku a bez cen."
publishedAt: 2026-10-03
updatedAt: 2026-10-03
reviewedAt: 2026-10-03
author: "Redakce První vrstvy"
tags:
  - průvodce
  - slicer
  - SLA
  - Chitubox
  - Lychee
level: "pokročilý"
technologies:
  - "SLA"
evidence: "vyrobce"
sourceNote: "Kontrola 3. 10. 2026 proti docs.chitubox.com (úvod, podpěry, úvod k Pro) a docs.mango3d.io (export řezů a síťový tisk Lychee). Snímky jsou resinové výtisky a resinová tiskárna. Rozhraní Chituboxu ani Lychee pod svobodnou licencí k dispozici není."
---

**Resinová tiskárna nečte STL. Čte soubor vrstev, který pro ni připraví slicer dané technologie.** Dva programy s veřejnou dokumentací jsou CHITUBOX a Lychee Slicer. FDM slicer z [průvodce Bambu Studio, OrcaSlicer a PrusaSlicer](/clanky/fdm-slicery-bambu-studio-orcaslicer-prusaslicer/) jim soubor pro vaničku s pryskyřicí nepřipraví.

Bezpečnost pryskyřice, mytí a vytvrzení je v [primeru SLA](/technologie/sla/). Slicer tu chemii neřeší. Řeší geometrii vrstev a podpěry.

Snímky rozhraní obou programů pod licencí, kterou smíme vložit do článku, nejsou. Fotografie ukazují to, co z nich padá na tiskárnu: resinový výtisk a resinový stroj.

<figure>
  <img src="/media/pruvodce/sla-benchy-resin.jpg" alt="Model 3DBenchy vytištěný na resinové tiskárně" loading="lazy" decoding="async" />
  <figcaption>3DBenchy z resinové tiskárny. Foto: Creative Tools, CC BY 2.0, Wikimedia Commons.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/sla-dil.jpg" alt="Díl vyrobený stereolitografií" loading="lazy" decoding="async" />
  <figcaption>Díl ze stereolitografie. Foto: Wizard191, CC BY-SA 3.0, Wikimedia Commons.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/sla-cykloid.jpg" alt="Sestavené díly cykloidní převodovky vytištěné stereolitografií" loading="lazy" decoding="async" />
  <figcaption>Sestavená cykloidní převodovka z resinových dílů. Foto: Clemenspool, CC BY-SA 3.0, Wikimedia Commons.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/sla-halot.jpg" alt="Resinová tiskárna Halot-X1" loading="lazy" decoding="async" />
  <figcaption>Resinová tiskárna Halot-X1. Foto: Piocreat, CC BY-SA 4.0, Wikimedia Commons. Popisek souboru na Commons je text autora snímku, ne měření První vrstvy.</figcaption>
</figure>

## CHITUBOX

Dokumentace v úvodu popisuje CHITUBOX jako slicer, který síť převede na soubor pro tiskárnu. Mezi operacemi uvádí import a export STL a OBJ a import 3MF. Seznam tiskáren v dokumentaci je dlouhý a mění se. Berte ho z aktuální stránky, ne z opisu.

Podpěry dokumentace dělí na kontakt s modelem, dřík, patu, raft, spoj „snug“ mezi částmi modelu a ztužení mezi podpěrami. Automatické podpěry generuje z geometrie. Magic Support, popsaný u pokročilejší práce, přidává podpěry s různými parametry po krocích. Raft je plocha, která drží díl na tiskové desce.

Samostatný úvod k CHITUBOX Pro říká, že proti základní verzi přidává dělení modelu, popisky, booleovské operace, otvory, další tvary podpěr, detekci dutin, kolizí a převisů a automatizaci ChituAction. Cenu rozdílu mezi verzemi sem nepíšeme. Je na webu výrobce a do průvodce nepatří jako číslo bez data.

Dokumentace také upozorňuje, že soubor řezu, v příkladu `.ctb`, je soubor pro tiskárnu. Geometrii v něm už nemáte přestavět. Když je model špatně, vraťte se k síti a řežte znovu.

Profil tiskárny se v dokumentaci přidává výběrem značky a modelu. Jeden stroj může mít víc profilů. Expozice, zvedání a rychlosti patří do profilu resinu a tiskárny, které máte na stole. Číslo z cizího fóra bez označení resinu a stroje do profilu nepatří.

## Lychee Slicer

Dokumentace Lychee žije na [docs.mango3d.io](https://docs.mango3d.io/doc/resin-documentation/). Stránka exportu popisuje vyřezání vrstev do souboru a u tiskárny s Wi-Fi dvě odeslání: **Send** soubor na tiskárnu zkopíruje a tisk nespustí, **Send and Print** kopírování a tisk spustí. Než druhou volbu použijete, dokumentace chce prázdnou desku. Zbytky vytvrzené pryskyřice na desce mohou tiskárnu poškodit.

Síťová stránka dodává omezení. Resinový tisk po síti dokumentace váže na část tiskáren s firmwarem odvozeným od Chituboxu a vyjmenovává konkrétní modely. Seznam není univerzální „všechno s Wi-Fi“. Když vaše tiskárna na seznamu není, počítejte s USB. FDM po síti stejná stránka odděluje a váže ho na Klipper nebo OctoPrint, které výrobce neuzamkl proti cizímu sliceru. To už není resinový workflow.

## Jak řezat resinový díl

Orientace rozhoduje o podpěrách a o plochách, které ponesou stopy po jejich odlomení. Plocha, která má zůstat čistá, nemá ležet v místě, kam automatické podpěry sjedou jako první. Dutina bez odtoku drží nevytvrzenou pryskyřici. Detekci dutin dokumentace zmiňuje u verze Pro. I bez ní se na řez dívejte a ptejte se, kudy pryskyřice vyteče.

Podpěra, která se dotýká modelu tenkým kontaktem, jde sundat. Podpěra, která model objímá, ho při strhávání z desky zlomí. Automatika je začátek. Náhled kontaktu je kontrola.

První vrstvy drží desku. Jejich čas a počet jsou součást profilu resinu. Když se díl při odtrhu od fólie utrhne, nejdřív ověřte profil výrobce resinu a čistotu fólie a desky. Až potom měňte expozici, a jen po jednom kroku.

Hotový výtisk není hotový díl. Mytí a dovytvrzení patří k technologii a jsou v [SLA primeru](/technologie/sla/). Slicer jejich čas do G-code resinové tiskárny obvykle nezapíše jako něco, co stroj udělá sám.

## Praktický závěr

- [ ] Resin řežte v Chituboxu nebo v Lychee, ne v FDM sliceru.
- [ ] Profil je dvojice tiskárna a resin, který máte. Cizí expozice bez názvu resinu je nepoužitelná.
- [ ] Podpěry z automatu zkontrolujte na plochách, které mají zůstat čisté, a u dutin hledejte odtok.
- [ ] Send and Print jen na prázdnou desku. Když síťový seznam vaši tiskárnu nemá, použijte USB.
- [ ] Soubor řezu už nepřekreslujte. Špatný tvar se vrací do STL a řeže znovu.

Když je resinových dílů málo a nechcete vaničku, chemii a mytí doma, porovnejte to s práškovým servisem v [průvodci SLS](/clanky/sls-stroje-nebo-servis/). Jsou to různé technologie. Společné mají jen to, že malá série často vyjde levněji mimo dům, aniž bychom tu uváděli cenu, kterou nemáme změřenou.

## Zdroje

- [CHITUBOX — úvod](https://docs.chitubox.com/en-US/chitubox/latest/introduction)
- [CHITUBOX — podpěry](https://docs.chitubox.com/en-US/chitubox/latest/support-your-model)
- [CHITUBOX Pro — úvod](https://docs.chitubox.com/en-US/chitubox-pro/latest/introduction)
- [Lychee — export řezů](https://docs.mango3d.io/doc/resin-documentation/resin-export/export-slices/)
- [Lychee — síť a Wi-Fi](https://docs.mango3d.io/doc/technical-documentation/technical-issues/network-wifi-issues-with-lychee-slicer/)
- [SLA na První vrstvě](/technologie/sla/)
