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
// const router = new Router({
//   routes: routerBase.routes
// })
const routerInstance = new Router(router)

routerInstance.beforeEach((to, from, next) => {
  console.log('router to:', to.query)
  loadUserData().then(user => {
    console.log('router hook loadUserData:', user)
    to.meta.user = user
    store.state.user = user
    console.log('to:', to)
    console.log('from:', from)
  })
})
// routerInstance.beforeEach((to, from, next) => {
//   console.log('router to:', to.query)
//   console.log('to:', to)
//   console.log('from:', from)

//   next()
// })
export default routerInstance
