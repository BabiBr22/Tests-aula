//8. Escreva uma função em JavaScript que recebe um objeto representando uma
//pessoa com propriedades nome e idade, e retorna uma string no formato "Nome:
//[nome], Idade: [idade]".

let descreverPessoa = ({ nome, idade }) => `Nome: ${nome}, Idade: ${idade}`;

let pessoa = { nome: 'Ana', idade: 30 };
console.log(descreverPessoa(pessoa));
