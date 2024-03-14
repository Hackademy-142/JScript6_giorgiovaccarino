// ESERCIZIO 1
// Dato un array di oggetti crea una funzione che ritorni un array e aggiunga a ogni oggetto la proprietà ‘greeting’ con il seguente valore:
// Awee regà, mi chiamo < firstName > e lavoro con < language here >, ma effettivamente è meglio javascript


let list = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

function greet(arr) {
    arr.forEach(element => {
        element.greeting = `Awee regà, mi chiamo ${element.firstName} e lavoro con ${element.language}, ma effettivamente è meglio javascript`;
    });
    console.log(arr)
}; //forEach lavora con side effect, modifica esternamente l'argomento che passo nella funzione.

(greet(list));

// ESERCIZIO 2
// Dato un array di oggetti, crea una funzione che ritorni

// true se c’è almeno una persona che ha gli occhi verdi;
// false se nessuno ha gli occhi verdi


let list2 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Green' }
];

function greenEyes(arr) {
    console.log(arr.some((person) => person.eyes === 'Green'));
};

greenEyes(list2);

// ESERCIZIO 3
// Dato un array di oggetti, creare una funzione che permetta di mostrare un messaggio di alert:

// se logged=true: mostrare il messaggio “L’utente è stato registrato.”
// se logged=false: mostrare il messaggio “L’utente non è registrato.”


    let list3 = [
        { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
        { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
        { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
    ];


// Utilizzare alert() → metodo che fa visualizzare una finestra di pop-up per mostrare un messaggio di avviso all’utente
//   alert('Messaggio di avviso per l'utente');

function registered(arr){
    arr.forEach((person)=>{
        if(person.logged){
            alert(`L’utente ${person.firstName} è stato registrato.`);
        } else if (!person.logged) {
            alert(`L’utente ${person.firstName} non è registrato.`);
        };
    });
};

registered(list3);