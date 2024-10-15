import { calculator } from "../scripts/calculator";

test('add positive numbers', () => {
    expect(calculator.add(1,2)).toBe(3);
})

test('add negative number', () => {
    expect(calculator.add(1,-2)).toBe(-1);
})

test('add floating numbers', () => {
    expect(calculator.add(0.5, 0.2)).toBe(0.7);
})

test('add character', () => {
    expect(() => calculator.add("3",2)).toThrow('Arguments non-valid!');
})

// subtraction
test('subtract positive numbers', () => {
    expect(calculator.subtract(2,1)).toBe(1);
})

test('subtract negative number', () => {
    expect(calculator.subtract(2,-1)).toBe(3);
})

test('subtract floating numbers', () => {
    expect(calculator.subtract(0.3, 0.1)).toBeCloseTo(0.2);
})

test('subtract characters', () => {
    expect(() => calculator.subtract("1", 2)).toThrow('Arguments non-valid!');
})

// division

test('divide positive numbers', () => {
    expect(calculator.divide(4,2)).toBe(2);
})

test('divide negative number', () => {
    expect(calculator.divide(4,-2)).toBe(-2);
})

test('divide floating numbers', () => {
    expect(calculator.divide(0.3, 0.2)).toBeCloseTo(1.5);
})

test('divide characters', () => {
    expect(() => calculator.divide("2", 1)).toThrow('Arguments non-valid!');
})

test('multiply positive numbers', () => {
    expect(calculator.multiply(2,3)).toBe(6);
})

test('multiply negative numbers', () => {
    expect(calculator.multiply(5,-2)).toBe(-10);
})

test('multiply floating numbers', () => {
    expect(calculator.multiply(3.0,0.5)).toBeCloseTo(1.5);
})

test('multiply characters', () => {
    expect(() => calculator.multiply('$', '%')).toThrow('Arguments non-valid!');
})