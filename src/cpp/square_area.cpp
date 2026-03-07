/**
 * @file square_area.cpp
 * @author German
 * @brief Programa CLI para calcular el área de un cuadrado usando la fórmula A = a^2.
 * @version 1.1.0
 * @date 2026-03-07
 */

#include <iostream>
#include <cmath>
#include <string>
#include <cstdlib>
#include <iomanip>

/**
 * @brief Calcula el área (A) a partir de la base (a) y muestra el resultado por consola.
 * 
 * Implementa la validación de seguridad geométrica para evitar valores negativos.
 * 
 * @param a Valor decimal que representa la base del cuadrado.
 * @return void
 */
void print_area(double a) {
    // Validación: Una base negativa no es válida para figuras geométricas reales.
    if (a < 0) {
        std::cerr << "Error: La base 'a' de un cuadrado no puede ser negativa." << std::endl;
        std::exit(EXIT_FAILURE);
    }

    /**
     * @details Aplicación de la ecuación fundamental del área:
     * A = a^2
     */
    double A = std::pow(a, 2);

    // Salida estándar con descripción clara de las variables de la ecuación.
    std::cout << "Resultado: El área (A) del cuadrado con base (a = " << a << ") es: " << A << std::endl;
}

/**
 * @brief Función principal (punto de entrada).
 * 
 * Maneja la captura de datos desde argumentos de terminal (argc/argv) o mediante
 * flujo de entrada estándar (std::cin).
 * 
 * @param argc Conteo de argumentos.
 * @param argv Lista de argumentos de texto.
 * @return int Estado de salida del programa (EXIT_SUCCESS o EXIT_FAILURE).
 */
int main(int argc, char* argv[]) {
    double base;

    if (argc > 1) {
        /**
         * Manejo de argumentos CLI: ./square_area 10.5
         * std::atof convierte cadena a flotante de doble precisión.
         */
        base = std::atof(argv[1]);
        
        // Validación técnica: El valor 0.0 podría ser un error de conversión si el input es texto.
        if (base == 0 && argv[1][0] != '0') {
            std::cerr << "Error: Por favor, ingrese un número válido para la base 'a'." << std::endl;
            return EXIT_FAILURE;
        }
    } else {
        /**
         * Manejo interactivo: Solicita el dato si no se pasó como argumento.
         */
        std::cout << "Ingrese el valor de la base (a): ";
        if (!(std::cin >> base)) {
            std::cerr << "Error: Entrada inválida. Se esperaba un valor numérico." << std::endl;
            return EXIT_FAILURE;
        }
    }

    // Ejecución del cálculo y salida
    print_area(base);

    return EXIT_SUCCESS;
}
