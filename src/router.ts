import { createRouter, createWebHistory } from 'vue-router'

// Main Views
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Blog from '@/views/Blog.vue'
import Tutorials from '@/views/Tutorials.vue'

// Tutorial Content
import SetupTools from '@/components/tutorials/content/SetupTools.vue'
import HTML101 from '@/components/tutorials/content/HTML101.vue'
import ImagesLinks from '@/components/tutorials/content/ImagesLinks.vue'
import CSSBasics from '@/components/tutorials/content/CSSBasics.vue'
import PhotoGallery from '@/components/tutorials/content/PhotoGallery.vue'
import ContactForm from '@/components/tutorials/content/ContactForm.vue'
import VueBasics from '@/components/tutorials/content/VueBasics.vue'
import EleventyBasics from '@/components/tutorials/content/EleventyBasics.vue'
import WeatherWidget from '@/components/tutorials/content/WeatherWidget.vue'
import InteractiveMaps from '@/components/tutorials/content/InteractiveMaps.vue'

const routes = [
  // Main Routes
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - GraphitEdge'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About - GraphitEdge'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'Blog - GraphitEdge'
    }
  },
  {
    path: '/tutorials',
    name: 'Tutorials',
    component: Tutorials,
    meta: {
      title: 'Tutorials - GraphitEdge'
    }
  },

  // Tutorial Routes - Fundamentals
  {
    path: '/tutorials/setup-tools',
    name: 'SetupTools',
    component: SetupTools,
    meta: {
      title: 'Development Setup - GraphitEdge Tutorials',
      category: 'Fundamentals'
    }
  },
  {
    path: '/tutorials/html101',
    name: 'HTML101',
    component: HTML101,
    meta: {
      title: 'HTML Basics - GraphitEdge Tutorials',
      category: 'Fundamentals'
    }
  },
  {
    path: '/tutorials/images-links',
    name: 'ImagesLinks',
    component: ImagesLinks,
    meta: {
      title: 'Images & Links - GraphitEdge Tutorials',
      category: 'Fundamentals'
    }
  },
  {
    path: '/tutorials/css-basics',
    name: 'CSSBasics',
    component: CSSBasics,
    meta: {
      title: 'CSS Basics - GraphitEdge Tutorials',
      category: 'Fundamentals'
    }
  },

  // Tutorial Routes - Interactive Features
  {
    path: '/tutorials/photo-gallery',
    name: 'PhotoGallery',
    component: PhotoGallery,
    meta: {
      title: 'Photo Gallery - GraphitEdge Tutorials',
      category: 'Interactive Features'
    }
  },
  {
    path: '/tutorials/contact-form',
    name: 'ContactForm',
    component: ContactForm,
    meta: {
      title: 'Contact Form - GraphitEdge Tutorials',
      category: 'Interactive Features'
    }
  },

  // Tutorial Routes - Advanced Topics
  {
    path: '/tutorials/vue-basics',
    name: 'VueBasics',
    component: VueBasics,
    meta: {
      title: 'Vue.js Basics - GraphitEdge Tutorials',
      category: 'Advanced Topics'
    }
  },
  {
    path: '/tutorials/eleventy-basics',
    name: 'EleventyBasics',
    component: EleventyBasics,
    meta: {
      title: 'Eleventy Basics - GraphitEdge Tutorials',
      category: 'Advanced Topics'
    }
  },
  {
    path: '/tutorials/weather-widget',
    name: 'WeatherWidget',
    component: WeatherWidget,
    meta: {
      title: 'Weather Widget - GraphitEdge Tutorials',
      category: 'Advanced Topics'
    }
  },
  {
    path: '/tutorials/interactive-maps',
    name: 'InteractiveMaps',
    component: InteractiveMaps,
    meta: {
      title: 'Interactive Maps - GraphitEdge Tutorials',
      category: 'Advanced Topics'
    }
  },

  // 404 Route
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '404 Not Found - GraphitEdge'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update document titles
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'GraphitEdge'
  next()
})

export default router