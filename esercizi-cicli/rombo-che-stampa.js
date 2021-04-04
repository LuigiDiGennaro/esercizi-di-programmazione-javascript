/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.

  http://www.imparareaprogrammare.it
*/
const n = 5;
if (!(n % 2)) {
  console.log("inserisci un numero dispari");
} else {
  let sv = " "; //spazi vuoti
  let output = "";
  const sr = "X"; //simbolo rombo
  const n_2 = Math.floor(n / 2);

  for (var i = 0; i <= n_2; i++) {
    output = sv.repeat(n_2 - i) + sr.repeat(1 + (i * 2)) + sv.repeat(n_2 - i);
    console.log(output);
  }
  for (var i = 0; i < n_2; i++) {
    output = sv.repeat(1 + i) + sr.repeat(n_2 * 2 - 1 - (i * 2)) + sv.repeat(1 + i);
    console.log(output);
  }
}
