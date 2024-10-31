<script setup lang="ts">
import { ref } from 'vue'
import helenImage from '@/assets/images/helen-b.jpg'

const imageLoaded = ref(false)

const handleImageLoad = () => {
  imageLoaded.value = true
}

const experience = [
  {
    title: 'Web Development',
    years: '20+ years',
    description: 'From early HTML to modern frameworks like Vue.js and static site generators'
  },
  {
    title: 'Teaching & Training',
    years: '15+ years',
    description: 'Helping students and professionals master web technologies through practical learning'
  },
  {
    title: 'Military Service',
    years: '16 years',
    description: 'Royal Australian Air Force veteran, specializing in communications and information systems'
  }
]

const teachingPhilosophy = [
  {
    title: 'Learn by Doing',
    icon: 'laptop-code',
    description: 'Real projects and hands-on exercises reinforce learning better than theory alone'
  },
  {
    title: 'Structured Progress',
    icon: 'layer-group',
    description: 'Step-by-step tutorials that build upon each other for comprehensive understanding'
  },
  {
    title: 'Practical Application',
    icon: 'lightbulb',
    description: 'Focus on real-world skills that you can immediately apply to your projects'
  },
  {
    title: 'Clear Communication',
    icon: 'chalkboard-teacher',
    description: 'Complex concepts explained in straightforward, accessible language'
  }
]

const testimonials = [
  {
    quote: "Helen's practical approach to teaching web development made complex concepts easy to understand. The hands-on projects were invaluable.",
    author: "Sarah M.",
    role: "Former Student"
  },
  {
    quote: "The structured learning path and real-world projects helped me transition into web development. GraphitEdge's tutorials were instrumental in my journey.",
    author: "James P.",
    role: "Junior Developer"
  }
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Hero Section -->
    <section class="mb-16">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-6">About GraphitEdge</h1>
        <p class="text-xl text-gray-600 mb-8">
          Empowering the next generation of web developers through practical, 
          hands-on learning experiences.
        </p>
      </div>
    </section>

    <!-- Founder Section -->
    <section class="mb-16 bg-white rounded-lg shadow-sm overflow-hidden">
      <div class="md:flex">
        <div 
          class="md:w-1/3 bg-gray-100 p-8 flex items-center justify-center"
          :class="{ 'opacity-0': !imageLoaded }"
        >
          <img 
            :src="helenImage"
            alt="Helen B, founder of GraphitEdge"
            class="w-48 h-48 rounded-full object-cover shadow-lg transition-all duration-300 ease-in-out"
            :class="{ 'scale-100 opacity-100': imageLoaded, 'scale-95 opacity-0': !imageLoaded }"
            loading="eager"
            @load="handleImageLoad"
          />
        </div>
        <div class="md:w-2/3 p-8">
          <h2 class="text-3xl font-bold mb-4">Meet Helen B</h2>
          <p class="text-gray-600 mb-6">
            With over two decades of experience in web technologies and teaching, Helen brings 
            a wealth of knowledge and practical expertise to GraphitEdge. As a Royal Australian 
            Air Force veteran, she understands the importance of structured learning and 
            hands-on training.
          </p>
          <p class="text-gray-600 mb-6">
            Her military background in technical training combined with extensive experience 
            in web development creates a unique approach to teaching that emphasizes practical 
            skills and real-world applications.
          </p>
          <div class="grid md:grid-cols-3 gap-6">
            <div 
              v-for="item in experience" 
              :key="item.title"
              class="border-l-4 border-primary pl-4"
            >
              <h3 class="font-semibold text-lg">{{ item.title }}</h3>
              <p class="text-primary font-medium">{{ item.years }}</p>
              <p class="text-sm text-gray-600">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Teaching Philosophy -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Our Teaching Philosophy</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="item in teachingPhilosophy" 
          :key="item.title"
          class="bg-white p-6 rounded-lg shadow-sm"
        >
          <div class="text-4xl mb-4 text-primary">
            <font-awesome-icon :icon="item.icon" />
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- Why GraphitEdge -->
    <section class="mb-16 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg p-8">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-6 text-center">Why GraphitEdge?</h2>
        <p class="text-lg mb-6">
          At GraphitEdge, we believe in learning by doing. Our tutorials are designed to give 
          you hands-on experience with real-world projects. This practical approach, combined 
          with structured learning paths, helps you build confidence and competence in web 
          development.
        </p>
        <p class="text-lg mb-6">
          Drawing from military training principles and years of teaching experience, our 
          tutorials focus on:
        </p>
        <ul class="list-disc list-inside space-y-2 mb-6">
          <li>Practical, hands-on exercises</li>
          <li>Clear, structured learning paths</li>
          <li>Real-world project examples</li>
          <li>Industry best practices</li>
          <li>Progressive skill building</li>
        </ul>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Student Success Stories</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.author"
          class="bg-white p-6 rounded-lg shadow-sm"
        >
          <p class="text-gray-600 mb-4 italic">
            "{{ testimonial.quote }}"
          </p>
          <div class="font-medium">
            <p class="text-primary">{{ testimonial.author }}</p>
            <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="text-center bg-white p-8 rounded-lg shadow-sm">
      <h2 class="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
      <p class="text-xl text-gray-600 mb-8">
        Join our community and start your web development journey today.
      </p>
      <router-link 
        to="/tutorials" 
        class="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors inline-block"
      >
        Explore Tutorials
      </router-link>
    </section>
  </div>
</template>

<style scoped>
.text-primary {
  @apply text-blue-600;
}

.bg-primary {
  @apply bg-blue-600;
}

.from-primary {
  @apply from-blue-600;
}

.to-primary-dark {
  @apply to-blue-700;
}

.hover\:bg-primary-dark:hover {
  @apply bg-blue-700;
}

.border-primary {
  @apply border-blue-600;
}

/* Optional: Add hover effect or other image styling */
img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}

.transition-all {
  transition: all 0.3s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .transition-all {
    transition: none;
  }
}
</style>
