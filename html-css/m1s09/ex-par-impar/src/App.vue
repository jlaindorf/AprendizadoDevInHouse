<template>
  <div>
    <h1>Digite um número</h1>
    
    <input type="number" placeholder="Digite um número"  v-model="numero"/>
   
    <button v-on:click="calcular()">RESULTADO</button>
    
     </div>
</template>

<script>
  export default{

      data(){
          return{
           numero: 0,
           }

      },
      methods:{

          calcular(){
            if (this.numero % 2 === 0) {
        alert(`O número ${this.numero} é par.`);
      } else {
        alert(`O número ${this.numero} é impar.`);
      }
    },
      }

  }
</script>

<style>

</style>