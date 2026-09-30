---
title: "PLA, PETG, ASA, TPU: který materiál kdy použít"
description: "PLA pro jednoduchý start, PETG pro běžné funkční díly, ASA pro venek a teplo, TPU pro pružnost. Výběr materiálu má začít použitím dílu, ne tabulkou teplot."
publishedAt: 2026-09-30
updatedAt: 2026-09-30
reviewedAt: 2026-09-30
author: "Redakce První vrstvy"
featured: false
hero: false
tags:
  - PLA
  - PETG
  - ASA
  - TPU
  - materiály
level: "začátečník"
technologies:
  - "FDM"
evidence: "vyrobce"
sourceNote: "Orientační rozsahy a provozní doporučení jsou k 30. 9. 2026 kontrolované proti Prusa Material Guide, článkům k PETG/ASA a Bambu Lab Filament Guide. Datasheet konkrétní cívky má vždy přednost."
---

**PLA zvolte pro jednoduchý start a vizuální díly, PETG pro běžné houževnatější funkční součásti, ASA pro venek a vyšší teplotní odolnost a TPU tam, kde se má díl pružně deformovat.** Přesný filament ale může mít jiné doporučené teploty, takže profil výrobce má přednost před univerzální tabulkou.

Nejdřív si položte otázku: **co má hotový díl vydržet?** Teprve potom řešte, na kolik stupňů nastavit trysku.

## PLA: nejjednodušší začátek

PLA je dobrá výchozí volba pro:

- prototypy,
- dekorace,
- modely,
- kryty a organizéry do interiéru,
- díly, které nejsou dlouhodobě vystavené vyšší teplotě.

Tiskne se obvykle snadno, má nízkou tendenci k warpingu a pro začátek nevyžaduje uzavřenou komoru.

Kompromisem je nižší teplotní odolnost a u některých použití i křehčí chování než u houževnatějších materiálů. Díl ponechaný v rozpáleném autě nebo blízko zdroje tepla proto není ideální úloha pro obyčejné PLA.

**Začněte PLA, pokud zatím nevíte, proč potřebujete jiný materiál.**

## PETG: univerzální dílenský materiál

PETG se hodí pro:

- držáky,
- kryty,
- funkční díly,
- součásti, kde chcete větší houževnatost než u běžného PLA,
- běžnou dílenskou výrobu.

Oproti PLA bývá citlivější na stringing a vlhkost a může držet na některých hladkých PEI površích až příliš agresivně. Proto není správný postup jen „zvednout teplotu a tisknout stejně jako PLA“.

→ [PETG a první vrstva](/rady-a-tipy/petg-prvni-vrstva/)  
→ [PETG dělá struny](/rady-a-tipy/petg-a-struny/)

**PETG je dobrý druhý materiál**, když už PLA zvládáte a chcete funkčnější díly bez nutnosti řešit komoru jako u ASA.

## ASA: venek, teplo a vyšší nároky na proces

ASA dává smysl pro:

- venkovní díly,
- kryty a součásti vystavené UV,
- funkční části v teplejším prostředí,
- situace, kde PLA nebo PETG už nestačí vlastnostmi.

Cena za tyto vlastnosti je náročnější tisk. ASA se při chladnutí smršťuje a u větších dílů snadno vzniká warping. Stabilní tepelné prostředí a uzavřená konstrukce proto dávají výrazně větší smysl než u PLA nebo PETG.

ASA také není materiál, který bych začátečníkovi doporučil jen proto, že „je technický“. Pokud díl nebude venku ani v teple, možná zbytečně přidáváte komplikace.

→ [Warping: proč se rohy zvedají](/clanky/warping-u-abs-priciny-a-checklist/)

## TPU: když má být díl pružný

TPU a další flexibilní filamenty jsou vhodné pro:

- těsnění,
- nožičky,
- gripy,
- ochranné prvky,
- pružné spojky,
- díly, které se mají opakovaně deformovat.

U TPU rozhoduje mimo jiné tvrdost konkrétního materiálu, cesta filamentu extruderem, rychlost a vlhkost. „TPU“ proto není jeden univerzální profil.

Flexibilní filament je typický příklad, kde výrobce konkrétní cívky a její datasheet mají větší cenu než obecná rada z internetu.

## Rychlé rozhodnutí

| Potřeba | Začněte u |
| --- | --- |
| Jednoduchý tisk, prototyp, dekorace | PLA |
| Houževnatější běžný funkční díl | PETG |
| Venkovní použití, UV a vyšší teplota | ASA |
| Pružný nebo tlumicí díl | TPU |

Pokud se dvě možnosti překrývají, rozhodujte podle nejslabšího místa dílu: teplota, UV, pružnost, náraz, rozměrová stabilita nebo obtížnost tisku.

## Orientační tiskové rozsahy

Rozsahy níže nejsou preset. Jsou pouze rychlá orientace z veřejných materiálových guideů:

| Materiál | Tryska | Podložka | Komora |
| --- | --- | --- | --- |
| PLA | přibližně 185–235 °C | 50–60 °C | obvykle ne |
| PETG | přibližně 215–270 °C | 70–90 °C | obvykle ne |
| ASA | přibližně 220–275 °C | 90–110 °C | doporučená |
| TPU / Flex | přibližně 220–260 °C | 40–85 °C | podle dílu a materiálu |

Rozsah je široký právě proto, že směsi se liší. **Konkrétní datasheet cívky a profil výrobce mají přednost.**

Aktuální orientační referenci včetně sušení najdete na stránce [Materiály](/materialy/).

## Vlhkost: problém, který vypadá jako špatný profil

Než začnete ladit retrakci, flow a teplotu, ověřte stav materiálu. Vlhký filament může způsobovat praskání, nepravidelný povrch, stringing a horší konzistenci extruze.

Citlivost na vlhkost se mezi materiály i konkrétními směsmi liší. Proto není dobré používat jednu univerzální teplotu sušení pro všechno.

→ [Vlhký filament: jak ho poznat](/rady-a-tipy/vlhky-filament/)  
→ [Sušení filamentu: kdy, jak a čím](/clanky/suseni-filamentu-kdy-jak-cim/)

## Co koupit jako první dvě cívky

Pro většinu nových uživatelů FDM dává smysl:

1. kvalitní PLA pro první nastavení a běžné modely,
2. PETG až ve chvíli, kdy potřebujete funkčnější vlastnosti.

ASA nebo TPU kupujte tehdy, když umíte říct, **kterou vlastnost konkrétního dílu tím řešíte**.

Další krok: pokud teprve vybíráte stroj, projděte [7 otázek před koupí první 3D tiskárny](/clanky/jak-vybrat-prvni-3d-tiskarnu-7-otazek/). Materiál totiž může rozhodnout, jestli potřebujete otevřenou tiskárnu, enclosure, nebo úplně jiný typ zařízení.

## Zdroje

- [Prusa Knowledge Base — Filament Material Guide](https://help.prusa3d.com/filament-material-guide)
- [Prusa Knowledge Base — PETG](https://help.prusa3d.com/cs/article/petg_2059)
- [Prusa Knowledge Base — ASA](https://help.prusa3d.com/article/asa_1809)
- [Prusa Knowledge Base — Drying filament](https://help.prusa3d.com/article/drying-filament_332086)
- [Bambu Lab — Filament Guide](https://cdn1.bambulab.com/filament/filament-guide/bcv8wbl4hj/filament-guide-en.pdf)
