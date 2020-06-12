// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua da Lua',
        numero: 1010
    }
}

const { nome, idade } = pessoa; // operador destructuring
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, solteira = true } = pessoa;
console.log(sobrenome, solteira);

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);

// Alvo do destructuring deve ser previamente definido, caso contrário NÃO COMPILA (leitura de null or undefined)

const { conta: { ag, num } } = pessoa;
console.log(ag, num); 