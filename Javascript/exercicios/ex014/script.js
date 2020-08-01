function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'assets/manha.png'
        document.body.style.background = 'rgb(247, 218, 93)'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'assets/tarde.png'
        document.body.style.background = 'rgb(253, 144, 18)'
    } else {
        img.src = 'assets/noite.png'
        document.body.style.background = 'rgb(43, 43, 43)'
    }
}