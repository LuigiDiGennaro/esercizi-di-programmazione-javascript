/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
const input = [73, 4, 83, 76, 5, 58, 38, 64, 69, 81];
const verifica = input.every(function controllo(e, i, a) {
  return a.indexOf(e) === i && e<=90 === true
});
if (verifica === false || input.length < 10 && verifica !== false) {
  console.log("Inserisci dieci numeri compresi tra 1 e 90 senza ripetizioni");
} else {
  const arr = [];
  for (var i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * (90 - 1)) + 1
  }
  console.log(input);

  const filtered = arr.filter(function togli_duplicati(e, i, a) {
    return a.indexOf(e) !== i
  })
  //console.log(filtered);
  const filtered2 = arr.filter(function mostra_duplicati(e, i, a) {
    return a.indexOf(e) === i
  })
  //console.log(filtered2);
  const controllo = filtered2.every(function controllo(e, i, a) {
    return a.indexOf(e) === i
  });

  if (filtered.length === 0) {
    var schedaRandom = arr;
  } else {
    while (filtered2.length < 10 && controllo !== false) {
      var x = Math.ceil(Math.random() * (90 - 1)) + 1
      filtered2.push(x);
    }
    schedaRandom = filtered2
  }
  console.log(schedaRandom);
  var unione = input.concat(schedaRandom);
  //console.log(unione);
  const risultato = unione.filter(function duplicati(e, i, a) {
    return a.indexOf(e) !== i
  })
  //console.log(risultato);
  switch (risultato.length) {
    case 0 || 1:
      console.log("sorry");
      break;
    case 2:
      console.log("AMBO");
      break;
    case 3:
      console.log("TERNO");
      break;
    case 4:
      console.log("QUATERNA");
      break;
    case 10:
      console.log("TOMBOLA");
      break;
    default:
      console.log("CINQUINA");
  }
}
