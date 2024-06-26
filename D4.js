/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("--------------------------------- ESERCIZIO 1 ---------------------------------");

function area(l1, l2) {
  let resultA = l1 * l2;
  return resultA;
}
console.log("l'area del rettangolo è: ", area(3, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("--------------------------------- ESERCIZIO 2 ---------------------------------");

function crazySum(n1, n2) {
  let resultB = n1 + n2;
  if (n1 === n2) {
    console.log("La somma dei due numeri moltiplicata moltiplicata per 3 è: ", resultB * 3);
  } else {
    console.log("la somma dei due numeri è:", n1 + n2);
  }
  return resultB;
}
crazySum(3, 3);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("--------------------------------- ESERCIZIO 3 ---------------------------------");

function crazyDiff(n1) {
  let resultC = n1 - 19;
  if (resultC < 0) {
    return "la differenza assoluta è: " + Math.abs(resultC);
  } else {
    return "la differenza assoluta moltiplicata per 3 è: " + Math.abs(resultC) * 3;
  }
}
console.log(crazyDiff(30));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log("--------------------------------- ESERCIZIO 4 ---------------------------------");

function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("--------------------------------- ESERCIZIO 5 ---------------------------------");

function epify(stringa) {
  if (stringa.startsWith("EPICODE ")) {
    return stringa;
  } else {
    return "EPICODE " + stringa;
  }
}
console.log(epify("ajeje"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("--------------------------------- ESERCIZIO 6 ---------------------------------");

function check3and7(n1) {
  if (n1 % 3 === 0 || n1 % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("--------------------------------- ESERCIZIO 7 ---------------------------------");

function reverseString(stringa) {
  let stringaSplit = stringa.split("");
  let arrayReverse = stringaSplit.reverse();
  let stringaReverse = arrayReverse.join("");
  return stringaReverse;
}
console.log(reverseString("EPICODEEEE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log("--------------------------------- ESERCIZIO 9 ---------------------------------");

function cutString(stringa) {
  let stringa1 = stringa.slice(1, -1);
  return stringa1;
}
console.log(cutString("epicode"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
