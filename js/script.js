/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


const timer = 3;

// 1. creo un array con 5 numeri casuali li stampa in pagina e nasconde i numeri dopo tot secondi (30sec)
const numeriCasuali = [];

for(let i = 0; i < 5; i++) {
	const num = generaNumeroRandom(1, 100);
	numeriCasuali.push(num);
}

const numeriCasualiElm = document.getElementById("numeri-casuali");
numeriCasualiElm.innerHTML = numeriCasuali;

setTimeout(function(){
	numeriCasualiElm.innerHTML = '';
}, (timer - 1) * 1000 );


































function generaNumeroRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}