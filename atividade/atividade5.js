// 5. Exercício de Mutabilidade

// a. Crie um array chamado meuArray com os valores [1, 2, 3].
// b. Altere o primeiro elemento do array para 4 e imprima o array no console.
// c. Crie uma string chamada minhaString com o valor "Olá".
// d. Tente alterar o primeiro caractere da string para "o" e imprima a string no
// console. O que acontece? Explique.

let meuArray = [1, 2, 3];

meuArray[0] = 4;
console.log(meuArray); // Saída: [4, 2, 3]

let minhaString = "Olá";

// Isso não funciona
// minhaString[0] = 'o'; // Não altera a string

// A maneira correta seria criar uma nova string
let novaString = 'o' + minhaString.slice(1);
console.log(novaString); 