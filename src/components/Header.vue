<script setup lang="ts">
import { ref } from 'vue'
import logoSvg from '@/assets/images/logo.svg'
import logoPng from '@/assets/images/logo.png' // Fallback

const logoLoaded = ref(false)

const handleLogoLoad = () => {
  logoLoaded.value = true
}
</script>

<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo Section -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center">
            <picture>
              <source :srcset="logoSvg" type="image/svg+xml">
              <img
                :src="logoPng"
                alt="GraphitEdge Logo"
                class="h-8 w-auto transition-opacity duration-300"
                :class="{ 'opacity-100': logoLoaded, 'opacity-0': !logoLoaded }"
                @load="handleLogoLoad"
              >
            </picture>
            <span class="ml-2 text-xl font-bold text-gray-900">GraphitEdge</span>
          </router-link>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex space-x-8">
          <router-link 
            v-for="item in navigationItems" 
            :key="item.path"
            :to="item.path"
            class="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            :class="{ 'text-primary': isCurrentRoute(item.path) }"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            <span class="sr-only">Open main menu</span>
            <font-awesome-icon
              :icon="mobileMenuOpen ? 'times' : 'bars'"
              class="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-white shadow-lg"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100"
            :class="{ 'text-primary bg-gray-100': isCurrentRoute(item.path) }"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Tutorials', path: '/tutorials' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' }
]

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const isCurrentRoute = (path: string) => {
  return route.path === path
}
</script>

<style scoped>
.router-link-active {
  @apply text-primary;
}

/* Optional: Add hover effect for logo */
.logo-hover {
  transition: transform 0.2s ease;
}

.logo-hover:hover {
  transform: scale(1.05);
}

/* Ensure SVG logo scales properly */
img[src$=".svg"] {
  width: 100%;
  height: 100%;
}

@media (prefers-reduced-motion: reduce) {
  .logo-hover {
    transition: none;
  }
}
</style> 