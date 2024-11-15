<script setup>
import { ref, watch } from 'vue'

const examples = {
  basics: {
    title: 'Variables & Types',
    code: `// Try changing these values
let name = "Quokka";
let age = 3;
let isHappy = true;

// This will show in the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Happy?", isHappy);

// Try some calculations
let quokkaYears = age * 7;
console.log("Age in human years:", quokkaYears);`,
    description: 'Learn about variables and basic data types in JavaScript.'
  },
  functions: {
    title: 'Functions',
    code: `// Basic function
function greetQuokka(name) {
  return "Hello, " + name + "!";
}

// Try calling the function
let greeting = greetQuokka("Happy Quokka");
console.log(greeting);

// Arrow function
const calculateAge = (birthYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

console.log("Age:", calculateAge(2020));`,
    description: 'Explore different ways to create and use functions.'
  },
  dom: {
    title: 'DOM Manipulation',
    code: `// Create a new div element
const newDiv = document.createElement('div');
newDiv.id = 'myDiv';
newDiv.textContent = 'Hello from JavaScript!';
newDiv.style.backgroundColor = 'lightblue';
newDiv.style.padding = '10px';
newDiv.style.margin = '10px';

// Add it to our preview area
document.body.appendChild(newDiv);

// Create a button
const button = document.createElement('button');
button.textContent = 'Click me!';
button.style.marginLeft = '10px';

// Add click event listener
button.addEventListener('click', () => {
  newDiv.style.backgroundColor = 
    newDiv.style.backgroundColor === 'lightblue' 
      ? 'lightgreen' 
      : 'lightblue';
  newDiv.textContent = 'Background color changed!';
});

// Add button after the div
document.body.appendChild(button);

console.log('Elements created! Try clicking the button.');`,
    description: 'Learn how to create and manipulate DOM elements.'
  },
  arrays: {
    title: 'Arrays & Loops',
    code: `// Working with arrays
let quokkas = ["Happy", "Sleepy", "Hungry"];

// Loop through array
console.log("Our quokkas:");
for (let i = 0; i < quokkas.length; i++) {
  console.log(quokkas[i]);
}

// Array methods
quokkas.push("Playful");
console.log("Added new quokka:", quokkas);

// Using forEach
quokkas.forEach((quokka, index) => {
  console.log(\`Quokka \${index + 1}: \${quokka}\`);
});`,
    description: 'Learn how to work with arrays and loops.'
  },
  objects: {
    title: 'Objects',
    code: `// Creating an object
let quokka = {
  name: "Happy",
  age: 3,
  favorites: ["eating", "smiling", "photos"],
  sayHello: function() {
    return "Hi, I'm " + this.name + "!";
  }
};

// Accessing object properties
console.log(quokka.name);
console.log(quokka.favorites[0]);
console.log(quokka.sayHello());

// Adding new properties
quokka.location = "Rottnest Island";
console.log(quokka);`,
    description: 'Understand JavaScript objects and their properties.'
  }
}

const currentExample = ref('basics')
const userCode = ref(examples.basics.code)
const output = ref('')
const error = ref('')
const previewFrame = ref(null)

// Create a safe console.log
const consoleLogs = []
const safeConsole = {
  log: (...args) => {
    consoleLogs.push(args.map(arg => 
      typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
    ).join(' '))
  }
}

const runCode = () => {
  consoleLogs.length = 0
  error.value = ''
  
  try {
    // Create safe environment for DOM manipulation
    const iframe = document.createElement('iframe')
    iframe.style.width = '100%'
    iframe.style.height = '200px'
    iframe.style.border = '1px solid #ddd'
    iframe.style.borderRadius = '4px'
    
    if (previewFrame.value) {
      previewFrame.value.innerHTML = ''
      previewFrame.value.appendChild(iframe)
    }

    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document
    iframeDoc.open()
    iframeDoc.write('<body></body>')
    iframeDoc.close()

    // Create safe eval environment
    const safeEval = new Function('document', 'console', userCode.value)
    safeEval(iframeDoc, safeConsole)
    
    output.value = consoleLogs.join('\n')
  } catch (err) {
    error.value = `Error: ${err.message}`
    output.value = ''
  }
}

watch(currentExample, (newExample) => {
  userCode.value = examples[newExample].code
  runCode()
})

watch(userCode, () => {
  runCode()
}, { debounce: 300 })
</script>

<template>
  <div class="tutorial-container">
    <div class="example-selector">
      <button 
        v-for="(example, key) in examples" 
        :key="key"
        :class="{ active: currentExample === key }"
        @click="currentExample = key"
      >
        {{ example.title }}
      </button>
    </div>

    <p class="description">{{ examples[currentExample].description }}</p>

    <div class="editor-output-container">
      <div class="editor-section">
        <div class="editor-header">
          <h4>JavaScript Editor</h4>
          <button 
            class="reset-button"
            @click="userCode = examples[currentExample].code"
          >
            Reset Code
          </button>
        </div>
        <textarea 
          v-model="userCode"
          class="code-editor"
          spellcheck="false"
        ></textarea>
      </div>

      <div class="output-section">
        <h4>Preview & Console Output</h4>
        <div ref="previewFrame" class="preview-area"></div>
        <div class="output-console" :class="{ 'has-error': error }">
          <pre><code>{{ error || output || 'No output yet...' }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tutorial-container {
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  max-width: 100%;
  overflow-x: hidden;
}

.example-selector {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.example-selector button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-brand);
  background: transparent;
  color: var(--vp-c-brand);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.example-selector button.active {
  background: var(--vp-c-brand);
  color: white;
}

.description {
  margin-bottom: 1rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.editor-output-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  max-width: 100%;
}

.editor-section, .output-section {
  display: flex;
  flex-direction: column;
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.editor-header h4, .output-section h4 {
  margin: 0;
}

.code-editor {
  width: 100%;
  height: 300px;
  padding: 1rem;
  font-family: var(--vp-font-family-mono);
  font-size: 0.9rem;
  line-height: 1.5;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  resize: vertical;
}

.preview-area {
  margin-bottom: 1rem;
  min-height: 200px;
  max-height: 300px;
  overflow-y: auto;
  width: 100%;
}

.output-console {
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  overflow-y: auto;
  max-height: 300px;
  font-family: var(--vp-font-family-mono);
  font-size: 0.9rem;
  line-height: 1.5;
  width: 100%;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.output-console.has-error {
  color: var(--vp-c-danger);
}

.reset-button {
  padding: 0.4rem 0.8rem;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.reset-button:hover {
  background: var(--vp-c-brand-dark);
}

.output-console pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.output-console code {
  white-space: pre-wrap;
  word-wrap: break-word;
}

@media (max-width: 768px) {
  .editor-output-container {
    grid-template-columns: 1fr;
  }
  
  .code-editor,
  .output-console {
    max-height: 250px;
  }
  
  .preview-area {
    max-height: 200px;
  }
}
</style> 