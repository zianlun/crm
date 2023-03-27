import Vue from 'vue'
import VueRouter from 'vue-router'
import ComeView from '@/views/ComeView'
import HomeView from '@/views/HomeView'
import MainView from '@/views/MainView'
import IndexView from '@/views/IndexView'
import WorkView from '@/views/WorkView'
import MarketView from '@/views/MarketView'
import {getAccessToken} from '@/utils/token'
Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        component:ComeView,
        redirect:'/index',
        children:[
            {
                path:'index', 
                component:IndexView,
            },
            
        ]
    },
    {
        path:'/home',
        component:HomeView,
        redirect:'/home/work',
        children:[
            {
                path:'main', 
                component:MainView,
            },
            {
                path:'work',
                component:WorkView,
            },
            {
                path:'market',
                component:MarketView
            }
        ]
    }
]
const router = new VueRouter({
    routes
})
export default router;
router.beforeEach((to, from, next) => {
    if(!getAccessToken()){
        if(to.path == '/home' || to.path == '/home/main'){
            next(false)
        }
        else
            next()
    }
    else
        next()
})
