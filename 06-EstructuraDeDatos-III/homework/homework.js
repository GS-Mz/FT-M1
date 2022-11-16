"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
    this.data = value;
    this.left = null;
    this.rigth = null;
}

BinarySearchTree.prototype.size = function (){
    return
}

BinarySearchTree.prototype.insert = function(value){
    //Si entra un array de numeros
    if (typeof value == "object"){
      value.forEach(number => {
      this.insert(number);
      });
    }
    // Declaración variables
    let newThree = new BinarySearchTree(value)
    let Lsuccess = "Nodo agregado con éxito a la izquierda"
    let Rsuccess = "Nodo agregado con éxito a la derecha"

    // Si hay nodos en el lugar
    if (value < this.data && this.left != null){
      return this.left.insert(value)
    } else if (value > this.data && this.rigth != null){
      return this.rigth.insert(value)
    }
    // Si no hay nodos en el lugar
    if (value < this.data && !this.left){
      this.left = newThree;
      return Lsuccess
    } else if (value > this.data && !this.rigth) {
      this.rigth = newThree;
      return Rsuccess
    }
}

BinarySearchTree.prototype.contains = function(value){
  //Si el nodo actual es el buscado
  if (this.data === value) return true
  //Si el valor es menor al del nodo actual
  //Ejecuta el método en el nodo de la izquierda
  if (value <= this.data && this.left !== null){
    return this.left.contains(value)
  }
  //Si el valor es mayor al del nodo actual
  //Ejecuta el metodo en el nodo de la derecha 
  else if(value > this.data && this.rigth !== null){
    return this.rigth.contains(value)
  }
  else return false
}

BinarySearchTree.prototype.depthFirstForEach = function (type, output=[]){
  if(type == "post-order") {
      if (this.left === null && this.rigth === null){
        output.push(this.data);
       }
      else if(this.left != null){
        console.log(output)
        return this.left.depthFirstForEach("post-order", output)
    } 
  
  }  
}

const binaryTree = new BinarySearchTree(20);
console.log(binaryTree.insert([15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34]))
console.log(binaryTree);
console.log(binaryTree.contains(2))
console.log(binaryTree.depthFirstForEach("post-order"));

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
