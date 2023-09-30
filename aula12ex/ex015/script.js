function carregar(){
    
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hr = data.getHours()

    msg.innerHTML = 'Agora são exatamente ' + hr + ' horas'

    if (hr >= 6 && hr < 12){
        //bom dia
        imagem.src = 'imagens/manha.png'
        document.body.style.background = '#c9af3f'
    } else {
        if (hr >= 12 && hr < 18){
            //boa tarde
            imagem.src = 'imagens/tarde.png'
            document.body.style.background = '#ad672e'
        } else {
            if (hr >= 18 && hr < 24){
                //boa noite
                imagem.src = 'imagens/noite.png'
                document.body.style.background = '#3b334b'
            } else {
                //boa madrugada
                imagem.src = 'imagens/madrugada.png'
                document.body.style.background = '#413f3f'
            }
        }
    }
}


