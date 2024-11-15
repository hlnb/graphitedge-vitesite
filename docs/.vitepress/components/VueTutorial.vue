<script setup lang="ts">
import { ref, watch } from 'vue'

interface Example {
  title: string
  code: string
  description: string
}

interface Examples {
  [key: string]: Example
}

const examples: Examples = {
  basics: {
    title: 'Basic Vue Example',
    code: `
<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="count++">
      Count is: {{ count }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue!')
const count = ref(0)
<\/script>`,
    description: 'A simple Vue component with reactive data and event handling.'
  },
  components: {
    title: 'Component Example',
    code: `
<template>
  <div>
    <h2>{{ title }}</h2>
    <button @click="emitEvent">
      Click me!
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String
})

const emit = defineEmits(['buttonClick'])

const emitEvent = () => {
  emit('buttonClick')
}
<\/script>`,
    description: 'Example of a Vue component with props and events.'
  }
}

const currentExample = ref<string>('basics')
const userCode = ref<string>(examples.basics.code)
const output = ref<string>('')
const error = ref<string>('')

const runCode = (): void => {
  try {
    // In a real implementation, you'd want to safely evaluate the code
    output.value = 'Code preview would appear here'
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
          <h4>Vue Code</h4>
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
.tutorial-container {
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.example-selector {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.example-selector button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-brand);
  background: transparent;
  color: var(--vp-c-brand);
  border-radius: 4px;
  cursor: pointer;
}

.example-selector button.active {
  background: var(--vp-c-brand);
  color: white;
}

.description {
  margin-bottom: 1rem;
  color: var(--vp-c-text-2);
}

.editor-output-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.editor-section, .output-section {
  display: flex;
  flex-direction: column;
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.code-editor {
  width: 100%;
  height: 300px;
  padding: 1rem;
  font-family: var(--vp-font-family-mono);
  font-size: 0.9rem;
  line-height: 1.5;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  resize: vertical;
}

.preview-area {
  padding: 1rem;
  min-height: 200px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
}

.error-message {
  margin-top: 1rem;
  padding: 0.5rem;
  color: var(--vp-c-danger);
  border: 1px solid var(--vp-c-danger);
  border-radius: 4px;
}

.reset-button {
  padding: 0.4rem 0.8rem;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .editor-output-container {
    grid-template-columns: 1fr;
  }
}
</style> 