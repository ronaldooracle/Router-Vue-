import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fone from '../views/Fone.vue'
import Sobre from '../views/Sobre.vue'
import Galeria from '../views/Galeria.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/Fone',
        name: 'Fone',
        component: Fone
    },
    {
        path: '/Sobre',
        name: 'Sobre',
        component: Sobre
    },
    {
        path: '/Galeria',
        name: 'Galeria',
        component: Galeria
    }


]

const router = new VueRouter({
mode: 'history',
//base: 'http://localhost:8080',
routes
})

export default router