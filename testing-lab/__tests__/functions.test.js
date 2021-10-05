
const {returnTwo, greeting, add, subtract, divide, multiply} = require('../functions');

test('return integer of 2', () => {
    expect(returnTwo()).toBe(2);
});

test('greeting should return Hello, James/Jill', () => {
    expect(greeting('James')).toEqual('Hello, James.');
    expect(greeting('Jill')).toEqual('Hello, Jill.');
});

test('sum should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, 9)).toBe(14);
});

describe('math tests', () => {
    test('sum should add two numbers', () => {
        expect(add(4, 10)).toBe(14)
    });
    
    test('subtract should subtract two numbers', () => {
        expect(subtract(10, 5)).toBe(5)
    });
    
    test('divide should divide two numbers', () => {
        expect(divide(4, 2)).toBe(2)
    });
    
    test('multiply should multiply two numbers', () => {
        expect(multiply(4, 2)).toBe(8)
    });
});


