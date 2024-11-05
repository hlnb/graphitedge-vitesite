<script setup lang="ts">
import { ref } from 'vue'
import type { Tutorial, Exercise } from '@/types'

const tutorial = ref<Tutorial>({
  title: 'CSS Fundamentals',
  description: 'Master modern CSS with best practices, selectors, layouts, and responsive design principles',
  difficulty: 'Beginner',
  category: 'CSS',
  duration: '2-3 hours',
  steps: [
    {
      title: 'CSS Selectors and Specificity',
      content: `
        <div class="step-content">
          <p class="mb-6">Understanding CSS selectors and their specificity is crucial for effective styling:</p>
          
          <ul class="mb-6">
            <li>Type, class, and ID selectors</li>
            <li>Combinators and pseudo-classes</li>
            <li>Specificity calculation</li>
            <li>Best practices for selector usage</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: CSS Selectors Guide
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: Specificity
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `/* Type selector */
p {
  color: #333;
}

/* Class selector */
.highlight {
  background-color: yellow;
}

/* ID selector */
#header {
  background-color: #f0f0f0;
}

/* Combinators */
.nav > li {
  display: inline-block;
}

/* Pseudo-classes */
.button:hover {
  background-color: #0056b3;
}`
    },
    {
      title: 'Box Model and Layout',
      content: `
        <div class="step-content">
          <p class="mb-6">The CSS box model is fundamental to understanding layout:</p>
          
          <ul class="mb-6">
            <li>Content, padding, border, and margin</li>
            <li>Box-sizing property</li>
            <li>Display properties</li>
            <li>Position properties</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: The Box Model
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: CSS Layout
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `/* Box model example */
.container {
  width: 300px;
  padding: 20px;
  border: 2px solid #333;
  margin: 10px;
  box-sizing: border-box;
}

/* Display properties */
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Position example */
.relative-parent {
  position: relative;
}

.absolute-child {
  position: absolute;
  top: 0;
  right: 0;
}`
    },
    {
      title: 'Responsive Design',
      content: `
        <div class="step-content">
          <p class="mb-6">Create websites that work across all device sizes:</p>
          
          <ul class="mb-6">
            <li>Media queries</li>
            <li>Flexible grids</li>
            <li>Responsive units (rem, em, vw, vh)</li>
            <li>Mobile-first approach</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: Responsive Design
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: Media Queries
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `/* Mobile-first approach */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

/* Responsive units */
.text-content {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5em;
}`
    }
  ],
  resources: [
    {
      title: 'MDN CSS Guide',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS',
      description: 'Comprehensive guide to CSS fundamentals',
      usage: 'Start here for a structured approach to learning CSS. Work through each module systematically.'
    },
    {
      title: 'MDN CSS Tutorial',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started',
      description: 'Step-by-step tutorial for CSS beginners',
      usage: 'Follow this tutorial for hands-on practice with CSS basics. Complete each exercise to build your skills.'
    },
    {
      title: 'MDN CSS Reference',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference',
      description: 'Complete reference for CSS properties and concepts',
      usage: 'Use this as your go-to reference when you need detailed information about specific CSS properties.'
    },
    {
      title: 'CSS Tricks',
      url: 'https://css-tricks.com',
      description: 'Articles and tutorials for CSS techniques',
      usage: 'Great for learning practical CSS applications and modern techniques.'
    },
    {
      title: 'Can I Use',
      url: 'https://caniuse.com',
      description: 'Browser support tables for CSS features',
      usage: 'Check browser compatibility before using CSS features in your projects.'
    }
  ]
})

const exercise = ref<Exercise>({
  title: 'Style the Rotto Rocks Website',
  description: 'Apply modern CSS styling to the Rotto Rocks website',
  objectives: [
    'Implement responsive layout',
    'Style navigation and components',
    'Use modern CSS features',
    'Create engaging hover effects',
    'Ensure cross-browser compatibility'
  ],
  structure: `rotto-rocks/
├── index.html
├── css/
│   ├── style.css
│   ├── layout.css
│   └── components.css
├── images/
│   ├── hero.jpg
│   ├── quokka.jpg
│   └── beach.jpg`,
  requirements: [
    'Create a responsive navigation menu',
    'Style the hero section with overlay text',
    'Implement a responsive grid for the gallery',
    'Add hover effects to interactive elements',
    'Use CSS custom properties for colors and spacing',
    'Ensure mobile-friendly typography',
    'Add smooth transitions for interactive elements'
  ],
  tips: [
    'Start with a mobile-first approach',
    'Use CSS custom properties for consistent theming',
    'Test across different browsers',
    'Optimize media queries for common breakpoints',
    'Keep specificity low for maintainable code'
  ]
})

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

const scrollToExercise = () => {
  document.querySelector('#exercise')?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  })
}

const copyCode = async (code: string) => {
  try {
    await navigator.clipboard.writeText(code)
    // Optional: Add a toast notification or temporary button text change
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}
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
      <p>Now that you understand CSS fundamentals, let's apply what you've learned!</p>
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

    <section class="tutorial-navigation-section">
      <div class="navigation-grid">
        <!-- Previous Tutorial -->
        <router-link 
          to="/tutorials/Forms" 
          class="tutorial-card previous-tutorial"
        >
          <div class="card-content">
            <span class="direction-label">← Previous Tutorial</span>
            <h3>HTML Form</h3>
            <p>Learn how to add forms in your HTML content.</p>
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
          to="/tutorials/VueBasics" 
          class="tutorial-card next-tutorial"
        >
          <div class="card-content">
            <span class="direction-label">Next Tutorial →</span>
            <h3>Vue Basics</h3>
            <p>Learn the fundamentals of using Vue within your HTML.</p>
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