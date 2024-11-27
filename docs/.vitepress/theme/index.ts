import DefaultTheme from 'vitepress/theme'
<<<<<<< HEAD
import BlogIndex from './BlogIndex.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BlogIndex', BlogIndex)
  }
}
=======
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Custom app enhancements can go here
  }
}
>>>>>>> aa05e052b843fab0653fd557e9edf4bb113c5118
