/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function div (div1, div2) {
    console.log("Result: " + Math.floor(div1/div2));
    console.log(`Remainder: ${div1%div2}`)
}

div(11,4)