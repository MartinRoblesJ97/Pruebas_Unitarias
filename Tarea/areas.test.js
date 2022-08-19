// 3. Se importa la función con las figuras
const areas = require('./areas.js');


// Se comienzan las pruebas unitarias
test('Área de un cuadrado', () => {
    expect (areas.cuadrado(5)).toBe(25); 
})

test('Área de un rectangulo', () => {
    expect (areas.rectangulo(5,6)).toBe(30); 
})

test('Área de un triangulo', () => {
    expect (areas.triangulo(5,6)).toBe(15); 
})

test('Área de un circulo', () => {
    expect (areas.circulo(5)).toBe(78.54);
})
