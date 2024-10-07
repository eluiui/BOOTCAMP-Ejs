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
console.log("Operador ==");
doubleEquals(string,number,"string","number");
doubleEquals(number,boolean,"number","boolean");
doubleEquals(boolean,nullable,"boolean","nullable");
doubleEquals(nullable,undef,"nullable","undef");
doubleEquals(nullable,object,"nullable","object");
doubleEquals(undef,object,"undef","object");
doubleEquals(object,string,"object","string");