/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByInitial(arr, letter) {
  const filteredNames = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0].toLowerCase() === letter.toLowerCase()) {
      filteredNames.push(arr[i]);
    }
  }
  return filteredNames;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filterByInitial(names, 'A'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
document.getElementById('filterButton').addEventListener('click', function() {
  const initial = document.getElementById('initialInput').value;
  const result = filterByInitial(names, initial);
  document.getElementById('result').innerText = `Nomi che iniziano con "${initial}": ${result.join(', ')}`;
});