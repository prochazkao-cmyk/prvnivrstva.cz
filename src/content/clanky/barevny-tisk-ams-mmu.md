---
title: "Barevný tisk: AMS, MMU a výměna celých filamentů"
description: "Diskrétní vícebarevný tisk mění celé cívky. AMS, MMU, dva extrudery a co z toho plyne pro odpad, materiál a slicer. Obraz z propustnosti filamentu je jiný průvodce."
publishedAt: 2026-10-03
updatedAt: 2026-10-03
reviewedAt: 2026-10-03
author: "Redakce První vrstvy"
tags:
  - průvodce
  - barevný tisk
  - AMS
  - MMU
  - Bambu Lab
  - Prusa
level: "pokročilý"
technologies:
  - "FDM"
evidence: "vyrobce"
sourceNote: "Kontrola 3. 10. 2026 proti wiki Bambu Lab k vícebarevnému tisku a AMS, produktové stránce AMS, README Bambu Studia a příručce Original Prusa MMU3 v1.02. Počet barev a seznam materiálů berte z aktuální stránky výrobce."
---

**Diskrétní barevný tisk skládá díl z celých filamentů.** Každá barva je vlastní cívka, vlastní slot a výměna, při které stroj vytlačí přechodový materiál. Obraz složený z tloušťky a propustnosti několika málo cívek je jiná metoda a má [vlastní průvodce](/clanky/multicolor-hueforge/).

## Tři způsoby, jak barvy fyzicky oddělit

1. **Jedna tryska a výměna cívky.** Ruční pauza, nebo automatická jednotka, která cívky podává za vás.
2. **Dva extrudery.** Každá barva má vlastní dráhu. Na fotografiích níže je dvoubarevný 3DBenchy z doby, kdy se takhle tiskly ukázkové modely.
3. **Více nástrojů.** Každá hlava má vlastní filament. Prusa XL je v tomhle průvodci jen jako typ konstrukce. Kompatibilitu konkrétní hlavy si ověřte u aktuálního stroje, ne z obecného textu.

<figure>
  <img src="/media/pruvodce/barvy-ams-x1c.jpg" alt="Tiskárna Bambu Lab X1 Carbon s modulem AMS položeným nahoře" loading="lazy" decoding="async" />
  <figcaption>Bambu Lab X1 Carbon s modulem AMS. Foto: Benlisquare, CC BY-SA 4.0, Wikimedia Commons.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/barvy-benchy-02.jpg" alt="Dvoubarevný výtisk modelu 3DBenchy ze dvou extruderů" loading="lazy" decoding="async" />
  <figcaption>Dvoubarevný 3DBenchy vytištěný dvěma extrudery. Foto: 3DBenchy, CC BY 2.0, Wikimedia Commons.</figcaption>
</figure>

## AMS v podání Bambu Lab

Automatický systém materiálu drží víc cívek a podává je do jedné tiskové hlavy. Produktová stránka AMS, kontrolovaná 3. 10. 2026, píše čtyři sloty v jedné jednotce a až čtyři jednotky přes AMS hub, tedy až 16 barev. Novější jednotky v řadě se jmenují jinak a mají jiná pravidla slotů. U své sestavy proto otevřete aktuální návod, ne jen tenhle odstavec.

Wiki k vícebarevnému tisku popisuje tenhle sled:

1. Založit filament a nastavit typ a barvu. Oficiální cívka Bambu Lab se umí přečíst přes RFID. Cizí cívku zadáte ručně.
2. V Bambu Studiu přidat filamenty a model obarvit.
3. Při odeslání úlohy studio spáruje barvu a typ materiálu se slotem. Párování jde upravit.
4. Když typ ve sliceru nesedí s typem, který AMS hlásí, slot pro ten tisk vybrat nejde.

Stejná wiki říká, že seznam filamentů v projektu nemusí být kopií toho, co zrovna leží v AMS. Rozhoduje barva a typ materiálu. Když je zapnutá správa více tiskáren, automatické párování wiki vypíná. Pak se materiál bere ze synchronizace u vybrané tiskárny.

<figure>
  <img src="/media/pruvodce/barvy-bambu-skupiny.png" alt="Náhled vícebarevného modelu a seznam filamentů v Bambu Studio" loading="lazy" decoding="async" />
  <figcaption>Skupiny barev v Bambu Studio. Oficiální snímek z wiki Bambu Lab.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/barvy-obarveni.png" alt="Model v Bambu Studio po obarvení jednotlivých částí" loading="lazy" decoding="async" />
  <figcaption>Model po obarvení částí. Oficiální snímek z wiki Bambu Lab.</figcaption>
</figure>

Produktová stránka AMS uvádí materiály, které jednotka nepodává. V seznamu je mimo jiné TPU a vlhký podpůrný filament. Seznam se mění s revizí jednotky. Než do AMS dáte plněnou nebo pružnou cívku, přečtěte aktuální tabulku na stránce své jednotky. Špatný materiál ve slotu není „jen horší povrch“. Umí zastavit podávání.

## MMU u Prusa

Original Prusa MMU3 je jednotka, která do jedné tiskárny podává víc filamentů. Oficiální příručka v1.02 z 22. 3. 2024 uvádí kombinaci s MK3S+, MK3.5, MK3.9 a MK4. Na e-shopu Prusa je také varianta MMU3 pro CORE One. Než jednotku koupíte, otevřete stránku produktu ke svému stroji. Příručka a firmware jsou na [stránce stažení MMU3](https://help.prusa3d.com/downloads/mmu3).

Příručka chce aktuální PrusaSlicer, firmware MMU3 a firmware tiskárny z jedné sady. Míchat nové MMU se starým firmwarem tiskárny je způsob, jak dostat chybu, která v návodu „nejde reprodukovat“.

V PrusaSliceru je více materiálů součást profilu tiskárny s MMU. Barvy se na model malují podobně jako v Bambu Studiu, výměna je ale práce jednotky MMU, ne AMS. Nástrojové hlavy u XL jsou zase jiný mechanismus: filament se nemusí vytlačovat z jedné trysky ven, protože jede jiná hlava. Odpad a čas výměny proto mezi AMS, MMU a toolchangerem neporovnávejte jedním číslem. Takové číslo by bylo vymyšlené.

## Kam mizí filament při výměně

Výměna barvy v jedné trysce vypláchne starou barvu. README Bambu Studia píše, že přechodový filament lze vyplachovat do výplně nebo do objektu. Zbytek, který do dílu nepatří, skončí jako odpad. Oficiální wiki k tomu má vlastní snímek.

<figure>
  <img src="/media/pruvodce/barvy-odpad.jpg" alt="Odpad filamentu vyprodukovaný při výměně barvy během tisku" loading="lazy" decoding="async" />
  <figcaption>Odpad při výměně filamentu. Oficiální snímek z wiki Bambu Lab, článek o omezení odpadu při výměně.</figcaption>
</figure>

Z toho plyne praktické pravidlo. Jednobarevný díl, kterému jen přebarvíte stěnu v sliceru, spotřebuje víc materiálu a času než stejný díl z jedné cívky. Více barev má smysl, když je barva součást funkce: popisek, značka dílu, rozlišení sestavy, nebo když podpěry jedou z materiálu, který jde sundat.

Podpůrný materiál je pořád výměna filamentu. Patří do stejného účtování času a odpadu. U AMS ho produktová stránka váže na suchý stav konkrétních podpůrných směsí. Vlhký podpůrný filament do seznamu podporovaných nepatří.

## Co zkontrolovat před dlouhým barevným tiskem

- Všechny sloty mají stejný typ polymeru, pokud návod stroje nemíchání výslovně dovoluje. PLA v jednom slotu a ABS v druhém wiki u AMS odmítne spárovat s řezem, který čeká PLA.
- Barva na obrazovce sliceru sedí s barvou cívky. Automatické párování se splete, když dvě cívky mají v projektu skoro stejný odstín a v AMS jiný.
- Náhled ukazuje výměny tam, kde je chcete. Malba, která obarví i vnitřek, přidá výměnu na každé takové vrstvě.
- První vrstva je z materiálu, který na podložce drží. Lepit „tou hezčí barvou“ a ignorovat přilnavost je častá příčina odlepeného dílu ve třetí hodině.

## Praktický závěr

- [ ] Barva po celých cívkách je AMS, MMU, druhý extruder nebo další nástroj. Obraz z propustnosti je [HueForge](/clanky/multicolor-hueforge/).
- [ ] U Bambu Lab začněte v Bambu Studiu a nechte RFID u oficiálních cívek, cizí cívky zadejte.
- [ ] U Prusa MMU3 držte firmware jednotky a tiskárny pohromadě a kompatibilitu čtěte u svého modelu.
- [ ] Každá výměna v jedné trysce je čas a odpad. Výplň ho umí schovat jen zčásti.
- [ ] Materiály, které výrobce u jednotky neuvádí, do ní nedávejte naslepo.

Slicer, ve kterém se barva maluje, je v [průvodci FDM slicery](/clanky/fdm-slicery-bambu-studio-orcaslicer-prusaslicer/).

## Zdroje

- [Bambu Lab Wiki — vícebarevný tisk na tiskárně](https://wiki.bambulab.com/en/x1/manual/multi-color-printing)
- [Bambu Lab Wiki — vícebarevný tisk v Bambu Studiu](https://wiki.bambulab.com/en/software/bambu-studio/multi-color-printing)
- [Bambu Lab Wiki — AMS v Bambu Studiu](https://wiki.bambulab.com/en/software/bambu-studio/use-ams-on-bambu-studio)
- [Produktová stránka AMS](https://us.store.bambulab.com/products/ams-multicolor-printing)
- [Spuštění MMU3 a firmware](https://help.prusa3d.com/downloads/mmu3)
- [Příručka Original Prusa MMU3, PDF v1.02](https://www.prusa3d.com/downloads/manual/prusa3d_manual_mmu3_en_102.pdf)
