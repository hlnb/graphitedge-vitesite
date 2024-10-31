interface Tutorial {
  path: string
  title: string
  description: string
  level: string
  tags: string[]
  order: number
  category: string
}

const tutorials: Tutorial[] = [
  {
    path: '/tutorials/HTML101',
    title: 'HTML 101: Getting Started',
    description: 'Learn the fundamentals of HTML and start building your first web pages.',
    level: 'Beginner',
    tags: ['HTML', 'Web Development'],
    order: 1,
    category: 'fundamentals'
  },
  {
    path: '/tutorials/CSSBasics',
    title: 'CSS Basics',
    description: 'Master the basics of CSS and start styling your web pages beautifully.',
    level: 'Beginner',
    tags: ['CSS', 'Web Development'],
    order: 2,
    category: 'fundamentals'
  },
  {
    path: '/tutorials/javascript-introduction',
    title: 'Introduction to JavaScript',
    description: 'Learn the fundamentals of JavaScript programming with hands-on examples and exercises.',
    level: 'Beginner',
    tags: ['JavaScript'],
    order: 3,
    category: 'fundamentals'
  },
  {
    path: '/tutorials/VueBasics',
    title: 'Vue.js Basics',
    description: 'Get started with Vue.js and learn the fundamentals of this progressive framework.',
    level: 'Intermediate',
    tags: ['Vue.js', 'JavaScript'],
    order: 4,
    category: 'fundamentals'
  },
  {
    path: '/tutorials/photo-gallery',
    title: 'Building a Photo Gallery',
    description: 'Create an interactive photo gallery using Vue.js and modern CSS techniques.',
    level: 'Intermediate',
    tags: ['Vue.js', 'CSS'],
    order: 5,
    category: 'interactive'
  },
  {
    path: '/tutorials/ContactForm',
    title: 'Building a Contact Form',
    description: 'Learn how to create and validate a contact form using Vue.js.',
    level: 'Intermediate',
    tags: ['Vue.js', 'Forms'],
    order: 6,
    category: 'interactive'
  },
  {
    path: '/tutorials/InteractiveMaps',
    title: 'Creating Interactive Maps',
    description: 'Build interactive maps using modern web technologies.',
    level: 'Advanced',
    tags: ['JavaScript', 'Maps'],
    order: 7,
    category: 'interactive'
  },
  {
    path: '/tutorials/WeatherWidget',
    title: 'Building a Weather Widget',
    description: 'Create a dynamic weather widget using APIs and Vue.js.',
    level: 'Intermediate',
    tags: ['Vue.js', 'API'],
    order: 8,
    category: 'interactive'
  },
  {
    path: '/tutorials/complex-functions',
    title: 'Writing Complex Functions',
    description: 'Learn advanced function concepts including higher-order functions, closures, recursion, and async functions.',
    level: 'Advanced',
    tags: ['JavaScript', 'Functions'],
    order: 9,
    category: 'advanced'
  },
  {
    path: '/tutorials/EleventyBasics',
    title: 'Getting Started with Eleventy',
    description: 'Learn the basics of the Eleventy static site generator.',
    level: 'Intermediate',
    tags: ['Eleventy', 'Static Sites'],
    order: 10,
    category: 'advanced'
  },
  {
    path: '/tutorials/ImagesLinks',
    title: 'Working with Images and Links',
    description: 'Master the techniques for handling images and creating effective links.',
    level: 'Beginner',
    tags: ['HTML', 'Images'],
    order: 11,
    category: 'fundamentals'
  },
  {
    path: '/tutorials/SetupTools',
    title: 'Setting Up Development Tools',
    description: 'Learn how to set up your development environment with essential tools.',
    level: 'Beginner',
    tags: ['Tools', 'Setup'],
    order: 12,
    category: 'fundamentals'
  }
]

export default tutorials 