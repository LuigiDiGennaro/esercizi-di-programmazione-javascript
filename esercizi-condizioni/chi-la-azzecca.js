/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/
var giocatore1 = 33;
var giocatore2 = 39;
var min = 1;
var max = 100;
var nRandom = Math.floor((Math.random() * (max - min) + min));
var diffG1 = Math.abs(giocatore1 - nRandom);
var diffG2 = Math.abs(giocatore2 - nRandom);

if (giocatore1 === nRandom) {
  console.log('Il giocatore 1 vince');
} else if (giocatore2 === nRandom) {
  console.log('Il giocatore 2 vince');
} else if (diffG1 > diffG2) {
  console.log(`Nessuno dei due ha azzeccato il numero casuale, ma il giocatore giocatore 2 si è avvicinato di più!`);
} else if (diffG1 < diffG2) {
  console.log(`Nessuno dei due ha azzeccato il numero casuale, ma il giocatore giocatore 1 si è avvicinato di più!`);
} else {
  (diffG1 = diffG2)
  console.log(`Parità`);
}
