'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factor = [1];
  let div = 2;
  while (num > 1){
    if (num % div === 0){
      factor.push(div)
      num /= div;
    }else{
      div++
    }
  }
  return factor
}

function inOrderAsc(array){ //valida si el array pasado está ordenado ascendentemente
  return array.every(function(_, i){ //.every es un método que valida que cada valor del array cumpla true en el callback | "_" es el nombre de una funcion sin relevancia
    return i == 0 || array[i] >= array[i-1]; //retorna true en el callback si
  });
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  while(!inOrderAsc(array)){
    for (let i = 0; i < array.length; i++) {
      if(array[i] > array[i+1]){
        let value = array[i];
        array[i] = array[i+1];
        array[i+1] = value;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let j = i-1;
    let aux = array[i];
    while(j >= 0 && array[j] > aux){
      array[j+1] = array[j];
      j--
    }
    array[j+1] = aux;
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}

console.log(bubbleSort([10, -2, -7, 4, 4, 4, 5, 65, 2, 35, 14,15,23,18,2,15,18,94]))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
