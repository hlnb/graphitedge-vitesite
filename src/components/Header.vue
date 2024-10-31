<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Tutorials', path: '/tutorials' },
  { name: 'Contact', path: '/contact' }
]
</script>

<template>
  <header class="bg-white shadow">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img 
              src="../assets/logo.svg" 
              alt="GraphitEdge Logo" 
              class="h-8 w-auto"
            />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link 
              v-for="item in navigationItems"
              :key="item.path"
              :to="item.path"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              active-class="border-b-2 border-brand-red"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <div class="flex items-center sm:hidden">
          <button 
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <span class="sr-only">Open main menu</span>
            <svg 
              v-if="!isOpen"
              class="block h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              v-else
              class="block h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div 
        v-show="isOpen" 
        class="sm:hidden"
      >
        <div class="pt-2 pb-3 space-y-1">
          <router-link 
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            active-class="bg-brand-red bg-opacity-10 text-brand-red"
            @click="isOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template> 