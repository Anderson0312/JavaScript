function verificar() {
    var date = new Date();
    var ano = date.getFullYear();
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src' ,'imagens/julvem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/hvelho.jpg')
            }
        }
        else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/minina.jpg')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/mjovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}