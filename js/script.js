/*
    Dichiaro in input i km da percorrere e l'età del passeggero,
    converto questi due valori da stringa a int,
    dichiaro le varibili: prezzo del biglietto, sconto 20, sconto 40 e
    il prezzo del ticket per Km e il prezzo finale del biglietto, dopodichè
    creo l'if dove poter gestire i 3 casi (over 65 con sconto del 40%,
    minorenne con sconto del 20% e maggiorenni fino a 64 anni senza sconto)
*/




let distance = prompt('Inserisci quanti km vuoi percorrere');
let age = prompt('Inserisci la tua età di nascita');

distance = parseInt(distance);
age = parseInt(age);

let htmlOuput = document.getElementById('output');
let ticketPrice = 0.21 * distance;



if (age >= 65) {
    ticketPrice = (ticketPrice - (ticketPrice * 0.2));
    htmlOuput.innerHTML = `Il prezzo da pagare è ${ticketPrice.toFixed(2)} euro`;
} else if (age < 18) {
    ticketPrice = (ticketPrice - (ticketPrice * 0.4));
    htmlOuput.innerHTML = `Il prezzo da pagare è ${ticketPrice.toFixed(2)} euro`;
} else {
    ticketPrice = ticketPrice;
    htmlOuput.innerHTML = `Il prezzo da pagare è ${ticketPrice.toFixed(2)} euro`;
}


