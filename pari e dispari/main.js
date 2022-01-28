//!L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 


let scelta = prompt ('scegli pari o dispari');


let NumeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));


console.log(NumeroUtente);
console.log(scelta);



//!Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 

function randomNumber ( min , max ) {
    return Math.floor(Math.random() * ( max - min ) + min );
}

let numberPc = parseInt(randomNumber ( 1 , 5 ));


console.log(numberPc);



//!Sommiamo i due numeri 

let somma = NumeroUtente + numberPc;

console.log(somma);


//!Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 

function pariDispari (somma) {
    
    if (somma % 2 == 0 ) {
        alert ('il numero è pari')
    }else {
        alert ('il numero è dispari')
    }
}



//!Dichiariamo chi ha vinto.
