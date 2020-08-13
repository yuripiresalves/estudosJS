function Endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco('dos bobos', 'maringá', 12345678)
const endereco2 = new Endereco('dos bobos', 'maringá', 12345678)

// compara se os valores sao iguais
function saoIguais(endereco1, endereco2) {
    return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep
}
console.log(saoIguais(endereco1, endereco2))


// compara se estao no mesmo espaço da memoria
function enderecoMemoriaIgual(endereco1, endereco2) {
    return endereco1 === endereco2
}
console.log(enderecoMemoriaIgual(endereco1, endereco2))