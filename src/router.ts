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
      path: '/contact',
      name: 'Contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/tutorials',
      name: 'Tutorials',
      component: () => import('./views/Tutorials.vue')
    },
    {
      path: '/tutorials/HTML101',
      name: 'HTML101',
      component: () => import('./views/tutorials/content/HTML101.vue')
    },
    {
      path: '/tutorials/CSSBasics',
      name: 'CSSBasics',
      component: () => import('./views/tutorials/content/CSSBasics.vue')
    },
    {
      path: '/tutorials/javascript-introduction',
      name: 'JavaScriptIntro',
      component: () => import('./views/tutorials/content/javascript-introduction.vue')
    },
    {
      path: '/tutorials/complex-functions',
      name: 'ComplexFunctions',
      component: () => import('./views/tutorials/content/complex-functions.vue')
    },
    {
      path: '/tutorials/photo-gallery',
      name: 'PhotoGallery',
      component: () => import('./views/tutorials/content/photo-gallery.vue')
    },
    {
      path: '/tutorials/VueBasics',
      name: 'VueBasics',
      component: () => import('./views/tutorials/content/VueBasics.vue')
    },
    {
      path: '/tutorials/ContactForm',
      name: 'ContactForm',
      component: () => import('./views/tutorials/content/ContactForm.vue')
    },
    {
      path: '/tutorials/EleventyBasics',
      name: 'EleventyBasics',
      component: () => import('./views/tutorials/content/EleventyBasics.vue')
    },
    {
      path: '/tutorials/ImagesLinks',
      name: 'ImagesLinks',
      component: () => import('./views/tutorials/content/ImagesLinks.vue')
    },
    {
      path: '/tutorials/Forms',
      name: 'Forms',
      component: () => import('./views/tutorials/content/Forms.vue')
    },
    {
      path: '/tutorials/InteractiveMaps',
      name: 'InteractiveMaps',
      component: () => import('./views/tutorials/content/InteractiveMaps.vue')
    },
    {
      path: '/tutorials/SetupTools',
      name: 'SetupTools',
      component: () => import('./views/tutorials/content/SetupTools.vue')
    },
    {
      path: '/tutorials/WeatherWidget',
      name: 'WeatherWidget',
      component: () => import('./views/tutorials/content/WeatherWidget.vue')
    },
    {
      path: '/blog/building-responsive-websites',
      name: 'ResponsiveWebsites',
      component: () => import('./views/blog/building-responsive-websites.vue')
    },
    {
      path: '/blog/why-vuejs-for-beginners',
      name: 'WhyVueForBeginners',
      component: () => import('./views/blog/why-vuejs-for-beginners.vue')
    },
    {
      path: '/blog/getting-started-with-web-development',
      name: 'GettingStarted',
      component: () => import('./views/blog/getting-started-with-web-development.vue')
    },
    {
      path: '/blog/transitioning-to-tech',
      name: 'TransitioningToTech',
      component: () => import('./views/blog/transitioning-to-tech.vue')
    },
    {
      path: '/blog/web-development-best-practices',
      name: 'WebDevBestPractices',
      component: () => import('./views/blog/web-development-best-practices.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/NotFound.vue')
    }
  ]
})

export default router