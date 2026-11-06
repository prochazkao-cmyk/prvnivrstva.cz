---
title: "Otevřené CAD: FreeCAD a OpenSCAD"
description: "Dva svobodné způsoby, jak vznikne model pro tiskárnu. FreeCAD jako parametrický modelář s pracovními stoly. OpenSCAD jako geometrie napsaná kódem. Oba jen tam, kde to říká jejich dokumentace."
publishedAt: 2026-10-03
updatedAt: 2026-10-03
reviewedAt: 2026-10-03
author: "Redakce První vrstvy"
tags:
  - průvodce
  - CAD
  - FreeCAD
  - OpenSCAD
level: "pokročilý"
technologies:
  - "FDM"
evidence: "vyrobce"
sourceNote: "Kontrola 3. 10. 2026 proti freecad.org, stránce features.php a openscad.org. Snímky ukazují FreeCAD 1.0 a okno OpenSCAD. Nejsou to návodové klikací mapy všech budoucích verzí."
---

**Model pro tiskárnu může vzniknout ve svobodném CADu, ne jen ve sliceru.** FreeCAD je parametrický modelář pro díly z reálného světa. OpenSCAD je program, ve kterém geometrii píšete. Slicer z hotového modelu teprve udělá dráhy. Ten krok je v [průvodci FDM slicery](/clanky/fdm-slicery-bambu-studio-orcaslicer-prusaslicer/).

## FreeCAD

Úvodní stránka projektu ho popisuje jako vlastní 3D parametrický modelář. Stránka vlastností dodává, k čemu je postavený:

- jednotky reálného světa, od mikronů po kilometry, včetně palců,
- plná tělesa a jejich export pro 3D tisk i pro obrábění,
- výkresy, analýza včetně metody konečných prvků a výkazy množství,
- geometrické jádro Open CASCADE, tělesa, B-rep a NURBS, booleovské operace a zaoblení,
- parametrické vlastnosti, takže změna čísla přepočítá tvar a historie úprav zůstane,
- od verze 1.0 vestavěný pracovní stůl sestav se vazbami mezi díly,
- od verze 1.0 sloučený pracovní stůl BIM,
- náčrt s vazbami jako základ pro pracovní stůl Part Design,
- Python pro makra i celé pracovní stoly,
- import a export včetně STEP, IGES, OBJ, STL, SVG, DXF a také CSG z OpenSCADu, vedle vlastního souboru FCStd.

Pro tiskárnu je z toho praktická věta: funkční díl kreslete tak, aby šel změnit rozměr bez překreslení, a ven ho pošlete jako STL nebo 3MF, případně STEP, když má úpravu dodělat někdo další v jiném CADu.

<figure>
  <img src="/media/pruvodce/cad-freecad-partdesign.png" alt="FreeCAD 1.0, světlý motiv, pracovní stůl Part Design s modelem bitu Pozidriv" loading="lazy" decoding="async" />
  <figcaption>FreeCAD 1.0, pracovní stůl Part Design. Foto: Maxwxyz, CC BY 4.0, Wikimedia Commons.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/cad-freecad-assembly.png" alt="FreeCAD 1.0, světlý motiv, pracovní stůl sestav s ukázkovým souborem" loading="lazy" decoding="async" />
  <figcaption>FreeCAD 1.0, pracovní stůl sestav. Foto: Maxwxyz, CC BY 4.0, Wikimedia Commons.</figcaption>
</figure>

Pracovní stoly jsou důvod, proč FreeCAD působí roztříštěně. Part Design, sestavy, BIM nebo síť pro tisk jsou různé nástroje nad stejným programem. Nový uživatel nepotřebuje všechna menu. Pro náhradní díl stačí náčrt, vysunutí nebo rotace, a export sítě.

Parametr má zůstat pojmenovaný. „Šířka háčku“ v tabulce vlastností je za měsíc čitelnější než číslo zapsané jen ve stromu beze jména. Když díl navazuje na jiný, rozměr vezměte z měření původního kusu, ne z paměti.

## OpenSCAD

OpenSCAD se na vlastním webu představuje jako solid modeler pro programátory. Je to svobodný software pro Linux a další unixové systémy, Windows a macOS. Geometrie vzniká skriptem. Na snímku hlavního okna je krátký skript, který kreslí značku programu. Druhý snímek ukazuje koule o různých poloměrech: rozměr je parametr ve zdrojovém textu.

<figure>
  <img src="/media/pruvodce/cad-openscad-okno.png" alt="Hlavní okno OpenSCADu se skriptem, který kreslí značku programu" loading="lazy" decoding="async" />
  <figcaption>Hlavní okno OpenSCADu. Foto: Tp42, CC0, Wikimedia Commons.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/cad-openscad-koule.png" alt="Několik koulí různých poloměrů vykreslených v OpenSCADu" loading="lazy" decoding="async" />
  <figcaption>Koule definované poloměrem ve skriptu. Foto: Iogiclrd, CC0, Wikimedia Commons.</figcaption>
</figure>

Tohle sedí na díly, které jsou součet a rozdíl jednoduchých těles: krabička, držák, příruba, šablona s otvory. Změna průměru šroubu je změna proměnné a nové vykreslení. Nesedí to na organický tvar, který chcete tahat za plochy myší. Tam je kratší cesta pracovní stůl FreeCADu, nebo jiný modelář, který na plochy staví.

Web OpenSCADu odkazuje na hotové návrhy na Printables, Thingiverse a MakerWorld. Skript, který autor přiloží, jde upravit. Samotné STL z cizího modelu obvykle ne. Než cizí skript použijete v zakázce, platí stejné pravidlo jako u každého staženého modelu: [licence konkrétního souboru](/clanky/kde-stahnout-3d-modely-zdarma-a-licence/).

FreeCAD umí s CSG z OpenSCADu pracovat v seznamu formátů. Směr je tedy obousměrný jen tam, kde export formát opravdu obsahuje. Síť STL už historii náčrtu neunese. Když budete díl měnit, archivujte FCStd nebo `.scad`, ne jen STL poslané do sliceru.

## Který otevřít

- Díl s výkresem, sestavou nebo vazbami v náčrtu: FreeCAD.
- Díl, který je vzorec a má se generovat v sérii rozměrů: OpenSCAD.
- Hotový model z internetu, který jen otočíte a vytisknete: CAD nepotřebujete, stačí databáze a slicer.
- Fotka náhradního dílu bez rozměrů: nejdřív měření nebo sken. CAD z fotky bez měřítka rozměr nevymyslí. K tomu je [průvodce skenery](/clanky/3d-skenery/).

Ani jeden program není slicer. Export sítě ještě nemá teplotu, výplň ani podpěry. Ty patří do profilu tiskárny.

## Praktický závěr

- [ ] U funkčního dílu nechte zdroj: FCStd, nebo skript OpenSCADu.
- [ ] Do sliceru posílejte export, zdroj si nechte.
- [ ] Ve FreeCADu začněte náčrtem a Part Designem. Ostatní pracovní stoly až podle úkolu.
- [ ] V OpenSCADu pojmenujte rozměry na začátku souboru, ať se mění na jednom místě.
- [ ] Cizí model tiskněte až po přečtení licence.

Dokumentace FreeCADu začíná na [freecad.org](https://www.freecad.org/). Příručka OpenSCADu, na kterou odkazuje projekt, je na Wikibooks a samotný program na [openscad.org](https://openscad.org/).

## Zdroje

- [FreeCAD](https://www.freecad.org/)
- [FreeCAD — vlastnosti](https://www.freecad.org/features.php)
- [OpenSCAD](https://openscad.org/)
