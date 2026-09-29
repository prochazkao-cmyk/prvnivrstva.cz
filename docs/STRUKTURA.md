> Redakční podklady, ne stránky webu. Živé texty jsou v `src/content/` a jejich frontmatter je namapovaný na schéma kolekcí (`perex` → `description`, `published` → `publishedAt`).

# Redakční informační architektura — prvnivrstva.cz

All3DP-stylový hub o 3D tisku: praktické návody, férové recenze a technologické základy pro českou dílnu. Tón: zkušený tiskař kolegovi — fakta nad marketingem, vždy praktický závěr.

---

## Rubriky

### 1. Články (`clanky/`)
- **Účel:** Hloubkové texty, které řeší jeden problém od kořene. Čtenář odchází s checklistem a rozhodnutím.
- **Typická délka:** 1 800–3 500 slov (cca 8–15 min čtení).
- **Povinná struktura:**
  1. **Problém** — co se děje, proč to bolí, kdy se to projevuje
  2. **Řešení** — příčiny → konkrétní kroky / srovnání / metodika
  3. **Praktický závěr** — checklist, verdikt, „co udělat zítra v dílně“
- **Tagy:** `checklist`, `troubleshooting`, `srovnání`, `kalibrace`, `materiál`, `workflow`
- **Vztahy:** odkazuje na Rady a tipy (rychlé fixy), Materiály, Stroje, Software; může být podkladem pro Novinky roundup.

### 2. Rady a tipy (`rady-a-tipy/`)
- **Účel:** Krátké quick wins — jeden problém, jedno řešení, max 5 minut čtení.
- **Typická délka:** 400–900 slov.
- **Povinná struktura:**
  1. **Problém** (1–2 odstavce + kdy se to stává)
  2. **Řešení** (kroky / nastavení / materiál)
  3. **Praktický závěr** (1–3 bullet body „udělej teď“)
- **Tagy:** `quick-win`, `prve-vrstva`, `retrakce`, `adheze`, `kalibrace`, `udrzba`
- **Vztahy:** často „výřez“ z Článku; odkazuje na Stroje (specifické bedy) a Materiály.

### 3. Recenze
- **Účel:** Kritické hodnocení konkrétního produktu (tiskárna, filament, slicer, příslušenství). Oddělená od marketingových materiálů.
- **Typická délka:** 1 200–2 500 slov.
- **Povinná struktura:** kontext → specs → testy / zkušenost → silné/slabé → pro koho ano/ne → verdikt.
- **Tagy:** `recenze`, `verdikt`, značka produktu
- **Vztahy:** žije vedle rubriky Stroje; hlubší Články mohou srovnávat více modelů. Seed content strojů je ve `stroje/` jako přehledové stuby (recenze-lite).

### 4. Novinky
- **Účel:** Co je nového na trhu — firmware, filamenty, HW, legislativní/safety poznámky. Preferovat roundupy před jednotlivými PR.
- **Typická délka:** 600–1 500 slov (roundup), 300–600 (jednotlivá zpráva).
- **Povinná struktura:** co se stalo → proč to záleží tiskaři → co dělat (updatovat / počkat / ignorovat).
- **Tagy:** `novinka`, `firmware`, `release`, `trh`
- **Vztahy:** odkazuje na Stroje / Software / Materiály; slouží jako vstup do Článků.

### 5. Technologie (`technologie/`)
- **Účel:** Primery — co je FDM/SLA/SLS/MJF, pro koho, limity. Slovník a orientace pro začátečníky i přechod na jinou technologii.
- **Typická délka:** 700–1 400 slov.
- **Povinná struktura:** co to je → jak to funguje (stručně) → pro koho → limity/náklady → praktický závěr (kdy zvolit).
- **Tagy:** `primer`, `fdm`, `sla`, `sls`, `mjf`, `orientace`
- **Vztahy:** základ pro výběr Stroje a Materiálů; Články na něj odkazují („pokud nevíte rozdíl FDM vs SLA…“).

### 6. Stroje — tiskárny (`stroje/`)
- **Účel:** Přehledy a stub-recenze konkrétních tiskáren: specs, silné/slabé, pro koho, verdikt.
- **Typická délka:** 800–1 800 slov (stub/overview); plná recenze dle rubriky Recenze.
- **Povinná struktura:** stručný úvod → specs summary → silné → slabé → pro koho ano/ne → praktický verdikt.
- **Tagy:** `tiskarna`, značka (`prusa`, `bambu`, `creality`, `formlabs`…), `fdm` / `sla`
- **Vztahy:** napojeno na Recenze, Software (slicer doporučení), Materiály (co zvládne).

### 7. Materiály
- **Účel:** Filamenty, resiny, prášky — chování, sušení, teplota, toxicita, skladování.
- **Typická délka:** tip 500–900; deep 1 500–2 500.
- **Povinná struktura:** problém materiálu → nastavení/workflow → závěr (checklist).
- **Tagy:** `filament`, `resin`, `abs`, `petg`, `pla`, `suseni`, `adheze`
- **Vztahy:** silná vazba na Články (warping, sušení) a Rady a tipy.

### 8. Software (slicery / firmware)
- **Účel:** PrusaSlicer, Bambu Studio, Cura, Orca, Klipper, Marlin — nastavení, profily, update strategie.
- **Typická délka:** tip 400–800; deep 1 500–3 000.
- **Povinná struktura:** problém v softwaru → konkrétní nastavení → verdikt / recommended defaults.
- **Tagy:** `slicer`, `firmware`, `klipper`, `profil`, `flow`, `retrakce`
- **Vztahy:** Rady a tipy často míří sem; Stroje doporučují výchozí slicer.

---

## Taxonomie

### Technologie
| Hodnota | Význam |
|---------|--------|
| `FDM` | Fused Deposition Modeling (filament) |
| `SLA` | Stereolithography / resin (MSLA, DLP) |
| `SLS` | Selective Laser Sintering (prášek, laser) |
| `MJF` | Multi Jet Fusion (HP, prášek + agent) |

V frontmatter poli `technologie: []` — pole, článek může mít víc hodnot.

### Úroveň (`uroveň`)
| Hodnota | Kritérium |
|---------|-----------|
| `začátečník` | první měsíce, základní pojmy, bezpečné defaulty |
| `pokročilý` | kalibrace, materiály mimo PLA, údržba |
| `profi` | produkce, SLA/SLS/MJF, dílenský workflow, ROI |

### Značky (tagy / filtry)
Primární: `Prusa`, `Bambu Lab`, `Creality`, `Formlabs`  
Sekundární dle potřeby: `Anycubic`, `Elegoo`, `Ultimaker`, `Raise3D`, `Flashforge`, `Voron` (DIY), `HP` (MJF).

Další běžné tagy: `enclosure`, `pei`, `glue-stick`, `brim`, `raft`, `supports`, `bezpecnost`, `ventilace`.

---

## Domovská stránka

### Featured (editor picks)
- 1× aktuální **deep Článek** týdne
- 1× **Stroj / Recenze** relevantní k sezóně nebo release
- 1× **Technologie primer** pro nováčky (rotace)
- Kritérium: evergreen hodnota + praktický checklist, ne PR.

### Latest (chronologický feed)
- Rady a tipy + Novinky + kratší update Software/Materiály
- Řazení: `published` desc
- Badge rubriky + úroveň + technologie

### Doplňkové bloky
- „Začněte tady“ — 3–4 primery + tipy pro začátečníky
- „Troubleshooting“ — odkaz na warping, stringing, adhezi, elephant foot
- Newsletter CTA: týdenní digest (1 deep + tipy + roundup)

---

## Editorial calendar (týdenní rytmus)

| Slot | Počet | Rubrika | Poznámka |
|------|-------|---------|----------|
| Deep article | **1 / týden** | Články (nebo plná Recenze) | Pondělí/úterý publish |
| Quick tips | **3 / týden** | Rady a tipy | Středa–pátek, krátké |
| News roundup | **1 / týden** | Novinky | Pátek/sobota — týdenní souhrn |

**Měsíčně navíc:** 1× Stroj overview nebo update; 1× Technologie / Materiály evergreen refresh.

**Kvalitativní pravidla**
- Každý text končí **praktickým závěrem** (checklist nebo verdikt).
- Žádné affiliate-first nadpisy; srovnání musí uvést slabiny obou stran.
- U HW uvádět datum znalosti / firmware kontext, kde dává smysl.
- Cross-link: tip → deep článek; stroj → relevantní tipy a materiály.

---

## Mapování seed obsahu → rubriky

| Složka | Rubrika frontmatter | Počet seed |
|--------|---------------------|------------|
| `clanky/` | `clanky` | 3 |
| `rady-a-tipy/` | `rady-a-tipy` | 6 |
| `stroje/` | `stroje` | 4 |
| `technologie/` | `technologie` | 4 |

Recenze, Novinky, Materiály a Software jsou v IA připravené; seed je zatím ve výše uvedených složkách (stroje = recenze-lite stuby).
