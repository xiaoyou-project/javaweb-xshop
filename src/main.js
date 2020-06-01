import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 仅引入用到的图标以减小打包体积
import 'vue-awesome/icons/'
import Icon from 'vue-awesome/components/Icon'
// 全局注册（在 `main .js` 文件中）
Vue.component('v-icon', Icon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
