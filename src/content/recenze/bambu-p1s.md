---
title: "Bambu Lab P1S: rychlý uzavřený CoreXY, ale ne vyhřívaná komora"
description: "P1S nabízí 256 × 256 × 256 mm, uzavřenou konstrukci a silný Bambu workflow. Komora ale není aktivně vyhřívaná a firmware je uzavřený."
publishedAt: 2026-05-02
updatedAt: 2026-09-30
reviewedAt: 2026-09-30
product: "Bambu Lab P1S"
verdict: "Dává smysl, když chcete rychlý uzavřený desktopový stroj, pohodlný software a možnost AMS. Pokud je zásadní otevřený firmware nebo aktivně řízená vyhřívaná komora, hledejte jinou kategorii stroje."
note: "Redakční profil a praktický kontext, ne plný test podle metodiky První Vrstvy. Číselnou známku zveřejníme až s evidovanou délkou testu, hodinami tisku, vlastními fotografiemi a testovacím protokolem."
tags:
  - Bambu Lab
  - P1S
  - recenze
  - FDM
level: "začátečník"
technologies:
  - "FDM"
evidence: "kombinace"
sourceNote: "Technické specifikace a síťové režimy ověřeny 30. 9. 2026 v oficiální dokumentaci Bambu Lab; praktické závěry jsou redakční."
disclosure: "Redakční obsah bez placeného vlivu na verdikt. Tento profil zatím není označen jako plný redakční test."
affiliate: false
---

P1S je uzavřená CoreXY tiskárna s oficiálním tiskovým objemem **256 × 256 × 256 mm**. Výrobce uvádí celokovový hotend, maximální teplotu trysky 300 °C, podložku do 100 °C, komorový ventilátor a filtr s aktivním uhlím.

Důležitý detail: **uzavřený kryt není totéž jako aktivně vyhřívaná komora**. P1S má enclosure a řízení ventilace, ne samostatné topení komory. To je potřeba vědět dřív, než ji začnete srovnávat se strojem, který teplotu komory aktivně řídí.

## Proč je P1S pro řadu lidí jednoduchá volba

### Workflow

Bambu Studio, síťové funkce a volitelné AMS dávají dohromady ekosystém, ve kterém je cesta od sliceru k hotovému dílu velmi krátká. To je pro domácnost, školu i menší dílnu reálná hodnota: méně času stráveného správou tiskárny může být důležitější než možnost upravovat každý interní parametr.

### Uzavřená konstrukce

Enclosure pomáhá omezit průvan a stabilizovat prostředí kolem dílu oproti otevřenému rámu. Neřeší ale automaticky každý warping. Velký plochý ASA/ABS díl pořád závisí na geometrii, podložce, profilu a tepelné stabilitě.

Pokud se rohy zvedají, pokračujte přes [diagnostiku warpingu](/clanky/warping-u-abs-priciny-a-checklist/), ne přes univerzální „je to zavřené, musí to fungovat“.

## Firmware a síť: co je fakt

Bambu Lab uvádí, že firmware tiskáren je **vyvíjený in-house a zůstává closed-source**. To je jiná filozofie než u stroje s veřejným firmwarem.

Zároveň výrobce nabízí **LAN Only Mode**. V aktuálním bezpečnostním dokumentu Bambu Lab popisuje režim, ve kterém tiskárna neiniciuje externí připojení a klient komunikuje s tiskárnou v lokální síti; výrobce také uvádí možnost úplně offline tisku přes lokální médium.

Takže korektní zkratka není „P1S musí do cloudu“. Korektní zkratka je: **ekosystém je uzavřenější, ale lokální/offline workflow existuje**.

## Co není důvod věřit slepě

Oficiální maximum 500 mm/s nebo 20 m/s² samo o sobě neříká, za jak dlouho bude hotový váš díl v požadované kvalitě. Stejně jako u jiných strojů je pro dílnu důležitější čas stejného modelu, volumetrický průtok, akcelerace, materiál a profil.

Dokud nemáme vlastní opakovaný benchmark stejného G-code/ekvivalentního profilu napříč stroji, nebudeme z maxima na produktové stránce dělat „o X % rychlejší“.

## AMS jako součást rozhodnutí

Jestli chcete více barev nebo automatické přepínání cívek, AMS je podstatná část Bambu workflow. Při srovnání s jiným systémem proto neporovnávejte jen tiskárnu bez příslušenství — porovnávejte celý proces, cenu, odpad a způsob práce s materiálem.

## Ověřené technické body

- tiskový objem: 256 × 256 × 256 mm,
- CoreXY, uzavřený kryt,
- max. tryska 300 °C, podložka 100 °C,
- komorový ventilátor a aktivní uhlíkový filtr,
- komora není aktivně vyhřívaná samostatným topením,
- Bambu Studio je oficiální slicer,
- LAN Only Mode je oficiálně podporovaný,
- firmware je podle Bambu Lab in-house a closed-source.

## Zdroje

- [Bambu Lab — P1S Quick Start Guide / specifications](https://cdn1.bambulab.com/documentation/quick-start-59b0cefdc0fc4/P1S/English%20version-Quick%20Start%20Guide%20for%20P1S.pdf)
- [Bambu Lab — Security White Paper, LAN Only Mode](https://cdn1.bambulab.com/trust-center/file/bambulab-security-whitepaper-en.pdf)
- [Bambu Lab — To open, or not to open](https://blog.bambulab.com/to-open-or-not-to-open-that-is-the-question/)
- [Bambu Lab — Custom Firmware Plan and Our Principles on Ecosystem](https://blog.bambulab.com/custom-firmware-plan-and-our-principles-on-ecosystem/)

<aside class="takeaway">
  <p class="takeaway-label">Praktický závěr</p>
  <p>P1S kupujte jako rychlý uzavřený desktopový systém s pohodlným workflow a možností AMS. Nekupujte ji s představou aktivně vyhřívané komory nebo plně otevřeného firmwaru. A pokud je cloud vaše obava, rozhodujte se podle aktuálního LAN/offline režimu, ne podle starých zkratek.</p>
</aside>
