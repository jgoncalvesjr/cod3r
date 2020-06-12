console.log('01)', '1' == 1); // é igual a
console.log('02)', '1' === 1); // é ESTRITAMENTE igual a
console.log('03)', '3' != 3); // é diferente de
console.log('04)', '3' !== 3); // é ESTRITAMENTE diferente de
console.log('05)', '3' < 2); // é menor que
console.log('06)', '3' > 2); // é maior que
console.log('05)', '3' <= 2); // é menor OU igual que
console.log('06)', '3' >= 2); // é maior OU igual que

const d1 = new Date(0);
const d2 = new Date(0);
console.log('09)', d1 === d2);
console.log('10)', d1 == d2);
console.log('11)', d1.getTime() === d2.getTime());

console.log('12)', undefined == null);
console.log('13)', undefined === null);

// preferência a usar === ao invés de ==, pois == não considera tipos das variáveis