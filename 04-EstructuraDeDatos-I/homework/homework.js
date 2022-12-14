'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n === 0 || n === 1) return 1
  if ( n < 0 ) return "No existen factoriales negativos"

  return n * nFactorial(n-1)
}

function nFibonacci(n, arr=[], tot=0, num=1) {
  if (n === 0) return 0
  if (n < 0 ) return "No se admiten negativos";
  arr.push(tot);
  if (arr.length - 1 === n) return arr[n];
  arr.push(num);
  if (arr.length -1 === n) return arr[n];
  tot += num;
  num += tot;
  return nFibonacci(n, arr, tot, num);
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Queue{
  constructor(){
    this.queque = []
  }
  enqueue(elemento){
    this.queque.push(elemento)
  }
  dequeue(){
    return this.queque.shift();
  }
  size(){
    return this.queque.length;
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
