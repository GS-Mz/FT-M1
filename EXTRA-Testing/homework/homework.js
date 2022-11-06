const bus = require("@11ty/eleventy/src/EventBus");

const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];

function checkSeatStatus(a, b) {
   if (typeof a !== "string"){
    throw new TypeError("First parameter is not a string");
   }
   if (typeof b !== "number"){
    throw new TypeError("Second parameter is not a number");
   }
}

function getRowNumber(letter){
    let abc ="abcdefghijklmnopqrstuvwxyz";
    abc = abc.split("");
    for (let i = 0; i < abc.length; i++) {
        if(letter === abc[i]) return i;
    }
}


module.exports = 
    checkSeatStatus,
    getRowNumber;