<template>
    <div>
      <h1>{{ usuario.name }}</h1>
    </div>
  </template>
  <script>
  import axios from "axios"
  
  export default{
    data(){
      return{
        usuario: { }
      
    }
    },
    mounted(){
      axios.get('https://api.github.com/users/jlaindorf')
      .then(res =>  this.usuario = res.data)
    }
    
    
    }
  </script>