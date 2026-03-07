import sys

"""
Módulo para el cálculo del área de figuras geométricas.
Ecuación principal: A = a^2 (Área = base al cuadrado).
"""

def calculate_square_area(input_value):
    """
    Realiza el cálculo del área de un cuadrado.

    Args:
        input_value (str|float): El valor de la base 'a' ingresado por el usuario.

    Returns:
        float: El área 'A' calculada.

    Raises:
        SystemExit: Si la entrada es inválida o el valor es negativo.
    """
    try:
        # Convertir la entrada a flotante para permitir decimales
        a = float(input_value)
        
        # Validación geométrica: la base no puede ser negativa
        if a < 0:
            print("Error: La base 'a' no puede ser negativa en un cuadrado.")
            sys.exit(1)
            
        # Implementación de la ecuación fundamental: A = a^2
        A = a ** 2
        
        print(f"Resultado: El área (A) del cuadrado con base (a = {a}) es: {A}")
        return A
        
    except ValueError:
        print("Error: Por favor, ingrese un número válido para la base 'a'.")
        sys.exit(1)

if __name__ == "__main__":
    """
    Punto de entrada principal del script.
    Soporta argumentos de línea de comandos o entrada interactiva.
    """
    if len(sys.argv) > 1:
        # Uso mediante argumentos: python square_area.py 5
        calculate_square_area(sys.argv[1])
    else:
        # Uso interactivo: solicita el dato al usuario
        try:
            base_input = input("Ingrese el valor de la base (a): ")
            calculate_square_area(base_input)
        except EOFError:
            sys.exit(0)
