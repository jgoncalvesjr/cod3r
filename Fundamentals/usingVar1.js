{
    {
        {
            { 
                var sera = 'Será?';
                console.log(sera);
            }
        }
    }
}

console.log(sera);

// Variável var é visível DENTRO ou FORA de bloco de código

function teste() {
    var local = 123;
}

teste();
console.log(local);

// Escopo de var tem escopo limitado à Function. Não é alcançável fora da Function