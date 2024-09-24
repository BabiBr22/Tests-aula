// 7. Exercício de Manipulação de Strings

//a. Dado um array de strings, use o método map para criar um novo array onde
//cada string é convertida para maiúsculas.
//b. Entrada: ["maçã", "banana", "laranja"]
//c. Saída Esperada: ["MAÇÃ", "BANANA", "LARANJA"]

let frutas = ["maçã", "banana", "laranja"].map(fruta => fruta.toUpperCase());
console.log(frutas); 
