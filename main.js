// Udělej losování klasické Sportky
// Máš osudí čísel od 1 do 49
// Náhodně z tohoto osudí vyber 7 čísel
// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:

//let osudi = [];
//let vybraneCisla = [];
//let vyherneCisla = document.querySelector('#vyherni-cisla');

/*for (let i = 1; i <= 49; i = i + 1) {
  osudi.push(i);
}*/

function losuj() {
  let osudi = [];
  let vybraneCisla = [];
  let vyherneCisla = document.querySelector('#vyherni-cisla');

  // vypíše nám v console čísla od 1 po 48
  for (let i = 1; i <= 49; i = i + 1) {
    osudi.push(i);
  };

  // z osudi vyberiem 7 náhodných čísel
  for (let i = 0; i < 7; i++) {
    let vyhernyIndex = Math.floor(Math.random() * osudi.length);
    let vyherneCislo = osudi[vyhernyIndex];

    vybraneCisla.push(vyherneCislo);
    osudi.splice(vyhernyIndex, 1);
  };

  //výpis do HTML
  vyherneCisla.innerHTML = '';

  for (let a = 0; a < vybraneCisla.length; a++) {
    vyherneCisla.innerHTML += '<span class="cislo">' + vybraneCisla[a] + '</span>';
  };
}

//+= skrátený zápis --> i = i + 1 --> i += 1 alebo vyherneCisla.innerHTML += '<span class="cislo">' + vybraneCisla[a] + '</span>'; --> vyherneCisla.innerHTML = vyherneCisla.innerHTML + '<span class="cislo">' + vybraneCisla[a] + '</span>';