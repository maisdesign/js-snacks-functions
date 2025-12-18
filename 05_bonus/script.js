/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

//const name = 'Mario';


// Dichiara la funzione qui.
function greetTimeOfDay(name, hour) {
  let greeting;

  if (hour < 13) {
    greeting = 'Buongiorno';
  } else if (hour < 18) {
    greeting = 'Buon pomeriggio';
  } else {
    greeting = 'Buonasera';
  }

  return `${greeting} ${name}.`;
}

/* // Esempio di utilizzo:
const currentHour = new Date().getHours();
const result = greetTimeOfDay(name, currentHour);
console.log(result);
*/

// Invoca la funzione qui e stampa il risultato in console

document.addEventListener('DOMContentLoaded', function() {
  this.getElementById('greetButton').addEventListener('click', function() {
    const nameInput = document.getElementById('inputName').value;
    const currentHour = new Date().getHours();
    const result = greetTimeOfDay(nameInput, currentHour);
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
    console.log(result);
  });
});

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.