function criarFaixaPreco(tooltip, min, max) {
    return {
        tooltip,
        min,
        max
    }
}

const faixa = [
    criarFaixaPreco('até R$700', 0, 700),
    criarFaixaPreco('de R$700 até R$1000', 700, 1000),
    criarFaixaPreco('de R$1000 ou mais', 1000, 99999)
]

console.log(faixa)