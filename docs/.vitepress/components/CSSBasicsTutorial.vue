<script setup>
import { ref, watch, onMounted } from 'vue'

// Define examples first, outside of any functions
const examples = {
  selectors: {
    title: 'CSS Selectors',
    template: {
      html: `<div class="example-content">
  <h1 id="main-title">Welcome to Rotto Rocks</h1>
  <nav class="main-nav">
    <ul>
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#">Tours</a></li>
      <li><a href="#">Gallery</a></li>
    </ul>
  </nav>
  <p class="intro">Discover the beauty of Rottnest Island</p>
</div>`,
      css: `/* Try these selectors */
#main-title {
  color: #2c3e50;
  font-size: 24px;
}

.main-nav {
  margin: 20px 0;
}

.main-nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

.main-nav a {
  color: #3498db;
  text-decoration: none;
}

.main-nav a:hover {
  color: #2980b9;
}

.intro {
  color: #34495e;
  font-size: 18px;
}`
    }
  },
  boxModel: {
    title: 'Box Model',
    template: {
      html: `<div class="card">
  <img src="/images/quokka.jpg" alt="Quokka">
  <h2>Meet the Quokkas</h2>
  <p>The happiest animal on Earth!</p>
</div>`,
      css: `/* Experiment with box model properties */
.card {
  width: 300px;
  padding: 20px;
  margin: 20px;
  border: 2px solid #3498db;
  border-radius: 8px;
  background: white;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 15px;
}

.card h2 {
  margin: 0 0 10px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}`
    }
  },
  flexbox: {
    title: 'Flexbox Layout',
    template: {
      html: `<div class="tour-grid">
  <div class="tour-card">
    <h3>Bike Tours</h3>
    <p>Explore the island</p>
  </div>
  <div class="tour-card">
    <h3>Snorkeling</h3>
    <p>Discover marine life</p>
  </div>
  <div class="tour-card">
    <h3>Wildlife Tours</h3>
    <p>Meet the quokkas</p>
  </div>
</div>`,
      css: `/* Try flexbox properties */
.tour-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.tour-card {
  flex: 1;
  min-width: 200px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f9f9f9;
}`
    }
  },
  colors: {
    title: 'Colors & Typography',
    template: {
      html: `<div class="content-section">
  <h1 class="title">Island Adventures</h1>
  <p class="subtitle">Experience Paradise</p>
  <div class="feature">
    <span class="tag">Popular</span>
    <h2>Sunset Tours</h2>
    <p>Watch the sun set over the Indian Ocean</p>
  </div>
</div>`,
      css: `/* Experiment with colors and text */
.content-section {
  background: linear-gradient(to right, #2980b9, #3498db);
  padding: 30px;
  color: white;
}

.title {
  font-family: 'Arial', sans-serif;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.subtitle {
  color: rgba(255,255,255,0.9);
  font-size: 1.2rem;
}

.feature {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 8px;
  backdrop-filter: blur(5px);
}

.tag {
  background: #e74c3c;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}`
    }
  },
  responsive: {
    title: 'Responsive Design',
    template: {
      html: `<div class="demo-responsive-layout">
  <header class="demo-header">
    <h1>Rotto Rocks</h1>
    <nav class="demo-nav">
      <a href="#">Home</a>
      <a href="#">Tours</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  <main class="demo-main">
    <article class="demo-content">Main Content</article>
    <aside class="demo-sidebar">Sidebar</aside>
  </main>
</div>`,
      css: `/* Try resizing the preview */
.demo-responsive-layout {
  max-width: 100%;
}

.demo-header {
  background: #2c3e50;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.demo-nav {
  display: flex;
  gap: 1rem;
}

.demo-nav a {
  color: white;
  text-decoration: none;
}

.demo-main {
  display: flex;
  gap: 2rem;
  padding: 1rem;
}

.demo-content {
  flex: 3;
  padding: 1rem;
  background: #ecf0f1;
}

.demo-sidebar {
  flex: 1;
  padding: 1rem;
  background: #ecf0f1;
}

@media (max-width: 768px) {
  .demo-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .demo-main {
    flex-direction: column;
  }
}`
    }
  }
}

// Initialize refs
const currentExample = ref('selectors')
const userCSS = ref(examples.selectors.template.css)
const output = ref('')

// Create a sandbox for the preview
const createSandbox = (html, css) => {
  return `
    <div class="tutorial-sandbox">
      <style>
        .tutorial-sandbox {
          all: initial;
          display: block;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .tutorial-sandbox * {
          all: revert;
          box-sizing: border-box;
        }
        ${css}
      </style>
      ${html}
    </div>
  `
}

// Update preview function
const updatePreview = () => {
  const example = examples[currentExample.value]
  const css = userCSS.value || example.template.css
  output.value = createSandbox(example.template.html, css)
}

// Initialize on mount
onMounted(() => {
  updatePreview()
})

// Watch for CSS changes
watch(userCSS, () => {
  updatePreview()
})

// Reset function
const resetPreview = () => {
  userCSS.value = examples[currentExample.value].template.css
  updatePreview()
}
</script>

<template>
  <div class="tutorial-sandbox-container">
    <div class="tutorial-instructions">
      <h3>Interactive CSS Editor</h3>
      <p>Experiment with CSS using these examples:</p>
      <ol>
        <li>Select different examples using the buttons below</li>
        <li>Modify the CSS in the editor to see live changes</li>
        <li>Click "Reset CSS" anytime to restore the original example</li>
        <li>For responsive examples, try resizing your browser window</li>
      </ol>
    </div>

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

    <div class="tutorial-content">
      <div class="editor-section">
        <h3>CSS Editor</h3>
        <textarea 
          v-model="userCSS" 
          class="css-editor"
          spellcheck="false"
        ></textarea>
        <button 
          class="reset-button" 
          @click="resetPreview"
        >
          Reset CSS
        </button>
      </div>

      <div class="preview-section">
        <h3>Preview</h3>
        <div class="preview-wrapper">
          <div 
            class="preview-container" 
            v-html="output"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tutorial-sandbox-container {
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  isolation: isolate;
  contain: content;
}

.preview-wrapper {
  isolation: isolate;
  contain: content;
  background: white;
  border-radius: 4px;
  overflow: hidden;
}

.preview-container {
  padding: 1rem;
  min-height: 300px;
  contain: content;
}

.preview-container :deep(.tutorial-sandbox) {
  isolation: isolate;
  contain: content;
  display: block;
  width: 100%;
}

.tutorial-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
}

.editor-section,
.preview-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.css-editor {
  width: 100%;
  height: 300px;
  padding: 1rem;
  font-family: monospace;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  resize: none;
  background: var(--vp-c-bg-soft);
}

.reset-button {
  padding: 0.5rem 1rem;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: fit-content;
  font-size: 14px;
  transition: background-color 0.2s;
}

.reset-button:hover {
  background: var(--vp-c-brand-dark);
  color: white;
}

.reset-button:active {
  background: var(--vp-c-brand-darker);
  transform: translateY(1px);
}

@media (max-width: 768px) {
  .tutorial-content {
    grid-template-columns: 1fr;
  }
}

.example-selector {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.example-selector button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-brand);
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
}

.example-selector button.active {
  background: var(--vp-c-brand);
  color: white;
}

.tutorial-instructions {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.tutorial-instructions h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.tutorial-instructions p {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--vp-c-text-2);
}

.tutorial-instructions ol {
  margin: 0;
  padding-left: 1.2rem;
}

.tutorial-instructions li {
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-2);
}

.tutorial-instructions li:last-child {
  margin-bottom: 0;
}
</style> 