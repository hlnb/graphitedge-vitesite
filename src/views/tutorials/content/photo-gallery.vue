<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Creating an Interactive Photo Gallery</h1>
    
    <!-- Table of Contents -->
    <nav class="bg-gray-50 rounded-lg mb-8 sticky top-4 z-10">
      <!-- Mobile Toggle -->
      <button 
        @click="isNavOpen = !isNavOpen"
        class="md:hidden w-full p-4 flex items-center justify-between text-lg font-semibold"
      >
        Table of Contents
        <svg 
          class="w-5 h-5 transform transition-transform duration-200"
          :class="{ 'rotate-180': isNavOpen }"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Navigation Content -->
      <div 
        :class="{ 'hidden': !isNavOpen }"
        class="md:block p-4"
      >
        <!-- HTML & CSS Section -->
        <div class="mb-6">
          <div class="mb-2">
            <a 
              href="#section-0"
              class="text-blue-600 hover:text-blue-800 font-medium text-lg"
              @click="isNavOpen = false"
            >
              HTML & CSS Gallery
            </a>
          </div>
          <div class="flex flex-wrap gap-4 pl-4 md:pl-0">
            <a 
              v-for="(step, stepIndex) in sections[0].steps" 
              :key="stepIndex"
              :href="`#section-0-step-${stepIndex}`"
              class="text-sm text-gray-600 hover:text-gray-800 whitespace-nowrap"
              @click="isNavOpen = false"
            >
              {{ step.title }}
            </a>
          </div>
        </div>

        <!-- Tailwind Section -->
        <div>
          <div class="mb-2">
            <a 
              href="#section-1"
              class="text-blue-600 hover:text-blue-800 font-medium text-lg"
              @click="isNavOpen = false"
            >
              Converting to Tailwind
            </a>
          </div>
          <div class="flex flex-wrap gap-4 pl-4 md:pl-0">
            <a 
              v-for="(step, stepIndex) in sections[1].steps" 
              :key="stepIndex"
              :href="`#section-1-step-${stepIndex}`"
              class="text-sm text-gray-600 hover:text-gray-800 whitespace-nowrap"
              @click="isNavOpen = false"
            >
              {{ step.title }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="space-y-12">
      <section 
        v-for="(section, sIndex) in sections" 
        :key="sIndex"
        :id="`section-${sIndex}`"
        class="scroll-mt-20"
      >
        <h2 class="text-2xl font-bold mb-6">{{ section.title }}</h2>
        
        <div class="space-y-8">
          <div 
            v-for="(step, stepIndex) in section.steps" 
            :key="stepIndex"
            :id="`section-${sIndex}-step-${stepIndex}`"
            class="scroll-mt-20"
          >
            <h3 class="text-xl font-semibold mb-4">{{ step.title }}</h3>
            
            <p v-if="step.explanation" class="text-gray-600 mb-4">
              {{ step.explanation }}
            </p>

            <!-- Different content types -->
            <template v-if="step.type === 'technical'">
              <div 
                v-for="(tech, index) in step.content" 
                :key="index" 
                class="mb-6"
              >
                <h4 class="font-semibold text-lg mb-2">{{ tech.title }}</h4>
                <p class="text-gray-600 mb-3">{{ tech.description }}</p>
                <pre v-if="tech.code" class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{{ tech.code }}</code>
                </pre>
              </div>
            </template>

            <template v-else>
              <pre v-if="step.code" class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4">
                <code>{{ step.code }}</code>
              </pre>
            </template>

            <!-- Tips Section -->
            <div v-if="step.tips" class="mt-6 bg-blue-50 p-4 rounded-lg">
              <h4 class="font-semibold text-lg mb-2 text-blue-800">Tips</h4>
              <ul class="space-y-2">
                <li 
                  v-for="(tip, index) in step.tips" 
                  :key="index" 
                  class="flex items-start"
                >
                  <svg class="h-6 w-6 mr-2 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-blue-800">{{ tip }}</span>
                </li>
              </ul>
            </div>

            <!-- Warning Section -->
            <div v-if="step.warnings" class="mt-4 bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-semibold text-lg mb-2 text-yellow-800">Important Notes</h4>
              <ul class="space-y-2">
                <li 
                  v-for="(warning, index) in step.warnings" 
                  :key="index" 
                  class="flex items-start"
                >
                  <svg class="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span class="text-yellow-800">{{ warning }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Tutorial Navigation -->
    <div class="mt-16 pt-8 border-t border-gray-200">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <!-- Previous Tutorial -->
        <RouterLink 
          to="/tutorials/ImagesLinks"
          class="flex items-center text-blue-600 hover:text-blue-800 group"
        >
          <svg 
            class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>
            <span class="block text-sm text-gray-500">Previous Tutorial</span>
            <span class="block font-medium">Image Links</span>
          </span>
        </RouterLink>

        <!-- All Tutorials -->
        <RouterLink 
          to="/tutorials"
          class="flex items-center text-gray-600 hover:text-gray-800"
        >
          <svg 
            class="w-5 h-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          <span class="font-medium">All Tutorials</span>
        </RouterLink>

        <!-- Next Tutorial -->
        <RouterLink 
          to="/tutorials/gallery-component"
          class="flex items-center text-blue-600 hover:text-blue-800 group"
        >
          <span>
            <span class="block text-sm text-gray-500">Next Tutorial</span>
            <span class="block font-medium">Vue Gallery Component</span>
          </span>
          <svg 
            class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isNavOpen = ref(false)

// Add smooth scrolling behavior
const handleNavClick = (event) => {
  const href = event.currentTarget.getAttribute('href')
  if (href?.startsWith('#')) {
    event.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      isNavOpen.value = false // Close mobile nav after click
    }
  }
}

// Optional: Close nav when clicking outside
const closeNavOnClickOutside = (event) => {
  if (isNavOpen.value && !event.target.closest('nav')) {
    isNavOpen.value = false
  }
}

// Optional: Add click outside listener
onMounted(() => {
  document.addEventListener('click', closeNavOnClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', closeNavOnClickOutside)
})

// Sample data - replace with your full content
const sections = ref([
  {
    title: 'HTML & CSS Gallery',
    steps: [
      {
        title: 'Review: ImageLinks Requirements',
        description: 'Let\'s review what we built in the ImageLinks tutorial',
        explanation: 'In the previous tutorial, we created a basic image gallery for Rottnest Island. We\'ll now enhance it with CSS to make it more interactive and visually appealing while maintaining all the accessibility and optimization requirements we previously implemented.',
        code: `<!-- Previous ImageLinks structure -->
<div class="gallery">
  <img src="images/quokka.jpg" 
       alt="A smiling quokka on Rottnest Island" 
       width="800" 
       height="600">
  <p class="caption">Friendly quokka at Rottnest</p>
  
  <img src="images/basin.jpg" 
       alt="Crystal clear waters of The Basin" 
       width="800" 
       height="600">
  <p class="caption">The Basin's turquoise waters</p>
  
  <!-- More Rottnest images -->
  
  <a href="#top" class="back-to-top">Back to Top</a>
</div>`,
        tips: [
          'We\'ll keep all the accessibility features',
          'Maintain image optimization practices'
        ]
      },
      {
        title: 'Enhanced Grid Layout',
        type: 'technical',
        content: [
          {
            title: 'Responsive Grid',
            description: 'Transform the basic layout into a responsive grid',
            explanation: 'Building on our existing gallery, we\'ll create a grid that showcases Rottnest\'s wildlife and landscapes more effectively.',
            code: `.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.gallery-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}`
          }
        ],
        tips: [
          'Maintains original image dimensions',
          'Preserves accessibility features'
        ]
      },
      {
        title: 'Improved Image Captions',
        description: 'Enhance the caption styling while maintaining clarity',
        explanation: 'We\'ll style the existing captions to be more visually appealing while ensuring they remain readable and informative about Rottnest\'s features.',
        code: `.caption {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #333;
  line-height: 1.4;
  max-width: 300px;
}

/* Optional: Add emphasis to wildlife descriptions */
.caption[data-type="wildlife"] {
  color: #2c5282;
  font-weight: 500;
}

/* Optional: Style landscape captions differently */
.caption[data-type="landscape"] {
  color: #2f855a;
  font-weight: 500;
}`,
        tips: [
          'Keep captions descriptive and informative',
          'Maintain good color contrast for readability'
        ]
      },
      {
        title: 'Enhanced Back to Top',
        type: 'technical',
        content: [
          {
            title: 'Styled Back to Top Link',
            description: 'Improve the back to top link styling',
            explanation: 'We\'ll enhance the "Back to Top" link while keeping it accessible and easy to use.',
            code: `.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #2b6cb0;
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 9999px;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.back-to-top:hover {
  transform: translateY(-2px);
}

.back-to-top:focus {
  outline: 3px solid #90cdf4;
  outline-offset: 2px;
}`
          }
        ],
        tips: [
          'Keep the link visible on scroll',
          'Ensure keyboard accessibility'
        ]
      },
      {
        title: 'Final Implementation',
        description: 'Complete HTML and CSS implementation',
        explanation: 'Let\'s put it all together while maintaining all our original requirements.',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rottnest Island Gallery</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="gallery">
    <div class="gallery-item">
      <img src="images/quokka.jpg" 
           alt="A smiling quokka on Rottnest Island"
           width="800"
           height="600"
           loading="lazy">
      <p class="caption" data-type="wildlife">
        Friendly quokka at Rottnest
      </p>
    </div>
    <!-- More gallery items -->
  </div>
  
  <a href="#top" 
     class="back-to-top"
     aria-label="Scroll back to top">
    Back to Top
  </a>
</body>
</html>`,
        tips: [
          'Test all accessibility features',
          'Verify image optimization',
          'Check responsive behavior'
        ],
        warnings: [
          'Ensure all images have proper alt text',
          'Verify caption accuracy for Rottnest locations',
          'Test back-to-top functionality'
        ]
      }
    ]
  },
  {
    title: 'Converting to Tailwind',
    steps: [
      {
        title: 'Why Use Tailwind?',
        description: 'Understanding the benefits of switching to Tailwind CSS',
        explanation: 'Converting our custom CSS to Tailwind offers several advantages: consistent design tokens, reduced CSS bundle size, faster development iterations, and better maintainability. Tailwind\'s utility-first approach works particularly well with component-based architectures.',
        tips: [
          'No need to maintain separate CSS files',
          'Standardized spacing and color values',
          'Easier responsive design implementation',
          'Better team collaboration with consistent naming'
        ]
      },
      {
        title: 'Basic Gallery Structure',
        type: 'technical',
        content: [
          {
            title: 'Grid Layout Conversion',
            description: 'Convert the custom grid CSS to Tailwind utilities',
            explanation: 'We\'ll replace our custom grid CSS with Tailwind\'s utility classes. This makes our layout more consistent with other components and easier to modify.',
            code: `<!-- Before -->
<div class="gallery">

<!-- After -->
<div class="max-w-7xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  <div class="flex flex-col items-center text-center">
    <img 
      src="images/quokka.jpg" 
      alt="A smiling quokka on Rottnest Island"
      class="w-full h-[300px] object-cover rounded-lg"
      width="800"
      height="600"
      loading="lazy"
    >
    <p class="mt-4 text-lg text-gray-800 max-w-sm">
      Friendly quokka at Rottnest
    </p>
  </div>
</div>`
          }
        ],
        tips: [
          'Use Tailwind\'s responsive prefixes instead of media queries',
          'Leverage Tailwind\'s standardized spacing scale'
        ]
      },
      {
        title: 'Image and Caption Styling',
        type: 'technical',
        content: [
          {
            title: 'Converting Image Styles',
            description: 'Transform custom image and caption styles to Tailwind',
            explanation: 'Tailwind provides utility classes for all our image styling needs, including hover states and transitions.',
            code: `<!-- Image with hover effect and caption -->
<div class="group relative overflow-hidden rounded-lg">
  <img 
    src="images/basin.jpg" 
    alt="Crystal clear waters of The Basin"
    class="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
    width="800"
    height="600"
    loading="lazy"
  >
  <p class="mt-4 text-lg font-medium" data-type="landscape">
    <span class="text-emerald-700">The Basin's turquoise waters</span>
  </p>
</div>`
          }
        ],
        tips: [
          'Use group-hover for parent-child interactions',
          'Leverage Tailwind\'s color palette for consistency'
        ]
      },
      {
        title: 'Back to Top Button',
        type: 'technical',
        content: [
          {
            title: 'Converting Button Styles',
            description: 'Transform the back-to-top button using Tailwind',
            explanation: 'Tailwind makes it easy to style interactive elements with built-in state variants.',
            code: `<a 
  href="#top"
  class="fixed bottom-8 right-8 bg-blue-600 text-white px-5 py-3 rounded-full
         shadow-lg hover:-translate-y-1 transition-transform duration-200
         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
  aria-label="Scroll back to top"
>
  Back to Top
</a>`
          }
        ],
        tips: [
          'Use Tailwind\'s transform utilities for animations',
          'Implement consistent focus styles'
        ]
      },
      {
        title: 'Benefits and Optimization',
        description: 'Understanding the advantages of the Tailwind conversion',
        explanation: 'Converting to Tailwind provides several key benefits: reduced CSS bundle size, consistent design system, faster development, better maintenance, easier responsive design, and improved team collaboration.',
        tips: [
          'Use @apply for frequently repeated class combinations',
          'Leverage Tailwind\'s configuration for custom values',
          'Consider extracting components for repeated patterns'
        ],
        warnings: [
          'Keep accessibility in mind when using Tailwind classes',
          'Don\'t sacrifice semantic HTML for styling convenience',
          'Consider adding comments for complex class combinations'
        ]
      }
    ]
  }
])

// Optional: Add route meta for tutorial navigation
const tutorialMeta = {
  series: 'Fundamentals',
  seriesOrder: 3,
  totalInSeries: 4,
  previousTutorial: {
    title: 'Image Links',
    path: '/tutorials/fundamentals/image-links'
  },
  nextTutorial: {
    title: 'Vue Gallery Component',
    path: '/tutorials/vue/gallery-component'
  }
}
</script>

<style scoped>
/* Optional: Add transition for mobile nav */
.nav-enter-active,
.nav-leave-active {
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
}

.nav-enter-from,
.nav-leave-to {
  max-height: 0;
}

.nav-enter-to,
.nav-leave-from {
  max-height: 500px;
}
</style>