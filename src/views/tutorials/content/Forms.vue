<script setup lang="ts">
import { ref } from 'vue'
import type { Tutorial } from '@/types'

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

const tutorial = ref<Tutorial>({
  title: 'HTML Forms',
  description: 'Create interactive forms and handle user input effectively',
  difficulty: 'Beginner',
  category: 'HTML',
  duration: '30 minutes',
  steps: [
    {
      title: 'Introduction to Forms',
      content: `
        <div class="step-content">
          <p>HTML forms are essential for collecting user input on web pages. They allow users to enter data that can be sent to a server for processing.</p>

          <h3>Basic Form Structure</h3>
          <p>A form is created using the <code>&lt;form&gt;</code> element and typically contains various input elements:</p>
          <ul>
            <li>Text inputs</li>
            <li>Radio buttons</li>
            <li>Checkboxes</li>
            <li>Submit buttons</li>
          </ul>
        </div>
      `,
      code: `<form action="/submit" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">

  <label for="password">Password:</label>
  <input type="password" id="password" name="password">

  <button type="submit">Submit</button>
</form>`
    },
    {
      title: 'Form Controls',
      content: `
        <div class="step-content">
          <p>Forms can include various types of input controls to collect different types of data.</p>

          <h3>Common Input Types</h3>
          <ul>
            <li><code>text</code> - Single line text input</li>
            <li><code>password</code> - Masked text input for sensitive data</li>
            <li><code>email</code> - Email address input with validation</li>
            <li><code>number</code> - Numeric input with optional controls</li>
          </ul>

          <p>Always use appropriate input types to help users enter data correctly.</p>
        </div>
      `,
      code: `<form>
  <!-- Text input -->
  <input type="text" placeholder="Your name">

  <!-- Email input -->
  <input type="email" placeholder="email@example.com">

  <!-- Number input -->
  <input type="number" min="0" max="100">

  <!-- Password input -->
  <input type="password" placeholder="Enter password">
</form>`
    },
    {
      title: 'Labels and Accessibility',
      content: `
        <div class="step-content">
          <p>Labels are crucial for form accessibility and usability. They help users understand what information is required for each input.</p>

          <h3>Best Practices</h3>
          <ul>
            <li>Always use labels with form controls</li>
            <li>Connect labels to inputs using the 'for' attribute</li>
            <li>Provide clear, descriptive label text</li>
            <li>Consider using placeholder text for additional guidance</li>
          </ul>
        </div>
      `,
      code: `<form>
  <div class="form-group">
    <label for="name">Full Name:</label>
    <input 
      type="text" 
      id="name" 
      name="name"
      placeholder="Enter your full name"
      required
    >
  </div>

  <div class="form-group">
    <label for="email">Email Address:</label>
    <input 
      type="email" 
      id="email" 
      name="email"
      placeholder="you@example.com"
      required
    >
  </div>
</form>`
    },
    {
      title: 'Form Validation',
      content: `
        <div class="step-content">
          <p>Form validation helps ensure that users submit correct and properly formatted data.</p>

          <h3>HTML5 Validation Attributes</h3>
          <ul>
            <li><code>required</code> - Field must be filled out</li>
            <li><code>minlength/maxlength</code> - Text length limits</li>
            <li><code>min/max</code> - Numeric range limits</li>
            <li><code>pattern</code> - Regular expression patterns</li>
          </ul>
        </div>
      `,
      code: `<form>
  <input 
    type="text"
    required
    minlength="3"
    maxlength="50"
  >

  <input 
    type="number"
    min="0"
    max="100"
  >

  <input 
    type="tel"
    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    placeholder="123-456-7890"
  >
</form>`
    }
  ]
})

const exercise = ref({
  title: 'Rotto Rocks Contact Form',
  description: 'Create a contact form for the Rotto Rocks website that allows fans to get in touch with the band.',
  objectives: [
    'Build a responsive contact form',
    'Implement proper form validation',
    'Use semantic HTML form elements',
    'Create an accessible form layout'
  ],
  structure: `rotto-rocks/
├── index.html
├── about.html
├── music.html
├── contact.html    # We'll work on this
└── css/
    └── styles.css`,
  requirements: [
    'Create a form with the following fields:',
    '- Name (required)',
    '- Email (required, with validation)',
    '- Subject (dropdown with options: "Booking", "Fan Mail", "Press Inquiry", "Other")',
    '- Message (required, textarea)',
    '- Preferred contact method (radio buttons: "Email", "Phone")',
    '- Phone number (conditional, shows only if phone is selected)',
    '- Newsletter signup (checkbox)',
    'Add proper labels and placeholders',
    'Include client-side validation',
    'Style the form to match the site theme',
    'Add a clear submission button',
    'Show success message on form submission'
  ],
  tips: [
    'Use semantic HTML5 form elements',
    'Group related fields with fieldset and legend',
    'Add clear validation messages',
    'Ensure the form is keyboard accessible',
    'Test the form with different screen sizes',
    'Consider adding ARIA labels for better accessibility'
  ],
  sampleCode: `/* Base styles and CSS variables */
:root {
  --color-primary: #e44d26;
  --color-primary-dark: #c43e1c;
  --color-text: #2c3e50;
  --color-background: #ffffff;
  --color-nav-bg: rgba(255, 255, 255, 0.95);
  --color-border: #e2e8f0;
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;
  --spacing-base: 1rem;
  --max-width: 1200px;
}

/* Typography System */
body {
  font-family: var(--font-body);
  line-height: 1.6;
  color: var(--color-text);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--spacing-base);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: calc(var(--spacing-base) * 2);
}

h2 {
  font-size: 2rem;
  color: var(--color-primary);
}

h3 {
  font-size: 1.5rem;
}

p {
  margin-bottom: var(--spacing-base);
  max-width: 70ch; /* Optimal reading length */
}

/* Navigation Styles */
.nav-container {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-nav-bg);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main-nav {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--spacing-base);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-logo:hover {
  color: var(--color-primary-dark);
}

.nav-links {
  display: flex;
  gap: calc(var(--spacing-base) * 2);
  list-style: none;
}

.nav-links a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem;
  transition: color 0.2s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-primary);
  transform: scaleX(0);
  transition: transform 0.2s;
}

.nav-links a:hover::after {
  transform: scaleX(1);
}

/* Mobile Navigation */
@media (max-width: 768px) {
  .nav-links {
    display: none; /* Add mobile menu functionality */
  }
  
  .mobile-menu-button {
    display: block;
  }
}

/* Layout Containers */
.page-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: calc(var(--spacing-base) * 2);
}

.content-section {
  margin: calc(var(--spacing-base) * 4) 0;
}`,
  suggestedStyles: `/* Base styles */
:root {
  --color-primary: #e44d26;
  --color-primary-dark: #c43e1c;
  --color-text: #2c3e50;
  --color-background: #ffffff;
  --color-border: #e2e8f0;
  --color-input-bg: #f8fafc;
  --color-success: #10b981;
  --color-error: #ef4444;
}

/* Navigation Styles */
.nav-container {
  background: var(--color-background);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
}

.main-nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-primary);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--color-primary);
}

/* Typography */
h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-text);
  margin-bottom: 2rem;
  text-align: center;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
}

p {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

/* Page Layout */
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 4rem 0;
}

@media (max-width: 768px) {
  .contact-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

/* Contact Info Sidebar */
.contact-info {
  background: var(--color-input-bg);
  padding: 2rem;
  border-radius: 8px;
}

.contact-info h3 {
  color: var(--color-primary);
  margin-bottom: 1.5rem;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Form Styles */
.contact-form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--color-background);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-text);
}

input[type="text"],
input[type="email"],
input[type="tel"],
select,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: var(--color-input-bg);
  transition: border-color 0.2s;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(228, 77, 38, 0.1);
}

.radio-group,
.checkbox-group {
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

fieldset {
  margin: 1.5rem 0;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

legend {
  padding: 0 0.5rem;
  font-weight: 500;
  color: var(--color-text);
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.submit-button:hover {
  background: var(--color-primary-dark);
}

/* Form Validation Styles */
.error-message {
  color: var(--color-error);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

input:invalid,
select:invalid,
textarea:invalid {
  border-color: var(--color-error);
}

/* Success Message */
.success-message {
  background: var(--color-success);
  color: white;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-align: center;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  .contact-form {
    margin: 1rem;
    padding: 1rem;
  }

  .nav-links {
    gap: 1rem;
  }
}`,
  sampleHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Rotto Rocks</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <nav class="nav-container">
        <div class="main-nav">
            <a href="index.html" class="nav-logo">Rotto Rocks</a>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="music.html">Music</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>

    <div class="page-container">
        <h1>Get in Touch</h1>
        <p class="intro-text">Have a question or want to book us for your event? We'd love to hear from you!</p>

        <div class="contact-section">
            <div class="contact-form">
                <!-- Form content from previous example -->
            </div>

            <div class="contact-info">
                <h3>Other Ways to Connect</h3>
                <ul>
                    <li>📍 123 Rock Street, Music City</li>
                    <li>📱 (555) 123-4567</li>
                    <li>📧 band@rottorocks.com</li>
                    <li>🎵 Follow us on social media</li>
                </ul>
            </div>
        </div>
    </div>
</body>
</html>`
})
</script>

<template>
  <div class="tutorial-container">
    <header class="tutorial-header">
      <h1>{{ tutorial.title }}</h1>
      <p class="tutorial-description">{{ tutorial.description }}</p>
      
      <div class="tutorial-meta">
        <span class="difficulty">{{ tutorial.difficulty }}</span>
        <span class="duration">{{ tutorial.duration }}</span>
        <span class="category">{{ tutorial.category }}</span>
      </div>
    </header>

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
      <p>Now that you understand HTML fundamentals, let's apply what you've learned!</p>
      <button class="cta-button" @click="scrollToExercise">Start the Exercise</button>
    </div>

    <!-- Exercise Section -->
    <div class="section-separator">
      <span class="separator-text">Practice Exercise</span>
    </div>

    <section id="exercise" class="exercise-section">
      <h2>{{ exercise.title }}</h2>
      <p class="exercise-description">{{ exercise.description }}</p>

      <div class="objectives">
        <h3>Learning Objectives</h3>
        <ul class="learning-objectives">
          <li v-for="objective in exercise.objectives" 
              :key="objective">
            {{ objective }}
          </li>
        </ul>
      </div>

      <div class="project-structure">
        <h3>Project Structure</h3>
        <pre><code>{{ exercise.structure }}</code></pre>
      </div>

      <div class="requirements">
        <h3>Requirements</h3>
        <ul>
          <li v-for="requirement in exercise.requirements" 
              :key="requirement">
            {{ requirement }}
          </li>
        </ul>
      </div>

      <div class="tips">
        <h3>Tips</h3>
        <ul>
          <li v-for="tip in exercise.tips" 
              :key="tip">
            {{ tip }}
          </li>
        </ul>
      </div>

      <div class="sample-code">
        <h3>Sample Code</h3>
        <pre><code>{{ exercise.sampleCode }}</code></pre>
      </div>

      <div class="suggested-styles">
        <h3>Suggested Styles</h3>
        <pre><code>{{ exercise.suggestedStyles }}</code></pre>
      </div>
    </section>
    <!-- Navigation Section -->
    <div class="section-separator">
      <span class="separator-text">Navigation</span>
    </div>

    <section class="tutorial-navigation-section">
      <div class="navigation-grid">
        <!-- Previous Tutorial -->
        <router-link 
          to="/tutorials/ImagesLinks" 
          class="tutorial-card previous-tutorial"
        >
          <div class="card-content">
            <span class="direction-label">← Previous Tutorial</span>
            <h3>Images and Links</h3>
            <p>Learn how to add images and create effective links in your HTML content.</p>
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
          to="/tutorials/CSSBasics" 
          class="tutorial-card next-tutorial"
        >
          <div class="card-content">
            <span class="direction-label">Next Tutorial →</span>
            <h3>CSS Basics</h3>
            <p>Learn the fundamentals of styling with CSS.</p>
          </div>
        </router-link>
      </div>
    </section>

    
  </div>
</template>

<style scoped>
.tutorial-container {
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

.cta-button {
  @apply px-6 py-3 bg-primary text-white rounded-lg
    hover:bg-primary-dark transition-colors duration-200
    font-semibold text-lg;
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

.resource-card {
  @apply p-4 bg-white rounded-lg shadow-sm hover:shadow-md
    transition-shadow duration-200;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-6 rounded-lg mt-4 overflow-x-auto font-mono;
}

/* Syntax highlighting colors - similar to VS Code dark theme */
.code-block :deep(code) {
  @apply text-sm leading-relaxed;
}

.code-block :deep(.tag) {
  @apply text-blue-400;
}

.code-block :deep(.attr-name) {
  @apply text-cyan-300;
}

.code-block :deep(.attr-value) {
  @apply text-orange-300;
}

.code-block :deep(.comment) {
  @apply text-gray-500;
}

/* Add a subtle border and shadow for depth */
pre {
  @apply border border-gray-800 shadow-lg;
}

/* Optional: Add a subtle gradient background */
.code-block {
  background: linear-gradient(to bottom, #1a1a1a, #2d2d2d);
}

/* Optional: Add a copy button */
.code-block-wrapper {
  @apply relative;
}

.copy-button {
  @apply absolute top-2 right-2 px-3 py-1 
    bg-gray-700 text-gray-300 rounded
    hover:bg-gray-600;
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

.step-content p {
  @apply text-gray-700 leading-relaxed;
}

.step-content ul {
  @apply list-disc pl-6 text-gray-700 space-y-2;
}

.read-more-links {
  @apply mt-8 p-4 bg-gray-50 rounded-lg;
}

.read-more-links h4 {
  @apply text-sm font-semibold text-gray-600 mb-2;
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

.exercise-section {
  @apply my-16 p-8 bg-gray-50 rounded-lg;
}

.exercise-description {
  @apply text-lg text-gray-700 mb-8;
}

.objectives, .project-structure, .requirements, .tips, .sample-code, .suggested-styles {
  @apply mb-8;
}

.objectives h3, .project-structure h3, .requirements h3, .tips h3, .sample-code h3, .suggested-styles h3 {
  @apply text-xl font-semibold mb-4;
}

.learning-objectives li, .requirements li, .tips li {
  @apply ml-4 mb-2 list-disc;
}

pre {
  @apply bg-white p-4 rounded-lg overflow-x-auto;
}

code {
  @apply text-sm;
}
</style> 