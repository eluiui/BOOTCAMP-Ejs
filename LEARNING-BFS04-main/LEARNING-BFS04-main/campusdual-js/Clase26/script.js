let array = [1,2,3,4,5,6,7,8,9];
console.log(array);


function getFiltro(numero){
    return function(valor){
        return valor % numero == 0;
    };
}
console.log("Números pares");
console.log(array.filter(getFiltro(2)));
console.log(array.filter(function (valor){
    return valor % 2 == 0;
}));
console.log(array.filter((valor) => {
    return valor % 2 == 0;
}));
console.log(array.filter(x => x%2==0));

console.log("Dame el primero que su valor sea mayor que 4");
console.log(array.find(x => x>4));
console.log("Dame el primero que su valor sea 14");
console.log(array.find(x => x==14));

console.log("Números impares");
console.log(array.filter(x => x%2!=0))
console.log("Dentro de los números pares dame el primero que su valor sea 3");
console.log(array.filter(x => x%2!=0).find(x => x==3));
console.log("Dentro de los números pares dame la posicion del que su valor sea 3");
console.log(array.filter(x => x%2!=0).findIndex(x => x==3));

console.log("Al array de números le agregamos dentro como elemento otro array con los impares");
array.push(array.filter(x => x%2!=0));
console.log(array);
console.log("Aplanamos el array");
array=array.flat(1);
console.log(array);

console.log("Por cada elemento del array realizamos la operación");
console.log(array.map(x => x-1));

console.log("Calculamos el total");
let total=0;
array.forEach(x => total=total+x);
console.log("el total es "+total);