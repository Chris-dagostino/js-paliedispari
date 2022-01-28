//!Chiedere all’utente di inserire una parola
//!Creare una funzione per capire se la parola inserita è palindroma

function parolaUtente (palindroma) {

    let ritorno;

    let parolaIns = prompt (palindroma) ;

    if (parola == parolaInversa) {
        alert ('la parola inserita non è palindroma');

    }else {
        ritorno = parolaIns;
    }

    return ritorno;
}

const parolaPalindroma = parolaUtente ('inserisci una parola palindroma'));
console.log(parolaPalindroma);

let parola = parolaIns ;
let carattere;
let parolaInversa = '';

for (let i = parola.length - 1 ; i >= 0 ; i--) {
    carattere = parola [i];
    parolaInversa += carattere;

    console.log(carattere);
    
}

console.log(parolaInversa);
