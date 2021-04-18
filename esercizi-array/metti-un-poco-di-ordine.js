/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/
const array = [3, 7, -2, 5, -8, 1, 2, 5, 6, -4]
const array_2 = [3, 7, -2, 5, -8, 1, 2, 5, 6, -4]
console.log(array);
// crescente
for (let i = 0; i < array.length; i++)
    for (let j = 0; j < array.length - i; j++)
        if (array[j] > array[j + 1]) {
            const temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
        }

console.log(array);

// decrescente
for (let i = 0; i < array_2.length; i++)
    for (let j = 0; j < array_2.length - i; j++)
        if (array_2[j] < array_2[j + 1]) {
            const temp = array_2[j]
            array_2[j] = array_2[j + 1]
            array_2[j + 1] = temp
        }

console.log(array_2);
