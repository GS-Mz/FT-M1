// const bus = require("@11ty/eleventy/src/EventBus");

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
   else if (typeof b !== "number"){
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

function getSeatStatus(fila, columna){
    checkSeatStatus(fila, columna)
    fila = getRowNumber(fila);
       return layout[fila][columna].booked;
}

function book(fila, columna){
    let status = getSeatStatus(fila, columna);
    filaNumero = getRowNumber(fila);
    if (status === true){
        return `Seat in ${fila}${columna} is already booked`;
    }else if (status === false){
        layout[filaNumero][columna]["booked"] = true;
        if (layout[filaNumero][columna]["booked"] === true){
            return `Seat in ${fila}${columna} successfully booked`;
        }
       
    }
    
}


module.exports = {
    getRowNumber, 
    checkSeatStatus,
    getSeatStatus,
    book};