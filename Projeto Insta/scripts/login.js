console.log ('CHEGUEI ATE AQUI') 

function clicarNoBotao(){
    var email= document.getElementById("campo-email").value
    console.log(email)
    var senha= document.getElementById("campo-senha").value
    console.log(senha)

    document.getElementById('campo-email').classList.remove('input-error')
    
    document.getElementById('campo-senha').classList.remove('input-error')

     
    if(email ===""){
       /* document.getElementById('campo-email').style = "border-color: red"*/
        /*alert("Email é obrigatório")*/
        document.getElementById('campo-email').classList.add("input-error")/*xriada a classe no css para deixar o input vemelho*/
        document.getElementById('campo-email').focus()
    }


    else if(senha ===""){
        document.getElementById('campo-senha').classList.add("input-error")
        document.getElementById('campo-senha').focus()
    }
    else{
    document.getElementById('login-button').disabled = true
    document.getElementById('login-button').style.opacity = 0.5
    document.getElementById('login-button').innerText='Logando...'
     window.location.href = './feed.html' /*redireciona para outra pagina ou link */
    }


}