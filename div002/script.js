var nota01 = 7.0
var nota02 = 7.0
var nota03 = 9.0


var media = (nota01 + nota02 + nota03) / 3;

/*if (media >= 7){
    console.log(media)
    console.log("você passou!")
}
else {
    console.log("você não passou sua nota foi " + media)
}*/
var conceito = ''

if (media >= 8) {
    conceito = 'ótimo'

}
else if (media >= 6.5) {
    conceito = 'bom'

}
else {
    conceito = 'regular'

}

console.log(media.toFixed(2))//serve para limitar o numero de casas decimais.

console.log(conceito)

switch (conceito) {
    case 'ótimo':
        console.log('você e um ótimo aluno!')
        break

    case 'bom':
        console.log('você pode melhorar!')
        break

    case 'regular':
        console.log('estude mais!')
        break
    default: 'por que você existe?'
}
