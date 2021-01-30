import Vue from 'vue'
import VueRouter from 'vue-router'
import mainLayout from '../layouts/mainLayout.vue'
import photos from '../components/photos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: mainLayout,
    name:'home',
    children: [
      {
        path: '/photos',
        name: 'photos',
        component: photos
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
