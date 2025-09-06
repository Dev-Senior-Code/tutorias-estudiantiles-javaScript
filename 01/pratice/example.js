// Ejercicio simple

let edad = 20;

if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

// Operador ternario.
let esAdulto = edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad';
console.log(esAdulto);


const day = 'Sabado';
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

for (let i = 1; i <= 5; i++) {
  console.log(`Iteración ${i}`);
}

