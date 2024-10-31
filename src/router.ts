import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('./views/Blog.vue')
    },
    {
      path: '/tutorials',
      name: 'Tutorials',
      component: () => import('./views/Tutorials.vue')
    },
    {
      path: '/tutorials/setup-tools',
      name: 'SetupTools',
      component: () => import('./components/tutorials/content/SetupTools.vue')
    },
    {
      path: '/tutorials/html101',
      name: 'HTML101',
      component: () => import('./components/tutorials/content/HTML101.vue')
    },
    {
      path: '/tutorials/images-links',
      name: 'ImagesLinks',
      component: () => import('./components/tutorials/content/ImagesLinks.vue')
    },
    {
      path: '/tutorials/css-basics',
      name: 'CSSBasics',
      component: () => import('./components/tutorials/content/CSSBasics.vue')
    },
    {
      path: '/tutorials/photo-gallery',
      name: 'PhotoGallery',
      component: () => import('./components/tutorials/content/PhotoGallery.vue')
    },
    {
      path: '/tutorials/contact-form',
      name: 'ContactForm',
      component: () => import('./components/tutorials/content/ContactForm.vue')
    },
    {
      path: '/tutorials/vue-basics',
      name: 'VueBasics',
      component: () => import('./components/tutorials/content/VueBasics.vue')
    },
    {
      path: '/tutorials/eleventy-basics',
      name: 'EleventyBasics',
      component: () => import('./components/tutorials/content/EleventyBasics.vue')
    },
    {
      path: '/tutorials/weather-widget',
      name: 'WeatherWidget',
      component: () => import('./components/tutorials/content/WeatherWidget.vue')
    },
    {
      path: '/tutorials/interactive-maps',
      name: 'InteractiveMaps',
      component: () => import('./components/tutorials/content/InteractiveMaps.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/NotFound.vue')
    }
  ]
})

export default router