<script setup lang="ts">
import type { Tutorial } from '@/data/tutorials'

interface Category {
  name: string;
  items: Tutorial[];
}

import tutorialData from '@/data/tutorials'
const tutorials: Category[] = [{
  name: 'All Tutorials',
  items: tutorialData
}]
</script>

<template>
  <div class="space-y-12">
    <section v-for="category in tutorials" :key="category.name">
      <h2 class="text-2xl font-bold mb-6">{{ category.name }}</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link
          v-for="tutorial in category.items"
          :key="tutorial.path"
          :to="tutorial.path"
          class="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
        >
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ tutorial.name }}</h3>
            <p class="text-gray-600">{{ tutorial.description }}</p>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>