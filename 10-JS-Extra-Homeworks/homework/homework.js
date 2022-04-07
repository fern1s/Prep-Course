// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = Object.entries(objeto);
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
 
  var letra = string.split(""); //divide la string en las letritas y lo pone en un array, usando el metodo del String.prototype split()
 
 var objeto = {}
 
 var contador = 1;
 
  for(i=0; i < letra.length; i++) {  // s k t p w r r o q s t k r p w w s q t q o p w k t s d
   if (letra[i] === letra[i + 1]) {
    contador++;
   }

   else if (contador > 1 && objeto[letra[i]] > 0) {   //si la letra ya está registrada Y el contador viene sumando, se suma el contador al valor previo registrado en la letra
     objeto[letra[i]] = objeto[letra[i]] + contador;
     contador = 1; 
   }
   else if (contador > 1) {                           //si la letra no fue registrada antes en el objeto, y el contador esta acumulado, etc
    objeto[letra[i]] = contador;
    contador = 1;
  }

   else if ( objeto[letra[i]] > 0) {                  //el contador no acumula pero la letra ha sido registrada antes
    objeto[letra[i]] = ++objeto[letra[i]];
   }
   else {
     objeto[letra[i]] = 1;
   }
 } 
 return objeto; 
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var matrizMayus = [];
  var matrizLower = []
  for (i=0; i<s.length; i++) {
    if (s.charAt(i).toUpperCase() === s.charAt(i)) {
      matrizMayus.push(s.charAt(i));
    }
    else {
      matrizLower.push(s.charAt(i));
    }
  }
  var ultiMatriz = matrizMayus.concat(matrizLower);
  return ultiMatriz.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
 
  var primerSeparador = str.split(" ");                 //separo la string en sus palabras, creando un array
  var objeto = {};
  primerSeparador.forEach(function(value, index) {
    var array = primerSeparador.slice(index,index+1);
    objeto[index] = array;                                //separo el array que contiene las palabras como elementos -
  })                                                      //- en pequeños arrays de una palabra, y los añado a un objeto como propiedades

  for (let propiedad in objeto) {
    objeto[propiedad] = objeto[propiedad].join("")        //transformo el valor de cada propiedad en el objeto de matriz a string,
  }                                                       // para poder utilizar luego el metodo charAt()
  var nuevoArray = [];
  
  for (let propiedad in objeto) {
    var reverso = objeto[propiedad].charAt(objeto[propiedad].length)
    for (i = objeto[propiedad].length-1; i > -1; i--) {
      var caracter = objeto[propiedad].charAt(i);                //dentro de un for in, itero sobre cada caracter de la string, de adelante hacia
      reverso = reverso + caracter;                             // atrás, creando una nueva string con la palabra revertida
    }
    nuevoArray.push(reverso);                                  //cuando termina de iterar sobre cada caracter y forma el reverso, lo pusheo
  }                                                           // como elemento de una nueva matriz
  return nuevoArray.join(" ");                               //cuando termina de iterar sobre cada propiedad, la nueva matriz ya contiene cada
}                                                           // palabra espejada, y solo falta unir la matriz en una string con join(" ")


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var lmao = numero.toString()
  for (i = 0; i < lmao.length; i++){
  if (lmao.charAt(i) === lmao.charAt(lmao.length -1 - i)) {
    continue;
  }
  else if (lmao.charAt(i) !== lmao.charAt(lmao.length -1 - i)) {
   return "No es capicua"
  }
}
return "Es capicua"
}
/* OTRA forma de hacerlo:
var numeroInvertido = Number(numero.toString().split("").reverse().join(""))
if (numero === numeroInvertido) { return "Es capicua"}
else { return "No es capicua"}
esta forma transforma el numero en string, y luego lo splitea en una matriz con las letras por elementos, luego utiliza el metodo de arrays
.reverse(), que invierte el orden de los elementos de un array. luego los junta y compara si son iguales. forma más concisa. */


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var x1 = cadena.replaceAll("a","")      //replaceAll remplaza todas las ocurrencias de (primer arg) por (2do argumento)
  var x2 = x1.replaceAll("b","");
  var x3 = x2.replaceAll("c","");
  return x3;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var x2 = arr.sort(function compare(a,b) {
    if (a.length > b.length) {
      return 1
    }
    if (a.length === b.length) {
      return 0
    }
    if (a.length < b.length) {
      return -1
    }
  })
  return x2;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var ñ = arreglo1.concat(arreglo2);
  var matriz = [];
  for (i=0; i < ñ.length; i++) {
    if (ñ.indexOf(ñ[i]) === ñ.lastIndexOf(ñ[i]) ) {
      continue;
    }
    if (!matriz.includes(ñ[i])) { 
      matriz.push(ñ[i]) 
    }
  }
  return matriz;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

