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
    },
    {path: '/search', name: 'Search', component: ()=>import('../views/Search')},
    {path: '/register', name: 'register', component: ()=>import('../views/RegisterPage')},
    {path: '/commodityDetail/:id', name: 'commodityDetail', component: ()=>import('../views/CommodityDetail')},
    {path: '/shoppingCart', name: 'shoppingCart', component: ()=>import('../views/ShoppingCart')},
    {path: '/commodityList/:id', name: 'commodityList', component: ()=>import('../views/CommodityList')},
    {path: '/login', name: 'Login', component: ()=>import('../views/LoginPage')},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
