/*console.log('a =', a);
var a = 2;
console.log('a =', a);
*/

// Hoisting também captura functions, PORÉM se limita à própria function

function teste() {
  console.log('a =', a);
  var a = 2;
  console.log('a =', a);
}

teste();
// console.log('a =', a); // não compila porque chamou variável FORA da function 

console.log('b =', b);
let b = 2; // não compila let - variável foi impressa antes de ser definida
console.log('b =', b);