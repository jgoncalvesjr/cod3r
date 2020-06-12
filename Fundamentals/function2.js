// Armazenando uma Function em uma variável

const imprimirSoma = function (a, b) {
    console.log(a + b);
};

imprimirSoma(2, 3);

// Armazenando uma Arrow Function em uma variável

const soma = (a, b) => {
    return a + b;
};
console.log(soma(2, 4));

// Return implícito em Arrow Function 

const subtração = (a, b) => a - b;
console.log(subtração(10, 12.75));

// Mais Arrow

const imprimir = a => console.log(a);
imprimir('Ê ô ô vida de gado, povo marcado Ê... povo feliz!');
