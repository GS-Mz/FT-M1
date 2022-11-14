const {checkSeatStatus,getRowNumber,getSeatStatus,book} = require('../homework');

describe("El input debería ser válido", () => {
    it("Should be a function", () => {
        expect(typeof checkSeatStatus).toBe("function");
    });
    
    it("should throw a TypeError if first parameter is not a string", () => {
        expect(() => checkSeatStatus(4)).toThrow(new TypeError("First parameter is not a string"));
    });
    
    it("should throw a TypeError if second parameter is not a number", () => {
        expect(() => checkSeatStatus("a", "b")).toThrow(new TypeError("Second parameter is not a number"));
    });
})

describe("Debería obtener el estado del asiento", () => {
    it("should return the correct index of the letter", () => {
        expect(getRowNumber("b")).toEqual(1);
    })
    
    it("should return true if the seat is reserved", () => {
        expect(getSeatStatus("a", 1)).toBe(true);
    })
    
    it("should return false if the seat is not reserved", () => {
        expect(getSeatStatus("e", 3)).toBe(false);
    })
})

describe("Debería realizar el book del asiento", () => {
    it("Debería reservar el asiento si no está reservado", () =>{
        expect(book("b", 3)).toBe("Seat in b3 successfully booked");
    })
    it("Debería avisar si el asiento está reservado", () => {
        expect(book("a", 2)).toBe("Seat in a2 is already booked");
    })
})