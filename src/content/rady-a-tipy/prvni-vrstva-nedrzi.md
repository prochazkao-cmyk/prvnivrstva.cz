---
title: "První vrstva nedrží: diagnostika krok za krokem"
description: "Praktický diagnostický postup pro FDM: výška první vrstvy, čistota podložky, profil materiálu, rychlost, průvan a geometrie dílu."
publishedAt: 2026-09-22
updatedAt: 2026-10-04
level: "začátečník"
technologies:
  - "FDM"
tags:
  - první vrstva
  - adheze
  - deska
  - troubleshooting
evidence: "vyrobce"
sourceNote: "Diagnostický průvodce založený na dokumentaci výrobců. Konkrétní teploty, čištění a péči o povrch vždy ověřte pro svou tiskárnu, filament a typ plátu."
---

Když se první vrstva odlepuje, **nová podložka ani lepidlo nejsou první krok**. Nejrychlejší cesta je oddělit možné příčiny a měnit vždy jen jednu proměnnou. U FDM tisku začněte výškou první vrstvy a čistotou povrchu; teprve potom řešte teplotní profil, rychlost, průvan a geometrii dílu.

## Rychlá diagnostika podle vzhledu

| Co vidíte | Pravděpodobný směr kontroly | Co udělat jako první |
| --- | --- | --- |
| Kulaté čáry a mezery mezi nimi | tryska je příliš vysoko | zkontrolovat kalibraci první vrstvy |
| Materiál je silně rozmáčknutý, tvoří hřebínky | tryska může být příliš nízko | upravit výšku podle postupu výrobce |
| Vrstva vypadá správně, ale lokálně se odlepí | mastnota nebo znečištění | vyčistit plát metodou pro konkrétní povrch |
| Rohy se zvedají až během tisku | smršťování / warping / proudění vzduchu | řešit prostředí, materiál a geometrii |
| Problém začal po výměně plátu | jiná tloušťka nebo povrch | zkontrolovat profil plátu / kalibraci |
| Problém začal po změně filamentu | jiný materiál nebo profil | vrátit ověřený profil výrobce |

## 1. Nejdřív zkontrolujte tvar první čáry

Cílem není filament do podložky „zarazit“. Čára má být **lehce zploštělá a sousední tahy mají navazovat bez mezer**. Dokumentace Prusa pro kalibraci první vrstvy popisuje typický projev příliš vysoké trysky jako kulatější stopu a mezery mezi liniemi. Příliš nízké nastavení může naopak materiál nadměrně mačkat a vytlačovat do stran.

To je důležitější než kopírování cizího číselného Z-offsetu. Hodnota závisí na konkrétní tiskárně, sestavě a plátu. Prusa zároveň upozorňuje, že různé typy pružných plátů mohou mít různou tloušťku a vyžadovat odpovídající nastavení.

Podrobný postup: [Z-offset a první vrstva](/rady-a-tipy/z-offset/).

## 2. Podložka může být mastná, i když vypadá čistě

Dotyk prstem může na tiskovém povrchu zanechat mastnotu, která adhezi zhorší. Čistě vypadající plát proto ještě nemusí být skutečně odmaštěný.

**Nepoužívejte jeden univerzální chemický recept na všechny povrchy.** Hladký PEI, texturovaný PEI a saténový povrch mohou mít odlišná doporučení výrobce. Stejně tak není správné automaticky sáhnout po acetonu nebo agresivním čističi jen proto, že fungoval na jiném plátu.

Než něco aplikujete, ověřte typ povrchu a postup jeho výrobce. Praktický rozcestník: [Bezpečné čištění build plate](/rady-a-tipy/bezpecne-cisteni-build-plate/).

## 3. Ověřte správný profil materiálu

PLA, PETG, ABS/ASA a další materiály nemají stejné požadavky. Pokud tiskárna fungovala a problém začal bezprostředně po výměně cívky nebo typu materiálu, vraťte se k ověřenému profilu pro konkrétní kombinaci tiskárny a filamentu.

Nemá smysl zde uvádět jednu „správnou“ teplotu podložky nebo trysky pro všechny tiskárny. Použijte profil výrobce tiskárny nebo filamentu a teprve od něj dělejte malé, kontrolované změny.

Pro výběr materiálu: [PLA, PETG, ASA nebo TPU — který materiál kdy](/clanky/pla-petg-asa-tpu-ktery-material-kdy/).

## 4. Když stopa vypadá dobře, řešte rychlost a prostředí

Pokud je první čára geometricky správná a povrch čistý, další proměnnou může být způsob, jakým se první vrstva tiskne. Začněte ověřeným profilem tiskárny a materiálu. Pokud jste profil ručně zrychlovali nebo měnili chlazení, vraťte změny a porovnejte výsledek.

U materiálů náchylných ke smršťování může problém zesilovat proud studeného vzduchu. Typický případ, kdy se rohy zvedají až po několika vrstvách, už není jen otázkou počátečního kontaktu s plátem. Pokračujte průvodcem [Warping u ABS: příčiny a checklist](/clanky/warping-u-abs-priciny-a-checklist/).

## 5. Rozlišujte špatnou první vrstvu od malé styčné plochy

Když jednoduchý široký testovací tvar drží, ale konkrétní model ne, nemusí být chyba v kalibraci. Model může mít malou kontaktní plochu, ostré rohy nebo geometrii citlivou na smršťování.

Teprve tady dává smysl řešit brim, vhodný tiskový povrch nebo separační/adhezní prostředek podle materiálu. Přehled najdete v [Bed adheze — glue stick, PEI a brim bez magie](/rady-a-tipy/bed-adheze-glue-stick-pei-brim/).

## 6. Co když se problém objevil po zásahu do tiskárny?

Po výměně trysky, zásahu do extruderu, změně tiskového plátu nebo jiné významné mechanické změně zkontrolujte kalibrační postup výrobce tiskárny. U systémů s automatickým měřením podložky neznamená „auto leveling“, že lze ignorovat čistotu povrchu, správnou geometrii sestavy nebo doporučenou kalibraci po servisním zásahu.

Pokud se zároveň mění množství vytlačeného materiálu nebo jsou linky nepravidelné, problém už může být v extruzi. Pokračujte přes [Under-extrusion: jak poznat nedostatečné vytlačování](/rady-a-tipy/under-extrusion/) a případně [Ucpaná tryska](/rady-a-tipy/ucpana-tryska/).

## Diagnostický strom: pořadí, které šetří čas

1. **Vraťte ověřený profil** tiskárny a materiálu.
2. **Sledujte první čáru.** Mezery ukazují jiným směrem než silně rozmáčknutá stopa.
3. **Vyčistěte správně konkrétní typ plátu.**
4. **Ověřte, zda se problém objevil po změně plátu, trysky nebo materiálu.**
5. **Vylučte ruční změny rychlosti, chlazení a teplotního profilu.**
6. **Teprve potom řešte brim, adhezní prostředky nebo jiný povrch.**
7. Pokud jednoduchý test drží a model ne, **řešte geometrii a warping**, ne Z-offset donekonečna.

## Co nedělat

Neměňte současně Z-offset, teplotu, rychlost, lepidlo a chlazení. Když se výsledek zlepší, nebudete vědět proč. Nekopírujte ani cizí absolutní hodnotu Z-offsetu: není přenositelná mezi tiskárnami a pláty. A nekupujte nový plát dřív, než vyloučíte nastavení a znečištění.

## Zdroje

- Prusa Knowledge Base — **Kalibrace první vrstvy (i3)**: https://help.prusa3d.com/cs/article/kalibrace-prvni-vrstvy-i3_112364
- Prusa Knowledge Base — dokumentace tiskových plátů a přípravy PEI povrchu: https://help.prusa3d.com/

<aside class="takeaway">
  <p class="takeaway-label">Praktický závěr</p>
  <p>První vrstvu diagnostikujte v pořadí: ověřený profil → tvar čáry → čistota povrchu → změny hardwaru nebo plátu → rychlost a prostředí → geometrie modelu. Měňte jednu věc najednou. Lepidlo ani nový plát nejsou náhradou za správnou první vrstvu.</p>
</aside>
