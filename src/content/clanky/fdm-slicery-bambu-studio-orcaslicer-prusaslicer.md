---
title: "FDM slicery: Bambu Studio, OrcaSlicer a PrusaSlicer"
description: "Jak vybrat slicer podle tiskárny, co v něm první týden měnit a co nechat na profilu výrobce. Podklad je dokumentace PrusaSliceru, Bambu Studia a OrcaSliceru."
publishedAt: 2026-10-03
updatedAt: 2026-10-03
reviewedAt: 2026-10-03
author: "Redakce První vrstvy"
tags:
  - průvodce
  - slicer
  - PrusaSlicer
  - Bambu Studio
  - OrcaSlicer
  - FDM
level: "začátečník"
technologies:
  - "FDM"
evidence: "vyrobce"
sourceNote: "Kontrola 3. 10. 2026 proti README Bambu Studio, README a popisu repozitáře OrcaSlicer, stránce help.prusa3d.com/cs/product/prusaslicer a wiki Bambu Lab k vícebarevnému tisku. Snímek PrusaSliceru 2.9.6 je konkrétní verze na fotografii, ne tvrzení, že jde o nejnovější vydání."
---

**Slicer vyberte podle tiskárny, kterou máte na stole.** Prusa začíná v PrusaSliceru, Bambu Lab v Bambu Studiu. OrcaSlicer přidejte, až budete vědět, kterou část oficiálního profilu chcete řídit sami.

Krátké rozhodnutí pro první týden je v textu [Slicer pro začátečníky](/clanky/slicer-pro-zacatecniky-prusaslicer-bambu-studio-orcaslicer/). Tady je širší mapa: co který program je, odkud se bere a jak s ním nezničit funkční profil.

## Co slicer rozhoduje

Z modelu udělá dráhy, teploty a příkazy pro tiskárnu. V praxi jsou to tři hromádky nastavení:

1. **Tiskárna** — objem, extruder, limity stroje.
2. **Filament** — teploty a chování konkrétního materiálu.
3. **Proces** — výška vrstvy, stěny, výplň, rychlosti, podpěry.

Oficiální profil už velkou část té práce udělal. První tisk nemá být místem, kde se najednou mění akcelerace, šířky čar a retrakce.

<figure>
  <img src="/media/pruvodce/slicer-prusaslicer.png" alt="Rozhraní PrusaSliceru s modelem na tiskové podložce" loading="lazy" decoding="async" />
  <figcaption>Rozhraní PrusaSliceru. Foto: Majkluss, CC BY-SA 4.0, Wikimedia Commons.</figcaption>
</figure>

## PrusaSlicer

PrusaSlicer je slicer Prusa Research. Česká Knowledge Base ho má jako samostatný produkt: [PrusaSlicer](https://help.prusa3d.com/cs/product/prusaslicer). Profily tiskárny, filamentu a tisku jsou v něm oddělené a výrobce jimi pokrývá vlastní stroje.

Použijte ho jako výchozí program, když tisknete na Original Prusa. Otevřený kód znamená, že ho lidé pouštějí i na cizích strojích. Profil k cizí tiskárně je pořád jen tak dobrý, jak sedí na její mechaniku. Když výrobce vašeho stroje dodává vlastní slicer, začněte u něj.

Na snímku níže je verze 2.9.6. Číslo verze na fotografii není slib, že stejné menu najdete v pozdějším vydání. Po aktualizaci zkontrolujte, jestli pořád používáte profil své tiskárny.

<figure>
  <img src="/media/pruvodce/slicer-prusaslicer-296.png" alt="Snímek obrazovky PrusaSliceru ve verzi 2.9.6" loading="lazy" decoding="async" />
  <figcaption>PrusaSlicer 2.9.6. Foto: EvanTech10, CC BY-SA 3.0, Wikimedia Commons.</figcaption>
</figure>

Náhled po slicování má být součást práce, ne odměna na konci. Barvy v náhledu umí ukázat třeba průtok. Než soubor pošlete do tiskárny, projeďte vrstvy v místech převisů a první vrstvy.

<figure>
  <img src="/media/pruvodce/slicer-gyroid.png" alt="Řez výtiskem s gyroidní výplní, barvy v náhledu PrusaSliceru ukazují průtok" loading="lazy" decoding="async" />
  <figcaption>Řez krabice s pětiprocentní gyroidní výplní. Barvy jsou průtok v náhledu PrusaSliceru. Foto: Anachronist, CC BY-SA 4.0, Wikimedia Commons.</figcaption>
</figure>

## Bambu Studio

Bambu Studio je program Bambu Lab pro jejich tiskárny i další stroje. README projektu říká, že stojí na PrusaSliceru a ten zase na Slic3r. Předpřipravená vydání pro Windows, macOS a Linux jsou na [stránce releases](https://github.com/bambulab/BambuStudio/releases/).

README uvádí mimo jiné víc podložek v jednom projektu, vzdálené ovládání, automatické rozmístění a orientaci, běžné, stromové a hybridní podpěry, malování více materiálů, parametry pro celý projekt, objekt i část, podporu STEP a vyplachování přechodového filamentu do výplně nebo do objektu při výměně barvy.

Pro tiskárnu Bambu Lab je to nejkratší cesta k oficiálnímu profilu a k AMS. Postup více barev je ve [wiki vícebarevného tisku](https://wiki.bambulab.com/en/software/bambu-studio/multi-color-printing) a v samostatném průvodci [diskrétním barevným tiskem](/clanky/barevny-tisk-ams-mmu/).

<figure>
  <img src="/media/pruvodce/slicer-bambu-filamenty.jpg" alt="Seznam filamentů a nastavení materiálu v Bambu Studio" loading="lazy" decoding="async" />
  <figcaption>Seznam filamentů v Bambu Studio. Oficiální snímek z wiki Bambu Lab, článek o vícebarevném tisku.</figcaption>
</figure>

Profil filamentu vybírejte podle cívky, kterou zakládáte. PLA profil na PETG je častá příčina špatného povrchu. Když AMS u oficiálního filamentu Bambu Lab přečte RFID, studio dostane typ a barvu samo. Cizí cívku je potřeba zadat ručně. Podrobnosti jsou ve [wiki k AMS](https://wiki.bambulab.com/en/x1/manual/multi-color-printing).

## OrcaSlicer

OrcaSlicer je otevřený generátor G-code. Popis repozitáře uvádí tiskárny Bambu, Prusa, Voron, VzBot, RatRig, Creality a další. Oficiální web projektu je [orcaslicer.com](https://www.orcaslicer.com/), kód je na [GitHubu](https://github.com/OrcaSlicer/OrcaSlicer).

Má smysl, když tisknete na víc značek, nebo když oficiální slicer vašeho stroje neumí zásah, který už umíte pojmenovat. Nemá smysl jako první program v den, kdy tiskárnu vybalíte. Víc voleb znamená víc míst, kde se rozbije profil, který předtím fungoval.

Postupy k aktuální verzi čtěte na [wiki projektu](https://github.com/OrcaSlicer/OrcaSlicer/wiki/). Konkrétní kalibrační obrazovky se mezi verzemi mění, proto je tady nepopisujeme jako trvalé menu.

Svobodně šiřitelný snímek celého rozhraní OrcaSliceru ve velikosti, která jde v průvodci číst, se k datu kontroly nepodařilo dohledat. Proto tu není. Rozhraní PrusaSliceru a oficiální snímek Bambu Studia nahoře ukazují stejný typ práce: profil, filament a náhled vrstev.

## Co měnit až po prvních úspěšných výtiscích

Dokud oficiální profil tiskne, nechte na pokoji limity stroje, akcelerace a svazek rychlostí. Měňte po jedné věci:

- výšku vrstvy,
- profil materiálu podle cívky,
- počet stěn u funkčního dílu,
- podpěry tam, kde náhled ukáže převis ve vzduchu,
- průtok až podle [postupu kalibrace flow](/rady-a-tipy/kalibrace-flow/), když máte co měřit.

Výplň není zkratka k pevnosti. U dílu, který nese sílu, rozhoduje častěji počet obvodů a směr vrstev. To je důvod, proč se model v sliceru nejdřív otočí a teprve potom se ladí procento výplně.

## Praktický závěr

- [ ] Original Prusa: PrusaSlicer a profil přesného modelu.
- [ ] Bambu Lab: Bambu Studio a profil přesného modelu.
- [ ] OrcaSlicer až ve chvíli, kdy umíte říct, co oficiální profil neumí.
- [ ] Po aktualizaci sliceru znovu vyberte tiskárnu a filament.
- [ ] Jedna změna, jeden zkušební výtisk.

Když je model z internetu, nejdřív licence: [kde stáhnout modely](/clanky/kde-stahnout-3d-modely-zdarma-a-licence/) a [databáze modelů](/clanky/databaze-modelu-printables-makerworld-thingiverse/).

## Zdroje

- [PrusaSlicer v Prusa Knowledge Base](https://help.prusa3d.com/cs/product/prusaslicer)
- [Bambu Studio na GitHubu](https://github.com/bambulab/BambuStudio)
- [Bambu Lab Wiki — vícebarevný tisk](https://wiki.bambulab.com/en/software/bambu-studio/multi-color-printing)
- [OrcaSlicer](https://www.orcaslicer.com/)
- [OrcaSlicer na GitHubu](https://github.com/OrcaSlicer/OrcaSlicer)
- [Wiki OrcaSliceru](https://github.com/OrcaSlicer/OrcaSlicer/wiki/)
