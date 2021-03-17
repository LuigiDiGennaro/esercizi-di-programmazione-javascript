/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
const cifra = '9';
if (cifra.length > 1 && cifra.length <= 4) {
  console.log(`input = ${cifra}`);
  console.log(`output = ${cifra.length} cifre`);

} else {
  console.log(`input = ${cifra}`)
  console.log(`output = ${cifra.length} cifra`)

}
