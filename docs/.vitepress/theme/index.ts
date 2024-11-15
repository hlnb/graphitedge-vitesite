import DefaultTheme from 'vitepress/theme'
import { type Theme } from 'vitepress'
import { data } from './blog.data'
import './custom.css'

// Re-export the blog data
export { data }

export default {
  extends: DefaultTheme,
  // other theme config if needed
} satisfies Theme