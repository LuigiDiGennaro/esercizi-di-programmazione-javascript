/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/
var a = 5;
var b = 6;
var operazione = 8;
var somma = a + b; //1
var sottrazione = a - b; //2
var moltiplicazione = a * b; //3
var divisione = a / b; //4
var modulo = (Math.round(a) % Math.round(b)); //5
var potenza = (Math.pow(a, b)); //6
var media = somma / 2 //7

switch (operazione) {
  case 1:
    console.log(`input: a = ${a}, b = ${b}, operazione = somma`);
    console.log(`output = ${somma}`);
    break;
  case 2:
    console.log(`input: a = ${a}, b = ${b}, operazione = sottrazione`);
    console.log(`output = ${sottrazione}`);
    break;
  case 3:
    console.log(`input: a = ${a}, b = ${b}, operazione = moltiplicazione`);
    console.log(`output = ${moltiplicazione}`);
    break;
  case 4:
    console.log(`input: a = ${a}, b = ${b}, operazione = divisione`);
    console.log(`output = ${divisione}`);
    break;
  case 5:
    console.log(`input: a = ${a}, b = ${b}, operazione = modulo`);
    console.log(`output = ${modulo}`);
    break;
  case 6:
    console.log(`input: a = ${a}, b = ${b}, operazione = potenza`);
    console.log(`output = ${potenza}`);
    break;
  case 7:
    console.log(`input: a = ${a}, b = ${b}, operazione = media`);
    console.log(`output = ${media}`);
    break;
  default:
    console.log('ERROR');

}
