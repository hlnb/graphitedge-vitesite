<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Writing Complex Functions in JavaScript</h1>
    
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm text-yellow-700 mb-4">
            Prerequisites: Basic JavaScript knowledge, understanding of functions and loops
          </p>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">Higher-Order Functions</h2>
    <p class="mb-4">
      Higher-order functions are functions that can take other functions as arguments or return functions. They're a powerful way to make your code more flexible and reusable.
    </p>
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg my-6">
      <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code class="language-javascript">// Higher-order function example
function operateOnArray(arr, operation) {
    return arr.map(operation);
}

// Different operations we can pass
const double = x => x * 2;
const square = x => x * x;

const numbers = [1, 2, 3, 4, 5];

console.log(operateOnArray(numbers, double));  // [2, 4, 6, 8, 10]
console.log(operateOnArray(numbers, square)); // [1, 4, 9, 16, 25]</code></pre>
    </div>

    <h2 class="text-2xl font-semibold mb-4">Closure Functions</h2>
    <p class="mb-4">
      Closures allow a function to access variables from its outer scope even after the outer function has returned.
    </p>
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg my-6">
      <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code class="language-javascript">function createCounter() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1</code></pre>
    </div>

    <h2 class="text-2xl font-semibold mb-4">Recursive Functions</h2>
    <p class="mb-4">
      Recursive functions are functions that call themselves to solve complex problems by breaking them down into smaller, similar sub-problems.
    </p>
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg my-6">
      <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code class="language-javascript">// Calculate factorial using recursion
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Traverse a nested object
function traverseObject(obj, prefix = '') {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            traverseObject(obj[key], prefix + key + '.');
        } else {
            console.log(prefix + key + ':', obj[key]);
        }
    }
}

const data = {
    user: {
        name: 'John',
        address: {
            city: 'New York',
            zip: '10001'
        }
    }
};

traverseObject(data);</code></pre>
    </div>

    <h2 class="text-2xl font-semibold mb-4">Async Functions</h2>
    <p class="mb-4">
      Async functions handle asynchronous operations elegantly using async/await syntax.
    </p>
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg my-6">
      <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code class="language-javascript">async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

// Using the async function
async function displayUserInfo(userId) {
    try {
        const user = await fetchUserData(userId);
        console.log(`User: ${user.name}, Email: ${user.email}`);
    } catch (error) {
        console.log('Failed to display user info');
    }
}</code></pre>
    </div>

    <h2 class="text-2xl font-semibold mb-4">Practice Exercise</h2>
    <p class="mb-4">
      Create a function that processes an array of numbers using multiple operations:
    </p>
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg my-6">
      <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code class="language-javascript">function processNumbers(numbers) {
    // Filter out negative numbers
    const positiveNumbers = numbers.filter(num => num >= 0);
    
    // Square the remaining numbers
    const squares = positiveNumbers.map(num => num * num);
    
    // Calculate the average
    const sum = squares.reduce((acc, curr) => acc + curr, 0);
    const average = sum / squares.length;
    
    return {
        original: numbers,
        positive: positiveNumbers,
        squares: squares,
        average: average
    };
}

const numbers = [-2, 5, 3, -8, 4, 1];
console.log(processNumbers(numbers));</code></pre>
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
    name: 'Advanced Functions',
    links: [
      {
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions',
        title: 'Functions Guide',
        description: 'Comprehensive guide to JavaScript functions'
      },
      {
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
        title: 'Closures',
        description: 'Understanding JavaScript closures in depth'
      },
      {
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
        title: 'Async Functions',
        description: 'Working with asynchronous functions in JavaScript'
      }
    ]
  },
  {
    name: 'Functional Programming',
    links: [
      {
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functional_programming',
        title: 'Functional Programming Concepts',
        description: 'Learn about functional programming in JavaScript'
      },
      {
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
        title: 'Array Methods',
        description: 'Reference for array methods used in functional programming'
      },
      {
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
        title: 'Promises',
        description: 'Understanding promises for async operations'
      }
    ]
  },
  {
    name: 'Best Practices',
    links: [
      {
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error',
        title: 'Error Handling',
        description: 'Learn proper error handling in JavaScript'
      },
      {
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management',
        title: 'Memory Management',
        description: 'Understanding memory management in JavaScript'
      },
      {
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode',
        title: 'Strict Mode',
        description: 'Writing more reliable JavaScript code'
      }
    ]
  }
]
</script> 