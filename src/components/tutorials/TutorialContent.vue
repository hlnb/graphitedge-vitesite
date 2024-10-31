<script setup lang="ts">
import { computed } from 'vue'
import HTML101 from './content/HTML101.vue'
import ImagesLinks from './content/ImagesLinks.vue'
import CSSBasics from './content/CSSBasics.vue'
import PhotoGallery from './content/PhotoGallery.vue'
import ContactForm from './content/ContactForm.vue'
import VueBasics from './content/VueBasics.vue'
import EleventyBasics from './content/EleventyBasics.vue'
import WeatherWidget from './content/WeatherWidget.vue'
import InteractiveMaps from './content/InteractiveMaps.vue'

const tutorialComponents = {
  'html101': HTML101,
  'images-links': ImagesLinks,
  'css-basics': CSSBasics,
  'photo-gallery': PhotoGallery,
  'contact-form': ContactForm,
  'vue-basics': VueBasics,
  'eleventy-basics': EleventyBasics,
  'weather-widget': WeatherWidget,
  'interactive-maps': InteractiveMaps
} as const;

const props = defineProps<{
  tutorialId: string
}>();

const currentTutorial = computed(() => 
  tutorialComponents[props.tutorialId as keyof typeof tutorialComponents]
);
</script>

<template>
  <component 
    v-if="currentTutorial" 
    :is="currentTutorial" 
  />
  <div v-else class="error">
    Tutorial not found
  </div>
</template>