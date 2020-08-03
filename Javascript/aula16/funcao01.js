function parimpar(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

const res = parimpar(10)
console.log(`O número é ${res}.`)