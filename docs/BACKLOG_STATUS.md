# První Vrstva — stav backlogu z PDF

Legenda: **live** = veřejný obsah má použitelný základ; **partial** = část tématu existuje, ale nesplňuje ještě finální šablonu; **draft** = připravená kostra, veřejně se nevydává; **blocked-test** = zdrojovaný profil může vzniknout hned, ale plná recenze čeká na skutečný test; **blocked-data** = čeká na externí data nebo odbornou kontrolu.

| # | Téma | Stav | Poznámka |
|---:|---|---|---|
| 1 | Nejlepší 3D tiskárny 2026 | partial | zdrojovaný scénářový rádce je veřejný; chybí živé CZ/SK ceny a postupné vlastní důkazy |
| 2 | Nejlepší tiskárna pro začátečníky | live | zdrojovaný rádce publikován, bez falešného skóre; ceny doplní datová vrstva |
| 3 | Nejlepší tiskárna do 10 000 Kč | draft | vyžaduje živé ceny včetně dopravy |
| 4 | Nejlepší uzavřená tiskárna pro ASA/ABS | draft | lze připravit zdrojovanou analýzu konstrukcí; tvrzení o reálném výkonu čekají na testy |
| 5 | Bambu Lab, nebo Prusa? | live | existující srovnání; dál doplňovat vlastní servisní data |
| 6 | Nejlepší sušičky filamentu | draft | zdrojované profily lze připravit; plný test čeká na jednotný měřicí protokol |
| 7 | Nejlepší PLA od českých výrobců | draft | profily značek lze připravit; pořadí kvality čeká na vzorky a stejné testovací modely |
| 8 | Nejlevnější filament v ČR | blocked-data | /srovnavac/ ukazuje přijaté řádky tří Heureka XML a zůstává noindex; produkční offers je prázdné, normalizace mezi obchody chybí |
| 9 | Bambu Lab A1 | blocked-test | publikovat zdrojovaný profil; plná recenze až po testovacím protokolu |
| 10 | Prusa CORE One | blocked-test | publikovat zdrojovaný profil; plná recenze až po testovacím protokolu |
| 11 | Bambu Lab P2S | blocked-test | model ověřen v aktuálních zdrojích; zdrojovaný profil může vzniknout hned |
| 12 | Elegoo Centauri Carbon | blocked-test | aktuální větev ověřit jako Centauri Carbon 2; plná recenze až po testovacím protokolu |
| 13 | Prusa MK4S | partial | redakční profil live, skóre odstraněno do testovacího protokolu |
| 14 | Bambu Lab A1 mini | blocked-test | publikovat zdrojovaný profil; plná recenze až po testovacím protokolu |
| 15 | Co je 3D tisk (FDM/resin/SLS) | live | společný vstup + odkazy na detailní technologické primery |
| 16 | Jak vybrat první tiskárnu: 7 otázek | live | rozhodovací průvodce publikován |
| 17 | První vrstva: Z-offset | live | existuje praktický návod; doplnit názorné AI vizualizace správné/chybné vrstvy |
| 18 | PLA/PETG/ASA/TPU: který kdy | live | rozhodovací lekce + zdrojovaná materiálová reference |
| 19 | Slicer pro začátečníky | live | PrusaSlicer / Bambu Studio / OrcaSlicer, primární zdroje |
| 20 | Kde stáhnout modely a licence | live | Printables / MakerWorld / Thingiverse + CC podmínky; není právní rada |
| 21 | Warping | live | článek existuje; vhodný pro AI diagnostickou ilustraci |
| 22 | Stringing | live | návod existuje; vhodný pro AI diagnostickou ilustraci |
| 23 | Ucpaná tryska / cold pull | live | návod existuje |
| 24 | Vlhký filament | live | návod existuje |
| 25 | Posun vrstev | live | návod existuje |
| 26 | Bambu HMS kódy česky | live | český navigační průvodce, přesné řešení vždy vede do Bambu Wiki |
| 27 | Prusa chybová hlášení česky | live | český navigační průvodce podle QR kódů a Prusa Knowledge Base |
| 28 | Kolik stojí 3D tisk | partial | kalkulačka existuje; článek lze rozjet transparentním modelovým výpočtem a později doplnit vlastní měření |
| 29 | 3D tisk jako podnikání v ČR | blocked-data | před publikací vyžaduje aktuální právní/daňové zdroje a odbornou kontrolu |
| 30 | Mapa makerspaců a tiskových služeb CZ/SK | blocked-data | komunitní fáze; aktivovat až po první obsahové bráně |

## Co je opravdu blokované

### Plné recenze a skóre

Recenze 9–14 nejsou blokované jako **produktové profily**. Blokovaný je pouze přechod na plnou recenzi se skóre, tvrzením o vlastním testu a vlastních naměřených výsledcích.

Dokud test není, publikujeme zdrojovaný profil s jasným omezením.

### Cenové feedy

Money pages 1–8 mohou obsahově vznikat průběžně, ale živé cenové pořadí a tvrzení „nejlevnější“ vyžaduje lokální data. Datový kontrakt je v `docs/PRICE_FEED_CONTRACT.md`; veřejný srovnávač zůstává `noindex`, dokud nejsou alespoň tři stabilní zdroje.

### Ondřejův vstup

Ondřej není bottleneck výroby obsahu. Jeho vstup se používá tam, kde má nejvyšší hodnotu:

- rychlá kontrola závěru,
- krátká servisní poznámka,
- diktování zkušenosti,
- foto jen když přirozeně vznikne,
- měření jen tam, kde mění rozhodnutí čtenáře.

## Nejbližší pracovní fronta

1. Připravit zdrojované profily A1, CORE One+, P2S, Centauri Carbon 2 a A1 mini bez falešného testování.
2. Rozpracovat money pages 3–4 a 6–7 z parametrů, servisu a dostupných CZ/SK podkladů; jasně značit, co je test a co analýza.
3. Doplnit generativní diagnostické vizualizace do Z-offset / warping / stringing / první vrstva.
4. Napojit první schválené CZ/SK cenové feedy.
5. Reálné testy, fotografie a měření přidávat oportunisticky jako důkazní vrstvu, ne jako podmínku publikace.
6. Neaktivovat magazín, podcast ani komunitu jen kvůli objemu obsahu — PDF je staví až za první obsahovou a monetizační bránu.
