'use strict'

function BinarioADecimal(num) {
  let resultadoFin = 0;
  let arrayNum = num.split("");
  arrayNum.reverse();
  for (let index = 0; index < arrayNum.length; index++) {
    let resultadoProv = arrayNum[index] * (Math.pow(2, index));
    resultadoFin = resultadoFin + resultadoProv;
  }
  return resultadoFin
}

function DecimalABinario(num) {
  let binaryArray = [];
  let divResult = 0;
  do {
    divResult = num % 2;
    num = Math.floor(num / 2);
    binaryArray.push(divResult);
  } while (num >= 1);
  binaryArray.reverse();
  let binary = binaryArray.join("");
  return binary
}

function DecimalABinario2(num) {
  let binaryResult = "";
  while (num > 2){
    num = Math.floor(num / 2);
    binaryResult + num % 2;
  }
  return binaryResult
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}