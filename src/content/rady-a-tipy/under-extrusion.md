---
title: "Under-extrusion — když v modelu chybí materiál, začněte od cívky"
description: "Mezery ve stěnách a slabé vrstvy mohou dělat mokrý filament, odpor v podávání, částečně ucpaná tryska i špatný profil. Diagnostika v pořadí, které šetří čas."
publishedAt: 2026-09-29
reviewedAt: 2026-09-29
level: "začátečník"
technologies:
  - "FDM"
tags:
  - "under-extrusion"
  - "extruze"
  - "tryska"
  - "flow"
  - "troubleshooting"
evidence: "redakce"
sourceNote: "Obecný diagnostický postup. Konkrétní servisní kroky a limity hotendu ověřte pro svůj model tiskárny."
---

## Rychlá odpověď

Under-extrusion znamená, že tiskárna **do dílu nedostává tolik materiálu, kolik slicer očekává**. Než zvednete flow, projděte mechanickou cestu filamentu:

1. cívka se volně odvíjí,
2. filament není zamotaný ani sevřený,
3. extruder filament skutečně podává,
4. tryska není částečně ucpaná,
5. teprve potom řešte profil a flow.

Zvýšit flow může na chvíli zamaskovat problém v podávání, ale neopravený odpor nebo ucpání se vrátí.

## Jak under-extrusion vypadá

Typické projevy:

- mezery mezi sousedními čarami,
- tenké nebo nedokončené perimetry,
- nepravidelný povrch,
- slabé spojení vrstev,
- extruder cvaká nebo obrušuje filament,
- problém se objevuje jen v rychlejších částech tisku.

Jestli je problém pouze na první vrstvě, začněte nejdřív u [Z-offsetu](/rady-a-tipy/z-offset/) a [první vrstvy](/rady-a-tipy/prvni-vrstva-nedrzi/).

## 1. Cívka a vedení

Zkontrolujte, že se cívka může otáčet bez velkého odporu a filament nikde nedrhne. U systémů s dlouhou PTFE cestou nebo multimateriálovým podáváním se odpor může sčítat na více místech.

Odpojte komplikace. Pokud to konstrukce stroje dovoluje, diagnostikujte co nejkratší a nejjednodušší cestu filamentu.

## 2. Extruder

Podívejte se, jestli ozubená kola filament neprokluzují nebo neobrušují. Příčinou může být nečistota, nevhodný přítlak, poškozený filament nebo odpor dál v hotendu.

Příliš silný přítlak také není univerzální řešení. Může filament deformovat a u měkkých materiálů situaci zhoršit.

## 3. Tryska a hotend

Částečné ucpání se nemusí projevit úplným zastavením extruze. Stroj může tisknout, ale průtok je nepravidelný nebo nestíhá vyšší rychlost.

Pokud máte podezření na ucpání, pokračujte návodem [Ucpaná tryska](/rady-a-tipy/ucpana-tryska/). Servisní postup volte podle konstrukce hotendu; univerzální násilné protlačování je dobrý způsob, jak vytvořit druhý problém.

## 4. Teplota a rychlost

Při stejné trysce existuje limit, kolik materiálu hotend za sekundu spolehlivě roztaví. Pokud problém začíná pouze při rychlých výplních nebo širokých čarách, může profil požadovat vyšší objemový průtok, než sestava zvládá za dané teploty.

Nejdřív porovnejte s ověřeným profilem pro konkrétní tiskárnu a materiál. Nezvedejte teplotu bez kontroly doporučení výrobce filamentu.

## 5. Flow až po mechanice

Když je mechanická cesta v pořádku a extruze je konzistentní, dává smysl ověřit kalibraci flow. Použijte opakovatelný test a měňte jednu hodnotu najednou.

Pomocník je na stránce [Nástroje](/nastroje/) a celý postup v článku [Kalibrace flow](/rady-a-tipy/kalibrace-flow/).

<aside class="takeaway">
  <p class="takeaway-label">Udělej teď</p>
  <p>Nejdřív uvolněte cestu filamentu a ověřte extruder. Pak zkontrolujte trysku. Profil, teplotu a flow řešte až ve chvíli, kdy víte, že stroj materiál mechanicky podává konzistentně.</p>
</aside>
