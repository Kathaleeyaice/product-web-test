import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Order from '../views/orderPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  }
]

const router = new VueRouter({
  routes
})

export default router
