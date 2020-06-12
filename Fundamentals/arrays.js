const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // Compila, mas retorna Undefined - CUIDADO!!!

// Manipulação dinâmica no tamanho do array

valores[4] = 10;
console.log(valores); 

// Manipulação dinâmica no tamanho do array - exemplo 2

valores [12] = 5.6;
console.log(valores); 

// Quantidade de elementos no array

console.log(valores.length);

// Adicionar novos elementos no array

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

// Remover elementos do array

console.log(valores.pop());

// Remover elementos do array - forma 2

delete valores[0];
console.log(valores);

console.log(typeof valores);

