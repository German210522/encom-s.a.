/**
 * @file square_area.js
 * @description Implementación en Node.js para calcular el área de un cuadrado.
 * @module square_area
 * @version 1.1.0
 */

const readline = require('readline');

/**
 * Calcula el área y la imprime en consola basándose en la ecuación geométrica: A = a^2.
 * @param {string|number} input - El valor de la base (a) ingresado desde la terminal o interacción.
 * @returns {void}
 * @throws {SystemExit} Finaliza el proceso con código 1 si el valor es inválido o negativo.
 * @see {@link https://es.wikipedia.org/wiki/Cuadrado}
 */
function processArea(input) {
    // a: Base del cuadrado (lado)
    const a = parseFloat(input);

    // Validación: Verificar si la entrada es un número real válido
    if (isNaN(a)) {
        console.error("Error: La entrada no es un número válido para la base 'a'.");
        process.exit(1);
    }

    // Validación de seguridad geométrica: la base no puede ser un valor negativo
    if (a < 0) {
        console.error("Error: La base 'a' de un cuadrado no puede ser negativa.");
        process.exit(1);
    }

    /**
     * Ecuación: A = a^2 (Base al cuadrado)
     * A: Representa el Área total.
     */
    const A = Math.pow(a, 2);
    
    // Salida de resultados con formato numérico localizado
    console.log(`Resultado: El área (A) de un cuadrado con base (a = ${a}) es: ${A.toLocaleString()}.`);
}

/**
 * Función principal encargada de manejar la lógica de ejecución del programa CLI.
 * Soporta argumentos directos de línea de comandos o solicitud interactiva por consola.
 */
function main() {
    const args = process.argv.slice(2);

    if (args.length > 0) {
        // Ejecución con argumento directo: node square_area.js 5
        processArea(args[0]);
    } else {
        // Configuración de interfaz para entrada del usuario
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

// Ejecutar el módulo si se llama directamente
if (require.main === module) {
    main();
}
