<template>
  <article class="tutorial-content">
    <header class="tutorial-header">
      <h1>{{ tutorial.title }}</h1>
      <p class="description">{{ tutorial.description }}</p>
      <div class="metadata">
        <span class="difficulty">{{ tutorial.difficulty }}</span>
        <span class="category">{{ tutorial.category }}</span>
      </div>
    </header>

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

    <footer class="tutorial-footer">
      <div class="progress-bar">
        <div 
          class="progress"
          :style="`width: ${(activeStep + 1) / tutorial.steps.length * 100}%`"
        ></div>
      </div>
    </footer>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Tutorial } from '@/types/tutorial'

const tutorial = ref<Tutorial>({
  title: 'Complex JavaScript Functions',
  description: 'Learn advanced function concepts in JavaScript',
  difficulty: 'intermediate',
  category: 'JavaScript',
  steps: [
    {
      title: 'Higher-Order Functions',
      content: `
        Higher-order functions are functions that can:
        - Take other functions as arguments
        - Return functions as their results
        - Or both
      `,
      code: `
// Example of a higher-order function
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  }
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));  // Output: 10
console.log(triple(5));  // Output: 15`
    },
    {
      title: 'Closures',
      content: `
        Closures allow functions to maintain access to variables from their outer scope
        even after the outer function has returned.
      `,
      code: `
function counter() {
  let count = 0;
  
  return {
    increment: function() {
      count++;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const myCounter = counter();
console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2
console.log(myCounter.getCount());  // 2`
    },
    {
      title: 'Async Functions',
      content: `
        Async functions make it easier to work with asynchronous operations using
        async/await syntax.
      `,
      code: `
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

// Using the async function
async function displayUser() {
  const user = await fetchUserData(123);
  console.log(user);
}`
    },
    {
      title: 'Generator Functions',
      content: `
        Generator functions can pause and resume their execution,
        yielding multiple values over time.
      `,
      code: `
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// Infinite sequence generator
function* fibonacci() {
  let prev = 0, curr = 1;
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}`
    }
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
</script>

<style scoped>
.tutorial-content {
  @apply max-w-4xl mx-auto py-8 px-4;
}

.tutorial-header {
  @apply mb-8;
}

.tutorial-header h1 {
  @apply text-3xl font-bold mb-2;
}

.description {
  @apply text-gray-600 mb-4;
}

.metadata {
  @apply flex gap-4 text-sm;
}

.difficulty, .category {
  @apply px-3 py-1 rounded-full bg-gray-100;
}

.tutorial-navigation {
  @apply flex items-center justify-between mb-8;
}

.nav-button {
  @apply px-4 py-2 bg-primary text-white rounded
    hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed;
}

.step-indicator {
  @apply text-sm text-gray-600;
}

.tutorial-step {
  @apply bg-white rounded-lg shadow-sm p-6 mb-8;
}

.content {
  @apply prose max-w-none mb-6;
}

.code-block {
  @apply bg-gray-800 text-white p-4 rounded-lg overflow-x-auto font-mono;
}

.tutorial-footer {
  @apply mt-8;
}

.progress-bar {
  @apply w-full h-2 bg-gray-200 rounded-full overflow-hidden;
}

.progress {
  @apply h-2 bg-primary transition-all duration-300;
}
</style> 