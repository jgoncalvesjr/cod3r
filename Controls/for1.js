let counter = 1

while(counter <= 10) {
    console.log(`Counter = ${counter}`)
    counter++
}

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

// Navegando pelo Array usando For

const notas = [6.7, 7.4, 9.8, 8.1, 7.7] 
for(let i = 0; i < notas.length; i++) {
    console.log(`Nota = ${notas[i]}`)
} 