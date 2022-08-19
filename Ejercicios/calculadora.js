// Programa para emular una calculadora

const sumar = (num1, num2) => {
    return num1 + num2;
}

const restar = (num1, num2) => {
    return num1 - num2;
}

const multiplicar = (num1, num2) => {
    return num1 * num2;
}

const dividir = (num1, num2) => {
    return num1 / num2;
}

// 1. Almacenar funciones en una constante del tipo objeto.

const operaciones ={
    sumar,
    restar,
    multiplicar,
    dividir,
}

// 2. Exportar funciones.

module.exports = operaciones;