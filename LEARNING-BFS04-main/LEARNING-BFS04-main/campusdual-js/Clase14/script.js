//News
let fecha = new Date();
let pluton = new Date("1930-02-18");
let alunizaje = new Date(1969,7,20,15,17,39);
console.log("Hoy es "+fecha.toLocaleString());
console.log("Plutón se descubrió el "+pluton.toLocaleString());
console.log("El hombre piso la luna el "+alunizaje.toLocaleString());
//Métodos
console.log("getDay "+fecha.getDay());
console.log("getDate "+fecha.getDate());
console.log("getMonth "+fecha.getMonth());
console.log("getFullYear "+fecha.getFullYear());
//Formatos
console.log("Formato ISO 8601");
console.log(fecha.toISOString());
console.log("Con Locales");
const opText = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}
const opNumb = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute:'2-digit',
    second:'2-digit'
}
console.log(fecha.toLocaleDateString('es-ES',opText));
console.log(fecha.toLocaleDateString('es-ES',opNumb));
console.log(fecha.toLocaleDateString('ar-EG',opText));
console.log("Formato JSON");
console.log(fecha.toJSON());
console.log("Timestamp");
console.log(fecha.valueOf());