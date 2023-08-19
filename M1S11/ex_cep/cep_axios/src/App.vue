<template>
 <h1>{{ local.localidade}}</h1><br>
 <h2>{{ local.bairro }}</h2><br>
 <h2>{{ local.logradouro }}</h2>


</template>
<script>
import axios from "axios"

export default{
  data(){
    return{
      local: { }
    
  }
  },
  mounted(){
    axios.get('https://viacep.com.br/ws/88054130/json/')
    .then(res =>  this.local = res.data)
  }
  
  
  }
</script>