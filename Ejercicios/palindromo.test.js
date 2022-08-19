// 3. Importar. Se define una constante con el nombre y la dirección de la función
const palindromo = require('./palindromo');

//Con test, planeo al menos 3 escenarios

// 1. Sí es un palindromo, true
test ("Palindromo," () => {
    expect(palindromo.palindromo("ANA")).toBe(true);
})

// 2. No se ingresa nada, false.
test ("Elemento vacío," () => {
    expect(palindromo.palindromo("")).toBe(true);
})


// 3. Lo que se ingresa no es un texto o undefined, false