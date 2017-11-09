import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Login from '@/view/login/login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/login',
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  let xxh = 'true'
  if (xxh === 'true') {
    next()
  }
})

export default router
