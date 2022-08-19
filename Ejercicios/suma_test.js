// Ejemplo de la función suma de mi calculadora

// Versión normal de Felipe
function sumaFelipe (a,b){
    return a + b
}

// Versión refactorizada de Felipe
const sumaEjemplo = (a,b) => {
    return a - b 
}

// Forma PRO de Jaciel
sumaJaciel = (a,b) => a+b

sumaEjemplo(1, 3); //Espero obtener un 4

// Función sumav2
const sumaEjemploV2 = (a, b) => {
    return a - b
}

if (sumaEjemploV2(1, 3) !=4){
    console.error("La suma de 1 y 3 debería ser 4");
}

//Función sumav3
const sumaV3= (a, b) => {
    return a - b
}

console.assert(sumaV3 (1, 3) === 4,"La suma de 1 y 3, debería ser 4")

//Escenarios de prueba
const escenarios = [
    { a: 0, b: 0, resultado: 0 },
    { a: 1, b: 3, resultado: 4 },
    { a: -3, b: 3, resultado: 0 },
]

//Para cada esceneario, se recorre y de cada esceneario se recupera la a, la b y el resultado esperado, y se ejecuta la funcion sumav4 con los parametros a y b.
escenarios.forEach(revisar => {
    const { a, b, resultado } = revisar

    console.assert(
        sumav3 (a, b) === resultado,
        "La suma de " + a + " y " + b + " deberia ser " + resultado
    )
})

console.log("La cantidad de escenarios pasados es: ", escenarios.length);
