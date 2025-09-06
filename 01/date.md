# Tipos de Datos en JavaScript

## Introducción
JavaScript es un lenguaje dinámicamente tipado, lo que significa que las variables no están ligadas a un tipo específico y pueden cambiar de tipo durante la ejecución. Los tipos de datos se dividen en dos categorías principales: primitivos y no primitivos (referencias).

## 1. Tipos de Datos Primitivos

Los tipos primitivos son inmutables (no se pueden modificar directamente) y se almacenan directamente en la memoria de la pila (stack), lo que los hace ligeros en términos de consumo de memoria.

### Number
**Descripción**: Representa números enteros y de punto flotante (64 bits en formato IEEE 754).

**Características**:
- Incluye valores especiales: `Infinity`, `-Infinity`, y `NaN`
- Consumo de memoria: Bajo (8 bytes por número)

**Cuándo usarlo**: Ideal para cálculos matemáticos, contadores, o cualquier valor numérico.

**Precauciones**:
- Cuidado con operaciones de punto flotante debido a imprecisiones
- Usa bibliotecas como `BigInt` para números enteros muy grandes o `decimal.js` para precisión decimal

**Ejemplo**:
```javascript
let age = 30;
let price = 19.99;
console.log(0.1 + 0.2); // 0.30000000000000004 (imprecisión)
```

### BigInt
**Descripción**: Para enteros de tamaño arbitrario (más allá del límite seguro de Number: ±2^53 - 1).

**Características**:
- Consumo de memoria: Variable, depende del tamaño del número (más pesado que Number)

**Cuándo usarlo**: Útil para cálculos con números muy grandes, como IDs en bases de datos o criptografía.

**Precauciones**: No es compatible con operaciones directas con Number (debes convertir primero).

**Ejemplo**:
```javascript
let bigNum = 123456789012345678901234567890n;
console.log(bigNum + 1n); // 123456789012345678901234567891n
```

### String
**Descripción**: Representa cadenas de texto (UTF-16).

**Características**:
- Consumo de memoria: Proporcional a la longitud (2 bytes por carácter en UTF-16)

**Cuándo usarlo**: Para texto, nombres, URLs, JSON, etc.

**Precauciones**:
- Evita concatenaciones masivas en bucles (usa `join()` o template literals)
- Cuidado con la manipulación de strings muy largos

**Ejemplo**:
```javascript
let name = "Alice";
let greeting = `Hello, ${name}!`; // Template literals
console.log(greeting); // Hello, Alice!
```

### Boolean
**Descripción**: Representa `true` o `false`.

**Características**:
- Consumo de memoria: Muy bajo (generalmente 1 bit)

**Cuándo usarlo**: Para condiciones, banderas o lógica binaria.

**Precauciones**: Evita comparaciones implícitas (`==`) que pueden causar errores (usa `===`).

**Ejemplo**:
```javascript
let isActive = true;
if (isActive === true) console.log("User is active");
```

### Undefined
**Descripción**: Representa una variable declarada pero sin valor asignado.

**Características**:
- Consumo de memoria: Mínimo

**Cuándo usarlo**: Normalmente no se asigna manualmente; indica ausencia de valor.

**Precauciones**: Verifica con `typeof` o `=== undefined` para evitar errores.

**Ejemplo**:
```javascript
let x;
console.log(x); // undefined
```

### Null
**Descripción**: Representa la ausencia intencional de un valor.

**Características**:
- Consumo de memoria: Mínimo

**Cuándo usarlo**: Para indicar que una variable no tiene valor o para limpiar referencias.

**Precauciones**: `typeof null` devuelve `"object"` (error histórico de JavaScript).

**Ejemplo**:
```javascript
let user = null;
console.log(user === null); // true
```

### Symbol
**Descripción**: Identificador único e inmutable, introducido en ES6.

**Características**:
- Consumo de memoria: Bajo

**Cuándo usarlo**: Para crear claves únicas en objetos o evitar colisiones en propiedades.

**Precauciones**: No se serializan fácilmente (no son compatibles con JSON).

**Ejemplo**:
```javascript
const id = Symbol("id");
const obj = { [id]: 123 };
console.log(obj[id]); // 123
```

## 2. Tipos de Datos No Primitivos (Referencias)

Los no primitivos se almacenan en la memoria dinámica (heap) y son mutables. Su consumo de memoria es mayor y depende del tamaño y estructura de los datos.

### Object
**Descripción**: Incluye objetos literales, arrays, funciones, fechas (Date), expresiones regulares (RegExp), etc.

**Características**:
- Consumo de memoria: Variable, puede ser alto con objetos complejos

**Cuándo usarlo**: Para estructuras de datos complejas o colecciones.

**Precauciones**:
- Evita anidamientos excesivos
- Cuidado con referencias circulares
- Considera usar `Map` o `Set` para casos específicos

**Ejemplo**:
```javascript
const user = { name: "Bob", age: 25 };
const numbers = [1, 2, 3];
console.log(user.name, numbers[0]); // Bob, 1
```

### Map
**Descripción**: Colección de pares clave-valor donde las claves pueden ser de cualquier tipo.

**Características**:
- Optimizado para iteraciones frecuentes
- Mayor consumo de memoria que objetos simples

**Cuándo usarlo**: Para mapas clave-valor con claves no-string o cuando necesitas iterar fácilmente.

**Ejemplo**:
```javascript
const map = new Map();
map.set("name", "Alice");
map.set(42, "answer");
console.log(map.get(42)); // answer
```

### Set
**Descripción**: Colección de valores únicos, sin duplicados.

**Características**:
- Similar a Map en consumo de memoria
- No permite acceso por índice

**Cuándo usarlo**: Para listas de valores únicos, como IDs o categorías.

**Ejemplo**:
```javascript
const uniqueIds = new Set([1, 2, 2, 3]);
console.log(uniqueIds.size); // 3
```

## 3. Gestión de Memoria y Buenas Prácticas

### Primitivos
- **Ventajas**: Ligeros, almacenados en pila
- **Recomendación**: Úsalos siempre que sea posible para datos simples

**Ejemplo de optimización**:
```javascript
// Mejor
let counter = 0;

// Menos eficiente
let counterObj = { value: 0 };
```

### Objetos y Referencias
- **Consideraciones**: Almacenados en el heap, más pesados
- **Recomendación**: Limpia referencias no utilizadas

**Ejemplo de memory leak**:
```javascript
let bigArray = new Array(1000000).fill("data");
// ...
bigArray = null; // Ayuda al garbage collector
```

### Problemas Comunes y Soluciones

#### 1. Mutabilidad
**Problema**: Los objetos y arrays son mutables por defecto.
**Solución**: Usa `Object.freeze()` o bibliotecas como Immer.

```javascript
const config = Object.freeze({ apiKey: "123" });
// config.apiKey = "456"; // Error en modo estricto
```

#### 2. Referencias Circulares
**Problema**: Pueden causar memory leaks.
**Solución**: Rompe las referencias cuando ya no sean necesarias.

```javascript
let obj1 = {};
let obj2 = { ref: obj1 };
obj1.ref = obj2; // Referencia circular
// ...
obj1.ref = null; // Rompe la referencia
```

#### 3. Concatenación de Strings
**Problema**: Ineficiente en bucles.
**Solución**: Usa `Array.join()` o template literals.

```javascript
// Ineficiente
let result = "";
for (let i = 0; i < 100000; i++) result += "x";

// Eficiente
let result2 = new Array(100000).fill("x").join("");
```

## 4. Tipos a Evitar o Manipular con Cuidado

### Number (Punto Flotante)
**Problema**: Puede causar errores de precisión en cálculos decimales.
**Solución**: 
- Usa `BigInt` para números enteros grandes
- Usa `decimal.js` para cálculos decimales de alta precisión

**Ejemplo**:
```javascript
// Problema de precisión
console.log(0.1 + 0.2); // 0.30000000000000004

// Solución con decimal.js
// const { Decimal } = require('decimal.js');
// console.log(new Decimal(0.1).plus(0.2).toNumber()); // 0.3
```

### Null vs Undefined
**Problema**: Pueden causar errores si no se manejan correctamente.
**Solución**: 
- Usa el operador de coalescencia nula (`??`) para valores por defecto
- Verifica explícitamente con `===`

**Ejemplo**:
```javascript
let value = null;
console.log(value ?? "valor por defecto"); // "valor por defecto"

// Verificación segura
if (value === null || value === undefined) {
    console.log('Valor no definido');
}
```

### Objetos Genéricos
**Problema**: No siempre son la mejor estructura de datos.
**Solución**:
- Usa `Map` para pares clave-valor con claves dinámicas
- Usa `Set` para colecciones de valores únicos
- Considera estructuras de datos específicas según el caso de uso

**Ejemplo**:
```javascript
// En lugar de un objeto genérico
const cache = {};

// Mejor usar Map
const cache = new Map();
cache.set('user:1', { id: 1, name: 'Alice' });
```

### Arrays Muy Grandes
**Problema**: Pueden consumir mucha memoria y afectar el rendimiento.
**Solución**:
- Usa `TypedArray` para datos numéricos grandes
- Considera procesamiento por lotes (chunking)
- Usa iteradores para manejar datos grandes de manera eficiente

**Ejemplo**:
```javascript
// Array tipado para números enteros de 32 bits
const largeArray = new Int32Array(1000000);

// Procesamiento por lotes
const chunkSize = 1000;
for (let i = 0; i < largeArray.length; i += chunkSize) {
    const chunk = largeArray.slice(i, i + chunkSize);
    // Procesar el lote
}
```

## Conclusión

JavaScript ofrece una variedad de tipos de datos, cada uno con sus propias características y casos de uso. Al elegir el tipo de dato adecuado y seguir buenas prácticas de gestión de memoria, puedes escribir código más eficiente y mantenible. Recuerda:

1. Usa tipos primitivos para datos simples
2. Elige estructuras de datos adecuadas para cada caso de uso
3. Maneja con cuidado los tipos que pueden causar problemas de precisión
4. Limpia las referencias a objetos grandes cuando ya no sean necesarias
5. Considera el rendimiento al trabajar con grandes conjuntos de datos