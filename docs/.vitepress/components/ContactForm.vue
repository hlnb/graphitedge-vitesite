<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const status = ref({
  submitted: false,
  error: null
})

const submitForm = async () => {
  status.value.submitted = false
  status.value.error = null
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    status.value.submitted = true
    formData.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    status.value.error = 'There was an error submitting the form. Please try again.'
  }
}
</script>

<template>
  <div class="contact-container">
    <div class="contact-info">
      <h2>Get in Touch</h2>
      <p>Have questions about our tutorials or need help? Send us a message!</p>
      
      <div class="social-links">
        <a href="https://github.com/yourusername" target="_blank">GitHub</a>
        <a href="https://twitter.com/yourusername" target="_blank">Twitter</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
      </div>
    </div>

    <form v-if="!status.submitted" @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input 
          id="name"
          type="text" 
          v-model="formData.name" 
          required
        >
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input 
          id="email"
          type="email" 
          v-model="formData.email" 
          required
        >
      </div>

      <div class="form-group">
        <label for="subject">Subject</label>
        <input 
          id="subject"
          type="text" 
          v-model="formData.subject" 
          required
        >
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea 
          id="message"
          v-model="formData.message" 
          required
          rows="5"
        ></textarea>
      </div>

      <button type="submit">Send Message</button>
      
      <p v-if="status.error" class="error">{{ status.error }}</p>
    </form>

    <div v-else class="success-message">
      <h2>Thank You!</h2>
      <p>Your message has been sent successfully. We'll get back to you soon!</p>
      <button @click="status.submitted = false">Send Another Message</button>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.contact-info {
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.contact-form {
  display: grid;
  gap: 1.5rem;
}

.form-group {
  display: grid;
  gap: 0.5rem;
}

input, textarea {
  padding: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
}

button {
  padding: 0.75rem 1.5rem;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

button:hover {
  background: var(--vp-c-brand-dark);
}

.error {
  color: #dc2626;
}

.success-message {
  text-align: center;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}
</style> 