<script setup>
defineProps({
  lang: {
    type: String,
    default: 'javascript'
  },
  code: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="code-block-wrapper">
    <pre><code :class="lang">{{ code }}</code></pre>
  </div>
</template>

<style scoped>
.code-block-wrapper {
  max-width: 100%;
  overflow-x: auto;
}

.code-block-wrapper pre {
  margin: 0;
  padding: 1rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.code-block-wrapper code {
  font-family: var(--vp-font-family-mono);
  font-size: 0.9em;
  line-height: 1.5;
}
</style> 