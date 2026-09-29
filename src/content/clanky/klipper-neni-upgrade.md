---
title: "Klipper není upgrade rychlosti. Je to jiný způsob, jak tiskárnu řídit"
description: "Input shaping a pressure advance jsou důvod, proč lidé přecházejí. Ne proto, že to má video. A na Pruse ani na Bambu to není oficiální cesta."
publishedAt: 2026-07-19
featured: true
tags:
  - Klipper
  - Marlin
  - firmware
---

Klipper rozděluje práci jinak než Marlin. Tenký firmware na desce tiskárny hlavně krokuje motory. Kinematika, plánování pohybů a makra běží na hostitelském počítači — Raspberry Pi, starý mini počítač, nebo deska, kterou výrobce namontoval dovnitř a schoval. Zvenku pořád mačkáte „tisk“. Uvnitř už to není jeden program v jednom čipu.

## Co z toho v dílně je

Dvě funkce, kvůli kterým má přechod smysl:

- **Input shaping** potlačí rezonance rámu. Kruhy přestanou být ovál a nápis na boku přestane mít duchy, aniž byste museli jet krokem pro výstavu.
- **Pressure advance** (kompenzace tlaku v trysce) srovná rohy a začátky čar. Filament v hotendu je pružina. Když se směr změní, tlak dojede pozdě. PA to předběhne.

Obojí dnes umí i novější Marlin. Rozdíl je v tom, jak pohodlně se to ladí a jestli váš konkrétní stroj má profil, který to opravdu používá, nebo jen položku v menu. Klipper navíc žije z `printer.cfg`: jedno místo, kde je popsaná geometrie, sonda, PID i makra. Když je soubor váš, stroj je váš. Když je soubor zamčený v obrazu výrobce, máte Klipper jen podle jména.

## Kde to není váš projekt

Stock Prusa (MK4S, CORE One) je podporovaný produkt s vlastním firmware. Klipper na ní je koníček vedle koníčku, ne „oficiální zrychlení“. Přijdete o věc, kvůli které jste Prusu možná brali: někdo jiný řeší aktualizace a náhradní postup, když se tiskárna po flashi neprobudí.

Bambu je vespod příbuzné Klipperu, ale `printer.cfg` vám nikdo nedá. Není to pozvánka, abyste desku odemkli. Je to upozornění, ať od P1S nečekáte stejnou volnost jako od Voronu nebo od starší Ender bedny, kterou jste si přestavěli sami. Chcete-li ladit shaping ručně, kupte stroj, který s tím počítá. Ne stroj, který počítá s tím, že budete tisknout.

## Kdy přecházet a kdy ne

Přecházejte, až vás Marlin na vaší desce opravdu brzdí: rezonance, které profil neumí, PA, které neudržíte, makra, která chcete psát sami, a deska, ke které existuje rozumný Klipper port. Počítejte s hostem, se sondou, s večerem nad konfigurací a s tím, že první výtisk po přechodu bude horší než poslední výtisk před ním.

Nepřecházejte, protože to má někdo na videu u tiskárny za sto tisíc. Nepřecházejte na stroji, který zrovna spolehlivě tiskne a který v práci používá ještě někdo jiný. Druhý firmware je druhá tiskárna. Dokud nemáte čas na obě, nechte běžet tu, co krmí šuplík s díly.

<aside class="takeaway">
  <p class="takeaway-label">Praktický závěr</p>
  <p>Klipper si pořiďte, až potřebujete shaping, pressure advance a vlastní konfiguraci — a až je deska vaše. Na podporované Pruse nebo na Bambu to není další položka v menu. Je to jiné hobby.</p>
</aside>
