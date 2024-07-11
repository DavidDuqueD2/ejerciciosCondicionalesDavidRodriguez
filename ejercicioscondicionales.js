

// Ejercicio 1. Comparar dos número

let numero1 = 4;
let numero2 = 5;
let numero3 = 6;

if (numero1 > numero2) {
    console.log("El primer número es mayor que el segundo");
}   else if (numero1 < numero2) {
    console.log("El primer número es menor que el segundo");
}


// Ejercicio 2. Comparar dos número iguales o diferentes


if (numero1 === numero2) {
    console.log("Los números son iguales.");
  } else {
    console.log("Los números son diferentes.");
  }

  
  // Ejercicio 3. imprima por consola cual de los 2 numeros
  // es el mas grande o si son iguales.

  switch (true) {
    case numero1 > numero2:
      console.log("El primer número (" + numero1 + ") es mayor que el segundo (" + numero2 + ").");
      break;
    case numero1 < numero2:
      console.log("El segundo número (" + numero2 + ") es mayor que el primero (" + numero1 + ").");
      break;
    default:
      console.log("Los números son iguales: " + numero1 + " = " + numero2);
  }

  
  // Ejercicio 4. dado 3 números imprima por pantalla cual de los 3 es el más
    //chico.

  if (numero1 <= numero2 && numero1 <= numero3) {
    console.log("El número más pequeño es:", numero1);
  } else if (numero2 <= numero1 && numero2 <= numero3) {
    console.log("El número más pequeño es:", numero2);
  } else {
    console.log("El número más pequeño es:", numero3);
  }

  //Ejercicio 5. Comparacion de 2 objetos

  let persona1 = {
    nombre: "Ana",
    edad: 30,
    altura: 165
  };
  
  let persona2 = {
    nombre: "Maria",
    edad: 28,
    altura: 175
  };

  // Comparación de alturas
if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre + " es más alta que " + persona2.nombre + ".");
  } else if (persona1.altura < persona2.altura) {
    console.log(persona2.nombre + " es más alta que " + persona1.nombre + ".");
  } else {
    console.log("Ambas personas tienen la misma altura.");
  }
  
  // Comparación de edades
  if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es mayor que " + persona2.nombre + ".");
  } else if (persona1.edad < persona2.edad) {
    console.log(persona2.nombre + " es mayor que " + persona1.nombre + ".");
  } else {
    console.log("Ambas personas tienen la misma edad.");
  }

 //Ejercicio 6. Condicionales para conducir
  
  // Solicitar datos al usuario 
/* let nombre = prompt("Ingresa tu nombre:");
let edad = parseInt(prompt("Ingresa tu edad:")); // Convertir a número entero
let altura = parseInt(prompt("Ingresa tu altura en centímetros:")); // Convertir a número entero
let vision = parseFloat(prompt("Ingresa tu visión (de 0 a 10):")); // Convertir a número decimal

// Verificar si cumple con los requisitos para conducir
if (edad >= 18 && altura >= 150 && vision >= 8) {
  console.log(nombre + ", estás capacitado para conducir.");
} else {
  console.log(nombre + ", no cumples con los requisitos para conducir.");
} */

/* //Ejercicio 7. Condicionales para comprar entrada

// Solicitar datos al usuario
let nombre = prompt("Ingresa tu nombre:");
let pase = prompt("¿Tienes un pase? (vip o normal):");
let tieneEntrada = prompt("¿Tienes entrada? (si o no):");

// Verificar si el nombre es "David" o tiene un pase vip
switch (true) {
  case nombre.toLowerCase() === "david" || pase.toLowerCase() === "vip":
    console.log("¡Bienvenido/a, " + nombre + "! Tienes acceso.");
    if (tieneEntrada.toLowerCase() === "si") {
      console.log("¡Disfruta del evento!");
    }
    break;
  default:
    let comprarEntrada = prompt("¿Deseas comprar una entrada? (si o no):");
    if (comprarEntrada.toLowerCase() === "si") {
      let dineroDisponible = parseFloat(prompt("¿Cuánto dinero tienes disponible?"));
      if (dineroDisponible >= 1000) {
        console.log("¡Venta exitosa! Bienvenido/a, " + nombre + ".");
      } else {
        console.log("Lo siento, no tienes suficiente dinero para comprar una entrada.");
      }
    } else {
      console.log("Gracias por visitarnos. ¡Hasta luego!");
    }
} */





/* // Ejercicio 8. Adivina el número

// Generar un número aleatorio entre 1 y 10
const numeroIncognita = Math.floor(Math.random() * 10) + 1;

// Intentos disponibles
let intentos = 3;

// Pedir al usuario que ingrese un número
const numeroIngresado1 = prompt("Ingresa un número del 1 al 10:");

if (numeroIngresado1 === numeroIncognita) {
  console.log("¡Ganaste! ¡Has adivinado el número!");
} else {
  if (numeroIngresado1 < numeroIncognita) {
    console.log("El número ingresado es menor. Vuelve a intentarlo.");
  } else {
    console.log("El número ingresado es mayor. Vuelve a intentarlo.");
  }

  intentos--;

  const numeroIngresado2 = prompt("Ingresa otro número del 1 al 10:");

  if (numeroIngresado2 === numeroIncognita) {
    console.log("¡Ganaste! ¡Has adivinado el número!");
  } else {
    if (numeroIngresado2 < numeroIncognita) {
      console.log("El número ingresado es menor. Vuelve a intentarlo.");
    } else {
      console.log("El número ingresado es mayor. Vuelve a intentarlo.");
    }

    intentos--;

    const numeroIngresado3 = prompt("Ingresa un último número del 1 al 10:");

    if (numeroIngresado3 === numeroIncognita) {
      console.log("¡Ganaste! ¡Has adivinado el número!");
    } else {
      console.log("¡Agotaste tus intentos! El número era " + numeroIncognita + ".");
    }
  }
} */


/* // Ejercicio 9. Clasificación de edad

// Pedir al usuario que ingrese su edad
let edadIngresada = prompt("Ingresa tu edad:");

// Verificar la clasificación de edad
if (edadIngresada >= 0 && edadIngresada <= 12) {
  console.log("Eres un infante.");
} else if (edadIngresada <= 18) {
  console.log("Eres un adolescente.");
} else if (edadIngresada <= 45) {
  console.log("Eres un mayor joven.");
} else if (edadIngresada >= 45 && edadIngresada<= 100) {
  console.log("Eres una persona de la tercera edad");
} else if (edadIngresada > 100) {
  let respuesta = prompt("¿En realidad tienes más de 100 años? (Sí/No):");
  if (respuesta.toLowerCase() === "si") {
    console.log("Wow, eres una persona muy longeva.");
  } else {
    console.log("Por favor, ingresa una edad válida.");
  }
} */

/* // Ejercicio 10. Piedra, papel o tijeras

// Pedir al jugador 1 que ingrese su elección
let jugador1 = prompt("Jugador 1, ingresa 'PIEDRA', 'PAPEL' o 'TIJERAS':");

// Pedir al jugador 2 que ingrese su elección
let jugador2 = prompt("Jugador 2, ingresa 'PIEDRA', 'PAPEL' o 'TIJERAS':");

// Verificar las elecciones y determinar el ganador
if (jugador1 === jugador2) {
  console.log("¡Empate! Ambos jugadores han elegido lo mismo.");
} else if (
  (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
  (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
  (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
) {
  console.log("¡Jugador 1 gana! " + jugador1 + " vence a " + jugador2 + ".");
} else if (
  (jugador2 === "PIEDRA" && jugador1 === "TIJERAS") ||
  (jugador2 === "PAPEL" && jugador1 === "PIEDRA") ||
  (jugador2 === "TIJERAS" && jugador1 === "PAPEL")
) {
  console.log("¡Jugador 2 gana! " + jugador2 + " vence a " + jugador1 + ".");
} else {
  console.log("¡Alguien ha hecho trampa! Ingresa solo 'PIEDRA', 'PAPEL' o 'TIJERAS'.");
}
 */

/* // Ejercicio 11. Color 


// Pedir al usuario que ingrese un color
let colorIngresado = prompt("Ingresa un color:").toLowerCase();

// Mostrar mensajes según el color ingresado
switch (colorIngresado) {
  case "blanco":
  case "negro":
    console.log("Falta de color.");
    break;
  case "verde":
    console.log("El color de la naturaleza.");
    break;
  case "azul":
    console.log("El color del agua.");
    break;
  case "amarillo":
    console.log("El color del sol.");
    break;
  case "rojo":
    console.log("El color del fuego.");
    break;
  case "marrón":
    console.log("El color de la tierra.");
    break;
  default:
    console.log("Excelente elección, no lo teníamos pensado.");
} */



/* // Ejercicio 12. Calculadora

// Pedir al usuario que ingrese dos valores numéricos y una operación
let valor1 = prompt("Ingresa el primer valor:");
let valor2 = prompt("Ingresa el segundo valor:");
let operacion = prompt("Ingresa la operación (suma, resta, multiplicación, división):").toLowerCase();

let resultado;

// Realizar la operación según la opción ingresada
switch (operacion) {
  case "suma":
    resultado = valor1 + valor2;
    console.log(`El resultado de la suma es: ${resultado}`);
    break;
  case "resta":
    resultado = valor1 - valor2;
    console.log(`El resultado de la resta es: ${resultado}`);
    break;
  case "multiplicación":
    resultado = valor1 * valor2;
    console.log(`El resultado de la multiplicación es: ${resultado}`);
    break;
  case "división":
    if (valor2 !== 0) {
      resultado = valor1 / valor2;
      console.log(`El resultado de la división es: ${resultado}`);
    } else {
      console.log("ERROR: No se puede dividir entre 0.");
    }
    break;
  default:
    console.log("Operación no válida. Ingresa 'suma', 'resta', 'multiplicación' o 'división'.");
} */


// Ejercicio 13. Documento de identidad

// Pedir al usuario que ingrese los datos del DNI
const nombre = prompt("Ingresa tu nombre:");
const apellido = prompt("Ingresa tu apellido:");
const numeroDNI = prompt("Ingresa tu número de DNI:");
const fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (DD/MM/AAAA):");

// Mostrar los datos ingresados
console.log("Datos ingresados:");
console.log(`Nombre: ${nombre}`);
console.log(`Apellido: ${apellido}`);
console.log(`Número de DNI: ${numeroDNI}`);
console.log(`Fecha de nacimiento: ${fechaNacimiento}`);

// Preguntar si los datos son correctos
let confirmacion = prompt("¿Son correctos los datos? (Sí/No):").toLowerCase();

if (confirmacion === "sí") {
  // Crear un objeto "dni" con los datos ingresados
  let dni = {
    Nombre: nombre,
    Apellido: apellido,
    "Número de DNI": numeroDNI,
    "Fecha de nacimiento": fechaNacimiento,
  };

  // Mostrar los datos del DNI con console.table()
  console.table(dni);
  console.log("Registro exitoso. ¡Bienvenido!");
} else {
  console.log("Vuelve a intentarlo en 1 mes.");
}

