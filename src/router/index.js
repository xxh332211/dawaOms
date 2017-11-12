import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Login from '@/view/login'
import store from '../store'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
      ]
    },
    // 未登录则进入登录页面
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
console.log(window.logcalStorage)
router.beforeEach((to, from, next) => {
  let islogin = store.getters.islogin
  if (islogin === false && to.fullPath !== '/login') {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

export default router
