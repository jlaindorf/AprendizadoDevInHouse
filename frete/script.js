  
  
  function clicarNoBotao() {
    var pesoString = document.getElementById('peso-frete').value;
    var distst = document.getElementById('trajeto').value;
    var peso = parseFloat(pesoString);
    var distancia = parseFloat(distst);
    var inputPeso = document.querySelector('#peso-frete');
    var inputDist = document.querySelector('#trajeto');
    var botao = document.querySelector('#calcular');
    var h2 = document.querySelector('h2');
  
    document.getElementById('peso-frete').classList.remove('input-error');
    document.getElementById('error-frete').hidden = true;
  
    document.getElementById('trajeto').classList.remove('input-error');
    document.getElementById('error-trajeto').hidden = true;
    

   
    
    if (pesoString === "") {
      document.getElementById('peso-frete').classList.add('input-error');
      document.getElementById('peso-frete').focus();
      document.getElementById('error-frete').hidden = false;
      document.getElementById('error-frete').innerText = "Dado obrigatório!";
    }
     else if (distst === "") {
      document.getElementById('trajeto').classList.add('input-error');
      document.getElementById('trajeto').focus();
      document.getElementById('error-trajeto').hidden = false;
      document.getElementById('error-trajeto').innerText = "Dado obrigatório!";
    }
  
  else {
   
    inputPeso.style.display = 'none';
    inputDist.style.display = 'none';
    botao.style.display = 'none';
    h2.style.display = "block";
    
    document.querySelector('h2').innerHTML = `O valor do frete éR$ ${(peso * 0.2 + distancia * 0.1 ).toFixed(2)}`;
  }
  
}
