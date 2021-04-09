/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/
let input = 6;
let array = new Array(input);
for (var i = 0; i < input; i++) {
  array[i] = Math.floor(Math.random() * 50);
}
console.log(`Input: ${array}`);
let somma = 0;
for (var i = 0; i < array.length; i++) {
  somma += array[i]
}
const vm = array.filter(function valoriMinori(n) {
  return (n < somma / array.length)
})
const vmag = array.filter(function valoriMaggiori(nn) {
  return (somma / array.length < nn)
})
console.log(`Output: media = ${somma/array.length}, valori minori sono ${vm.length}: ${vm}`);
console.log(`\nVariante:\ni valori maggiori sono ${vmag.length}: ${vmag}`)