---
title: "Bambu Lab H2D: profil tiskárny, dual-nozzle a vyhřívaná komora"
description: "Zdrojovaný profil Bambu Lab H2D: tiskový objem, dvě trysky, 350 °C hotend, 120 °C podložka, 65 °C aktivně vyhřívaná komora a praktický kontext podle dokumentace výrobce."
publishedAt: 2026-10-05
brand: "Bambu Lab"
technology: "FDM"
tags:
  - "Bambu Lab"
  - "H2D"
  - "FDM"
  - "dual nozzle"
  - "vyhřívaná komora"
---

Bambu Lab H2D je uzavřená FDM tiskárna se dvěma tryskami, aktivně vyhřívanou komorou a výrazně větším pracovním prostorem než 256mm třída. Tento profil není vlastní fyzický test První Vrstvy; technické údaje níže vycházejí z aktuální dokumentace výrobce.

## Nejdůležitější parametry

| Parametr | Bambu Lab H2D |
|---|---|
| Technologie | FDM |
| Tiskový objem – jedna tryska | 325 × 320 × 325 mm |
| Průnik prostoru obou trysek | 300 × 320 × 325 mm |
| Celkový dosah dvou trysek | 350 × 320 × 325 mm |
| Maximální teplota hotendu | 350 °C |
| Maximální teplota podložky | 120 °C |
| Aktivně vyhřívaná komora | ano, max. 65 °C |
| Dodávaná tryska | 0,4 mm |
| Podporované průměry trysek | 0,2 / 0,4 / 0,6 / 0,8 mm |
| Maximální deklarovaná rychlost pohybu hlavy | 1000 mm/s |
| Maximální deklarované zrychlení | 20 000 mm/s² |
| Rozměry tiskárny | 492 × 514 × 626 mm |
| Hmotnost | 31 kg |

Hodnoty jsou specifikace výrobce, nikoli naše měření rychlosti, kvality nebo spotřeby.

## Tři různé údaje o tiskovém prostoru

U H2D nestačí uvést jediné číslo. Výrobce rozlišuje 325 × 320 × 325 mm při tisku jednou tryskou, společný prostor obou trysek 300 × 320 × 325 mm a celkový dosah obou trysek 350 × 320 × 325 mm. Při plánování konkrétního dvoumateriálového nebo dvoubarevného dílu je proto důležitý právě společný prostor, ne největší číslo z produktové tabulky.

Pro uživatele přecházejícího z běžné 256mm tiskárny je podstatná i samotná fyzická velikost stroje. H2D má podle dokumentace 492 × 514 × 626 mm a váží 31 kg, takže pracovní místo je vhodné plánovat před nákupem, včetně prostoru pro filamentový systém a přístup ke stroji.

## Dvě trysky: proč jsou důležité

H2D používá dual-nozzle systém. Praktický význam není jen v barvách: druhá tryska může oddělit dva materiály nebo hlavní materiál a podpory. Výhoda konkrétní úlohy ale závisí na modelu, materiálech a sliceru; bez vlastního měření proto neuvádíme univerzální úsporu času ani materiálu.

Při porovnávání s jednou tryskou je vhodné sledovat také omezení společného tiskového prostoru. Pokud mají na jednom dílu pracovat obě trysky, výrobce uvádí průnik 300 × 320 × 325 mm.

## Teploty a technické materiály

Celokovový hotend má podle specifikace maximum 350 °C, podložka 120 °C a aktivně vyhřívaná komora až 65 °C. Tato kombinace je podstatnější než samotná maximální teplota trysky: u materiálů citlivých na okolní podmínky pomáhá řízené prostředí komory.

Konkrétní kompatibilitu filamentu je ale potřeba vždy ověřit podle aktuálního materiálového doporučení výrobce. Maximální teploty stroje samy o sobě nejsou zárukou vhodnosti každého polymeru nebo kompozitu.

## Hotend, trysky a průtok

Výrobce uvádí tvrzenou ocel pro trysku i převody extruderu. Standardně je uvedena 0,4mm tryska a podporované průměry 0,2, 0,4, 0,6 a 0,8 mm.

Pro standard-flow hotend Bambu Lab deklaruje maximální průtok 40 mm³/s za konkrétních testovacích podmínek výrobce. Tuto hodnotu nelze automaticky převádět na rychlost každého reálného modelu; závisí na materiálu, teplotě, geometrii a profilu.

## Rychlost: technický limit není čas benchmarku

Ve specifikaci H2D je uvedena maximální rychlost pohybu hlavy 1000 mm/s a maximální zrychlení 20 000 mm/s². Jde o limity deklarované výrobcem, ne o tvrzení, že běžný model bude po celou dobu tisknout těmito hodnotami.

První Vrstva zde proto nepublikuje vlastní časy tisku ani porovnání rychlosti s jinými stroji, dokud nevznikne skutečný fyzický test se stejným modelem, materiálem a metodikou.

## Filtrace a komora

Dokumentace H2D uvádí aktivní ohřev komory do 65 °C a filtrační systém s G3 předfiltrem, H12 HEPA filtrem a aktivním uhlím z granulovaných kokosových skořápek. To je relevantní konstrukční vlastnost uzavřeného stroje; není to ale totéž jako naše vlastní měření emisí v místnosti.

## H2D jako výrobní platforma

Bambu Lab H2D představilo 25. března 2025 jako platformu, která může vedle 3D tisku podporovat také laserové gravírování/řezání a plotting podle konkrétní konfigurace a příslušenství. Při nákupu je proto důležité rozlišovat samotnou tiskárnu, AMS konfiguraci a laserové varianty; funkce jednotlivých balíčků nejsou automaticky totožné.

Tento profil se soustředí na 3D tiskovou část H2D. Laserové moduly vyžadují samostatné bezpečnostní a funkční posouzení a nemá smysl jejich schopnosti směšovat s parametry FDM tisku.

## Pro koho dává H2D smysl podle parametrů

H2D je podle konstrukce zajímavá hlavně pro uživatele, kteří skutečně využijí větší pracovní prostor, dvě trysky nebo řízenou vyhřívanou komoru. Pokud tisknete převážně PLA/PETG a malé modely, samotná existence vyšších teplot a většího stroje nemusí být praktickou výhodou.

Naopak pro větší funkční díly, kombinaci hlavního a podpůrného materiálu nebo práci s materiály, které těží ze stabilnější teploty okolí, jsou právě dual-nozzle, 120°C podložka a 65°C komora parametry, které stojí za přímé porovnání s jednoduššími stroji.

## Co zkontrolovat před nákupem

- Ověřte, zda potřebujete jednu nebo obě trysky a jaký pracovní prostor bude mít váš konkrétní model.
- Změřte pracovní místo; samotná tiskárna má podle výrobce 492 × 514 × 626 mm a 31 kg.
- Rozhodujte podle reálně používaných filamentů, ne pouze podle maxima 350 °C na hotendu.
- Pokud vás zajímá laser, zkontrolujte přesnou konfiguraci a příslušenství; základní 3D tisková funkce a laserový balíček nejsou totéž.
- Deklarované maximum 1000 mm/s neberte jako univerzální časový benchmark.

## Zdroje

- Bambu Lab — **H2D Laser Full Combo, Technical Specifications / Quick Start**, aktuální dokumentace výrobce: https://cdn1.bambulab.com/documentation/h2d/en/H2D_Laser_Full_Combo_20250305.pdf
- Bambu Lab — **Bambu Lab Launches H2D to Rethink Personal Manufacturing**, 25. března 2025: https://blog.bambulab.com/bambu-lab-launches-h2d-to-rethink-personal-manufacturing/

*Specifikace ověřeny 5. října 2026. Tento profil pracuje s primární dokumentací výrobce; nejde o vlastní fyzický test První Vrstvy.*