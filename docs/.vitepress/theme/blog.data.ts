import { defineLoader } from 'vitepress'

export default defineLoader({
  watch: ['blog/*.md'],
  async load() {
    const posts = import.meta.glob('../blog/*.md', { eager: true })
    const data = []
    
    for (const path in posts) {
      const post = posts[path]
      data.push({
        title: post.frontmatter.title,
        url: post.url,
        date: post.frontmatter.date,
        tags: post.frontmatter.tags || [],
        description: post.frontmatter.description
      })
    }
    
    return data
  }
})
