// Escreva uma função javascript que receba uma array de números e retorne outra array, sem numeros duplicados.



function podeVotar(idade) {
    if (idade >= 18 && idade <= 70) {
        return "Votação obrigatória";
    } else if (idade > 70) {
        return "Votação opcional";
    } else {
        return "Não pode votar";  // Corrigido o erro de digitação
    }
}

// Crie um programa que exibe a soma de dois números.

function soma(a, b){
    return a + b
}

//


function verifica(numero){
    if(numero > 0){
        return 'positivo'
    }else if(numero < 0){
        return 'negativo'
    }else{
        return 'zero'
    }
}




module.exports = { podeVotar, soma, verifica };
