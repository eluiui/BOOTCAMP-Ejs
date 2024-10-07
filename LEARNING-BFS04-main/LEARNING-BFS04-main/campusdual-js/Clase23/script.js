let array = [20,1,2,3,4,5];

console.log(array);
//P1:inicio desde 0
//P2:numero de elementos a borrar
//P3..PN:elementos a insertar

console.log("añadimos los elementos 7 , 8 y 9 al final");
array.splice(array.length,0,7,8,9);
console.log(array);

console.log("añadimos el elemento 6 en su sitio");
array.splice(6,0,6);
console.log(array);

console.log("substituimos el elemento 20 del inicio por un 1");
array.splice(-99,1,1);
console.log(array);