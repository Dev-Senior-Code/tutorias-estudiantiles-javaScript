// Suma y concatenación
console.log(5 + 3);      // 8
console.log('5' + 3);    // '53' (concatenación)
console.log(5 + '3');    // '53' (concatenación)
console.log(5 + +'3');   // 8 (conversión a número)

// Operadores de incremento
let x = 5;
console.log(x++);  // 5 (post-incremento)
console.log(x);    // 6
console.log(++x);  // 7 (pre-incremento)

// Operador módulo
console.log(10 % 3);  // 1 (resto de la división)

// Exponenciación
console.log(2 ** 3);  // 8
console.log(10 ** -1); // 0.1

// Igualdad vs. Igualdad estricta
console.log(5 == '5');   // true (coerción de tipos)
console.log(5 === '5');  // false (tipos diferentes)
console.log(0 == false); // true (0 es falsy)
console.log(0 === false); // false (tipos diferentes)
console.log('' == false); // true (ambos son falsy)
console.log('' === false); // false (tipos diferentes)

// Comparación de objetos
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

console.log(obj1 == obj2);  // false (referencias diferentes)
console.log(obj1 === obj2); // false (referencias diferentes)
console.log(obj1 === obj3); // true (misma referencia)

// Comparación con null/undefined
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(null == 0);         // false
console.log(undefined == 0);     // false