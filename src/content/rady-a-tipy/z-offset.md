---
title: Z-offset za pět minut, bez papírku jako náboženství
description: "Papír je hrubý start. Pravda je tvar první čáry. Uložte offset k podložce, ne „k tiskárně obecně“."
publishedAt: 2026-08-30
tags:
  - Z-offset
  - první vrstva
  - kalibrace
---

Každá podložka je jinak tlustá. Texturovaná, hladká, ta s leptem, ta, co jste včera otočili. Offset uložený „jednou provždy“ platí pro tu desku, na které jste ho dělali. Druhá deska v sadě není ta samá deska.

## Jak to vidět, ne jen slyšet šustění

Spusťte jednoobrysový čtverec nebo aspoň sukni přes celou šířku. Dívejte se na čáru, ne na číslo v menu.

- Moc vysoko: kulatá nitka, mezi tahy je mezera, prstem ji odloupnete, aniž byste se snažili.
- Moc nízko: čára je průhledná, tryska hrne materiál do stran, při další vrstvě to chrastí.
- Dobře: čára je sploštělá, sousední tahy srostlé, povrch matný a souvislý. Na texturovaném PEI neuvidíte zrcadlo. Uvidíte, že to drží.

U strojů s loadcellem (třeba Prusa MK4S) nechte automatiku udělat hrubou práci a doladit jen tehdy, když čára lže. Ruční offset navíc, „protože na fóru psali −0,05“, rozbije právě tu věc, kterou sonda měla vyřešit.

## Co uložit

Když tiskárna umí více profilů podložek, uložte offset ke každé. Když ne, napište si hodnotu na kus pásky na rám desky. Vyměnit plát a zapomenout offset je nejčastější „porucha po údržbě“.

Po výměně trysky za jiný průměr offset neplatí. Po sundání hotendu taky ne. Po aktualizaci firmwaru si ověřte, že se hodnota nevyresetovala do nuly — jednou za čas se to stane a první tisk to řekne dřív než release notes.

<aside class="takeaway">
  <p class="takeaway-label">Praktický závěr</p>
  <p>Kalibrujte očima na první čáře a uložte offset k konkrétní podložce. Papírek je začátek. Číslo z cizího profilu je cizí tiskárna.</p>
</aside>
