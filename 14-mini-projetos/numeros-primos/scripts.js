function exibirNumerosPrimos(limite) {
    for (i = 2; i <= limite; i++) {
        if (verificaSeEhNumeroPrimo(i)) {
            console.log(i)
        }
    }
}

function verificaSeEhNumeroPrimo(numero) {
    for (divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor == 0) {
            return false
        }
    }
    return true
}

exibirNumerosPrimos(15)