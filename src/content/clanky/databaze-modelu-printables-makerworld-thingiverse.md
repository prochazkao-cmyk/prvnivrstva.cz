---
title: "Databáze modelů: Printables, MakerWorld a Thingiverse"
description: "Kde vzít model, jak poznat soubor od tiskového profilu a proč licence konkrétního modelu rozhoduje dřív než logo knihovny. Printables, MakerWorld a Thingiverse bez vymyšlených počtů souborů."
publishedAt: 2026-10-03
updatedAt: 2026-10-03
reviewedAt: 2026-10-03
author: "Redakce První vrstvy"
tags:
  - průvodce
  - 3D modely
  - Printables
  - MakerWorld
  - Thingiverse
  - licence
level: "začátečník"
evidence: "vyrobce"
sourceNote: "Kontrola 3. 10. 2026 proti veřejným stránkám Printables, MakerWorld a Thingiverse, proti wiki Bambu Lab k nahrávání modelů a proti staršímu průvodci licencí na tomhle webu. Počty modelů a žebříčky knihoven tu nejsou, protože je nemáme z primárního zdroje."
---

**Nejdřív otevřete licenci modelu. Teprve potom ho stahujte.** Printables, MakerWorld a Thingiverse jsou tři velké knihovny. Logo stránky licenci neurčuje. Dva modely na jedné knihovně mohou mít opačná pravidla pro prodej výtisku i pro úpravu souboru.

Právní orientace v Creative Commons, včetně toho, že tahle stránka není právní rada, je v textu [Kde stáhnout 3D modely zdarma a co s nimi smíte dělat](/clanky/kde-stahnout-3d-modely-zdarma-a-licence/). Tady je praktický postup: co stáhnout, v čem to otevřít a jak neplést geometrii s cizím tiskovým profilem.

## Tři knihovny, tři vstupy

**Printables** je knihovna na [printables.com](https://www.printables.com/). U modelu jde zobrazit licence. Na jednotlivých stránkách se objevují varianty Creative Commons i nástroje public domain. Filtr knihovny nenahrazuje řádek u souboru, který opravdu stahujete.

**MakerWorld** provozuje Bambu Lab na [makerworld.com](https://makerworld.com/). Wiki Bambu Lab popisuje nahrání tak, že tiskový profil je soubor 3MF z Bambu Studia: geometrie plus nastavení, ze kterých se má vyrobit G-code. Syrový model může být STL, STEP, FCStd, SCAD a řada dalších přípon, které wiki vyjmenovává. Profil před zveřejněním prochází cloudovým slicováním, které kontroluje i kompatibilitu s tiskárnou. U modelu se vyplňuje licence.

**Thingiverse** je dlouhodobá knihovna na [thingiverse.com](https://www.thingiverse.com/). Historicky se na ní sdílelo pod licencemi Creative Commons. Neexistuje jedna licence „všeho na Thingiverse“. U staršího remixu otevřete i původní dílo. Podmínky předchozí licence se na nový soubor umí přenést.

<figure>
  <img src="/media/pruvodce/modely-3dbenchy.png" alt="Model lodi 3DBenchy, testovací výtisk pro 3D tiskárnu" loading="lazy" decoding="async" />
  <figcaption>3DBenchy, testovací model Creative Tools. Foto: Creative Tools, CC BY 2.0, Wikimedia Commons. Není to snímek rozhraní žádné z knihoven.</figcaption>
</figure>

Snímky rozhraní Printables, MakerWorld a Thingiverse pod svobodnou licencí se nepodařilo dohledat. V průvodci jsou proto fotografie vytištěných věcí, jaké v těch knihovnách hledáte. Nejsou to obrazovky webů.

<figure>
  <img src="/media/pruvodce/modely-drzak-civky.jpg" alt="Vytištěný stojánek na cívku filamentu bez šroubů" loading="lazy" decoding="async" />
  <figcaption>Stojánek na cívku navržený jako čistě tištěný díl. Foto: Creative Tools, CC BY 2.0, Wikimedia Commons.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/modely-pistalka.jpg" alt="Vytištěná nosní píšťalka z PLA na tiskárně Prusa" loading="lazy" decoding="async" />
  <figcaption>Vytištěná píšťalka. Foto: Anachronist, CC BY-SA 4.0, Wikimedia Commons. Popisek souboru uvádí návrh autora Sebastian65.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/modely-kvet.jpg" alt="Vytištěný model květin ve váze" loading="lazy" decoding="async" />
  <figcaption>Vytištěný model květin. Foto: Jonathan Mauer, CC BY-SA 4.0, Wikimedia Commons.</figcaption>
</figure>

## Co vlastně stahujete

Geometrie a tiskový profil nejsou totéž.

- **STL** je síť. Otevře ji každý běžný slicer. Nenese teplotu, značku tiskárny ani výplň.
- **3MF z Bambu Studia** může podle wiki MakerWorld nést geometrii i sadu nastavení pro G-code. Otevření takového souboru na jiné tiskárně, než pro kterou profil vznikl, nastavení nepřenese samo sebou správně.
- **STEP, FCStd, SCAD** jsou zdroje, ze kterých jde rozměr změnit. MakerWorld je mezi surovými soubory uvádí. K úpravě potřebujete CAD, ne jen slicer. Postup je v [průvodci FreeCAD a OpenSCAD](/clanky/otevrene-cad-freecad-openscad/).

Když knihovna nabízí hotový profil pro vaši tiskárnu, začněte u něj a zkontrolujte v náhledu sliceru, jestli podložka, tryska a materiál sedí. Když nabízí jen STL, profil dodá slicer vašeho stroje. Cizí G-code stažený „připravený k tisku“ patří jen do tiskárny, pro kterou vznikl.

## Postup, který přežije všechny tři weby

1. Vyhledejte věc podle použití, ne podle nejstahovanějšího souboru týdne.
2. Otevřete stránku modelu a licenci. Komerční zakázka, úprava a další sdílení se liší model od modelu.
3. Podívejte se na fotky autora a na fotky lidí, kteří model vytiskli, pokud je stránka má. Render bez jediné fotky výtisku je slabší podklad než výtisk s popisem materiálu.
4. Přečtěte poznámku k orientaci, podpěrám a materiálu. Autor, který píše „tisknout touto stranou dolů“, obvykle ušetří víc času než přenastavení výplně.
5. Stáhněte zdroj, který umíte upravit, pokud rozměr musí sednout na váš díl. Samotné STL po změně měřítka v sliceru změní i vůle a tloušťky stěn.
6. Otevřete soubor ve sliceru své tiskárny. Náhled první vrstvy a převisů je poslední kontrola před tiskem.

Účet na knihovně není nutný k pochopení licence. Je nutný tam, kde web bez přihlášení soubor nedá. To zjistíte na konkrétní stránce, ne z tohoto textu.

## Časté omyly

**„Je to zdarma, takže to smím prodávat.“** Stažení zdarma řeší cenu souboru. Prodej výtisku řeší licence. NonCommercial a některé vlastní licence knihoven prodej výtisku nedovolí. Rozdíl je v [licenčním průvodci](/clanky/kde-stahnout-3d-modely-zdarma-a-licence/).

**„Profil z MakerWorld vytisknu beze změny na Pruse.“** Profil nese nastavení sliceru, ve kterém vznikl. Geometrii použít jde. Teploty, pořadí výměn a objem tiskárny zkontrolujte v profilu svého stroje.

**„Remix na Thingiverse dědí tu nejvolnější licenci z vlákna.“** Dědí omezení, která předchozí licence vyžaduje. Když je v řetězu ShareAlike, nový sdílený soubor s tím musí počítat.

## Praktický závěr

- [ ] Licence modelu je přečtená dřív, než soubor jde do zakázky.
- [ ] STL je tvar. 3MF z Bambu Studia může být tvar plus profil.
- [ ] Zdrojový SCAD, FCStd nebo STEP si nechte, když se rozměr bude měnit.
- [ ] Cizí profil zkontrolujte proti své trysce, podložce a materiálu.
- [ ] Knihovnu vyberte podle toho, kde je model s jasnou licencí a fotkou výtisku. Žádná z nich není univerzálně „ta pravá“.

## Zdroje

- [Printables](https://www.printables.com/)
- [MakerWorld](https://makerworld.com/)
- [Thingiverse](https://www.thingiverse.com/)
- [Bambu Lab Wiki — nahrání modelu a tiskového profilu](https://wiki.bambulab.com/en/makerworld/tutorials/how-to-upload-models)
- [Průvodce licencemi na První vrstvě](/clanky/kde-stahnout-3d-modely-zdarma-a-licence/)
