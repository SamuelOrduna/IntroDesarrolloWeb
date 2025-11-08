/** Imprime saludo personalizado.
 *  Salida por consola.
 */
function saludarUsuario(nombre) {
  return console.log(
    "Hola " + nombre + "! Bievenido al curso de programación."
  );
}

/** Devielve una cadena repetida 'veces' veces, separada por espacios.*/
function repetirTexto(texto, veces) {
    return Array(veces).fill(texto).join(' ');
}

/** Comento la prueba de mi función */
// repetirTexto("Hola",3);

/** Explicación:
 *  1.- La función Array() crea un arreglo vacío.
 *  2.- Luego con .fill(texto) lleno el arreglo con ese texto en todos los elementos.
 *  3.- Finalmente con .join(separador) une todos los elementos con lo que pongas como separador.
*/ 

function invertirPalabra(palabra){
    return palabra.split('').reverse().join('');
}

/**
 * Explicación:
 * 1.- split('') hace que el string me lo convierta en un arreglo separado por cada caracter.
 * 2.- reverse() invierte el arreglo-
 * 3.- con join('') uno los eleemtnos del arreglo invertido y los junta.
 */

function contarVocales(texto) {
  let contador = 0;
  const vocales = "aeiou";
  for (let letra of texto.toLowerCase()) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }
  return contador;
}

/**
 * Explicación:
 * 1.- Convierto el texto a minúsculas para simplificar la comparación.
 * 2.- Recorro cada letra usando un for..
 * 3.- Uso .includes() para verificar si la letra está en la cadena de vocales.
 * 4.- Si es vocal, incremento el contador.
 */

function mayusculasYMinusculas(texto) {
  return [texto.toUpperCase(), texto.toLowerCase()];
}

/**
 * Explicación:
 * 1.- .toUpperCase() convierte todo el texto a mayúsculas.
 * 2.- .toLowerCase() lo convierte a minúsculas.
 * 3.- Devuelvo ambos valores dentro de un arreglo.
 */

function promedioLista(numeros) {
  if (numeros.length === 0) return 0;
  const suma = numeros.reduce((acc, n) => acc + n, 0);
  return suma / numeros.length;
}

/**
 * Explicación:
 * 1.- Si la lista está vacía, retorno 0.
 * 2.- Uso .reduce() para sumar todos los elementos.
 * 3.- Divido entre la longitud del arreglo.
 */

function maximoYMinimo(numeros) {
  return [Math.max(...numeros), Math.min(...numeros)];
}

/**
 * Explicación:
 * 1.- Math.max() y Math.min() calculan el valor máximo y mínimo.
 * 2.- El operador spread (...) expande el arreglo para pasarlo como argumentos.
 */

function filtrarPares(numeros) {
  return numeros.filter((n) => n % 2 === 0);
}

/**
 * Explicación:
 * 1.- .filter() crea un nuevo arreglo con los elementos que cumplen la condición.
 * 2.- La condición es que el número sea divisible entre 2.
 */

function sumarElementosTexto(listaTextos) {
  return listaTextos.join(" ");
}

/**
 * Explicación:
 * 1.- .join(" ") une todos los elementos del arreglo separados por un espacio.
 */

function buscarElemento(lista, elemento) {
  return lista.includes(elemento);
}

/**
 * Explicación:
 * 1.- .includes() devuelve true si el elemento está en el arreglo.
 * 2.- Si no está, devuelve false.
 */

function contarPalabras(frase) {
  const palabras = frase.trim().split(/\s+/);
  return palabras.length;
}

/**
 * Explicación:
 * 1.- trim() elimina espacios al inicio y al final.
 * 2.- split(/\s+/) divide por uno o más espacios.
 * 3.- Devuelvo la cantidad de palabras usando .length.
 */

function duplicarElementos(lista) {
  return lista.map((x) => x * 2);
}

/**
 * Explicación:
 * 1.- .map() transforma cada elemento según la función que se le pasa.
 * 2.- Aquí multiplico cada valor por 2.
 */

function capitalizarPalabras(frase) {
  return frase
    .split(" ")
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(" ");
}

/**
 * Explicación:
 * 1.- split(" ") separa la frase en palabras.
 * 2.- Para cada palabra, convierto la primera letra a mayúscula.
 * 3.- slice(1) conserva el resto.
 * 4.- join(" ") une todo de nuevo.
 */

function mezclarListas(lista1, lista2) {
  const combinada = [];
  const longitud = Math.min(lista1.length, lista2.length);
  for (let i = 0; i < longitud; i++) {
    combinada.push(lista1[i], lista2[i]);
  }
  return combinada;
}

/**
 * Explicación:
 * 1.- Uso un bucle for con el índice más corto de las dos listas.
 * 2.- En cada iteración agrego un elemento de cada lista.
 */

function contarFrecuencia(lista) {
  const conteo = {};
  for (let item of lista) {
    if (conteo[item]) {
      conteo[item]++;
    } else {
      conteo[item] = 1;
    }
  }
  return conteo;
}

/**
 * Explicación:
 * 1.- Creo un objeto vacío.
 * 2.- Recorro la lista y verifico si el elemento ya existe como clave.
 * 3.- Si existe, incremento el contador, y ps si no, lo inicializo en 1.
 */

