import Vue from 'vue'
import App from './App.vue'
import "@/config/element-ui"
import router from '@/config/router'
import store from './store'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
