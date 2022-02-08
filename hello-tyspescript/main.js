var minhaVar = 'minha variavel';
function minhaFunçao(x, y) {
    return x + y;
}
// es 6 ou es 2015
var a = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
//ou
//arrow function
//se vc tiver corpo vc deixa as chaves
numeros.map(function (valor) {
    valor * 2;
});
//ou
numeros.map(function (valor) { return valor * 2; });
