---
title: Blog
description: Web development insights and tutorials
layout: page
sidebar: false
---

# Blog Posts

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    title: 'Getting Started with Web Development',
    date: '2024-03-15',
    excerpt: 'Learn the essential steps to begin your web development journey.',
    link: '/blog/getting-started-with-web-development',
    tags: ['beginners', 'web development']
  },
  {
    title: 'Why Vue.js for Beginners',
    date: '2024-03-10',
    excerpt: 'Discover why Vue.js is an excellent choice for beginning developers.',
    link: '/blog/why-vuejs-for-beginners',
    tags: ['vue', 'javascript']
  },
  {
    title: 'Building Responsive Websites',
    date: '2024-03-05',
    excerpt: 'Tips and techniques for creating responsive web designs.',
    link: '/blog/building-responsive-websites',
    tags: ['css', 'responsive design']
  },
  {
    title: 'Transitioning to Tech',
    date: '2024-02-28',
    excerpt: 'A guide for career changers moving into tech.',
    link: '/blog/transitioning-to-tech',
    tags: ['career', 'learning']
  }
])

const selectedTag = ref('')

const filteredPosts = computed(() => 
  selectedTag.value 
    ? posts.value.filter(post => post.tags.includes(selectedTag.value))
    : posts.value
)

const allTags = computed(() => 
  [...new Set(posts.value.flatMap(post => post.tags))]
)
</script>

<template>
  <div class="blog-container">
    <div class="tags-filter">
      <button 
        :class="{ active: selectedTag === '' }"
        @click="selectedTag = ''"
      >
        All
      </button>
      <button 
        v-for="tag in allTags"
        :class="{ active: selectedTag === tag }"
        @click="selectedTag = tag"
      >
        {{ tag }}
      </button>
    </div>

    <div class="blog-grid">
      <article v-for="post in filteredPosts" class="blog-card">
        <h2>
          <a :href="post.link">{{ post.title }}</a>
        </h2>
        <div class="post-meta">
          {{ new Date(post.date).toLocaleDateString() }}
        </div>
        <p>{{ post.excerpt }}</p>
        <div class="post-tags">
          <span v-for="tag in post.tags" class="tag">{{ tag }}</span>
        </div>
      </article>
    </div>

  </div>
</template>

<style scoped>
.blog-container {
  max-width: 1200px;
  margin: 0 auto;
}

.tags-filter {
  margin: 2rem 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tags-filter button {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid var(--vp-c-brand);
  background: transparent;
  cursor: pointer;
}

.tags-filter button.active {
  background: var(--vp-c-brand);
  color: white;
}

.blog-grid {
  display: grid;
  gap: 2rem;
}

.blog-card {
  padding: 1.5rem;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}

.post-meta {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.post-tags {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
}

.tag {
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  background-color: var(--vp-c-brand-soft);
  font-size: 0.8rem;
}
</style>
