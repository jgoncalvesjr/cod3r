/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function triangleType (side1, side2, side3) {
    if (side1 == side2 && side2 == side3)
    {return 'This is an Equilateral triangle'}
    else if (side1 == side2 || side2 == side3 || side1 == side3)
    {return 'This is an Isosceles triangle'}
    else {return 'This is an Escalene triangle'}
}

console.log(triangleType(3,3,3))
console.log(triangleType(3,5,3))
console.log(triangleType(3,5,7))