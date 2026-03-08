/**
 * @file square_area.js
 * @description Implementación en Node.js para calcular el área de un cuadrado.
 * @module square_area
 * @version 1.1.0
 */

const readline = require('readline');

/**
 * Calcula el área basándose en la ecuación geométrica: A = a^2.
 * @param {string|number} input - El valor de la base (a).
 * @returns {number} El área calculada.
 * @throws {Error} Si el valor es inválido o negativo.
 */
function calculateSquareArea(input) {
    const a = parseFloat(input);

    if (isNaN(a)) {
        throw new Error("La entrada no es un número válido para la base 'a'.");
    }

    if (a < 0) {
        throw new Error("La base 'a' de un cuadrado no puede ser negativa.");
    }

    return Math.pow(a, 2);
}

/**
 * Procesa el área e imprime el resultado.
 * @param {string|number} input 
 */
function processArea(input) {
    try {
        const A = calculateSquareArea(input);
        console.log(`Resultado: El área (A) de un cuadrado con base (a = ${input}) es: ${A.toLocaleString()}.`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

/**
 * Función principal encargada de manejar la lógica de ejecución del programa CLI.
 */
function main() {
    const args = process.argv.slice(2);

    if (args.length > 0) {
        processArea(args[0]);
    } else {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Ingrese el valor de la base (a): ", (answer) => {
            processArea(answer);
            rl.close();
        });
    }
}

// Exportar funciones para pruebas
module.exports = { calculateSquareArea };

// Ejecutar el módulo si se llama directamente
if (require.main === module) {
    main();
}
