---
title: "Stringing — retrakce a další páky, než začnete zuřit"
description: "Pavučiny mezi věžemi nejsou osud. Retraction distance/speed, teplota a vlhkost — v tomhle pořadí to obvykle padá."
publishedAt: 2026-09-29
level: "začátečník"
technologies:
  - "FDM"
tags:
  - "quick-win"
  - "retrakce"
  - "stringing"
  - "kalibrace"
  - "slicer"
---
## Problém

Mezi oddělenými částmi modelu se táhnou chloupky a vlákna. U PETG je stringing běžnější než u PLA; u vlhkého filamentu skoro jistý. Lidé často maximálně zvednou retrakci, až dostanou clog nebo grindování filamentu — a stringy zůstanou, protože problém byla teplota nebo voda.

## Řešení

**1) Sušte filament** — zvlášť PETG/TPU/Nylon. Mokré = bubliny + oozing.

**2) Teplota dolů o 5–10 °C** (v bezpečném rozsahu materiálu). Teplejší plast teče víc při travel moves.

**3) Retraction (orientačně):**

| Extruder | Distance | Speed |
|----------|----------|-------|
| Direct drive | 0,4–1,2 mm | 30–60 mm/s |
| Bowden | 4–7 mm | 30–45 mm/s |

Kalibrační věž na retrakci &gt; hádání. Příliš vysoká distance = air printing a zácpy.

**4) Slicer detaily:** zapněte *retract on layer change*, zvažte *wipe*, snižte *travel* zbytečné kličky (Combing / Avoid crossing walls podle sliceru). Lower minimum travel before retract, pokud dává smysl.

**5) Rychlost travel** vyšší = méně času na oozing — v rozumných mezích stroje.

## Praktický závěr

- Nejdřív **suchý filament + teplota**, pak retrakce.  
- Direct drive nechce bowdenové milimetry.  
- Jedna kalibrační věž &gt; hodina náhodných změn.  
- Zbytky chloupků u PETG často dořeší tepelná pistole / rychlý ohřev — ale základ je profil.
