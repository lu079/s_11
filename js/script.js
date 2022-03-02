
//ARREGLOS
/* // Forma tradicional
let array = new Array("a", "b", "c");
console.log(array);

let cadena_de_texto = 'Mi perro dijo "Guau"';

// Mediante literales
let literal = ["a", "b", "c"]; // Arreglo de 3 elementos
console.log(literal);

// Inicializar un arreglo
let empty = []; // Arreglo Vacio(0)
console.log(empty);

let mixto = ["texto", 123, true]; // Arreglo mixto
console.log(mixto);

//             0          1            2         3
let razas = ["poodle", "labrador", "terrier", "shihtzu"];
razas[0]; //poodle    1
razas[1]; //labrador  2
razas[2]; // terrier   3
razas[3]; // shihtzu   4 <= length
razas[4]; // undefined
razas[5]; // undefined
const nro_razas = razas.length; // 4
console.log("Numero de razas: ", nro_razas);
// 4 - 1 = 3
razas[nro_razas - 1]; //
//      4         -  1  = 3
razas[razas.length - 1]; // shihtzu

/* Adelantando un poco... (Objetos) */

// propiedad o atributo => obj.propiedad
// funcion o método => obj.funcion()
// obj . metodo


//AÑADIR Y ELIMINAR ELEMENTOS
//const array = ["a", "b", "c"]; sustitucion abajo
let baraja = ["5 picas", "J dimante", "5 trebol", "A corazones",];
console.log(baraja);
baraja.push ("Q corazones");
console.log(baraja);

//array.pop();
let carta = baraja.pop();
console.log(carta);

let carta2 = baraja.pop();
console.log(carta2);

console.log("cuantas cartas temgo ", baraja);

//array.unshift("Z");
//array.shift();
