---
title: "Jak vybrat průměr trysky: 0,25 vs. 0,4 vs. 0,6 vs. 0,8 mm"
description: "Praktický průvodce volbou průměru trysky pro FDM tisk: detail, průtok, materiály a co zkontrolovat po výměně."
publishedAt: 2026-10-06
reviewedAt: 2026-10-06
level: "začátečník"
technologies:
  - "FDM"
tags:
  - "tryska"
  - "nextruder"
  - "prusa"
  - "poradna"
---

Průměr trysky není univerzální známka kvality. Menší otvor pomáhá tam, kde potřebujete jemnější geometrii; větší tryska se hodí pro vyšší vrstvy, širší extruzi a robustnější díly. Volbu je proto lepší odvodit od modelu a materiálu než od představy, že jedna velikost je vždy „nejlepší“.

![Redakční rozhodovací schéma pro volbu trysky 0,25, 0,4, 0,6 a 0,8 mm.](/images/clanky/jak-vybrat-prumer-trysky.svg)

*Redakční schéma podle doporučení a podporovaných průměrů v dokumentaci Prusa Research; nejde o vlastní fyzický test.*

## Rychlá orientace

| Průměr | Kdy ho dát do užšího výběru |
| --- | --- |
| **0,25 mm** | drobné nápisy, miniatury a malé geometrické detaily |
| **0,4 mm** | univerzální výchozí volba pro běžný FDM tisk |
| **0,6 mm** | větší funkční díly, vyšší vrstvy a méně důrazu na jemný detail |
| **0,8 mm** | velké modely a situace, kde je důležitější robustní extruze než drobný detail |

Prusa Research ve své dokumentaci uvádí pro své tiskárny mimo jiné trysky 0,25, 0,4, 0,6 a 0,8 mm. Výrobce zároveň upozorňuje, že změna průměru vyžaduje odpovídající nastavení v PrusaSliceru.

## 0,25 mm: když rozhoduje drobná geometrie

Menší tryska dává smysl u modelů, kde je detail menší než to, co pohodlně vykreslí běžná 0,4mm konfigurace. Typickým příkladem jsou malé texty, miniatury nebo jemné dekorativní prvky.

Není ale automaticky lepší pro každý model. U velkého funkčního dílu může přinést zbytečně jemnou stopu a více tiskových drah, aniž by to uživateli přineslo praktický užitek.

## 0,4 mm: bezpečný univerzální základ

Pokud zatím nevíte, proč potřebujete jiný průměr, 0,4 mm je rozumný výchozí bod. Je to běžná konfigurace, pro kterou existuje široká podpora profilů a která pokrývá dekorativní i funkční tisk.

Přechod na jiný průměr by měl mít konkrétní důvod: detail, požadovanou geometrii, materiál nebo charakter velkého dílu.

## 0,6 mm: pro větší díly bez honby za nejjemnějším detailem

0,6mm tryska je zajímavá pro větší funkční modely a díly, u kterých jemnost drobných prvků není hlavní prioritou. Větší otvor dovoluje pracovat s odpovídajícími šířkami extruze a vyššími vrstvami, pokud je podporuje konkrétní tiskový profil.

Bez vlastního kontrolovaného testu ale nelze slíbit konkrétní procento úspory času. Výsledek závisí na geometrii modelu, výšce vrstvy, rychlostních a průtokových limitech i sliceru.

## 0,8 mm: specialista na velké geometrie

0,8 mm má smysl hlavně tam, kde jemné prvky ustupují velkým plochám a robustním stopám. Není vhodné hodnotit ji jako „horší kvalitu“ obecně: pro některé velké technické díly může být právě velká stopa požadovanou vlastností.

## Pozor na abrazivní filamenty

Průměr a materiál trysky jsou dvě různé otázky. U filamentů s abrazivními příměsemi nestačí vybrat pouze velikost otvoru; je nutné ověřit také vhodnost materiálu trysky. Prusa pro abrazivní materiály doporučuje trysku odolnou proti opotřebení a ve své dokumentaci upozorňuje také na omezení některých kombinací materiálu a malého průměru.

Před tiskem kompozitu proto kontrolujte doporučení výrobce konkrétního filamentu i tiskárny.

## Po výměně změňte profil, ne jen hardware

Po fyzické výměně trysky musí slicer vědět, jaký průměr je v tiskárně. Použití profilu pro jinou trysku může vést k nevhodné šířce extruze nebo dalším chybným parametrům.

U podporovaných tiskáren postupujte podle dokumentace výrobce pro výměnu trysky a následně vyberte odpovídající konfiguraci tiskárny/trysky v PrusaSliceru.

## Rozhodovací zkratka

Začněte otázkou **„co na mém modelu je kritické?“** Pokud jsou to drobné prvky, zvažte 0,25 mm. Pokud nemáte zvláštní požadavek, začněte na 0,4 mm. U větších funkčních dílů zvažte 0,6 mm. 0,8 mm si nechte pro modely, u kterých velká stopa a vysoké vrstvy dávají geometricky smysl.

Tohle není žebříček ani vlastní fyzický test. Je to rozhodovací průvodce založený na dokumentaci výrobce; konkrétní tisk vždy ověřte na svém modelu a materiálu.

## Zdroje

- Prusa Research Knowledge Base — Different nozzle types: https://help.prusa3d.com/article/different-nozzle-types_2193
- Prusa Research Knowledge Base — Replacing the Prusa Nozzle: https://help.prusa3d.com/article/replacing-the-prusa-nozzle-core-one-l_249007
- Prusa Research Knowledge Base — Abrasive materials: https://help.prusa3d.com/article/abrasive-materials_334436
