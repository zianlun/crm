//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)
//引入用户模块
import hello from './module/hello'
import user from './module/user'
//创建并暴露store
export default new Vuex.Store({
    modules:{
        hello,
        user
    }
})