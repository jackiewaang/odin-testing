import { reverseString } from "../scripts/reverseString";

test('testing simple word', () => {
    expect(reverseString('Hello')).toBe('olleH');
})

test('testing single character', () => {
    expect(reverseString('a')).toBe('a');
})

test('testing empty string', () => {
    expect(reverseString('')).toBe('');
})

test('testing palindrome', () => {
    expect(reverseString('madam')).toBe('madam');
})

test('testing word with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
})

test('testing numbers', () => {
    expect(reverseString('123')).toBe('321');
})

test('testing mixed case word', () => {
    expect(reverseString('tEsT')).toBe('TsEt');
})