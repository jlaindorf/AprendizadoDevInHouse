var lanche = prompt(`Digite o código do lanche escolhido
                           100 - Cachorro Quente
                           101 - Bauru Simples
                           102 - Bauro com Ovo
                           103 - Hambúguer 
                           104 - Cheeseburguer
                           105 - Refrigerante
                           `)
var quantidade = Number(prompt('agora digite a quantidade do lanche escolhido'))
switch (lanche) {

  case "100": {
    console.log(`Você pediu ${quantidade} + cachorro quente, no valor de ${quantidade * 1.2}`)
    break;
  }

  case "101": {
     console.log(`Você pediu ${quantidade} Bauru Simples, no valor de ${quantidade * 1.3}`)
    break;
  }

 case "102": {
     console.log(`Você pediu ${quantidade} Bauru com Ovo, no valor de ${quantidade * 1.5}`)
    break;
  }

  case "103": {
     console.log(`Você pediu ${quantidade} Hambúrguer, no valor de ${quantidade * 1.2}`)
    break;
  }

  case "104": {
     console.log(`Você pediu ${quantidade}  Cheeseburguer, no valor de ${quantidade * 1.3}`)
    break;
  }
  
    case "105": {
     console.log(`Você pediu ${quantidade}  Refrigerante, no valor de ${quantidade * 1}`)
    break;
  }
  default: {
    console.log("item não encontrado")
  }
}
