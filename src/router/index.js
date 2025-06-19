import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/AppHome.vue'
import Login from '../views/LoginForm.vue'
import Register from '../views/RegisterForm.vue'
import CartView from '../views/CartView.vue'
// import AdminView from '../views/AdminView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/cart', component: CartView }
    // { path: '/admin', name: 'Admin', component: AdminView }
  ]
})
