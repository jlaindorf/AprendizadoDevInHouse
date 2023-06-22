function fazerCadastro(){
    var nome = document.getElementById("campo-nome-completo").value


if(nome === ""){
    document.getElementById('campo-nome-completo').classList.add("input-error")
    document.getElementById('campo-nome-completo').focus()
    document.getElementById('erro-nome').hidden=false
    
}


}