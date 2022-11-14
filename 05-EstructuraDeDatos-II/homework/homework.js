"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
    this.head = null;
    this._lenght = 0;
}

function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function(value) {
  let newNodo = new Node(value);
  if (this.head == null){
    this.head = newNodo;
    this._lenght++
    return newNodo;
  }else{
    let current = this.head;
    while (current.next != null){
      current = current.next;
    }
    current.next = newNodo;
  }
  this._lenght++
  return newNodo;
}

LinkedList.prototype.remove = function() {
  if (this._lenght === 0) return null
  if (this._lenght === 1) {
    let eliminado = this.head.value;
    this.head = null;
    this._lenght--
    return eliminado;
  }
  let current = this.head;
  if(current.next.next == null){
    let eliminado = current.next.value;
    current.next = null;
    this._lenght--
    return eliminado;
  }
  while (current.next.next!=null){
    current = current.next;
  }
    let eliminado = current.next.value;
    current.next = null;
    this._lenght--
    return eliminado;
}

LinkedList.prototype.search = function(input){
  let current = this.head;
  while (current != null){
    if (current.value == input) return current.value;
    else if (typeof input == "function"){
      if (input(current.value)){
        return current.value;
      }
    }
    current = current.next;
  }
    return null;
}



/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.slots = new Array(35)
  this.numBuckets = this.slots.length;
}

HashTable.prototype.hash = function(input){
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = hash + input.charCodeAt(i)
  }
  hash = hash % 35;
  return hash;
}

HashTable.prototype.set = function(clave, valor){
  if (typeof(clave) != "string") throw new TypeError ("Keys must be strings")
  let hash = this.hash(clave);
  if (!this.slots[hash]){
    this.slots[hash] = new Object();
    this.slots[hash][clave] = valor;
    return this.slots[hash][clave]
  }else{
    this.slots[hash][clave] = valor;
    return this.slots[hash][clave]
  }
}

HashTable.prototype.get = function (clave) {
  let valor = ""
    this.slots.forEach(element => {
        if(element.hasOwnProperty(clave)){
          valor = element[clave];
        }
    });
    return valor;
}

HashTable.prototype.hasKey = function (valor) {
  let resultado = false;
  this.slots.forEach(element => {
    for (let i in element){
      if (i == valor){
        resultado = true;
      }
    }
  })
  return resultado;
}


const hashTable = new HashTable;
hashTable.set("Apellido", "Mendoza");
console.log(hashTable.get("Apellido"))

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
