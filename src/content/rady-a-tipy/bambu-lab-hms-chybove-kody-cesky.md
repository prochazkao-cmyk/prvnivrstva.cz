---
title: "Chybové kódy Bambu Lab HMS česky: jak je číst a kde hledat řešení"
description: "HMS kód si nejdřív opište celý. Bambu Lab používá Health Management System pro diagnostická hlášení; přesný kód vede na konkrétní příčinu a postup ve Wiki."
publishedAt: 2026-09-30
updatedAt: 2026-09-30
reviewedAt: 2026-09-30
author: "Redakce První vrstvy"
featured: false
hero: false
tags:
  - Bambu Lab
  - HMS
  - chybové kódy
  - diagnostika
level: "začátečník"
technologies:
  - "FDM"
evidence: "vyrobce"
sourceNote: "Princip HMS a příklady kódů kontrolovány 30. 9. 2026 proti zdrojům Bambu Lab / Bambu Lab Community Forum odkazujícím na Bambu Lab Wiki. U každé závady má přednost aktuální stránka Wiki pro přesný model, firmware a celý HMS kód."
---

**Když Bambu Lab ukáže HMS chybu, nejdřív si opište celý kód a nemažte upozornění dřív, než víte, co znamená.** Stejný začátek kódu může vést k jiné závadě podle dalších bloků a modelu tiskárny.

HMS znamená **Health Management System**. Bambu Lab ho používá pro upozornění na stav tiskárny, AMS, teplotní systém, motory, senzory a další podsystémy. Oficiální postup je otevřít detail hlášení nebo vyhledat přesný HMS kód v Bambu Lab Wiki.

## První postup při HMS hlášení

1. **Opište celý kód.** Ne jen první čtyři znaky.
2. Poznamenejte si, co tiskárna právě dělala: start tisku, homing, zavádění filamentu, ohřev, výměna barvy.
3. Otevřete detail v Bambu Studio / Handy / na displeji a použijte odkaz nebo QR, pokud ho zařízení nabízí.
4. Vyhledejte celý kód v Bambu Lab Wiki.
5. Nezačínejte rovnou výměnou dílů. Nejdřív proveďte kontrolu konektorů, mechaniky nebo filamentu, kterou uvádí konkrétní postup.
6. U opakované chyby si poznamenejte firmware a ideálně uložte log před vytvořením support ticketu.

## Jak kód vypadá

Můžete narazit například na formát:

`HMS_0300_0300_0001_0001`

nebo v rozhraní s pomlčkami:

`0300-0300-0001-0001`

Pro vyhledávání je nejbezpečnější použít **celý řetězec**. Nepokoušejte se problém určit jen podle prvního bloku.

## Příklady, proč je celý kód důležitý

### HMS_0300_0300_0001_0001

Bambu Lab Wiki tento typ kódu používá pro problém spojený s rychlostí nebo zastavením ventilátoru hotendu. Prakticky to neznamená „kupte nový hotend“ — diagnostika začíná u ventilátoru, jeho konektoru a zapojení podle konkrétního modelu.

### HMS_0300_0200_0001_0006

Tento kód je v Bambu zdrojích spojený s abnormální teplotou trysky / možným problémem snímače. Tepelnou chybu neignorujte a neobcházejte bezpečnostní ochrany; postupujte podle aktuální Wiki pro váš stroj.

### HMS_07FF_2000_0002_0004

Tento typ hlášení souvisí s cestou filamentu a může ukazovat na filament zachycený v oblasti toolheadu / senzoru. Než rozeberete extruder, ověřte přesnou variantu kódu a instrukci pro svůj model a způsob podávání materiálu.

Příklady jsou orientační navigace, **ne databáze všech variant**. Bambu průběžně podporuje více modelů a firmware se mění.

## Kód po aktualizaci firmwaru

Když se chyba objeví po aktualizaci, neznamená to automaticky chybu firmwaru. Postup:

- zkontrolujte aktuální Wiki pro celý kód,
- spusťte dostupný self-test / machine check,
- poznamenejte verzi firmwaru,
- pokud se problém opakuje, přiložte tuto informaci k ticketu.

Náhodný downgrade není první univerzální diagnostický krok — může změnit chování a zkomplikovat hledání původní příčiny.

## Kdy tiskárnu vypnout a dál nepokračovat

Zvýšenou opatrnost berte u chyb týkajících se:

- ohřevu trysky nebo podložky,
- abnormálního měření teploty,
- napájení,
- kouře, zápachu nebo viditelného poškození kabelu,
- mechanické kolize, která se opakuje.

Pokud oficiální hlášení požaduje vypnutí zařízení, respektujte ho. Bezpečnostní chybu není vhodné „odkliknout, protože to ještě tiskne“.

## Co nám poslat do poradny

Aby se chyba dala řešit bez hádání, pošlete:

- přesný model tiskárny,
- celý HMS kód,
- firmware,
- fotografii hlášení,
- co se dělo těsně před chybou,
- zda je připojen AMS/AMS Lite nebo jiné příslušenství,
- co jste už zkontrolovali.

Tohle je mnohem užitečnější než věta „Bambu hází chybu“.

## Kde hledat oficiální řešení

Bambu Lab provozuje HMS stránky ve své Wiki a z vlastního komunitního fóra na ně odkazuje jako na databázi detailních příčin a kroků. U novějších strojů může být nejrychlejší cesta přes QR nebo detail hlášení přímo v zařízení.

Pokud přesný kód v databázi nenajdete nebo se doporučený postup neshoduje s vaším hardwarem, vytvořte ticket u Bambu Lab Support místo výměny dílů podle náhodného diskusního vlákna.

## Zdroje

- [Bambu Lab Community Forum — seznam HMS error codes a odkaz na Bambu Lab Wiki](https://forum.bambulab.com/t/list-of-error-codes-for-bambu-lab-3d-printers/94436)
- [Bambu Lab Wiki — HMS code lookup](https://wiki.bambulab.com/en/x1/troubleshooting/hmscode)
- [Bambu Lab Security White Paper — diagnostika a MakerWorld/security kontext](https://cdn1.bambulab.com/trust-center/file/bambulab-security-whitepaper-en.pdf)

Další krok: chyba není HMS kód, ale fyzická vada výtisku? Otevřete [tiskovou poradnu podle symptomu](/problemy/).
