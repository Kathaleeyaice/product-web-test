import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Order from '../views/orderPage'
import Checkout from '../views/checkoutPage'

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
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  }
]

const router = new VueRouter({
  routes
})

export default router
