import Vue from 'vue'
import VueRouter from 'vue-router'
import ComeView from '@/views/ComeView'
import HomeView from '@/views/HomeView'
import MainView from '@/views/MainView'
Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        component:ComeView,
        
    },
    {
        path:'/home',
        component:HomeView,
        redirect:'/home/main',
        children:[
            {
                path:'main', 
                component:MainView,
            },
        ]
    }
]
const router = new VueRouter({
    routes
})
export default router;