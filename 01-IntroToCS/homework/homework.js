'use strict'

function BinarioADecimal(num) {
  let resultadoFin = 0;
  let arrayNum = num.split("").reverse();;
  for (let i = 0; i < arrayNum.length; i++) {
    resultadoFin += arrayNum[i] * (Math.pow(2, i));
  }
  return resultadoFin
}



// function DecimalABinario(num) {
//   let binaryArray = [];
//   let divResult = 0;
//   do {
//     divResult = num % 2;
//     num = Math.floor(num / 2);
//     binaryArray.push(divResult);
//   } while (num >= 1);
//   binaryArray.reverse();
//   let binary = binaryArray.join("");
//   return binary
// }

// function DecimalABinario(num) {
//   let binaryResult = "";
//   while (num > 0){
//     binaryResult += num % 2;
//     num = Math.floor(num / 2);
//   }
//   return binaryResult.split("").reverse().join("");
// }

function DecimalABinario(num) {
  let binaryResult = "";
  while (num > 0){
    binaryResult = num % 2 + binaryResult;
    num = Math.floor(num / 2);
  }
  return binaryResult
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}