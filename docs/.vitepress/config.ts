import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'GraphitEdge',
  description: 'Web Development Tutorials and Guides',
  lastUpdated: true,
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'GraphitEdge' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'GraphitEdge',

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Tutorials',
        items: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Development Setup', link: '/tutorials/getting-started/development-setup' }
            ]
          },
          {
            text: 'Beginner',
            items: [
              { text: 'HTML Basics', link: '/tutorials/beginner/html-basics/' },
              { text: 'CSS Basics', link: '/tutorials/beginner/css-basics/' },
              { text: 'JavaScript Intro', link: '/tutorials/beginner/javascript/' }
            ]
          }
        ]
      },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about' }
    ],

    sidebar: {
      '/tutorials/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Development Setup', link: '/tutorials/getting-started/development-setup' }
          ]
        },
        {
          text: 'Beginner Tutorials',
          collapsed: false,
          items: [
            {
              text: 'HTML Basics',
              link: '/tutorials/beginner/html-basics/',
              items: [
                { text: 'Introduction', link: '/tutorials/beginner/html-basics/introduction' },
                { text: 'Structure', link: '/tutorials/beginner/html-basics/structure' }
              ]
            },
            {
              text: 'CSS Basics',
              link: '/tutorials/beginner/css-basics/',
              items: [
                { text: 'Introduction', link: '/tutorials/beginner/css-basics/introduction' },
                { text: 'Selectors', link: '/tutorials/beginner/css-basics/selectors' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/graphitedge' }
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

    // Blog configuration
    blog: {
      title: 'Blog',
      description: 'Latest articles and tutorials',
      defaultAuthor: 'GraphitEdge Team'
    }
  },

  markdown: {
    lineNumbers: true,
    // Add syntax highlighting for code blocks
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    // Configure code copy
    copyCode: true,
    // Enable table of contents
    toc: { level: [1, 2, 3] }
  }
})
