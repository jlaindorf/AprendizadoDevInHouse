<template>

  
    <form @submit.prevent="handleLogin" class="form-login" >
      <img width="60" src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="logo Instas">
      <div class="error-box">
       <ul>
         <li v-if="errorInputEmail">{{ errorInputEmail }}</li>
         <li v-if="errorInputPassword">{{ errorInputPassword }}</li>
       </ul>
        
      </div>
     
      <input  type="text" placeholder="Digite o email" v-model="email" >
       
       <input type="password" placeholder="Digite a senha" v-model="password">
      
       <button type="submit">Logar</button>

       <p><router-link to="/cadastro">CADASTRE-SE</router-link></p>
   
    </form>
   </template>
   
   <script>
   import axios from 'axios'
   export default{
     data(){
       return{
   
         email:'',
         password:'',
         errorInputEmail:'',
         errorInputPassword:'',
       }
     },
     methods: {
       handleLogin(){
         this.errorInputEmail= ''
         this.errorInputPassword=''
         if(this.email === '')this.errorInputEmail = 'Digite o Email'
         if(this.password === '')this.errorInputPassword = 'Digite a Senha'
         
        if(this.errorInputEmail === '' && this.errorInputPassword === ''){
          // this.$router.push('/home')
          axios({
          url: 'http://localhost:3000/api/login',
          method: 'POST',
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then((response) => {
          localStorage.setItem("instagram_token", response.data.token) //salvando o token na local storage
          localStorage.setItem("instagram_name", response.data.name)
          this.$router.push('/home')
          console.log(response.data.token) //token gerado pela api
          
        })
        .catch(() => {
          alert("Falha ao realizar login")
        })


        
        }
       }
     }
   }
   
   </script>
   
   <style scoped>
   .error-box{
     background-color: tomato;
     width: 80%;
     color: #fff;
   }
   .form-login{ margin: 40px auto;
       width: 40%;
   
       border-radius: 4px;
       border: 1px solid #383737;
   
       display: flex;
       flex-direction: column;
       gap: 20px;
       align-items: center;
   
       padding: 10px;
   }
   
   </style>