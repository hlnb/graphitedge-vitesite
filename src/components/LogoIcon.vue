<template>
  <svg 
    viewBox="0 0 24 24" 
    class="h-8 w-8"
    :class="props.class"
  >
    <!-- Add your SVG path data here -->
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script> 