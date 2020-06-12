let valor; //undefined = não inicializado = atribuído automaticamente pelo JavaScript
console.log(valor);

// console.log(valor2); // is not defined = não declarado

valor = null; // ausência de valor na memória
console.log(valor);

// console.log(valor.toString()); // ERRO - não tem como acessar null ou undefined como String

const produto = {};
console.log(produto.preco); // Compila, propriedade Undefined de Object vazio
console.log(produto); 

// console.log(produto.preco.a); // ERRO - não tem como acessar propriedade de atributo Undefined no Object

produto.preco = 3.50;
console.log(produto); 

produto.preco = undefined; // evitar atribuir Undefined
console.log(!!produto.preco); 
// delete produto.preco; - melhor forma de zerar um atributo
console.log(produto); 

produto.preco = null; // sem preço/gratuito
console.log(!!produto.preco);
console.log(produto);