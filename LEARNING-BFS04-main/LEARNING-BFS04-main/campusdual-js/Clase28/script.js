let array = [{fruta:"platano",stock:4},
            {fruta:"manzana",stock:7},
            {fruta:"pera",stock:0},
            {fruta:"naranja",stock:10}]


if(array.some(x => x.stock===0)){
    console.log("Existen frutas sin stock");
}

array.forEach(x => console.log(x.fruta+":"+x.stock));


console.log("Aumentamos el stock a 10 para las frutas sin stock")
array.map(x => {
    if(x.stock==0){
        x.stock=10;
    }
})

array.forEach(x => console.log(x.fruta+":"+x.stock));

if(array.every(x => x.stock>0)){
    console.log("Todas las frutas tienen stock");
}

console.log("Ordenamos las frutas por stock ascendente");
array.sort((a,b) => a.stock - b.stock).forEach(x => console.log(x.fruta+":"+x.stock));
console.log("Ordenamos las frutas por stock descendente");
array.sort((a,b) => b.stock - a.stock).forEach(x => console.log(x.fruta+":"+x.stock));

console.log("Se puede usar sin parámetros si el contenido del array es comparable");
let array2 = [1,3,6,4,2,3,1,7,8,2,3];
console.log(array2.sort().join());