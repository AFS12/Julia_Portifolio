import Vue from 'vue'
import VueRouter from 'vue-router'
import mainLayout from '../layouts/mainLayout.vue'
import home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: mainLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: home
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
