---
title: "Bed adheze — glue stick, PEI a brim bez magie"
description: "První vrstva nedrží nebo drží až moc. Kdy stačí čistý PEI, kdy lepidlo a kdy brim — stručný dílenský rozcestník."
publishedAt: 2026-09-29
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
## Problém

Díl se odlepí v polovině tisku, nebo naopak nejde sundat a ničíte sheet špachtlí. Adheze není „čím víc, tím líp“ — je to okno mezi **nedrží** a **přidrží navždy**.

Nejčastější příčiny: mastný bed, špatný Z-offset, studený bed u náročného materiálu, ostré rohy bez brim, špatný typ podložky na materiál.

## Řešení

**1) Čistý PEI (textured / smooth)**  
Na PLA a často PETG stačí. Před tiskem IPA. Prsty na tiskovou plochu nepatří. Z-offset tak, aby první vrstva byla přimáčknutá, ne nitkovaná.

**2) Glue stick (PVA)**  
Tenká vrstva na hladkém PEI nebo skle. Pomáhá u PETG (ochrana sheetu — PETG umí PEI „sníst“) a jako pojistka u ABS. Není potřeba natírat 2 mm nátěr; méně je víc. Po sérii tisků omyjte teplou vodou.

**3) Brim**  
5–15 mm kolem dílu drží rohy levněji než raft. Zapněte u vysokých kusů, ABS/ASA a modelů s malou styčnou plochou. Raft nechte na opravdu problematické případy — kazí spodní povrch.

**Rychlá volba:**

| Materiál | Typický start |
|----------|----------------|
| PLA | Čistý PEI, bez lepidla |
| PETG | PEI + často glue (ochrana), nebo textured pečlivě |
| ABS/ASA | Enclosure + brim + glue/slurry, horký bed |

## Praktický závěr

- Nejdřív **čistota + Z-offset**, pak chemie.  
- Glue stick = pojistka a separátor, ne náhrada za správnou teplotu.  
- Ostré rohy / malá plocha → **brim**.  
- PETG na drahém PEI bez ochrany = drahá lekce.
