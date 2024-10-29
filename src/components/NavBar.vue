<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="bg-gray-800 text-white">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <router-link to="/" class="text-xl font-bold">GraphitEdge</router-link>
        
        <div class="hidden md:flex space-x-4">
          <router-link to="/" class="hover:text-gray-300">Home</router-link>
          <router-link to="/tutorials" class="hover:text-gray-300">Tutorials</router-link>
          <router-link to="/blog" class="hover:text-gray-300">Blog</router-link>
          <router-link to="/contact" class="hover:text-gray-300">Contact</router-link>
        </div>

        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
          <span class="sr-only">Menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link to="/" class="block px-3 py-2 hover:bg-gray-700 rounded">Home</router-link>
        <router-link to="/tutorials" class="block px-3 py-2 hover:bg-gray-700 rounded">Tutorials</router-link>
        <router-link to="/blog" class="block px-3 py-2 hover:bg-gray-700 rounded">Blog</router-link>
        <router-link to="/contact" class="block px-3 py-2 hover:bg-gray-700 rounded">Contact</router-link>
      </div>
    </div>
  </nav>
</template>