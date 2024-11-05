<script setup lang="ts">
import { ref } from 'vue'
import type { Tutorial } from '@/types/tutorial'

interface FormData {
  name: string
  email: string
  message: string
}

const formData = ref<FormData>({
  name: '',
  email: '',
  message: ''
})

const tutorial = ref<Tutorial>({
  title: 'Building a Contact Form',
  description: 'Learn how to create and validate a contact form using Vue.js',
  difficulty: 'intermediate',
  category: 'Vue.js',
  steps: [
    {
      title: 'Form Structure',
      content: `
        Let's create a basic contact form structure with proper HTML5 elements
        and accessibility attributes.
      `,
      code: `
<form @submit.prevent="handleSubmit">
  <div class="form-group">
    <label for="name">Name:</label>
    <input 
      type="text" 
      id="name"
      v-model="formData.name"
      required
    >
  </div>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input 
      type="email" 
      id="email"
      v-model="formData.email"
      required
    >
  </div>
  
  <div class="form-group">
    <label for="message">Message:</label>
    <textarea 
      id="message"
      v-model="formData.message"
      required
    ></textarea>
  </div>
  
  <button type="submit">Send Message</button>
</form>`
    },
    {
      title: 'Form Validation',
      content: `
        Add client-side validation to ensure data quality before submission.
      `,
      code: `
const errors = ref({})

function validateForm() {
  errors.value = {}
  
  if (!formData.value.name.trim()) {
    errors.value.name = 'Name is required'
  }
  
  if (!formData.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!isValidEmail(formData.value.email)) {
    errors.value.email = 'Invalid email format'
  }
  
  if (!formData.value.message.trim()) {
    errors.value.message = 'Message is required'
  }
  
  return Object.keys(errors.value).length === 0
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}`
    },
    {
      title: 'Form Submission',
      content: `
        Handle form submission and show appropriate feedback to users.
      `,
      code: `
const isSubmitting = ref(false)
const submitSuccess = ref(false)

async function handleSubmit() {
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })
    
    if (response.ok) {
      submitSuccess.value = true
      resetForm()
    } else {
      throw new Error('Submission failed')
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    isSubmitting.value = false
  }
}`
    }
  ]
})

// Tutorial navigation state
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

// Form handling
const handleSubmit = () => {
  // Implementation details would go here
  console.log('Form submitted:', formData.value)
}

const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<template>
  <article class="tutorial-content">
    <!-- Same header and navigation structure as previous tutorials -->
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
      
      <!-- Interactive Demo -->
      <div v-if="activeStep === 0" class="demo-section">
        <h3>Live Demo</h3>
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Name:</label>
            <input 
              type="text" 
              id="name"
              v-model="formData.name"
              required
            >
          </div>
          
          <div class="form-group">
            <label for="email">Email:</label>
            <input 
              type="email" 
              id="email"
              v-model="formData.email"
              required
            >
          </div>
          
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea 
              id="message"
              v-model="formData.message"
              required
            ></textarea>
          </div>
          
          <button type="submit" class="submit-button">
            Send Message
          </button>
        </form>
      </div>
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

<style scoped>
/* Previous tutorial styles plus form-specific styles */
.contact-form {
  @apply max-w-lg mx-auto mt-8;
}

.form-group {
  @apply mb-4;
}

.form-group label {
  @apply block mb-2 font-medium;
}

.form-group input,
.form-group textarea {
  @apply w-full p-2 border rounded-lg;
}

.form-group textarea {
  @apply h-32;
}

.submit-button {
  @apply w-full bg-primary text-white py-2 px-4 rounded-lg
    hover:bg-primary-dark transition-colors;
}

.demo-section {
  @apply mt-8 border-t pt-8;
}
</style>