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
                //Criança
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos  ${genero} com ${idade} anos.`
    }

}