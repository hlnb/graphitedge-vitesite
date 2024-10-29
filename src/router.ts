import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Tutorials from './views/Tutorials.vue'
import Blog from './views/Blog.vue'
import Contact from './views/Contact.vue'
import TutorialContent from './components/tutorials/TutorialContent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/tutorials', component: Tutorials },
    { path: '/tutorials/:id', component: TutorialContent },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact }
  ]
})

export default router