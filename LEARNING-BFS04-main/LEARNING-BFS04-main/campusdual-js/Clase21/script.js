let strNumber = "4242.42424242";
let string = "Hola mundo!"

if(isNaN(string)){
    console.log("string es Not a Number");
}

if(!isNaN(strNumber)){
    console.log("strNumber es un número");
}

let number = parseInt(strNumber);
let fNumber = parseFloat(strNumber);

if(!isNaN(number)){
    console.log("number es un número");
}

if(!isNaN(fNumber)){
    console.log("fNumber es un número");
}

console.log("toPrecision puede acortar el tamaño de  fNumber")
console.log("2: "+fNumber.toPrecision(2));
console.log("4: "+fNumber.toPrecision(4));
console.log("6: "+fNumber.toPrecision(6));

console.log("toFixed puede acortar fNumber a los decimales que se desee")
console.log("2: "+fNumber.toFixed(2));
console.log("4: "+fNumber.toFixed(4));
console.log("6: "+fNumber.toFixed(6));