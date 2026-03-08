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
        ValueError: Si la entrada es inválida o el valor es negativo.
    """
    try:
        # Convertir la entrada a flotante para permitir decimales
        a = float(input_value)
        
        # Validación geométrica: la base no puede ser negativa
        if a < 0:
            raise ValueError("La base 'a' no puede ser negativa en un cuadrado.")
            
        # Implementación de la ecuación fundamental: A = a^2
        A = a ** 2
        return A
        
    except ValueError as e:
        if "negativa" in str(e):
            raise e
        raise ValueError("Por favor, ingrese un número válido para la base 'a'.")

def process_area(input_value):
    """
    Llama al cálculo del área y maneja la salida.
    """
    try:
        A = calculate_square_area(input_value)
        print(f"Resultado: El área (A) del cuadrado con base (a = {input_value}) es: {A}")
    except ValueError as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    """
    Punto de entrada principal del script.
    Soporta argumentos de línea de comandos o entrada interactiva.
    """
    if len(sys.argv) > 1:
        # Uso mediante argumentos: python square_area.py 5
        process_area(sys.argv[1])
    else:
        # Uso interactivo: solicita el dato al usuario
        try:
            base_input = input("Ingrese el valor de la base (a): ")
            process_area(base_input)
        except (EOFError, KeyboardInterrupt):
            sys.exit(0)
