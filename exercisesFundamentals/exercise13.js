/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

const weekday = day => {
    switch (Math.floor(day)) {
        case 7:
            console.log('Saturday')
            break
        case 6: case 5: case 4: case 3: case 2:
            console.log('Weekday')
            break
        case 1:
            console.log('Sunday')
            break
        default:
            console.log('Not a day of week!')    
    }
}

weekday(9)
weekday(7)
weekday(5)
weekday(1)
weekday()
weekday('')