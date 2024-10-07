window.addEventListener("load", (event) => {
    console.log("La web entera se ha cargado, imagenes, css, scripts,etc..");
    console.log(event);

    let miForm = document.getElementById("miForm");
    miForm.addEventListener("submit",function(event){
        console.log(event);
        let miInput = document.getElementById("miInput");
        if(miInput.value){
            console.log("evento submit lanzado");
        }else{
            event.preventDefault();
            console.log("evento submit cancelado");
        }
        
    });
});
window.document.addEventListener("DOMContentLoaded", (event) => {
    console.log("El documento web ha cargado las etiquetas pero no los recursos");
    console.log(event);
});