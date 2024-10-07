let array = [1,2,3,4,5];

console.log("tamaño de array: "+array.length);

console.log(array.join());

//cuando se elminna se devuelve el elemento cuando se añade se devuelve el tamaño
console.log("añadimos elemento 8 al final");

console.log(array.push(8));

console.log(array);

console.log("eliminamos el último elemento");

console.log(array.pop());

console.log(array);

console.log("eliminamos el primer elemento");

console.log(array.shift());

console.log(array);

console.log("añadimos elemento 6 al principio");

console.log(array.unshift(6));

console.log(array);

console.log("cambiamos el sentido del array");

array.reverse();

console.log(array);