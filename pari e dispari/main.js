function getRandomNumber (min,max) {

    return Math.floor(Math.random() * ( max - min +1 )) + min ;
}

function checkPariDispari(numero); {

    let ritorno;

    if (numero % 2 == 0 ) {
        ritorno = "pari";
    }else {
        ritorno = "dispari";
    }
}


let PariDispari = prompt('scegli pari o dispari').toUpperCase();

if (PariDispari == "pari"  || PariDispari =="dispari" ){

    let numeroUtente = parseInt(prompt('inserisci un numero tra 1 e 5'));

    if (numeroUtente >= 1 && numeroUtente <=5  || && !isNaN(numeroUtente)) {

        let numeroComputer = getRandomNumber(1 , 5);
        let somma = numeroUtente + numeroComputer;

        let verificaSomma = checkPariDispari(somma);

        if (verificaSomma == pariDispari) {
            alert ('hai vinto');

        }else {
            alert ('ha vinto il computer');
        }

    }else {
        alert('hai inserito un valore non valido')
    }

} else {
    alert ('hai inserito un valore non valido')
}
