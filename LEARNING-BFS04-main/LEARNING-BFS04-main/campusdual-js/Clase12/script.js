//declaramos variables con valores
let string = "1";
let number = 1;
let boolean = true;
let nullable = null;
let undef;
let object = {};

function doubleEquals(a,b,aName,bName){
    if(a == b){
        console.log(aName+" == "+bName);
    }else{
        console.log(aName+" != "+bName);
    }
}

function tripleEquals(a,b,aName,bName){
    if(a === b){
        console.log(aName+" === "+bName);
    }else{
        console.log(aName+" !== "+bName);
    }
}

//operador ==
console.log("Operador ==");
doubleEquals(string,number,"string","number");
doubleEquals(number,boolean,"number","boolean");
doubleEquals(boolean,nullable,"boolean","nullable");
doubleEquals(nullable,undef,"nullable","undef");
doubleEquals(nullable,object,"nullable","object");
doubleEquals(undef,object,"undef","object");
doubleEquals(object,string,"object","string");

//operador ===
console.log("Operador ===");
tripleEquals(string,number,"string","number");
tripleEquals(number,boolean,"number","boolean");
tripleEquals(boolean,nullable,"boolean","nullable");
tripleEquals(nullable,undef,"nullable","undef");
tripleEquals(nullable,object,"nullable","object");
tripleEquals(undef,object,"undef","object");
tripleEquals(object,string,"object","string");


//operador +
console.log("Operador + cambia según tipado");
console.log("1+1="+number+number);
console.log("1+1="+number+string);