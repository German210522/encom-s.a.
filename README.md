# Cálculo del Área de un Cuadrado (ENCOM)

Este proyecto proporciona herramientas simples y funcionales para calcular el área de un cuadrado a través de la terminal. Utiliza la ecuación geométrica fundamental:

**Ecuación:**  
`A = a²`  

**Variables:**  
*   **A:** Área resultante.
*   **a:** Base (o lado) del cuadrado.

## 📁 Estructura del Proyecto

El código fuente ha sido organizado de forma jerárquica para facilitar su mantenimiento:

```
ENCOM/
├── src/
│   ├── python/  # Implementación en Python
│   ├── js/      # Implementación en Node.js
│   └── cpp/     # Implementación en C++ y binario compilado
├── README.md
└── LICENCIA
```

## 🚀 Lenguajes Disponibles

### 1. Python
*   **Archivo:** `src/python/square_area.py`
*   **Ejecución:** `python src/python/square_area.py [valor]`

### 2. Node.js / JavaScript
*   **Archivo:** `src/js/square_area.js`
*   **Ejecución:** `node src/js/square_area.js [valor]`

### 3. C++
*   **Archivo:** `src/cpp/square_area.cpp`
*   **Ejecución:** `.\src\cpp\square_area.exe [valor]`

## 🛠️ Características (Buenas Prácticas)

Todas las versiones del código implementan:
*   **Validación de entrada:** Verifica que el valor ingresado sea un número.
*   **Seguridad geométrica:** No permite valores negativos para la base (a < 0).
*   **Modo dual:** Soporta argumentos directos o entrada interactiva.
*   **Organización:** Código modular y estructurado por lenguajes.

---
*Proyecto desarrollado para la gestión de Administración de Tecnología de Información - UMG 2026.*
