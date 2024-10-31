<script setup>
import { ref, onMounted } from 'vue'
import { formatDate } from '../utils/formatters'

const posts = ref([])
const featuredPosts = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    // Import all markdown files
    const modules = import.meta.glob('../blog/*.md', { eager: true })
    
    // Transform the modules into post objects
    const allPosts = Object.entries(modules).map(([path, module]) => {
      const slug = path.split('/').pop().replace('.md', '')
      return {
        slug,
        ...module.frontmatter
      }
    })

    // Sort posts by date (most recent first)
    const sortedPosts = allPosts.sort((a, b) => 
      new Date(b.date) - new Date(a.date)
    )

    // Separate featured posts
    featuredPosts.value = sortedPosts.filter(post => post.featured)
    posts.value = sortedPosts
  } catch (error) {
    console.error('Error loading blog posts:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Featured Posts Section -->
    <section v-if="featuredPosts.length" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Featured Posts</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article 
          v-for="post in featuredPosts" 
          :key="post.slug"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <router-link :to="`/blog/${post.slug}`">
            <img 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ post.title }}</h3>
              <p class="text-gray-600 mb-4">{{ post.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">{{ formatDate(post.date) }}</span>
                <div class="flex gap-2">
                  <span 
                    v-for="tag in post.tags" 
                    :key="tag"
                    class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </router-link>
        </article>
      </div>
    </section>

    <!-- All Posts Section -->
    <section>
      <h2 class="text-3xl font-bold text-gray-900 mb-6">All Posts</h2>
      <div v-if="loading" class="text-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
      </div>
      
      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article 
          v-for="post in posts" 
          :key="post.slug"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <router-link :to="`/blog/${post.slug}`">
            <img 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ post.title }}</h3>
              <p class="text-gray-600 mb-4">{{ post.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">{{ formatDate(post.date) }}</span>
                <div class="flex gap-2">
                  <span 
                    v-for="tag in post.tags" 
                    :key="tag"
                    class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </router-link>
        </article>
      </div>

      <div v-if="!loading && posts.length === 0" class="text-center py-12">
        <p class="text-gray-600">No blog posts found.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply text-brand-red;
}
</style>