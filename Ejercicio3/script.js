/*Escribe un programa para encontrar la suma de la serie 1+11+111+1111+...n. El
usuario debe ingresar un número donde n será menor a dicho número ingresado.
Ejemplo: Usuario ingresa 23540, luego la serie será 1+11+111+1111+11111 y el
resultado de la suma es 12345. */

let numero = 0, acumulador = 0, termino = 0;

numero = parseInt (prompt ("Ingrese un numero: "));

do {
    termino = termino * 10 + 1;
    if (termino < numero){
        acumulador = acumulador + termino;
        console.log(termino);
    }
}while (termino < numero)

    console.log("El numero es: " + acumulador);
