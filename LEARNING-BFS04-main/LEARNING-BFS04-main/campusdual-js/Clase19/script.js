window.addEventListener("load", (event) => {
    let miForm = document.getElementById("miForm");
    miForm.addEventListener("submit",function(event){
        console.log(event);
        let miInput = document.getElementById("miInput");
        if(validateEmail(miInput.value)){
            console.log("Se envia el formulario");
        }else{
            event.preventDefault();
            alert("El correo electrónico no es correcto");
        }
        
    });
});

function validateEmail(email){
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regexEmail.test(email);
}