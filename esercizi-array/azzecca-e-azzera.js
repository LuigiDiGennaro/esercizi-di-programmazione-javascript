/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/
const a = [];
const b = [];

for (var i = 0; i < 50; i++) {
  a.push(i + 1)
  b.push(i + 1)
}
var array = a.concat(b);

Array.prototype.shuffle = function() {
  var i = this.length,
    j, temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
  return this;
}
array = array.shuffle();

console.log(array);

var input = window.prompt('inserisci un numero');
array.forEach((item, i) => {
  if (item % input == 0)
    array[i] = 0
  return array;
});

function tuttiZero(e, i, a) {
  return e === 0
}

console.log(array);

while (array.every(tuttiZero) !== true) {
  input = window.prompt('inserisci un altro numero');
  array.forEach((item, i) => {
    if (item % input == 0)
      array[i] = 0
    return array
  });
  console.log(array);
}
if (array.every(tuttiZero) === true) {
  document.write("il gioco è finito")
}