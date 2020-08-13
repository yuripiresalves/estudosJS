const endereco = {
    rua: 'dos bobos',
    cidade: 'maringá',
    cep: 12345678
}

function exibirEndereco(endereco) {
    for (key in endereco) {
        console.log(`${key}: ${endereco[key]}`)
    }
}

exibirEndereco(endereco)