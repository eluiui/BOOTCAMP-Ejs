
//function con una funcion como salida
function getFiltro(numero){
    return function(valor){
        return valor % numero == 0;
    };
}

console.log("5 es par?");
console.log(getFiltro(2)(5));

//funcion con otra funcion como entrada
function filtrador(array, filtro) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        filtro(array[i]) ? resultado.push(array[i]) : null;
    }
    return resultado;
}

let numeros = [1,2,3,4,5,6,7,8,9];
console.log("números divisibles entre 2");
console.log(filtrador(numeros,getFiltro(2)));
console.log("números divisibles entre 3");
console.log(filtrador(numeros,getFiltro(3)));
console.log("números divisibles entre 4");
console.log(filtrador(numeros,getFiltro(4)));

//lambdas
console.log("números mayores que 4");
console.log(filtrador(numeros,(valor) => valor > 4));
console.log("números mayores que 4 o que sean pares");
console.log(filtrador(numeros,(valor) => {
    if(valor > 4){
        return true;
    }else if(valor % 2 == 0){
        return true;
    }else{
        return false;
    }
}));