<template>
 <v-Layout>
    <v-app-bar  color="#d6249f" v-if="renderizarMenu">
         <v-app-bar-tittle >Instagram</v-app-bar-tittle>
         <v-btn icon>
            <router-link to="/posts/novo"> <v-icon>mdi-post</v-icon></router-link>
         
         </v-btn>
        </v-app-bar>
    
 <v-main>
 <router-view></router-view>
</v-main>
</v-Layout>
</template>
<script>
 export default{
   
    computed:{
        renderizarMenu(){
            return this.$route.path !== '/' && this.$route.path !== '/cadastro'
                
            
        }
    }


 }



</script>