import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/editor',
    //   name: 'editor',
    //   component: () => import('../views/EditView.vue')
    // }, 
    {
      path: '/:pathMatch(.*)*', 
      name: '404',
      component: () => import('../views/404View.vue')
    }
  ]
})

export default router
