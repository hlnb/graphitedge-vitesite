import { defineLoader } from 'vitepress'

export default defineLoader({
  watch: ['blog/*.md'],
  async load(watchedFiles) {
    const posts = await Promise.all(
      watchedFiles.map(async (file) => {
        const { frontmatter, url } = await import(file)
        return {
          title: frontmatter.title,
          url,
          excerpt: frontmatter.description || '',
          date: frontmatter.date,
          tags: frontmatter.tags || [],
          description: frontmatter.description
        }
      })
    )
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
})