function enviar(){
    let chat = document.getElementById("chat");
    let miInput = document.getElementById("miInput");
    let texto = chat.value;
    chat.value=texto+'\n'+miInput.value;
    //agregarElemento(miInput.value);
    miInput.value="";
}

function agregarElemento(texto){
    let chatlog = document.getElementById("chatlog");
    nuevo = nuevoElemento(texto);
    chatlog.append(nuevo);
}

function nuevoElemento(texto){
    let elemento = document.createElement('div');
    elemento.className = 'bocadillo';
    elemento.innerHTML = texto;
    return elemento;
}