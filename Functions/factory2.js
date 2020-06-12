function createProduct(nome, preco) {
    return {
        nome,
        preco,
        desconto: preco * 0.1
    }
}

console.log(createProduct('Laptop', 1199.99))
console.log(createProduct('Tablet', 549.99))