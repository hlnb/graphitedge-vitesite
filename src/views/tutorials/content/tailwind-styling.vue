<script setup lang="ts">
import { ref, computed } from 'vue'

const currentStep = ref(0)

const steps = [
  {
    title: 'Installation and Setup',
    description: "Let's start by installing and configuring Tailwind CSS in our project",
    code: `# Install Tailwind CSS and its peer dependencies
npm install -D tailwindcss postcss autoprefixer

# Generate configuration files
npx tailwindcss init -p

# Update tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

# Add to src/assets/main.css
@tailwind base;
@tailwind components;
@tailwind utilities;`
  },
  {
    title: 'Basic Typography and Colors',
    description: "Learn how to style text and use Tailwind's color system",
    code: `<div class="max-w-4xl mx-auto">
  <!-- Typography -->
  <h1 class="text-4xl font-bold text-gray-900">Welcome to Rottnest</h1>
  <p class="text-lg text-gray-600 mt-2">Discover island paradise</p>
  
  <!-- Colors -->
  <div class="bg-blue-500 text-white p-4 mt-4 rounded">
    Book your tour today
  </div>
  
  <!-- Text styling -->
  <p class="italic text-sm text-gray-500 mt-2">
    *Tours subject to availability
  </p>
</div>`
  },
  {
    title: 'Spacing and Layout',
    description: "Master Tailwind's spacing utilities and layout system",
    code: `<div class="p-6 space-y-4">
  <!-- Margin and padding -->
  <div class="bg-gray-100 p-4 rounded">
    Content with padding
  </div>
  
  <!-- Container with margin -->
  <div class="mx-auto max-w-lg bg-white shadow-sm p-6">
    Centered container
  </div>
  
  <!-- Space between elements -->
  <div class="space-y-2">
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <p>Third paragraph</p>
  </div>
</div>`
  },
  {
    title: 'Responsive Design',
    description: "Create mobile-first responsive layouts using Tailwind's breakpoint prefixes",
    code: `<!-- Responsive grid layout -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-white p-4 rounded shadow">
    <h2 class="text-xl md:text-2xl font-bold">Tours</h2>
    <p class="mt-2">Explore the island</p>
  </div>
  
  <div class="bg-white p-4 rounded shadow">
    <h2 class="text-xl md:text-2xl font-bold">Activities</h2>
    <p class="mt-2">Fun for everyone</p>
  </div>
  
  <div class="bg-white p-4 rounded shadow">
    <h2 class="text-xl md:text-2xl font-bold">Wildlife</h2>
    <p class="mt-2">Meet our quokkas</p>
  </div>
</div>`
  },
  {
    title: 'Interactive States',
    description: "Add hover, focus, and other interactive states to elements",
    code: `<!-- Button with states -->
<button class="
  px-4 py-2 
  bg-blue-500 
  text-white 
  rounded
  hover:bg-blue-600 
  focus:outline-none 
  focus:ring-2 
  focus:ring-blue-500 
  focus:ring-opacity-50
  active:bg-blue-700
  transition-colors
">
  Book Now
</button>

<!-- Link with hover state -->
<a href="#" class="
  text-gray-600 
  hover:text-blue-500 
  underline
  transition-colors
">
  Learn More
</a>`
  },
  {
    title: 'Custom Patterns',
    description: "Create reusable patterns using @apply directive",
    code: `/* In your CSS file */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded
    hover:bg-blue-600 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
    active:bg-blue-700
    transition-colors;
  }
  
  .card {
    @apply bg-white rounded-lg shadow p-6;
  }
}

<!-- Usage in components -->
<button class="btn-primary">
  Click Me
</button>

<div class="card">
  <h3 class="text-xl font-semibold">Card Title</h3>
  <p class="text-gray-600">Card content</p>
</div>`
  }
]

const totalSteps = steps.length
const progress = computed(() => ((currentStep.value + 1) / totalSteps) * 100)

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

const startExercise = () => {
  // Using a specific ID is more reliable than text content
  const exerciseSection = document.getElementById('exercise-section')
  if (exerciseSection) {
    exerciseSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-4">Styling with Tailwind CSS</h1>
      
      <!-- Introduction to Tailwind CSS -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Why Tailwind CSS?</h2>
        
        <div class="space-y-4 text-gray-700">
          <p>
            Tailwind CSS represents a paradigm shift in how we style websites. Unlike traditional CSS frameworks that provide pre-built components, Tailwind uses a utility-first approach that gives you low-level utility classes to build completely custom designs. This means you're not constrained by predefined styles and can create unique designs without fighting against the framework.
          </p>
          
          <p>
            The utility-first philosophy promotes rapid development by eliminating the need to write custom CSS, maintaining consistent spacing, colors, and design patterns throughout your application. While the HTML might initially look more verbose, the benefits include faster development time, smaller production CSS bundles, and the freedom to create any design without the constraints of traditional CSS frameworks.
          </p>

          <div class="mt-6 grid md:grid-cols-3 gap-4 text-sm">
            <div class="bg-white p-4 rounded shadow-sm">
              <h3 class="font-semibold text-gray-900 mb-2">Rapid Development</h3>
              <p class="text-gray-600">Style elements directly in your HTML with utility classes, speeding up the development process</p>
            </div>

            <div class="bg-white p-4 rounded shadow-sm">
              <h3 class="font-semibold text-gray-900 mb-2">Maintainable Code</h3>
              <p class="text-gray-600">Consistent design tokens and utilities make maintenance and updates easier</p>
            </div>

            <div class="bg-white p-4 rounded shadow-sm">
              <h3 class="font-semibold text-gray-900 mb-2">Responsive Design</h3>
              <p class="text-gray-600">Built-in responsive modifiers make mobile-first design straightforward</p>
            </div>
          </div>

          <div class="mt-6 bg-white p-4 rounded shadow-sm">
            <h3 class="font-semibold text-gray-900 mb-2">Impact on Our Project</h3>
            <p class="text-gray-600">
              For the Rottnest Island website, Tailwind CSS enables us to create a consistent, professional design system that's easy to maintain and extend. We'll use it to build responsive layouts, create interactive components, and ensure a cohesive visual experience across all pages. The utility-first approach will help us maintain consistent spacing, typography, and color schemes throughout the site.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Tutorial Content -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 class="text-2xl font-bold mb-4">{{ steps[currentStep].title }}</h2>
      <p class="text-gray-600 mb-6">{{ steps[currentStep].description }}</p>
      <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4">
        <code>{{ steps[currentStep].code }}</code>
      </pre>
    </div>
    <!-- Progress Bar -->
    <div class="mb-8">
      <div class="flex justify-between text-sm text-gray-600 mb-2">
        <span>Progress</span>
        <span>{{ Math.round(progress) }}%</span>
      </div>
      <div class="h-2 bg-gray-200 rounded-full">
        <div 
          class="h-full bg-blue-500 rounded-full transition-all duration-300"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>
    </div>
    <!-- Navigation Buttons -->
    <div class="flex justify-between">
      <button 
        @click="previousStep"
        :disabled="currentStep === 0"
        class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous Step
      </button>
      <button 
        @click="nextStep"
        :disabled="currentStep === steps.length - 1"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next Step
      </button>
    </div>
    <!-- After the tutorial steps but before Additional Resources -->
    <div id="exercise-section" class="my-12">
      <h2 class="text-2xl font-bold mb-6">Exercise: Implementing Tailwind CSS</h2>
      
      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">Task: Style the Hero Section</h3>
          <p class="text-gray-600 mb-4">
            Let's practice using Tailwind CSS by styling the hero section of our Rottnest Island homepage. 
            Follow the steps below to create a responsive and visually appealing hero section.
          </p>
        </div>

        <!-- Exercise Steps -->
        <div class="space-y-6">
          <div>
            <h4 class="font-semibold text-lg mb-2">1. Create the Basic Structure</h4>
            <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>&lt;section class="relative h-[500px] overflow-hidden"&gt;
  &lt;img 
    src="/images/rottnest-hero.jpg" 
    alt="Rottnest Island" 
    class="absolute inset-0 w-full h-full object-cover"
  /&gt;
  &lt;div class="absolute inset-0 bg-black/40"&gt;&lt;/div&gt;
  
  &lt;div class="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center"&gt;
    &lt;!-- Content here --&gt;
  &lt;/div&gt;
&lt;/section&gt;</code>
            </pre>
          </div>

          <div>
            <h4 class="font-semibold text-lg mb-2">2. Add Hero Content</h4>
            <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>&lt;div class="max-w-2xl"&gt;
  &lt;h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"&gt;
    Discover Rottnest Island
  &lt;/h1&gt;
  &lt;p class="text-xl text-white/90 mb-8"&gt;
    Experience the beauty of Western Australia's favorite island getaway
  &lt;/p&gt;
  &lt;div class="space-x-4"&gt;
    &lt;a 
      href="/tours" 
      class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
    &gt;
      Book a Tour
    &lt;/a&gt;
    &lt;a 
      href="/about" 
      class="inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
    &gt;
      Learn More
    &lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code>
            </pre>
          </div>

          <div>
            <h4 class="font-semibold text-lg mb-2">3. Add Responsive Behavior</h4>
            <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>/* Add these classes to make the hero section responsive */
&lt;section class="
  relative 
  h-[400px] md:h-[500px] lg:h-[600px] 
  overflow-hidden
"&gt;
  ...
&lt;/section&gt;</code>
            </pre>
          </div>

          <!-- Challenge Section -->
          <div class="mt-8 bg-blue-50 p-6 rounded-lg">
            <h4 class="font-semibold text-lg mb-2">🌟 Bonus Challenge</h4>
            <p class="text-gray-700 mb-4">
              Enhance the hero section by adding:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>A subtle animation when the page loads</li>
              <li>A scroll indicator at the bottom</li>
              <li>Mobile menu toggle for navigation</li>
              <li>Background video support (with fallback image)</li>
            </ul>
          </div>

          <!-- Tips Section -->
          <div class="mt-6 bg-gray-50 p-6 rounded-lg">
            <h4 class="font-semibold text-lg mb-2">💡 Tips</h4>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <svg class="h-6 w-6 mr-2 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Use semantic HTML structure for better accessibility
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 mr-2 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Test the responsive design at different breakpoints
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 mr-2 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Consider using Tailwind's group-hover for interactive elements
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Resources -->
    <div class="mt-12 mb-8">
      <h2 class="text-2xl font-bold mb-6">Additional Resources</h2>
      
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Official Documentation -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="text-lg font-semibold mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Official Documentation
          </h3>
          <ul class="space-y-2">
            <li>
              <a 
                href="https://tailwindcss.com/docs" 
                target="_blank"
                rel="noopener"
                class="text-blue-500 hover:text-blue-600 flex items-center"
              >
                Tailwind CSS Documentation
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="https://tailwindcss.com/docs/installation" 
                target="_blank"
                rel="noopener"
                class="text-blue-500 hover:text-blue-600 flex items-center"
              >
                Installation Guide
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="https://tailwindcss.com/docs/configuration" 
                target="_blank"
                rel="noopener"
                class="text-blue-500 hover:text-blue-600 flex items-center"
              >
                Configuration Guide
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Tools and Plugins -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="text-lg font-semibold mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Helpful Tools
          </h3>
          <ul class="space-y-2">
            <li>
              <a 
                href="https://github.com/tailwindlabs/tailwindcss-intellisense" 
                target="_blank"
                rel="noopener"
                class="text-blue-500 hover:text-blue-600 flex items-center"
              >
                Tailwind CSS IntelliSense
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="https://play.tailwindcss.com/" 
                target="_blank"
                rel="noopener"
                class="text-blue-500 hover:text-blue-600 flex items-center"
              >
                Tailwind Play (Online Playground)
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Community Resources -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="text-lg font-semibold mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Community Resources
          </h3>
          <ul class="space-y-2">
            <li>
              <a 
                href="https://tailwindui.com/" 
                target="_blank"
                rel="noopener"
                class="text-blue-500 hover:text-blue-600 flex items-center"
              >
                Tailwind UI Components
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/aniftyco/awesome-tailwindcss" 
                target="_blank"
                rel="noopener"
                class="text-blue-500 hover:text-blue-600 flex items-center"
              >
                Awesome Tailwind CSS
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Video Tutorials -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="text-lg font-semibold mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Video Resources
          </h3>
          <ul class="space-y-2">
            <li>
              <a 
                href="https://www.youtube.com/watch?v=UBOj6rqRUME" 
                target="_blank"
                rel="noopener"
                class="text-blue-500 hover:text-blue-600 flex items-center"
              >
                Tailwind CSS Crash Course
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/tailwindlabs" 
                target="_blank"
                rel="noopener"
                class="text-blue-500 hover:text-blue-600 flex items-center"
              >
                Tailwind Labs YouTube Channel
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Tutorial Navigation -->
    <div class="tutorial-navigation bg-gray-50 p-6 rounded-lg mt-8">
      <h2 class="text-xl font-semibold mb-4">Tutorial Navigation</h2>
      
      <div class="grid md:grid-cols-3 gap-4">
        <!-- Previous Tutorial -->
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h3 class="font-semibold text-sm text-gray-500 mb-2">Previous Tutorial</h3>
          <router-link 
            to="/tutorials/ContactForm"
            class="block hover:text-primary transition-colors"
          >
            <h4 class="font-medium mb-1">Contact Form</h4>
            <p class="text-sm text-gray-600">Create and validate a contact form using Vue.js</p>
          </router-link>
        </div>

        <!-- All Tutorials -->
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h3 class="font-semibold text-sm text-gray-500 mb-2">All Tutorials</h3>
          <router-link 
            to="/tutorials"
            class="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            View All Tutorials
          </router-link>
        </div>

        <!-- Next Tutorial -->
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h3 class="font-semibold text-sm text-gray-500 mb-2">Next Tutorial</h3>
          <router-link 
            to="/tutorials/photo-gallery"
            class="block hover:text-primary transition-colors"
          >
            <h4 class="font-medium mb-1">Photo Gallery</h4>
            <p class="text-sm text-gray-600">Create an interactive photo gallery</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template> 