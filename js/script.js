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

setTimeout(function(){
	// 3. chiedo all'utente per 5 volte di inserire un numero
	const numeriUtente = [];

	for(let i = 0; i < 5; i++) {
		const num = parseInt(prompt("Inserisci un numero"));
		numeriUtente.push(num);
	}
	
	// 4. confronto dei due array e verifico se ce il numero e stampo il risultato
	const numeriValidi = [];
	for(let i = 0; i < numeriUtente.length; i++) {
		
		if(numeriCasuali.includes(numeriUtente[i]) == true) {
			numeriValidi.push(numeriUtente[i]);
		}
	}

	if(numeriValidi.length == 0) {
		alert("Non hai memoria!! ritenta");
	} else {
		alert(`Hai indovinato ${numeriValidi.length}, i numeri indovinati sono: ${numeriValidi}`);
	}

}, timer * 1000);







function generaNumeroRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}