import { defineConfig } from 'vitepress'

export default defineConfig({
<<<<<<< HEAD
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
=======
  // Site configuration
  title: 'GraphitEdge',
  description: 'Web Development Tutorials',
  base: '/',
  
  themeConfig: {
    // Site header/nav configuration
    logo: '/logo.png', // Make sure this path is correct
    siteTitle: 'GraphitEdge',
    
    // Top navigation menu
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Tutorials', 
>>>>>>> aa05e052b843fab0653fd557e9edf4bb113c5118
        items: [
          {
            text: 'Getting Started',
            items: [
<<<<<<< HEAD
              { text: 'Development Setup', link: '/tutorials/getting-started/development-setup' }
=======
              { text: 'Development Setup', link: '/tutorials/tools/development-setup.html' }
>>>>>>> aa05e052b843fab0653fd557e9edf4bb113c5118
            ]
          },
          {
            text: 'Beginner',
            items: [
<<<<<<< HEAD
              { text: 'HTML Basics', link: '/tutorials/beginner/html-basics/' },
              { text: 'CSS Basics', link: '/tutorials/beginner/css-basics/' },
              { text: 'JavaScript Intro', link: '/tutorials/beginner/javascript/' }
=======
              { text: 'HTML Basics', link: '/tutorials/beginner/html-basics/index.html' },
              { text: 'CSS Basics', link: '/tutorials/beginner/css-basics/index.html' },
              { text: 'JavaScript Intro', link: '/tutorials/beginner/javascript/introduction.html' }
            ]
          },
          {
            text: 'Intermediate',
            items: [
              { text: 'Vue Basics', link: '/tutorials/vue/vue-basics.html' },
              { text: 'Tailwind Basics', link: '/tutorials/tailwind/tailwind-basics.html' }
>>>>>>> aa05e052b843fab0653fd557e9edf4bb113c5118
            ]
          }
        ]
      },
<<<<<<< HEAD
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

=======
      { 
        text: 'Learning Path',
        items: [
          { text: '1. Development Setup', link: '/tutorials/tools/development-setup.html' },
          { text: '2. HTML Basics', link: '/tutorials/beginner/html-basics/index.html' },
          { text: '3. CSS Basics', link: '/tutorials/beginner/css-basics/index.html' },
          { text: '4. Image Links', link: '/tutorials/beginner/image-links/index.html' },
          { text: '5. Forms', link: '/tutorials/beginner/forms/basic-forms.html' },
          { text: '6. JavaScript Intro', link: '/tutorials/beginner/javascript/introduction.html' },
          { text: '7. Photo Gallery', link: '/tutorials/intermediate/photo-gallery/html-css-gallery.html' },
          { text: '8. Tailwind Basics', link: '/tutorials/tailwind/tailwind-basics.html' },
          { text: '9. Vue Basics', link: '/tutorials/vue/vue-basics.html' }
        ]
      },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/contact/' }
    ],

    // Sidebar configuration
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          {
            text: 'Development Setup',
            link: '/tutorials/tools/development-setup'
          }
        ]
      },
      {
        text: 'Beginner Tutorials',
        items: [
          {
            text: 'HTML Basics',
            link: '/tutorials/beginner/html-basics/'
          },
          {
            text: 'CSS Basics',
            link: '/tutorials/beginner/css-basics/'
          },
          {
            text: 'JavaScript',
            link: '/tutorials/beginner/javascript/introduction'
          },
          {
            text: 'Image Links',
            link: '/tutorials/beginner/image-links/index.html'
          },
          {
            text: 'Forms',
            items: [
              {
                text: 'Basic Forms',
                link: '/tutorials/beginner/forms/basic-forms.html'
              }
            ]
          }
        ]
      },
      {
        text: 'Intermediate Tutorials',
        items: [
          {
            text: 'Photo Gallery',
            items: [
              { 
                text: 'HTML & CSS Gallery', 
                link: '/tutorials/intermediate/photo-gallery/html-css-gallery.html'
              },
              { 
                text: 'Tailwind Gallery', 
                link: '/tutorials/intermediate/photo-gallery/tailwind-gallery.html'
              }
            ]
          },
          {
            text: 'Vue.js',
            items: [
              {
                text: 'Vue Basics',
                link: '/tutorials/vue/vue-basics.html'
              }
            ]
          },
          {
            text: 'Tailwind CSS',
            items: [
              {
                text: 'Tailwind Basics',
                link: '/tutorials/tailwind/tailwind-basics.html'
              }
            ]
          }
        ]
      },
      {
        text: 'Advanced Tutorials',
        items: [
          {
            text: 'Vue Components',
            link: '/tutorials/advanced/vue-components/index.html'
          }
        ]
      }
    ],

    // Footer configuration
>>>>>>> aa05e052b843fab0653fd557e9edf4bb113c5118
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present GraphitEdge'
    },

<<<<<<< HEAD
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
=======
    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/graphitedge' }
    ],

    // Search configuration
    search: {
      provider: 'local'
    },

    blog: {
      title: 'Blog',
      description: 'Latest articles and tutorials',
      defaultAuthor: 'GraphitEdge Team',
      categoryIcons: {
        article: '📝',
        tutorial: '📚',
        guide: '📌'
      },
      list: {
        // Number of posts to show per page
        pageSize: 10
      }
    }
  },

  // Add this to ignore dead links during build
  ignoreDeadLinks: true,  // Temporary fix while updating links

  markdown: {
    languages: [
      'javascript',
      'typescript',
      'html',
      'css',
      'vue',
      'bash',
      'markdown',
      'json'
    ],
    frontmatter: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
}) 
>>>>>>> aa05e052b843fab0653fd557e9edf4bb113c5118
