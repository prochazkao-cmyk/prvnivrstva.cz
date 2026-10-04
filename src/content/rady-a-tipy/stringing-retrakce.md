---
title: "Stringing u 3D tisku: retrakce, teplota a diagnostika krok za krokem"
description: "Praktický postup pro odstranění stringingu bez náhodného zvyšování retrakce. Začněte profilem, teplotou, čistou tryskou a stavem filamentu."
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
evidence: "vyrobce"
---

Stringing jsou jemná vlákna mezi oddělenými částmi výtisku. Vznikají ve chvíli, kdy během přejezdu trysky uniká z hotendu malé množství materiálu. Není to automaticky důkaz, že máte „málo retrakce“ — příčinou může být také příliš vysoká teplota, nevhodný profil, materiál na povrchu trysky nebo stav filamentu.

> **Rychlý postup:** vraťte se k ověřenému profilu → zkontrolujte a očistěte trysku → ověřte filament → teprve potom dolaďujte teplotu a retrakci. Měňte vždy jednu věc.

## 1. Nezačínejte náhodným zvyšováním retrakce

Prusa ve své dokumentaci popisuje stringing jako materiál, který během travel pohybu dál vytéká z trysky. Mezi hlavní příčiny řadí příliš vysokou tiskovou teplotu a nevhodné nastavení retrakce. Současně doporučuje u podporovaných tiskáren začít oficiálním presetem PrusaSliceru místo náhodně upraveného profilu.

To je dobré obecné diagnostické pravidlo i mimo ekosystém Prusa: pokud výrobce tiskárny nebo filamentu dodává ověřený profil, nejdřív zjistěte, zda problém existuje i na něm. Jinak můžete ladit několik změněných parametrů proti sobě a ztratit příčinu.

## 2. Zkontrolujte trysku

String nemusí vznikat jen uvnitř hotendu. Prusa upozorňuje, že například PETG může při delším používání vytvořit na trysce tenkou vrstvu materiálu; zbytky se pak mohou zachytávat na výtisku a vypadat jako stringing.

Trysku čistěte bezpečně podle konstrukce konkrétního hotendu a pokynů výrobce. Cílem není agresivní zásah do horkého stroje, ale odstranění nalepených zbytků, které mohou diagnostiku zkreslit.

## 3. Filament: nejdřív stav, potom slicer

Pokud se chování stejného profilu se stejným materiálem postupně zhoršilo, je rozumné prověřit také filament. Hygroskopické materiály mohou po absorpci vlhkosti měnit chování při extruzi. Neznamená to, že každý stringing vyřeší sušička; znamená to, že nemá smysl kalibrovat profil na materiálu, jehož stav není stabilní.

Podrobnější diagnostika je v článku [Vlhký filament: jak ho poznat a co dělat](/rady-a-tipy/vlhky-filament/) a navazujícím průvodci [Sušení filamentu: kdy, jak a čím](/clanky/suseni-filamentu-kdy-jak-cim/).

## 4. Teplota: hledejte nejnižší funkční hodnotu profilu

Vyšší teplota snižuje viskozitu taveniny a může zhoršit vytékání během přejezdů. Neexistuje ale univerzální hodnota, o kterou má každý uživatel teplotu snížit: správné rozmezí závisí na materiálu, konkrétním filamentu, hotendu a rychlosti tisku.

Postupujte uvnitř rozsahu doporučeného výrobcem materiálu a měňte teplotu po malých krocích. Sledujte nejen stringing, ale také spojení vrstev, povrch a stabilitu extruze. Cílem není nejnižší možné číslo, ale nejnižší teplota, při které konkrétní sestava stále tiskne správně.

## 5. Co retrakce skutečně dělá

Při retrakci extruder před přejezdem stáhne filament zpět a po přesunu jej znovu zavede do pracovní polohy. Důležité jsou zejména:

- **délka retrakce** — o kolik se filament stáhne,
- **rychlost retrakce** — jak rychle tento pohyb proběhne,
- **minimální délka přejezdu pro retrakci** — kdy se retrakce vůbec spustí,
- **retrakce při změně vrstvy**,
- **wipe** — pohyb trysky během retrakce.

Nekopírujte univerzální tabulku „direct drive = X mm, Bowden = Y mm“. Konkrétní konstrukce se liší. Prusa například uvádí pro MK2.5/S a MK3/S/+ maximum délky retrakce 2 mm, zatímco preset Original Prusa MINI/MINI+ s Bowdenem používá 3,2 mm. To dobře ukazuje, proč je lepší začít profilem konkrétního stroje než internetovým rozsahem.

Příliš agresivní retrakce může přidat jiné problémy. Pokud se stringing zlepšuje jen za cenu nestabilní extruze, nejde o dobré řešení.

## 6. Wipe a retrakce při změně vrstvy

V aktuální dokumentaci Prusa doporučuje ponechat zapnuté **Retract on layer change** i **Wipe while retracting**. Neberte to ale jako univerzální povinnost pro každý slicer a každou tiskárnu; názvy a implementace se liší.

Pokud používáte tovární profil, nejdřív zachovejte jeho výchozí logiku. Pokročilé volby měňte až ve chvíli, kdy máte pod kontrolou materiál, teplotu a základní retrakci.

## 7. Jak ladit bez chaosu

Použijte malý model se dvěma nebo více oddělenými věžemi a stejný filament. Nemusíte hledat „magické skóre“. Potřebujete pouze porovnat dvě konfigurace za stejných podmínek.

Doporučené pořadí:

1. výchozí profil výrobce,
2. čistá tryska a stabilní filament,
3. teplota,
4. délka retrakce,
5. rychlost retrakce,
6. až potom wipe, travel a další optimalizace.

Po každém kroku si změnu poznamenejte. Pokud upravíte současně teplotu, retrakci i travel, výsledek vám neřekne, která změna pomohla.

## 8. Kdy už to nemusí být jen stringing

Pokud spolu s vlákny vidíte výpadky extruze, nepravidelné vrstvy, cvakání extruderu nebo stopy po ucpávání, nepokračujte slepě v retrakci. Přesuňte diagnostiku na tok materiálu: [Under-extrusion: co kontrolovat](/rady-a-tipy/under-extrusion/) a [Ucpaná tryska](/rady-a-tipy/ucpana-tryska/).

U PETG pokračujte také na [PETG a struny](/rady-a-tipy/petg-a-struny/) a [PETG: první vrstva](/rady-a-tipy/petg-prvni-vrstva/).

## Praktický závěr

Stringing řešte jako diagnostický strom, ne jako soutěž o nejvyšší retrakci. Nejprve obnovte známý výchozí stav, zkontrolujte trysku a filament, potom dolaďte teplotu a až následně retrakci. Hodnoty z cizí tiskárny nejsou měření vaší sestavy.

## Zdroje

- [Prusa Knowledge Base — Stringing and oozing](https://help.prusa3d.com/article/stringing-and-oozing_1805) — princip stringingu, retrakce a související nastavení; kontrolováno 4. 10. 2026.
- [Prusa Knowledge Base — PLA](https://help.prusa3d.com/cs/article/pla_2062) — výrobce uvádí retrakci jako jednu z cest k omezení stringingu/oozingu u PLA; kontrolováno 4. 10. 2026.

*Článek je zdrojovaný diagnostický průvodce. Uvedené postupy nejsou vydávány za vlastní laboratorní měření První vrstvy.*
