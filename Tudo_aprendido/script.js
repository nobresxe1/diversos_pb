

var nomes = ["Pedro", "José", "Joáo"];
var notasA = [7.0, 3.5, 5.0];
var notasB = [6.0, 5.5, 8.0];

function media(n01, n02) {
    return (n01 + n02) / 2
}

function passou(media) {
    if (media >= 6)
        return " Aprovado "
    else {
        return " Reprovado "
    }
}
for (var index in nomes) {

    var notas01 = notasA[index];
    var notas02 = notasB[index];

    var m = media(notas01, notas02)

    console.log(nomes[index]
        + " - " +
        notas01
        + " - " +
        notas02
        + " sua média foi " +
        m
        +
        passou(m))

};