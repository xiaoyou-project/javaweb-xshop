import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Index.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/me',
      name: 'Me',
      component: ()=>import('../views/Me')
    }
]

const router = new VueRouter({
  routes
})

export default router
