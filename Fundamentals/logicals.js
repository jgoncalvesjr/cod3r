function compras (trab1, trab2) {
    const comprarSorvete = trab1 || trab2 // or
    const comprarTV50 = trab1 && trab2 // and
    //const comprarTV32 = !!(trab1 ^ trab2) - bitwise xor (não existe lógico xor em JavaScript)
    const comprarTV32 = trab1 != trab2 // outra forma lógica de calcular xor
    const saudavel = !comprarSorvete // not

    return { comprarSorvete, comprarTV50, comprarTV32, saudavel } // EC2015: valores redundam objetos (const, var, let)
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));