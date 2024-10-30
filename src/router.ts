import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Tutorials from './views/Tutorials.vue'
import Blog from './views/Blog.vue'
import Contact from './views/Contact.vue'
import TutorialContent from './components/tutorials/TutorialContent.vue'
import VueBasics from './components/tutorials/content/VueBasics.vue'
import EleventyBasics from './components/tutorials/content/EleventyBasics.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/tutorials', component: Tutorials },
    { path: '/tutorials/vue-basics', component: VueBasics },
    { path: '/tutorials/eleventy-basics', component: EleventyBasics },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact }
  ]
})

export default router