import {createRouter, createWebHistory} from 'vue-router'
// importar todas as telas/componentes//

import Home from '../views/Home/Home.vue'
import Login from '../views/Login/Login.vue'
import SignUp from '../views/Sign-Up/SignUp.vue'
import NewPost from '../views/Posts/New/NewPost.vue'
import ListPost from '../views/Posts/List/ListPost.vue'
//criar o roteamento//

const router = createRouter({

    history: createWebHistory(import.meta.url),
    routes:[

         {

            path:'/Home',
            name: 'Home',
            component: Home      
        },
        {
            path:'/',
            name: 'Login',
            component: Login
        },
        {
            path : '/cadastro',
            name: 'SignUp',
            component: SignUp
        },
        {
            path:'/posts/novo',
            name: 'NewPost',
            component: NewPost


        },
        {
            path:'/posts',
            name: 'ListPost',
            component: ListPost
        }
      
    ]

   
})
// exportar o router
export default router
