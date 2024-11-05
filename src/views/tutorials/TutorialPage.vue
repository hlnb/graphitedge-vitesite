<script setup lang="ts">
import TutorialLayout from '@/components/TutorialLayout.vue'
import TutorialContent from './TutorialContent.vue'
import { ref } from 'vue'
import type { Tutorial } from '@/types/tutorial'

// Load your tutorial data here
const currentTutorial = ref<Tutorial>({
  // Tutorial data
})
</script>

<template>
  <TutorialLayout :title="currentTutorial.title">
    <TutorialContent :tutorial="currentTutorial" />
  </TutorialLayout>
</template> 