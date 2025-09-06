# Declaración de variables en JavaScript

JavaScript ofrece tres formas principales de declarar variables: `var`, `let`, y `const`. Cada una tiene su caso de uso, pero las prácticas modernas priorizan `let` y `const`.

## `const`

### Uso
Para valores que no serán reasignados (inmutables en cuanto a la referencia, no el contenido).

### Ventajas
- Mejora la claridad
- Evita reasignaciones accidentales

### Buena práctica
Úsalo como predeterminado para cualquier variable que no necesite cambiar.

### Ejemplo
```javascript
const API_KEY = 'abc123';
const settings = { debug: true }; // El objeto puede modificarse, pero no la referencia
settings.debug = false; // OK
// API_KEY = 'xyz789'; // Error: No se puede reasignar
```

## `let`

### Uso
Para variables que cambiarán de valor (reasignables) dentro de un bloque.

### Ventajas
- Tiene alcance de bloque (block-scoped)
- Evita problemas comunes con `var`

### Buena práctica
Úsalo solo cuando necesites reasignar el valor.

### Ejemplo
```javascript
let counter = 0;
counter += 1; // OK

if (true) {
  let scopedVar = 'Solo visible aquí';
  console.log(scopedVar); // OK
}
// console.log(scopedVar); // Error: scopedVar no está definido
```

## `var` (Evitar en código moderno)

### Uso
Declaración antigua, con alcance de función (function-scoped) o global.

### Problemas
- Puede causar errores por su comportamiento de "hoisting"
- Falta de alcance de bloque

### Buena práctica
Evítalo a menos que trabajes en código legacy.

### Ejemplo (para ilustrar problemas)
```javascript
var x = 10;
if (true) {
  var x = 20; // Sobreescribe la x externa
  console.log(x); // 20
}
console.log(x); // 20 (¡no 10!)
```

## Mejores prácticas para declarar variables

1. Usa `const` por defecto
2. Usa `let` solo cuando necesites reasignación
3. Evita `var` en código nuevo
4. Nombra variables de forma descriptiva usando `camelCase` (ejemplo: `userName`, `totalPrice`)
5. Declara variables cerca de donde se usan para mejorar la legibilidad

---

# Mostrar resultados en consola

La consola del navegador (o Node.js) es una herramienta clave para depurar y mostrar resultados. El objeto `console` ofrece varios métodos útiles:

## `console.log`

### Uso
General para mostrar información.

### Ejemplo
```javascript
console.log('Mensaje simple:', 42);
console.log('Objeto:', { name: 'Alice', age: 30 });
```

## `console.error`

### Uso
Para errores o advertencias críticas.

### Ejemplo
```javascript
console.error('Error: No se pudo conectar a la API');
```

## `console.warn`

### Uso
Para advertencias no críticas.

### Ejemplo
```javascript
console.warn('Advertencia: Configuración obsoleta');
```

## `console.table`

### Uso
Ideal para mostrar datos tabulares (arrays u objetos).

### Ejemplo
```javascript
const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];
console.table(users);
```

## `console.group` / `console.groupEnd`

### Uso
Agrupa mensajes para mejor organización.

### Ejemplo
```javascript
console.group('User Data');
console.log('Name: Alice');
console.log('Age: 30');
console.groupEnd();
```

## `console.time` / `console.timeEnd`

### Uso
Mide el tiempo de ejecución de un bloque de código.

### Ejemplo
```javascript
console.time('loop');
for (let i = 0; i < 1000; i++) {} // Operación
console.timeEnd('loop'); // Muestra el tiempo transcurrido
```

## Buenas prácticas para consola

1. Usa `console.log` para depuración general, pero evita dejarlo en producción (puede afectar el rendimiento)
2. Usa `console.error` y `console.warn` para indicar problemas específicos
3. Aprovecha `console.table` para datos estructurados
4. Limpia los `console.log` innecesarios antes de deployar (puedes usar herramientas como ESLint o terser para eliminarlos automáticamente)
5. En entornos de producción, considera usar un sistema de logging (como Winston en Node.js) en lugar de `console`