import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  excerpt: string
  date: string
  tags: string[]
  description?: string
}

export default {
  watch: ['blog/*.md'],
  async load(): Promise<Post[]> {
    const data = await createContentLoader('blog/*.md', {
      excerpt: true,
    }).load()

    return data.map(post => ({
      title: post.frontmatter.title || 'Untitled',
      url: post.url,
      excerpt: post.excerpt || post.frontmatter.description || '',
      date: post.frontmatter.date,
      tags: post.frontmatter.tags || [],
      description: post.frontmatter.description
    }))
  }
}