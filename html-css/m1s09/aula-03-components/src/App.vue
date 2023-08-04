<template>
  <!-- utilizando o componente -->
  <Card>
    <template v-slot:header>
      <h1>Titulo do meu card</h1>
    </template>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, rem harum debitis animi ducimus expedita numquam autem nostrum, voluptatum suscipit dolorum unde vel eaque dolorem doloremque sunt. Ea, sit dicta.</p>
    <template #footer>
      <h6>Created by Bruno Costa</h6>
    </template>
  </Card>
</template>
<script >
import Card from "./components/card.vue"

export default{
  components:{
    Card
  }
}

</script>

<style scoped>

</style>
