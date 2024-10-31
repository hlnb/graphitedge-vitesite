<script setup lang="ts">
import { tutorials } from '../data/tutorials'

const learningTips = [
  {
    icon: 'bullseye',
    title: 'Start with Fundamentals',
    description: 'Build a strong foundation with HTML, CSS, and development tools'
  },
  {
    icon: 'sync',
    title: 'Practice Regularly',
    description: 'Consistency is key - aim to code a little bit every day'
  },
  {
    icon: 'project-diagram',
    title: 'Build Projects',
    description: 'Apply your learning by building the included practical exercises'
  },
  {
    icon: 'users',
    title: 'Learn by Teaching',
    description: 'Reinforce your knowledge by explaining concepts to others'
  }
]

const pathHighlights = {
  beginner: {
    title: 'New to Web Development?',
    description: 'Start with our Fundamentals track to build a strong foundation:',
    steps: [
      'Set up your development environment',
      'Learn HTML structure and elements',
      'Master working with images and links',
      'Style your pages with CSS'
    ]
  },
  intermediate: {
    title: 'Ready for Interactive Features?',
    description: 'Build engaging user experiences with:',
    steps: [
      'Create responsive photo galleries',
      'Build and style contact forms',
      'Add user interactions',
      'Implement responsive design'
    ]
  },
  advanced: {
    title: 'Exploring Advanced Topics?',
    description: 'Take your skills to the next level with:',
    steps: [
      'Learn Vue.js framework basics',
      'Build with Eleventy static site generator',
      'Create weather widgets with APIs',
      'Implement interactive maps'
    ]
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Introduction Section -->
    <section class="mb-16">
      <div class="text-center max-w-4xl mx-auto mb-12">
        <h1 class="text-4xl font-bold mb-6">Web Development Tutorials</h1>
        <p class="text-xl text-gray-600 mb-8">
          Welcome to your web development journey! Our structured tutorials will guide you from 
          the basics to building modern web applications. Each tutorial includes practical 
          exercises and real-world projects.
        </p>
        <div class="flex justify-center gap-4">
          <a 
            href="#fundamentals" 
            class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Start Learning
          </a>
          <a 
            href="#learning-path" 
            class="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary-light transition-colors"
          >
            View Learning Path
          </a>
        </div>
      </div>

      <!-- Learning Tips -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div 
          v-for="tip in learningTips" 
          :key="tip.title"
          class="bg-white p-6 rounded-lg shadow-sm text-center"
        >
          <div class="text-4xl mb-4 text-primary">
            <font-awesome-icon :icon="tip.icon" />
          </div>
          <h3 class="text-lg font-semibold mb-2">{{ tip.title }}</h3>
          <p class="text-gray-600">{{ tip.description }}</p>
        </div>
      </div>

      <!-- Learning Paths -->
      <div id="learning-path" class="space-y-12 mb-16">
        <div 
          v-for="(path, key) in pathHighlights" 
          :key="key"
          class="bg-white p-8 rounded-lg shadow-sm"
        >
          <h2 class="text-2xl font-bold mb-4">{{ path.title }}</h2>
          <p class="text-gray-600 mb-6">{{ path.description }}</p>
          <ul class="grid md:grid-cols-2 gap-4">
            <li 
              v-for="step in path.steps" 
              :key="step"
              class="flex items-center space-x-2 text-gray-700"
            >
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ step }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Tutorial Categories -->
    <section id="fundamentals" class="space-y-16">
      <div v-for="category in tutorials" :key="category.name">
        <h2 class="text-3xl font-bold mb-8">{{ category.name }}</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link
            v-for="tutorial in category.items"
            :key="tutorial.path"
            :to="tutorial.path"
            class="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
          >
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {{ tutorial.name }}
              </h3>
              <p class="text-gray-600">{{ tutorial.description }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Encouragement Banner -->
    <section class="mt-16 bg-gradient-to-r from-primary to-primary-dark text-white p-8 rounded-lg text-center">
      <h2 class="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h2>
      <p class="text-lg mb-6">
        Remember: every expert was once a beginner. Take it step by step, and you'll be 
        amazed at what you can create!
      </p>
      <a 
        href="#fundamentals" 
        class="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
      >
        Start with Fundamentals
      </a>
    </section>
  </div>
</template>

<style scoped>
.text-primary {
  @apply text-blue-600;
}

.text-primary-dark {
  @apply text-blue-700;
}

.bg-primary {
  @apply bg-blue-600;
}

.bg-primary-light {
  @apply bg-blue-100;
}

.hover\:bg-primary-dark:hover {
  @apply bg-blue-700;
}

.from-primary {
  @apply from-blue-600;
}

.to-primary-dark {
  @apply to-blue-700;
}

.border-primary {
  @apply border-blue-600;
}
</style>