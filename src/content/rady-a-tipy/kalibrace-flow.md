---
title: "Kalibrace flow — ať stěny mají správnou tloušťku"
description: "Overextrusion dělá sloní hrboly a rozměrový chaos, underextrusion díry ve stěnách. Flow (extrusion multiplier) se kalibruje na konkrétní filament — ne podle fóra."
publishedAt: 2026-09-29
level: "pokročilý"
technologies:
  - "FDM"
tags:
  - "quick-win"
  - "kalibrace"
  - "flow"
  - "slicer"
---
## Problém

Profil z výroby lže o pár procent. Filament má jiný průměr, jinou hustotu barevné vs. natural varianty, tryska je opotřebená. Výsledek: stěny moc tlusté (blobby surfaces, rozměry plus) nebo naopak mezery mezi perimetry.

Flow se netipuje podle „u PETG dej 0.95“. Měří se.

## Řešení

**Metoda single-wall / vase (jednoduchá a spolehlivá):**

1. Vytiskněte otevřenou krabičku nebo kalibrační kostku s **1 perimetrem**, 0 top/bottom, bez infill (nebo oficiální flow cube z vašeho sliceru).  
2. Změřte tloušťku stěny posuvkou na více místech.  
3. Porovnejte s *expected line width* (např. 0,45 mm).  
4. Nový flow = starý × (očekávaná / naměřená).

Příklad: očekáváte 0,45, naměříte 0,48 → flow × (0,45/0,48) ≈ 0,94×.

**Podmínky:** správný průměr filamentu ve sliceru (změřte posuvkou!), zahřátá ustálená tryska, suchý materiál, e-steps/rotational distance už dříve OK.

**Po flow:** teprve ladit pressure advance / linear advance a teplotu. Obráceně mícháte efekty.

## Praktický závěr

- Kalibrujte **per filament** (alespoň per značka + typ).  
- Nejdřív průměr filamentu a e-steps, pak flow.  
- Posuvka &gt; oko.  
- Uložte profil pojmenovaný (`PETG_Prusament_flow0.94`), ať to nehledáte za měsíc.
