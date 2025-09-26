/* Realizar un programa que permita determinar a cuantas semanas equivale un numero
ingresado que está expresado en minutos. Considere el ingreso de 15 números. El
resultado debe contener hasta 2 números decimales. */

let numero;
let minutos = 10080;
let semanas;
let i = 0;

while (i<15){
    numero = parseInt(prompt("Ingrese un numero: "));

    semanas = numero / minutos;

    console.log("Según el numero ingresado: " + numero +". El numero de semanas es: " + semanas.toFixed(2));
    console.log("Intentos: " + i);
    i++;
}
