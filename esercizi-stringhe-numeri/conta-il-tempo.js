/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
const ora = 3600     // ora in secondi
const minuto = 60    // minuto in secondi
var tempo = 12560
var ore = Math.trunc(tempo/ora)
var minuti = Math.trunc(tempo%ora/minuto)
var secondi = (tempo-(ore*ora+minuti*minuto))
console.log(`${ore} ore, ${minuti} minuti e ${secondi} secondi`);
