function eventoClick(){
    console.log("presiono bottón");
}
function eventoOver(){
    console.log("Paso sobre el elemento");
}
function eventoSubmit(e){
    console.log("Envio el formulario");
}
function eventoLoad(){
    console.log("Página cargada");
}
function eventoPress(e){
    console.log("Presionando la tecla "+e.key);
}
function eventoOnChange(e){
    console.log("Cambio el contenido");
    console.log(e);
}
function eventoOnInput(e){
    console.log("Agrego algo al input");
    console.log(e);
}