var minhaVar='minha variavel';
var numeros=[1,2,3];
numeros.map(function(valor){
    return valor*2;
});
//ou
numeros.map (valor=>{
    valor*2    
});
//ou
numeros.map (valor=>valor*2);
numeros.map(function(valor){return valor *2;});

class Matematica {
    soma ( x , y){
        return x + y;
    }
}