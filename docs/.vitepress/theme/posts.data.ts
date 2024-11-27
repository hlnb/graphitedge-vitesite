/// <reference types="node" />

import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/*.md', {
  includeSrc: true,  // Include source content
  render: false,     // Don't pre-render
  transform(raw) {
    return raw.map(page => ({
      title: page.frontmatter?.title || 'Untitled',
      url: page.url,
      date: page.frontmatter?.date || '',
      tags: page.frontmatter?.tags || [],
      description: page.frontmatter?.description || ''
    }))
  }
}) 