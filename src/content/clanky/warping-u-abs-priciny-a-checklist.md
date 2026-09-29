---
title: "Warping u ABS — příčiny a praktický checklist"
description: "Rohy se zvedají, díl praská ve vrstvách a bed už nezachrání — typický ABS warping. Tady jsou skutečné příčiny a checklist, který v dílně použijete hned."
publishedAt: 2026-09-29
level: "pokročilý"
technologies:
  - "FDM"
tags:
  - "checklist"
  - "troubleshooting"
  - "abs"
  - "enclosure"
  - "adheze"
  - "warping"
hero: true
featured: true
---
ABS umí být skvělý materiál: vyšší teplotní odolnost než PLA, lepší houževnatost, snadnější post-processing acetonem. Ale bez správného prostředí se chová jako nervózní host — zvedá rohy, odlepí se od bedu a někdy praskne přímo uprostřed výtisku. Tomu se říká **warping** (a související layer splitting / delaminace).

Tenhle článek není reklamní „kupte enclosure“. Je to diagnostika: proč se to děje, co má největší vliv a co zkontrolovat v jakém pořadí.

## Problém: co přesně se děje

ABS při chladnutí **silně smršťuje**. Spodní vrstvy jsou přilepené k bedu (nebo by měly být), horní chladnou rychleji a táhnou materiál dovnitř. Výsledek:

- zvednuté rohy a hrany (klasický warping),
- odlepení celé plochy od podložky,
- praskliny mezi vrstvami u vyšších dílů (delaminace),
- deformace geometrie (díry „ovál“, rozměry mimo toleranci).

Warping není „špatný filament od výrobce X“. Je to fyzika + nastavení + prostředí. Levný ABS bez enclosure ve studené garáži bude trpět skoro vždy; drahý ABS ve studené garáži také.

**Kdy se to projevuje nejvíc:** velké plochy, ostré rohy, tenké stěny, tisk bez boxu, průvan od okna, nízká teplota bedu, špatná adheze první vrstvy, příliš agresivní chlazení dílu.

## Řešení: tři pilíře (enclosure, teplota, adheze)

### 1) Enclosure — ne luxus, ale podmínka

U ABS chcete **stabilní teplý vzduch kolem dílu**, ne studený průvan. Enclosure:

- snižuje teplotní gradient mezi tryskou a okolím,
- drží vrstvy déle „měkké“ a lépe spojené,
- výrazně snižuje riziko praskání u vyšších výtisků.

**Prakticky:**

- Uzavřená komora (Prusa Enclosure, Bambu P1S/X1, DIY box z IKEA Lack / polykarbonátu — podle stroje).
- Nevypínejte dveře uprostřed tisku „jen na kontrolu“ u kritických dílů; každý otevření = studený vzduch.
- Cílová teplota vzduchu v komoře bývá často v pásmu cca **35–45 °C** (záleží na stroji a bezpečnosti elektroniky — některé desky nesnáší dlouhodobě vysoké teplo; u open-frame tiskáren elektroniku chraňte mimo box nebo ji aktivně chlaďte).
- Part cooling u ABS: **minimálně**. Často 0–20 %. Silný ventilátor = rychlé smrštění = warping.

Bez enclosure u větších ABS dílů bojujete s větrem. Malé kusy (pár centimetrů) někdy přežijí i open-frame — velké rámy, boxy a šasi obvykle ne.

### 2) Teplota — bed, tryska, okolí

**Bed:** ABS potřebuje horkou podložku. Typicky **90–110 °C** podle filamentu a podložky. Příliš nízký bed = špatná adheze + dřívější smrštění u dna. Příliš vysoký u některých podložek = „sloní noha“ a obtížné sundávání — ale u warpingu je spíš problém spodní hranice.

**Tryska:** běžně **240–260 °C** (ověřte spool). Příliš nízká teplota zhoršuje mezivrstvé spojení → delaminace. Příliš vysoká může degradovat materiál a zhoršit zápach/emise.

**První vrstva:** často o 5–10 °C výš než ostrá vrstva, pomalejší rychlost (20–30 mm/s), výška první vrstvy spíš 0,2–0,28 mm při 0,4 trysce — chcete „přimáčknutí“, ne nitky ve vzduchu.

**Tip:** teplotní věž a adhezní test (malý čtverec s ostrými rohy) ušetří filament i nervy. Nestřílejte rovnou 10hodinový díl.

### 3) Adheze — bed musí držet silněji než smrštění

I perfektní enclosure selže, když první vrstva nedrží.

**Podložky a přípravy, které v praxi fungují:**

| Metoda | Poznámka |
|--------|----------|
| **PEI (hladký / texturovaný)** | Často stačí čistý povrch; ABS někdy drží až moc — pozor na poškození sheetu při sundávání za studena. |
| **Glue stick (PVA)** | Levná pojistka, zejména na hladkém PEI / skle; vytváří oddělitelnou vrstvu. |
| **ABS slurry** (ABS + aceton) | Klasika dílen: tenký nátěr na bed. Funguje výborně, ale aceton = ventilace, hořlavost, zdravý rozum. |
| **Brim** | 5–15 mm brim výrazně drží rohy. U warpingu je brim levnější než raft. |
| **Raft** | Rezerva pro problematické díly; plýtvá materiálem a kazí spodní povrch — spíš nouzovka. |

**Čistota bedu:** mastnota z prstů = nepřítel. IPA (izopropylalkohol) před tiskem; u silného znečištění teplá voda + saponát (podložku pořádně osušte). Olejové čističe a silné odmašťovače používejte jen pokud víte, že nepoškodí coating.

**Z-offset / first layer:** pokud je první vrstva „dráty“ nebo se trhá, adheze nebude. Kalibrujte, dokud nevymačkáte hladký, mírně průhledný pás.

**Orientace modelu:** ostré rohy na okraji bedu warpuí víc. Občas pomůže otočit díl, zaoblit hrany v CAD, nebo přidat chamfer u spodní hrany.

## Související pasty: vlhkost a proudění vzduchu

- **Vlhký ABS** tiskne hůř (bubliny, slabší vrstvy). Sušte podle výrobce (typicky 60–70 °C, několik hodin). Viz článek o sušení filamentu.
- **Průvan** od klimatizace / otevřeného okna vedle open-frame stroje dokáže zničit i jinak dobrý profil.
- **Emise:** ABS voní a uvolňuje částice/VOC. Enclosure + filtrace (např. uhlíkový filtr u některých strojů) + větrání dílny není „paranoja“, je to hygiena práce.

## Checklist: warping ABS — jděte shora dolů

Použijte jako pořadí zásahů. Neměňte deset věcí najednou.

1. **Je kolem dílu enclosure / uzavřená komora?** Ne → nejdřív to. Malé testy bez boxu OK, produkční díly raději s boxem.
2. **Part cooling vypnutý nebo minimální?** Ano u ABS.
3. **Bed 90–110 °C, tryska dle spoolu (často 240–260 °C)?** Ověřte skutečnou teplotu, ne jen setpoint (levné termistory lžou).
4. **První vrstva přimáčknutá, pomalá, čistý bed?** IPA, správný Z-offset.
5. **Brim u ostrých rohů / větších ploch?** Zapněte.
6. **Adhezní pomoc (glue / slurry) na dané podložce vyzkoušená?** Ano u problematických jobů.
7. **Filament suchý, ne starý otevřený spool z vlhké dílny?** Sušte.
8. **Je díl obří tenkostěnná krabice?** Zvažte úpravu modelu (žebra, zaoblení rohů) nebo jiný materiál (ASA často podobné vlastnosti, někdy o něco méně dramatický warping — pořád chce teplo).

**Rychlý test:** vytiskněte čtverec 80×80 mm, výška 5–10 mm, ostré rohy, bez chamferu. Pokud rohy drží, teprve jděte do ostrého dílu.

## Praktický závěr

Warping u ABS skoro nikdy „nevyřešíte jedním sliderem ve sliceru“. Pořadí síly zásahu je:

1. **Enclosure + minimum chlazení dílu**  
2. **Správné teploty bed/tryska + pomalá první vrstva**  
3. **Adheze (čistý PEI / glue / slurry) + brim**

Když tohle sedí, ABS přestane být noční můra a začne být nástroj. Pokud tisknete občas malé kousky a nechcete řešit box ani zápach, zvažte **PLA+/PETG** pro daný use-case — nebo **ASA** v enclosure, pokud chcete venkovní UV odolnost.

**Zítra v dílně:** jeden adhezní testovací čtverec, vypnutý part fan, změřený bed, brim 8 mm. Až tohle projde, teprve ostrý job.
