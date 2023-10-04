let num = [9, 7, 4, 2, 1]
num.push(5)
console.log('Nosso vetor é esse ' + num)
console.log('Nosso vetor tem ' + num.length + ' posições')
console.log('Nosso elemento adicionado é esse ' + num[5])
num.sort()
console.log(num)
let pos = num.indexOf(7)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log('O valor está na posição ' + pos)
}