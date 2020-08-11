const anime = {
    titulo: 'Haikyuu',
    ano: 2014,
    genero: 'Esporte',
    personagem: 'Hinata',
    temporadas: 4
}
exibirPropriedades(anime)

function exibirPropriedades(obj) {
    for (const key in obj) {
        const element = obj[key];
        if (typeof element == 'string') {
            console.log(key + ': ' + element)
        }
    }
}