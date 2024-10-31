<template>
  <article class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <div class="p-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">
        <router-link 
          :to="tutorial.path"
          class="hover:text-brand-red"
        >
          {{ tutorial.title }}
        </router-link>
      </h2>
      <p class="text-gray-600 mb-4">
        {{ tutorial.description }}
      </p>
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-500">{{ tutorial.level }}</span>
        <div class="flex space-x-2">
          <span 
            v-for="tag in tutorial.tags" 
            :key="tag"
            class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  tutorial: {
    path: string
    title: string
    description: string
    level: string
    tags: string[]
    order: number
    category: string
  }
}>()
</script> 