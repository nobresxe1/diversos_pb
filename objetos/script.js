//objetos com propriedade
var aluno = {
    name: "Rodrigo",
    nota:[8.5, 5]
}
console.log(aluno['name']);

var pessoa = new Object();

// objetos com Métodos

var aluno = {
    name: "Rodrigo",
    nota:[8.5, 5],

    media : function () {
        return (this.nota[0] + this.nota[1]) / 2;
    }
}

console.log(aluno.media())