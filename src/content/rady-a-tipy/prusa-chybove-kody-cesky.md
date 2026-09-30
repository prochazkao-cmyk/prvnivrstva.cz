---
title: "Chybové kódy Prusa česky: jak najít správné řešení podle čísla"
description: "Novější Prusa tiskárny zobrazují název chyby, krátký popis a QR kód. Přesné číslo se liší podle modelu, proto opisujte celý kód a používejte aktuální Knowledge Base."
publishedAt: 2026-09-30
updatedAt: 2026-09-30
reviewedAt: 2026-09-30
author: "Redakce První vrstvy"
featured: false
hero: false
tags:
  - Prusa
  - chybové kódy
  - QR kódy
  - diagnostika
level: "začátečník"
technologies:
  - "FDM"
evidence: "vyrobce"
sourceNote: "Systém QR chyb a příklady kódů kontrolovány 30. 9. 2026 proti české Prusa Knowledge Base pro CORE One a MK4 rodinu. Přesný článek výrobce pro konkrétní kód má vždy přednost."
---

**U Prusy si opište celý číselný kód, ne jen název chyby.** Stejný typ problému má na CORE One, CORE One L, MK4S, MK4, XL nebo MINI jiné první číslice, i když vede ke stejné skupině diagnostiky.

Novější firmware používá systém chybových obrazovek s názvem, krátkým popisem a QR kódem. Prusa Knowledge Base pak vede na stránku konkrétní chyby a modelu.

## Jak použít chybový kód

Prusa sama uvádí dvě základní cesty:

1. naskenovat QR kód z displeje,
2. otevřít adresu / číselný kód zobrazený na obrazovce.

Když řešíte problém přes poradnu nebo servis, pošlete **celé číslo včetně modelu tiskárny**. Například „hotend preheat error“ bez čísla je méně přesné než `#26202 na MK4S`.

## Proč jsou čísla podle modelu jiná

Prusa Knowledge Base uvádí stejný typ chyby pod různými kódy pro jednotlivé rodiny. Příklad:

### Chyba předehřevu hotendu

- CORE One: `#31202`
- CORE One L: `#35202`
- MK4S: `#26202`
- MK4: `#13202`

Nejde o čtyři úplně nesouvisející závady. Prefix kódu pomáhá identifikovat platformu, zatímco zbytek vede k typu problému.

Proto při googlení nekopírujte jen slovní název — použijte **přesný kód z displeje**.

## Nejčastější skupiny, se kterými se setkáte

### Předehřev podložky / hotendu

Knowledge Base obsahuje například:

- Bed preheat error: `#31201` CORE One, `#26201` MK4S, `#13201` MK4 a odpovídající varianty dalších strojů.
- Hotend preheat error: `#31202` CORE One, `#26202` MK4S, `#13202` MK4.

Tady nejde jen o „trvá to dlouho“. Příčinou může být topení, termistor, kabeláž, konektor nebo prostředí. Postupujte podle konkrétního článku výrobce a bezpečnostní chybu neobcházejte.

### Thermal runaway a MinTemp / MaxTemp

Mezi publikované chyby patří například thermal runaway podložky/hotendu a chyby minimální nebo maximální teploty.

U teplotních chyb je rozumné tisk zastavit a nejdřív vyřešit příčinu. Náhodné přepsání limitu nebo ignorování ochrany není diagnostika.

### Homing

Například chyba homingu osy Y má jiné číslo na MK4S, MK4 a dalších modelech. Nejprve zkontrolujte, zda pohybu fyzicky nebrání překážka, kabel, nečistota nebo mechanický problém uvedený v postupu pro daný stroj.

### Loadcell

CORE One, MK4/S, MK3.9/S a XL používají loadcell v různých funkcích. V Knowledge Base jsou samostatné chyby pro timeout, kalibraci, měření i tare.

Když chyba souvisí s loadcellem, neřešte ji automaticky jen Z-offsetem. Ověřte konkrétní kód — může jít o kalibraci, kabeláž, mechanické předpětí nebo jiný stav.

### Filament

Novější stroje mohou zobrazit detekci zaseklého filamentu nebo problémy se senzorem. Před rozebráním extruderu je užitečné ověřit:

- zda filament skutečně prochází dráhou,
- zda není zalomený nebo nabobtnalý,
- zda senzor reaguje,
- zda se problém opakuje po správném zavedení materiálu.

Pak pokračujte přes konkrétní článek pro kód.

## Příklad: „unknown error“

Prusa má i samostatný stav „Unknown error“. Knowledge Base doporučuje zkontrolovat správný aktuální firmware tiskárny a případné MMU jednotky, poznamenat kroky před vznikem chyby, pokusit se ji reprodukovat a uložit log. Pokud problém zůstane, doporučuje kontaktovat podporu nebo nahlásit problém přes GitHub.

To je dobrý obecný princip i pro neobvyklé závady: **nejdřív reprodukovatelná informace, potom výměna dílů**.

## Co poslat do servisu nebo poradny

- model tiskárny,
- celý kód,
- verzi firmwaru,
- fotografii displeje,
- co se dělo před chybou,
- zda byl stroj právě po servisním zásahu nebo aktualizaci,
- zda je připojené MMU / jiné příslušenství,
- co jste už zkusili.

Pokud jde o tepelnou nebo napájecí chybu, uveďte také, jestli se objevila během ohřevu, při tisku, nebo hned po startu.

## Rychlé odkazy

- [Prusa Knowledge Base — QR error codes](https://help.prusa3d.com/article/qr-error-codes_176114)
- [Prusa MK4 — řešení potíží](https://help.prusa3d.com/cs/product/mk4/reseni-potizi_194)
- [Prusa CORE One — QR error codes](https://help.prusa3d.com/product/core-one/qr-error-codes_1167)

Databázi na První Vrstvě budeme stavět jako český navigační index s odkazy na primární postup výrobce, ne jako slepou kopii celé Knowledge Base. Kód se může s firmwarem a novými modely měnit, proto bude mít každý záznam datum kontroly.

Pokud tiskárna žádný kód neukazuje a problém je vidět až na výtisku, začněte v [tiskové poradně](/problemy/) podle symptomu.
