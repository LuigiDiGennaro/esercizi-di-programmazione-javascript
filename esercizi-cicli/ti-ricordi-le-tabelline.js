/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/

var output = '';
var max = 10;
var min = 0;
var input = 7;

for (var i = min; i <= max; i++) {
  output +=  ' ' + (i*input);
}
console.log(`Input: ${input}`);
console.log(`Output: ${output}`);
