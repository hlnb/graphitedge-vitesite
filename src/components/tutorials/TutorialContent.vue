<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import HTML101 from './content/HTML101.vue'
import ImagesLinks from './content/ImagesLinks.vue'
import CSSBasics from './content/CSSBasics.vue'
import PhotoGallery from './content/PhotoGallery.vue'
import ContactForm from './content/ContactForm.vue'
import VueBasics from './content/VueBasics.vue'
import EleventyBasics from './content/EleventyBasics.vue'
import WeatherWidget from './content/WeatherWidget.vue'
import InteractiveMaps from './content/InteractiveMaps.vue'

const route = useRoute()
const currentTutorial = ref(route.params.id || 'html101')

const tutorials = {
  'html101': HTML101,
  'images-links': ImagesLinks,
  'css-basics': CSSBasics,
  'photo-gallery': PhotoGallery,
  'contact-form': ContactForm,
  'vue-basics': VueBasics,
  'eleventy-basics': EleventyBasics,
  'weather-widget': WeatherWidget,
  'interactive-maps': InteractiveMaps
}
</script>

<template>
  <div v-if="tutorials[currentTutorial]">
    <component :is="tutorials[currentTutorial]" />
  </div>
  <div v-else class="max-w-4xl mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4">Tutorial Not Found</h1>
    <p>Sorry, the requested tutorial could not be found.</p>
    <router-link 
      to="/tutorials"
      class="inline-flex items-center text-primary hover:text-primary-dark transition-colors mt-4">
      Return to Tutorials List
    </router-link>
  </div>
</template>