// Programa para calcular el área de figuras geometricas
//Cuadrado (lado x lado), rectangulo (base x altura), triángulo (base x altura / 2), círculo (pi*r^2)

// Se declaran las figuras y sus datos de entrada.
const cuadrado = (ladoCuadrado) => {
    return ladoCuadrado*ladoCuadrado;
}

const rectangulo = (baseRectangulo, alturaRectangulo) => {
    return baseRectangulo * alturaRectangulo;
}

const triangulo = (baseTriangulo, alturaTriangulo) => {
    return (baseTriangulo*alturaTriangulo)/2;
}

const circulo = (radio) => {
    pi = 3.1416;
    return pi*radio*radio;
}


///////////////////////////////////////////////////////

//Pruebas unitarias

// 1. Almacenar las funciones en una constante del tipo objeto

const figuras ={
    cuadrado,
    rectangulo,
    triangulo,
    circulo,
}

// 2. Exportar funciones.

module.exports = figuras;