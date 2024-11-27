import { defineConfig } from 'vitepress'
import { mermaidPlugin } from 'vitepress-plugin-mermaid'

export default defineConfig({
  title: 'GraphitEdge',
  description: 'Web Development Tutorials and Guides',
  lastUpdated: true,
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#8D0000' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'GraphitEdge' }],
    ['script', { 
      src: 'https://kit.fontawesome.com/3d76de7658.js',
      crossorigin: 'anonymous'
    }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'GraphitEdge',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { 
        text: 'Tutorial Sections',
        items: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Overview', link: '/tutorials/getting-started/' },
              { text: 'Development Environment', link: '/tutorials/getting-started/01-development-setup/' },
              { text: 'Web Basics', link: '/tutorials/getting-started/02-web-basics/' },
              { text: 'Text Editors', link: '/tutorials/getting-started/03-text-editors/' }
          ]
          },
          {
            text: 'HTML Basics',
            link: '/tutorials/beginner/html-basics/01-introduction/'
          }
        ]
      }
    ],

    sidebar: {
      '/tutorials/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/tutorials/getting-started/' },
            { text: 'Development Environment', link: '/tutorials/getting-started/01-development-setup/' },
            { text: 'Web Basics', link: '/tutorials/getting-started/02-web-basics/' },
            { text: 'Text Editors', link: '/tutorials/getting-started/03-text-editors/' },
            { text: 'Browser Tools', link: '/tutorials/getting-started/04-browser-tools/' }
          ]
        }
      ],
      '/tutorials/beginner/html-basics/': [
        {
          text: 'HTML Basics',
          items: [
            { text: 'Introduction', link: '/tutorials/beginner/html-basics/01-introduction/' },
            { text: 'Your First HTML Page', link: '/tutorials/beginner/html-basics/02-first-page/' },
            { text: 'Text Elements', link: '/tutorials/beginner/html-basics/03-text-elements/' },
            { text: 'Links and Images', link: '/tutorials/beginner/html-basics/04-links-images/' },
            { text: 'Document Structure', link: '/tutorials/beginner/html-basics/05-document-structure/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hlnb/graphitedge' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present GraphitEdge'
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    blog: {
      title: 'Blog',
      description: 'Latest articles and tutorials',
      defaultAuthor: 'GraphitEdge Team'
    },

    copyCode: true
  },

  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    toc: { level: [1, 2, 3] }
  }
})
