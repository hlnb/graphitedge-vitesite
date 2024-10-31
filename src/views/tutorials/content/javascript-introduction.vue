<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Introduction to JavaScript</h1>
    
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm text-yellow-700 mb-4">
            Prerequisites: Basic understanding of HTML and CSS
          </p>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">What is JavaScript?</h2>
    <p class="mb-4">
      JavaScript is a versatile programming language that adds interactivity and dynamic behavior to websites. 
      It's one of the core technologies of web development, alongside HTML and CSS.
    </p>

    <h2 class="text-2xl font-semibold mb-4">Getting Started</h2>
    <p class="mb-4">
      Let's start with some basic JavaScript concepts. You can try these examples in your browser's console 
      (press F12 to open developer tools).
    </p>

    <h2 class="text-2xl font-semibold mb-4">Variables and Data Types</h2>
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg my-6">
      <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code class="language-javascript">// Declaring variables
let message = "Hello, World!";
const pi = 3.14159;
var oldWay = "Not recommended anymore";

// Different data types
let text = "This is a string";
let number = 42;
let isTrue = true;
let array = [1, 2, 3, 4];
let object = { name: "John", age: 30 };</code></pre>
    </div>

    <h2 class="text-2xl font-semibold mb-4">Basic Operations</h2>
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg my-6">
      <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code class="language-javascript">// Arithmetic operations
let sum = 5 + 3;
let difference = 10 - 4;
let product = 6 * 7;
let quotient = 15 / 3;

// String operations
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;</code></pre>
    </div>

    <h2 class="text-2xl font-semibold mb-4">Control Flow</h2>
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg my-6">
      <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code class="language-javascript">// If statements
let age = 18;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log("Count: " + i);
}

// While loop
let count = 0;
while (count < 3) {
    console.log("Still counting...");
    count++;
}</code></pre>
    </div>

    <h2 class="text-2xl font-semibold mb-4">Functions</h2>
    <p class="mb-4">
      Functions are reusable blocks of code that perform specific tasks.
    </p>
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg my-6">
      <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code class="language-javascript">// Basic function
function greet(name) {
    return "Hello, " + name + "!";
}

// Arrow function
const multiply = (a, b) => a * b;

// Using functions
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(multiply(4, 5)); // Output: 20</code></pre>
    </div>

    <h2 class="text-2xl font-semibold mb-4">Practice Exercise</h2>
    <p class="mb-4">
      Try creating a function that calculates the area of a rectangle:
    </p>
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg my-6">
      <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code class="language-javascript">function calculateArea(width, height) {
    return width * height;
}

// Test your function
console.log(calculateArea(5, 3)); // Should output: 15</code></pre>
    </div>

    <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm text-blue-700 mb-4">
            Try experimenting with different values and functions in your browser's console!
          </p>
        </div>
      </div>
    </div>

    <section class="mt-12">
      <h2 class="text-2xl font-semibold mb-4">Additional Resources</h2>
      
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="resource in resources" :key="resource.name" class="space-y-4">
          <h3 class="text-xl font-semibold text-primary">{{ resource.name }}</h3>
          <ul class="space-y-3">
            <li v-for="link in resource.links" :key="link.url" class="border-l-4 border-gray-200 pl-4">
              <a 
                :href="link.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-primary hover:text-primary-dark font-medium"
              >
                {{ link.title }}
              </a>
              <p class="text-sm text-gray-600 mt-1">{{ link.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <h2 class="text-2xl font-semibold mb-4">Next Steps</h2>
    <p class="mb-4">
      Now that you understand the basics, you can:
    </p>
    <ul class="mb-4">
      <li>
        <router-link 
          to="/tutorials/complex-functions"
          class="text-brand-red hover:text-brand-red-dark"
        >
          Practice writing more complex functions
        </router-link>
      </li>
      <li>Learn about DOM manipulation</li>
      <li>Explore JavaScript events</li>
      <li>Study modern JavaScript features (ES6+)</li>
    </ul>

    <div class="mt-8 flex justify-between items-center">
      <router-link 
        to="/tutorials" 
        class="text-brand-red hover:text-brand-red-dark"
      >
        ← Back to Tutorials
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ResourceLink {
  url: string
  title: string
  description: string
}

interface Resource {
  name: string
  links: ResourceLink[]
}

const resources: Resource[] = [
  {
    name: 'Learning Paths',
    links: [
      {
        url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
        title: 'JavaScript First Steps',
        description: 'Start your JavaScript journey with the basics of programming'
      },
      {
        url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks',
        title: 'JavaScript Building Blocks',
        description: 'Learn about conditionals, loops, functions, and events'
      },
      {
        url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects',
        title: 'Introducing JavaScript Objects',
        description: 'Understand object-oriented programming in JavaScript'
      }
    ]
  },
  {
    name: 'References',
    links: [
      {
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
        title: 'JavaScript Reference',
        description: 'Complete reference for JavaScript language features'
      },
      {
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
        title: 'JavaScript Guide',
        description: 'Comprehensive guide to JavaScript for all skill levels'
      },
      {
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects',
        title: 'Built-in Objects',
        description: 'Reference for JavaScript\'s standard built-in objects'
      }
    ]
  },
  {
    name: 'Guides',
    links: [
      {
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript',
        title: 'Re-introduction to JavaScript',
        description: 'A comprehensive overview of JavaScript for experienced developers'
      },
      {
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures',
        title: 'JavaScript Data Structures',
        description: 'Learn about different data types and structures in JavaScript'
      },
      {
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions',
        title: 'Functions Guide',
        description: 'Deep dive into JavaScript functions and their usage'
      }
    ]
  }
]
</script>

<style scoped>
/* Add any specific styles here */
</style> 