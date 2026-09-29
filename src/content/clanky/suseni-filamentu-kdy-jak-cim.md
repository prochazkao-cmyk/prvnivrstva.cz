---
title: "Sušení filamentu — kdy, jak, čím a co se stane, když nesušíte"
description: "Praskání u trysky, matný povrch, slabé vrstvy a „všechna nastavení jsou správně“. Často to není slicer — je to voda ve spoolu. Kompletní návod na sušení."
publishedAt: 2026-09-29
level: "pokročilý"
technologies:
  - "FDM"
tags:
  - "checklist"
  - "filament"
  - "suseni"
  - "material"
  - "troubleshooting"
featured: true
---
Filament není inertní tyčka. Hygrskopické materiály tahají vlhkost ze vzduchu jako houba. Ve extruderu se voda mění v páru, dělá bubliny a ničí kvalitu i mechaniku. Spousta „záhadných“ vad tisku zmizí po jednom pořádném sušení.

## Problém: jak poznáte vlhký filament

Typické symptomy (často v kombinaci):

- **praskání / popping** u trysky (slyšitelné),
- **bublinky a dutiny** na povrchu nebo v řezu,
- **stringing a oozing** horší než obvykle,
- **matný, drsný povrch** u jinak lesklých materiálů (PETG, Nylon),
- **slabší mezivrstvé spoje**, křehké díly,
- **nestabilní extruze**, podextrude na místech, kde to dřív bylo OK,
- u Nylonu/PC téměř jistota problémů bez sušení.

**PLA** je méně dramatické, ale i ono umí nasát vlhkost — hlavně ve vlhké dílně a po měsících na otevřeném stojanu. **PETG, ABS/ASA, TPU, Nylon, PC, PVA/BVOH** — sušte bez výmluv.

**Myšlenkový test:** pokud jste změnil 15 parametrů ve sliceru a problém skáče se spoolu na spool, nejdřív sušte, pak řešte flow.

## Řešení: kdy, jak, čím

### Kdy sušit

| Situace | Doporučení |
|---------|------------|
| Nový spool z vakuového balení, hned tisknete | Často OK; u Nylon/PC i nový raději prosuit |
| Spool otevřený dny–týdny ve vlhké dílně | Sušit |
| Slyšitelné praskání při tisku | Sušit ihned |
| Skladování mezi joby | Drybox / sáček + silikagel; periodické dosušení |
| Před důležitým mechanickým dílem | Sušit vždy u inženýrských materiálů |

**Pravidlo palce:** čím hygrskopičtější materiál a čím vlhčí vzduch (zima + topení vs léto bouřky), tím kratší interval.

### Jak sušit — teploty a časy (orientačně)

Vždy **ověřte etiketu výrobce**. Níže typické dílenské rozsahy:

| Materiál | Teplota (orientačně) | Čas (orientačně) |
|----------|----------------------|------------------|
| PLA | 40–50 °C | 4–6 h |
| PETG | 60–65 °C | 4–8 h |
| ABS / ASA | 65–70 °C | 4–8 h |
| TPU | 40–55 °C | 4–8 h (opatrně, měkké) |
| Nylon (PA) | 70–80 °C | 8–12+ h |
| PC | 70–80 °C | 8–12 h |
| PVA | 40–45 °C | dle stavu — citlivé |

**Přehřátí** zdeformuje spool (zejména levné plastové cívky) nebo změkčí filament na cívce. Raději déle a mírněji než hodinu na „maximum trouby“.

Během tisku u citlivých materiálů ideálně **sušte / držte suché** (drybox s vývodem do extruderu), ne jen „jednou předtím“.

### Čím sušit

**1) Dedikovaná sušička filamentu (doporučeno)**  
Sunlu, PrintDry PrintDry EOP, Creality, atd. — drží teplotu, často točí vzduch, některé umí aktivní sušení během tisku. Nejméně drama.

**2) Food dehydrator (upravený)**  
Oblíbené DIY: stáhne se teplota, dají se cívky. Funguje. Pozor na požární bezpečnost a na to, že už to nebude na jídlo.

**3) Trouba (nouzovka)**  
Jen pokud umí **stabilně nízkou** teplotu a věříte teploměru — domácí trouby lžou o desítky stupňů. Samostatný teploměr dovnitř. Nikdy nenechávejte bez dozoru. Spool nesmí ležet na rozpáleném plechu napřímo (deformace).

**4) „Teplý bed + karton“ hacky**  
Nouzovka pro malé množství; pomalé a nerovnoměrné. Lepší než nic u PLA, mizerné u Nylonu.

**5) Jen silikagel v sáčku**  
To je **skladování**, ne sušení mokrého spoolu. Gel udrží suchý filament suchý; mokrý nevyžene dostatečně rychle.

### Skladování po sušení

- Vakuové sáčky / zip sáčky + **indikační silikagel** (barevný),
- drybox s hygrometrem (cíl často &lt; 20–30 % RH uvnitř boxu, podle materiálu),
- neotevírat zbytečně celý sklad „na vzduch“.

Hygrometr za 100 Kč vám řekne víc než pocit „v dílně je sucho“.

## Co se stane, když nesušíte

Krátkodobě: ošklivější výtisky, víc stringů, víc waste.  
Střednědobě: **mechanicky slabší díly** — u držáků a funkčních částí to není kosmetika, je to riziko prasknutí.  
Dlouhodobě: frustrace, házení viny na tiskárnu a nákup zbytečných upgradů, zatímco problém sedí na polici ve formě cívky.

U Nylonu bez sušení často **vůbec nedostanete** použitelný díl. U PETG dostanete díl, který „vypadá OK z dálky“ a praskne na mostě.

## Rychlá diagnostika: vlhkost, nebo nastavení?

1. Vezměte **známý dobrý** spool (čerstvě otevřený PLA) — tiskne OK?  
2. Problematický materiál **prosuit** 6+ h a zopakovat stejný G-code.  
3. Když se to zlepší, byl problém voda. Když ne, teprve jděte do temperature tower / flow / retrakce.

Nestřídejte sušení a 20 změn profilu najednou — neučíte se nic.

## Praktický závěr

- **Hygrskopické materiály sušte jako součást procesu**, ne jako ezoterický rituál.  
- Investice do sušičky + hygrometru se vrátí na zmetcích.  
- Sáček a gel = skladování; teplo + čas = sušení.  
- Před důležitým jobem: suchý filament, čistá tryska, ověřený profil — v tomto pořadí.

**Checklist na dveře dílny:**

1. Otevřený spool &gt; týden? → zvaž dosušení.  
2. Praská u trysky? → suš *teď*.  
3. Nylon/PC/TPU/PETG na vlhko? → drybox.  
4. Teplota dle materiálu, ne „maximum na panelu“.  
5. Po sušení rovnou tisk nebo rovnou do sáčku s gelem.

Voda ve filamentu není názor. Je to fyzika — a dá se vyhnat.
