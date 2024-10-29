<template>
  <div class="space-y-8">
    <section class="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
      <h1 class="text-4xl font-bold mb-4">Welcome to GraphitEdge</h1>
      <p class="text-xl">Mastering Web Technologies Through Practical Tutorials</p>
    </section>

    <section class="grid md:grid-cols-2 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">Latest Tutorials</h2>
        <ul class="space-y-2">
          <li>
            <router-link to="/tutorials/html101" class="text-blue-600 hover:underline">Getting Started with HTML - Build Rotto Rocks</router-link>
          </li>
          <li>
            <router-link to="/tutorials/images-links" class="text-blue-600 hover:underline">Adding Images and Links to Your Website</router-link>
          </li>
          <li>
            <router-link to="/tutorials/css-basics" class="text-blue-600 hover:underline">Styling with CSS Basics</router-link>
          </li>
          <li>
            <router-link to="/tutorials/photo-gallery" class="text-blue-600 hover:underline">Creating a Responsive Photo Gallery</router-link>
          </li>
        </ul>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">Recent Blog Posts</h2>
        <ul class="space-y-2">
          <li>
            <router-link to="/blog" class="text-blue-600 hover:underline">Understanding Modern Web Architecture</router-link>
          </li>
          <li>
            <router-link to="/blog" class="text-blue-600 hover:underline">TypeScript Best Practices in 2024</router-link>
          </li>
          <li>
            <router-link to="/blog" class="text-blue-600 hover:underline">Vue 3 Performance Optimization Tips</router-link>
          </li>
          <li>
            <router-link to="/blog" class="text-blue-600 hover:underline">Building Secure Web Applications</router-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// No additional script needed as we're using static links
</script>