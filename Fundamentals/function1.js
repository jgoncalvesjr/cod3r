// Function sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
};

imprimirSoma(2, 3);
imprimirSoma(2); // 2 + Undefined = NaN
imprimirSoma(2, 3, 4, 5); // Ignora todos os parâmetros não pertinentes, MAS COMPILA!!!
imprimirSoma(); // Undefined + Undefined = NaN

// Function com retorno

function soma(a, b = 2) {
    return a + b;
};
console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());
