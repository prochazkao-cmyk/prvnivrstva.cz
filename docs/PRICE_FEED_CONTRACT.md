# První Vrstva — datový kontrakt srovnávače

Cíl: lokální CZ/SK ceny, které lze auditovat. Žádné ručně udržované „aktuální“ ceny.

## Preferované zdroje

1. XML feed přímo od obchodu.
2. API obchodu.
3. Affiliate síť / affiliate feed se souhlasem obchodníka.
4. Ruční import pouze jako dočasný interní zdroj; veřejná cena musí mít jasný čas kontroly.

Agresivní scraping není výchozí řešení.

## Povinná pole nabídky

- stabilní `productId`,
- přesný název produktu a varianta,
- obchod + země,
- měna,
- cena produktu,
- cena dopravy, pokud ji lze určit,
- skladová dostupnost,
- cílová URL,
- případná affiliate URL,
- čas stažení,
- typ zdroje dat.

## Normalizace produktů

Stejný model může mít více názvů. Varianty se nesmí omylem sloučit:

- kit vs. assembled,
- bez AMS vs. Combo,
- velikost cívky 750 g / 1 kg / 2 kg,
- různé materiály nebo barvy, pokud mění cenu,
- různé revize produktu.

Každá normalizační vazba má být verzovaná a dohledatelná.

## Řazení

Výchozí pravidla musí být explicitní. U filamentu typicky:

- cena za kg produktu,
- nebo celková cena včetně dopravy pro zadané množství.

U tiskárny:

- celková cena produktu + známá doprava.

Affiliate provize není vstup do řazení.

## Čerstvost dat

Každá nabídka musí mít `fetchedAt`. Pokud zdroj neproběhne v definovaném intervalu, nabídka se označí jako zastaralá nebo se skryje. Nikdy nezobrazovat starou cenu bez upozornění.

## Brána pro veřejné spuštění

Srovnávač zůstává `noindex`, dokud:

- nejsou nejméně 3 stabilní obchody,
- není vyřešená normalizace produktů,
- není kontrola stale dat,
- nejsou označené affiliate odkazy,
- není veřejná metodika.

## Co měřit

- počet prokliků do obchodů,
- konverze/provize dostupné z affiliate sítě,
- podíl nabídek s čerstvými daty,
- chyby normalizace,
- výpadky jednotlivých feedů.
