import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入全局变量组件
import global from './util/global'
Vue.use(global)

// 仅引入用到的图标以减小打包体积
import 'vue-awesome/icons/'
import Icon from 'vue-awesome/components/Icon'
// 全局注册（在 `main .js` 文件中）
Vue.component('v-icon', Icon)

//element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
