<template>
    <div>
      <h1>Calculadora IMC</h1>
      
      <input type="number" placeholder="Peso"  v-model="peso"/>
      <input type="number" placeholder="Altura" v-model="altura" />
      <button v-on:click="calcular()">Calcular</button>
      
      <!-- AQUI VAI O RESULTADO -->
      <span> {{ resultado }} </span>
    </div>
  </template>
  
  <script>
    export default{

        data(){
            return{
              peso : 0,
              altura : 0,
              resultado : "",
             }

        },
        methods:{

            calcular(){
      if(this.peso == 0 || this.altura == 0){
        alert("Os dados precisam ser maiores que 0")
        return
      }

      this.resultado = (this.peso / (this.altura ** 2)).toFixed(2)
    },
        }

    }
  </script>
  
  <style>
  
  </style>