/*
    Dichiaro in input i km da percorrere e l'età del passeggero,
    converto questi due valori da stringa a int,
    dichiaro le varibili: prezzo del biglietto, sconto 20, sconto 40 e
    il prezzo del ticket per Km e il prezzo finale del biglietto, dopodichè
    creo l'if dove poter gestire i 3 casi (over 65 con sconto del 40%,
    minorenne con sconto del 20% e maggiorenni fino a 64 anni senza sconto)
*/




let kmRun = prompt('Inserisci quanti km vuoi percorrere');
let age = prompt('Inserisci la tua età di nascita');

kmRun = parseInt(kmRun);
age = parseInt(age);

let htmlOuput = document.getElementById('output');
let ticketPriceKm = 0.21 * kmRun;
let ticketPrice;
let discount20 = ((ticketPriceKm * 20) / 100);
let discount40 = ((ticketPriceKm * 40) / 100);


if (age >= 65) {
    ticketPrice = discount40;
    htmlOuput.innerHTML = `Il prezzo da pagare è ${ticketPrice} euro`;
} else if (age < 18) {
    ticketPrice = discount20;
    htmlOuput.innerHTML = `Il prezzo da pagare è ${ticketPrice} euro`;
} else {
    ticketPrice = ticketPriceKm;
    htmlOuput.innerHTML = `Il prezzo da pagare è ${ticketPrice} euro`;
}


