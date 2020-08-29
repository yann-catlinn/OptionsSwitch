//1) EJERCICIO 1
/*
si usuario ingresa valor 1 en menu principal entonces
ejectuta funcion 1 y...
pide ingresar un numero del 1 al 100
luego imprime por consola numeros desde el 0 al número que ingreso el usuario (si pongo 50  imprime del 0 al 50)
*/

function ingresaNumero() {
    var numero = prompt("Por favor, ingresa un numero del 1 al 100");
    for (var i = 0; i <= numero; i++) {
        if (numero == prompt) {
            break;
        }
        console.log(i);
    }
}
//ingresaNumero();

//2)  EJERCICIO 2 (do while... pregunta hasta que me escriba blanco)
/*
Preguntar al usuario ¿De qué color es el caballo blanco de Napoleón?
Si el usuario responde != blanco
preguntar al usuario ¿De qué color es el caballo blanco de Napoleón?
si el usuario responde blanco
se le dejará de hacer la pregunta
*/

function colorCaballo() {
    do {
        var pregunta = prompt("¿De qué color es el caballo blanco de Napoleón?");
    } while (pregunta != "blanco");
    console.log("Exacto, es blanco!");
}
//colorCaballo();

//3) EJERCICIO 3 investigar redondear un numero flotante a entero
/*
Calcular promedio de notas del usuario
Solicitar ingresar promedio de notas de Matemáticas
Solicitar ingresar promedio de notas de Física
Solicitar ingresar promedio de notas de Ciencias
Luego indicar por pantalla (alert()) el promedio de notas
promedio debe estar redondeado a un integer (La función Math.round() retorna el valor de un número redondeado al entero más cercano.)
*/
function promedio() {
    var promedioMatematicas = parseFloat(
        prompt("Por favor ingrese su promedio de Matemáticas:")
    );
    var promedioFisica = parseFloat(
        prompt("Por favor ingrese su promedio de Física:")
    );
    var promedioCiencias = parseFloat(
        prompt("Por favor ingrese su promedio de Ciencias:")
    );
    var promedioNotas = Math.round((promedioMatematicas + promedioFisica + promedioCiencias) / 3);
    console.log("Su promedio de notas es: " + promedioMatematicas + " + " + promedioFisica + " + " + promedioCiencias + " = " + promedioNotas);
    alert("Su promedio de notas es: " + promedioNotas);
}
//promedio();

//4) EJERCICIO 4 (metodo continue)
/*
Solicitar escribir el nombre de 3 frutas *3 (cada fruta se debe ingresar de manera individual)
cuando se ingresan 3 frutas
console.log frutas menos  "manzana"
 */

function pideFruta() {
    var frutas = [];
    do {
        frutas.push(prompt("Por favor, escriba el nombre de una fruta"));
    } while (frutas.length <= 2);

    var manzana;
    for (manzana of frutas) {
        if (manzana != "manzana") {
            console.log(manzana);
        } else {
            continue;
        }
    }
}
//pideFruta();

//5) EJERCICIO 5
/*
Solicita escribir su nombre
determinar la cantidad de vocales y consonantes del nombre
alert() la cantidad de vocales y consonantes del nombre
 */
function letrasNombre() {
    var nombre = prompt("Por favor, escriba su nombre:");
    var numeroVocales = nombre.match(/[aeiouáéíóúü]/gi).length;
    var numeroConsonantes = nombre.match(/[^aeiouáéíóúü]/gi).length;
    alert(`${nombre}` + "," + " en su nombre hay: " + numeroVocales + " vocales y " + numeroConsonantes + " consonantes.");
}
//letrasNombre();

//hacer primero los ejercicios y al final el menu -menu  se hace (con un case )con un switch eso es lo que piden
////un menu principal que pide ingresar 1 valor entre el 1 y el 6
//cada numero representa una opcion que al ser ingresada ejecuta la función de los ejercicios del 1 al 6
//mostrar la ejecucion del ejercicio 1 al 6 segun lo que ingrese el usuario
function init() {}

function eligeNumero() {
    var opcion = prompt("Por favor, ingrese un numero del 1 al 5");

    switch (opcion) {
        case "1":
            ingresaNumero();
            break;
        case "2":
            colorCaballo();
            break;
        case "3":
            promedio();
            break;
        case "4":
            pideFruta();
            break;
        case "5":
            letrasNombre();
            break;
        default:
            alert(
                "La opción ingresada no existe. Por favor, recargue la página e ingrese un numero entre 1 y 5"
            );
            break;
    }
}