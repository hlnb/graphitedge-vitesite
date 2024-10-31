<script setup lang="ts">
const tutorials = [
  {
    name: 'Setting Up Leaflet',
    content: 'First, install the required dependencies for working with maps:',
    code: 'npm install leaflet @types/leaflet'
  },
  {
    name: 'Map Data Structure',
    content: 'Create interfaces for your map data:',
    code: `interface LatLng {
  lat: number;
  lng: number;
}

interface POI {
  id: string;
  name: string;
  description: string;
  coordinates: LatLng;
  type: 'beach' | 'landmark' | 'activity';
}

export const ROTTNEST_POIS: POI[] = [
  {
    id: 'basin',
    name: 'The Basin',
    description: 'Popular swimming and snorkeling spot',
    coordinates: { lat: -32.0066, lng: 115.5242 },
    type: 'beach'
  }
]`
  },
  {
    name: 'Initializing the Map',
    content: 'Set up your map component with Leaflet:',
    code: `import { ref, onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const mapContainer = ref<HTMLElement | null>(null)
const map = ref<L.Map | null>(null)

onMounted(() => {
  if (!mapContainer.value) return

  map.value = L.map(mapContainer.value).setView(
    [-32.0066, 115.5242],
    14
  )

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map.value)
})`
  },
  {
    name: 'Adding Markers',
    content: 'Add interactive markers to your map:',
    code: `const markers = ref<{ [key: string]: L.Marker }>({})

function addMarker(poi: POI) {
  if (!map.value) return

  const marker = L.marker([
    poi.coordinates.lat,
    poi.coordinates.lng
  ]).addTo(map.value)

  marker.bindPopup(\`
    <div class="p-2">
      <h3 class="font-bold">\${poi.name}</h3>
      <p>\${poi.description}</p>
    </div>
  \`)

  markers.value[poi.id] = marker
}

// Add all POIs to the map
ROTTNEST_POIS.forEach(addMarker)`
  },
  {
    name: 'Adding Filters',
    content: 'Implement filtering functionality for different types of locations:',
    code: `const filterType = ref<'beach' | 'landmark' | 'activity' | null>(null)

const filteredPOIs = computed(() => {
  if (!filterType.value) return ROTTNEST_POIS
  return ROTTNEST_POIS.filter(poi => poi.type === filterType.value)
})

function updateMarkers() {
  // Hide all markers
  Object.values(markers.value).forEach(marker => {
    marker.remove()
  })

  // Show only filtered markers
  filteredPOIs.value.forEach(poi => {
    markers.value[poi.id].addTo(map.value!)
  })
}`
  }
];

const nextTutorial = {
  name: 'Back to Tutorials',
  path: '/tutorials'
} as const;
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Creating Interactive Maps</h1>
    
    <div class="space-y-8">
      <section v-for="tutorial in tutorials" :key="tutorial.name">
        <h2 class="text-2xl font-semibold mb-4">{{ tutorial.name }}</h2>
        <p class="mb-4">{{ tutorial.content }}</p>
        
        <div class="bg-gray-50 p-4 rounded-lg mb-4">
          <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code>{{ tutorial.code }}</code></pre>
        </div>
      </section>

      <div class="next-steps bg-gray-50 p-4 rounded-lg mt-8">
        <h2 class="text-xl font-semibold mb-4">Next Steps</h2>
        <p>You've completed all the tutorials! Return to the tutorials page to explore more topics:</p>
        <router-link 
          :to="nextTutorial.path"
          class="inline-flex items-center text-primary hover:text-primary-dark transition-colors mt-4"
        >
          {{ nextTutorial.name }}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>