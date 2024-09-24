// 10. Crie uma função que recebe um objeto representando um carro com as
// propriedades marca, modelo, e ano. A função deve retornar uma string com uma
// breve descrição do carro no formato "O carro é um [ano] [marca] [modelo]".


let descreverCarro = ({ marca, modelo, ano }) => `O carro é um ${ano} ${marca} ${modelo}`;

let carro = { marca: 'Toyota', modelo: 'Corolla', ano: 2020 };
console.log(descreverCarro(carro));
