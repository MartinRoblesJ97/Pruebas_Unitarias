// 3. Se importa la función con las figuras
const volumenes = require('./volumenes.js');


// Se comienzan las pruebas unitarias
test('Volumen de un cubo', () => {
    expect (volumenes.cubo(2)).toBe(8); 
})

test('Volumen de un cilindro', () => {
    expect (volumenes.cilindro(2,3)).toBe(37.6992); 
})

test('Volumen de una piramide', () => {
    expect (volumenes.piramide(2,3,4)).toBe(8); 
})

test('Volumen de una esfera', () => {
    expect (volumenes.esfera(2)).toBe(33.5104);
})