/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/
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
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a = arr1.shuffle();
const b = arr2.shuffle();

var c = [];
for (var i = 0; i < a.length; i++) {
  c[i] = a[i] + b[i]
}
console.log(`operazione = "addizione"\nInput: a = [${a}],\nInput: b = [${b}],\nOutput: c = [${c}]\n`);
for (var i = 0; i < a.length; i++) {
  c[i] = a[i] - b[i]
}
console.log(`operazione = "sottrazione"\nInput: a = [${a}],\nInput: b = [${b}],\nOutput: c = [${c}]\n`);
for (var i = 0; i < a.length; i++) {
  c[i] = a[i] * b[i]
}
console.log(`operazione = "moltiplicazione"\nInput: a = [${a}],\nInput: b = [${b}],\nOutput: c = [${c}]\n`);
for (var i = 0; i < a.length; i++) {
  c[i] = a[i] / b[i]
}
console.log(`operazione = "divisione"\nInput: a = [${a}],\nInput: b = [${b}],\nOutput: c = [${c}]\n`);
