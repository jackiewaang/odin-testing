import { capitalize } from "../scripts/capitalize";

test('testing simple word', () => {
    expect(capitalize('hello')).toBe('Hello');
})

test('testing CamelCased word', () => {
    expect(capitalize('camelCase')).toBe('Camelcase');
})

test('testing multiple words in string', () => {
    expect(capitalize('roses are red')).toBe('Roses are red');
})

test('testing first character not from alphabet', () => {
    expect(capitalize('$this is a dollar sign')).toBe('$this is a dollar sign');
})

test('testing empty string', () => {
    expect(() => capitalize('')).toThrow('String is empty'); // use wrapper to test errors
})