---
title: "Slicer pro začátečníky: PrusaSlicer, Bambu Studio, nebo OrcaSlicer?"
description: "Slicer převádí model na dráhu tiskárny. Začněte oficiálním profilem svého stroje a prvních pár tisků měňte jen vrstvu, materiál, výplň a podpěry."
publishedAt: 2026-09-30
updatedAt: 2026-09-30
reviewedAt: 2026-09-30
author: "Redakce První vrstvy"
featured: false
hero: false
tags:
  - slicer
  - PrusaSlicer
  - Bambu Studio
  - OrcaSlicer
  - začátečník
level: "začátečník"
technologies:
  - "FDM"
evidence: "vyrobce"
sourceNote: "Funkce a role slicerů ověřeny 30. 9. 2026 v Prusa Knowledge Base, dokumentaci Bambu Lab a oficiální wiki OrcaSlicer. Konkrétní profily se s verzemi mění."
---

**Jestli začínáte, použijte nejdřív slicer a profil doporučený výrobcem tiskárny.** OrcaSlicer má smysl přidat ve chvíli, kdy víte, co chcete kalibrovat nebo proč vám výchozí workflow nestačí.

Slicer není jen tlačítko „udělej G-code“. Rozhoduje, kudy se bude tryska pohybovat, jak vysoké budou vrstvy, kolik materiálu poteče, kde vzniknou podpěry a jak rychle budou jednotlivé části modelu vytištěné.

Dobrá zpráva: pro první tisk nepotřebujete rozumět stovkám voleb.

## Co slicer vlastně dělá

Máte 3D model. Tiskárna ale potřebuje konkrétní instrukce po vrstvách. Slicer model rozdělí na vrstvy a vytvoří dráhy, teploty, rychlosti a další pokyny pro tiskárnu.

V praxi pracujete hlavně se třemi skupinami nastavení:

1. **Tiskárna** — rozměry, typ extruderu, limity stroje.
2. **Filament** — teploty, průtok a vlastnosti konkrétního materiálu.
3. **Proces / tisk** — výška vrstvy, stěny, výplň, rychlosti, podpěry.

Když používáte ověřený profil, velká část práce už je připravená.

## PrusaSlicer

PrusaSlicer je slicer vyvíjený Prusa Research a dokumentace výrobce ho používá jako výchozí workflow pro tiskárny Prusa. Má profily tiskáren, filamentů a tiskových nastavení a je použitelný i pro řadu dalších strojů.

Pro začátečníka je silný hlavně tím, že se dá začít s hotovým profilem a pokročilé možnosti řešit až později.

**Dává smysl, když:** používáte Prusa ekosystém, chcete čitelnou dokumentaci nebo preferujete jeho způsob práce s profily.

## Bambu Studio

Bambu Studio je oficiální slicer Bambu Lab. U strojů Bambu je těsně propojený s jejich workflow, správou projektů a odesláním tisku.

Bambu Lab ve svých návodech zároveň uvádí podporu G-code z některých dalších slicerů, ale upozorňuje, že pokročilé funkce nemusí být vždy dostupné stejně jako v Bambu Studio.

**Dává smysl, když:** máte Bambu Lab a chcete nejkratší cestu od modelu k tisku bez řešení kompatibility jednotlivých funkcí.

## OrcaSlicer

OrcaSlicer je open-source slicer pro FFF/FDM tiskárny. Jeho oficiální wiki obsahuje mimo běžná procesní nastavení také kalibrační postupy a podrobnější řízení profilů.

To z něj nedělá automaticky „lepší slicer pro každého“. Pro začátečníka může větší množství možností znamenat jen více míst, kde lze bez důvodu rozbít funkční profil.

**Dává smysl, když:** chcete kalibrační nástroje, používáte více různých tiskáren nebo už víte, které části výchozího profilu potřebujete řídit podrobněji.

## Co první týden opravdu měnit

Začněte jen tímto:

### 1. Výška vrstvy

- kolem 0,20 mm jako univerzální start pro běžnou 0,4mm trysku,
- nižší vrstva pro detail,
- vyšší vrstva pro rychlejší hrubší tisk.

Neberte číslo jako zákon. Limity závisejí na trysce, profilu a geometrii modelu.

### 2. Materiálový profil

PLA profil není PETG profil. Vyberte skutečný materiál a pokud existuje profil výrobce filamentu, začněte u něj.

### 3. Výplň

Výplň není univerzální ukazatel pevnosti. U funkčních dílů často rozhoduje více počet stěn a orientace modelu. Pro první dekorativní a běžné díly není potřeba automaticky nastavovat vysoké procento výplně.

### 4. Podpěry

Zapínejte je tam, kde geometrie opravdu potřebuje podepření. Automatické podpěry mohou zachránit model, ale také přidat čas, materiál a horší povrch v místě kontaktu.

## Co první týden raději neměnit

Pokud tiskárna s oficiálním profilem tiskne normálně, bez důvodu neměňte najednou:

- akcelerace,
- limity stroje,
- pokročilé šířky extruze,
- deset rychlostí současně,
- Pressure Advance / Linear Advance bez důvodu,
- retrakci jen proto, že někdo na fóru používá jiné číslo.

Jedna změna, jeden test. Jinak nevíte, co výsledek zlepšilo nebo zhoršilo.

## První rozumný workflow

1. Otevřete model.
2. Vyberte přesný profil tiskárny.
3. Vyberte správný filament.
4. Zvolte výšku vrstvy.
5. Zkontrolujte orientaci modelu.
6. Podívejte se v náhledu na vrstvy a podpěry.
7. Vytiskněte.
8. Pokud je problém, měňte jednu věc podle symptomu.

Slicer není místo, kde se má „něco poladit pro jistotu“. Je to místo, kde mají mít změny důvod.

## Který tedy vybrat?

- **Máte Prusu a začínáte:** začněte PrusaSlicerem.
- **Máte Bambu Lab a začínáte:** začněte Bambu Studiem.
- **Máte více strojů nebo chcete hlubší kalibrace:** vyzkoušejte OrcaSlicer.
- **Všechno tiskne dobře:** není povinnost slicer měnit.

Další krok je [kalibrace průtoku](/rady-a-tipy/kalibrace-flow/) až ve chvíli, kdy pro ni máte důvod. Pokud se problém projevuje na výtisku, začněte raději v [tiskové poradně](/problemy/) podle symptomu.

## Zdroje

- [Prusa Knowledge Base — PrusaSlicer](https://help.prusa3d.com/cs/product/prusaslicer)
- [Bambu Lab — P1S Quick Start Guide](https://cdn1.bambulab.com/documentation/quick-start-59b0cefdc0fc4/P1S/English%20version-Quick%20Start%20Guide%20for%20P1S.pdf)
- [Bambu Lab — A1 Quick Start Guide](https://cdn1.bambulab.com/documentation/quick-start-b5f1a684f77/A1%20Combo%20Quick%20Start_V0%28EN%29.pdf)
- [OrcaSlicer — oficiální wiki](https://github.com/OrcaSlicer/OrcaSlicer/wiki/)
