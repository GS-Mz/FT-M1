const checkSeatStatus = require('../homework');
const getRowNumber = require('../homework');

it("Should be a function", () => {
    expect(typeof checkSeatStatus).toBe("function");
});

it("should throw a TypeError if first parameter is not a string", () => {
    expect(() => checkSeatStatus(4)).toThrow(new TypeError("First parameter is not a string"));
});

it("should throw a TypeError if second parameter is not a number", () => {
    expect(() => checkSeatStatus("a", "b")).toThrow(new TypeError("Second parameter is not a number"));
});

it("should return the correct index of the letter", () => {
    expect(getRowNumber("a")).toBe(0);
})