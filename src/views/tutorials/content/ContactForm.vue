<script setup lang="ts">
import { ref } from 'vue'

const tutorial = {
  title: 'Enhancing the Rottnest Island Contact Form',
  navigation: {
    previous: {
      title: 'Building a Photo Gallery',
      description: 'Create an interactive photo gallery for Rottnest Island images',
      path: '/tutorials/photo-gallery'
    },
    current: {
      title: 'Contact Form Enhancement',
      description: 'Extend the basic contact form with Rottnest Island specific features'
    },
    next: {
      title: 'Styling with Tailwind CSS',
      description: 'Learn how to use Tailwind CSS to create a consistent design system',
      path: '/tutorials/tailwind-styling'
    }
  },
  introduction: {
    previousExercise: {
      title: 'Basic Contact Form Implementation',
      requirements: [
        'Name field (required)',
        'Email field (required, with validation)',
        'Subject dropdown (Booking, Fan Mail, Press Inquiry, Other)',
        'Message textarea (required)',
        'Preferred contact method (Email/Phone radio buttons)',
        'Conditional phone number field',
        'Newsletter signup checkbox',
        'Form validation',
        'Site-themed styling',
        'Clear form button',
        'Success message on submission'
      ],
      tips: [
        'Use semantic HTML5 form elements',
        'Group related fields with fieldset and legend',
        'Add clear validation messages',
        'Ensure keyboard accessibility',
        'Test responsive design',
        'Include ARIA labels for accessibility'
      ]
    },
    nextSteps: "In this exercise, we'll enhance your basic contact form by adding Rottnest Island-specific features and Vue.js functionality. We'll build upon your existing implementation while maintaining all accessibility and usability features."
  },
  steps: [
    {
      title: 'Review Your Current Implementation',
      description: "Let's start by reviewing the contact form you built in the previous exercise:",
      code: `<!-- Previous implementation -->
<form class="space-y-4">
  <div>
    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      required
      placeholder="Your name"
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
  </div>
  <!-- ... other form fields ... -->
</form>`
    },
    {
      title: 'Adding Enhanced Fields',
      description: 'Add new fields specific to Rottnest Island inquiries',
      code: `<!-- Enhanced form with Rotto-specific fields -->
<form class="space-y-4">
  <!-- Existing name, email, and message fields -->

  <div>
    <label for="subject" class="block text-sm font-medium text-gray-700">Type of Inquiry</label>
    <select 
      id="subject" 
      name="subject"
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      <option value="Booking">Tour Booking</option>
      <option value="Accommodation">Accommodation</option>
      <option value="Wildlife">Wildlife Questions</option>
      <option value="Transportation">Ferry & Transport</option>
      <option value="Other">Other</option>
    </select>
  </div>

  <div>
    <label class="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
    <div class="space-x-4">
      <label class="inline-flex items-center">
        <input type="radio" name="preferredContact" value="email" checked>
        <span class="ml-2">Email</span>
      </label>
      <label class="inline-flex items-center">
        <input type="radio" name="preferredContact" value="phone">
        <span class="ml-2">Phone</span>
      </label>
    </div>
  </div>

  <div>
    <label class="inline-flex items-center">
      <input type="checkbox" name="newsletterSignup">
      <span class="ml-2 text-sm">Sign up for Rotto Rocks updates and special offers</span>
    </label>
  </div>
</form>`
    },
    {
      title: 'Adding Vue.js Functionality',
      description: 'Convert the form to a reactive Vue.js component',
      code: `interface FormData {
  name: string
  email: string
  subject: string
  message: string
  preferredContact: string
  phoneNumber: string
  newsletterSignup: boolean
}

const formData = ref<FormData>({
  name: '',
  email: '',
  subject: 'Booking',
  message: '',
  preferredContact: 'email',
  phoneNumber: '',
  newsletterSignup: false
})

const showPhoneNumber = computed(() => formData.value.preferredContact === 'phone')`
    },
    {
      title: 'Island-Specific Validation',
      description: 'Add validation rules specific to Rottnest Island inquiries',
      code: `const validateForm = (): boolean => {
  errors.value = {}
  
  if (!formData.value.name.trim()) {
    errors.value.name = 'Name is required'
  }
  
  if (!formData.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'Please enter a valid email address'
  }
  
  if (!formData.value.message.trim()) {
    errors.value.message = 'Message is required'
  }
  
  // Specific validation for tour bookings
  if (formData.value.subject === 'Booking' && 
      !formData.value.message.toLowerCase().includes('date')) {
    errors.value.message = 'Please include your preferred tour date'
  }
  
  if (showPhoneNumber.value && !formData.value.phoneNumber.trim()) {
    errors.value.phoneNumber = 'Phone number is required when phone is selected'
  }
  
  return Object.keys(errors.value).length === 0
}`
    }
  ]
}

// Current step tracking
const currentStep = ref(0)

// Navigation methods
const nextStep = () => {
  if (currentStep.value < tutorial.steps.length - 1) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    

    <h1 class="text-3xl font-bold mb-6">{{ tutorial.title }}</h1>

    <!-- Introduction Section -->
    <section class="mb-8">
      <div class="bg-blue-50 p-6 rounded-lg mb-6">
        <h2 class="text-xl font-semibold mb-4">Previous Exercise: {{ tutorial.introduction.previousExercise.title }}</h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-semibold mb-2">Requirements Completed:</h3>
            <ul class="list-disc list-inside space-y-1">
              <li 
                v-for="req in tutorial.introduction.previousExercise.requirements" 
                :key="req"
                class="text-sm"
              >
                {{ req }}
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold mb-2">Implementation Tips Used:</h3>
            <ul class="list-disc list-inside space-y-1">
              <li 
                v-for="tip in tutorial.introduction.previousExercise.tips" 
                :key="tip"
                class="text-sm"
              >
                {{ tip }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-green-50 p-6 rounded-lg">
        <h2 class="text-xl font-semibold mb-2">Next Steps</h2>
        <p class="text-gray-700">{{ tutorial.introduction.nextSteps }}</p>
      </div>
    </section>

    <!-- Step Navigation -->
    <div class="flex justify-between mb-8">
      <button 
        @click="previousStep"
        :disabled="currentStep === 0"
        class="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
      >
        Previous Step
      </button>
      <span class="text-gray-600">
        Step {{ currentStep + 1 }} of {{ tutorial.steps.length }}
      </span>
      <button 
        @click="nextStep"
        :disabled="currentStep === tutorial.steps.length - 1"
        class="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Next Step
      </button>
    </div>

    <!-- Current Step Content -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4">{{ tutorial.steps[currentStep].title }}</h2>
      <p class="text-gray-600 mb-4">{{ tutorial.steps[currentStep].description }}</p>
      <div class="relative">
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
          <code>{{ tutorial.steps[currentStep].code }}</code>
        </pre>
      </div>
    </div>

    <div class="tutorial-navigation bg-gray-50 p-6 rounded-lg mt-8">
      <h2 class="text-xl font-semibold mb-4">Tutorial Navigation</h2>
      
      <div class="grid md:grid-cols-3 gap-4">
        <!-- Previous Tutorial -->
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h3 class="font-semibold text-sm text-gray-500 mb-2">Previous Tutorial</h3>
          <router-link 
            to="/tutorials/photo-gallery"
            class="block hover:text-primary transition-colors"
          >
            <h4 class="font-medium mb-1">Photo Gallery</h4>
            <p class="text-sm text-gray-600">Create an interactive photo gallery for Rottnest Island</p>
          </router-link>
        </div>

        <!-- All Tutorials -->
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h3 class="font-semibold text-sm text-gray-500 mb-2">All Tutorials</h3>
          <router-link 
            to="/tutorials"
            class="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            View All Tutorials
          </router-link>
        </div>

        <!-- Next Tutorial -->
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h3 class="font-semibold text-sm text-gray-500 mb-2">Next Tutorial</h3>
          <router-link 
            to="/tutorials/tailwind-styling"
            class="block hover:text-primary transition-colors"
          >
            <h4 class="font-medium mb-1">Tailwind CSS Styling</h4>
            <p class="text-sm text-gray-600">Learn how to style your components using Tailwind CSS</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  
</template>