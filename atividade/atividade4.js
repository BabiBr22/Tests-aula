//  4. Determine se as seguintes sentenças são proposições (podem ser verdadeiras ou
//  falsas).
//  ○ ( ) "O céu é azul."
//  ○ ( ) "Abra a porta."
//  ○ ( ) "2 + 2 = 4."
//  ○ ( ) "Vamos ao cinema amanhã."

 let escolha = Number(prompt('Digite sua escolha: \n (1) "O céu é azul. \n (2) "Abra a porta. \n (3) "2 + 2 = 4. \n (4) "Vamos ao cinema amanhã.'))
 switch(escolha){
     case 1:
           alert("É uma proposição")
     break
     case 2:
          alert("Não é uma preposição")
     break
     case 3:
          alert("É uma preposição")
     break
     case 4:
          alert("Não é uma preposição")
     break
     default: 
          alert('Algo deu errado!')
 }