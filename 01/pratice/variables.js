// De la siguiente manera se declaran variables en JS

// VAR: No es una practica moderna priorizada.
var name = 'Andres';

// LET: se le pueden reasignar valores
let edad = 10;

// CONST: no se le pueden reasignar valores.
const nombre = 'Andres';

// Declaración de variable en (camelCase).
const nombreUser = 'Miguel';


// Mostrar resultados en consola
// LOG: Mostrar informacion general
console.log(edad);

// ERROR: errores o advertencias críticas.
console.error('No se puede usar (VAR) para declarar variables');

// WARN: Adevertencias no criticas.
console.warn('Adevertencia: No se puede dividir por cero');

// TABLE: Mostrar datos tabulares
const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];
console.table(users);

// console.group / console.groupEnd: Agrupa mensajes para mejor organización.
console.group('User Data');
console.log('Name: Alice');
console.log('Age: 30');
console.groupEnd();

// console.time / console.timeEnd: Mide el tiempo de ejecución de un bloque de código.
console.time('loop');
for (let i = 0; i < 1000; i++) {} // Operación
console.timeEnd('loop'); // Muestra el tiempo transcurrido

