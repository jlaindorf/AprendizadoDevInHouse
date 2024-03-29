import Item from "./item.js";
import {dadosLista } from "./constantes.js";

console.log("m1_s07_a3");

const elemLista = document.getElementById("lista-itens");


let listaControle = [];

function criaInstanciasItens(lista) {
  return lista.map((item) => {
    return new Item(item);
  });
}

function atualizaTela() {
  elemLista.innerHTML = "";

  listaControle.forEach((item) => {
    const elemItem = item.criaItem();
    elemLista.appendChild(elemItem);
  });
}

// função anônima de uso único
(function () {
  // inicialização da nossa aplicação
  listaControle = criaInstanciasItens(dadosLista);
  atualizaTela();
})();