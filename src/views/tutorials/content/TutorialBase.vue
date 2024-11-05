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
      <pre 
        v-if="tutorial.steps[activeStep].code"
        class="code-block"
      ><code>{{ tutorial.steps[activeStep].code }}</code></pre>
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
      <p>Now that you understand the concepts, let's apply what you've learned with a hands-on exercise!</p>
      <button class="cta-button" @click="scrollToExercise">Start the Exercise</button>
    </div>

    <!-- Exercise Section -->
    <section class="exercise-section" id="exercise">
      <h2>Practice Exercise: {{ exercise.title }}</h2>
      <div class="exercise-content">
        <!-- Introduction -->
        <div class="exercise-intro">
          <p>{{ exercise.description }}</p>
          <ul class="learning-objectives">
            <li v-for="objective in exercise.objectives" :key="objective">
              {{ objective }}
            </li>
          </ul>
        </div>

        <!-- Project Structure (if applicable) -->
        <div v-if="exercise.structure" class="site-structure mt-6">
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

        <!-- Resources -->
        <div class="resources mt-6">
          <h3>Resources:</h3>
          <div class="resources-grid">
            <a 
              v-for="resource in exercise.resources" 
              :key="resource.url"
              :href="resource.url"
              target="_blank"
              rel="noopener noreferrer"
              class="resource-card"
            >
              <h4>{{ resource.title }}</h4>
              <p class="description">{{ resource.description }}</p>
              <p class="usage">How to use: {{ resource.usage }}</p>
            </a>
          </div>
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
  </article>
</template>

<style scoped>
.tutorial-content {
  @apply max-w-4xl mx-auto px-4;
}

.tutorial-header {
  @apply mb-8;
}

.metadata {
  @apply flex gap-4 text-sm text-gray-600 mt-2;
}

.progress-section {
  @apply my-8 bg-gray-50 p-4 rounded-lg;
}

.progress-bar {
  @apply h-2 bg-gray-200 rounded-full overflow-hidden;
}

.progress {
  @apply h-full bg-primary transition-all duration-300;
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

.resource-card {
  @apply p-4 bg-white rounded-lg shadow-sm hover:shadow-md
    transition-shadow duration-200;
}

.exercise-content {
  @apply space-y-6;
}

.learning-objectives {
  @apply list-disc ml-6 mt-4 space-y-2;
}

.resources-grid {
  @apply grid gap-4 md:grid-cols-2 mt-4;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import type { Tutorial, Exercise } from '@/types'

// ... rest of the script logic ...

const scrollToExercise = () => {
  document.querySelector('#exercise')?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
}
</script> 