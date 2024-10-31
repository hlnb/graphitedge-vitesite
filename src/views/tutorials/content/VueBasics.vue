<script setup lang="ts">
import { ref } from 'vue';

const tutorials = ref([
  {
    name: 'Project Setup',
    content: 'Create a new Vue project using Vite',
    code: 'npm create vite@latest rotto-rocks-vue -- --template vue-ts\ncd rotto-rocks-vue\nnpm install\nnpm run dev'
  },
  {
    name: 'Components',
    content: 'Break down the site into reusable components',
    code: `// BeachCard.vue
import { defineProps } from 'vue'

interface Beach {
  name: string
  description: string
  image: string
  facilities: string[]
}

defineProps<{
  beach: Beach
}>()`
  },
  {
    name: 'Component Template',
    content: 'Create the template for your beach card component',
    code: `<!-- Template section should be in BeachCard.vue -->
<div class="beach-card">
  <img :src="beach.image" :alt="beach.name">
  <div class="content">
    <h3>\{{ beach.name }}</h3>
    <p>\{{ beach.description }}</p>
    <ul>
      <li v-for="facility in beach.facilities" 
          :key="facility">
        \{{ facility }}
      </li>
    </ul>
  </div>
</div>`
  },
  {
    name: 'State Management',
    content: 'Learn to manage application state with Vue Composition API',
    code: `// useBeaches.ts
import { ref, computed } from 'vue'

export function useBeaches() {
  const beaches = ref([{
    name: 'The Basin',
    description: 'Crystal clear waters perfect for swimming',
    image: '/images/basin.jpg',
    facilities: ['Picnic Area', 'Bike Racks', 'Snorkeling']
  }])

  const favoriteBeaches = ref(new Set())

  const toggleFavorite = (beachName: string) => {
    if (favoriteBeaches.value.has(beachName)) {
      favoriteBeaches.value.delete(beachName)
    } else {
      favoriteBeaches.value.add(beachName)
    }
  }

  return {
    beaches,
    toggleFavorite,
    isFavorite: (name: string) => favoriteBeaches.value.has(name)
  }
}`
  }
]);

const nextTutorial = {
  name: 'Getting Started with Eleventy',
  path: '/tutorials/eleventy-basics'
} as const;
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Vue.js for Beginners</h1>
    
    <div class="space-y-8">
      <section v-for="tutorial in tutorials" :key="tutorial.name">
        <h2 class="text-2xl font-semibold mb-4">{{ tutorial.name }}</h2>
        <p class="mb-4">{{ tutorial.content }}</p>
        
        <div class="bg-gray-50 p-4 rounded-lg mb-4">
          <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">{{ tutorial.code }}</pre>
        </div>
      </section>

      <div class="next-steps bg-gray-50 p-4 rounded-lg mt-8">
        <h2 class="text-xl font-semibold mb-4">Next Steps</h2>
        <p>Ready to learn more? Continue to the next tutorial:</p>
        <router-link 
          :to="nextTutorial.path"
          class="inline-flex items-center text-primary hover:text-primary-dark transition-colors mt-4"
        >
          Continue to "{{ nextTutorial.name }}"
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>