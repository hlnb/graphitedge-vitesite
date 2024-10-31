<script setup lang="ts">
const tutorials = [
  {
    name: 'Setting Up Weather API',
    content: 'First, get an API key from OpenWeatherMap and install axios:',
    code: 'npm install axios'
  },
  {
    name: 'Weather Interface',
    content: 'Create interfaces for the weather data:',
    code: `interface WeatherData {
  temp: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
}

interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
}`
  },
  {
    name: 'Creating the Weather Service',
    content: 'Create a service to handle weather API calls:',
    code: `// src/services/weather.ts
import axios from 'axios'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export async function getWeather(lat: number, lon: number): Promise<WeatherData> {
  const response = await axios.get(\`\${BASE_URL}/weather\`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: 'metric'
    }
  })

  const data = response.data
  return {
    temp: Math.round(data.main.temp),
    humidity: data.main.humidity,
    windSpeed: Math.round(data.wind.speed),
    description: data.weather[0].description,
    icon: data.weather[0].icon
  }
}`
  },
  {
    name: 'Weather Widget Component',
    content: 'Create a reusable weather widget component:',
    code: `<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getWeather } from '@/services/weather'
import type { WeatherData } from '@/types/weather'

const props = defineProps<{
  latitude: number
  longitude: number
  location: string
}>()

const weather = ref<WeatherData | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

async function loadWeather() {
  try {
    loading.value = true
    weather.value = await getWeather(props.latitude, props.longitude)
  } catch (e) {
    error.value = 'Failed to load weather data'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadWeather()
})
<\/script>

<template>
  <div class="weather-widget p-4 bg-white rounded-lg shadow">
    <h3 class="font-bold text-lg mb-2">{{ location }}</h3>
    
    <div v-if="loading" class="animate-pulse">
      Loading weather...
    </div>
    
    <div v-else-if="error" class="text-red-500">
      {{ error }}
    </div>
    
    <div v-else class="space-y-2">
      <div class="flex items-center">
        <img 
          :src="\`https://openweathermap.org/img/w/\${weather.icon}.png\`" 
          :alt="weather.description"
        >
        <span class="text-2xl ml-2">{{ weather.temp }}°C</span>
      </div>
      
      <div class="text-gray-600">
        <p>Humidity: {{ weather.humidity }}%</p>
        <p>Wind: {{ weather.windSpeed }} km/h</p>
        <p class="capitalize">{{ weather.description }}</p>
      </div>
    </div>
  </div>
</template>`
  },
  {
    name: 'Environment Variables',
    content: 'Set up your API key in the environment variables:',
    code: `# .env.local
VITE_WEATHER_API_KEY=your_api_key_here`
  }
];

const nextTutorial = {
  name: 'Interactive Maps',
  path: '/tutorials/interactive-maps'
} as const;
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Building a Weather Widget</h1>
    
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
        <p>Ready to learn more? Continue to the next tutorial:</p>
        <router-link 
          :to="nextTutorial.path"
          class="inline-flex items-center text-primary hover:text-primary-dark transition-colors mt-4"
        >
          Continue to "{{ nextTutorial.name }}"
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