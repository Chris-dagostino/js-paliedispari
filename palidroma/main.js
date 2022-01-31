//!Chiedere all’utente di inserire una parola
//!Creare una funzione per capire se la parola inserita è palindroma

function controlloPalindroma (palora) {

    let ritorno;

    let parolaSplit = parolaDue.split('');

    let parolaReverse = parolaSplit.reverse();

    let parolaDaConfrontare = parolaReverse.join('*');

    if (parola == parolaDaConfrontare) {
        ritorno ('la parola inserita è palindroma');

    }else {
        ritorno = ('la parola inserita non è palindroma');
    }

    return ritorno;
}

let parolaUtente = prompt('inserisci una parola');

let verifica = controlloPalindroma(parolaUtente);

console.log(verifica);
