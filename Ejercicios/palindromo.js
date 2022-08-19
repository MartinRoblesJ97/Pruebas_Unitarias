const palindromo = (palabra) => {
    let palabraInvertida = palabra.split('').reverse().join('');
    if (palabraInvertida === palabra) {
        return true;
    } else {
        return false;
    }
}

// 1. Almacenar funciones
const funcionPalindromo = {
    palindromo,
}

// 2. Exportar
module.exports = funcionPalindromo;