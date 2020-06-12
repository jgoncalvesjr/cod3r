var numero = 1;
{
    var numero = 2;
    console.log('dentro =', numero);
}
console.log('fora =', numero);

// Evitar var por conta de overwrite - variável global