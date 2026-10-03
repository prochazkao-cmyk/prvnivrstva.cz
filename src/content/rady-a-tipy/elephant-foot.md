---
title: "Elephant foot u 3D tisku: proč vzniká a jak ho opravit"
description: "Spodní hrana výtisku je širší než model? Praktický postup diagnostiky elephant footu od první vrstvy přes kompenzaci v PrusaSliceru až po návrh funkčních dílů."
publishedAt: 2026-09-29
updatedAt: 2026-10-03
level: "začátečník"
technologies:
  - "FDM"
tags:
  - "quick-win"
  - "elephant-foot"
  - "prve-vrstva"
  - "kalibrace"
---
## Co je elephant foot

„Elephant foot“ neboli sloní noha je rozšíření spodní hrany FDM výtisku. První vrstva je při tisku přitlačená k podložce a může být o něco širší, než odpovídá geometrii modelu. U dekorace si toho nemusíte všimnout, ale u krabiček, kolíků, otvorů a dílů s malou vůlí může několik spodních vrstev rozhodnout o tom, zda do sebe součásti vůbec zapadnou.

Prusa tento jev popisuje přímo v dokumentaci PrusaSliceru a nabízí pro něj funkci **Elephant foot compensation**. Než ale začnete kompenzaci zvyšovat, vyplatí se zjistit, jestli není problém už v první vrstvě.

## Jak poznat, odkud problém přichází

Podívejte se na výtisk z boku a porovnejte spodní hranu se stěnou o několik vrstev výš.

- **Rozšířená je hlavně první vrstva:** nejdřív prověřte nastavení první vrstvy a její přitlačení.
- **Spodní hrana je rozšířená rovnoměrně po obvodu:** dává smysl vyzkoušet slicerovou kompenzaci.
- **Problém je jen v části podložky:** před laděním modelu zkontrolujte stav a geometrii tiskové plochy.
- **Díl má správný tvar, ale protikus stále nejde sestavit:** může chybět konstrukční vůle. Prusa upozorňuje, že pro lícované díly neexistuje jedna univerzální tolerance; záleží na geometrii, orientaci, kalibraci, nastavení i materiálu.

Pokud současně řešíte špatnou adhezi, nezačínejte agresivním zvedáním první vrstvy. Nejdřív projděte náš postup **[První vrstva nedrží](/rady-a-tipy/prvni-vrstva-nedrzi/)**.

## Doporučené pořadí opravy

### 1. Nejdřív ověřte první vrstvu

Cílem není mít trysku co nejblíž podložce, ale vytvořit souvislou první vrstvu bez zbytečného vytlačování materiálu do stran. Pokud je první vrstva viditelně přemáčknutá, opravte nejdřív její kalibraci podle konkrétní tiskárny.

Neměňte několik parametrů najednou. Po jedné změně vytiskněte stejný malý zkušební díl a porovnejte spodní hranu.

### 2. Použijte Elephant foot compensation v PrusaSliceru

V PrusaSliceru je funkce v **Print Settings → Advanced → Elephant foot compensation** a je dostupná v režimu Advanced nebo Expert. Podle dokumentace Prusy kompenzace zmenšuje první vrstvu tak, aby vyrovnala její reálné rozmáčknutí.

Prusa uvádí, že u standardní 0,4mm trysky často funguje hodnota okolo **0,2 mm**. Berte ji ale jako výchozí orientační hodnotu výrobce, ne jako univerzální nastavení pro každou tiskárnu, materiál a model.

Důležitý vedlejší efekt: příliš vysoká kompenzace může oslabit spojení brimu s modelem. Pokud se brim přestane k dílu správně připojovat, je podle Prusy možné, že je hodnota kompenzace příliš vysoká.

### 3. U funkčních dílů řešte i CAD

Slicerová kompenzace opravuje konkrétní tiskový jev, ale nenahrazuje správný návrh sestavy. U spodní hrany funkčního dílu může pomoci malé zkosení (chamfer), aby případné rozšíření první vrstvy nezasahovalo do kritické lícovací plochy.

U spojovaných dílů počítejte také s konstrukční vůlí. Oficiální dokumentace Prusy výslovně upozorňuje, že nulová tolerance není spolehlivý předpoklad a potřebná vůle se mění podle rozměru, orientace, geometrie, kalibrace, nastavení a materiálu.

## Co nedělat

- **Nesnižujte globální flow celého modelu jen kvůli spodní hraně.** Můžete tím vytvořit jiný problém ve zbytku výtisku.
- **Nekompenzujte mechanický nebo kalibrační problém extrémní hodnotou ve sliceru.** Nejdřív musí dávat smysl samotná první vrstva.
- **Neměňte současně Z/first-layer nastavení, teplotu, flow i kompenzaci.** Nebudete vědět, která změna skutečně pomohla.
- **Nepovažujte jednu hodnotu tolerance za univerzální.** U přesných sestav ověřujte konkrétní kombinaci tiskárny, materiálu a geometrie.

## Rychlý rozhodovací postup

1. Je spodní hrana širší než stěna nad ní? Pokud ne, pravděpodobně neřešíte elephant foot.
2. Je první vrstva zjevně příliš přitlačená? Opravte nejdřív její kalibraci.
3. Je první vrstva jinak konzistentní? Vyzkoušejte malou hodnotu Elephant foot compensation a porovnejte stejný testovací díl.
4. Potřebujete přesné lícování? Přidejte do návrhu vhodnou vůli a podle geometrie zvažte zkosení spodní hrany.
5. Používáte brim? Po změně kompenzace ověřte, že se stále správně připojuje k modelu.

## Zdroje a ověření

Technické chování funkce a její umístění v PrusaSliceru jsme ověřili v primární dokumentaci výrobce:

- [Prusa Knowledge Base — Elephant foot compensation](https://help.prusa3d.com/article/elephant-foot-compensation_114487)
- [Prusa Knowledge Base — Modeling with 3D printing in mind](https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135)

Tento článek není záznamem jednoho laboratorního srovnávacího testu. Konkrétní hodnoty vždy ověřte na své tiskárně, materiálu a geometrii dílu.
