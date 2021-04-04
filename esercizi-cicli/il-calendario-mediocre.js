/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia
    (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            Lun 8
            Mar 9
            Mer 10
            Gio 11
            Ven 12
            Sab 13
            Dom 14
            Lun 15
            Mar 16
            Mer 17
            Gio 18
            Ven 19
            Sab 20
            Dom 21
            Lun 22
            Mar 23
            Mer 24
            Gio 25
            Ven 26
            Sab 27
            Dom 28
            Lun 29
            Mar 30
            Mer 31


  Variante:
  Piuttosto che avere in input il numero dei giorni
  del mese passa direttamente il mese e calcola tu
  da quanti giorni è formato.

  http://www.imparareaprogrammare.it
*/

var giorni = ["dom", "lun", "mar", "mer", "gio", "ven", "sab"];
var mesi = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"]

var data = new Date();
var im = 1; // da 0 a 11
var ia = 2024; //modificabile con anno YYYY

var a = data.setFullYear(ia, im, 1);
var gs = data.getDay();
var j; // variabile contatore

/*
ia = input anno;
im = input mese;
gs = giorno della settimana
*/

switch (im) {
  case 1:
    if (ia % 400 == 0 || (ia % 4 == 0 && !(ia % 100 == 0))) {
      j = 29; //calcolo anno bisestile
    } else {
      j = 28;
    }
    break;
  case 3:
    j = 30;
    break;
  case 5:
    j = 30;
    break;
  case 8:
    j = 30;
    break;
  case 10:
    j = 30;
    break;
  default:
    j = 31;
}

for (var i = 0; i < j; i++) {
  console.log(`${giorni[(i+gs)%7]} ${1+i} ${mesi[im]} ${ia}`);
}
