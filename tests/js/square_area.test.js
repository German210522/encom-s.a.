const { calculateSquareArea } = require('../../src/js/square_area');

describe('calculateSquareArea', () => {
    test('calcula el área correctamente para una base positiva', () => {
        expect(calculateSquareArea(5)).toBe(25);
        expect(calculateSquareArea(2.5)).toBe(6.25);
    });

    test('calcula el área correctamente para base cero', () => {
        expect(calculateSquareArea(0)).toBe(0);
    });

    test('lanza un error para una base negativa', () => {
        expect(() => calculateSquareArea(-5)).toThrow("La base 'a' de un cuadrado no puede ser negativa.");
    });

    test('lanza un error para una entrada no numérica', () => {
        expect(() => calculateSquareArea('abc')).toThrow("La entrada no es un número válido para la base 'a'.");
    });
});
