


function média(n1, n2, n3) {
    var nota01 = n1;
    var nota02 = n2;
    var nota03 = n3;
    var média = (nota01 + nota02 + nota03) / 3;
    //console.log(média.toFixed(2))

    return média;
}

var resultado01 = média(7, 9, 10);
var resultado02 = média(5, 6, 2);

console.log(resultado01.toFixed(01) + " e " + resultado02.toFixed(01))






// funções anônimas
var media = function (m1, m2) {

    return (m1 + m2) / 2;

}

console.log(media)