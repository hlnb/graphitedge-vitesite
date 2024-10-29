<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Building a Weather Widget</h1>
    
    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">Project Setup</h2>
        <p class="mb-4">First, let's install the required dependencies:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">npm install axios date-fns</pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Creating the Weather Service</h2>
        <p class="mb-4">Create a service to handle API calls:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">// src/services/weatherService.ts
import axios from 'axios'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export interface WeatherData {
  temp: number
  humidity: number
  windSpeed: number
  description: string
  icon: string
}

export async function getWeather(lat: number, lon: number): Promise&lt;WeatherData&gt; {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    )
    
    return {
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon
    }
  } catch (error) {
    throw new Error('Failed to fetch weather data')
  }
}</pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Building the Widget Component</h2>
        <p class="mb-4">Create a reusable weather widget component:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">&lt;script setup lang="ts"&gt;
import { ref, onMounted } from 'vue'
import { format } from 'date-fns'
import { getWeather, type WeatherData } from '../services/weatherService'

const weather = ref&lt;WeatherData | null&gt;(null)
const loading = ref(true)
const error = ref('')
const lastUpdated = ref(new Date())

const ROTTNEST_COORDS = {
  lat: -32.0066,
  lon: 115.5242
}

async function fetchWeather() {
  try {
    loading.value = true
    weather.value = await getWeather(
      ROTTNEST_COORDS.lat, 
      ROTTNEST_COORDS.lon
    )
    lastUpdated.value = new Date()
  } catch (e) {
    error.value = 'Unable to load weather data'
  } finally {
    loading.value = false
  }
}

onMounted(fetchWeather)
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="weather-widget bg-white rounded-lg shadow-md p-6"&gt;
    &lt;div v-if="loading" class="flex justify-center items-center h-32"&gt;
      &lt;div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"&gt;&lt;/div&gt;
    &lt;/div&gt;

    &lt;div v-else-if="error" class="text-red-500 text-center p-4"&gt;
      {{ error }}
    &lt;/div&gt;

    &lt;div v-else class="space-y-4"&gt;
      &lt;div class="flex items-center justify-between"&gt;
        &lt;h3 class="text-xl font-semibold"&gt;Rottnest Weather&lt;/h3&gt;
        &lt;span class="text-sm text-gray-500"&gt;
          Updated {{ format(lastUpdated, 'HH:mm') }}
        &lt;/span&gt;
      &lt;/div&gt;

      &lt;div class="flex items-center gap-4"&gt;
        &lt;img 
          :src="'http://openweathermap.org/img/w/' + weather.icon + '.png'"
          :alt="weather.description"
          class="w-16 h-16"
        /&gt;
        &lt;div&gt;
          &lt;div class="text-3xl font-bold"&gt;{{ weather.temp }}°C&lt;/div&gt;
          &lt;div class="text-gray-600 capitalize"&gt;{{ weather.description }}&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div class="grid grid-cols-2 gap-4 text-sm"&gt;
        &lt;div&gt;
          &lt;span class="text-gray-500"&gt;Humidity:&lt;/span&gt;
          &lt;span class="ml-2"&gt;{{ weather.humidity }}%&lt;/span&gt;
        &lt;/div&gt;
        &lt;div&gt;
          &lt;span class="text-gray-500"&gt;Wind:&lt;/span&gt;
          &lt;span class="ml-2"&gt;{{ weather.windSpeed }} m/s&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;button 
        @click="fetchWeather"
        class="w-full mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"&gt;
        Refresh
      &lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;</pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Error Handling and Loading States</h2>
        <p class="mb-4">Add comprehensive error handling:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">// src/composables/useWeather.ts
import { ref, onMounted, onUnmounted } from 'vue'
import { getWeather, type WeatherData } from '../services/weatherService'

export function useWeather(lat: number, lon: number) {
  const weather = ref&lt;WeatherData | null&gt;(null)
  const loading = ref(true)
  const error = ref('')
  const lastUpdated = ref(new Date())
  
  let refreshInterval: number

  async function fetchWeather() {
    try {
      loading.value = true
      error.value = ''
      weather.value = await getWeather(lat, lon)
      lastUpdated.value = new Date()
    } catch (e) {
      error.value = 'Unable to load weather data'
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchWeather()
    // Refresh every 30 minutes
    refreshInterval = setInterval(fetchWeather, 30 * 60 * 1000)
  })

  onUnmounted(() => {
    clearInterval(refreshInterval)
  })

  return {
    weather,
    loading,
    error,
    lastUpdated,
    refresh: fetchWeather
  }
}</pre>
      </section>

      <div class="next-steps bg-gray-50 p-4 rounded-lg mt-8">
        <h2 class="text-xl font-semibold mb-4">Next Steps</h2>
        <p>Ready to add more interactivity to your site? Let's learn about:</p>
        <router-link 
          to="/tutorials/interactive-maps"
          class="inline-flex items-center text-primary hover:text-primary-dark transition-colors mt-4">
          Continue to "Interactive Maps"
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>