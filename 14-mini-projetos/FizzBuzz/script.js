// divisível por 3 = 'Fiz'
// divisível por 5 = 'Buzz'
// divisível por 3 e 5 = 'FizzBuzz'
// não divisível nem por 3 nem por 5 = entrada
// não é um número

const resultado = fizzBuzz(15)
console.log(resultado)

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number') 
        return 'Não é um número!'
    if (entrada % 3 == 0 && entrada % 5 == 0)
        return 'FizzBuzz'
    if (entrada % 3 == 0)
        return 'Fizz'
    if (entrada % 5 == 0)
        return'Buzz'
    return entrada    
}