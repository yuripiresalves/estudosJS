function exibirAsteriscos(linhas) {
    let padrao = ''
    for (i = 1; i <= linhas; i++) {
        console.log(padrao+='*')
    }
}

exibirAsteriscos(5)