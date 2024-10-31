<script setup lang="ts">
import { computed } from 'vue'

interface Tutorial {
  name: string;
  content: string;
  code: string;
}

const tutorials = computed(() => [
  {
    name: 'Project Setup',
    content: 'Create a new Eleventy project',
    code: 'npm init -y\nnpm install @11ty/eleventy'
  },
  {
    name: 'Basic Configuration',
    content: 'Set up your Eleventy configuration file',
    code: `// .eleventy.js
module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};`
  }
] as Tutorial[]);

const nextTutorial = {
  name: 'Vue Basics',
  path: '/tutorials/vue-basics'
} as const;
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Getting Started with Eleventy</h1>
    
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
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
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