// Udělej losování klasické Sportky
// Máš osudí čísel od 1 do 48
// Náhodně z tohoto osudí vyber 7 čísel
// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:

let osudi = [];

for (let i = 1; i <= 48; i = i + 1) {
  osudi.push(i);
}

// vypíše nám v console čísla od 1 po 48
// z osudi vyberiem 7 náhodných čísel

let vybraneCisla = [];
for (let i = 0; i < 7; i++) {
  let vyhernyIndex = Math.floor(Math.random() * osudi.length);
  let vyherneCislo = osudi[vyhernyIndex];

  vybraneCisla.push(vyherneCislo);
  osudi.splice(vyhernyIndex, 1);
}