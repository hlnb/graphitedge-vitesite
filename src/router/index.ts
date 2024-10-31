import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tutorials',
      name: 'Tutorials',
      component: () => import('../views/Tutorials.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/Blog.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    }
  ]
})

export default router 