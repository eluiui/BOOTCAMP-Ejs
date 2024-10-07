let array = [1,2,3,4,5,6,7,8,9];
console.log(array);
//reduce
//  P1: funcion de 4 parámetros
//      p1:acumulador: valor que se va a pasar al siguiente elemento
//      p2:current: valor actual del elemento
//      p3:posicion actual del elemento
//      p4:array sobre el que va a trabajar
//  P2: valor inicial para el acumulador
// si se especifica usa ese valor inicial y va uno a uno
// sino se especifica usa el primer elemento y empieza la ejecucion en el segundo  

console.log("Usar reduce para sumar todos los elementos")
//console.log(array.reduce(funcion,0));
console.log(array.reduce((acumulador,valor,index,arr) => {
    console.log({index,valor,acumulador,arr});
    return acumulador+valor;
},0));
console.log(array.reduce((acumulador,valor,index,arr) => {
    console.log({index,valor,acumulador,arr});
    return acumulador+valor;
},0));

console.log(array.reduce((acumulador,valor) => acumulador+valor));

console.log("Usar reduce para calcular el máximo")
console.log(array.reduce((maximo,valor) => {
    if(maximo > valor){
        return maximo;
    }else{
        return valor;
    }
}));
console.log(array.reduce((maximo,valor) => maximo>valor?maximo:valor));

console.log("Usar reduce para concatenar valores con ,")
console.log(array.reduce((cadena,valor) => cadena+","+valor));