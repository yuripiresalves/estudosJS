function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'assets/foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'assets/foto-jovem-m.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'assets/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'assets/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'assets/foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'assets/foto-jovem-f.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'assets/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'assets/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    fano.value = ''
}