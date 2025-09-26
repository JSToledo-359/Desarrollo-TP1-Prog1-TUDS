/*Programar el siguiente juego: Un usuario ingresa un número entre 1 y 10. Otro usuario
tiene 3 intentos para dar con ese número. Como pista por pantalla se muestra cada vez
que ingresa un número si es mayor o menor. Si acierta felicitar al jugador de lo
contrario comunicarle el fracaso. Dar la opción de volver a jugar.*/

let numeroA, numeroB, bandera = 1;

do{
    do{
    numeroA = parseInt(prompt("JugadorA ingrese un numero entre 1 y 10: "))
    i = 1
    }while (numeroA < 1 || numeroA > 10)
    
        while(i <= 3){

        numeroB = parseInt(prompt("JugadorB ingrese un numero: "));

        if(numeroB == numeroA){
            console.log("FELICITACIONES! Acertaste!");
            break;
        }
        else if(numeroB < numeroA) {
            console.log("No acertaste! El numero es mayor.");
        }
        else {
            console.log("No acertaste. El numero es menor.");
        }
        i++;
    }

        if (numeroA !== numeroB){
            console.log("No acertaste en los 3 intentos. El numero era: " + numeroA);
        }

    bandera = parseInt(prompt("Quieres volver a jugar? \ 1 = SI \ 0 = NO "));

} while (bandera == 1);