function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')

    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique Novamente os Dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'homem'
            if (idade > 0 && idade <= 12){
                //criança
                img.setAttribute('src', 'imagens/bebe-h.png')
            } else {
                if (idade > 12 && idade <= 24){
                    //jovem
                    img.setAttribute('src', 'imagens/jovem-h.png')
                } else {
                    if (idade > 24 && idade < 60){
                        //adulto
                        img.setAttribute('src', 'imagens/adulto-h.png')
                    } else {
                        //idoso
                        img.setAttribute('src', 'imagens/idoso-h.png')
                    }
                }
            }
        } else {
            gênero = 'mulher'
            if (idade > 0 && idade <= 12){
                //criança
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else {
                if (idade > 12 && idade <= 24){
                    //jovem
                    img.setAttribute('src', 'imagens/jovem-m.png')
                } else {
                    if (idade > 24 && idade < 60){
                        //adulto
                        img.setAttribute('src', 'imagens/adulto-m.png')
                    } else {
                        //idoso
                        img.setAttribute('src', 'imagens/idoso-m.png')
                    }
                }
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos ' + gênero + ' com ' + idade + ' anos'
        res.appendChild (img)
    }
}