import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import mint from 'mint-ui'
Vue.use(mint)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

