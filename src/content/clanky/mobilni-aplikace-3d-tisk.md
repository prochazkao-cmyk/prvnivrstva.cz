---
title: "Mobilní aplikace kolem 3D tisku: Bambu Handy a Prusa"
description: "Co oficiální aplikace Bambu Lab a Prusa Research umí podle jejich dokumentace: dohled nad tiskárnou, úlohy a oznámení. Příprava nového modelu zůstává ve sliceru na počítači."
publishedAt: 2026-10-03
updatedAt: 2026-10-03
reviewedAt: 2026-10-03
author: "Redakce První vrstvy"
tags:
  - průvodce
  - aplikace
  - Bambu Handy
  - Prusa
  - MakerWorld
level: "začátečník"
technologies:
  - "FDM"
evidence: "vyrobce"
sourceNote: "Kontrola 3. 10. 2026 proti Bambu Handy Quick Start, stránce Software and App na wiki Bambu Lab a článku Prusa Mobile App v Prusa Knowledge Base. Snímky jsou z oficiálního návodu Bambu Handy. Snímek rozhraní aplikace Prusa pod svobodnou licencí není, proto tu chybí."
---

**Telefon u 3D tiskárny hlídá běžící úlohu a umí ji podle návodu výrobce spustit znovu. Nový model pořád připravíte ve sliceru na počítači.** Dvě aplikace, ke kterým existuje oficiální návod, jsou Bambu Handy a mobilní aplikace Prusa.

Jiné aplikace z katalogů obchodů sem nepatří. Bez stránky výrobce by šlo o seznam funkcí odjinud.

## Bambu Handy

Bambu Lab popisuje Handy jako aplikaci ke svým tiskárnám. Rychlý návod říká, že slouží ke vzdálenému dohledu a správě, ke spuštění dřívějších projektů a k úpravám běžícího tisku. Ke stažení odkazuje na [bambulab.com/en/download/app](https://bambulab.com/en/download/app), odkud se jde do obchodu Google Play nebo App Store.

Po přihlášení a spárování tiskárny návod popisuje obrazovku zařízení s těmito částmi: přepínání tiskáren, nastavení, skenování, živý náhled, postup tisku a ovládání stroje. Přesné popisky se v jazyce aplikace liší. Snímky níže jsou z anglického a čínského rozhraní v oficiální wiki, ne z české lokalizace.

Stejná dokumentace aplikaci spojuje s MakerWorld: z telefonu se jde ke knihovně modelů a k odeslání vybraného projektu na tiskárnu. Knihovna sama je v [průvodci databázemi](/clanky/databaze-modelu-printables-makerworld-thingiverse/). Licence modelu platí i tehdy, když ho odesíláte z telefonu.

<figure>
  <img src="/media/pruvodce/app-handy-uvod.png" alt="Úvodní obrazovka aplikace Bambu Handy s přihlášením a seznamem zařízení" loading="lazy" decoding="async" />
  <figcaption>Úvod Bambu Handy. Oficiální snímek z Bambu Lab Wiki, rychlý návod aplikace.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/app-handy-soukromi.png" alt="Obrazovka souhlasu se zásadami a s oznámeními v aplikaci Bambu Handy" loading="lazy" decoding="async" />
  <figcaption>Souhlas a oznámení při prvním spuštění. Oficiální snímek z Bambu Lab Wiki.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/app-handy-parovani.png" alt="Výběr způsobu připojení tiskárny v aplikaci Bambu Handy" loading="lazy" decoding="async" />
  <figcaption>Volba způsobu připojení tiskárny. Oficiální snímek z Bambu Lab Wiki.</figcaption>
</figure>

<figure>
  <img src="/media/pruvodce/app-handy-ovladani.png" alt="Číslované kroky spárování tiskárny v aplikaci Bambu Handy" loading="lazy" decoding="async" />
  <figcaption>Kroky spárování v návodu Bambu Handy. Oficiální snímek z Bambu Lab Wiki.</figcaption>
</figure>

Živý náhled není náhrada za člověka u prvního tisku nové konstrukce. Kamera ukáže, že se díl odlepil, až když se odlepil. První vrstvu u nového materiálu pořád stojí za to vidět osobně. Postup, když nedrží, je v [článku o první vrstvě](/rady-a-tipy/prvni-vrstva-nedrzi/).

Úprava běžícího tisku, o které návod mluví, není totéž co překreslení modelu. Geometrii, výplň a podpěry mění slicer. Když telefon nabídne změnu, kterou návod k vaší verzi aplikace nepopisuje, nechte ji být a úlohu připravte znovu v [Bambu Studiu](/clanky/fdm-slicery-bambu-studio-orcaslicer-prusaslicer/).

## Aplikace Prusa

Prusa Knowledge Base má samostatný článek [Prusa Mobile App](https://help.prusa3d.com/article/prusa-mobile-app_735711). Píše, že aplikace pouští Prusa Connect z telefonu. Uvádí:

- přehled tiskáren a jejich stavu,
- běžící a starší úlohy a telemetrii,
- oznámení důležitých událostí, jako oznámení systému i jako obrazovku v aplikaci,
- nastavení Wi-Fi přes NFC u modelů, které mají NFC anténu,
- přidání tiskárny do účtu a do týmu,
- základní přímý tisk.

Aplikace je podle článku pro iOS i Android. Článek ji řadí vedle Prusa Connect a PrusaLink. Connect je vzdálená služba, Link je cesta v místní síti. Který režim váš stroj použije, rozhoduje návod k modelu: Knowledge Base má samostatné postupy pro CORE One, MK4/S, MK3.9, MK3.5, XL a MINI/+. Obecný průvodce ty postupy nenahrazuje.

Snímek rozhraní aplikace Prusa, který by šlo zveřejnit se stejnou jistotou jako wiki Bambu Lab, k dispozici není. Funkce výše jsou proto jen parafráze článku výrobce, ne popis tlačítek z fotografie.

## Co telefon nespraví

Aplikace nevidí uvolněný řemen, špatně nasazenou trysku ani vlhký filament, dokud se závada neprojeví na čidle nebo na kameře. Hláška v telefonu má stejný význam jako hláška na displeji stroje: je to kód, ne diagnóza. České rozepsání kódů je u [Bambu HMS](/rady-a-tipy/bambu-lab-hms-chybove-kody-cesky/) a u [Prusa](/rady-a-tipy/prusa-chybove-kody-cesky/).

Tiskárna bez oficiální aplikace se z telefonu nezačne poslouchat tím, že nainstalujete Handy nebo Prusa. Každá aplikace mluví se svým ekosystémem. Cizí stroj na Klipperu nebo OctoPrintu má vlastní rozhraní. To sem nepatří, dokud ho nebudeme brát z dokumentace daného projektu.

Oznámení v telefonu také nic neřeknou, když je v systému vypnete na obrazovce, kterou Handy při startu ukazuje. Když má aplikace hlídat konec tisku, nechte je zapnutá a vyzkoušejte je na krátké úloze.

## Praktický závěr

- [ ] Bambu Lab: Handy z oficiálního odkazu, tiskárna spárovaná, u nové úlohy pořád osobně zkontrolovaná první vrstva.
- [ ] Prusa s Connectem: mobilní aplikace podle článku Knowledge Base, Wi-Fi podle návodu k konkrétnímu modelu.
- [ ] Model z MakerWorld nebo jiné knihovny nejdřív s licencí, potom teprve odeslání z telefonu.
- [ ] Změna tvaru a profilu patří do sliceru. Telefon hlídá úlohu, která už je připravená.
- [ ] Aplikaci vybírejte podle značky tiskárny. Univerzální „aplikace na všechny FDM“ tu není, protože k ní nemáme jednotný oficiální návod.

Když tiskárna potřebuje zásah, který aplikace neumlčí, pokračujte [servisem](/clanky/servis-3d-tiskaren/).

## Zdroje

- [Bambu Handy — rychlý návod](https://wiki.bambulab.com/en/studio-handy/handy/bambu-handy-quick-start)
- [Bambu Lab Wiki — software a aplikace](https://wiki.bambulab.com/en/software)
- [Stažení Bambu Handy](https://bambulab.com/en/download/app)
- [Prusa Knowledge Base — Prusa Mobile App](https://help.prusa3d.com/article/prusa-mobile-app_735711)
- [Prusa Connect a PrusaLink](https://help.prusa3d.com/product/prusa-connect/prusa-connect-prusalink_1636)
