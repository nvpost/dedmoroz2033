import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import sNovymGodomView from '../views/sNovymGodomView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/game',
    name: 'GameView',

    component: GameView
  },

  {
    path: '/game',
    name: 'StartNewGame',
    beforeEnter:() => {
      localStorage.removeItem('owenNG2033')
      },
    component: GameView
  },
  {
    path: '/sNovymGodom',
    name: 'sNovymGodomView',
    component: sNovymGodomView
  },

  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
