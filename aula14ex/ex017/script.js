function contar(){
    var inicio = document.getElementById('inum')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipas')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível Contar'
        //window.alert('[ERRO] Dados Incompletos')
    } else {
        res.innerHTML = 'Contando: </br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //contagem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += c + '👉'
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += c + '👉'
            }
        }
        res.innerHTML += '🏁'
    }
}