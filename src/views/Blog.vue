<script setup lang="ts">
import { ref, computed } from 'vue'
import { marked } from 'marked'

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  content: string;
}

// Sample blog posts with proper typing
const posts = ref<BlogPost[]>([
  {
    id: '1',
    title: 'Getting Started with Vue 3',
    author: 'Elizabeth Burgess',
    date: '2024-03-15',
    category: 'Vue',
    content: `
# Getting Started with Vue 3

Vue 3 brings exciting new features and improvements to the framework...

## Composition API

The Composition API is one of the most significant additions...
    `
  },
  // Add more posts as needed
]);

const categories = computed(() => {
  const uniqueCategories = new Set(posts.value.map(post => post.category))
  return Array.from(uniqueCategories)
});

const selectedCategory = ref<string | null>(null);

const filteredPosts = computed(() => {
  if (!selectedCategory.value) return posts.value
  return posts.value.filter(post => post.category === selectedCategory.value)
});

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function renderMarkdown(content: string): string {
  return marked(content)
}

function truncateContent(post: BlogPost): string {
  const plainText = post.content.replace(/[#*`]/g, '').trim()
  const words = plainText.split(' ')
  if (words.length > 30) {
    return words.slice(0, 30).join(' ') + '...'
  }
  return plainText
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Blog</h1>

    <!-- Category Filter -->
    <div class="mb-8 flex gap-2">
      <button
        @click="selectedCategory = null"
        :class="[
          'px-4 py-2 rounded-lg',
          !selectedCategory
            ? 'bg-primary text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        ]"
      >
        All
      </button>
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        :class="[
          'px-4 py-2 rounded-lg',
          selectedCategory === category
            ? 'bg-primary text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        ]"
      >
        {{ category }}
      </button>
    </div>

    <!-- Blog Posts -->
    <div class="space-y-8">
      <article
        v-for="post in filteredPosts"
        :key="post.id"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <span class="inline-block px-3 py-1 text-sm bg-gray-100 rounded-full">
              {{ post.category }}
            </span>
            <time class="text-sm text-gray-500">{{ formatDate(post.date) }}</time>
          </div>
          
          <router-link :to="`/blog/${post.id}`">
            <h2 class="text-2xl font-bold mb-2 hover:text-primary">{{ post.title }}</h2>
          </router-link>
          <p class="text-sm text-gray-500 mb-4">By {{ post.author }}</p>
          
          <div 
            class="prose prose-sm max-w-none mb-4"
            v-html="truncateContent(post)"
          ></div>
          
          <router-link
            :to="`/blog/${post.id}`"
            class="inline-flex items-center text-primary hover:text-primary-dark"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </router-link>
        </div>
      </article>
    </div>

    <!-- No Posts Message -->
    <div 
      v-if="filteredPosts.length === 0" 
      class="text-center py-8 text-gray-500"
    >
      No posts found in this category.
    </div>
  </div>
</template>

<style>
.prose h1 {
  @apply text-3xl font-bold mb-4;
}

.prose h2 {
  @apply text-2xl font-bold mb-3 mt-6;
}

.prose p {
  @apply mb-4;
}

.prose code {
  @apply bg-gray-100 px-1 rounded;
}

/* For dynamic content */
.prose :deep(h1) {
  @apply text-3xl font-bold mb-4;
}

.prose :deep(h2) {
  @apply text-2xl font-bold mb-3 mt-6;
}

.prose :deep(p) {
  @apply mb-4;
}

.prose :deep(code) {
  @apply bg-gray-100 px-1 rounded;
}
</style>