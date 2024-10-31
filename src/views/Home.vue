<script setup lang="ts">
import { ref, computed } from 'vue'
import tutorials from '../data/tutorials'

// Featured tutorials
const recommendedTutorials = computed(() => [
  {
    name: 'Development Setup',
    path: '/tutorials/content/setup-tools',
    description: 'Get your development environment ready with essential tools',
    level: 'Beginner',
    duration: '30 mins'
  },
  {
    name: 'HTML Basics',
    path: '/tutorials/content/html101',
    description: 'Learn the fundamentals of HTML structure and elements',
    level: 'Beginner',
    duration: '45 mins'
  },
  {
    name: 'CSS Basics',
    path: '/tutorials/content/css-basics',
    description: 'Style your web pages with CSS',
    level: 'Beginner',
    duration: '1 hour'
  }
])

// Latest blog posts
const latestPosts = ref([
  {
    title: 'Getting Started with Web Development in 2024',
    date: '2024-03-15',
    excerpt: 'A comprehensive guide to starting your web development journey...',
    path: '/blog/getting-started-with-web-development'
  },
  {
    title: 'Why Vue.js is Perfect for Beginners',
    date: '2024-03-10',
    excerpt: 'Exploring the benefits of Vue.js for new developers...',
    path: '/blog/vue-for-beginners'
  },
  {
    title: 'Building Responsive Websites: Best Practices',
    date: '2024-03-05',
    excerpt: 'Learn how to create websites that work on any device...',
    path: '/blog/responsive-design'
  }
])

// Key features
const keyFeatures = [
  {
    title: 'Project-Based Learning',
    description: 'Learn by building real projects like the Rotto Rocks website, weather widgets, and interactive maps.',
    icon: '🎯'
  },
  {
    title: 'Modern Tech Stack',
    description: 'Master current technologies like Vue.js, Eleventy, and Tailwind CSS that employers are looking for.',
    icon: '⚡'
  },
  {
    title: 'Step-by-Step Guidance',
    description: 'Clear, structured tutorials with practical exercises and code examples.',
    icon: '📝'
  },
  {
    title: 'Best Practices',
    description: 'Learn industry-standard practices for clean code, accessibility, and performance.',
    icon: '✨'
  }
]

// Learning path stages
const learningPath = [
  {
    stage: 'Foundation',
    skills: ['HTML', 'CSS', 'JavaScript basics'],
    outcome: 'Build static websites with clean, semantic code'
  },
  {
    stage: 'Interactive Features',
    skills: ['Forms', 'Galleries', 'User interactions'],
    outcome: 'Create engaging user experiences'
  },
  {
    stage: 'Advanced Development',
    skills: ['Vue.js', 'APIs', 'Static Site Generation'],
    outcome: 'Build modern web applications'
  }
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Hero Section -->
    <section class="text-center mb-16">
      <h1 class="text-5xl font-bold mb-6">Learn Web Development<br>The Right Way</h1>
      <p class="text-xl text-gray-600 mb-8">
        Master modern web technologies through practical, project-based tutorials
      </p>
      <router-link 
        to="/tutorials" 
        class="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
      >
        Start Learning
      </router-link>
    </section>

    <!-- Key Features -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8 text-center">Why Choose GraphitEdge?</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="feature in keyFeatures" 
          :key="feature.title"
          class="bg-white p-6 rounded-lg shadow-sm"
        >
          <div class="text-4xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Recommended Tutorials -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Recommended Tutorials</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <router-link
          v-for="tutorial in recommendedTutorials"
          :key="tutorial.path"
          :to="tutorial.path"
          class="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-semibold">{{ tutorial.name }}</h3>
            <span class="bg-primary-light text-primary px-2 py-1 rounded text-sm">
              {{ tutorial.level }}
            </span>
          </div>
          <p class="text-gray-600 mb-4">{{ tutorial.description }}</p>
          <div class="text-sm text-gray-500">
            Duration: {{ tutorial.duration }}
          </div>
        </router-link>
      </div>
    </section>

    <!-- Learning Path -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Your Learning Path</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div 
          v-for="path in learningPath" 
          :key="path.stage"
          class="bg-white p-6 rounded-lg shadow-sm"
        >
          <h3 class="text-xl font-semibold mb-4">{{ path.stage }}</h3>
          <ul class="list-disc list-inside mb-4 text-gray-600">
            <li v-for="skill in path.skills" :key="skill">{{ skill }}</li>
          </ul>
          <p class="text-primary font-medium">Outcome: {{ path.outcome }}</p>
        </div>
      </div>
    </section>

    <!-- Latest from the Blog -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Latest from the Blog</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <article 
          v-for="post in latestPosts" 
          :key="post.path"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
            <p class="text-gray-500 text-sm mb-4">
              {{ new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) }}
            </p>
            <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
            <router-link 
              :to="post.path"
              class="text-primary hover:text-primary-dark font-medium"
            >
              Read More →
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="text-center bg-primary text-white py-16 px-4 rounded-lg">
      <h2 class="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
      <p class="text-xl mb-8">Join our community of learners and build amazing web projects</p>
      <router-link 
        to="/tutorials/setup-tools" 
        class="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
      >
        Begin with Setup Guide
      </router-link>
    </section>

    <!-- Tutorial Section -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Latest Tutorials</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- HTML 101 -->
          <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                <router-link 
                  to="/tutorials/HTML101"
                  class="hover:text-brand-red"
                >
                  HTML 101: Getting Started
                </router-link>
              </h3>
              <p class="text-gray-600">Learn the fundamentals of HTML and start building your first web pages.</p>
            </div>
          </div>

          <!-- CSS Basics -->
          <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                <router-link 
                  to="/tutorials/CSSBasics"
                  class="hover:text-brand-red"
                >
                  CSS Basics
                </router-link>
              </h3>
              <p class="text-gray-600">Master the basics of CSS and start styling your web pages.</p>
            </div>
          </div>

          <!-- JavaScript Introduction -->
          <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                <router-link 
                  to="/tutorials/javascript-introduction"
                  class="hover:text-brand-red"
                >
                  Introduction to JavaScript
                </router-link>
              </h3>
              <p class="text-gray-600">Learn the fundamentals of JavaScript programming with hands-on examples.</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <router-link 
            to="/tutorials" 
            class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-red hover:bg-brand-red-dark"
          >
            View All Tutorials
          </router-link>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Latest Blog Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Building Responsive Websites -->
          <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                <router-link 
                  to="/blog/building-responsive-websites"
                  class="hover:text-brand-red"
                >
                  Building Responsive Websites: Best Practices for 2024
                </router-link>
              </h3>
              <p class="text-gray-600">Learn modern techniques and best practices for creating truly responsive websites.</p>
              <div class="mt-4 text-sm text-gray-500">October 10, 2024</div>
            </div>
          </div>

          <!-- Why Vue.js for Beginners -->
          <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                <router-link 
                  to="/blog/why-vuejs-for-beginners"
                  class="hover:text-brand-red"
                >
                  Why Vue.js is Perfect for Beginners in 2024
                </router-link>
              </h3>
              <p class="text-gray-600">Discover why Vue.js stands out as the ideal framework for beginners.</p>
              <div class="mt-4 text-sm text-gray-500">July 15, 2024</div>
            </div>
          </div>

          <!-- Getting Started with Web Development -->
          <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                <router-link 
                  to="/blog/getting-started-with-web-development"
                  class="hover:text-brand-red"
                >
                  Getting Started with Web Development
                </router-link>
              </h3>
              <p class="text-gray-600">A comprehensive guide for beginners starting their journey in web development.</p>
              <div class="mt-4 text-sm text-gray-500">January 20, 2024</div>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <router-link 
            to="/blog" 
            class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-red hover:bg-brand-red-dark"
          >
            View All Posts
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.text-primary {
  @apply text-blue-600;
}

.text-primary-dark {
  @apply text-blue-700;
}

.bg-primary {
  @apply bg-blue-600;
}

.bg-primary-light {
  @apply bg-blue-100;
}

.hover\:bg-primary-dark:hover {
  @apply bg-blue-700;
}
</style>
