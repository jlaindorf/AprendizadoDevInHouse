function fazerCadastro() {
    var nome = document.getElementById('campo-nome-completo').value
    var senha = document.getElementById('campo-senha').value
    var telefone = document.getElementById('campo-telefone').value
    var regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/
    if(nome === "") {
        document.getElementById('campo-nome-completo').classList.add('input-error')
        document.getElementById('campo-nome-completo').focus()
        document.getElementById('error-nome').hidden = false
        document.getElementById('error-nome').innerText = "O nome é obrigatório"
    } else if(senha.length < 9) {
        document.getElementById('campo-senha').classList.add('input-error')
        document.getElementById('error-senha').hidden = false
        document.getElementById('error-senha').innerText = "A senha deve ter no minimo 8 caracteres"
    } 
    else if(regexTelefone.test(telefone) === false){
        document.getElementById('campo-telefone').classList.add('input-error')
        document.getElementById('erro-telefone').hidden = false
        document.getElementById('erro-telefone').innerText = "o telefone é obrigatório"

    }

        /* 
   if( /javascritp/i.test("javascript é lindo"){
     =true
   }
    exemplo de rejex, ele vai procurar a palavra javascritp e dar um true ou false */
   4
   
    
}
