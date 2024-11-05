<script setup lang="ts">
interface TutorialLayoutProps {
  title: string
  showNavigation?: boolean
}

defineProps<TutorialLayoutProps>()
</script>

<template>
  <div class="tutorial-layout">
    <header class="tutorial-header">
      <h1>{{ title }}</h1>
      <nav v-if="showNavigation" class="tutorial-nav">
        <!-- Add navigation elements here -->
      </nav>
    </header>

    <main class="tutorial-main">
      <slot></slot>
    </main>

    <footer class="tutorial-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.tutorial-layout {
  @apply min-h-screen flex flex-col;
}

.tutorial-header {
  @apply bg-gray-50 border-b py-4;
}

.tutorial-main {
  @apply flex-1 container mx-auto py-8;
}

.tutorial-footer {
  @apply bg-gray-50 border-t py-4 mt-auto;
}
</style> 