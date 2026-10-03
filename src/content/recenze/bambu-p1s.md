---
title: "Bambu Lab P1S v roce 2026: uzavřený CoreXY, limity a komu dává smysl"
description: "Aktualizovaný profil Bambu Lab P1S: 256 × 256 × 256 mm, 300 °C hotend, uzavřená konstrukce, materiály, AMS a důležité limity bez vymyšleného testování."
publishedAt: 2026-05-02
updatedAt: 2026-10-03
reviewedAt: 2026-10-03
product: "Bambu Lab P1S"
verdict: "P1S dává smysl jako rychlý uzavřený desktopový systém s pohodlným Bambu workflow a možností AMS. Není ale náhradou stroje s aktivně vyhřívanou komorou a výrobce nedoporučuje standardní konfiguraci pro kompozity s uhlíkovým či skelným vláknem."
note: "Zdrojovaný produktový profil, ne plný test podle metodiky První Vrstvy. Číselnou známku zveřejníme až s evidovanou délkou testu, hodinami tisku, vlastními fotografiemi a testovacím protokolem."
tags:
  - Bambu Lab
  - P1S
  - recenze
  - FDM
level: "začátečník"
technologies:
  - "FDM"
evidence: "zdroje"
sourceNote: "Technické specifikace a stav modelu ověřeny 3. 10. 2026 v aktuální oficiální dokumentaci a oznámeních Bambu Lab. Hodnotící kontext není vydáván za fyzický test."
disclosure: "Redakční obsah bez placeného vlivu na závěr. Tento profil není označen jako plný redakční test."
affiliate: false
---

P1S je uzavřená CoreXY tiskárna s oficiálním tiskovým objemem **256 × 256 × 256 mm**. Podle aktuálního Quick Start Guide používá celokovový hotend, standardně 0,4mm nerezovou trysku, zvládá hotend do **300 °C** a podložku do **100 °C**. Výrobce uvádí také komorový ventilátor, pomocný ventilátor chlazení dílu a filtr s aktivním uhlím.

Důležitý detail: **uzavřený kryt není totéž jako aktivně vyhřívaná komora**. P1S má enclosure a řízení ventilace, nikoli samostatné topení komory. Při výběru pro technické materiály je to podstatnější informace než samotné slovo „uzavřená“.

## P1S není v roce 2026 mrtvý model

Po příchodu novější P2S může vzniknout dojem, že P1S automaticky končí. Bambu Lab ale při oznámení konce výroby P1P v únoru 2026 výslovně uvedl, že **P1S pokračuje ve výrobě a prodeji** a že jej v dohledné době neplánuje ukončit.

To je důležité při nákupu i při úvahách o servisu: P1S je starší konstrukce než P2S, ale podle aktuálního vyjádření výrobce nejde o ukončený produkt.

## Materiály: co výrobce skutečně uvádí

Aktuální specifikace rozděluje materiály poměrně jasně:

- **PLA, PETG, TPU, ABS, ASA, PVA a PET** výrobce uvádí jako ideální,
- **PA a PC** uvádí jako použitelné,
- **polymery vyztužené uhlíkovým nebo skelným vláknem** uvádí pro standardní konfiguraci jako nedoporučené.

To je užitečnější než obecné tvrzení, že „uzavřená tiskárna tiskne všechno“. U konkrétního filamentu vždy kontrolujte jeho požadavky na trysku, teplotu, sušení a tiskové prostředí.

Pokud řešíte hlavně ABS/ASA a zvedající se rohy, pokračujte přes [diagnostiku warpingu](/clanky/warping-u-abs-priciny-a-checklist/). Enclosure pomáhá stabilizovat prostředí, ale geometrii dílu, přípravu podložky ani správný profil nenahradí.

## Rychlost: 500 mm/s není čas vašeho výtisku

Bambu Lab uvádí maximální rychlost pohybu nástrojové hlavy **500 mm/s**, maximální akceleraci **20 m/s²** a ve specifikaci také maximální průtok hotendu **32 mm³/s** za výrobcem definovaných podmínek s ABS.

Ani jeden z těchto údajů sám o sobě neříká, za jak dlouho bude hotový konkrétní model v požadované kvalitě. Reálný čas omezuje geometrie, akcelerace, průtok, materiál, chlazení i profil ve sliceru. Proto z katalogového maxima neděláme vlastní tvrzení typu „o X % rychlejší“ bez srovnávacího testu.

## Co dostanete po hardwarové stránce

Z oficiální specifikace lze bezpečně vyčíst:

- tiskový objem **256 × 256 × 256 mm**,
- ocelové šasi a plastovo-skleněný kryt,
- celokovový hotend,
- standardní trysku **0,4 mm**, volitelně 0,2 / 0,6 / 0,8 mm,
- maximální teplotu hotendu **300 °C**,
- maximální teplotu podložky **100 °C**,
- senzor konce filamentu,
- obnovu po výpadku napájení,
- komorovou kameru **1280 × 720 / 0,5 fps** s podporou timelapse,
- Wi‑Fi, Bluetooth a Bambu‑Bus,
- microSD úložiště.

Kamera je tedy vhodná pro základní vzdálenou kontrolu a timelapse, ale údaj 0,5 fps je dobré znát předem — není fér ji popisovat jako plynulou monitorovací kameru bez tohoto kontextu.

## AMS jako součást rozhodnutí

P1S podporuje Bambu ekosystém automatického podávání materiálu. Pokud chcete více barev nebo pohodlné přepínání cívek, není rozumné hodnotit jen samotnou tiskárnu: do rozhodnutí patří i způsob práce s AMS, kompatibilita konkrétních filamentů, prostor kolem sestavy a odpad vznikající při změnách materiálu či barvy.

Pro uživatele, který tiskne převážně jednobarevně, může být AMS hlavně komfortní doplněk. Pro vícebarevný workflow je naopak podstatnou součástí celého systému.

## Firmware a síť: uzavřenější ekosystém, ale ne jen cloud

Bambu Lab uvádí, že firmware tiskáren je vyvíjený interně a zůstává closed-source. To je jiná filozofie než u stroje s veřejným firmwarem.

Výrobce zároveň nabízí **LAN Only Mode** a lokální workflow. Proto není přesné říkat, že P1S „musí do cloudu“. Přesnější je: ekosystém je uzavřenější, ale lokální způsob práce existuje.

## P1S vs. A1: první rozcestník

[A1](/recenze/bambu-lab-a1/) a P1S mají shodný nominální tiskový objem 256 × 256 × 256 mm, ale konstrukčně míří jinam. A1 je otevřený bedslinger, zatímco P1S je uzavřený CoreXY. Pokud tisknete hlavně PLA/PETG a chcete jednoduchý otevřený stroj, dává smysl začít u A1. Pokud je pro vaše použití důležitý uzavřený prostor kolem dílu, P1S je relevantnější větev katalogu.

Nejde o náhradu skutečného srovnávacího testu; je to konstrukční rozcestník podle doložitelných vlastností obou strojů.

## Co před koupí zkontrolovat

1. **Materiály:** potřebujete skutečně enclosure, nebo budete převážně u PLA/PETG?
2. **Kompozity:** pokud plánujete CF/GF filamenty, ověřte požadavky konkrétního materiálu a vhodnou konfiguraci; standardní specifikace P1S je označuje jako nedoporučené.
3. **Komora:** pokud požadujete aktivně řízené vyhřívání komory, P1S tuto vlastnost nemá.
4. **AMS:** rozhodněte, zda je automatické přepínání cívek součást požadovaného workflow, nebo jen budoucí možnost.
5. **Ekosystém:** pokud je pro vás zásadní otevřený firmware, počítejte s tím, že filozofie Bambu Lab je jiná.
6. **Generace:** porovnejte P1S i s novější P2S; P1S ale podle Bambu Lab k říjnu 2026 nadále zůstává vyráběným modelem.

## Zdroje

- [Bambu Lab — P1S Quick Start Guide / aktuální specifikace](https://cdn1.bambulab.com/documentation/quick-start-59b0cefdc0fc4/P1S/English%20version-Quick%20Start%20Guide%20for%20P1S.pdf)
- [Bambu Lab — A farewell to P1P (stav P1S v roce 2026)](https://blog.bambulab.com/a-farewell-to-p1p/)
- [Bambu Lab — Security White Paper, LAN Only Mode](https://cdn1.bambulab.com/trust-center/file/bambulab-security-whitepaper-en.pdf)
- [Bambu Lab — Custom Firmware Plan and Our Principles on Ecosystem](https://blog.bambulab.com/custom-firmware-plan-and-our-principles-on-ecosystem/)

<aside class="takeaway">
  <p class="takeaway-label">Praktický závěr</p>
  <p>P1S posuzujte jako stále podporovaný uzavřený desktopový systém s 256mm krychlovým prostorem a pohodlným Bambu workflow. Její silná stránka není „umí každý materiál“, ale kombinace uzavřené CoreXY konstrukce a integrovaného ekosystému. Limity jsou stejně důležité: bez aktivně vyhřívané komory, standardně nedoporučená pro CF/GF kompozity a s uzavřeným firmwarem.</p>
</aside>
