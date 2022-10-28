'use strict'

function BinarioADecimal(num) {
  let resultadoFin = 0;
  let arrayNum = num.split("");
  arrayNum.reverse();
  for (let index = 0; index < arrayNum.length; index++) {
    let resultadoProv = arrayNum[index] * (Math.pow(2, index));
    resultadoFin += resultadoProv;
  }
  return resultadoFin
}

// function BinarioADecimal(num) {
//   // tu codigo aca
//   //parseInt( "11110",2 )**
//   var result = 0;
//   for (let i = num.length - 1; i >= 0; i--) {
//     result =+ num.charAt(i) * Math.pow(2, i);
//     //console.log(Math.pow(num[i] * 2 , i))
//   } return result;
// }

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

function DecimalABinario(num) {
  let binaryResult = "";
  while (num > 0){
    binaryResult += num % 2;
    num = Math.floor(num / 2);
  }
  return binaryResult.split("").reverse().join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}