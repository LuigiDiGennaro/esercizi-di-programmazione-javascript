/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/
var input = 6;
if (input < 1) {
  console.log("inserisci un numero positivo e diverso da 0");

} else {
  var array = new Array(input);
  Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
    return this;
  };
  for (var i = 0; i < input; i++) {
    array[i] = Math.ceil(Math.random() * 10)
  }
  console.log(array);
  for (var i = 0; i < input - 1; i++) {
    array.move(i + 1, 0);
  }
  console.log(array);
}
