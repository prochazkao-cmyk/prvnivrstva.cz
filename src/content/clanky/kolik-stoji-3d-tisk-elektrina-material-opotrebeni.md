---
title: "Kolik stojí 3D tisk: elektřina, materiál a opotřebení"
description: "Náklad výtisku není jen hmotnost filamentu. Článek změří spotřebu, čas stroje, práci a rezervu na zmetky na konkrétních tiskárnách."
publishedAt: 2026-09-30
author: "Ondřej Procházka"
draft: true
tags:
  - náklady
  - elektřina
  - kalkulačka
  - podnikání
level: "začátečník"
evidence: "vlastni-mereni"
---

# MĚŘICÍ WORKSHEET — ČLÁNEK #28

Veřejná kalkulačka už existuje na `/nastroje/`, ale článek se nemá publikovat jako „reálné náklady“, dokud nemáme vlastní měření.

## Měřicí protokol

Na minimálně dvou běžných FDM strojích změřit stejným wattmetrem:

1. klidový příkon,
2. zahřátí studené tiskárny na PLA profil,
3. 60 minut stabilního PLA tisku,
4. stejný test s vyhřívanou komorou / ASA tam, kde dává smysl,
5. reálný čas stejného modelu,
6. hmotnost spotřebovaného materiálu ze sliceru vs. skutečná hmotnost dílu,
7. servisní/spotřební položky za definované období, pokud existuje evidence.

## Co článek musí oddělit

- **materiál:** g × Kč/kg,
- **energie:** kWh × aktuální vlastní sazba uživatele,
- **čas stroje:** účetní parametr, ne fyzikální konstanta,
- **lidská práce:** příprava, sundání, čištění, balení,
- **zmetkovitost / riziko:** uživatel zadává podle svého provozu,
- **marže:** není náklad a kalkulačka ji nemá maskovat jako „opotřebení“.

## Co nemáme vydávat za univerzální číslo

- jeden průměrný příkon pro všechny tiskárny,
- jednu cenu elektřiny pro celé Česko,
- jednu sazbu stroje za hodinu,
- jednu procentní zmetkovitost,
- „cenu za gram“ bez práce a procesu jako obchodní cenu zakázky.

## Finální článek

Má začít konkrétním změřeným příkladem a pak dát čtenáři model, do kterého si dosadí vlastní čísla. CTA vede na kalkulačku `/nastroje/`.
