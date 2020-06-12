const escola = 'Cod3r';

console.log(escola.charAt(3));
console.log(escola.charAt(4));
console.log(escola.charAt(6)); // não gera erro, retorna VAZIO (nem sequer null lol)

console.log(escola.charCodeAt(3)); // code Unicode
console.log(escola.indexOf('d')); // indicar qual índice do caracter

console.log(escola.substring(2)); // incluir a partir de índice n
console.log(escola.substring(0, 3)); // incluir de índice n por x caracteres

console.log('Escola '.concat(escola).concat('!')); // concatenação de strings
console.log('Escola ' + escola + '!'); // sintaxe alternativa para concatenação de strings

console.log(escola.replace(3, 'e')); // substituição de strings
console.log(escola.replace(/\d/, 'e')); // substituição de dígitos utilizando Reject
console.log(escola.replace(/\w/g, 'e')); // substituição de todos os caracteres utilizando Reject

console.log('Huguinho,Zezinho,Luisinho'.split(',')); //conversão de string em array