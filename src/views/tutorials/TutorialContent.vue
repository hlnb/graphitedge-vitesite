<script setup lang="ts">
import { ref } from 'vue'
import type { Tutorial } from '@/types/tutorial'

const tutorial = ref<Tutorial>({
  title: '',
  description: '',
  difficulty: 'beginner',
  category: '',
  steps: []
})

// Add any tutorial-specific logic here
</script>

<template>
  <article class="tutorial-content">
    <header>
      <h1>{{ tutorial.title }}</h1>
      <div class="metadata">
        <span class="difficulty">{{ tutorial.difficulty }}</span>
        <span class="category">{{ tutorial.category }}</span>
      </div>
    </header>

    <div class="content">
      <p>{{ tutorial.description }}</p>
      
      <!-- Tutorial steps -->
      <div class="steps">
        <div v-for="(step, index) in tutorial.steps" :key="index" class="step">
          <h2>{{ step.title }}</h2>
          <div v-html="step.content"></div>
          <pre v-if="step.code" class="code">{{ step.code }}</pre>
          <img v-if="step.image" :src="step.image" :alt="step.title">
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.tutorial-content {
  @apply max-w-4xl mx-auto py-8 px-4;
}

.metadata {
  @apply flex gap-4 text-sm mt-2;
}

.steps {
  @apply space-y-8 mt-8;
}

.step {
  @apply border-l-4 border-primary pl-4;
}
</style>