var nascimento = Number(prompt('Qual seu ano de nascimento?'))
var idade = 2023 - nascimento
var passou = idade - 18
var falta = 18 - idade


if ( idade > 18){
  console.log ('Ja se passaram ' + passou ,'anos do alistamento')
}
 else if (idade<18) {console.log('faltam '+ falta, 'anos para o alistamento')
      }
else {console.log('está na hora de se alistar')}