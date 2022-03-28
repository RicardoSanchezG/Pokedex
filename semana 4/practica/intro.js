console.log("\n************* Variables *************\n")
var numero1 = 4;
var numero2 = 2;
console.log("Numero 1: " + numero1 + " Numero 2 " + numero2); 


console.log("\n************* Cadenas *************\n");
var frase1 = "ejemplo comillas dobles";
var frase2 = 'ejemplo comillas simples';
var frase3 = `ejemplo comillas ${numero2} invertidas`;

console.log(frase1 + "\n" + frase2 + "\n" + frase3);


console.log("\n************* Condicionales *************\n");

console.log(numero1 > numero2);
console.log(numero1 === numero2);


console.log("\n************* Operador logico AND *************\n");
console.log(true && false);
console.log(true && true);


console.log("\n************* Operador logico Or *************\n");
console.log(true || false);
console.log(false && false);


console.log("\n************* Arreglos *************\n");
let listaDeNumeros = [2, 3, 5, 7, 11, 234];
// let es para bloque de codigo //
console.log(listaDeNumeros[3])

listaDeNumeros.push(16);
listaDeNumeros.push(939);

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

let listaDePalabras = ["Explorer", "MisionComander", "LaunchX", "Innovaccion"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);

let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);


console.log("\n************* Objetos *************\n");

let Explorer = {
    nombre : "Nombre del Explorer",
    email: "emeil@innovaccion.mx",
    numReg: 12345,
    mision: "FrontEnd",
    proyectos: ["Abogabot", "Taqueria", "Pasteleria", "Vacunacion"]
}

console.log(Explorer);

console.log(Explorer.ProPer)


// /* Fllujo condicional
let number1 = 4;
let number2 = 2;
console.log("\n************* if / else *************\n");
if (number1 > number2) {
    console.log("El numero 1 es mayor que numero 2");
}
else if( number1 == number2 ){
    console.log("Los numeros son iguales");
}
else {
    console.log("El numero 2 es mayor que numero 1");
}

// /* Ciclo condicional
console.log("\n************* while *************\n");
let numberwhile = 0;
while (numberwhile <= 12) {
    console.log(numberwhile);
    numberwhile = numberwhile + 2;
}
console.log("Aqio ua salio del while " + numberwhile);


// /* Ciclo condicional de una iteracion minimo
console.log("\n************* while *************\n");
let numeroDoWhile = 20;
do {
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
} while (numeroDoWhile < 20);
console.log("Aqui sale del do While");

// /* Ciclo for con interacion controlada
console.log("\n************* for *************\n");
let numeroFor = 0
for (numeroFor = 0; numeroFor <= 12; numeroFor = numeroFor + 2) {
    console.log(numeroFor);
}
console.log("Aqui salimos del for");


/*
/* Opciones para evitar anidar condicionales */
console.log("\n************* Switch *************\n");
switch (prompt("Como esta el clima?")) {
    case "lluvioso":
        console.log("No te vayas a mojar");
        break;
    case "Soleado":
        console.log("Ponte bloqueador");
        break;
    case "Nublado":
        console.log("Tapate bien")
        break;
    default:
        console.log("No se como esta el clima");
        break;
}
console.log("Aqui salimos del switch");
