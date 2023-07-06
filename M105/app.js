console.log("m1s05a2");
const texto = "casa"

console.log(texto)

const vetor =["arroz","feijão","ovo"]
vetor.push( "batata")
vetor[1] = "cenoura"

console.log(vetor)
console.log(vetor.toString()) /*lista os itens como strings*/
/*acessa o ultimo item do vetor*/
console.log(vetor.at(-1)); /*acessa o ultimo item do vetor*/

const matrix=[

    [1,2,3],
    [4,5,6],
    [7,8,9],

]
console.log(matrix[1][1])

const qqnome = {bla:33 }/*cria um objeto*/
qqnome.bla= 66; /*acessa o valor da chave bla*/
console.log(qqnome.bla)

const listaPessoas =[
    {
        id:1,
        nome:"Romeu",
        profissao:"programador"
    },
    {
        id:2,
        nome: "julio",
        profissao: "consultor"
    },
]
console.log(listaPessoas[1].nome
    
    )

    
    
// ESCOPO
// escopo de funcao
// var obedece apenas escopo de funcao
function definirLargura() {
    var largura = 100;
    console.log(largura);
  }
  //definirLargura();
  //console.log(largura);
  
  // escopo de bloco
  // var não é contida em escopo de bloco
  if (true) {
    var largura = 999;
    //console.log(largura);
  }
  //console.log(largura);
  
  // const e let são contidas em escopo de bloco
  // e também escopo de funcao
  if (true) {
    const comprimento = 111;
    console.log(comprimento);
  }
  // erro pois comprimento nao existe fora do bloco
  //console.log(comprimento);

  // hoisting - içamento 
  //"sobre a definição de funções e vars para utilizar antes  da definição em sim "
  // const e let não podem ser içadas 
  //function sim
  teste()
  function teste(){
    console.log("teste executou");
  }

  function calcula(a,b, ...resto){

    console.log(a,b,resto)
  }
   calcula(1,3,8,2,6)