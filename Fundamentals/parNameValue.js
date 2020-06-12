// par name/value
const saudacao = 'Olá terráqueo'; // contexto léxico 1 ===> localização física da definição

function exec() {
    const saudacao = 'Alô, alô marciano'; // contexto léxico 2 ====> localização restrita à function
    return saudacao
}

// Objects são grupos aninhados de pares name/value

const cliente = {
    nome: 'João',
    idade: 39,
    peso: 101,
    endereço: {
        logradouro: 'Rua do Turano, 72',
        numero: 666
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);