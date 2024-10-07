function enviar(){
    let chat = document.getElementById("chat");
    let miInput = document.getElementById("miInput");
    let texto = chat.value;
    chat.value=texto+'\n'+miInput.value;
    //templatestrings
    agregarElemento(miInput.value);
    miInput.value="";
}

function agregarElemento(texto){
    let chatlog = document.getElementById("chatlog");
    nuevo = nuevoElemento(texto);
    chatlog.append(nuevo);
}

function nuevoElemento(texto){
    //elemento bocadillo
    let elemento = document.createElement('div');
    elemento.className = 'bocadillo';
    //elemento mensaje del bocadillo
    let msg = document.createElement('div');
    msg.innerHTML = texto;
    //elemento cerrar del bocadillo
    let cerrar = document.createElement('div');
    cerrar.className = 'cerrar';
    cerrar.innerHTML = "x";
    cerrar.onclick=eliminarElemento
    //agregamos los dos elementos al bocadillo
    elemento.append(msg);
    elemento.append(cerrar);
    return elemento;
}

function eliminarElemento(){
    let divPadre = this.parentNode;
    divPadre.parentNode.removeChild(divPadre);
}