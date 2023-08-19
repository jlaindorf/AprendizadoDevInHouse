import {createRouter, createWebHistory} from 'vue-router'
// importar todas as telas/componentes//

import Home from '../views/Home/Home.vue'
import Login from '../views/Login/Login.vue'
import SignUp from '../views/Sign-Up/SignUp.vue'

//criar o roteamento//

const router = createRouter({

    history: createWebHistory(import.meta.url),
    routes:[

         {

            path:'/home',
            name: 'Home',
            component: Home      
        },
        {
            path:'/login',
            name: 'Login',
            component: Login
        },
        {
            path : '/cadastro',
            name: 'SignUp',
            component: SignUp
        },
      
    ]

   
})
// exportar o router
export default router
