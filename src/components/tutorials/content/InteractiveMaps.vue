<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Creating Interactive Maps</h1>
    
    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">Setting Up</h2>
        <p class="mb-4">Install the required dependencies:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
npm install leaflet @types/leaflet</pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Map Data Structure</h2>
        <p class="mb-4">Create interfaces for our map data:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
// src/types/map.ts
export interface LatLng {
  lat: number
  lng: number
}

export interface POI {
  id: string
  name: string
  description: string
  coordinates: LatLng
  type: 'beach' | 'landmark' | 'activity'
  icon?: string
}

export const ROTTNEST_POIS: POI[] = [
  {
    id: 'basin',
    name: 'The Basin',
    description: 'Popular swimming and snorkeling spot',
    coordinates: { lat: -32.0066, lng: 115.5242 },
    type: 'beach'
  },
  {
    id: 'wadjemup',
    name: 'Wadjemup Lighthouse',
    description: 'Historic lighthouse with panoramic views',
    coordinates: { lat: -32.0151, lng: 115.5007 },
    type: 'landmark'
  },
  // Add more points of interest
]</pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Creating the Map Component</h2>
        <p class="mb-4">Build an interactive map component:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
// src/components/IslandMap.vue
&lt;script setup lang="ts"&gt;
import { ref, onMounted, watch } from 'vue'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import type { POI } from '../types/map'
import { ROTTNEST_POIS } from '../types/map'

const mapContainer = ref&lt;HTMLElement | null&gt;(null)
const map = ref&lt;L.Map | null&gt;(null)
const markers = ref&lt;{ [key: string]: L.Marker }&gt;({})
const selectedPOI = ref&lt;POI | null&gt;(null)
const filterType = ref&lt;string | null&gt;(null)

const filteredPOIs = computed(() => {
  if (!filterType.value) return ROTTNEST_POIS
  return ROTTNEST_POIS.filter(poi => poi.type === filterType.value)
})

function initializeMap() {
  if (!mapContainer.value) return

  // Create map instance
  map.value = L.map(mapContainer.value).setView(
    [-32.0066, 115.5242],
    14
  )

  // Add tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map.value)

  // Add markers for POIs
  ROTTNEST_POIS.forEach(addMarker)
}

function addMarker(poi: POI) {
  if (!map.value) return

  const marker = L.marker([
    poi.coordinates.lat,
    poi.coordinates.lng
  ]).addTo(map.value)

  marker.bindPopup(`
    &lt;div class="p-2"&gt;
      &lt;h3 class="font-bold"&gt;${poi.name}&lt;/h3&gt;
      &lt;p&gt;${poi.description}&lt;/p&gt;
    &lt;/div&gt;
  `)

  markers.value[poi.id] = marker

  marker.on('click', () => {
    selectedPOI.value = poi
  })
}

function selectPOI(poi: POI) {
  selectedPOI.value = poi
  const marker = markers.value[poi.id]
  
  if (marker && map.value) {
    map.value.setView(
      [poi.coordinates.lat, poi.coordinates.lng],
      15
    )
    marker.openPopup()
  }
}

// Watch for filter changes
watch(filterType, () => {
  Object.values(markers.value).forEach(marker => {
    if (map.value) marker.removeFrom(map.value)
  })
  
  filteredPOIs.value.forEach(poi => {
    if (markers.value[poi.id] && map.value) {
      markers.value[poi.id].addTo(map.value)
    }
  })
})

onMounted(initializeMap)
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="space-y-4"&gt;
    &lt;div class="flex gap-4 mb-4"&gt;
      &lt;button
        v-for="type in ['beach', 'landmark', 'activity']"
        :key="type"
        @click="filterType = filterType === type ? null : type"
        :class="[
          'px-4 py-2 rounded-lg',
          filterType === type
            ? 'bg-primary text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        ]"
      &gt;
        {{ type }}
      &lt;/button&gt;
    &lt;/div&gt;

    &lt;div class="grid md:grid-cols-3 gap-4"&gt;
      &lt;div class="md:col-span-2"&gt;
        &lt;div 
          ref="mapContainer" 
          class="h-[600px] rounded-lg shadow-md"
        &gt;&lt;/div&gt;
      &lt;/div&gt;

      &lt;div class="space-y-4"&gt;
        &lt;div 
          v-for="poi in filteredPOIs"
          :key="poi.id"
          @click="selectPOI(poi)"
          class="p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
          :class="{ 'ring-2 ring-primary': selectedPOI?.id === poi.id }"
        &gt;
          &lt;h3 class="font-bold"&gt;{{ poi.name }}&lt;/h3&gt;
          &lt;p class="text-sm text-gray-600"&gt;{{ poi.description }}&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;</pre>
      </section>

      <div class="next-steps bg-gray-50 p-4 rounded-lg mt-8">
        <h2 class="text-xl font-semibold mb-4">Congratulations!</h2>
        <p>You've completed all the tutorials! You now know how to:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Create interactive maps with Leaflet.js</li>
          <li>Manage complex state and user interactions</li>
          <li>Build reusable components</li>
          <li>Handle real-time data updates</li>
        </ul>
        <router-link 
          to="/tutorials"
          class="inline-flex items-center text-primary hover:text-primary-dark transition-colors mt-4">
          Return to Tutorials
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>