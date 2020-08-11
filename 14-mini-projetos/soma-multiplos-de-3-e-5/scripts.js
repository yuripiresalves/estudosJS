function somar(limite) {
    let soma = 0

    for (i = 0; i <= limite; i++) {
        if (i % 3 == 0) {
            soma += i
        } 
        if (i % 5 == 0) {
            soma += i
        }
    }
    console.log(soma)
}

somar(15)