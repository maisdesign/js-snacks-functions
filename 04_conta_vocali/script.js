/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

const result = countVowels(word);
console.log(result);


// Invoca la funzione qui e stampa il risultato in console
document.getElementById('countButton').addEventListener('click', function() {
  const inputWord = document.getElementById('inputText').value;
  const vowelCount = countVowels(inputWord);
  document.getElementById('result').innerText = `Numero di vocali in "${inputWord}": ${vowelCount}`;
});    


//Risultato atteso se si passa 'javascript': 3 (a, a, i)