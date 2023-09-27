var agora = new Date()
var hr = agora.getHours()
console.log('Agora são exatamente ' + hr + ' horas')
if (hr >= 6 && hr < 12){
    console.log('Bom Dia')
} else {
    if (hr >= 12 && hr < 18){
        console.log('Boa Tarde')
    } else {
        if (hr >= 18 && hr < 24){
            console.log('Boa Noite')
        } else {
            console.log('Boa Madrugada')
        }
    }
}