---
layout: page
---

<script setup>
import { data as posts } from '../.vitepress/theme/blog.data'
import { useData } from 'vitepress'
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
    <div class="tags-filter" v-if="allTags.length">
      <button 
        :class="{ active: !selectedTag }"
        @click="selectedTag = ''"
      >
        All
      </button>
      <button
        v-for="tag in allTags"
        :key="tag"
        :class="{ active: selectedTag === tag }"
        @click="selectedTag = tag"
      >
        {{ tag }}
      </button>
    </div>

    <div class="blog-grid">
      <div v-for="post in filteredPosts" :key="post?.url" class="blog-post">
        <h2 v-if="post?.title">
          <a :href="post.url">{{ post.title }}</a>
        </h2>
        <div class="post-meta" v-if="post?.date">
          {{ new Date(post.date).toLocaleDateString() }}
        </div>
        <p v-if="post?.excerpt" class="excerpt">{{ post.excerpt }}</p>
        <div class="tags" v-if="post?.tags?.length">
          <span v-for="tag in post.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.tags-filter {
  margin-bottom: 2rem;
}

.tags-filter button {
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
}

.tags-filter button.active {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}

.blog-grid {
  display: grid;
  gap: 2rem;
}

.blog-post {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.post-meta {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.tags {
  margin-top: 1rem;
}

.tag {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  margin-right: 0.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  font-size: 0.9rem;
}

.excerpt {
  margin: 1rem 0;
  color: var(--vp-c-text-2);
}
</style>
