<script setup lang="ts">
import { ref, watch } from 'vue'

interface Example {
  title: string
  code: string
  description: string
  preview: string
}

interface Examples {
  [key: string]: Example
}

const examples: Examples = {
  typography: {
    title: 'Typography',
    code: `<!-- Text size and weight -->
<div class="space-y-4">
  <p class="text-sm font-light">Small light text</p>
  <p class="text-base font-normal">Normal text</p>
  <p class="text-lg font-medium">Large medium text</p>
  <p class="text-xl font-bold">Extra large bold text</p>

  <!-- Text color and alignment -->
  <p class="text-gray-500 text-center">Centered gray text</p>
  <p class="text-blue-600 text-right">Right-aligned blue text</p>
</div>`,
    description: 'Examples of text sizing, weight, color, and alignment',
    preview: 'Typography preview will render here'
  },
  spacing: {
    title: 'Spacing',
    code: `<!-- Margin -->
<div class="space-y-4">
  <div class="m-4 bg-gray-200">All sides margin</div>
  <div class="mt-4 bg-gray-200">Top margin</div>
  <div class="mb-4 bg-gray-200">Bottom margin</div>
  <div class="mx-4 bg-gray-200">Horizontal margin</div>
  <div class="my-4 bg-gray-200">Vertical margin</div>

  <!-- Padding -->
  <div class="p-4 bg-blue-200">All sides padding</div>
  <div class="pt-4 bg-blue-200">Top padding</div>
  <div class="pb-4 bg-blue-200">Bottom padding</div>
  <div class="px-4 bg-blue-200">Horizontal padding</div>
  <div class="py-4 bg-blue-200">Vertical padding</div>
</div>`,
    description: 'Examples of margin and padding utilities',
    preview: 'Spacing preview will render here'
  },
  layout: {
    title: 'Layout',
    code: `<!-- Display -->
<div class="space-y-4">
  <div class="block bg-gray-200 p-2">Block element</div>
  <div class="inline bg-gray-200 p-2">Inline element</div>
  <div class="flex justify-center items-center bg-gray-200 p-2">
    <div>Flex container</div>
  </div>
  <div class="grid grid-cols-3 gap-4 bg-gray-200 p-2">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
  </div>
</div>`,
    description: 'Examples of display and layout utilities',
    preview: 'Layout preview will render here'
  },
  responsive: {
    title: 'Responsive',
    code: `<div class="space-y-4">
  <!-- Responsive text -->
  <div class="text-sm md:text-base lg:text-lg">
    Responsive text size
  </div>

  <!-- Responsive layout -->
  <div class="flex flex-col md:flex-row gap-4">
    <div class="bg-blue-200 p-4">Item 1</div>
    <div class="bg-blue-300 p-4">Item 2</div>
    <div class="bg-blue-400 p-4">Item 3</div>
  </div>
</div>`,
    description: 'Examples of responsive design utilities',
    preview: 'Responsive preview will render here'
  },
  buttons: {
    title: 'Buttons',
    code: `<div class="space-y-4">
  <!-- Primary Button -->
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Primary Button
  </button>

  <!-- Secondary Button -->
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
    Secondary Button
  </button>

  <!-- Outline Button -->
  <button class="border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded">
    Outline Button
  </button>
</div>`,
    description: 'Examples of button styles',
    preview: 'Buttons preview will render here'
  },
  cards: {
    title: 'Cards',
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Card Title</div>
    <p class="text-gray-700 text-base">
      Card content goes here. This is a basic card layout using Tailwind CSS.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #tag1
    </span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #tag2
    </span>
  </div>
</div>`,
    description: 'Example of a card component',
    preview: 'Card preview will render here'
  },
  rottoRocks: {
    title: 'Rotto Rocks',
    code: `/* Convert this CSS to Tailwind classes */

.header {
  background: #ffffff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

/* Tailwind solution:
<header class="bg-white py-4 shadow-md">
  <nav class="flex justify-between items-center max-w-7xl mx-auto px-4">
    <div class="text-2xl font-bold text-gray-800">
      Rotto Rocks
    </div>
  </nav>
</header>
*/`,
    description: 'Convert traditional CSS to Tailwind utility classes',
    preview: 'Try converting the CSS to Tailwind classes!'
  }
}

const currentExample = ref<string>('typography')
const userCode = ref<string>(examples.typography.code)
const output = ref<string>('')
const error = ref<string>('')

const runCode = (): void => {
  try {
    // In a real implementation, you'd want to safely evaluate the code
    output.value = examples[currentExample.value].preview
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An error occurred'
  }
}

watch(currentExample, (newExample: string) => {
  userCode.value = examples[newExample].code
  runCode()
})

watch(userCode, () => {
  runCode()
}, { debounce: 300 })
</script>

<template>
  <div class="tutorial-container">
    <div class="example-selector">
      <button 
        v-for="(example, key) in examples" 
        :key="key"
        :class="{ active: currentExample === key }"
        @click="currentExample = key"
      >
        {{ example.title }}
      </button>
    </div>

    <p class="description">{{ examples[currentExample].description }}</p>

    <div class="editor-output-container">
      <div class="editor-section">
        <div class="editor-header">
          <h4>Code</h4>
          <button 
            class="reset-button"
            @click="userCode = examples[currentExample].code"
          >
            Reset Code
          </button>
        </div>
        <textarea 
          v-model="userCode"
          class="code-editor"
          spellcheck="false"
        ></textarea>
      </div>

      <div class="output-section">
        <h4>Preview</h4>
        <div class="preview-area">
          {{ output }}
        </div>
        <div 
          v-if="error" 
          class="error-message"
        >
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styles remain the same */
</style> 