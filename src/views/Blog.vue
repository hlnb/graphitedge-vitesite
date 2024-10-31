<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Blog Posts</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Web Development Best Practices -->
      <article class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">
            <router-link 
              to="/blog/web-development-best-practices"
              class="hover:text-brand-red"
            >
              Web Development Best Practices for 2024
            </router-link>
          </h2>
          <p class="text-gray-600 mb-4">
            Essential best practices and standards for modern web development, drawing from 20+ years of industry experience.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">January 15, 2024</span>
            <div class="flex space-x-2">
              <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Best Practices</span>
              <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Development</span>
            </div>
          </div>
        </div>
      </article>

      <!-- Getting Started with Web Development -->
      <article class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">
            <router-link 
              to="/blog/getting-started-with-web-development"
              class="hover:text-brand-red"
            >
              Getting Started with Web Development
            </router-link>
          </h2>
          <p class="text-gray-600 mb-4">
            A comprehensive guide for beginners starting their journey in web development, with a clear learning path and practical advice.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">January 20, 2024</span>
            <div class="flex space-x-2">
              <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Beginners</span>
              <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Tutorial</span>
            </div>
          </div>
        </div>
      </article>

      <!-- Transitioning to Tech -->
      <article class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">
            <router-link 
              to="/blog/transitioning-to-tech"
              class="hover:text-brand-red"
            >
              Transitioning to Tech: A Guide for Career Changers
            </router-link>
          </h2>
          <p class="text-gray-600 mb-4">
            A practical guide for professionals making the transition into tech careers, based on real experience and success stories.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">January 25, 2024</span>
            <div class="flex space-x-2">
              <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Career</span>
              <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Guide</span>
            </div>
          </div>
        </div>
      </article>

      <!-- Why Vue.js for Beginners -->
      <article class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">
            <router-link 
              to="/blog/why-vuejs-for-beginners"
              class="hover:text-brand-red"
            >
              Why Vue.js is Perfect for Beginners in 2024
            </router-link>
          </h2>
          <p class="text-gray-600 mb-4">
            Discover why Vue.js stands out as the ideal framework for beginners, with its gentle learning curve and powerful features.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">July 15, 2024</span>
            <div class="flex space-x-2">
              <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Vue.js</span>
              <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Beginners</span>
            </div>
          </div>
        </div>
      </article>

      <!-- Building Responsive Websites -->
      <article class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">
            <router-link 
              to="/blog/building-responsive-websites"
              class="hover:text-brand-red"
            >
              Building Responsive Websites: Best Practices for 2024
            </router-link>
          </h2>
          <p class="text-gray-600 mb-4">
            Learn modern techniques and best practices for creating truly responsive websites that work seamlessly across all devices.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">October 10, 2024</span>
            <div class="flex space-x-2">
              <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">CSS</span>
              <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Responsive</span>
            </div>
          </div>
        </div>
      </article>
    </div>

    <!-- Newsletter Signup -->
    <div class="mt-16 bg-gray-50 rounded-lg p-8">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p class="text-gray-600 mb-6">
          Get the latest web development tips, tutorials, and best practices delivered to your inbox.
        </p>
        <form @submit.prevent="handleNewsletterSignup" class="flex gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            v-model="email"
            placeholder="Enter your email"
            class="flex-1 rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red"
            required
          >
          <button 
            type="submit"
            class="px-4 py-2 bg-brand-red text-white rounded-md hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const handleNewsletterSignup = () => {
  // Here you would typically handle the newsletter signup
  console.log('Newsletter signup:', email.value)
  alert('Thanks for subscribing! (Demo only)')
  email.value = ''
}
</script>

<style scoped>
.router-link-active {
  @apply text-brand-red;
}
</style>