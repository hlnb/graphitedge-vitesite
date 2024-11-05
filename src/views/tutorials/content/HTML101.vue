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
      <p>Now that you understand HTML fundamentals, let's apply what you've learned!</p>
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

    <!-- Next Steps Section -->
    <div class="section-separator">
      <span class="separator-text">Next Steps</span>
    </div>

    <section class="next-steps">
      <h2>Continue Your Learning Journey</h2>
      <p class="next-steps-description">Ready to enhance your web development skills? Move on to our CSS Basics tutorial to learn how to style your HTML:</p>
      
      <router-link 
        to="/tutorials/css-basics" 
        class="next-tutorial-card"
      >
        <div class="card-content">
          <h3>CSS Basics</h3>
          <p>Learn how to style your HTML with CSS, including selectors, layouts, and responsive design.</p>
          <span class="next-link">Start Tutorial →</span>
        </div>
      </router-link>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Tutorial, Exercise } from '@/types'

const activeStep = ref(0)

const tutorial = ref<Tutorial>({
  title: 'HTML Fundamentals',
  description: 'Master modern HTML5 with semantic markup, accessibility best practices, and industry standards',
  difficulty: 'Beginner',
  category: 'HTML',
  duration: '2-3 hours',
  steps: [
    {
      title: 'Modern HTML Document Structure',
      content: `
        <div class="step-content">
          <p class="mb-6">HTML5 provides a semantic structure that improves accessibility, SEO, and code organization:</p>
          
          <ul class="mb-6">
            <li>DOCTYPE and character encoding declarations</li>
            <li>Viewport meta tag for responsive design</li>
            <li>Semantic sectioning elements</li>
            <li>Best practices for document organization</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#anatomy_of_an_html_document" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: Anatomy of an HTML Document
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: Document Structure Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <header>
        <nav><!-- Navigation content --></nav>
    </header>
    <main>
        <article><!-- Main content --></article>
    </main>
    <footer><!-- Footer content --></footer>
</body>
</html>`
    },
    {
      title: 'Semantic HTML Elements',
      content: `
        <div class="step-content">
          <p class="mb-6">Modern HTML provides specific elements that describe their content's meaning:</p>
          
          <ul class="mb-6">
            <li><code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;nav&gt;</code> for document sections</li>
            <li><code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code> for content organization</li>
            <li><code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> for media content</li>
            <li><code>&lt;main&gt;</code> for primary content</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#html_for_structuring_content" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: HTML for Structuring Content
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: Content Sectioning Elements
                </a>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      title: 'Accessibility and SEO',
      content: `
        <div class="step-content">
          <p class="mb-6">Key practices for building inclusive and discoverable websites:</p>
          
          <ul class="mb-6">
            <li>Proper heading hierarchy (h1-h6)</li>
            <li>ARIA roles and labels</li>
            <li>Alt text for images</li>
            <li>Semantic markup for better SEO</li>
            <li>Keyboard navigation support</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: HTML Accessibility Guide
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#why_do_we_need_structure" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: HTML Text Structure
                </a>
              </li>
            </ul>
          </div>
        </div>
      `
    }
  ],
  resources: [
    {
      title: 'MDN HTML Guide',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML',
      description: 'Comprehensive guide to HTML fundamentals',
      usage: 'Use this as your primary reference for learning HTML concepts. Start with the Introduction section and work through each topic systematically.'
    },
    {
      title: 'MDN HTML Reference',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference',
      description: 'Complete reference for HTML elements and attributes',
      usage: 'Look up specific HTML elements, their attributes, and proper usage. Bookmark this for quick reference while coding.'
    },
    {
      title: 'MDN HTML Tutorial',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started',
      description: 'Step-by-step tutorial for HTML beginners',
      usage: 'Follow along with these tutorials for structured learning. Complete the exercises to reinforce your understanding.'
    },
    {
      title: 'HTML Living Standard',
      url: 'https://html.spec.whatwg.org/',
      description: 'Official HTML specification',
      usage: 'Reference this when you need detailed technical specifications about HTML elements and their behaviors.'
    },
    {
      title: 'WAI-ARIA Practices',
      url: 'https://www.w3.org/WAI/ARIA/apg/',
      description: 'Accessibility patterns and practices',
      usage: 'Consult this guide when implementing interactive elements to ensure they are accessible to all users.'
    },
    {
      title: 'HTML Validator',
      url: 'https://validator.w3.org/',
      description: 'W3C Markup Validation Service',
      usage: 'Regularly validate your HTML code here to ensure it meets web standards and catch any syntax errors.'
    }
  ]
})

const exercise = ref<Exercise>({
  title: 'Rotto Rocks Website',
  description: 'Create a modern, accessible website for Rottnest Island tourism',
  objectives: [
    'Implement semantic HTML5 structure',
    'Create accessible navigation',
    'Use proper heading hierarchy',
    'Implement responsive images',
    'Apply SEO best practices'
  ],
  structure: `rotto-rocks/
├── index.html
├── about.html
├── gallery.html
├── contact.html
└── images/
    ├── hero.jpg
    ├── quokka.jpg
    └── beach.jpg`,
  requirements: [
    'Use semantic HTML5 elements throughout',
    'Implement proper document structure',
    'Create accessible navigation menu',
    'Include responsive images with proper alt text',
    'Add meta tags for SEO',
    'Ensure all content is properly structured with headings',
    'Include contact form with proper input types and labels'
  ],
  resources: [
    {
      title: 'Image Resources',
      url: 'https://rottnestisland.com/media',
      description: 'Official Rottnest Island images',
      usage: 'Download and optimize these images for your website, ensuring proper attribution.'
    }
  ],
  tips: [
    'Start with the document structure before adding content',
    'Test your site with a screen reader',
    'Validate your HTML code regularly',
    'Optimize images before adding them to the site',
    'Use descriptive class names for future styling'
  ]
})

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
</script>

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
</style>