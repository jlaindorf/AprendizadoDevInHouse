import {usuarios} from '../constantes/usuarios.js'

document.getElementById('form-login').addEventListener("submit", clicarNoBotao);
function clicarNoBotao(event){
    event.preventDefault()
    const email= document.getElementById("campo-email").value
    console.log(email)
    const senha= document.getElementById("campo-senha").value
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
       const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.email === email && usuario.password === senha)
         if (usuarioEncontrado) {
            localStorage.setItem("nome_usuario" , "João")
            window.location.href="./home.html" /*redireciona para outra pagina ou link */}
            else{
                document.getElementById('login-button').disabled = false
                document.getElementById('login-button').style.opacity = 1
                document.getElementById('login-button').innerText='Entrar'
                alert("usuário nao encontrado")
            }



    }


}

function bemvindo(){

    alert("bem-vindo")
    
}
setTimeout(bemvindo,2000)