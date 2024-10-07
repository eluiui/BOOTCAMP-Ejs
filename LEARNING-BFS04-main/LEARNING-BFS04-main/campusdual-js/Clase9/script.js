class ValidationError extends Error {
    constructor(message) {
        
        super(message); 
        this.name = "ValidationError"; 
    }
}

try{
    throw new ValidationError("No se ha cumplido la validación");
}catch(e){
    if (e instanceof ValidationError) {
        console.log("Error de validación");
    }
    console.error(e.name + ": " + e.message);
}