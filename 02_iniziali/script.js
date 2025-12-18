/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getInitials(nameArray) {
    const initialsArray = [];
    for (let i = 0; i < nameArray.length; i++) {
        const name = nameArray[i];
        const initial = name.charAt(0);
        initialsArray.push(initial);
    }
    return initialsArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
document.addEventListener('DOMContentLoaded', function() {
    const resultDiv = document.getElementById('result');
    const initials = getInitials(names);
    resultDiv.textContent = initials.join(', ');
});