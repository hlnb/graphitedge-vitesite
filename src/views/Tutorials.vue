<script setup lang="ts">
const categories = [
  {
    name: 'Fundamentals',
    description: 'Learn the basics of web development while building "Rotto Rocks" - a website about beautiful Rottnest Island',
    tutorials: [
      {
        id: 'html101',
        title: 'Getting Started with HTML',
        level: 'Beginner',
        duration: '30 mins',
        description: 'Create your first webpage! Learn about HTML tags, elements, and structure while building the homepage for Rotto Rocks.',
        topics: ['What is HTML?', 'Basic page structure', 'Headers and paragraphs', 'Creating a navigation menu']
      },
      {
        id: 'images-links',
        title: 'Adding Images and Links',
        level: 'Beginner',
        duration: '45 mins',
        description: 'Make your site come alive with pictures of Rottnest Island and create links to different pages.',
        topics: ['Adding images', 'Creating links', 'Organizing content', 'Image best practices']
      },
      {
        id: 'css-basics',
        title: 'Styling with CSS Basics',
        level: 'Beginner',
        duration: '1 hour',
        description: 'Learn how to make your website beautiful with CSS. Style your Rotto Rocks pages with colors, fonts, and layouts.',
        topics: ['What is CSS?', 'Colors and backgrounds', 'Text styling', 'Margins and padding']
      },
      {
        id: 'photo-gallery',
        title: 'Creating a Photo Gallery',
        level: 'Beginner',
        duration: '1 hour',
        description: 'Build an attractive gallery to showcase the best beaches and wildlife of Rottnest Island.',
        topics: ['Flexbox basics', 'Image galleries', 'Responsive design', 'Hover effects']
      },
      {
        id: 'contact-form',
        title: 'Contact Form Creation',
        level: 'Beginner',
        duration: '45 mins',
        description: 'Create a contact form for visitors to ask questions about Rottnest Island.',
        topics: ['HTML forms', 'Input types', 'Basic validation', 'Form styling']
      }
    ]
  },
  {
    name: 'Frameworks',
    description: 'Take your Rotto Rocks website to the next level with modern frameworks',
    tutorials: [
      { 
        id: 'vue-basics',
        title: 'Vue.js for Beginners',
        level: 'Intermediate',
        duration: '2 hours',
        description: 'Transform Rotto Rocks into a dynamic Vue.js application with interactive features.',
        topics: ['Vue.js basics', 'Components', 'State management', 'Event handling']
      },
      {
        id: 'eleventy-basics',
        title: 'Getting Started with Eleventy',
        level: 'Intermediate',
        duration: '1.5 hours',
        description: 'Build a fast, static version of Rotto Rocks using Eleventy static site generator.',
        topics: ['Static site generation', 'Templates', 'Collections', 'Markdown content']
      }
    ]
  },
  {
    name: 'Advanced Topics',
    tutorials: [
      {
        id: 'weather-widget',
        title: 'Adding a Weather Widget',
        level: 'Advanced',
        duration: '2 hours',
        description: 'Build a widget showing real-time weather conditions at Rottnest Island.',
        topics: ['API integration', 'Real-time data', 'Error handling', 'UI components']
      },
      {
        id: 'interactive-maps',
        title: 'Interactive Maps',
        level: 'Advanced',
        duration: '2.5 hours',
        description: 'Integrate an interactive map showing Rottnest Island points of interest.',
        topics: ['Leaflet.js', 'Custom markers', 'Map controls', 'Location data']
      }
    ]
  }
]
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Tutorials</h1>
    
    <div class="space-y-8">
      <section v-for="category in categories" :key="category.name">
        <h2 class="text-2xl font-bold mb-4">{{ category.name }}</h2>
        <p v-if="category.description" class="mb-6 text-gray-600">{{ category.description }}</p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="tutorial in category.tutorials"
            :key="tutorial.title"
            class="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 class="text-xl font-semibold mb-2">{{ tutorial.title }}</h3>
            <div class="flex items-center gap-2 mb-3">
              <span class="inline-block px-2 py-1 text-sm rounded-full" 
                    :class="{
                      'bg-green-100 text-green-800': tutorial.level === 'Beginner',
                      'bg-blue-100 text-blue-800': tutorial.level === 'Intermediate',
                      'bg-purple-100 text-purple-800': tutorial.level === 'Advanced'
                    }">
                {{ tutorial.level }}
              </span>
              <span class="text-sm text-gray-500">{{ tutorial.duration }}</span>
            </div>
            <p class="text-gray-600 mb-4">{{ tutorial.description }}</p>
            <div class="mb-4">
              <h4 class="font-medium mb-2">You'll learn:</h4>
              <ul class="list-disc list-inside text-gray-600">
                <li v-for="topic in tutorial.topics" :key="topic">{{ topic }}</li>
              </ul>
            </div>
            <router-link 
              :to="'/tutorials/' + tutorial.id"
              class="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
              Start Tutorial
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>