---
title: "Plné spektrum z filamentu: tisk obrazu a HueForge"
description: "Obraz z několika filamentů, u kterých rozhoduje tloušťka a propustnost světla. HueForge k tomu není slicer. Diskrétní AMS a MMU mají vlastní průvodce."
publishedAt: 2026-10-03
updatedAt: 2026-10-03
reviewedAt: 2026-10-03
author: "Redakce První vrstvy"
tags:
  - průvodce
  - HueForge
  - více barev
  - filament
  - litofánie
level: "pokročilý"
technologies:
  - "FDM"
evidence: "vyrobce"
sourceNote: "Kontrola 3. 10. 2026 proti stránce About HueForge a FAQ na shop.thehueforge.com. Fotografie jsou 3D tištěné litofánie pod svobodnou licencí. Nejsou to snímky programu HueForge ani oficiální ukázkové výtisky autora programu."
---

**Obraz z filamentu vzniká tak, že se na sebe skládají tenké vrstvy různě propustných barev.** Oko pak vidí odstín, který v žádné jednotlivé cívce není. To je jiná práce než [diskrétní barevný tisk](/clanky/barevny-tisk-ams-mmu/), kde každá barva na dílu je pořád jedna celá cívka na svém místě modelu.

Program, který tenhle postup pojmenoval a dodává k němu nástroj, je HueForge. Níže je jen to, co o sobě píše jeho vlastní stránka. Ceny, verze obchodu a počty filamentů v databázi se mění, proto je nechte na webu programu.

## Co k tomu stránka HueForge požaduje

Stránka About uvádí tři věci:

- FDM tiskárnu libovolné značky, která umí na vrstvě vyměnit filament, ručně pauzou, nebo automaticky,
- slicer, který umí výměnu barvy podle vrstvy, v textu stránky jsou OrcaSlicer, Bambu Studio a PrusaSlicer,
- obraz, který chcete vytisknout.

HueForge podle stejné stránky není slicer. Vyrobí model a seznam výšek, na kterých se mění filament. G-code pořád připraví slicer z [průvodce FDM slicery](/clanky/fdm-slicery-bambu-studio-orcaslicer-prusaslicer/).

Export, který stránka popisuje, je STL a soubor Describe.txt s výměnami vrstev. Ty výšky se do sliceru zadají ručně. Stránka také zmiňuje doplněk pro 3MF. Jestli ho vaše verze má, uvidíte v účtu po stažení, ne v tomhle odstavci.

## Transmission distance

Klíčové číslo stránka nazývá Transmission Distance, zkratka TD. Říká, kolik světla projde filamentem při dané tloušťce. Bez něj program neumí odhadnout, jak bude vrstva vypadat.

About píše, že v programu je databáze filamentů s naměřeným TD, a že hodnoty se mezi šaržemi liší. Vlastní cívku jde změřit postupem Seashell Test, nebo přístrojem TD1. FAQ opakuje totéž a přidává praktickou chybu: špatné TD je první věc, kterou máte zkontrolovat, když výtisk neodpovídá náhledu.

Druhá chyba z FAQ: výška vrstvy a základní vrstva v HueForge musí sedět se slicerem, včetně první vrstvy. Třetí: výsledek posuzujte v náhledu, který odpovídá tomu, jak budete tisk koukat. Čtvrtá: model ve sliceru nezvětšujte rovnoměrně tak, aby se změnila výška Z. Rozměr měňte v HueForge. Změna Z posune výšky výměn a barva přestane sedět na předpověď.

## Jak to souvisí s litofánií

Litofánie je starší princip: tloušťka průsvitného materiálu mění jas, když za obraz dáte světlo. 3D tisk totéž umí z průsvitného filamentu. Fotografie níže jsou takové výtisky. Nejsou to obrazovky HueForge a nejsou to výtisky dodané s programem. Jsou tu proto, že na nich je vidět vztah tloušťky a světla, na kterém stránka HueForge staví TD.

Svobodně šiřitelný snímek samotného programu ani oficiální ukázkový výtisk HueForge se k datu kontroly nepodařilo dohledat.

<figure>
  <img src="/media/pruvodce/spektrum-lithophane-logo.jpg" alt="3D tištěná litofánie loga Wikipedie, tloušťka materiálu tvoří obraz" loading="lazy" decoding="async" />
  <figcaption>Tištěná litofánie. Foto: EngineerForLive, CC BY-SA 4.0, Wikimedia Commons. Není to výtisk z HueForge.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/spektrum-litofanie-foto.jpg" alt="3D tištěná fotografie v technice litofánie, prosvícená zezadu" loading="lazy" decoding="async" />
  <figcaption>Prosvícená tištěná fotografie. Foto: Maix79, CC BY-SA 4.0, Wikimedia Commons.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/spektrum-lampa.jpg" alt="Lampa vytištěná jako litofánie a rozsvícená zevnitř" loading="lazy" decoding="async" />
  <figcaption>Lampa tištěná jako litofánie, svítí zevnitř. Foto: Maix79, CC BY-SA 4.0, Wikimedia Commons.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/spektrum-rostlina.jpg" alt="Tištěná litofánie rostliny, obraz vznikl z černobílé předlohy" loading="lazy" decoding="async" />
  <figcaption>Litofánie rostliny. Autor snímku píše, že předloha šla nejdřív do černobílé a potom do tiskového souboru. Foto: Bernd Hutschenreuther, CC BY-SA 2.0, Wikimedia Commons.</figcaption>
</figure>

HueForge k tomu přidává víc barevných filamentů nad sebou a předpověď podle TD, takže obraz nemusí být jen šedá škála proti žárovce. FAQ říká, že filamenty a jejich pořadí volíte vy. Program předpoví vzhled a řekne, v jaké výšce vyměnit cívku.

## Výměna filamentu pořád zůstane

I obraz, který vypadá spojitě, je sled výměn na konkrétních vrstvách. About píše, že výměna může být ruční pauza, nebo automatická jednotka: AMS, MMU, toolchanger. Program se podle stránky snaží počet výměn držet nízko. Nula to není, pokud obraz používá víc než jednu cívku.

Automatická výměna je pohodlnější u tisku, který má výměn víc a vy u něj nechcete stát. Ruční pauza stačí u krátkého obrazu s několika výměnami, pokud tiskárnu umíte v pauze založit stejně, jako při běžné výměně cívky. Špatně založená cívka po pauze udělá stejnou mezeru jako u jednobarevného tisku.

Průsvitný a světlý filament je na TD citlivější než sytě krycí. Dvě cívky stejného obchodního názvu z jiné šarže mohou prosvítat jinak. Proto FAQ vrací k vlastnímu měření, když náhled nesedí.

## Praktický závěr

- [ ] Obraz z propustnosti připravíte v nástroji typu HueForge. Malování skořepiny po celých cívkách je [AMS a MMU](/clanky/barevny-tisk-ams-mmu/).
- [ ] TD cívky, kterou tisknete, má přednost před hodnotou stejného názvu z databáze, když se šarže liší.
- [ ] Výšky vrstev musí být stejné v programu i ve sliceru. Výšku Z ve sliceru neměňte.
- [ ] Výměny z Describe.txt zadejte do sliceru na uvedených milimetrech.
- [ ] Výtisk posuzujte ve světle, ve kterém bude viset. Náhled „zepředu“ a náhled „prosvícené“ nejsou totéž. To říká FAQ HueForge.

## Zdroje

- [About HueForge](https://shop.thehueforge.com/pages/about-hueforge)
- [HueForge FAQ](https://shop.thehueforge.com/pages/hueforge-faq-1)
- [FDM slicery](/clanky/fdm-slicery-bambu-studio-orcaslicer-prusaslicer/)
- [Diskrétní barevný tisk](/clanky/barevny-tisk-ams-mmu/)
