<script setup lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { formatDate, formatContent } from '../utils/formatters'

const props = defineProps<{
  slug: string
}>()

const post = ref<any>(null)
const loading = ref(true)
// Add proper typing for your module
interface BlogModule {
  title: string;
  content: string;
  date: string;
  // Add other properties your module uses
}

// Use the type
const module = ref<BlogModule>({
  title: '',
  content: '',
  date: ''
})

onMounted(async () => {
  try {
    // Import all blog posts
    const modules = import.meta.glob('../blog/*.md', { eager: true })
    
    // Find the matching post
    const postModule = Object.entries(modules).find(([path]) => 
      path.includes(props.slug)
    )

    if (postModule) {
      const [, module] = postModule
      post.value = {
        ...module.frontmatter,
        content: module.html,
        readingTime: Math.ceil(module.html.split(' ').length / 200) // Rough estimate
      }
    }
  } catch (error) {
    console.error('Error loading blog post:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div v-if="loading" class="text-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
    </div>

    <article v-else-if="post" class="prose prose-lg max-w-none">
      <!-- Post Header -->
      <header class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ post.title }}</h1>
        <div class="flex items-center justify-between text-gray-600">
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          <div class="flex gap-2">
            <span 
              v-for="tag in post.tags" 
              :key="tag"
              class="px-2 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </header>

      <!-- Featured Image -->
      <img 
        v-if="post.image"
        :src="post.image" 
        :alt="post.title"
        class="w-full h-64 object-cover rounded-lg mb-8"
      />

      <!-- Post Content -->
      <div v-html="post.content" class="markdown-content"></div>

      <!-- Author Info -->
      <footer class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex items-center">
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-900">{{ post.author }}</p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time :datetime="post.date">{{ formatDate(post.date) }}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{{ post.readingTime }} min read</span>
            </div>
          </div>
        </div>
      </footer>
    </article>

    <div v-else class="text-center py-12">
      <p class="text-gray-600">Post not found.</p>
      <router-link 
        to="/blog" 
        class="mt-4 inline-block text-brand-red hover:text-brand-red-dark"
      >
        Back to Blog
      </router-link>
    </div>
  </div>
</template>



<style>
/* Add any custom markdown styling here */
.markdown-content {
  @apply prose prose-lg max-w-none;
}

.markdown-content pre {
  @apply bg-gray-800 text-white p-4 rounded-lg overflow-x-auto;
}

.markdown-content code {
  @apply text-sm;
}

.markdown-content img {
  @apply rounded-lg;
}
</style> 