<script setup>
import { useData } from 'vitepress'
import { data as posts } from './posts.data'
import { ref, computed } from 'vue'

const selectedTag = ref('')

const filteredPosts = computed(() => {
  if (!selectedTag.value) return posts
  return posts.filter(post => post.tags.includes(selectedTag.value))
})

const allTags = computed(() => {
  const tags = new Set()
  posts.forEach(post => {
    post.tags?.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
})
</script>

<template>
  <div class="blog-container">
    <h1>Blog</h1>
    <div class="blog-grid">
      <div v-for="post in filteredPosts" :key="post.url" class="blog-post">
        <h2><a :href="post.url">{{ post.title }}</a></h2>
        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template> 