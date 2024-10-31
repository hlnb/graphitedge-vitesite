import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // ... other routes ...
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/Blog.vue')
    },
    {
      path: '/blog/:slug',
      name: 'BlogPost',
      component: () => import('../views/BlogPost.vue')
    }
  ]
})

export default router 