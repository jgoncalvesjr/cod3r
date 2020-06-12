/* 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”. */

const carDealer = car => {
    switch(car) {
        case 'hatch':
        return 'Here, have our newest model!'
        case 'sedan': case 'truck': case 'motorcycle':
        return 'I believe you would prefer our newest hatch model.'
        default:
        return 'We don´t sell this vehicle model here, sorry.'
    } 
}

console.log(carDealer());
console.log(carDealer('sedan'));
console.log(carDealer('truck'));
console.log(carDealer());
console.log(carDealer('helicopter'));
console.log(carDealer('hatch'));
console.log(carDealer('motorcycle'));



