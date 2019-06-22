// && e
// || ou , compara um OU outro
// negativo


/*var a = true;
var b = false;

var c = a && b;

console.log(c);*/


var idade = 35

var maiorque20 = idade <= 20;
var menorque40 = idade >= 40;

var gratuidade = maiorque20 || menorque40;

console.log('tem direito a gratuidade', gratuidade)

console.log(maiorque20 && menorque40)
