---
title: "Layer shift — když se celý tisk v půlce posune do strany"
description: "Posunuté vrstvy nejsou problém flow. Hledejte ztrátu kroku, kolizi, řemen, kladku nebo příliš agresivní pohyb v konkrétní ose."
publishedAt: 2026-09-29
reviewedAt: 2026-09-29
level: "pokročilý"
technologies:
  - "FDM"
tags:
  - "layer-shift"
  - "mechanika"
  - "remen"
  - "kolize"
  - "troubleshooting"
evidence: "redakce"
sourceNote: "Obecný diagnostický postup pro FDM. Napnutí řemenů, proud motorů a mechanické zásahy mají modelově specifické limity — řiďte se dokumentací výrobce."
---

## Rychlá odpověď

Když se model od určité vrstvy **celý posune v X nebo Y**, tiskárna někde ztratila informaci o skutečné poloze. Neřešte flow ani Z-offset. Hledejte mechaniku a pohyb v ose, ve které se posun objevil.

Začněte tímto pořadím:

1. zjistěte, jestli se posun opakuje ve stejné ose,
2. hledejte kolizi trysky s výtiskem,
3. zkontrolujte volný pohyb osy bez zadrhávání,
4. ověřte řemen, kladku a upevnění pohonu,
5. až potom řešte rychlosti, akcelerace nebo elektroniku.

## 1. Která osa utekla

Podívejte se na model shora a určete směr posunu. Pokud se celý zbytek tisku posunul doleva/doprava, řešte osu X; dopředu/dozadu osu Y — podle konstrukce konkrétní tiskárny.

To zkrátí diagnostiku na polovinu. Není důvod rozebírat oba řemeny, když symptom jasně ukazuje jednu osu.

## 2. Kolize s výtiskem

Tryska může zachytit o zvednutý roh, zkroucený support nebo přebytečný materiál. Motor se pokusí pokračovat, ale mechanika se fyzicky neposune o očekávanou vzdálenost.

Hledejte:

- zvednuté rohy a warping,
- support, který se odlomil nebo naklonil,
- velkou kapku materiálu na trysce,
- příliš hrubý povrch, o který tryska při travelu drhne.

Pokud se díl nejdřív zkroutil a až potom přišel shift, opravujte příčinu kolize, ne řemen naslepo.

## 3. Volný pohyb

Po vypnutí a bezpečném vychladnutí stroje zkontrolujte pohyb způsobem, který dovoluje výrobce. Osa by neměla mít náhlá místa s výrazně vyšším odporem.

Příčinou může být nečistota, poškozené ložisko/vedení, kabel, který se zachytává, nebo špatně sestavená mechanika.

## 4. Řemen a kladka

Příliš volný řemen může přeskočit; příliš napnutý zbytečně zatěžuje ložiska a motor. Správné napnutí není univerzální pocit v prstu — použijte postup nebo nástroj výrobce konkrétní tiskárny.

Zkontrolujte také, že kladka na hřídeli motoru nebo jiné upevnění pohonu není uvolněné. U některých konstrukcí stačí malá vůle a problém se objeví až při prudší změně směru.

## 5. Rychlost, akcelerace a profil

Pokud mechanika chodí lehce a shift se objevil po použití agresivnějšího profilu, vraťte se k ověřenému nastavení. Vyšší rychlost sama o sobě není jediný parametr — důležitá je akcelerace, hmotnost pohyblivé části a konkrétní firmware.

Neměňte proud motoru nebo firmware jen proto, že jste viděli jeden layer shift. To je pozdní diagnostický krok, ne první.

## Udělej teď

1. Urči osu posunu.
2. Prohlédni model pod místem shiftu: není tam warping nebo kolize?
3. Zkontroluj volný pohyb dané osy.
4. Podle dokumentace ověř řemen a upevnění pohonu.
5. Vrať profil na známé bezpečné nastavení a vytiskni menší test.

<aside class="takeaway">
  <p class="takeaway-label">Praktický závěr</p>
  <p>Layer shift je hlavně informace o poloze a mechanice. Nejrychlejší cesta je určit osu, vyloučit kolizi a až potom kontrolovat pohon. Flow, teplota filamentu a Z-offset samotný posunutou geometrii neopraví.</p>
</aside>
