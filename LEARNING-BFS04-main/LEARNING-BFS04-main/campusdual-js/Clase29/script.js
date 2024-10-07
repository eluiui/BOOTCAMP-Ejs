
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

function mensaje(){
    setTimeout(() => {
        alert("este es un mensaje con delay de 3 segundos");
      }, "3000");
    
}
