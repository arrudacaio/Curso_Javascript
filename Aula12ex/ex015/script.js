function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtAno")
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert("ERRO")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menino1.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'menino2.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'menino3.png')
            } else {
                img.setAttribute('src', 'menino4.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menina1.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'menina2.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'menina3.png')
            } else {
                img.setAttribute('src', 'menina4.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos  ${genero} com ${idade} anos.`
        res.appendChild(img) //adiciona um elemento para aparecer na tela
    }

}