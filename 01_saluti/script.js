/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

//const userName = 'Mario';


// Dichiara la funzione qui.
function greetings(name) {
    return 'Ciao ' + name;
}



// Invoca la funzione qui e stampa il risultato in console
//console.log(greetings(userName));


//Risultato atteso se si passa 'Mario': // ciao Mario

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('greetButton').addEventListener('click', function() {
        const userName = document.getElementById('nameInput').value;
        const greetingMessage = greetings(userName);
        document.getElementById('greetingMessage').textContent = greetingMessage;
        console.log(greetings(userName));
    });
});