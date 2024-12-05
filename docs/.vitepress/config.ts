import { defineConfig } from 'vitepress'

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
      { 
        text: 'Tutorials',
        link: '/tutorials/',
        items: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Overview', link: '/tutorials/getting-started/' },
              { text: 'Development Setup', link: '/tutorials/getting-started/01-development-setup/' },
              { text: 'Web Basics', link: '/tutorials/getting-started/02-web-basics/' },
              { text: 'Text Editors', link: '/tutorials/getting-started/03-text-editors/' },
              { text: 'Browser Tools', link: '/tutorials/getting-started/04-browser-tools/' }
            ]
          },
          {
            text: 'Beginner Tutorials',
            items: [
              { text: 'HTML Basics', link: '/tutorials/beginner/html-basics/01-introduction/' },
              { text: 'CSS Fundamentals', link: '/tutorials/beginner/css-basics/' },
              { text: 'JavaScript Basics', link: '/tutorials/beginner/javascript-basics/' }
            ]
          }
        ]
      },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/contact/' },
      { text: 'Resources', link: '/resources/' }
    ],

    sidebar: {
      '/tutorials/': [
        {
          text: 'HTML Basics',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/tutorials/beginner/html-basics/01-introduction/' },
            { text: 'Text and Headings', link: '/tutorials/beginner/html-basics/02-text-headings/' },
            { text: 'Links and Images', link: '/tutorials/beginner/html-basics/03-links-images/' },
            { text: 'Lists and Tables', link: '/tutorials/beginner/html-basics/04-lists-tables/' },
            { text: 'Forms and Inputs', link: '/tutorials/beginner/html-basics/06-forms-inputs/' },
            { text: 'Project - Discover Rottnest Island', link: '/tutorials/beginner/html-basics/07-RottoRocks/' }  
          ]
        },
        {
          text: 'CSS Basics',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/tutorials/beginner/css-basics/01-introduction/' },
            { text: 'Selectors', link: '/tutorials/beginner/css-basics/02-selectors/' },
            { text: 'Colors and Typography', link: '/tutorials/beginner/css-basics/03-colors-typography/' },
            { text: 'Box Model', link: '/tutorials/beginner/css-basics/04-box-model/' },
            { text: 'Flexbox Basics', link: '/tutorials/beginner/css-basics/05-flexbox-basics/' },
            { text: 'Project - Discover Rottnest Island', link: '/tutorials/beginner/css-basics/06-RottoRocks/' }
          ]
        },
        {
          text: 'JavaScript Basics',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/tutorials/beginner/javascript-basics/01-introduction/' },
            { text: 'Variables and Data Types', link: '/tutorials/beginner/javascript-basics/02-variables-data-types/' },
            { text: 'Control Flow', link: '/tutorials/beginner/javascript-basics/03-control-flow/' },
            { text: 'Functions', link: '/tutorials/beginner/javascript-basics/04-functions/' },
            { text: 'DOM Basics', link: '/tutorials/beginner/javascript-basics/05-dom-basics/' },
            { text: 'Events', link: '/tutorials/beginner/javascript-basics/06-events/' }
          ]
        },
        {
          text: 'CSS Advanced',
          collapsed: false,
          items: [
            { text: 'CSS Grid', link: '/tutorials/intermediate/css-advanced/01-grid/' },
            { text: 'Advanced Flexbox', link: '/tutorials/intermediate/css-advanced/02-advanced-flexbox/' },
            { text: 'Responsive Design', link: '/tutorials/intermediate/css-advanced/03-responsive-design/' },
            { text: 'CSS Variables', link: '/tutorials/intermediate/css-advanced/04-css-variables/' },
            { text: 'Transitions & Animations', link: '/tutorials/intermediate/css-advanced/05-animations/' }
          ]
        }
      ],
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
            { text: 'Document Structure', link: '/tutorials/beginner/html-basics/05-document-structure/' },
            { text: 'Forms and Inputs', link: '/tutorials/beginner/html-basics/06-forms-inputs/' },
            { text: 'Project - Discover Rottnest Island', link: '/tutorials/beginner/html-basics/07-RottoRocks/' }  
          ]
        }
      ],
      '/tutorials/beginner/css-basics/': [
        {
          text: 'CSS Fundamentals',
          items: [
            { text: 'Overview', link: '/tutorials/beginner/css-basics/' },
            { text: 'Introduction to CSS', link: '/tutorials/beginner/css-basics/01-introduction/' },
            // Future tutorials to be added:
            { text: 'Selectors & Properties', link: '/tutorials/beginner/css-basics/02-selectors/' },
            { text: 'Colors & Typography', link: '/tutorials/beginner/css-basics/03-colors-typography/' },
            { text: 'Box Model & Layout', link: '/tutorials/beginner/css-basics/04-box-model/' },
            { text: 'Flexbox Basics', link: '/tutorials/beginner/css-basics/05-flexbox-basics/' }
          ]
        }
      ],
      '/tutorials/beginner/javascript-basics/': [
        {
          text: 'JavaScript Basics',
          items: [
            { text: 'Overview', link: '/tutorials/beginner/javascript-basics/' },
            { text: 'Introduction', link: '/tutorials/beginner/javascript-basics/01-introduction/' },
            { text: 'Variables & Data Types', link: '/tutorials/beginner/javascript-basics/02-variables-data-types/' },
            { text: 'Control Flow', link: '/tutorials/beginner/javascript-basics/03-control-flow/' },
            { text: 'Functions', link: '/tutorials/beginner/javascript-basics/04-functions/' },
            { text: 'DOM Basics', link: '/tutorials/beginner/javascript-basics/05-dom-basics/' },
            { text: 'Events', link: '/tutorials/beginner/javascript-basics/06-events/' }
          ]
        }
      ],
      '/tutorials/intermediate/css-advanced/': [
        {
          text: 'Advanced CSS Techniques',
          items: [
            { text: 'Overview', link: '/tutorials/intermediate/css-advanced/' },
            { text: 'CSS Grid', link: '/tutorials/intermediate/css-advanced/01-grid/' },
            { text: 'Advanced Flexbox', link: '/tutorials/intermediate/css-advanced/02-advanced-flexbox/' },
            { text: 'Responsive Design', link: '/tutorials/intermediate/css-advanced/03-responsive-design/' },
            { text: 'CSS Variables', link: '/tutorials/intermediate/css-advanced/04-css-variables/' },
            { text: 'Transitions & Animations', link: '/tutorials/intermediate/css-advanced/05-animations/' }
          ]
        }
      ],
      '/resources/': [
        {
          text: 'Resources',
          items: [
            { text: 'Overview', link: '/resources/' },
            { text: 'Logos & Branding', link: '/resources/#logos-and-branding' },
            { text: 'Style Guides', link: '/resources/#style-guides' },
            { text: 'Project Assets', link: '/resources/#project-assets' },
            { text: 'Code Templates', link: '/resources/#code-templates' }
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

    copyCode: true,
    codeGroup: true
  },

  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    toc: { level: [1, 2, 3] },
    container: {}
  }
})
