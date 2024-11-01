<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Logo from '../assets/logo.svg?component'

const route = useRoute()
const isMenuOpen = ref(false)

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Tutorials', path: '/tutorials' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
] as const

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="bg-brand-gray shadow-md">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-20">
        <!-- Logo and main nav -->
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="flex items-center">
              <Logo class="h-16 w-auto" />
              <span class="sr-only">GraphitEdge</span>
            </router-link>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:ml-8 md:flex md:space-x-4 md:items-center">
            <router-link
              v-for="item in navigation"
              :key="item.path"
              :to="item.path"
              class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="route.path === item.path 
                ? 'text-text-dark bg-brand-white/10' 
                : 'text-text-primary hover:text-text-dark hover:bg-brand-white/10'"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-text-primary hover:text-text-dark hover:bg-brand-white/10 focus:outline-none"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-show="isMenuOpen"
      class="md:hidden"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in navigation"
          :key="item.path"
          :to="item.path"
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors"
          :class="route.path === item.path 
            ? 'text-text-dark bg-brand-white/10' 
            : 'text-text-primary hover:text-text-dark hover:bg-brand-white/10'"
          @click="toggleMenu"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>