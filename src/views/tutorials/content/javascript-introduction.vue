<script setup lang="ts">
import { ref } from 'vue'
import type { Tutorial, Exercise } from '@/types'

const tutorial = ref<Tutorial>({
  title: 'JavaScript Introduction',
  description: 'Learn the fundamentals of JavaScript programming, DOM manipulation, and event handling to create interactive web experiences',
  difficulty: 'Beginner',
  category: 'JavaScript',
  duration: '2-3 hours',
  steps: [
    {
      title: 'JavaScript Fundamentals',
      content: `
        <div class="step-content">
          <p class="mb-6">JavaScript is the programming language that powers interactive web experiences. Let's start with the core concepts:</p>
          
          <ul class="mb-6">
            <li>Variables and data types</li>
            <li>Functions and scope</li>
            <li>Control flow (if statements, loops)</li>
            <li>Objects and arrays</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: JavaScript Guide
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: JavaScript First Steps
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `// Variables and data types
let name = 'John';  // String
const age = 25;     // Number
let isStudent = true; // Boolean

// Arrays
let hobbies = ['reading', 'coding', 'music'];

// Objects
let person = {
  name: 'John',
  age: 25,
  isStudent: true,
  hobbies: ['reading', 'coding', 'music']
};

// Functions
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Control flow
if (age >= 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}`
    },
    {
      title: 'DOM Manipulation',
      content: `
        <div class="step-content">
          <p class="mb-6">The Document Object Model (DOM) allows JavaScript to interact with HTML elements:</p>
          
          <ul class="mb-6">
            <li>Selecting elements</li>
            <li>Modifying content and attributes</li>
            <li>Creating and removing elements</li>
            <li>Changing styles</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: Manipulating Documents
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: DOM Introduction
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `// Selecting elements
const heading = document.querySelector('h1');
const paragraphs = document.querySelectorAll('p');

// Modifying content
heading.textContent = 'New Heading';
heading.innerHTML = 'New <em>Heading</em>';

// Creating elements
const newDiv = document.createElement('div');
newDiv.textContent = 'New Element';
document.body.appendChild(newDiv);

// Changing styles
heading.style.color = 'blue';
heading.classList.add('highlight');`
    },
    {
      title: 'Event Handling',
      content: `
        <div class="step-content">
          <p class="mb-6">Events allow you to respond to user interactions:</p>
          
          <ul class="mb-6">
            <li>Click events</li>
            <li>Form events</li>
            <li>Keyboard events</li>
            <li>Event listeners</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: Introduction to Events
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: Event Listeners
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `// Click event
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Form event
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted!');
});

// Keyboard event
document.addEventListener('keydown', (event) => {
  console.log(\`Key pressed: \${event.key}\`);
});

// Multiple events
function handleHover() {
  this.style.backgroundColor = 'yellow';
}

button.addEventListener('mouseenter', handleHover);
button.addEventListener('mouseleave', () => {
  button.style.backgroundColor = '';
});`
    }
  ],
  resources: [
    {
      title: 'MDN JavaScript Guide',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
      description: 'Comprehensive guide to JavaScript',
      usage: 'Use this as your primary reference for learning JavaScript concepts and features.'
    },
    {
      title: 'MDN JavaScript Tutorial',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps',
      description: 'Step-by-step tutorial for JavaScript beginners',
      usage: 'Follow this tutorial for hands-on practice with JavaScript basics.'
    },
    {
      title: 'MDN JavaScript Reference',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
      description: 'Complete reference for JavaScript',
      usage: 'Look up specific JavaScript methods, properties, and concepts.'
    },
    {
      title: 'JavaScript.info',
      url: 'https://javascript.info/',
      description: 'Modern JavaScript Tutorial',
      usage: 'Great resource for in-depth JavaScript concepts with practical examples.'
    }
  ]
})

const exercise = ref<Exercise>({
  title: 'JavaScript Core Concepts Practice',
  description: 'Practice JavaScript fundamentals using the console and basic DOM manipulation',
  objectives: [
    'Work with variables and data types',
    'Create and use functions',
    'Manipulate arrays and objects',
    'Use control flow statements',
    'Practice basic DOM manipulation'
  ],
  structure: `javascript-practice/
├── index.html
└── js/
    └── main.js`,
  requirements: [
    {
      title: 'Part 1: Console Exercises',
      tasks: [
        'Create variables using let and const',
        'Work with different data types (strings, numbers, booleans, arrays, objects)',
        'Create functions to manipulate data',
        'Use if statements and loops',
        'Practice with array methods'
      ],
      example: `// 1. Create variables and log them
let name = 'John';
const age = 25;
console.log(\`Name: \${name}, Age: \${age}\`);

// 2. Create and manipulate an array
let hobbies = ['reading', 'coding', 'music'];
hobbies.push('gaming');
console.log('Hobbies:', hobbies);

// 3. Create an object
let person = {
  name: name,
  age: age,
  hobbies: hobbies
};
console.log('Person:', person);`
    },
    {
      title: 'Part 2: Function Practice',
      tasks: [
        'Create a function to calculate age from birth year',
        'Write a function to find the longest word in an array',
        'Create a function to count vowels in a string',
        'Implement a simple calculator function'
      ],
      example: `// Age calculator function
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

// Test the function
console.log('Age:', calculateAge(1990));`
    },
    {
      title: 'Part 3: Array Methods',
      tasks: [
        'Use map() to transform array elements',
        'Use filter() to find elements meeting criteria',
        'Use reduce() to sum numbers',
        'Chain array methods together'
      ],
      example: `// Sample array
const numbers = [1, 2, 3, 4, 5];

// Map example
const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled);

// Filter example
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);`
    },
    {
      title: 'Part 4: Basic DOM Practice',
      tasks: [
        'Create HTML elements using JavaScript',
        'Add text content to elements',
        'Append elements to the document',
        'Add basic styling using JavaScript'
      ],
      example: `// Create and append elements
const container = document.createElement('div');
container.className = 'output-container';

const heading = document.createElement('h2');
heading.textContent = 'JavaScript Output';

container.appendChild(heading);
document.body.appendChild(container);`
    }
  ],
  setup: `1. Create a new folder called 'javascript-practice'
2. Create an index.html file with this basic structure:`,
  setupCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Practice</title>
</head>
<body>
    <h1>JavaScript Practice</h1>
    <div id="output"></div>
    
    <script src="js/main.js"><\/script>
</body>
</html>`,
  setupContinued: `3. Create a js folder and add main.js inside it
4. Open index.html in your browser
5. Open the browser's console (F12 or right-click > Inspect)`,
  tips: [
    'Use console.log() frequently to check your output',
    'Try modifying the example code to see different results',
    'Practice typing the code instead of copying and pasting',
    'Use the browser\'s console to experiment with code',
    'Read error messages carefully to debug issues',
    'Try combining different concepts in creative ways',
    'Comment your code to explain what each part does'
  ]
})

const activeStep = ref(0)

const nextStep = () => {
  if (activeStep.value < tutorial.value.steps.length - 1) {
    activeStep.value++
  }
}

const previousStep = () => {
  if (activeStep.value > 0) {
    activeStep.value--
  }
}

const scrollToExercise = () => {
  document.querySelector('#exercise')?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  })
}

const copyCode = async (code: string) => {
  try {
    await navigator.clipboard.writeText(code)
    // Optional: Add a toast notification or temporary button text change
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}
</script>

<template>
  <article class="tutorial-content">
    <!-- Header Section -->
    <header class="tutorial-header">
      <h1>{{ tutorial.title }}</h1>
      <p class="description">{{ tutorial.description }}</p>
      <div class="metadata">
        <span class="difficulty">{{ tutorial.difficulty }}</span>
        <span class="category">{{ tutorial.category }}</span>
        <span class="duration">{{ tutorial.duration }}</span>
      </div>
    </header>

    <!-- Tutorial Content -->
    <section class="tutorial-step">
      <h2>{{ tutorial.steps[activeStep].title }}</h2>
      <div 
        class="content"
        v-html="tutorial.steps[activeStep].content"
      ></div>
      <div class="code-block-wrapper" v-if="tutorial.steps[activeStep].code">
        <pre class="code-block"><code>{{ tutorial.steps[activeStep].code }}</code></pre>
        <button 
          class="copy-button"
          @click="copyCode(tutorial.steps[activeStep].code)"
        >
          Copy
        </button>
      </div>
    </section>

    <!-- Progress Section -->
    <div class="progress-section">
      <div class="progress-bar">
        <div 
          class="progress"
          :style="`width: ${(activeStep + 1) / tutorial.steps.length * 100}%`"
        ></div>
      </div>
      <nav class="tutorial-navigation">
        <div class="nav-container">
          <button 
            @click="previousStep" 
            :disabled="activeStep === 0"
            class="nav-button"
          >
            ← Previous
          </button>
        </div>
        <div class="step-indicator">
          Step {{ activeStep + 1 }} of {{ tutorial.steps.length }}
        </div>
        <div class="nav-container">
          <button 
            @click="nextStep" 
            :disabled="activeStep === tutorial.steps.length - 1"
            class="nav-button"
          >
            Next →
          </button>
        </div>
      </nav>
    </div>

    <!-- Call to Action -->
    <div class="cta-section">
      <h2>Ready to Practice?</h2>
      <p>Now that you understand JavaScript fundamentals, let's apply what you've learned!</p>
      <button class="cta-button" @click="scrollToExercise">Start the Exercise</button>
    </div>

    <!-- Exercise Section -->
    <section class="exercise-section" id="exercise">
      <h2>Practice Exercise: {{ exercise.title }}</h2>
      <div class="exercise-content">
        <!-- Introduction -->
        <div class="exercise-intro">
          <p>{{ exercise.description }}</p>
          <h3>Learning Objectives:</h3>
          <ul class="learning-objectives">
            <li v-for="objective in exercise.objectives" :key="objective">
              {{ objective }}
            </li>
          </ul>
        </div>

        <!-- Project Setup -->
        <div class="setup-instructions mt-8">
          <h3>Setup Instructions</h3>
          <div class="setup-content">
            <!-- Step 1 -->
            <p class="mb-4">{{ exercise.setup }}</p>
            
            <!-- Step 2 with HTML Code -->
            <div class="code-block-wrapper">
              <pre class="code-block"><code>{{ exercise.setupCode }}</code></pre>
              <button 
                class="copy-button"
                @click="copyCode(exercise.setupCode)"
              >
                Copy
              </button>
            </div>

            <!-- Steps 3-5 -->
            <p class="mt-4">{{ exercise.setupContinued }}</p>
          </div>
        </div>

        <!-- Project Structure -->
        <div class="site-structure mt-6">
          <h3>Project Structure</h3>
          <pre class="font-mono text-sm bg-gray-100 p-4 rounded-lg mt-2">{{ exercise.structure }}</pre>
        </div>

        <!-- Exercise Parts -->
        <div class="exercise-parts mt-8">
          <div 
            v-for="(part, index) in exercise.requirements" 
            :key="part.title"
            class="exercise-part"
          >
            <h3>{{ part.title }}</h3>
            <div class="tasks-list">
              <h4>Tasks:</h4>
              <ol class="numbered-tasks">
                <li v-for="task in part.tasks" :key="task">
                  {{ task }}
                </li>
              </ol>
            </div>
            
            <div class="code-example mt-4">
              <h4>Example Code:</h4>
              <div class="code-block-wrapper">
                <pre class="code-block"><code>{{ part.example }}</code></pre>
                <button 
                  class="copy-button"
                  @click="copyCode(part.example)"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Tips -->
        <div class="tips mt-8">
          <h3>Tips for Success:</h3>
          <ul>
            <li v-for="tip in exercise.tips" :key="tip">
              {{ tip }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Separator -->
    <div class="section-separator">
      <span class="separator-text">Additional Resources</span>
    </div>

    <!-- Additional Resources -->
    <section class="additional-resources">
      <h2>Additional Learning Resources</h2>
      <div class="resources-grid">
        <a 
          v-for="resource in tutorial.resources" 
          :key="resource.url"
          :href="resource.url"
          target="_blank"
          rel="noopener noreferrer"
          class="resource-card"
        >
          <h3>{{ resource.title }}</h3>
          <p class="description">{{ resource.description }}</p>
          <p class="usage">How to use: {{ resource.usage }}</p>
        </a>
      </div>
    </section>

    <!-- Separator -->
    <div class="section-separator">
      <span class="separator-text">Next Steps</span>
    </div>

    <!-- Next Steps Section -->
    <section class="next-steps">
      <h2>Continue Your Learning Journey</h2>
      <p class="next-steps-description">Ready to dive deeper into JavaScript? Explore these advanced topics:</p>
      
      <div class="advanced-topics-grid">
        <a 
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" 
          target="_blank"
          rel="noopener noreferrer"
          class="next-tutorial-card"
        >
          <div class="card-content">
            <h3>JavaScript Modules</h3>
            <p>Learn how to organize your code using modern JavaScript modules.</p>
            <span class="next-link">Explore →</span>
          </div>
        </a>
        <a 
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises" 
          target="_blank"
          rel="noopener noreferrer"
          class="next-tutorial-card"
        >
          <div class="card-content">
            <h3>Asynchronous JavaScript</h3>
            <p>Master promises, async/await, and handling asynchronous operations.</p>
            <span class="next-link">Explore →</span>
          </div>
        </a>
      </div>
    </section>
  </article>
</template>

<style scoped>
.tutorial-content {
  @apply max-w-4xl mx-auto px-4;
}

.tutorial-header {
  @apply mb-8;
}

.tutorial-header h1 {
  @apply text-3xl font-bold mb-2;
}

.metadata {
  @apply flex gap-4 text-sm text-gray-600 mt-2;
}

.step-content p {
  @apply text-gray-700 leading-relaxed;
}

.step-content ul {
  @apply list-disc pl-6 text-gray-700 space-y-2;
}

.progress-section {
  @apply my-8 bg-gray-50 p-6 rounded-lg;
}

.progress-bar {
  @apply h-2 bg-gray-200 rounded-full overflow-hidden;
}

.progress {
  @apply h-full bg-blue-600 transition-all duration-300;
}

.tutorial-navigation {
  @apply flex justify-between items-center mt-6;
}

.nav-container {
  @apply w-[120px];
}

.nav-button {
  @apply px-4 py-2 bg-blue-600 text-white rounded-lg
    hover:bg-blue-700 transition-colors duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    font-medium text-sm;
}

.step-indicator {
  @apply text-sm text-gray-600 font-medium text-center;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-6 rounded-lg mt-4 overflow-x-auto font-mono;
  background: linear-gradient(to bottom, #1a1a1a, #2d2d2d);
}

.code-block-wrapper {
  @apply relative mt-8;
}

.copy-button {
  @apply absolute top-2 right-2 px-3 py-1 
    bg-gray-700 text-gray-300 rounded
    hover:bg-gray-600 transition-colors
    text-xs font-sans;
}

.read-more-links {
  @apply mt-8 p-4 bg-gray-50 rounded-lg;
}

.read-more-links h4 {
  @apply text-sm font-semibold text-gray-600 mb-2;
}

.read-more-links ul {
  @apply space-y-2;
}

.read-more-links a {
  @apply text-blue-600 hover:text-blue-700 underline text-sm
    transition-colors duration-200;
}

.cta-section {
  @apply my-12 text-center p-8 bg-gray-50 rounded-lg;
}

.cta-button {
  @apply px-6 py-3 bg-blue-600 text-white rounded-lg
    hover:bg-blue-700 transition-colors duration-200
    font-semibold text-lg;
}

.section-separator {
  @apply my-16 relative text-center;
}

.section-separator::before {
  content: '';
  @apply absolute w-full h-px bg-gray-200 top-1/2 left-0;
}

.separator-text {
  @apply relative px-4 bg-white text-gray-500 text-sm uppercase tracking-wider;
}

.resources-grid {
  @apply grid gap-4 md:grid-cols-2 mt-4;
}

.resource-card {
  @apply p-4 bg-white rounded-lg shadow-sm hover:shadow-md
    transition-shadow duration-200;
}

.advanced-topics-grid {
  @apply grid gap-4 md:grid-cols-2 mt-6;
}

.next-tutorial-card {
  @apply block bg-white rounded-lg shadow-md hover:shadow-lg
    transition-all duration-200 border border-gray-100
    hover:border-blue-200 hover:transform hover:scale-[1.02];
}

.card-content {
  @apply p-6;
}

.card-content h3 {
  @apply text-xl font-semibold text-gray-800 mb-2;
}

.card-content p {
  @apply text-gray-600 mb-4;
}

.next-link {
  @apply text-blue-600 font-medium inline-flex items-center gap-1
    hover:text-blue-700;
}

.next-tutorial-card:hover {
  background: linear-gradient(to right, white, #f0f7ff);
}
</style> 