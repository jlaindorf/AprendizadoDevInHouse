var idadeNadador = Number(prompt("Nadador,digite sua idadade para saber em qual categoria será classificado"))

if (idadeNadador <5){
  
  console.log('categoria inexistente')
}
else if (idadeNadador >= 5 && idadeNadador <= 7){
  
  console.log('sua categoria é a Infantil A')
}
else if (idadeNadador >= 8 && idadeNadador <=10 ){
  console.log('sua categoria é a Infaltil B') 
}
else if (idadeNadador >=11  && idadeNadador <=13){
  console.log('sua categoria é a Juvenil A')
}
else if (idadeNadador >=14 && idadeNadador <=17 ){
  console.log('sua categoria é a Juvenil B')
}
else {console.log('Categoria Adulto')}
