const numA = 0;
try{
    numA+=1;
    //console.log(numB);
    //JSON.parse('<html></html>');
}catch(e){

    
    if (e instanceof TypeError) {
        console.log("Error de TypeError relacionado con asignaciones de variables");
    }
    if (e instanceof ReferenceError) {
        console.log("Error de ReferenceError relacionado con accesos de variables");
    }
    if (e instanceof SyntaxError) {
        console.log("Error de SyntaxError relacionado con fallos de sintaxis");
    }
    console.error(e.name + ": " + e.message);
}