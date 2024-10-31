<template>
  <article class="prose prose-lg max-w-4xl mx-auto px-4 py-12">
    <h1>Why Vue.js is Perfect for Beginners in 2024</h1>
    
    <div class="lead">
      After teaching web development for over two decades and introducing countless beginners 
      to various frameworks, I've found Vue.js to be the most beginner-friendly framework. 
      Here's why it's an excellent choice for those starting their journey in modern web development.
    </div>

    <h2>The Vue.js Advantage</h2>
    <div class="benefits-grid">
      <div class="benefit-card">
        <h3>Gentle Learning Curve</h3>
        <p>Progressive framework that lets you adopt features as needed</p>
      </div>
      <div class="benefit-card">
        <h3>Familiar Syntax</h3>
        <p>HTML-like template syntax that feels natural</p>
      </div>
      <div class="benefit-card">
        <h3>Clear Documentation</h3>
        <p>Comprehensive, well-organized learning resources</p>
      </div>
      <div class="benefit-card">
        <h3>Strong Community</h3>
        <p>Helpful ecosystem with ready-to-use solutions</p>
      </div>
    </div>

    <h2>Code Examples</h2>

    <h3>1. Simple Component</h3>
    <pre><code class="language-vue text-white">
&lt;template&gt;
  &lt;div class="greeting"&gt;
    &lt;h1&gt;{{ message }}&lt;/h1&gt;
    &lt;button @click="updateMessage"&gt;Change Message&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const data = ref({
  message: '',
  todo: null
});

const updateMessage = () => {
  data.value.message = 'Hello Developer!'
}
&lt;/script&gt;

&lt;style scoped&gt;
.greeting {
  text-align: center;
  padding: 20px;
}
&lt;/style&gt;
    </code></pre>

    <h3>2. Reactive Data Handling</h3>
    <pre><code class="language-vue text-white">
&lt;template&gt;
  &lt;div class="todo-app"&gt;
    &lt;input 
      v-model="data.todo" 
      @keyup.enter="addTodo"
      placeholder="Add a todo"
    &gt;
    &lt;ul&gt;
      &lt;li v-for="todo in data.todos" :key="todo.id"&gt;
        {{ todo.text }}
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const data = ref({
  todo: '',
  todos: []
});

const addTodo = () => {
  if (data.value.todo.trim()) {
    data.value.todos.push({
      id: Date.now(),
      text: data.value.todo
    })
    data.value.todo = ''
  }
}
&lt;/script&gt;
    </code></pre>

    <h2>Key Features for Beginners</h2>

    <h3>1. Component-Based Architecture</h3>
    <ul>
      <li>Modular approach to building interfaces</li>
      <li>Reusable code components</li>
      <li>Clear separation of concerns</li>
      <li>Easy to maintain and scale</li>
    </ul>

    <h3>2. Intuitive Template Syntax</h3>
    <ul>
      <li>Familiar HTML-based templates</li>
      <li>Simple directives (v-if, v-for, v-model)</li>
      <li>Clear event handling (@click, @submit)</li>
      <li>Easy two-way data binding</li>
    </ul>

    <h3>3. State Management</h3>
    <ul>
      <li>Simple ref and reactive APIs</li>
      <li>Built-in Composition API</li>
      <li>Optional Vuex for complex applications</li>
      <li>Predictable data flow</li>
    </ul>

    <h2>Getting Started Steps</h2>
    <div class="steps-section">
      <div class="step">
        <h3>Step 1: Setup</h3>
        <pre><code class="language-bash text-white">
npm create vue@latest my-vue-app
cd my-vue-app
npm install
npm run dev
        </code></pre>
      </div>

      <div class="step">
        <h3>Step 2: Learn the Basics</h3>
        <ul>
          <li>Understanding Vue instance</li>
          <li>Template syntax</li>
          <li>Component basics</li>
          <li>Props and events</li>
        </ul>
      </div>

      <div class="step">
        <h3>Step 3: Build Projects</h3>
        <ul>
          <li>Todo application</li>
          <li>Weather widget</li>
          <li>Blog interface</li>
          <li>Shopping cart</li>
        </ul>
      </div>
    </div>

    <h2>Common Beginner Mistakes to Avoid</h2>
    <div class="mistakes-section">
      <div class="mistake">
        <h3>Overcomplicating Components</h3>
        <p>Start with simple components and gradually add complexity as needed.</p>
      </div>
      <div class="mistake">
        <h3>Ignoring Vue Devtools</h3>
        <p>Install and use Vue Devtools for easier debugging and state inspection.</p>
      </div>
      <div class="mistake">
        <h3>Skipping Documentation</h3>
        <p>Vue's documentation is excellent - take time to read and understand it.</p>
      </div>
    </div>

    <div class="resources mt-8">
      <h2>Learning Resources</h2>
      <ul>
        <li>Official Vue.js Documentation</li>
        <li>Vue Mastery (video tutorials)</li>
        <li>Vue School</li>
        <li>Vue.js Examples Repository</li>
      </ul>
    </div>

    <div class="conclusion mt-8">
      <p><em>Vue.js continues to be an excellent choice for beginners in 2024. Its 
      gradual learning curve, combined with powerful features and a supportive community, 
      makes it an ideal framework for those starting their journey in modern web development.</em></p>
    </div>
  </article>
</template>

<script setup lang="ts">
// No additional setup needed
</script>

<style scoped>
.lead {
  @apply text-xl text-gray-600 mt-4 mb-8;
}

h1 {
  @apply text-4xl font-bold text-gray-900 mb-4;
}

h2 {
  @apply text-3xl font-bold text-gray-900 mt-8 mb-4;
}

h3 {
  @apply text-2xl font-bold text-gray-900 mt-6 mb-3;
}

ul {
  @apply list-disc list-inside mb-4 ml-4;
}

li {
  @apply text-gray-700 mb-2;
}

.benefits-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 my-8;
}

.benefit-card {
  @apply bg-gray-50 p-6 rounded-lg;
}

pre {
  @apply bg-gray-800 p-4 rounded-lg overflow-x-auto my-4;
}

code {
  @apply text-sm;
}

.steps-section {
  @apply space-y-8 my-8;
}

.step {
  @apply bg-gray-50 p-6 rounded-lg;
}

.mistakes-section {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6 my-8;
}

.mistake {
  @apply bg-gray-50 p-6 rounded-lg;
}

.resources {
  @apply bg-gray-50 p-6 rounded-lg;
}

.conclusion {
  @apply border-t border-gray-200 pt-8 text-gray-600;
}
</style> 