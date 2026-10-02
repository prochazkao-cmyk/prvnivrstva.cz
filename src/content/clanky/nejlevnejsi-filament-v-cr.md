---
title: "Nejlevnější filament v ČR"
description: "Datová stránka pro porovnání ceny filamentu včetně dopravy, dostupnosti a ceny za kilogram."
publishedAt: 2026-09-30
author: "Redakce První vrstvy"
draft: true
tags:
  - srovnávač
  - filament
  - ceny
level: "začátečník"
evidence: "redakce"
---

**Stav: draft. Nezveřejňovat jako cenový srovnávač, dokud nejsou napojené autorizované feedy alespoň 3 obchodů.**

## Datová pravidla

- preferovat XML/API/affiliate feed se souhlasem obchodu, ne agresivní scraping,
- ukládat cenu produktu, hmotnost návinu v gramech, cenu za kg, dopravu a skladovou dostupnost,
- hmotnost brát jen z feedu; když nejde přečíst, nabídku zahodit a kilogram nevymýšlet,
- zobrazovat čas poslední aktualizace,
- výchozí řazení je Kč/kg produktu; celkem včetně dopravy je vedlejší klíč a jen tam, kde je doprava známá,
- provize nesmí měnit pořadí výsledků,
- affiliate odkazy jasně označit.

## Minimální brána pro spuštění

1. 3–5 obchodů se spolehlivým feedem,
2. normalizace stejného produktu/variant,
3. kontrola výpadků a starých cen,
4. historie ceny alespoň pro interní diagnostiku,
5. veřejná metodika srovnávače.
