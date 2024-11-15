<script setup lang="ts">
import { ref, computed } from 'vue'
import TutorialCard from '@/components/TutorialCard.vue'

interface Tutorial {
  path: string
  title: string
  description: string
  level: string
  tags: string[]
  order: number
  category: string
}

const categories = [
  { id: 'all', name: 'All Tutorials' },
  { id: 'fundamentals', name: 'Fundamentals' },
  { id: 'interactive', name: 'Interactive Features' },
  { id: 'advanced', name: 'Advanced Topics' }
]

const selectedCategory = ref('all')

const tutorials = ref<Tutorial[]>([
  {
    path: '/tutorials/SetupTools',
    title: 'Setting Up Your Development Environment',
    description: 'Learn how to set up your development environment for web development.',
    level: 'Beginner',
    tags: ['Development', 'Tools'],
    order: 0,
    category: 'fundamentals'
  },
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
    path: '/tutorials/ImagesLinks',
    title: 'Images and Links',
    description: 'Learn how to add images and links to your web pages.',
    level: 'Beginner',
    tags: ['HTML', 'Web Development'],
    order: 2,
    category: 'fundamentals'
  },
  {
    path: '/tutorials/Forms',
    title: 'HTML Forms',
    description: 'Learn how to create interactive forms and handle user input effectively.',
    level: 'Beginner',
    tags: ['HTML', 'Web Development'],
    order: 3,
    category: 'fundamentals'
  },
  {
    path: '/tutorials/CSSBasics',
    title: 'CSS Basics',
    description: 'Master the basics of CSS and start styling your web pages beautifully.',
    level: 'Beginner',
    tags: ['CSS', 'Web Development'],
    order: 4,
    category: 'fundamentals'
  },
  {
    path: '/tutorials/javascript-introduction',
    title: 'Introduction to JavaScript',
    description: 'Learn the fundamentals of JavaScript programming with hands-on examples and exercises.',
    level: 'Beginner',
    tags: ['JavaScript'],
    order: 5,
    category: 'fundamentals'
  },
  {
    path: '/tutorials/VueBasics',
    title: 'Vue.js Basics',
    description: 'Get started with Vue.js and learn the fundamentals of this progressive framework.',
    level: 'Intermediate',
    tags: ['Vue.js', 'JavaScript'],
    order: 6,
    category: 'fundamentals'
  },
  {
    path: '/tutorials/tailwind-styling',
    title: 'Styling with Tailwind CSS',
    description: 'Learn how to create a consistent design system using Tailwind CSS',
    level: 'Intermediate',
    tags: ['Tailwind CSS'],
    order: 7,
    category: 'fundamentals'
  },
  {
    path: '/tutorials/photo-gallery',
    title: 'Building a Photo Gallery',
    description: 'Create an interactive photo gallery using Vue.js and modern CSS techniques.',
    level: 'Intermediate',
    tags: ['Tailwind CSS', 'CSS'],
    order: 7,
    category: 'interactive'
  },
  {
    path: '/tutorials/gallery-component',
    title: 'Building a Gallery Component with Vue',
    description: 'Learn how to create a gallery component using Vue.js and Tailwind CSS.',
    level: 'Intermediate',
    tags: ['Vue.js', 'Tailwind CSS'],
    order: 8,
    category: 'interactive'
  },
  {
    path: '/tutorials/ContactForm',
    title: 'Building a Contact Form',
    description: 'Learn how to create and validate a contact form using Vue.js.',
    level: 'Intermediate',
    tags: ['Vue.js', 'Forms'],
    order: 8,
    category: 'interactive'
  },
  {
    path: '/tutorials/InteractiveMaps',
    title: 'Creating Interactive Maps',
    description: 'Build interactive maps using modern web technologies.',
    level: 'Advanced',
    tags: ['JavaScript', 'Maps'],
    order: 9,
    category: 'interactive'
  },
  {
    path: '/tutorials/WeatherWidget',
    title: 'Building a Weather Widget',
    description: 'Create a dynamic weather widget using APIs and Vue.js.',
    level: 'Intermediate',
    tags: ['Vue.js', 'API'],
    order: 10,
    category: 'interactive'
  },
  {
    path: '/tutorials/complex-functions',
    title: 'Writing Complex Functions',
    description: 'Learn advanced function concepts including higher-order functions, closures, recursion, and async functions.',
    level: 'Advanced',
    tags: ['JavaScript', 'Functions'],
    order: 11,
    category: 'advanced'
  },
  {
    path: '/tutorials/EleventyBasics',
    title: 'Getting Started with Eleventy',
    description: 'Learn the basics of the Eleventy static site generator.',
    level: 'Intermediate',
    tags: ['Eleventy', 'Static Sites'],
    order: 12,
    category: 'advanced'
  }
])

const getFundamentals = computed(() => {
  return tutorials.value.filter(tutorial => tutorial.category === 'fundamentals')
})

const getInteractive = computed(() => {
  return tutorials.value.filter(tutorial => tutorial.category === 'interactive')
})

const getAdvanced = computed(() => {
  return tutorials.value.filter(tutorial => tutorial.category === 'advanced')
})

const filteredTutorials = computed(() => {
  if (selectedCategory.value === 'all') {
    return tutorials.value
  }
  return tutorials.value.filter(tutorial => tutorial.category === selectedCategory.value)
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Tutorials</h1>

    <!-- Category Tabs -->
    <div class="border-b border-gray-200 mb-8">
      <nav class="-mb-px flex space-x-8" aria-label="Tutorial Categories">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="selectedCategory = category.id"
          :class="[
            selectedCategory === category.id
              ? 'border-brand-red text-brand-red'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
          ]"
        >
          {{ category.name }}
        </button>
      </nav>
    </div>

    <!-- Category Sections -->
    <div v-if="selectedCategory === 'all'">
      <!-- Fundamentals Section -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Fundamentals</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <template v-for="tutorial in getFundamentals" :key="tutorial.path">
            <TutorialCard :tutorial="tutorial" />
          </template>
        </div>
      </div>

      <!-- Interactive Features Section -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Interactive Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <template v-for="tutorial in getInteractive" :key="tutorial.path">
            <TutorialCard :tutorial="tutorial" />
          </template>
        </div>
      </div>

      <!-- Advanced Topics Section -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Advanced Topics</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <template v-for="tutorial in getAdvanced" :key="tutorial.path">
            <TutorialCard :tutorial="tutorial" />
          </template>
        </div>
      </div>
    </div>

    <!-- Filtered View -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <template v-for="tutorial in filteredTutorials" :key="tutorial.path">
        <TutorialCard :tutorial="tutorial" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply text-brand-red;
}
</style>