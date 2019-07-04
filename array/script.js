

//var alunos = new Array ('Rodrigo', 'Ester','Ruth')

var alunos = ['Rodrigo', 'Ester', 'Ruth', 'Natalia']

//console.log(alunos [2]);

/*for( var i = 0; i < alunos.length; i++){
console.log(alunos[i])
}*/

for (var aluno of alunos) {
    //console.log(aluno) // (com o of dentro do for ele pega o valor dentro do array)
}

for (var i in alunos) {
    console.log(alunos[i])// (com o in dentro do for ele pega o index, ous eja o indece. )
}