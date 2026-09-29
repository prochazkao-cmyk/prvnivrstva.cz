---
title: Z-offset za pět minut, bez papírku jako náboženství
description: "Papír je hrubý start. Pravda je tvar první čáry. Uložte offset k podložce, ne „k tiskárně obecně“."
publishedAt: 2026-08-30
updatedAt: 2026-09-29
reviewedAt: 2026-09-29
level: "začátečník"
technologies:
  - "FDM"
tags:
  - Z-offset
  - první vrstva
  - kalibrace
  - troubleshooting
evidence: "redakce"
sourceNote: "Redakční kalibrační postup. Konkrétní automatiku a názvy funkcí vždy ověřte podle modelu tiskárny a verze firmwaru."
---

Každá podložka může mít trochu jinou tloušťku a povrch. Texturovaná, hladká, jednostranná, oboustranná — stejný mechanický stroj nemusí při každé kombinaci chtít úplně stejnou korekci první vrstvy.

## Jak to vidět, ne jen slyšet šustění

Spusťte jednoduchý čtverec první vrstvy nebo dlouhou linku přes větší část plochy. Dívejte se na stopu, ne jen na číslo v menu.

- **Moc vysoko:** kulatá nitka, mezi tahy je mezera, prstem ji snadno odloupnete.
- **Moc nízko:** čára je extrémně rozmáčknutá, tryska hrne materiál do stran a povrch je hrubý.
- **Dobře:** čára je sploštělá, sousední tahy se spojují a povrch je souvislý bez výrazných hřebínků.

Papírek je u ručního nastavování užitečný jako počáteční reference, ale finální kontrolu dává až skutečná extruze první vrstvy.

## Automatika není důvod přestat se dívat

Moderní tiskárny mohou používat loadcell, indukční sondu nebo jiný systém měření. Nechte automatiku udělat to, k čemu je určená. Pokud ale první vrstva vypadá špatně, ověřte správný postup pro konkrétní stroj místo slepého kopírování hodnot z cizího profilu.

Číslo typu „−0,05 mm funguje všem“ neexistuje. Jiný stroj, jiná tryska, jiná podložka a jiná kalibrace mohou znamenat jiný výsledek.

## Kdy zkontrolovat offset znovu

- po výměně podložky za jiný typ,
- po zásahu do hotendu nebo trysky,
- po větší mechanické údržbě,
- pokud první vrstva náhle vypadá jinak než předtím,
- po změně firmwaru, pokud se změnil kalibrační postup.

<aside class="takeaway">
  <p class="takeaway-label">Praktický závěr</p>
  <p>Kalibrujte podle skutečné první čáry. Papír nebo automatická sonda jsou prostředek, ne výsledek. Hodnotu z cizí tiskárny nekopírujte jako univerzální recept.</p>
</aside>
