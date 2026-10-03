---
title: "Bed adheze — glue stick, PEI a brim bez magie"
description: "První vrstva nedrží nebo drží až moc? Praktický rozcestník pro PEI, glue stick, brim, čistotu podložky a správnou první vrstvu."
publishedAt: 2026-09-29
updatedAt: 2026-10-03
level: "začátečník"
technologies:
  - "FDM"
tags:
  - "quick-win"
  - "adheze"
  - "pei"
  - "glue-stick"
  - "brim"
  - "prve-vrstva"
---
## Adheze není soutěž o nejsilnější přilepení

Správná adheze znamená, že díl během tisku drží, ale po vychladnutí jej lze bezpečně sundat. Problém proto může být na obou stranách: **výtisk se odlepuje**, nebo naopak **drží tak silně, že hrozí poškození tiskového povrchu**.

Než začnete přidávat lepidlo, brim a zvyšovat teplotu podložky, oddělte čtyři různé otázky:

1. Je tiskový povrch opravdu čistý?
2. Je první vrstva správně nastavená?
3. Používáte vhodný povrch pro daný materiál?
4. Je problém v malé styčné ploše nebo ve warpingové geometrii modelu?

Pokud nevyřešíte první dvě otázky, další zásahy často jen maskují skutečnou příčinu.

## 1. Nejdřív čistota a první vrstva

Mastnota z prstů výrazně snižuje přilnavost. Prusa u svých PEI plátů doporučuje pravidelné odmaštění přibližně 90% IPA; konkrétní způsob čištění se ale liší podle typu povrchu. Aceton například patří jen na některé hladké PEI povrchy a **nemá se používat na saténové ani texturované pláty**.

Podrobný postup máme zvlášť: [Bezpečné čištění build plate](/rady-a-tipy/bezpecne-cisteni-build-plate/).

Druhá kontrola je výška první vrstvy. Příliš vysoko položená tryska nechává jednotlivé linky málo spojené a kontakt s podložkou je malý. Příliš nízká tryska naopak materiál nadměrně mačká. Než budete měnit adhezní prostředky, projděte [Z-offset a první vrstvu](/rady-a-tipy/z-offset/) a [První vrstva nedrží](/rady-a-tipy/prvni-vrstva-nedrzi/).

## 2. Hladký, texturovaný, nebo saténový PEI?

Neexistuje jeden nejlepší povrch pro všechny filamenty.

### Hladký PEI

Podle Prusa Knowledge Base poskytuje hladký PEI vysokou adhezi a je vhodný mimo jiné pro PLA. Právě vysoká adheze ale znamená, že materiály jako PETG nebo TPU mohou držet až příliš silně. U PETG proto může být vhodnější jiný typ plátu nebo separační vrstva podle doporučení výrobce tiskárny a filamentu.

### Texturovaný PEI

Texturovaný práškový plát je u Prusa určený zejména pro materiály s vyšší přilnavostí, typicky PETG a flexibilní filamenty. Výhodou není jen vzhled spodní strany výtisku, ale hlavně jiné adhezní chování než u hladkého PEI.

### Saténový PEI

Saténový plát stojí vlastnostmi mezi hladkým a texturovaným. Prusa jej uvádí jako vhodný pro PLA i PETG a řadu dalších materiálů. U malých PLA dílů ale může být stále potřeba brim.

Pokud tisknete PETG, pokračujte na samostatný návod [PETG: první vrstva, PEI a Z-offset](/rady-a-tipy/petg-prvni-vrstva/).

## 3. Glue stick: někdy zvyšuje adhezi, jindy hlavně odděluje

PVA glue stick není univerzální lék na špatnou první vrstvu. Má dvě odlišné role:

- může pomoci s přilnavostí materiálu k povrchu,
- u materiálů s velmi silnou vazbou může fungovat jako **ochranná separační vrstva** mezi výtiskem a PEI.

To je důležité například u PETG na hladkém PEI. Prusa výslovně upozorňuje, že PETG může k hladkému PEI přilnout tak silně, že při sundávání hrozí poškození povrchu.

Nanášejte pouze tenkou, souvislou vrstvu. Po použití lze běžné PVA lepidlo podle Prusa Knowledge Base odstranit vodou a prostředkem na nádobí. Konkrétní kompatibilitu vždy ověřte pro svůj typ plátu — pravidla pro hladký, texturovaný a saténový povrch nejsou totožná.

## 4. Kdy dává smysl brim

Brim zvětší styčnou plochu první vrstvy kolem modelu. Je užitečný zejména tehdy, když je samotná kontaktní plocha modelu malá nebo mají rohy tendenci se zvedat.

Brim ale neřeší mastnou podložku ani špatnou první vrstvu. Pokud malý model nedrží ani uprostřed čistého plátu, začněte diagnostikou povrchu a Z-offsetu. Pokud naopak první vrstva vypadá správně a odlepují se až rohy většího dílu, brim je logický další krok.

U ABS a ASA je odlepování rohů často součást širšího problému s teplotním smršťováním. Tam pokračujte na [Warping u ABS: příčiny a checklist](/clanky/warping-u-abs-priciny-a-checklist/).

## Rychlá diagnostika podle symptomu

| Symptom | Co zkontrolovat jako první | Další krok |
|---|---|---|
| Linky první vrstvy se nechytají | čistota povrchu, Z-offset | první vrstva / Z-offset |
| PLA na hladkém PEI nedrží | mastnota, první vrstva | vyčistit, znovu ověřit první vrstvu |
| PETG na hladkém PEI drží extrémně | nevhodná kombinace povrchu a materiálu | separační vrstva nebo vhodnější plát |
| Rohy velkého dílu se zvedají | geometrie, teplotní podmínky | brim; u ABS/ASA řešit i warping |
| Malý PLA díl má minimální kontakt | styčná plocha | brim může pomoci |
| Po výměně plátu se změnila první vrstva | rozdílná tloušťka / profil plátu | zkontrolovat profil plátu a Z-offset |

## Co nedělat

- **Nepřidávejte lepidlo automaticky.** Nejprve zjistěte, proč díl nedrží.
- **Nepoužívejte aceton naslepo.** Na texturovaný a saténový Prusa plát nepatří.
- **Nesundávejte silně přilepený PETG hrubou silou.** Nejprve nechte plát vychladnout a respektujte doporučení výrobce povrchu.
- **Neměňte pět parametrů najednou.** Po každém zásahu musí být jasné, co problém skutečně vyřešilo.
- **Neberte brim jako opravu špatného Z-offsetu.** Brim řeší geometrii kontaktu, ne základní kalibraci.

## Doporučené pořadí řešení

**Nedrží první vrstva:**

1. zkontrolovat a vyčistit povrch,
2. ověřit první vrstvu a Z-offset,
3. ověřit kompatibilitu materiálu a plátu,
4. teprve potom zvažovat glue stick nebo jiný adhezní prostředek,
5. pokud je problém hlavně v geometrii modelu, přidat brim.

**Drží až příliš:**

1. nechat plát úplně vychladnout,
2. ověřit, zda je materiál vhodný pro daný povrch,
3. u dalšího tisku použít doporučený plát nebo separační vrstvu,
4. nepokračovat metodou „větší síla při sundávání“.

## Zdroje a metodika

Tento průvodce je redakční syntéza veřejné technické dokumentace; nejde o publikaci výsledků vlastního srovnávacího testu.

Primární zdroje:

- [Prusa Knowledge Base — First layer issues](https://help.prusa3d.com/article/first-layer-issues_1804)
- [Prusa Knowledge Base — Smooth steel sheet](https://help.prusa3d.com/article/smooth-steel-sheet_196550)
- [Prusa Knowledge Base — Textured steel sheet](https://help.prusa3d.com/article/textured-steel-sheet_196534)
- [Prusa Knowledge Base — Satin steel sheet](https://help.prusa3d.com/article/satin-steel-sheet_196526)

## Praktický závěr

Adhezi řešte v pořadí **čistota → první vrstva → správný povrch → pomocný prostředek → brim**. Glue stick není automaticky „víc lepidla“; někdy je jeho nejdůležitější funkcí ochranná separační vrstva. A pokud PETG nebo jiný silně přilnavý materiál drží až příliš, je to stejně relevantní problém jako výtisk, který se odlepuje.
