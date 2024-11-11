<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import type { Tutorial, Exercise } from '@/types'

const tutorial = ref<Tutorial>({
  title: 'Vue.js for Beginners',
  description: 'Learn the fundamentals of Vue.js including project setup, components, reactivity, and essential concepts',
  difficulty: 'Beginner',
  category: 'Vue.js',
  duration: '2-3 hours',
  steps: [
    {
      title: 'Project Setup',
      content: `
        <div class="step-content">
          <p class="mb-6">Let's start by creating a new Vue project using Vite, a modern build tool that offers a faster and leaner development experience:</p>
          
          <ul class="mb-6">
            <li>Create a new Vue project with TypeScript support</li>
            <li>Navigate to the project directory</li>
            <li>Install dependencies</li>
            <li>Start the development server</li>
          </ul>

          <p class="mb-6">Run these commands in your terminal to set up your project:</p>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer">Vite Documentation</a>
              </li>
              <li>
                <a href="https://vuejs.org/guide/quick-start.html" target="_blank" rel="noopener noreferrer">Vue.js Quick Start</a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `# Create a new project
npm create vite@latest my-vue-app -- --template vue-ts

# Navigate to project directory
cd my-vue-app

# Install dependencies
npm install

# Start development server
npm run dev`
    },
    {
      title: 'Vue Component Basics',
      content: `
        <div class="step-content">
          <p class="mb-6">Vue components are the building blocks of your application. Each component contains three main sections:</p>
          
          <ul class="mb-6">
            <li><strong>&lt;script&gt;</strong> - Contains component logic and data</li>
            <li><strong>&lt;template&gt;</strong> - Defines the component's HTML structure</li>
            <li><strong>&lt;style&gt;</strong> - Contains component-specific CSS</li>
          </ul>

          <p class="mb-6">Here's a basic component example using the Composition API with TypeScript:</p>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://vuejs.org/guide/essentials/component-basics.html" target="_blank" rel="noopener noreferrer">Component Basics</a>
              </li>
              <li>
                <a href="https://vuejs.org/guide/typescript/composition-api.html" target="_blank" rel="noopener noreferrer">TypeScript with Composition API</a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `<script setup lang="ts">
import { ref } from 'vue'

// Component logic
const count = ref(0)
const increment = () => count.value++
<\/script>

<template>
  <div class="counter">
    <p>Count is: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<style scoped>
.counter {
  padding: 1rem;
  text-align: center;
}
</style>`
    },
    {
      title: 'Reactivity Fundamentals',
      content: `
        <div class="step-content">
          <p class="mb-6">Vue's reactivity system automatically updates the UI when data changes.</p>
          
          <ul class="mb-6">
            <li>ref() - For reactive primitive values</li>
            <li>reactive() - For reactive objects</li>
            <li>computed() - For derived values</li>
            <li>watch() - For side effects</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li><a href="https://vuejs.org/guide/essentials/reactivity-fundamentals.html">Reactivity Fundamentals</a></li>
              <li><a href="https://vuejs.org/guide/essentials/computed.html">Computed Properties</a></li>
            </ul>
          </div>
        </div>
      `,
      code: `import { ref, reactive, computed, watch } from 'vue'

const count = ref(0)
const user = reactive({
  name: 'John',
  age: 25
})

const doubleCount = computed(() => count.value * 2)

watch(count, (newValue, oldValue) => {
  console.log(\`Count changed from \${oldValue} to \${newValue}\`)
})`
    }
  ],
  resources: [
    {
      title: 'Vue.js Documentation',
      url: 'https://vuejs.org/guide/introduction.html',
      description: 'Official Vue.js documentation',
      usage: 'Essential reference for Vue.js concepts and API.'
    }
  ]
})

// Add nextTutorial definition
const nextTutorial = ref({
  name: 'JavaScript Basics',
  path: '/tutorials/javascript-basics'
})

// Add copyCode function
const copyCode = async (code: string) => {
  try {
    await navigator.clipboard.writeText(code)
    // Optional: Add a toast notification or temporary button text change
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}

// Add scrollToExercise function
const scrollToExercise = () => {
  document.querySelector('#exercise')?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  })
}

// Add exercise definition
const exercise = ref<Exercise>({
  title: 'Build a Beach Directory',
  description: 'Create a Vue.js application to display and manage beach information',
  objectives: [
    'Create reusable Vue components',
    'Implement component communication',
    'Manage application state',
    'Handle user interactions',
    'Use TypeScript with Vue'
  ],
  structure: `beach-directory/
├── src/
│   ├── components/
│   │   ├── BeachList.vue
│   │   └── BeachDetail.vue
│   ├── App.vue
│   └── main.ts
├── package.json
└── tsconfig.json`,
  requirements: [
    'Create a responsive beach listing component',
    'Implement beach details view',
    'Add search and filter functionality',
    'Implement state management',
    'Handle data loading states'
  ],
  tips: [
    'Use Vue composition API',
    'Leverage TypeScript for type safety',
    'Follow Vue best practices',
    'Implement proper error handling',
    'Write clean, maintainable code'
  ]
})

// Add navigation functions
const activeStep = ref(0)

const nextStep = () => {
  if (activeStep.value < tutorial.value.steps.length - 1) {
    activeStep.value++
  }
}

const previousStep = () => {
  if (activeStep.value > 0) {
    activeStep.value--
  }
}

// ... Add remaining functions
</script>

<template>
  <article class="tutorial-content">
    <!-- Header Section -->
    <header class="tutorial-header">
      <h1>{{ tutorial.title }}</h1>
      <p class="description">{{ tutorial.description }}</p>
      <div class="metadata">
        <span class="difficulty">{{ tutorial.difficulty }}</span>
        <span class="category">{{ tutorial.category }}</span>
        <span class="duration">{{ tutorial.duration }}</span>
      </div>
    </header>

    <!-- Tutorial Content -->
    <section class="tutorial-step">
      <h2>{{ tutorial.steps[activeStep].title }}</h2>
      <div 
        class="content"
        v-html="tutorial.steps[activeStep].content"
      ></div>
      <div class="code-block-wrapper" v-if="tutorial.steps[activeStep].code">
        <pre class="code-block"><code>{{ tutorial.steps[activeStep].code }}</code></pre>
        <button 
          class="copy-button"
          @click="copyCode(tutorial.steps[activeStep].code)"
        >
          Copy
        </button>
      </div>
    </section>

    <!-- Progress Section -->
    <div class="progress-section">
      <div class="progress-bar">
        <div 
          class="progress"
          :style="`width: ${(activeStep + 1) / tutorial.steps.length * 100}%`"
        ></div>
      </div>
      <nav class="tutorial-navigation">
        <button 
          @click="previousStep" 
          :disabled="activeStep === 0"
          class="nav-button"
        >
          Previous
        </button>
        <span class="step-indicator">
          Step {{ activeStep + 1 }} of {{ tutorial.steps.length }}
        </span>
        <button 
          @click="nextStep" 
          :disabled="activeStep === tutorial.steps.length - 1"
          class="nav-button"
        >
          Next
        </button>
      </nav>
    </div>

    <!-- Call to Action -->
    <div class="cta-section">
      <h2>Ready to Practice?</h2>
      <p>Now that you understand Vue.js basics, let's apply what you've learned!</p>
      <button class="cta-button" @click="scrollToExercise">Start the Exercise</button>
    </div>

    <!-- Exercise Section -->
    <section class="exercise-section" id="exercise">
      <h2>Practice Exercise: {{ exercise.title }}</h2>
      <div class="exercise-content">
        <!-- Introduction -->
        <div class="exercise-intro">
          <p>{{ exercise.description }}</p>
          <h3>Learning Objectives:</h3>
          <ul class="learning-objectives">
            <li v-for="objective in exercise.objectives" :key="objective">
              {{ objective }}
            </li>
          </ul>
        </div>

        <!-- Project Structure -->
        <div class="site-structure mt-6">
          <h3>Project Structure</h3>
          <pre class="font-mono text-sm bg-gray-100 p-4 rounded-lg mt-2">{{ exercise.structure }}</pre>
        </div>

        <!-- Requirements -->
        <div class="requirements mt-6">
          <h3>Requirements:</h3>
          <ul>
            <li v-for="req in exercise.requirements" :key="req">
              {{ req }}
            </li>
          </ul>
        </div>

        <!-- Tips -->
        <div class="tips mt-6">
          <h3>Tips for Success:</h3>
          <ul>
            <li v-for="tip in exercise.tips" :key="tip">
              {{ tip }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Separator -->
    <div class="section-separator">
      <span class="separator-text">Additional Resources</span>
    </div>

    <!-- Additional Resources -->
    <section class="additional-resources">
      <h2>Additional Learning Resources</h2>
      <div class="resources-grid">
        <a 
          v-for="resource in tutorial.resources" 
          :key="resource.url"
          :href="resource.url"
          target="_blank"
          rel="noopener noreferrer"
          class="resource-card"
        >
          <h3>{{ resource.title }}</h3>
          <p class="description">{{ resource.description }}</p>
          <p class="usage">How to use: {{ resource.usage }}</p>
        </a>
      </div>
    </section>

    <!-- Separator -->
    <div class="section-separator">
      <span class="separator-text">Next Steps</span>
    </div>

    <!-- Navigation Section -->
    <section class="tutorial-navigation-section">
      <div class="navigation-grid">
        <!-- Previous Tutorial -->
        <router-link 
          to="/tutorials/javascript-introduction" 
          class="tutorial-card previous-tutorial"
        >
          <div class="card-content">
            <span class="direction-label">← Previous Tutorial</span>
            <h3>JavaScript Introduction</h3>
            <p>Learn the basics of JavaScript programming.</p>
          </div>
        </router-link>

        <!-- All Tutorials -->
        <router-link 
          to="/tutorials" 
          class="tutorial-card all-tutorials"
        >
          <div class="card-content">
            <span class="direction-label">Tutorial Index</span>
            <h3>All Tutorials</h3>
            <p>Browse our complete collection of web development tutorials.</p>
          </div>
        </router-link>

        <!-- Next Tutorial -->
        <router-link 
          to="/tutorials/photo-gallery" 
          class="tutorial-card next-tutorial"
        >
          <div class="card-content">
            <span class="direction-label">Next Tutorial →</span>
            <h3>Photo Gallery</h3>
            <p>Build an interactive photo gallery with Vue.js.</p>
          </div>
        </router-link>
      </div>
    </section>
  </article>
</template>

<style scoped>
.tutorial-content {
  @apply max-w-4xl mx-auto px-4;
}

.tutorial-header {
  @apply mb-8;
}

.tutorial-header h1 {
  @apply text-3xl font-bold mb-2;
}

.metadata {
  @apply flex gap-4 text-sm text-gray-600 mt-2;
}

.step-content p {
  @apply text-gray-700 leading-relaxed;
}

.step-content ul {
  @apply list-disc pl-6 text-gray-700 space-y-2;
}

.progress-section {
  @apply my-8 bg-gray-50 p-6 rounded-lg;
}

.tutorial-navigation {
  @apply flex justify-between items-center mt-4;
}

.nav-button {
  @apply px-4 py-2 bg-primary text-white rounded-lg
    hover:bg-primary-dark transition-colors duration-200
    disabled:opacity-50 disabled:cursor-not-allowed;
}

.cta-section {
  @apply my-12 text-center p-8 bg-gray-50 rounded-lg;
}

.cta-button {
  @apply px-6 py-3 bg-primary text-white rounded-lg
    hover:bg-primary-dark transition-colors duration-200
    font-semibold text-lg;
}

.progress-bar {
  @apply h-2 bg-gray-200 rounded-full overflow-hidden;
}

.progress {
  @apply h-full bg-primary transition-all duration-300;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-6 rounded-lg mt-4 overflow-x-auto font-mono;
  background: linear-gradient(to bottom, #1a1a1a, #2d2d2d);
}

.code-block-wrapper {
  @apply relative mt-8;
}

.copy-button {
  @apply absolute top-2 right-2 px-3 py-1 
    bg-gray-700 text-gray-300 rounded
    hover:bg-gray-600 transition-colors
    text-xs font-sans;
}

.read-more-links {
  @apply mt-8 p-4 bg-gray-50 rounded-lg;
}

.read-more-links h4 {
  @apply text-sm font-semibold text-gray-600 mb-2;
}

.read-more-links ul {
  @apply space-y-2;
}

.read-more-links a {
  @apply text-primary hover:text-primary-dark underline text-sm
    transition-colors duration-200;
}

.section-separator {
  @apply my-16 relative text-center;
}

.section-separator::before {
  content: '';
  @apply absolute w-full h-px bg-gray-200 top-1/2 left-0;
}

.separator-text {
  @apply relative px-4 bg-white text-gray-500 text-sm uppercase tracking-wider;
}

.resources-grid {
  @apply grid gap-4 md:grid-cols-2 mt-4;
}

.resource-card {
  @apply p-4 bg-white rounded-lg shadow-sm hover:shadow-md
    transition-shadow duration-200;
}

.nav-button {
  @apply px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition-colors;
}

.button-text {
  @apply text-sm font-medium;
}

.step-indicator {
  @apply text-gray-600;
}

.tutorial-navigation-section {
  @apply my-16 bg-gray-50 p-4 rounded-lg;
}

.navigation-grid {
  @apply grid gap-4 md:grid-cols-3 mt-4;
}

.tutorial-card {
  @apply p-4 bg-white rounded-lg shadow-sm hover:shadow-md
    transition-shadow duration-200;
}

.card-content {
  @apply text-gray-700 leading-relaxed;
}

.direction-label {
  @apply text-sm font-semibold text-gray-600 mb-2;
}
</style>