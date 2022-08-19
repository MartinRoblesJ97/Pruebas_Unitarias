// Programa para calcular el volumen de figuras geometricas
//Cubo (lador^3), cilindro (pi x r^2 x altura), piramide (base x altura x ancho/ 3), esfera ( 4/3 x pi x r^3)

// Se declaran las figuras y sus datos de entrada.
const cubo = (ladoCubo) => {
    return Math.pow(ladoCubo,3);
}

const cilindro = (radioCilindro, alturaCilindro) => {
    pi = 3.1416;
    return (pi * alturaCilindro * Math.pow(radioCilindro,2));
}

const piramide = (basePiramide, alturaPiramide, anchoPiramide) => {
    return (basePiramide * alturaPiramide * anchoPiramide)/3;
}

const esfera = (radioEsfera) => {
    pi = 3.1416;
    return (pi * 4/3 * Math.pow(radioEsfera,3));
}


///////////////////////////////////////////////////////

//Pruebas unitarias

// 1. Almacenar las funciones en una constante del tipo objeto

const volumenes ={
    cubo,
    cilindro,
    piramide,
    esfera,
}

// 2. Exportar funciones.

module.exports = volumenes;