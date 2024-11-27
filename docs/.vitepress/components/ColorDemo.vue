<script setup>
import { ref } from 'vue'

const color = ref('#3eaf7c')
const textColor = ref('#ffffff')
</script>

<template>
  <div class="demo-container">
    <div class="color-box" :style="{ backgroundColor: color, color: textColor }">
      Sample Text
    </div>
    <div class="controls">
      <label>Background: <input type="color" v-model="color"></label>
      <label>Text: <input type="color" v-model="textColor"></label>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.color-box {
  padding: 2rem;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 1rem;
}
.controls {
  display: flex;
  gap: 1rem;
}
</style> 