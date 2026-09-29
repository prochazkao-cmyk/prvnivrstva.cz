---
title: "Ucpaná tryska — jak poznat částečné ucpání dřív, než rozeberete půl tiskárny"
description: "Slabý tok, cvakání extruderu a nepravidelná extruze mohou znamenat ucpání. Nejdřív potvrďte symptom, pak servisujte podle konstrukce hotendu."
publishedAt: 2026-09-29
reviewedAt: 2026-09-29
level: "pokročilý"
technologies:
  - "FDM"
tags:
  - "tryska"
  - "hotend"
  - "ucpani"
  - "under-extrusion"
  - "troubleshooting"
evidence: "redakce"
sourceNote: "Obecná diagnostika. Demontáž, cold pull a bezpečné teploty se liší podle hotendu, trysky a materiálu; použijte servisní postup výrobce svého stroje."
---

## Rychlá odpověď

Tryska nemusí být úplně ucpaná, aby zničila tisk. **Částečné ucpání** často vypadá jako náhodná under-extrusion: chvíli tiskne dobře, pak zeslábne tok, extruder cvakne a povrch se znovu srovná.

Než hotend rozeberete:

1. ověřte, že se filament volně odvíjí,
2. zkontrolujte extruder a vedení,
3. zkuste konzistentní ruční/servisní extruzi podle postupu výrobce,
4. porovnejte tok s normálním stavem,
5. teprve potom čistěte nebo demontujte trysku.

## Co může vypadat stejně

Stejný symptom může udělat:

- zamotaná cívka,
- velký odpor v PTFE cestě,
- obroušený filament v extruderu,
- příliš nízká teplota pro konkrétní materiál,
- profil s příliš vysokým objemovým průtokem,
- heat creep,
- nečistota nebo zbytek jiného materiálu v trysce.

Proto je lepší diagnostikovat od cívky k trysce než začít jehlou v hotendu.

## Jak vypadá podezřelý tok

Při stabilní servisní extruzi má materiál vycházet konzistentně. Pokud tok pulzuje, stáčí se neobvykle do strany nebo se po chvíli výrazně zeslabí, máte důvod pokračovat diagnostikou hotendu.

Samotné stáčení proudu není stoprocentní důkaz ucpání — tryska může být zvenku znečištěná nebo opotřebená. Sledujte kombinaci příznaků.

## Cold pull není univerzální tlačítko

Cold pull může u některých sestav pomoci vytáhnout nečistotu z tavné zóny, ale správná teplota a postup závisí na materiálu i hotendu. U některých moderních rychlovýměnných hotendů je rozumnější postup výrobce, vyjmutí celé sestavy nebo výměna trysky.

Nepoužívejte náhodnou teplotu z cizího videa jako servisní specifikaci svého stroje.

## Kdy řešit výměnu

Tryska je spotřební díl. Pokud je opotřebená, poškozená nebo se opakovaně ucpe stejným způsobem, může být rychlejší a spolehlivější ji vyměnit než donekonečna čistit.

U abrazivních filamentů ověřte, zda materiál vyžaduje odolnější trysku. To je jiný problém než jednorázová nečistota.

## Po opravě

Po čištění nebo výměně:

- ověřte konzistentní extruzi,
- vytiskněte malý známý test,
- zkontrolujte první vrstvu,
- teprve potom vraťte dlouhý tisk.

Pokud tok zůstává nepravidelný, vraťte se o krok zpět na [Under-extrusion](/rady-a-tipy/under-extrusion/) a zkontrolujte celou cestu filamentu.

<aside class="takeaway">
  <p class="takeaway-label">Praktický závěr</p>
  <p>Nejdřív potvrďte, že problém opravdu vzniká v hotendu. Servis trysky dělejte podle konstrukce konkrétní tiskárny. Po zásahu vždy ověřte tok malým testem, ne rovnou desetihodinovým dílem.</p>
</aside>
