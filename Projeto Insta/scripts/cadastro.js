import { regexEmail,regexTelefone } from "../constantes/rejex.js"
document.getElementById('form-cadastro').addEventListener('submit', fazerCadastro)
const campoNomeCompleto = document.getElementById('campo-nome-completo')

function fazerCadastro(event) {

    event.preventDefault()
    const nome = campoNomeCompleto.value
    const senha = document.getElementById('campo-senha').value
    const telefone = document.getElementById('campo-telefone').value
    const email = document.getElementById('campo-email').value

       campoNomeCompleto.classList.remove("input-error")
    document.getElementById('error-nome').hidden = true

    document.getElementById('campo-senha').classList.remove("input-error")
    document.getElementById('error-senha').hidden = true

    document.getElementById('campo-telefone').classList.remove("input-error")
    document.getElementById('error-telefone').hidden = true

    document.getElementById('campo-email').classList.remove("input-error")
    document.getElementById('error-email').hidden = true

    if (nome === "") {
        campoNomeCompleto.classList.add('input-error')
        campoNomeCompleto.focus()
        document.getElementById('error-nome').hidden = false
        document.getElementById('error-nome').innerText = "O nome é obrigatório"
    } else if (senha.length < 9) {
        document.getElementById('campo-senha').classList.add('input-error')
        document.getElementById('error-senha').hidden = false
        document.getElementById('error-senha').innerText = "A senha deve no minimo 8 caracteres"
    } else if (regexTelefone.test(telefone) === false) {
        document.getElementById('campo-telefone').classList.add('input-error')
        document.getElementById('error-telefone').hidden = false
        document.getElementById('error-telefone').innerText = "Digite um telefone válido"
    } else if (regexEmail.test(email) === false) {
        document.getElementById('campo-email').classList.add('input-error')
        document.getElementById('error-email').hidden = false
        document.getElementById('error-email').innerText = "Digite um email válido"
    }
    else{
        document.getElementById('login-button').style.opacity = 0.5
        document.getElementById('login-button').innerText = 'cadastrando'
        document.getElementById('login-button').disabled = true

        fetch('http://localhost:3333/usuarios',{
            method: 'POST',
            body:JSON.stringify({
                nome : nome,
                senha : senha ,
                telefone : telefone ,
                email : email
            }),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(()=>{
            alert("cadastrado com sucesso!")
            window.location.href ="./index.html"

        })
        .catch(()=>{
            alert('Desculpe. Houve um erro ao cadastrar o usuário')
        })
    }
}