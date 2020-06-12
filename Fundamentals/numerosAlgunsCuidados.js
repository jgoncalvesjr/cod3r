console.log(7 / 0); // não vai dar erro, vai informar Infinity, por razões de JS
console.log("10" / 2); // tipagem fraca "converte" strings em números para tentar evitar erros
console.log("7" + 2); // expressão + NÃO soma strings, em vez disso, concatena (STRING > NUMBER)
console.log("7" - 2); // exemplo que só reafirma que STRING > NUMBER
console.log("Treta" * 2); // algumas linguagens replicam o texto nessas situações, não se aplica ao JS
console.log(0.1 + 0.7); // especificação de ponto flutuante do JS pode gerar imprecisões
// console.log(10.toString()); ***não suportado
console.log((10.56457).toFixed(2)); //suportado