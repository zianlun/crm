import Vue from 'vue'
import App from './App.vue'
import "@/config/element-ui"
import router from '@/config/router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
