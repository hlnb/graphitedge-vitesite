import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Tutorials from './views/Tutorials.vue'
import Blog from './views/Blog.vue'
import Contact from './views/Contact.vue'
import TutorialContent from './components/tutorials/TutorialContent.vue'
import WeatherWidget from './components/tutorials/content/WeatherWidget.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/tutorials', component: Tutorials },
    { 
      path: '/tutorials/:tutorialId', 
      component: TutorialContent,
      props: true 
    },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
    {
      path: '/tutorials/weather-widget',
      component: WeatherWidget
    }
  ]
})

export default router