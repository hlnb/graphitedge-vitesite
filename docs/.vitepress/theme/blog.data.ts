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
    const posts = await createContentLoader('blog/*.md', {
      excerpt: true,
      transform(raw): Post[] {
        return raw
          .filter(post => post.url !== '/blog/') // Filter out index page
          .map(post => ({
            title: post.frontmatter.title,
            url: post.url,
            excerpt: post.excerpt || post.frontmatter.description || '',
            date: post.frontmatter.date,
            tags: post.frontmatter.tags || [],
            description: post.frontmatter.description
          }))
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      }
    }).load()

    return posts
  }
}