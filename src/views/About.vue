<script setup lang="ts">
import { ref } from 'vue'
import helenImage from '../assets/images/helen-b.jpg'

const imageLoaded = ref(false)

const handleImageLoad = () => {
  imageLoaded.value = true
}

const experience = [
  {
    title: 'Web Development',
    years: '20+ years',
    description: 'Expert in modern web technologies, from vanilla JavaScript to Vue.js, React, and static site generators. Specializing in creating robust, scalable web applications and teaching best practices.'
  },
  {
    title: 'Teaching & Training',
    years: '15+ years',
    description: 'Extensive experience in TAFE (Technical and Further Education) and private sector training. Developed and delivered comprehensive web development curricula for students at all levels.'
  },
  {
    title: 'Military Service',
    years: '16 years',
    description: 'Distinguished veteran of the Royal Australian Air Force, specializing in communications and information systems. Applied military precision and systematic approach to technical training and problem-solving.'
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
    quote: "Helen's military background brings a unique structured approach to teaching web development. Her step-by-step methodology made learning complex concepts manageable and practical.",
    author: "Sarah M.",
    role: "Former TAFE Student"
  },
  {
    quote: "The combination of real-world projects and Helen's extensive industry experience made GraphitEdge's tutorials stand out. I went from complete beginner to employed developer in 8 months.",
    author: "James P.",
    role: "Junior Developer"
  },
  {
    quote: "Helen's technical expertise and patient teaching style created the perfect learning environment. Her ability to break down complex concepts is unmatched.",
    author: "Michael R.",
    role: "Career Transition Student"
  }
]
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-6xl mx-auto">
      <!-- Page Header -->
      <h1 class="text-4xl font-bold mb-6 text-brand-red-light">About GraphitEdge</h1>

      <!-- Meet Helen B Section -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-brand-red">Meet Helen B</h2>
        
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <!-- Left column: Image -->
          <div class="flex justify-center">
            <img 
              src="/helen-b.jpg"
              alt="Helen Burgess"
              class="rounded-lg shadow-lg w-full max-w-md h-auto"
            />
          </div>

          <!-- Right column: Text content -->
          <div class="space-y-6">
            <div class="prose prose-lg max-w-none">
              <p class="text-text-primary">
                With over two decades of web development experience and 16 years of service in the Royal Australian Air Force, 
                Helen brings a unique combination of technical expertise and structured teaching methodology to the world of web development education.
              </p>
              
              <p class="text-text-primary">
                As a veteran communications and information systems specialist, Helen developed a systematic approach to 
                problem-solving and training that she now applies to teaching web technologies. Her military background, 
                combined with 15+ years of teaching experience in TAFE and private sectors, enables her to break down complex 
                technical concepts into manageable, practical learning modules.
              </p>

              <p class="text-text-primary">
                Through GraphitEdge, Helen offers a comprehensive learning experience that combines real-world projects, 
                industry best practices, and a structured curriculum designed to take you from beginner to professional 
                developer. Her teaching methodology emphasizes practical application, ensuring students not only understand 
                the theory but can confidently apply their skills in real-world scenarios.
              </p>
            </div>

            <!-- Update the expertise section -->
            <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-red mt-8">
              <h3 class="text-xl font-bold mb-4 text-brand-red-dark">Why Choose GraphitEdge?</h3>
              <ul class="space-y-2 text-text-primary">
                <li>✓ Military-grade structured learning approach</li>
                <li>✓ 20+ years of industry experience</li>
                <li>✓ Hands-on, project-based learning</li>
                <li>✓ Professional technical writing expertise</li>
                <li>✓ TAFE and private sector teaching experience</li>
                <li>✓ Focus on practical, job-ready skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Additional sections can go here -->
    </div>
  </div>
</template>

<style scoped>
.prose {
  max-width: none;
}

img {
  max-height: 600px;
  object-fit: cover;
}

/* Ensure text doesn't get too stretched on larger screens */
.prose p {
  max-width: 65ch;
}

/* Add some breathing room between paragraphs */
.prose p + p {
  margin-top: 1.5em;
}
</style>
