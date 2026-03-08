import unittest
import sys
import os

# Añadir el directorio src/python al path para poder importar el módulo
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../src/python')))

from square_area import calculate_square_area

class TestSquareArea(unittest.TestCase):
    def test_calculate_area_positive(self):
        self.assertEqual(calculate_square_area(5), 25)
        self.assertEqual(calculate_square_area(2.5), 6.25)

    def test_calculate_area_zero(self):
        self.assertEqual(calculate_square_area(0), 0)

    def test_calculate_area_negative(self):
        with self.assertRaises(ValueError) as context:
            calculate_square_area(-5)
        self.assertEqual(str(context.exception), "La base 'a' no puede ser negativa en un cuadrado.")

    def test_calculate_area_invalid_input(self):
        with self.assertRaises(ValueError) as context:
            calculate_square_area("abc")
        self.assertEqual(str(context.exception), "Por favor, ingrese un número válido para la base 'a'.")

if __name__ == '__main__':
    unittest.main()
