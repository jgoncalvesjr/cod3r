var numero = 1;
{
    let numero = 2;
    console.log('dentro =', numero);
}
console.log('fora =', numero);

/* Escopo de let está limitado ao bloco de código
   Se houver let e var iguais, prevalece o mais abrangente */