# Guía de Operadores en JavaScript

## 1. Operadores de Asignación

Los operadores de asignación se utilizan para asignar valores a variables. JavaScript ofrece un operador básico y varios operadores compuestos.

### Tipos de Operadores de Asignación

#### Asignación Simple (`=`)
Asigna un valor a una variable.

```javascript
let x = 10; // Asigna 10 a x
```

#### Asignación con Operaciones Aritméticas
Combinan una operación aritmética con la asignación.

```javascript
let x = 10;
x += 5;  // x = x + 5;  => x = 15
x *= 2;  // x = x * 2;  => x = 30
x **= 2; // x = x ** 2; => x = 900
```

#### Asignación con Operaciones Bit a Bit
Para operaciones a nivel de bits.

```javascript
let x = 5; // 0101 en binario
x &= 3;    // 0011 en binario; x = 0101 & 0011 = 0001 => x = 1
```

#### Asignación con Operadores Lógicos (ES2020+)
Para asignaciones condicionales.

```javascript
let x = 0;
x ||= 10;  // Si x es falsy, asigna 10 => x = 10

let y = 20;
y &&= 30;  // Si y es truthy, asigna 30 => y = 30

let z = null;
z ??= 'default'; // Si z es null/undefined, asigna 'default' => z = 'default'
```

### Buenas Prácticas
- Usa operadores compuestos para mayor claridad
- Asegúrate de que las variables estén definidas antes de usarlas
- Usa `??=` para valores por defecto en lugar de `||=` cuando 0 o "" sean valores válidos
- Usa operadores bit a bit solo cuando sea necesario

## 2. Operadores Lógicos

### Operadores Básicos

#### AND Lógico (`&&`)
Evalúa a `true` si ambos operandos son `true` (o truthy).

```javascript
true && false;  // false
5 && 10;       // 10 (devuelve el último truthy)
0 && 10;       // 0 (devuelve el primer falsy)
```

#### OR Lógico (`||`)
Evalúa a `true` si al menos un operando es `true` (o truthy).

```javascript
true || false;  // true
0 || 'default'; // 'default' (primer truthy)
false || 0;     // 0 (todos son falsy)
```

#### NOT Lógico (`!`)
Invierte el valor booleano de un operando.

```javascript
!true;    // false
!0;       // true
!!'text'; // true (doble negación para convertir a booleano)
```

### Operadores de Coalescencia

#### Nullish Coalescing (`??`)
Devuelve el operando derecho solo si el izquierdo es `null` o `undefined`.

```javascript
null ?? 'default';  // 'default'
0 ?? 'default';     // 0 (no es null/undefined)
'' ?? 'default';    // '' (cadena vacía)
```

### Operadores de Asignación Lógica (ES2021+)

#### Asignación AND (`&&=`)
Asigna el valor de la derecha solo si la variable es truthy.

```javascript
let x = 10;
x &&= 20;  // x = 20 (porque 10 es truthy)

let y = 0;
y &&= 20;  // y = 0 (porque 0 es falsy)
```

#### Asignación OR (`||=`)
Asigna el valor de la derecha solo si la variable es falsy.

```javascript
let x = '';
x ||= 'default';  // x = 'default'

let y = 'hello';
y ||= 'world';    // y = 'hello' (no cambia)
```

#### Asignación Nullish (`??=`)
Asigna el valor de la derecha solo si la variable es `null` o `undefined`.

```javascript
let x = null;
x ??= 'default';  // x = 'default'

let y = 0;
y ??= 10;         // y = 0 (no cambia)
```

### Cortocircuito (Short-Circuit Evaluation)

#### Uso de `&&` para Ejecución Condicional
```javascript
// Solo ejecuta la función si la condición es verdadera
isLoggedIn && showDashboard();

// Equivalente a:
if (isLoggedIn) {
  showDashboard();
}
```

#### Uso de `||` para Valores por Defecto
```javascript
const name = username || 'Invitado';
// Si username es falsy (undefined, null, '', 0, false, NaN),
// asigna 'Invitado'
```

### Buenas Prácticas

1. **Usa `??` en lugar de `||` para valores por defecto** cuando 0 o "" sean valores válidos.
   ```javascript
   // Mal
   const count = input || 1;  // Si input es 0, count será 1
   
   // Bien
   const count = input ?? 1;  // Si input es 0, count será 0
   ```

2. **Evita expresiones complejas** - Divide la lógica en pasos más simples.
   ```javascript
   // Difícil de leer
   const isEligible = user && user.age >= 18 && (user.hasSubscription || user.isAdmin);
   
   // Mejor
   const isAdult = user?.age >= 18;
   const hasAccess = user?.hasSubscription || user?.isAdmin;
   const isEligible = isAdult && hasAccess;
   ```

3. **Usa paréntesis para mayor claridad** cuando mezcles operadores lógicos.
   ```javascript
   // Confuso
   if (a || b && c) { /* ... */ }
   
   // Más claro
   if (a || (b && c)) { /* ... */ }
   ```

4. **Aprovecha el operador opcional de encadenamiento (`?.`)** para acceder a propiedades anidadas.
   ```javascript
   // Antes
   const street = user && user.address && user.address.street;
   
   // Con operador opcional
   const street = user?.address?.street;
   ```

5. **Usa valores por defecto con `??`** cuando quieras manejar específicamente `null` o `undefined`.
   ```javascript
   const theme = userPreference.theme ?? 'dark';
   ```




## 3. Operadores Aritméticos

### Operadores Básicos

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| `+` | Suma o concatenación | `5 + 3` → `8` |
| `-` | Resta | `5 - 3` → `2` |
| `*` | Multiplicación | `5 * 3` → `15` |
| `/` | División | `10 / 2` → `5` |
| `%` | Módulo (resto) | `10 % 3` → `1` |
| `**` | Exponenciación | `2 ** 3` → `8` |
| `++` | Incremento | `x++` o `++x` |
| `--` | Decremento | `x--` o `--x` |

### Ejemplos Prácticos

```javascript
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
```

### Precedencia de Operadores Aritméticos
1. `()` (paréntesis)
2. `**` (exponenciación, de derecha a izquierda)
3. `*`, `/`, `%` (de izquierda a derecha)
4. `+`, `-` (de izquierda a derecha)

```javascript
console.log(5 + 3 * 2);    // 11 (no 16)
console.log((5 + 3) * 2);  // 16
console.log(2 ** 3 ** 2);  // 512 (no 64, porque es 2^(3^2))
```

## 4. Operadores de Comparación

### Operadores de Igualdad

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| `==` | Igualdad con coerción | `5 == '5'` → `true` |
| `===` | Igualdad estricta | `5 === '5'` → `false` |
| `!=` | Desigualdad con coerción | `5 != '5'` → `false` |
| `!==` | Desigualdad estricta | `5 !== '5'` → `true` |

### Operadores Relacionales

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| `>` | Mayor que | `5 > 3` → `true` |
| `<` | Menor que | `5 < 3` → `false` |
| `>=` | Mayor o igual que | `5 >= 5` → `true` |
| `<=` | Menor o igual que | `5 <= 3` → `false` |

### Ejemplos de Comparación

```javascript
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
```

### Buenas Prácticas

1. **Siempre usa `===` y `!==`** para evitar sorpresas con la coerción de tipos.
   ```javascript
   // Mal
   if (userId == currentId) { /* ... */ }
   
   // Bien
   if (userId === currentId) { /* ... */ }
   ```

2. **Ten cuidado al comparar con `null` o `undefined`**
   ```javascript
   // Para verificar si es null o undefined
   if (value == null) {  // Verifica tanto null como undefined
     // ...
   }
   
   // O mejor en ES2020+
   if (value === null || value === undefined) {
     // ...
   }
   ```

3. **Evita comparar números con strings** - Conviértelos primero:
   ```javascript
   // Mal (puede dar resultados inesperados)
   if (userInput > 10) { /* ... */ }
   
   // Bien
   const numInput = Number(userInput);
   if (!isNaN(numInput) && numInput > 10) { /* ... */ }
   ```

4. **Para comparar arrays u objetos**, necesitas una comparación profunda:
   ```javascript
   // Comparación superficial (solo verifica referencias)
   const arr1 = [1, 2, 3];
   const arr2 = [1, 2, 3];
   console.log(arr1 === arr2); // false
   
   // Comparación profunda (puedes usar una librería como lodash)
   // _.isEqual(arr1, arr2) // true
   ```

5. **Usa `Object.is()` para casos especiales** como `NaN` o `-0`:
   ```javascript
   console.log(NaN === NaN);    // false
   console.log(Object.is(NaN, NaN)); // true
   
   console.log(0 === -0);       // true
   console.log(Object.is(0, -0)); // false
   ```

Operador condicional (ternario)

Sintaxis: condición ? valorSiVerdadero : valorSiFalso
Ejemplo:

javascript
const status = age >= 18 ? 'Adulto' : 'Menor';

Buena práctica: Úsalo para asignaciones simples, no para lógica compleja.

Operador de propagación (...) y resto

Propagación: Copia elementos de arrays u objetos.
javascriptconst arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

Resto: Recoge elementos restantes en una variable.
javascriptconst [first, ...rest] = [1, 2, 3, 4]; // first = 1, rest = [2, 3, 4]

## 5. Operadores Adicionales

### Operador Condicional (Ternario)

#### Sintaxis
`condición ? valorSiVerdadero : valorSiFalso`

#### Ejemplo
```javascript
const status = age >= 18 ? 'Adulto' : 'Menor';
```

#### Buena Práctica
Úsalo para asignaciones simples, no para lógica compleja.

### Operador de Propagación (`...`) y Resto

#### Propagación
Copia elementos de arrays u objetos.

```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }
```

#### Resto
Recoge elementos restantes en una variable.

```javascript
const [first, ...rest] = [1, 2, 3, 4]; // first = 1, rest = [2, 3, 4]
```

### Operador Opcional (`?.`) (ES2020+)

Evita errores al acceder a propiedades de objetos que podrían ser `null` o `undefined`.

#### Ejemplo
```javascript
const name = user?.profile?.name ?? 'Anónimo';
```

#### Buena Práctica
Úsalo para simplificar verificaciones de propiedades anidadas.

### Operador `typeof`

Devuelve el tipo de un valor como string.

#### Ejemplo
```javascript
console.log(typeof 42);        // 'number'
console.log(typeof undefined); // 'undefined'
```

#### Precaución
`typeof null` devuelve `'object'` (error histórico).

### Operador `instanceof`

Verifica si un objeto es instancia de una clase o constructor.

#### Ejemplo
```javascript
class MyClass {}
const obj = new MyClass();
console.log(obj instanceof MyClass); // true
```

### Operador `in`

Verifica si una propiedad existe en un objeto.

#### Ejemplo
```javascript
const obj = { a: 1 };
console.log('a' in obj); // true
```

### Operador `delete`

Elimina una propiedad de un objeto.

#### Ejemplo
```javascript
const obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj); // { b: 2 }
```

## 6. Buenas Prácticas con Operadores

### Prefiere Claridad sobre Brevedad

Evita operadores complejos en una sola línea; divídelos si mejora la legibilidad.

```javascript
// ❌ Difícil de leer
let result = a && b || c ? x * y : z ** 2;

// ✅ Mejor
const isValid = a && (b || c);
const result = isValid ? x * y : z ** 2;
```

### Evita Coerción Implícita

Usa `===` en lugar de `==` y parsea valores explícitamente si es necesario.

```javascript
// ❌ Coerción implícita
if (userId == currentId) { /* ... */ }

// ✅ Explícito
const num = Number('42');
if (userId === currentId) { /* ... */ }
```

### Usa Operadores Modernos

Aprovecha `??`, `?.`, `||=`, `??=` para simplificar código y reducir errores.

```javascript
// ❌ Código verboso
if (user && user.profile && user.profile.name) {
  name = user.profile.name;
} else {
  name = 'Anónimo';
}

// ✅ Con operador opcional y nullish coalescing
const name = user?.profile?.name ?? 'Anónimo';
```

### Minimiza el Uso de Operadores Bit a Bit

Úsalos solo en casos específicos (como optimización extrema), ya que son menos legibles.

#### Ejemplo de Uso Válido
Manipulación de flags en sistemas embebidos.

### Prueba Casos Extremos

Asegúrate de que los operadores manejen valores como `null`, `undefined`, `0`, o `''`.

```javascript
// Test para evitar errores
test('handles null input', () => {
  expect(() => calculate(null, 5, 'add')).toThrow(TypeError);
});
```

### Usa Linters

Configura herramientas como ESLint para que te ayuden a mantener un código consistente y libre de errores comunes.

```javascript
// Ejemplo de configuración de ESLint para operadores
module.exports = {
  rules: {
    'eqeqeq': ['error', 'always'],
    'no-bitwise': 'warn',
    'no-param-reassign': 'error',
    // Otras reglas relevantes...
  }
};
```
Configura ESLint con reglas como "no-implicit-coercion" o "eqeqeq" para detectar usos incorrectos de operadores.