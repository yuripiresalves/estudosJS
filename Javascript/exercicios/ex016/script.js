function contar() {
    let iStart = document.querySelector('input#start')
    let iEnd = document.querySelector('input#end')
    let iStep = document.querySelector('input#step')
    let res = document.querySelector('div#res')
    let button = document.querySelector('input#button')

    if (iStart.value.length == 0 || iEnd.value.length == 0 || iStep.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br/>'
        var start = Number(iStart.value)
        var end = Number(iEnd.value)
        var step = Number(iStep.value)

        if (step <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            step = 1
        }

        if (start < end) {
            // Contagem crescente
            for (let i = start; i <= end; i += step) {
                if (i < 10) {
                    res.innerHTML += ` 0${i} 👉`

                } else {
                    res.innerHTML += ` ${i} 👉`
                }
            }
        } else {
            // Contagem regressiva
            for (let i = start; i >= end; i -= step) {
                if (i < 10) {
                    res.innerHTML += ` 0${i} 👉`

                } else {
                    res.innerHTML += ` ${i} 👉`
                }
            }
        }
        res.innerHTML += `🏁`
    }
}

button.addEventListener('click', contar)