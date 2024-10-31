<script setup lang="ts">
const tutorials = [
  {
    name: 'CSS Introduction',
    content: 'CSS (Cascading Style Sheets) controls the visual presentation of HTML elements:',
    code: `/* Three ways to add CSS */

<!-- 1. External CSS (recommended) -->
<link rel="stylesheet" href="styles.css">

<!-- 2. Internal CSS -->
<style>
  body {
    font-family: Arial, sans-serif;
  }
</style>

<!-- 3. Inline CSS (avoid when possible) -->
<div style="color: blue;">Blue text</div>`
  },
  {
    name: 'Selectors and Properties',
    content: 'CSS uses selectors to target elements and properties to style them:',
    code: `/* Element Selector */
p {
  color: #333;
  font-size: 16px;
  line-height: 1.5;
}

/* Class Selector */
.highlight {
  background-color: yellow;
  padding: 10px;
}

/* ID Selector */
#header {
  background-color: navy;
  color: white;
}

/* Combining Selectors */
.card h2 {
  color: #2c5282;
  margin-bottom: 1rem;
}`
  },
  {
    name: 'Box Model',
    content: 'Every element in CSS follows the box model with content, padding, border, and margin:',
    code: `/* Box Model Example */
.box {
  /* Content dimensions */
  width: 200px;
  height: 100px;
  
  /* Inner spacing */
  padding: 20px;
  
  /* Border */
  border: 2px solid #333;
  
  /* Outer spacing */
  margin: 10px;
  
  /* Optional: Include padding and border in width/height */
  box-sizing: border-box;
}`
  },
  {
    name: 'Flexbox Layout',
    content: 'Flexbox is a powerful layout system for arranging elements:',
    code: `/* Container */
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

/* Flex Items */
.flex-item {
  flex: 1;
  /* or specific sizing */
  flex-basis: 200px;
}

/* Common Flex Properties */
.flex-example {
  display: flex;
  flex-direction: row | column;
  flex-wrap: wrap | nowrap;
  justify-content: center | space-between | space-around;
  align-items: center | flex-start | flex-end;
}`
  },
  {
    name: 'Responsive Design',
    content: 'Make your website adapt to different screen sizes using media queries:',
    code: `/* Mobile First Approach */
.container {
  width: 100%;
  padding: 15px;
}

/* Tablet Styles */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Desktop Styles */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

/* Common Breakpoints */
@media (max-width: 640px) { /* Mobile */ }
@media (min-width: 641px) and (max-width: 1024px) { /* Tablet */ }
@media (min-width: 1025px) { /* Desktop */ }`
  },
  {
    name: 'CSS Variables',
    content: 'Use CSS custom properties (variables) for consistent styling:',
    code: `:root {
  /* Define variables */
  --primary-color: #3490dc;
  --secondary-color: #ffed4a;
  --text-color: #2d3748;
  --spacing-unit: 1rem;
  --border-radius: 4px;
}

/* Using variables */
.button {
  background-color: var(--primary-color);
  color: white;
  padding: var(--spacing-unit);
  border-radius: var(--border-radius);
}

.alert {
  background-color: var(--secondary-color);
  padding: var(--spacing-unit);
  color: var(--text-color);
}`
  }
];

const resources = [
  {
    name: 'Documentation',
    links: [
      {
        title: 'MDN CSS Guide',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        description: 'Comprehensive CSS documentation and tutorials'
      },
      {
        title: 'CSS Tricks',
        url: 'https://css-tricks.com',
        description: 'Tips, tricks, and techniques for CSS'
      },
      {
        title: 'W3Schools CSS',
        url: 'https://www.w3schools.com/css/',
        description: 'Interactive CSS tutorials and references'
      }
    ]
  },
  {
    name: 'Tools',
    links: [
      {
        title: 'CSS Grid Generator',
        url: 'https://cssgrid-generator.netlify.app/',
        description: 'Visual tool for creating CSS Grid layouts'
      },
      {
        title: 'Flexbox Froggy',
        url: 'https://flexboxfroggy.com/',
        description: 'Learn Flexbox through a fun game'
      },
      {
        title: 'CSS Gradient Generator',
        url: 'https://cssgradient.io/',
        description: 'Create beautiful CSS gradients'
      }
    ]
  }
];

const nextTutorial = {
  name: 'Photo Gallery',
  path: '/tutorials/photo-gallery'
} as const;
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">CSS Fundamentals</h1>
    
    <div class="space-y-8">
      <section v-for="tutorial in tutorials" :key="tutorial.name">
        <h2 class="text-2xl font-semibold mb-4">{{ tutorial.name }}</h2>
        <p class="mb-4">{{ tutorial.content }}</p>
        
        <div class="bg-gray-50 p-4 rounded-lg mb-4">
          <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code>{{ tutorial.code }}</code></pre>
        </div>
      </section>

      <!-- Resources Section -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold mb-6">Additional Resources</h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="resource in resources" :key="resource.name" class="space-y-4">
            <h3 class="text-xl font-semibold text-primary">{{ resource.name }}</h3>
            <ul class="space-y-3">
              <li v-for="link in resource.links" :key="link.url" class="border-l-4 border-gray-200 pl-4">
                <a 
                  :href="link.url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-primary hover:text-primary-dark font-medium"
                >
                  {{ link.title }}
                </a>
                <p class="text-sm text-gray-600 mt-1">{{ link.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Next Steps -->
      <div class="next-steps bg-gray-50 p-4 rounded-lg mt-8">
        <h2 class="text-xl font-semibold mb-4">Next Steps</h2>
        <p>Ready to apply your CSS knowledge? Continue to the next tutorial:</p>
        <router-link 
          :to="nextTutorial.path"
          class="inline-flex items-center text-primary hover:text-primary-dark transition-colors mt-4"
        >
          Continue to "{{ nextTutorial.name }}"
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>