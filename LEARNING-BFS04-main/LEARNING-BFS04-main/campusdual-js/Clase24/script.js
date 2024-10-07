let array = [1,2,3,4,"5",6,7,8,9];
console.log(array);

if(! array.includes(5)){
    console.log("Número 5 no se encuentra en el array");
}

console.log("Número 5 no encontrado en posicion "+array.indexOf(5));
console.log("String 5 encontrado en posicion "+array.indexOf("5"));

array.splice(4,1,9);
array.unshift(9);
console.log(array);

console.log("Número 9 encontrado en posicion "+array.indexOf(9));

console.log("Número 9 encontrado en posicion "+array.indexOf(9,1));

console.log("Número 9 encontrado en posicion "+array.lastIndexOf(9));

