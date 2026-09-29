---
title: "Elephant foot — proč má díl „sloní nohu“ a jak ji srazit"
description: "Spodní vrstvy vytékají přes rozměr modelu. Není to jen estetika — kazí to lícování dílů. Rychlé opravy ve sliceru i na stroji."
publishedAt: 2026-09-29
level: "začátečník"
technologies:
  - "FDM"
tags:
  - "quick-win"
  - "elephant-foot"
  - "prve-vrstva"
  - "kalibrace"
---
## Problém

První (a někdy druhá) vrstva je širší než zbytek stěny — díl vypadá, jako by stál na sloní noze. Kolíky nelícují, krabičky nepasují, přesné otvory dole jsou menší.

Příčiny: příliš přimáčknutá první vrstva, bed moc horký (plast teče do stran), chybějící chamfer v modelu, vypnutá kompenzace ve sliceru.

## Řešení

**Na stroji:**

- Z-offset **mírně výš** (méně squash).  
- Bed o 5 °C níž, pokud adheze stále drží.  
- Ověřit, že bed je rovný — lokální „hrbol“ dělá lokální foot.

**Ve sliceru:**

- *Elephant foot compensation* / negative horizontal expansion na prvních vrstvách (názvy dle PrusaSlicer, Cura, Orca).  
- Nižší *initial layer flow* (např. 90–95 %), pokud software nabízí.  
- První vrstva ne zbytečně tlustá a pomalá až k roztékání.

**V CAD:** malý chamfer nebo radius na spodní hraně — praktická pojistka pro funkční díly.

## Praktický závěr

1. Nejdřív Z-offset a teplota bedu.  
2. Pak elephant foot compensation ve sliceru.  
3. U přesných dílů počítejte s chamferem už v návrhu.  
4. Neměňte flow celého modelu kvůli jedné spodní vrstvě.
