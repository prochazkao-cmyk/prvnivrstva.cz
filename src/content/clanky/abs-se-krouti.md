---
title: "ABS se kroutí od rohů. Není to špatný filament"
description: "Warping u ABS je teplotní smrštění, ne záhada šarže. Co udrží větší díl na desce a kdy je férovější sáhnout po jiném materiálu."
publishedAt: 2026-09-12
hero: true
featured: true
tags:
  - ABS
  - warping
  - komora
---

Roh, který se zvedne ve třetí vrstvě, není morálka filamentu. ABS (a podobně ASA) se při chladnutí smršťuje víc než PLA. Napětí se sbíhá v rozích. Deska prohraje, díl se zvedne, tryska do něj pak naráží. Když se to děje pořád stejně, nehledejte „špatnou cívku“. Hledejte teplotní spád.

## Co se vlastně děje

Spodní vrstvy už chladnou a zkracují se. Horní jsou pořád horké a delší. Rozdíl tahá díl od desky. Čím větší půdorys a čím ostřejší roh, tím hůř. Průvan z okna nebo z klimatizace udělá z malého rozdílu velký. Otevřený rám v místnosti, která přes noc spadne o pět stupňů, je pro velké ABS špatné místo.

Uzavřená komora neslouží k tomu, aby „bylo teplo“. Slouží k tomu, aby byl spád mezi tryskou a už vytištěným dílem menší. Pasivní bedna, do které jen zavřete tiskárnu, často stačí na menší ASA. Aktivně vyhřívaná komora je jiná liga a u stolních strojů ji nemá každý, kdo má dvířka.

## Čísla, od kterých má smysl začít

Nejsou to předpis. Jsou to rozsahy, ve kterých většina ABS na běžné mosazné trysce přestane dělat náhodu a začne dělat opakovatelný výsledek.

| | Rozsah | Poznámka |
| --- | --- | --- |
| Tryska | 240–260 °C | Začněte na 250 °C. Když vrstvy nedrží u sebe, přidejte. Když se to táhne a smrdí víc než obvykle, uberete. |
| Deska | 100–110 °C | Pod 90 °C velké ABS na PEI většinou nedrží, ať lepidlo říká cokoli. |
| Komora | cca 40–50 °C | U větších dílů. Malá krabička projde i níž. |
| První vrstva | 15–25 mm/s | Pomalá, s vypnutým ofukem dílu. |
| Ofuk | 0–30 % | První centimetr výšky klidně nula. Později jen tolik, aby převisy nespadly. |

Brim (lem) 8–12 mm rozloží tah. Raft použijte, až když brim nestačí: spodní plocha bude horší a tisk delší. Lepidlo na desku (tyčinka, Magigoo a příbuzní) zvýší přilnavost, ale nenahradí komoru. Když se roh zvedne o milimetr, lepidlo už jen drží katastrofu o pár minut déle.

## Otevřený rám

Na otevřené tiskárně má smysl malý díl, tlustší stěny, brim a žádný průvan. Velká plochá deska, krabice na elektroniku přes celou podložku nebo dlouhý úchyt podél osy Y — to je sázka, ne postup. Když takový díl potřebujete a komoru nemáte, PETG nebo ASA v menším objemu bývá upřímnější volba než čtvrtý pokus se stejným G-kódem.

ASA se kroutí podobně jako ABS, jen obvykle míň a nezežloutne na slunci tak rychle. Pořád chce teplo. Není to „ABS pro lidi bez komory“.

## Než obviníte desku

1. Otřete podložku saponátem, ne jen isopropanolem. IPA nerozpustí cukr z prstů.
2. Zkontrolujte, že první vrstva je slitá, ne kulatá nitka položená vedle sebe. Postup je v textu [První vrstva nedrží](/rady-a-tipy/prvni-vrstva-nedrzi/).
3. Vypněte ofuk dílu aspoň na první vrstvy.
4. Zavřete okno. Seriózně.
5. Když tisknete z klipperu nebo z profilu, který „někdo sdílel na 300 mm/s“, snižte rychlost obvodů. Rychlý ABS v chladné komoře je jen dražší způsob, jak zvednout roh.

<aside class="takeaway">
  <p class="takeaway-label">Praktický závěr</p>
  <p>Bez stabilní komory netiskněte z ABS velké díly. Buď komoru vyřešte (aspoň pasivní kryt a žádný průvan), nebo změňte materiál. Lepidlo a brim jsou pojistka, ne strategie.</p>
</aside>
