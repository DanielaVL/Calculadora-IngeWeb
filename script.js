// Variables globales
var entradaActual = '';
var operacionActual = '';

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
    operacionActual = op;
    entradaActual += ` ${op} `;
    actualizarDisplay(entradaActual);
}

// Función para calcular el resultado de la operación
function calcularResultado() {
    const operacionARealizar = entradaActual.split(' ');
    const numero1 = parseFloat(operacionARealizar[0]);
    const operador = operacionARealizar[1];
    const numero2 = parseFloat(operacionARealizar[2]);

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

    actualizarDisplay(resultado);
}

// Función para actualizar el display
function actualizarDisplay(valor) {
    document.getElementById('display').value = valor;
}