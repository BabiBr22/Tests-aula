// 3. Escreva um programa que verifica se um número é positivo, negativo ou
// zero.


let numero = Number(prompt('Digite um número: '))
if(numero == 0 ){
    alert('Esse número é 0')
}else if(numero > 0){
    alert('Esse número é positivo')
}else{
    alert('Esse número é negativo')
}