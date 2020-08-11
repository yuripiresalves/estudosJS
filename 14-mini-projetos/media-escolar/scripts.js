const array = [70, 70, 80]

console.log(`A média do aluno é ${mediaDoAluno(array)}`)

function mediaDoAluno(notas) {
    const media = calcularMedia(notas)

    if (media < 60) return 'F'
    if (media < 70) return 'D'
    if (media < 80) return 'C'
    if (media < 90) return 'B'
    return 'A'
}

function calcularMedia(array) {
    let soma = 0

    for (item of array) {
        soma += item
    }

    return soma / array.length
}

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A