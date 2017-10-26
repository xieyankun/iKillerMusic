import Vue from 'vue'
import Router from 'vue-router'
import { loadUserData } from '@/api'
import Recommend from 'views/recommend/recommend'
import Singer from 'views/singer/singer'
import Rank from 'views/rank/rank'
import Search from 'views/search/search'
import store from '../store'

Vue.use(Router)

const router = {
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
}

const routerInstance = new Router(router)

routerInstance.beforeEach((to, from, next) => {
  console.log('router to:', to.query)
  if (!to.meta.user) {
    // todo 请求接口获取数据
    loadUserData().then(user => {
      console.log('router hook loadUserData:', user)
      console.log('to:', to)
      console.log('from:', from)
      to.meta.user = user
      store.state.user = user
      if (user) {
        next()
      } else {
        next({
          path: '/'
        })
      }
    })
  } else {
    next()
  }
})

export default routerInstance
