---
title: "PETG první vrstva — jak nastavit podložku, adhezi a bezpečné sundání"
description: "Praktický postup pro první vrstvu PETG: volba tiskového plátu, čistota povrchu, Z-offset, teploty podle výrobce a bezpečné sundání výtisku."
publishedAt: 2026-09-29
updatedAt: 2026-10-03
level: "začátečník"
technologies:
  - "FDM"
tags:
  - "quick-win"
  - "petg"
  - "prve-vrstva"
  - "adheze"
  - "pei"
---
PETG umí vytvořit velmi spolehlivou první vrstvu, ale proti PLA má jednu důležitou zvláštnost: na některých površích může držet **až příliš dobře**. Cílem proto není první vrstvu za každou cenu co nejvíc přimáčknout. Potřebujeme rovnoměrné spojení linek, dostatečnou adhezi během tisku a zároveň možnost hotový díl bezpečně sundat bez poškození tiskového plátu.

## 1. Nejdřív vyberte správný povrch

Pro běžné PETG doporučuje Prusa především **texturovaný nebo saténový práškově lakovaný plát**. U hladkého PEI upozorňuje, že PETG může přilnout natolik silně, že povrch při sundávání poškodí. Pokud hladký PEI použijete, výrobce doporučuje separační vrstvu, například obyčejné PVA lepidlo v tyčince.

Lepidlo tedy u PETG na hladkém PEI nemusí sloužit jako „zesilovač adheze“. Důležitá je jeho druhá role: **vytvořit ochrannou separační vrstvu mezi PETG a PEI**.

Praktická volba:

- **texturovaný plát:** pro PETG vhodná výchozí varianta,
- **saténový plát:** další výrobcem doporučená varianta pro PETG,
- **hladký PEI:** tisknout s vědomím rizika příliš silné adheze a použít separační vrstvu podle doporučení výrobce konkrétního plátu.

## 2. Povrch musí být čistý — ale respektujte typ plátu

Mastnota z prstů dokáže adhezi první vrstvy výrazně zhoršit. Prusa u běžných hladkých, saténových a texturovaných plátů popisuje čištění vhodným isopropylalkoholem; při dlouhodobém zhoršení adheze také mytí několika kapkami prostředku na nádobí a teplou vodou s následným důkladným vysušením.

Pozor na dvě věci:

1. kosmetické nebo jiné alkoholové přípravky mohou obsahovat oleje a další přísady,
2. **aceton není univerzální čistič** — Prusa jej zakazuje pro texturované a saténové pláty a nedoporučuje jej před tiskem PETG ani na hladkém PEI.

Podrobnější postup máme v článku [Bezpečné čištění tiskové podložky](/rady-a-tipy/bezpecne-cisteni-build-plate/).

## 3. Teplotu nepřebírejte naslepo z cizího profilu

Teploty se liší podle konkrétní směsi PETG a výrobce filamentu. Prusa ve svém obecném materiálovém průvodci uvádí pro PETG široké rozmezí přibližně **215–270 °C na trysce a 70–90 °C na podložce**. Pro vlastní Prusament PETG pak uvádí konkrétnější profil kolem 230 °C na první vrstvě a 85 °C na podložce.

To nejsou univerzální hodnoty pro každou cívku PETG. Začněte profilem výrobce vašeho filamentu nebo ověřeným profilem ve sliceru a teprve potom řešte odchylky.

## 4. Z-offset: sledujte geometrii první vrstvy, ne „magické číslo“

PETG není důvod mechanicky přitlačit k podložce co nejvíc. Správná první vrstva má souvislé linky bez mezer, ale tryska nemá materiál výrazně hrnout do stran.

Pokud vidíte mezery mezi linkami, problém může být příliš vysoký Z-offset, špinavý povrch nebo jiná chyba adheze. Pokud je materiál silně rozmáčknutý, tvoří výrazné hrany nebo tryska první vrstvu rozhrnuje, může být tryska naopak příliš nízko.

Neexistuje jedno číslo Z-offsetu použitelné pro všechny tiskárny, trysky a pláty. U strojů s ručním doladěním postupujte po malých změnách a hodnoťte skutečný vzhled linky. Podrobněji viz [První vrstva nedrží](/rady-a-tipy/prvni-vrstva-nedrzi/) a [Z-offset](/rady-a-tipy/z-offset/).

## 5. Když PETG nedrží, neměňte pět věcí najednou

Doporučené pořadí diagnostiky:

1. ověřte, že používáte vhodný plát pro PETG,
2. odstraňte mastnotu z tiskové plochy vhodným postupem,
3. zkontrolujte profil konkrétního filamentu a teplotu podložky,
4. sledujte tvar první vrstvy a případně dolaďte Z-offset,
5. až potom řešte další zásahy do rychlosti, chlazení nebo flow.

Tím se vyhnete situaci, kdy současně změníte teplotu, Z-offset, flow i rychlost a už nevíte, co problém skutečně vyřešilo.

Pro obecné problémy s adhezí pokračujte na [Bed adheze: PEI, glue stick a brim](/rady-a-tipy/bed-adheze-glue-stick-pei-brim/).

## 6. Když PETG drží až moc

Silná adheze není úspěch, pokud při sundávání poškodíte plát. U hladkého PEI používejte doporučenou separační vrstvu a po dokončení tisku nechte plát a díl vychladnout. U pružného ocelového plátu využijte jeho prohnutí; díl nepáčte ostrým kovovým nástrojem proti povrchu.

Jestli už první vrstva vypadá dobře, ale PETG během tisku výrazně „chlupatí“, jde o jiný problém. Pokračujte na [PETG a stringing](/rady-a-tipy/petg-a-struny/).

## Rychlý checklist

- **PETG se odlepuje:** nejdřív čistota → vhodný plát → profil filamentu → Z-offset.
- **Linky první vrstvy mají mezery:** zkontrolujte Z-offset a adhezi, nekompenzujte vše flow.
- **Tryska materiál hrne:** ověřte, zda není první vrstva příliš stlačená.
- **PETG je na hladkém PEI „přivařené“:** nepoužívejte větší sílu; příště použijte doporučenou separační vrstvu nebo vhodnější plát.
- **První vrstva je dobrá, ale dál vznikají struny:** řešte PETG/stringing jako samostatný problém.

## Zdroje

- Prusa Knowledge Base — [PETG](https://help.prusa3d.com/article/petg_2059)
- Prusa Knowledge Base — [Filament Material Guide](https://help.prusa3d.com/filament-material-guide)
- Prusa Knowledge Base — [First layer issues](https://help.prusa3d.com/article/first-layer-issues_1804)
- Prusa Knowledge Base — [Satin steel sheet](https://help.prusa3d.com/article/satin-steel-sheet_196526)

*Rozmezí teplot a doporučení k tiskovým plátům výše jsou údaje výrobce, nikoli vlastní měření První Vrstvy. Vždy ověřte doporučení výrobce konkrétního filamentu a tiskového povrchu.*
