import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//创建 事件总线实例
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
