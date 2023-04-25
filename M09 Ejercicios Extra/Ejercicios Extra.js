/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  newArray = [];
  var keys = Object.keys(objeto);
  for (var i = 0; i < keys.length; i++) {
    newArray.push([keys[i], objeto[keys[i]]]);
  }
  return newArray;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var object = {};
  var array = string.split("").sort();
  for (var i = 0; i < array.length; i++) {
    array[i] in object ? object[array[i]]++ : (object[array[i]] = 1);
  }
  return object;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var left = [];
  var rigth = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      rigth.push(string[i]);
    } else if (string[i] !== string[i].toUpperCase()) {
      left.push(string[i]);
    }
  }
  return rigth.join("") + left.join("");
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var array = frase.split(" ");
  var result = [];
  array.forEach((string) => {
    result.push(string.split("").reverse().join(""));
  });
  return result.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var numToString = numero.toString();
  izq = [];
  der = [];

  for (
    var i = 0, j = numToString.length - 1;
    i < numToString.length && j >= 0;
    i++, j--
  ) {
    izq.push(numToString[i]);
    der.push(numToString[j]);
  }
  return izq.join("") === der.join("") ? "Es capicua" : "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  newArray = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== "a" && string[i] !== "b" && string[i] !== "c") {
      newArray.push(string[i]);
    }
  }
  return newArray.join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort((a,b)=> a.length - b.length);
  
}


function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  if (array1.length >= array2.lenght) { 
    var starArray = array2;
      var compareArray = array1;
    } starArray = array1;
      compareArray = array2
      var arrayToShow = [];
    for (var i = 0; i < starArray.length; i++) {
     if (compareArray.includes(starArray[i])) {
       arrayToShow.push(starArray[i])
     }
    }
      return arrayToShow;
    }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
