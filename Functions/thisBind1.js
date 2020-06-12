const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre programação funcional e orientada a objeto

const falarDePessoa = pessoa.falar.bind(pessoa) // bind para puxar parâmetro
falarDePessoa()