---
title: "3D skenery: laser, hloubková kamera a kdy objednat sken"
description: "Čtyři reálné způsoby, jak vznikne síť z fyzického dílu, a rozhodnutí, kdy skener kupovat a kdy nechat sken udělat. Bez vymyšlené přesnosti v milimetrech a bez cen."
publishedAt: 2026-10-03
updatedAt: 2026-10-03
reviewedAt: 2026-10-03
author: "Redakce První vrstvy"
tags:
  - průvodce
  - skener
  - skenování
  - STL
level: "pokročilý"
technologies:
  - "FDM"
evidence: "kombinace"
sourceNote: "Kontrola 3. 10. 2026 proti popiskům použitých fotografií na Wikimedia Commons a proti veřejné nabídce 3dtiskostrava.cz, která skenování a opravu STL uvádí. Přesnost konkrétního skeneru v milimetrech tu není, protože ji nemáme z datasheetu daného kusu."
---

**Sken je síť povrchu, ne hotový náhradní díl.** Než koupíte skener, potřebujete vědět, jestli vám stačí tvar na obrazovce, nebo díl s vůlí na šroub. Ty dvě zakázky se liší víc než značka na krabici.

Přesnost v milimetrech, kterou výrobci uvádějí v letácích, sem nepatří. Bez datasheetu konkrétního přístroje a bez podmínek měření by to bylo vymyšlené číslo. U svého stroje si ji přečtěte u výrobce. Tady je mapa metod a rozhodnutí, jestli přístroj vůbec potřebujete doma.

## Co na fotografiích skutečně je

Čtyři snímky ukazují čtyři různá zařízení. Popisek říká jen to, co o nich víme ze zdroje fotografie.

<figure>
  <img src="/media/pruvodce/skener-viuscan.jpg" alt="Ruční laserový skener VIUscan při snímání přezky opasku" loading="lazy" decoding="async" />
  <figcaption>Ruční laserový skener VIUscan při snímání přezky. Foto: Creative Tools, CC BY 2.0, Wikimedia Commons. Popisek autora uvádí laserové snímání.</figcaption>
</figure>

Ruční laser vozíte kolem dílu. Hodí se na předmět, který jde obejít a který se během snímání nepohne. Lesklý nebo průhledný povrch laseru vrací špatně. Matný sprej je u dílenského skenu běžná příprava. Není to součást každého přístroje a u lakovaného dílu, který se má vrátit zákazníkovi, ho nepoužívejte bez dohody.

<figure>
  <img src="/media/pruvodce/skener-fablab.jpg" alt="3D skener ve fablabu v Cité des sciences" loading="lazy" decoding="async" />
  <figcaption>Skener ve veřejné dílně Cité des sciences. Foto: Benoît Prieur, CC0, Wikimedia Commons.</figcaption>
</figure>

Veřejná dílna je často rozumnější první sken než nákup. Přístroj tam někdo umí zapnout a vy zjistíte, jestli síť vůbec potřebujete víckrát než jednou.

<figure>
  <img src="/media/pruvodce/skener-realsense.jpg" alt="Hloubková kamera Intel RealSense D435 na stole" loading="lazy" decoding="async" />
  <figcaption>Hloubková kamera Intel RealSense D435. Foto: Marc Auledas, CC BY-SA 4.0, Wikimedia Commons. Je to hloubkový snímač, ne dílenský metrologický skener.</figcaption>
</figure>

Hloubková kamera dává vzdálenost bodů od objektivu. V dílně z ní jde skládat hrubý model místnosti, velkého kusu nebo figury. Není to automaticky přístroj na dosedací plochu ložiska. Když výrobce kamery neuvádí metrologický režim, nepočítejte s ním.

<figure>
  <img src="/media/pruvodce/skener-stolni.jpg" alt="Čelní pohled na stolní 3D skener se stolem pro předmět" loading="lazy" decoding="async" />
  <figcaption>Stolní skener s prostorem pro předmět. Foto: Alange6373, CC BY-SA 3.0, Wikimedia Commons.</figcaption>
</figure>

Stolní přístroj drží díl v známé poloze. Opakovaný sken stejného typu součástky je pak klidnější než obcházení rukou. Velikost předmětu je omezená prostorem, který snímek ukazuje: co se na stůl nevejde, tenhle typ nesejme v celku.

Vedle těchto přístrojů existuje fotogrammetrie. Model vznikne z řady fotografií pořízených kolem předmětu. Na Commons je k tomu samostatný příklad snímku obličeje složeného ze 71 fotek. Metoda nepotřebuje laserovou hlavu. Potřebuje ostré fotky, dostatek úhlů a software, který body spáruje. Lesk, jednolitá bílá stěna a pohyb předmětu mezi snímky síť rozbijí.

## Co přijde po skenu

Výstup je obvykle síť, často STL nebo OBJ. Dírky, obrácené normály a slepené plochy jsou normální. Než síť půjde do tiskárny, někdo ji zavře a zjednoduší. Funkční náhrada pak často pokračuje v CADu: dosedací plocha se nakreslí znovu podle měření, sken slouží jako podklad tvaru. Postup kreslení je ve [FreeCADu a OpenSCADu](/clanky/otevrene-cad-freecad-openscad/).

Sken loga z cizího výrobku a jeho další prodej je otázka práv k předloze, ne jen otázka přístroje. Stejné pravidlo jako u staženého modelu: [licence a cizí práva](/clanky/kde-stahnout-3d-modely-zdarma-a-licence/).

## Kdy koupit a kdy objednat

Skener doma dává smysl, když skenujete pořád: sérii podobných dílů, výuku, archiv tvarů, u kterých síť stačí. Jedna lomená páka za rok skener nezaplatí v čase, který strávíte čištěním sítě.

Objednávka dává smysl, když:

- díl je větší než pracovní prostor přístroje, který byste si pořídili,
- potřebujete síť jednou a dál už jedete v CADu,
- nemáte kde přístroj skladovat a kalibrovat,
- povrch je lesklý, průhledný nebo tmavý a nechcete na něm zkoušet první postup,
- výsledek má sedět na měřený rozměr a vy nemáte čím sken ověřit.

Veřejná nabídka [3dtiskostrava.cz](https://www.3dtiskostrava.cz/) skenování a opravu STL uvádí vedle zakázkového tisku. Výdejní místo pro předání je Zahradní 1471/1 v Ostravě, stejně jako u [servisu tiskáren](/clanky/servis-3d-tiskaren/). To není srovnání skenerů na trhu a není to recenze přesnosti. Je to existující místo, kam jde poptávka poslat, když vlastní přístroj nemáte. Kovový tisk SLM, který stejný web uvádí v názvu, je jiná technologie než sken. Sken z něj sám nevznikne.

Než poptávku pošlete, napište rozměr dílu, materiál povrchu, jestli smí dostat matnící vrstvu a jestli výstupem má být surová síť, nebo upravené STL připravené k tisku. Bez toho dostanete soubor, se kterým ve sliceru nehnete.

## Praktický závěr

- [ ] Nejdřív účel: hrubý tvar, nebo dosedací rozměr ověřený měřidlem.
- [ ] Laser v ruce, hloubková kamera a stolní skener řeší jinak velký a jinak přesný úkol. Číslo přesnosti berte z datasheetu svého přístroje.
- [ ] Fotogrammetrie je cesta z fotek, když máte software a klidný, matný předmět.
- [ ] Síť po skenu počítejte jako polotovar. Funkční plochy dokreslete, nebo si opravu STL objednejte.
- [ ] Jeden díl za rok je poptávka. Opakovaný sken stejného typu je důvod přístroj mít.

## Zdroje

- [3dtiskostrava.cz](https://www.3dtiskostrava.cz/) — veřejná nabídka včetně skenování a opravy STL
- Popisky fotografií VIUscan, RealSense D435 a fotogrammetrie obličeje na Wikimedia Commons, uvedené u snímků
- [FreeCAD a OpenSCAD](/clanky/otevrene-cad-freecad-openscad/) pro práci se sítí dál v CADu
