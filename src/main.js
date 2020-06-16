import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import Fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
//创建 事件总线实例
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
Vue.use(toast)
// Fastclick.attach(document.body)
Vue.use(VueLazyLoad)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

