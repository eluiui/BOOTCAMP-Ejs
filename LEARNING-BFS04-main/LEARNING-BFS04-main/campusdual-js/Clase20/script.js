let variable = "o Mundo!"

console.log(variable);
console.log("variable contiene "+variable.length+" letras");

console.log("replace y replaceAll");
console.log(variable.replace("o","Hola"));
console.log(variable.replace("o","Hola").replaceAll("o","@"));
console.log(variable.replace(/\w/g,"*"))

console.log("concat");
variable = "Hola".concat(" Mundo").concat("!");
console.log(variable);

console.log("toLowerCase y toUpperCase");
console.log(variable.toLowerCase());
console.log(variable.toUpperCase());

console.log("includes y indexOf");
console.log(variable.includes("a"));
console.log(variable.includes("a",4));
console.log(variable.indexOf("o"));
console.log(variable.indexOf("o",2));