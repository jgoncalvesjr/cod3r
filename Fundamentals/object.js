// Objects em JavaScript também são DINÂMICOS
// Object vazio até então

const prod1 = {};

// Object com nome, sem ano (porque todo mundo sabe que é NULL)

prod1.nome = 'Mundial do Palmeiras';
console.log(prod1);

// Object com criação dinâmica de ano

prod1.ano = 1951;
console.log(prod1);

// Outra forma de incluir id (par chave) em Object

prod1['Propina pra FIFA reconhecer'] = 8533550.45; // evitar atributos/notações com espaço
console.log(prod1);

// Criação do Object com notação literal

const prod2 = {
    nome: 'Uniforme do título',
    preco: 171.90
};
console.log(prod2);

// JSon: Formação textual de Object

'{"nome": "Uniforme do título", "preco": "171.99"}';
