---
title: "Layer shift: proč se tisk posune do strany a jak najít příčinu"
description: "Diagnostika posunutých vrstev krok za krokem: osa X/Y, kolize, volný pohyb, řemen, řemenice a profil. Bez univerzálních hodnot napnutí."
publishedAt: 2026-09-29
reviewedAt: 2026-10-04
level: "pokročilý"
technologies:
  - "FDM"
tags:
  - "layer-shift"
  - "mechanika"
  - "remen"
  - "kolize"
  - "troubleshooting"
evidence: "vyrobce"
sourceNote: "Diagnostický postup je ověřen proti aktuální dokumentaci Prusa Research k layer shiftingu, crash recovery a napnutí řemenů. Konkrétní napnutí, poloha řemenic a servisní postup se liší podle modelu tiskárny — vždy použijte dokumentaci výrobce svého stroje."
---

## Rychlá odpověď

Když se od určité výšky **celý zbytek modelu posune v X nebo Y**, tiskárna při pohybu ztratila správnou polohu. Není to typický problém flow ani Z-offsetu. Prusa Research mezi časté příčiny layer shiftu řadí nesprávné napnutí řemenu, povolenou řemenici, překážku v pohybu nebo jiný problém mechaniky os X/Y.

Nejrychlejší diagnostika:

1. určete, **která osa se posunula**,
2. prohlédněte místo těsně před shiftem a hledejte **kolizi trysky s výtiskem**,
3. ověřte, že se příslušná osa pohybuje **volně v celém rozsahu**,
4. podle dokumentace svého modelu zkontrolujte **řemen a řemenici motoru**,
5. pokud mechanika vypadá správně, vraťte se k ověřenému profilu a teprve potom řešte agresivní pohybová nastavení nebo elektroniku.

> **Důležité:** napnutí řemenu není univerzální číslo ani „pocit v prstu“. CoreXY, bedslinger i různé generace stejné značky mohou mít jiný servisní postup.

## Jak poznat skutečný layer shift

Typický layer shift má ostrou hranici: spodní část modelu je na jednom místě a od určité vrstvy pokračuje geometrie posunutá do strany. Někdy se posun opakuje vícekrát.

To je jiný symptom než:

- **ghosting/ringing**, kde jsou kolem hran jen dozvuky,
- **under-extrusion**, kde chybí materiál, ale souřadnice modelu neutíkají,
- **elephant foot**, který mění hlavně rozměr spodních vrstev,
- špatná první vrstva, která začíná už na podložce.

Pokud je problém pouze ve spodní části modelu, začněte raději článkem [První vrstva nedrží](/rady-a-tipy/prvni-vrstva-nedrzi/) nebo [Elephant foot](/rady-a-tipy/elephant-foot/).

## 1. Určete osu posunu

Podívejte se na model shora a určete směr, ve kterém se horní část vůči spodní posunula. U klasické kartézské konstrukce tím často rychle zúžíte hledání na X nebo Y. U CoreXY jsou pohyby os výsledkem spolupráce obou řemenů a motorů, takže servisní diagnostika může být odlišná.

Prusa ve své dokumentaci doporučuje nejprve rozpoznat osu, ve které k posunu došlo. Smyslem není hned rozebrat celou tiskárnu, ale spojit symptom s konkrétní pohybovou soustavou.

## 2. Hledejte kolizi těsně před shiftem

Tryska může zachytit o zvednutý roh, zkroucený support nebo nahromaděný materiál. Motor se pokusí pokračovat, ale mechanika se fyzicky neposune tak, jak firmware očekává.

Prohlédněte model a okolí trysky. Hledejte zejména:

- zvednuté rohy a [warping](/clanky/warping-u-abs-priciny-a-checklist/),
- support, který se odlomil nebo naklonil,
- větší nános materiálu na trysce,
- část výtisku, o kterou tryska při travelu opakovaně drhla,
- zbytky filamentu nebo jinou překážku v dráze osy.

Pokud se díl nejprve zkroutil a až potom přišel shift, opravujte nejdřív příčinu kolize. Samotné dotažení řemenu zkroucený model nevyřeší.

## 3. Ověřte volný pohyb osy

Prusa u problémů s posunem i opakovanou detekcí kolize doporučuje zkontrolovat, zda v dráze X/Y není překážka a zda vedení nemá místa s neobvykle vysokým odporem.

Po bezpečném ukončení tisku a podle postupu výrobce zkontrolujte:

- zda v řemenu nebo kolem řemenice není kus filamentu,
- zda kabelový svazek nenaráží do rámu,
- zda vedení nebo lineární kolejnice nemají poškození či hrubé místo,
- zda se nic mechanicky nezachytává jen v určité části dráhy.

Mazání nedělejte univerzálním prostředkem naslepo. Typ maziva i to, které části se mají mazat, závisí na konstrukci tiskárny.

## 4. Řemen: volný není jediný problém

Příliš volný řemen může přispět ke ztrátě polohy. **Příliš napnutý řemen ale také není správně.** Prusa například u Original Prusa XL výslovně uvádí, že nadměrné napnutí může vést k nepravidelnému pohybu a layer shiftu.

Proto:

1. najděte servisní návod přesně pro svůj model,
2. použijte výrobcem doporučený způsob kontroly nebo belt tuner, pokud jej daný model podporuje,
3. neaplikujte hodnotu nebo postup z jiné konstrukce jen proto, že také používá GT2 řemen.

U CoreXY navíc může špatný zásah změnit geometrii gantry. Prusa u CORE One a XL výslovně upozorňuje, aby při nastavování napnutí nedošlo ke ztrátě zarovnání.

## 5. Zkontrolujte řemenici na motoru

Povolená motorová řemenice je zrádná: při pomalém pohybu může vše působit normálně, ale při prudší změně směru se hřídel a řemenice vůči sobě pohnou.

U konstrukcí s červíky na řemenici výrobci často vyžadují konkrétní orientaci vůči ploché části hřídele motoru. Neutahujte ji proto podle obecného obrázku z internetu — ověřte polohu pro svůj model.

Prusa u aktuálních strojů v diagnostice opakovaných kolizí výslovně uvádí kontrolu X/Y motorů a řemenic a upozorňuje, že jejich poloha se mezi modely liší.

## 6. Kdy řešit profil, rychlost a akceleraci

Jestliže se tiskárna mechanicky pohybuje volně, řemen i řemenice odpovídají servisnímu návodu a problém se objevil až po změně profilu, vraťte se k poslednímu známému funkčnímu profilu.

Vyšší rychlost není jediný parametr. Zátěž pohonu ovlivňuje také akcelerace, hmotnost pohyblivé části, geometrie stroje a firmware. Proto je lepší porovnat problematický tisk se standardním profilem výrobce než náhodně měnit několik limitů současně.

**Proud motoru nebo firmware neměňte jako první pokus.** Pokud standardní profil a mechanická kontrola problém nevyřeší, je na místě modelově specifická servisní diagnostika.

## Rozhodovací strom

| Co vidíte | První kontrola | Co následuje |
|---|---|---|
| Jednorázový ostrý posun po zvednutí rohu | kolize trysky | řešit warping / stabilitu modelu |
| Shift vždy v jedné ose | pohyb dané osy | řemen, řemenice, překážka |
| Osa má v části dráhy větší odpor | vedení a kabeláž | odstranit překážku / servis dle výrobce |
| Shift po změně rychlého profilu | návrat ke standardnímu profilu | až potom ladit pohybové limity |
| Opakované crash hlášky i bez viditelné kolize | dráha X/Y a pohon | modelově specifická diagnostika výrobce |

## Co nedělat

- Nenapínejte řemen „co nejvíc“.
- Nekopírujte číslo napnutí z jiné tiskárny.
- Neměňte současně řemen, akceleraci, proud motoru a firmware — ztratíte informaci, co problém skutečně způsobilo.
- Neřešte layer shift kalibrací flow, pokud je celý zbytek geometrie fyzicky posunutý.
- Nepokračujte v tisku, pokud osa drhne nebo je viditelně poškozené vedení.

## Udělejte teď

1. Vyfoťte model zepředu a shora a určete směr posunu.
2. Prohlédněte několik vrstev pod místem shiftu: není tam warping, support nebo stopa po nárazu trysky?
3. Bezpečně zkontrolujte celý rozsah pohybu problematické osy.
4. Otevřete servisní dokumentaci přesně pro svůj model a ověřte řemen i motorovou řemenici.
5. Pokud mechanika projde kontrolou, zopakujte menší tisk na standardním profilu výrobce.

## Zdroje výrobce

- Prusa Research Knowledge Base — **Layer shifting**: diagnostika osy, volného pohybu, řemenů a řemenic.
- Prusa Research Knowledge Base — **Crash recovery / repeated crash**: překážky v X/Y, vedení, napnutí řemenů a motorové řemenice.
- Prusa Research Knowledge Base — **Adjusting belt tension (XL)**: modelově specifické napnutí a upozornění na důsledky příliš volného i příliš napnutého řemenu.

<aside class="takeaway">
  <p class="takeaway-label">Praktický závěr</p>
  <p>Layer shift berte jako problém polohy. Nejprve určete osu a vylučte kolizi, potom volný pohyb, řemen a řemenici. Hodnoty napnutí ani servisní zásahy nepřenášejte mezi různými modely tiskáren.</p>
</aside>
