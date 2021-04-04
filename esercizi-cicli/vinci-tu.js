/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
const nTiri = 10;
var r_g1 = 0;
var r_g2 = 0;

for (var i = 0; i < nTiri; i++) {
  var g1 = Math.floor((Math.random() * (6 - 1) + 1));
  r_g1 += g1;
  //  console.log(g1);    controllo singolo tiro
}
//console.log(r_g1);

for (var i = 0; i < nTiri; i++) {
  var g2 = Math.floor((Math.random() * (6 - 1) + 1));
  r_g2 += g2;
  //  console.log(g2);    controllo singolo tiro
}
//console.log(r_g2);

if (r_g1>r_g2)
  console.log(`Il giocatore 1 vince! \nTotalizza: ${r_g1} punti con ${nTiri} lanci. \nIl giocatore 2 totalizza ${r_g2} punti.`);
if (r_g1<r_g2)
  console.log(`Il giocatore 1 vince! \nTotalizza: ${r_g2} punti con ${nTiri} lanci. \nIl giocatore 2 totalizza ${r_g1} punti.`);
if (r_g1===r_g2)
  console.log(`Parità`);
