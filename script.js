// Variable global
var entradaActual = '';

// Función para limpiar la pantalla
function limpiar() {
    entradaActual = '';
    actualizarDisplay(entradaActual);
}

// Función para agregar un dígito al input
function agregarDigito(digito) {
    entradaActual += digito;
    actualizarDisplay(entradaActual);
}

// Función para asignar la operación
function operacion(op) {
    // Verificar si ya hay una operación realizada
    if (entradaActual !== '' && esUltimoCaracterOperador()) {
        entradaActual = entradaActual.slice(0, -3); // Eliminar el último operador y espacio
        actualizarDisplay(entradaActual);
    } else {     
        entradaActual += ` ${op} `;
        actualizarDisplay(entradaActual);
    }
}

// Función para calcular el resultado de la operación
function calcularResultado() {
    if (esUltimoCaracterOperador()) {
        entradaActual = entradaActual.slice(0, -3); // Eliminar el último operador y espacio
    }

    const operacionARealizar = entradaActual.split(' ');
    const numero1 = parseFloat(operacionARealizar[0]);
    const operador = operacionARealizar[1];
    const numero2 = parseFloat(operacionARealizar[2]);

    if (!isNaN(numero1) && !isNaN(numero2)) {
        let resultado = 0;
        switch (operador) {
            case '+':
                resultado = numero1 + numero2;
                break;
            case '-':
                resultado = numero1 - numero2;
                break;
            case '*':
                resultado = numero1 * numero2;
                break;
            case '/':
                if (numero2 === 0) {
                    resultado = 'Error';
                    alert('No se puede dividir por cero');
                } else {
                    resultado = numero1 / numero2;
                }
                break;
            default:
                resultado = 'Error: Operación no válida';
        }

        entradaActual = resultado.toString();
        actualizarDisplay(resultado);
    }
}

// Función para verificar si el último caracter es un operador
function esUltimoCaracterOperador() {
    const operadores = ['+', '-', '*', '/'];
    const ultimoCaracter = entradaActual.slice(-1);
    return operadores.includes(ultimoCaracter);
}

// Función para actualizar el display
function actualizarDisplay(valor) {
    document.getElementById('display').value = valor;
}