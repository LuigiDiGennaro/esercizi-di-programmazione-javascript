/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2


  http://www.imparareaprogrammare.it
*/
var a = 3,
  b = -1,
  c = 4,
  d = -2;
var minore;
var maggiore;

// MAGGIORE
if (a > b)
  maggiore = a;
else
  maggiore = b;
if (c > maggiore)
  maggiore = c;
if (d > maggiore)
  maggiore = d;

// minore
if (a < b)
  minore = a;
else
  minore = b;
if (c < minore)
  minore = c;
if (d < minore)
  minore = d;
console.log(`maggiore = ${maggiore}, minore = ${minore}`);
