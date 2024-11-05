<script setup lang="ts">
import { ref } from 'vue'
import type { Tutorial, Exercise } from '@/types'

const activeStep = ref(0)

const tutorial = ref<Tutorial>({
  title: 'Images and Links',
  description: 'Learn how to add images and create effective links in your HTML content',
  difficulty: 'Beginner',
  category: 'HTML',
  duration: '1-2 hours',
  steps: [
    {
      title: 'Adding Images to Your Content',
      content: `
        <div class="step-content">
          <p class="mb-6">Images enhance your content and help convey information visually. Here's how to add them properly:</p>
          
          <ul class="mb-6">
            <li>Use the <code>&lt;img&gt;</code> tag with required attributes</li>
            <li>Always include descriptive alt text</li>
            <li>Choose appropriate image formats</li>
            <li>Optimize images for web use</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: Images in HTML
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `<img 
  src="path/to/image.jpg" 
  alt="Descriptive text about the image"
  width="800"
  height="600"
/>`
    },
    {
      title: 'Using Figure and Figcaption',
      content: `
        <div class="step-content">
          <p class="mb-6">The <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements provide semantic meaning to images and their captions:</p>
          
          <ul class="mb-6">
            <li>Group related images and captions together</li>
            <li>Provide context for your images</li>
            <li>Improve accessibility and SEO</li>
            <li>Can be used for multiple types of content</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: Figure Element
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `<figure class="image-with-caption">
  <img 
    src="quokka.jpg" 
    alt="A smiling quokka on Rottnest Island"
  />
  <figcaption>
    The famous quokkas of Rottnest Island are known 
    for their friendly appearance
  </figcaption>
</figure>

<!-- Multiple images in one figure -->
<figure class="gallery-group">
  <img src="beach.jpg" alt="Pristine beach at The Basin">
  <img src="cycling.jpg" alt="Cycling around the island">
  <figcaption>
    Enjoy various activities on Rottnest Island
  </figcaption>
</figure>`
    },
    {
      title: 'Creating Links',
      content: `
        <div class="step-content">
          <p class="mb-6">Links connect your content to other resources. Learn how to create effective links:</p>
          
          <ul class="mb-6">
            <li>Use meaningful link text</li>
            <li>Choose between relative and absolute paths</li>
            <li>Add proper attributes for external links</li>
            <li>Create accessible link text</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: Creating Hyperlinks
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `<!-- Internal link -->
<a href="/about">About Us</a>

<!-- External link -->
<a href="https://example.com" 
   target="_blank" 
   rel="noopener noreferrer">
  Visit Example Site
</a>`
    },
    {
      title: 'Responsive Images with Srcset',
      content: `
        <div class="step-content">
          <p class="mb-6">Responsive images adapt to different screen sizes and device capabilities using the <code>srcset</code> attribute:</p>
          
          <ul class="mb-6">
            <li>Use <code>srcset</code> to provide multiple image sizes</li>
            <li>Add <code>sizes</code> to help browsers choose the right image</li>
            <li>Include width descriptors (w) for viewport-based selection</li>
            <li>Always provide a fallback <code>src</code> for older browsers</li>
          </ul>

          <div class="example-section mb-6">
            <h4>When to use srcset:</h4>
            <ul>
              <li>For resolution switching (same image, different sizes)</li>
              <li>When serving different image sizes based on viewport</li>
              <li>For optimizing image delivery and performance</li>
            </ul>
          </div>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: Responsive Images
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `<!-- Resolution switching with srcset -->
<img 
  srcset="rottnest-small.jpg 300w,
          rottnest-medium.jpg 600w,
          rottnest-large.jpg 900w"
  sizes="(max-width: 320px) 280px,
         (max-width: 640px) 580px,
         800px"
  src="rottnest-fallback.jpg"
  alt="Aerial view of Rottnest Island"
  loading="lazy"
/>`
    },
    {
      title: 'Using the Picture Element',
      content: `
        <div class="step-content">
          <p class="mb-6">The <code>&lt;picture&gt;</code> element provides more control over image display with art direction:</p>
          
          <ul class="mb-6">
            <li>Use for art direction (different image crops/ratios)</li>
            <li>Support multiple image formats with fallbacks</li>
            <li>Control image display based on media queries</li>
            <li>Combine with srcset for maximum flexibility</li>
          </ul>

          <div class="example-section mb-6">
            <h4>When to use picture:</h4>
            <ul>
              <li>Different image crops for different screen sizes</li>
              <li>Supporting modern image formats with fallbacks</li>
              <li>Complex responsive image requirements</li>
              <li>When images need different aspect ratios</li>
            </ul>
          </div>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: Picture Element
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `<!-- Art direction with picture element -->
<picture>
  <!-- Desktop: Wide landscape shot -->
  <source 
    media="(min-width: 800px)"
    srcset="rottnest-wide.jpg"
  />
  <!-- Tablet: Standard landscape -->
  <source 
    media="(min-width: 400px)"
    srcset="rottnest-standard.jpg"
  />
  <!-- Mobile: Square crop -->
  <img 
    src="rottnest-square.jpg" 
    alt="Rottnest Island coastline"
  />
</picture>

<!-- Modern format with fallback -->
<picture>
  <source 
    type="image/webp" 
    srcset="quokka.webp"
  />
  <source 
    type="image/jpeg" 
    srcset="quokka.jpg"
  />
  <img 
    src="quokka.jpg" 
    alt="Smiling quokka at Rottnest Island"
  />
</picture>`
    }
  ],
  resources: [
    {
      title: 'MDN Images Guide',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML',
      description: 'Comprehensive guide to using images in HTML',
      usage: 'Use this as your primary reference for learning how to work with images. Covers basic to advanced concepts.'
    },
    {
      title: 'MDN Links Guide',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks',
      description: 'Complete guide to creating effective links',
      usage: 'Learn best practices for creating accessible and user-friendly links.'
    },
    {
      title: 'MDN Responsive Images Tutorial',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images',
      description: 'Step-by-step tutorial for implementing responsive images',
      usage: 'Follow this tutorial to understand how to make your images work across different devices and screen sizes.'
    },
    {
      title: 'MDN Image Element Reference',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img',
      description: 'Technical reference for the <img> element',
      usage: 'Reference this when you need detailed information about image attributes and properties.'
    },
    {
      title: 'MDN Picture Element Reference',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture',
      description: 'Technical reference for the <picture> element',
      usage: 'Use this when implementing art direction and responsive images with the picture element.'
    },
    {
      title: 'MDN Anchor Element Reference',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a',
      description: 'Technical reference for the <a> element',
      usage: 'Reference this for detailed information about link attributes and behaviors.'
    }
  ]
})

const exercise = ref<Exercise>({
  title: 'Rotto Rocks Image Gallery',
  description: 'Enhance the Rotto Rocks website by adding an image gallery and improving navigation with proper links',
  objectives: [
    'Add a responsive image gallery to showcase Rottnest Island',
    'Implement proper navigation between pages',
    'Create accessible image descriptions for Rottnest wildlife and landscapes',
    'Link to external resources about Rottnest Island'
  ],
  structure: `rotto-rocks/
├── index.html
├── about.html
├── gallery.html      # New file
├── contact.html
└── images/
    ├── hero.jpg
    ├── quokka.jpg
    ├── beach.jpg
    ├── lighthouse.jpg
    ├── cycling.jpg
    └── snorkeling.jpg`,
  requirements: [
    'Add a new gallery.html page with a grid of Rottnest Island images',
    'Include descriptive alt text for all images focusing on Rottnest wildlife and landscapes',
    'Create navigation links between all pages (Home, About, Gallery, Contact)',
    'Add external links to official Rottnest Island resources',
    'Ensure all images have appropriate dimensions and are optimized for web',
    'Include image captions for gallery photos',
    'Add "Back to Top" links on longer pages'
  ],
  tips: [
    'Reuse the semantic structure from your HTML101 exercise',
    'Group related images in <figure> elements with <figcaption>',
    'Use relative paths for internal links',
    'Add target="_blank" for external links',
    'Optimize images before adding them to maintain fast load times'
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
      <p>Now that you understand images and links, let's apply what you've learned!</p>
      <button class="cta-button" @click="scrollToExercise">Start the Exercise</button>
    </div>

    <!-- Exercise Section -->
    <section class="exercise-section" id="exercise">
      <h2>Practice Exercise: {{ exercise.title }}</h2>
      <div class="exercise-content">
        <div class="exercise-intro">
          <p>{{ exercise.description }}</p>
          <h3>Learning Objectives:</h3>
          <ul class="learning-objectives">
            <li v-for="objective in exercise.objectives" :key="objective">
              {{ objective }}
            </li>
          </ul>
        </div>

        <div class="site-structure mt-6">
          <h3>Project Structure</h3>
          <pre class="font-mono text-sm bg-gray-100 p-4 rounded-lg mt-2">{{ exercise.structure }}</pre>
        </div>

        <div class="requirements mt-6">
          <h3>Requirements:</h3>
          <ul>
            <li v-for="req in exercise.requirements" :key="req">
              {{ req }}
            </li>
          </ul>
        </div>

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
      <span class="separator-text">Navigation</span>
    </div>

    <section class="tutorial-navigation-section">
      <div class="navigation-grid">
        <!-- Previous Tutorial -->
        <router-link 
          to="/tutorials/HTML101" 
          class="tutorial-card previous-tutorial"
        >
          <div class="card-content">
            <span class="direction-label">← Previous Tutorial</span>
            <h3>HTML Fundamentals</h3>
            <p>Master modern HTML5 with semantic markup and best practices.</p>
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
          to="/tutorials/Forms" 
          class="tutorial-card next-tutorial"
        >
          <div class="card-content">
            <span class="direction-label">Next Tutorial →</span>
            <h3>HTML Forms</h3>
            <p>Learn how to create interactive forms and handle user input effectively.</p>
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
</style>