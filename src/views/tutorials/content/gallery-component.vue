<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Creating a Vue Gallery Component</h1>
    
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
        <!-- Main Sections -->
        <div class="space-y-6">
          <!-- Basic Implementation -->
          <div>
            <div class="mb-2">
              <a 
                href="#section-0"
                class="text-blue-600 hover:text-blue-800 font-medium text-lg"
                @click="isNavOpen = false"
              >
                Basic Implementation
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

          <!-- Advanced Features -->
          <div>
            <div class="mb-2">
              <a 
                href="#section-1"
                class="text-blue-600 hover:text-blue-800 font-medium text-lg"
                @click="isNavOpen = false"
              >
                Advanced Features
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

          <!-- Examples -->
          <div>
            <div class="mb-2">
              <a 
                href="#section-2"
                class="text-blue-600 hover:text-blue-800 font-medium text-lg"
                @click="isNavOpen = false"
              >
                Examples
              </a>
            </div>
            <div class="flex flex-wrap gap-4 pl-4 md:pl-0">
              <a 
                v-for="(step, stepIndex) in sections[2].steps" 
                :key="stepIndex"
                :href="`#section-2-step-${stepIndex}`"
                class="text-sm text-gray-600 hover:text-gray-800 whitespace-nowrap"
                @click="isNavOpen = false"
              >
                {{ step.title }}
              </a>
            </div>
          </div>

          <!-- Testing -->
          <div>
            <div class="mb-2">
              <a 
                href="#section-3"
                class="text-blue-600 hover:text-blue-800 font-medium text-lg"
                @click="isNavOpen = false"
              >
                Testing
              </a>
            </div>
            <div class="flex flex-wrap gap-4 pl-4 md:pl-0">
              <a 
                v-for="(step, stepIndex) in sections[3].steps" 
                :key="stepIndex"
                :href="`#section-3-step-${stepIndex}`"
                class="text-sm text-gray-600 hover:text-gray-800 whitespace-nowrap"
                @click="isNavOpen = false"
              >
                {{ step.title }}
              </a>
            </div>
          </div>

          <!-- Performance -->
          <div>
            <div class="mb-2">
              <a 
                href="#section-4"
                class="text-blue-600 hover:text-blue-800 font-medium text-lg"
                @click="isNavOpen = false"
              >
                Performance Optimization
              </a>
            </div>
            <div class="flex flex-wrap gap-4 pl-4 md:pl-0">
              <a 
                v-for="(step, stepIndex) in sections[4].steps" 
                :key="stepIndex"
                :href="`#section-4-step-${stepIndex}`"
                class="text-sm text-gray-600 hover:text-gray-800 whitespace-nowrap"
                @click="isNavOpen = false"
              >
                {{ step.title }}
              </a>
            </div>
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

            <!-- Technical Content -->
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

            <!-- Standard Content -->
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
          to="/tutorials/content/photo-gallery"
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
            <span class="block font-medium">Photo Gallery</span>
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
          to="/tutorials/content/contact-form"
          class="flex items-center text-blue-600 hover:text-blue-800 group"
        >
          <span>
            <span class="block text-sm text-gray-500">Next Tutorial</span>
            <span class="block font-medium">Building a Contact Form</span>
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

      <!-- Tutorial Series Context -->
      <div class="mt-8 bg-gray-50 rounded-lg p-4">
        <h2 class="text-lg font-semibold mb-2">Tutorial Series: Vue.js Components</h2>
        <p class="text-gray-600 mb-4">
          This tutorial is part of the Vue.js Components series, focusing on building reusable and maintainable Vue components.
          After completing this tutorial, you'll be ready to move on to form handling with Vue.js.
        </p>
        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-500">Series Progress:</span>
          <div class="flex-1 h-2 bg-gray-200 rounded-full max-w-xs">
            <div 
              class="h-full bg-blue-500 rounded-full"
              style="width: 66%"
            ></div>
          </div>
          <span class="text-sm text-gray-500">2 of 3</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth scrolling behavior */
html {
  scroll-behavior: smooth;
}

/* Code block styling */
pre {
  position: relative;
  padding-top: 2.5rem;
}

pre::before {
  content: '';
  position: absolute;
  top: 0.75rem;
  left: 1rem;
  width: 0.75rem;
  height: 0.75rem;
  background: #ff5f56;
  border-radius: 50%;
  box-shadow: 
    1.25rem 0 0 #ffbd2e,
    2.5rem 0 0 #27c93f;
}

/* Table of contents hover effects */
.toc-link {
  position: relative;
  transition: color 0.2s;
}

.toc-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.2s ease;
}

.toc-link:hover::after {
  width: 100%;
}

/* Transition for mobile nav */
.nav-content-enter-active,
.nav-content-leave-active {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
}

.nav-content-enter-from,
.nav-content-leave-to {
  max-height: 0;
  opacity: 0;
}

.nav-content-enter-to,
.nav-content-leave-from {
  max-height: 1000px;
  opacity: 1;
}

/* Code highlighting transitions */
.highlight-line {
  background: rgba(62, 184, 255, 0.1);
  transition: background 0.3s;
}

.highlight-line:hover {
  background: rgba(62, 184, 255, 0.2);
}

/* Sticky header shadow */
.sticky-header {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  backdrop-filter: blur(8px);
  background: rgba(255,255,255,0.9);
}

/* Progress indicator */
.progress-bar {
  height: 3px;
  background: linear-gradient(to right, #3b82f6 var(--scroll), transparent 0);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
}

/* Print styles */
@media print {
  .sticky {
    position: static;
  }
  
  .no-print {
    display: none;
  }
}
</style>

<script setup>
import { ref } from 'vue'

const sections = ref([
  {
    title: 'Creating a Vue Gallery Component',
    steps: [
      {
        title: 'Component Setup',
        description: 'Converting our HTML gallery into a reusable Vue component',
        explanation: 'We\'ll transform our static HTML gallery into a dynamic Vue component that can be reused across different pages with different image sets.',
        code: `<!-- src/components/ImageGallery.vue -->
<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    validator: (images) => images.every(img => 
      img.src && img.alt && img.caption
    )
  },
  columns: {
    type: Number,
    default: 3
  }
})

const selectedImage = ref(null)
const isModalOpen = ref(false)
</script>`,
        tips: [
          'Use props validation for required image properties',
          'Make the component flexible with customizable options',
          'Prepare state for interactive features'
        ]
      },
      {
        title: 'Template Structure',
        type: 'technical',
        content: [
          {
            title: 'Basic Gallery Layout',
            description: 'Creating the responsive gallery grid',
            explanation: 'Building on our previous Tailwind classes, we\'ll create a dynamic template that adapts to the number of columns specified.',
            code: `<template>
  <div 
    class="grid gap-8"
    :class="{
      'grid-cols-1 sm:grid-cols-2': columns === 2,
      'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': columns === 3,
      'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4': columns === 4
    }"
  >
    <div 
      v-for="image in images" 
      :key="image.id"
      class="group relative overflow-hidden rounded-lg cursor-pointer"
      @click="openModal(image)"
    >
      <img 
        :src="image.src" 
        :alt="image.alt"
        class="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      >
      <div class="p-4">
        <p class="text-lg font-medium">{{ image.caption }}</p>
      </div>
    </div>
  </div>
</template>`
          }
        ],
        tips: [
          'Use dynamic class binding for responsive layouts',
          'Maintain accessibility with proper ARIA attributes',
          'Implement lazy loading for better performance'
        ]
      },
      {
        title: 'Interactive Features',
        type: 'technical',
        content: [
          {
            title: 'Modal Implementation',
            description: 'Adding a lightbox modal for image viewing',
            explanation: 'We\'ll add a modal component that opens when an image is clicked, allowing users to view images in full size.',
            code: `<!-- Modal Component -->
<template>
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="isModalOpen" 
        class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        @click="closeModal"
      >
        <div 
          class="max-w-4xl mx-auto p-4"
          @click.stop
        >
          <img 
            v-if="selectedImage"
            :src="selectedImage.src"
            :alt="selectedImage.alt"
            class="max-h-[80vh] w-auto mx-auto"
          >
          <p class="text-white text-center mt-4">
            {{ selectedImage?.caption }}
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const openModal = (image) => {
  selectedImage.value = image
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (e.key === 'Escape') closeModal()
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>`
          }
        ],
        tips: [
          'Use Teleport to render modal at root level',
          'Handle keyboard events for accessibility',
          'Manage body scroll when modal is open'
        ]
      },
      {
        title: 'Loading States',
        type: 'technical',
        content: [
          {
            title: 'Image Loading Handling',
            description: 'Adding loading states and error handling',
            explanation: 'Implement loading states and error handling for a better user experience.',
            code: `<script setup>
const loadingImages = ref(new Set())
const failedImages = ref(new Set())

const handleImageLoad = (imageId) => {
  loadingImages.value.delete(imageId)
}

const handleImageError = (imageId) => {
  loadingImages.value.delete(imageId)
  failedImages.value.add(imageId)
}
</script>

<template>
  <div v-for="image in images" :key="image.id">
    <div class="relative">
      <img 
        :src="image.src"
        @load="handleImageLoad(image.id)"
        @error="handleImageError(image.id)"
      >
      <!-- Loading Skeleton -->
      <div 
        v-if="loadingImages.has(image.id)"
        class="absolute inset-0 bg-gray-200 animate-pulse"
      />
      <!-- Error State -->
      <div 
        v-if="failedImages.has(image.id)"
        class="absolute inset-0 bg-red-50 flex items-center justify-center"
      >
        <p class="text-red-500">Failed to load image</p>
      </div>
    </div>
  </div>
</template>`
          }
        ],
        tips: [
          'Use loading skeletons for better UX',
          'Handle image loading errors gracefully',
          'Provide meaningful error messages'
        ]
      },
      {
        title: 'Component Usage',
        description: 'How to use the gallery component',
        explanation: 'Learn how to implement the gallery component in your pages.',
        code: `<!-- In your page component -->
<script setup>
import ImageGallery from '@/components/ImageGallery.vue'

const rottnestImages = [
  {
    id: 1,
    src: '/images/quokka.jpg',
    alt: 'Smiling quokka on Rottnest Island',
    caption: 'Friendly quokka at Rottnest'
  },
  // ... more images
]
</script>

<template>
  <ImageGallery 
    :images="rottnestImages"
    :columns="3"
  />
</template>`,
        tips: [
          'Prepare image data with required properties',
          'Customize columns based on your needs',
          'Consider lazy loading for large galleries'
        ]
      }
    ]
  },
  {
    title: 'Advanced Features',
    steps: [
      {
        title: 'Image Navigation',
        type: 'technical',
        content: [
          {
            title: 'Keyboard Navigation',
            description: 'Add keyboard controls for image navigation',
            explanation: 'Implement arrow key navigation in the modal view for better user experience.',
            code: `<script setup>
const currentIndex = computed(() => 
  props.images.findIndex(img => img.id === selectedImage.value?.id)
)

const navigateImages = (direction) => {
  if (!isModalOpen.value) return
  
  const newIndex = currentIndex.value + direction
  if (newIndex >= 0 && newIndex < props.images.length) {
    selectedImage.value = props.images[newIndex]
  }
}

const handleKeydown = (e) => {
  if (!isModalOpen.value) return
  
  switch(e.key) {
    case 'ArrowLeft':
      navigateImages(-1)
      break
    case 'ArrowRight':
      navigateImages(1)
      break
    case 'Escape':
      closeModal()
      break
  }
}

// Add navigation buttons to modal template
<template>
  <button 
    v-show="currentIndex > 0"
    @click="navigateImages(-1)"
    class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full"
    aria-label="Previous image"
  >
    <svg><!-- Previous arrow icon --></svg>
  </button>
  
  <button 
    v-show="currentIndex < images.length - 1"
    @click="navigateImages(1)"
    class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full"
    aria-label="Next image"
  >
    <svg><!-- Next arrow icon --></svg>
  </button>
</template>`
          }
        ],
        tips: [
          'Handle edge cases for first/last images',
          'Add visual feedback for navigation',
          'Maintain keyboard focus management'
        ]
      },
      {
        title: 'Image Filtering',
        type: 'technical',
        content: [
          {
            title: 'Category Filters',
            description: 'Add filtering capabilities to the gallery',
            explanation: 'Allow users to filter images by categories or tags.',
            code: `<script setup>
const props = defineProps({
  images: Array,
  categories: {
    type: Array,
    default: () => []
  }
})

const selectedCategory = ref('all')

const filteredImages = computed(() => {
  if (selectedCategory.value === 'all') return props.images
  return props.images.filter(img => 
    img.category === selectedCategory.value
  )
})
</script>

<template>
  <div class="mb-6">
    <div class="flex gap-2 flex-wrap">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        :class="[
          'px-4 py-2 rounded-full',
          selectedCategory === category
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        ]"
      >
        {{ category }}
      </button>
    </div>
  </div>
  
  <TransitionGroup
    name="gallery"
    tag="div"
    class="grid gap-8"
  >
    <div
      v-for="image in filteredImages"
      :key="image.id"
      class="gallery-item"
    >
      <!-- Image content -->
    </div>
  </TransitionGroup>
</template>

<style scoped>
.gallery-move {
  transition: transform 0.5s ease;
}

.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.5s ease;
}

.gallery-enter-from,
.gallery-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>`
          }
        ],
        tips: [
          'Add smooth transitions for filtering',
          'Maintain grid layout during transitions',
          'Consider mobile-friendly filter UI'
        ]
      }
    ]
  },
  {
    title: 'Additional Examples',
    steps: [
      {
        title: 'Masonry Layout',
        type: 'technical',
        content: [
          {
            title: 'Pinterest-style Layout',
            description: 'Implement a masonry grid layout',
            explanation: 'Create a dynamic masonry layout for images of varying heights.',
            code: `<script setup>
import { useElementSize } from '@vueuse/core'

const galleryRef = ref(null)
const { width } = useElementSize(galleryRef)

const columnWidth = 300
const columns = computed(() => 
  Math.max(1, Math.floor(width.value / columnWidth))
)

const distributeItems = computed(() => {
  const cols = Array.from({ length: columns.value }, () => [])
  
  filteredImages.value.forEach((image, index) => {
    const shortestCol = cols.reduce((min, col, i) => 
      col.reduce((sum, img) => sum + img.height, 0) <
      cols[min].reduce((sum, img) => sum + img.height, 0)
        ? i : min
    , 0)
    
    cols[shortestCol].push(image)
  })
  
  return cols
})
</script>

<template>
  <div 
    ref="galleryRef"
    class="w-full"
  >
    <div class="flex gap-4">
      <div 
        v-for="column in distributeItems"
        :key="column[0]?.id"
        class="flex-1 space-y-4"
      >
        <div
          v-for="image in column"
          :key="image.id"
          class="w-full"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-auto"
          >
        </div>
      </div>
    </div>
  </div>
</template>`
          }
        ],
        tips: [
          'Calculate columns based on container width',
          'Handle image loading for accurate heights',
          'Consider using intersection observer for infinite scroll'
        ]
      }
    ]
  },
  {
    title: 'Testing',
    steps: [
      {
        title: 'Unit Tests',
        type: 'technical',
        content: [
          {
            title: 'Component Testing',
            description: 'Testing the gallery component with Vitest',
            explanation: 'Write comprehensive tests for the gallery component functionality.',
            code: `// src/__tests__/ImageGallery.spec.js
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import ImageGallery from '../components/ImageGallery.vue'

describe('ImageGallery', () => {
  const mockImages = [
    {
      id: 1,
      src: '/test.jpg',
      alt: 'Test image',
      caption: 'Test caption'
    }
  ]

  it('renders all images', () => {
    const wrapper = mount(ImageGallery, {
      props: { images: mockImages }
    })
    expect(wrapper.findAll('img').length).toBe(mockImages.length)
  })

  it('opens modal on image click', async () => {
    const wrapper = mount(ImageGallery, {
      props: { images: mockImages }
    })
    await wrapper.find('img').trigger('click')
    expect(wrapper.vm.isModalOpen).toBe(true)
  })

  it('handles keyboard navigation', async () => {
    const wrapper = mount(ImageGallery, {
      props: { 
        images: [...mockImages, { id: 2, src: '/test2.jpg' }]
      }
    })
    
    await wrapper.find('img').trigger('click')
    await wrapper.trigger('keydown', { key: 'ArrowRight' })
    
    expect(wrapper.vm.currentIndex).toBe(1)
  })
})`,
            tips: [
              'Test all interactive features',
              'Mock image loading events',
              'Verify accessibility attributes'
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Performance Optimization',
    steps: [
      {
        title: 'Image Optimization',
        type: 'technical',
        content: [
          {
            title: 'Responsive Images',
            description: 'Optimize images for different screen sizes',
            explanation: 'Implement responsive image loading and optimization techniques.',
            code: `<template>
  <img
    :src="image.src"
    :srcset="generateSrcSet(image)"
    :sizes="'(max-width: 640px) 100vw,
             (max-width: 1024px) 50vw,
             33vw'"
    loading="lazy"
    decoding="async"
  >
</template>

<script setup>
const generateSrcSet = (image) => {
  return Object.entries(image.sizes)
    .map(([size, url]) => \`\${url} \${size}w\`)
    .join(', ')
}

// Use with Intersection Observer
const observeImages = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          observer.unobserve(img)
        }
      })
    },
    { rootMargin: '50px' }
  )

  document.querySelectorAll('img[data-src]')
    .forEach(img => observer.observe(img))
}

onMounted(() => {
  observeImages()
})
</script>`
          }
        ],
        tips: [
          'Use appropriate image formats (WebP with fallbacks)',
          'Implement progressive loading',
          'Optimize thumbnail generation'
        ]
      },
      {
        title: 'Virtual Scrolling',
        type: 'technical',
        content: [
          {
            title: 'Large Gallery Optimization',
            description: 'Implement virtual scrolling for large galleries',
            explanation: 'Optimize performance for galleries with many images using virtual scrolling.',
            code: `<script setup>
import { useVirtualList } from '@vueuse/core'

const containerRef = ref(null)
const wrapperRef = ref(null)

const { list, containerProps, wrapperProps } = useVirtualList(
  props.images,
  {
    itemHeight: 300,
    overscan: 5
  }
)
</script>

<template>
  <div v-bind="containerProps" ref="containerRef">
    <div v-bind="wrapperProps" ref="wrapperRef">
      <div
        v-for="{ data: image, index } in list"
        :key="image.id"
        :style="{ height: '300px' }"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover"
        >
      </div>
    </div>
  </div>
</template>`
          }
        ],
        tips: [
          'Calculate appropriate overscan values',
          'Handle dynamic image heights',
          'Consider mobile performance'
        ]
      }
    ]
  }
])
</script>

<!-- Rest of the template structure remains the same as photo-gallery.vue --> 