let intervalID;
let valor = 0.0;

function IniciarCronometro(max){
    intervalID = setInterval(cronometro, 100,max);
}

function pararCronometro(){
    if(intervalID){
        clearInterval(intervalID);
        intervalID=null;
    }
}

function cronometro(max){
    let crono = document.getElementById("crono");
    crono.innerHTML=valor.toFixed(2);
    valor+=0.10;
    if(valor>=max){
        valor=0.0;
    }
}
function evaluar(){
    let myPromise = new Promise((resolve, reject) => {
        if(valor>3.0){
            resolve("Es mayor que 3");
        }else{
            reject("Es menor que 3");
        }
    });
    console.log(myPromise);

    myPromise.then((successMessage) => {
        console.log("¡Correcto! " + successMessage);
      }).catch((errorMessage)=>{
        console.log("¡Incorrecto! " + errorMessage);
      });
}