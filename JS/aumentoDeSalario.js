var cargo = prompt (`Digite seu Cargo para consultar o aumento de sário:
                     101-Gerente
                     102-Engenheiro
                     103-Técnico`)
var salario = Number(prompt('Agora digite seu salário atual'))


 switch (cargo) {
  case "101":{
    console.log (`seu antigo salario era ${salario} e seu novo salário será ${salario + (salario *0.1)}`)
    break;
  }
     case "102": {
    console.log (`seu antigo salario era ${salario} e seu novo salário será ${salario + (salario * 0.2)}`)
       break;
  }
    
    case "103": {
    console.log (`seu antigo salario era ${salario} e seu novo salário será ${salario + (salario * 0.3)}`)
       break;
    }
    default :{
      console.log (`seu antigo salario era ${salario} e seu novo salário será ${salario + (salario * 0.4)}`)
       break;
    }
}