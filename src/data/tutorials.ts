export const tutorials = [
  {
    name: 'Fundamentals',
    items: [
      {
        name: 'Development Setup',
        path: '/tutorials/setup-tools',
        description: 'Set up your development environment with essential tools'
      },
      {
        name: 'HTML Basics',
        path: '/tutorials/html101',
        description: 'Learn the fundamentals of HTML structure and elements'
      },
      {
        name: 'Images & Links',
        path: '/tutorials/images-links',
        description: 'Work with images, links, and media in HTML'
      },
      {
        name: 'CSS Basics',
        path: '/tutorials/css-basics',
        description: 'Style your web pages with CSS'
      }
    ]
  },
  {
    name: 'Interactive Features',
    items: [
      {
        name: 'Photo Gallery',
        path: '/tutorials/photo-gallery',
        description: 'Create an interactive photo gallery'
      },
      {
        name: 'Contact Form',
        path: '/tutorials/contact-form',
        description: 'Build and style a contact form'
      }
    ]
  },
  {
    name: 'Advanced Topics',
    items: [
      {
        name: 'Vue Basics',
        path: '/tutorials/vue-basics',
        description: 'Introduction to Vue.js framework'
      },
      {
        name: 'Eleventy Basics',
        path: '/tutorials/eleventy-basics',
        description: 'Static site generation with 11ty'
      },
      {
        name: 'Weather Widget',
        path: '/tutorials/weather-widget',
        description: 'Create a weather widget with API integration'
      },
      {
        name: 'Interactive Maps',
        path: '/tutorials/interactive-maps',
        description: 'Implement interactive maps with Leaflet'
      }
    ]
  }
] as const

// Type for a tutorial item
export interface TutorialItem {
  name: string;
  path: string;
  description: string;
}

// Type for a tutorial category
export interface TutorialCategory {
  name: string;
  items: TutorialItem[];
} 