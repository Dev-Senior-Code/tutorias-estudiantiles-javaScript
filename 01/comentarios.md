# Cómo crear comentarios correctamente en JavaScript
Los comentarios en JavaScript son esenciales para documentar el código, explicar su propósito y hacerlo más comprensible para otros desarrolladores (o para ti mismo en el futuro). Hay dos tipos principales de comentarios, y se deben usar con propósito para evitar ruido innecesario.

### Tipos de comentarios

#### Comentarios de una línea (`//`)
Usados para explicaciones cortas o aclaraciones específicas.

```javascript
// Calcula el total con impuestos
const totalWithTax = price * 1.19;
```

#### Comentarios de bloque (`/* */`)
Usados para explicaciones más largas o para documentar secciones completas. También útiles para desactivar temporalmente bloques de código durante la depuración.

```javascript
/*
 Este módulo maneja la autenticación de usuarios.
 Incluye funciones para login y logout.
 @version 1.0.0
*/
function login(user) {
  /* TODO: Implementar validación de credenciales */
  return true;
}
```

#### Comentarios JSDoc
Un estándar para documentar funciones, clases y módulos con formato estructurado, compatible con herramientas de documentación como JSDoc o TypeScript. Usado para describir parámetros, tipos, valores de retorno, y más.

```javascript
/**
 * Calcula el área de un círculo dado su radio.
 * @param {number} radius - El radio del círculo.
 * @returns {number} El área del círculo.
 * @throws {Error} Si el radio es negativo.
 */
function calculateCircleArea(radius) {
  if (radius < 0) throw new Error('Radius must be non-negative');
  return Math.PI * radius ** 2;
}
```

### Buenas prácticas para comentarios

1. **Comenta el "por qué", no el "qué"**: Evita comentarios redundantes que describan lo obvio.
   - ❌ Mal: `// Incrementa el contador en 1`
   - ✅ Bien: `// Incrementa el contador para rastrear intentos fallidos`

2. **Usa JSDoc para documentación formal**: Especialmente en funciones, clases o módulos que serán reutilizados o expuestos en una API.

3. **Mantén comentarios actualizados**: Un comentario desactualizado es peor que no tener comentarios.

4. **Evita comentarios excesivos**: No comentes cada línea; confía en que el código bien escrito es autoexplicativo.

5. **Usa comentarios para secciones**: Divide el archivo en secciones lógicas con comentarios de bloque.

```javascript
// === Configuración ===
const CONFIG = { apiUrl: 'https://api.example.com' };

// === Funciones principales ===
function fetchData() { /* ... */ }
```

6. **Evita comentarios en producción**: Usa herramientas como terser o uglify para eliminar comentarios al minificar el código.

7. **Usa TODOs o FIXMEs para tareas pendientes**:
   ```javascript
   // TODO: Agregar soporte para autenticación OAuth
   ```

---

## 2. Condicionales en JavaScript

### Introducción
Los condicionales controlan el flujo de ejecución del programa, permitiendo ejecutar diferentes bloques de código según condiciones específicas. JavaScript ofrece varias estructuras para manejar condicionales.

### Estructuras condicionales

#### if / else if / else
La estructura más común para evaluar condiciones.

```javascript
const age = 20;
if (age >= 18) {
  console.log('Es mayor de edad');
} else if (age >= 13) {
  console.log('Es adolescente');
} else {
  console.log('Es menor de edad');
}
```

#### switch
Útil para comparar una expresión contra múltiples casos posibles.

```javascript
const day = 'lunes';
switch (day) {
  case 'lunes':
    console.log('Inicio de semana');
    break;
  case 'viernes':
    console.log('Fin de semana');
    break;
  default:
    console.log('Día normal');
}
```

#### Operador ternario (`?:`)
Una forma compacta de escribir condicionales simples.

```javascript
const isAdult = age >= 18 ? 'Adulto' : 'Menor';
console.log(isAdult); // Adulto
```

#### Operadores lógicos para condicionales implícitas
Usa `&&`, `||`, o `??` para asignaciones condicionales o valores por defecto.

```javascript
const name = userName || 'Anónimo'; // Usa 'Anónimo' si userName es falsy
const config = userConfig ?? { theme: 'dark' }; // Usa valor por defecto si userConfig es null/undefined
```

---

## 3. Flujos de control en JavaScript

### Introducción
Además de los condicionales, JavaScript ofrece otras estructuras para controlar el flujo del programa, como bucles y manejo de excepciones.

### Bucles

#### for
Ideal para iterar un número fijo de veces.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(`Iteración ${i}`);
}
```

#### for...of
Para iterar sobre elementos iterables (arrays, strings, etc.).

```javascript
const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}
```

#### for...in
Para iterar sobre las propiedades enumerables de un objeto (menos común en arrays).

```javascript
const user = { name: 'Alice', age: 30 };
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

#### while
Ejecuta mientras una condición sea verdadera.

```javascript
let count = 0;
while (count < 3) {
  console.log(`Count: ${count}`);
  count++;
}
```

#### do...while
Similar a while, pero garantiza al menos una ejecución.

```javascript
let i = 0;
do {
  console.log(`i: ${i}`);
  i++;
} while (i < 3);
```

#### Métodos funcionales (forEach, map, filter, etc.)
Métodos funcionales para iterar arrays, preferidos en código moderno por su claridad.

```javascript
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));
const doubled = numbers.map(num => num * 2); // [2, 4, 6]
```

### Manejo de excepciones

#### try / catch
Para manejar errores en operaciones riesgosas (como APIs o I/O).

```javascript
try {
  const data = JSON.parse(invalidJson); // Provoca error
} catch (error) {
  console.error('Error parsing JSON:', error.message);
} finally {
  console.log('Esto se ejecuta siempre');
}
```

#### throw
Lanza errores personalizados.

```javascript
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}
```

### Flujos asíncronos

#### Promesas
Manejan operaciones asíncronas como promesas.

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

#### async / await
Simplifica el manejo de promesas, haciendo el código más legible.

```javascript
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## 4. Buenas prácticas para condicionales y flujos de control

### Condicionales

#### Usa `===` en lugar de `==`
Evita conversiones de tipo implícitas.

```javascript
// Mal
if (value == 0) { /* ... */ }
// Bien
if (value === 0) { /* ... */ }
```

#### Simplifica con ternarios para casos simples

```javascript
// Mal
let status;
if (isActive) {
  status = 'Active';
} else {
  status = 'Inactive';
}
// Bien
const status = isActive ? 'Active' : 'Inactive';
```

#### Evita anidamiento profundo
Usa guard clauses (retornos tempranos) para reducir la complejidad.

```javascript
// Mal
function processUser(user) {
  if (user) {
    if (user.age >= 18) {
      console.log('Usuario válido');
    }
  }
}

// Bien
function processUser(user) {
  if (!user || user.age < 18) return;
  console.log('Usuario válido');
}
```

#### Usa switch con moderación
Prefiere if/else o mapas de objetos para lógica compleja.

```javascript
// Mejor que switch
const actions = {
  start: () => console.log('Starting...'),
  stop: () => console.log('Stopping...'),
};
actions[action]?.() ?? console.log('Acción desconocida');
```

### Bucles

#### Prefiere métodos funcionales
Usa forEach, map, filter, etc. para arrays, ya que son más declarativos.

```javascript
// Mal
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
// Bien
const sum = numbers.reduce((acc, num) => acc + num, 0);
```

#### Evita bucles infinitos
Siempre verifica las condiciones de salida.

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++; // ¡No olvides incrementar!
}
```

#### Usa for...of para arrays y for...in para objetos
Evita errores de iteración.

### Manejo de excepciones

#### Usa try/catch solo para errores esperados
No lo uses como control de flujo general.

```javascript
// Mal
try {
  if (!data) throw new Error('No data');
} catch (error) {
  console.error(error);
}

// Bien
if (!data) {
  console.error('No data');
  return;
}
```

#### Especifica errores
Lanza errores específicos para facilitar la depuración.

```javascript
throw new TypeError('Expected a number');
```

### Flujos asíncronos

#### Prefiere async/await sobre .then
Es más legible y fácil de manejar errores.

```javascript
async function fetchData() {
  try {
    const data = await fetch('https://api.example.com/data').then(res => res.json());
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }
}
```

#### Evita promesas anidadas
Usa Promise.all para operaciones paralelas.

```javascript
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts(),
]);
```

### General

1. **Mantenlo simple**: Evita lógica compleja en condicionales o bucles; refactoriza en funciones.
2. **Usa linters**: Configura ESLint con reglas como "no-else-return" o "no-loop-func" para detectar malas prácticas.
3. **Escribe pruebas**: Asegúrate de que los flujos de control estén cubiertos por pruebas unitarias.

```javascript
// Ejemplo con Jest
test('should handle invalid input', () => {
  expect(() => divide(10, 0)).toThrow('Division by zero');
});