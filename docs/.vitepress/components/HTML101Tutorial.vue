<script setup>
import { ref } from 'vue'

const introduction = {
  title: 'What is HTML?',
  content: `HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using elements and tags.

Key points about HTML:
• It's the building block of every webpage
• Uses tags to define different elements
• Works with CSS for styling
• Pairs with JavaScript for interactivity`
}

const examples = {
  structure: {
    title: 'Basic Structure',
    template: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is a basic HTML page.</p>
  </body>
</html>`,
    instructions: 'This is the basic structure every HTML document should have.',
    explanation: 'The DOCTYPE declares the document type, <html> contains all content, <head> contains metadata, and <body> contains visible content.'
  },
  headings: {
    title: 'Headings',
    template: `<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller heading</h3>
<h4>Even smaller</h4>
<h5>Getting tiny</h5>
<h6>Smallest heading</h6>`,
    instructions: 'HTML has six levels of headings. Try editing the text!',
    explanation: 'Headings help structure your content hierarchically, with h1 being the most important.'
  },
  text: {
    title: 'Text Elements',
    template: `<p>This is a paragraph of text.</p>
<p>This is <strong>bold text</strong> and this is <em>italic text</em>.</p>
<p>This is <mark>highlighted</mark> and this is <code>code</code>.</p>
<p>Here's a line break:</p>
<br>
<p>And here's some <sub>subscript</sub> and <sup>superscript</sup> text.</p>`,
    instructions: 'Experiment with different text formatting elements.',
    explanation: 'HTML provides various elements for formatting text and indicating its purpose.'
  },
  lists: {
    title: 'Lists',
    template: `<!-- Unordered List -->
<ul>
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First Step</li>
  <li>Second Step</li>
  <li>Third Step</li>
</ol>

<!-- Definition List -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`,
    instructions: 'Try adding more items to the lists!',
    explanation: 'HTML offers different types of lists: unordered (ul), ordered (ol), and definition lists (dl).'
  },
  links: {
    title: 'Links & Images',
    template: `<!-- Basic Link -->
<a href="https://example.com">Visit Example</a>

<!-- Link in new tab -->
<a href="https://example.com" target="_blank">Open in new tab</a>

<!-- Image -->
<img src="https://picsum.photos/200" alt="Random image">

<!-- Image with Link -->
<a href="https://example.com">
  <img src="https://picsum.photos/100" alt="Clickable image">
</a>`,
    instructions: 'Try changing the href attributes and image sources.',
    explanation: 'Links (a tags) connect pages together, while images (img tags) display visual content.'
  },
  forms: {
    title: 'Forms',
    template: `<form>
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
  </div>
  
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
  </div>
  
  <div>
    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea>
  </div>
  
  <div>
    <label>
      <input type="checkbox" name="subscribe">
      Subscribe to newsletter
    </label>
  </div>
  
  <button type="submit">Send</button>
</form>`,
    instructions: 'Explore different form elements and their attributes.',
    explanation: 'Forms allow users to input data and interact with web pages.'
  },
  semantic: {
    title: 'Semantic Elements',
    template: `<header>
  <h1>Website Title</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content goes here.</p>
  </article>
  
  <aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="#link1">Link 1</a></li>
      <li><a href="#link2">Link 2</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2024 Your Website</p>
</footer>`,
    instructions: 'These semantic elements help structure your page meaningfully.',
    explanation: 'Semantic HTML elements clearly describe their meaning to both browsers and developers.'
  },
  rottoRocks: {
    title: 'Rotto Rocks Website',
    template: `<!DOCTYPE html>
<html>
<head>
  <title>Rotto Rocks - Your Guide to Rottnest Island</title>
</head>
<body>
  <header>
    <h1>Rotto Rocks</h1>
    <h2>Your Ultimate Guide to Rottnest Island</h2>
    
    <nav>
      <ul>
        <li>Home</li>
        <li>News</li>
        <li>Activities</li>
        <li>Wildlife</li>
        <li>About</li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h2>Latest Island News</h2>
      <article>
        <h3>New Quokka Spotting Areas Announced</h3>
        <p>The Rottnest Island Authority has designated new quokka spotting zones to protect both visitors and our furry friends.</p>
      </article>
      
      <article>
        <h3>Ferry Schedule Updates</h3>
        <p>Summer schedule changes announced for ferry services to and from the mainland.</p>
      </article>
    </section>

    <section>
      <h2>Popular Activities</h2>
      <ul>
        <li>Cycling Around the Island</li>
        <li>Snorkeling at The Basin</li>
        <li>Quokka Spotting</li>
        <li>Historical Walking Tours</li>
      </ul>
    </section>

    <section>
      <h2>Wildlife Spotlight</h2>
      <dl>
        <dt>Quokka</dt>
        <dd>The famous smiling marsupial of Rottnest Island</dd>
        
        <dt>Osprey</dt>
        <dd>Majestic sea eagles often seen fishing in the bays</dd>
        
        <dt>New Zealand Fur Seals</dt>
        <dd>Regular visitors to Cathedral Rocks</dd>
      </dl>
    </section>
  </main>

  <footer>
    <p>Rotto Rocks - Celebrating Rottnest Island's Community and Culture</p>
    <small>© 2024 Rotto Rocks</small>
  </footer>
</body>
</html>`,
    instructions: 'This is a basic HTML structure for the Rotto Rocks website. Try adding more content sections or modifying the existing ones!',
    explanation: `This example demonstrates:
• Proper HTML document structure
• Semantic elements (header, nav, main, section, article, footer)
• Different types of content organization (articles, lists, definition lists)
• Hierarchical heading structure (h1 through h3)
• Basic page sections and navigation structure`
  },
  
  rottoNews: {
    title: 'News Article Page',
    template: `<!DOCTYPE html>
<html>
<head>
  <title>New Quokka Spotting Areas - Rotto Rocks News</title>
</head>
<body>
  <header>
    <h1>Rotto Rocks</h1>
    <nav>
      <ul>
        <li>Home</li>
        <li>News</li>
        <li>Activities</li>
        <li>Wildlife</li>
        <li>About</li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>New Quokka Spotting Areas Announced</h2>
        <p>Published: March 15, 2024</p>
        <p>Author: Island Reporter</p>
      </header>

      <section>
        <h3>New Designated Areas</h3>
        <p>The Rottnest Island Authority has announced three new designated quokka spotting areas:</p>
        <ul>
          <li>Thomson Bay Settlement</li>
          <li>Geordie Bay</li>
          <li>Longreach Bay</li>
        </ul>
      </section>

      <section>
        <h3>Safety Guidelines</h3>
        <ul>
          <li>Keep a safe distance</li>
          <li>Do not feed the quokkas</li>
          <li>No flash photography</li>
          <li>Stay on designated paths</li>
        </ul>
      </section>

      <section>
        <h3>Expert Opinion</h3>
        <blockquote>
          <p>These new designated areas will help protect both visitors and quokkas while ensuring everyone can enjoy these unique encounters.</p>
          <cite>- Wildlife Conservation Officer</cite>
        </blockquote>
      </section>
    </article>
  </main>

  <aside>
    <h3>Related Stories</h3>
    <ul>
      <li>Quokka Population Survey Results</li>
      <li>Wildlife Photography Tips</li>
      <li>Island Conservation Efforts</li>
    </ul>
  </aside>

  <footer>
    <p>Rotto Rocks - Celebrating Rottnest Island's Community and Culture</p>
    <small>© 2024 Rotto Rocks</small>
  </footer>
</body>
</html>`,
    instructions: 'Explore the structure of a news article page. Try adding your own article content!',
    explanation: 'This example shows how to structure a news article using semantic HTML elements like article, blockquote, and aside for related content.'
  },
  
  rottoActivities: {
    title: 'Activities Page',
    template: `<!DOCTYPE html>
<html>
<head>
  <title>Island Activities - Rotto Rocks</title>
</head>
<body>
  <header>
    <h1>Rotto Rocks</h1>
    <nav>
      <ul>
        <li>Home</li>
        <li>News</li>
        <li>Activities</li>
        <li>Wildlife</li>
        <li>About</li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>Island Activities</h2>
    
    <section>
      <h3>Water Activities</h3>
      <ul>
        <li>
          <h4>Snorkeling</h4>
          <p>Explore underwater life at these locations:</p>
          <ul>
            <li>The Basin</li>
            <li>Little Salmon Bay</li>
            <li>Parker Point</li>
          </ul>
        </li>
        <li>
          <h4>Swimming</h4>
          <p>Popular swimming beaches:</p>
          <ul>
            <li>The Basin</li>
            <li>Pinky Beach</li>
            <li>Little Armstrong Bay</li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <h3>Land Activities</h3>
      <ul>
        <li>
          <h4>Cycling</h4>
          <p>Popular cycling routes:</p>
          <ul>
            <li>Coastal Loop</li>
            <li>Lighthouse Trail</li>
            <li>Settlement Explorer</li>
          </ul>
        </li>
        <li>
          <h4>Walking Tours</h4>
          <p>Historical sites to visit:</p>
          <ul>
            <li>Oliver Hill Battery</li>
            <li>Wadjemup Lighthouse</li>
            <li>Heritage Buildings</li>
          </ul>
        </li>
      </ul>
    </section>
  </main>

  <footer>
    <p>Rotto Rocks - Celebrating Rottnest Island's Community and Culture</p>
    <small>© 2024 Rotto Rocks</small>
  </footer>
</body>
</html>`,
    instructions: 'This page organizes different island activities. Try adding more activities or reorganizing the structure!',
    explanation: 'This example demonstrates nested lists and hierarchical content organization using semantic HTML elements.'
  }
}

const currentExample = ref('structure')
const userCode = ref('')
const output = ref('')
const showExplanation = ref(true)

const updatePreview = (code) => {
  output.value = code
}

const selectExample = (key) => {
  currentExample.value = key
  userCode.value = examples[key].template
  updatePreview(userCode.value)
}

// Initialize first example
selectExample('structure')

const practiceProject = {
  title: 'Practice Project: Rotto Rocks Website',
  introduction: `
Let's put your HTML knowledge into practice by building a real website for a fictional client!

Project Brief:
-------------
Rotto Rocks is a new tourism and local news website for Rottnest Island, Western Australia. 
They need a website to share island news, activities, and wildlife information with visitors.

Your Task:
----------
Create the basic HTML structure for the main pages of the Rotto Rocks website. 
Focus on using semantic HTML elements to organize the content properly.

Requirements:
------------
• Create clear, well-structured HTML
• Use appropriate semantic elements
• Implement proper heading hierarchy
• Organize content logically
• Focus on structure only (styling comes later)

Note: Don't worry about:
------------------------
• CSS styling (covered in CSS tutorial)
• Links (covered in Links tutorial)
• Images (covered in Images tutorial)
• Forms (covered in Forms tutorial)

Select different examples below to see possible solutions for each page:`,
  pages: [
    {
      name: 'Home Page',
      description: 'The main landing page with news highlights and featured content'
    },
    {
      name: 'News Article',
      description: 'A detailed news article page structure'
    },
    {
      name: 'Activities Page',
      description: 'A page listing island activities and tours'
    }
  ]
}
</script>

<template>
  <div class="tutorial-container">
    <div class="introduction">
      <h2>{{ introduction.title }}</h2>
      <div class="intro-content" v-html="introduction.content"></div>
    </div>

    <div class="tutorial-nav">
      <button 
        v-for="(example, key) in examples" 
        :key="key"
        @click="selectExample(key)"
        :class="{ active: currentExample === key }"
      >
        {{ example.title }}
      </button>
    </div>

    <div class="tutorial-content">
      <div class="editor-section">
        <h3>Code Editor</h3>
        <p class="instructions">{{ examples[currentExample].instructions }}</p>
        <textarea 
          v-model="userCode"
          @input="updatePreview(userCode)"
          class="code-editor"
          spellcheck="false"
        ></textarea>
      </div>

      <div class="preview-section">
        <h3>Preview</h3>
        <div class="preview-container" v-html="output"></div>
      </div>
    </div>

    <div class="explanation">
      <div class="explanation-header" @click="showExplanation = !showExplanation">
        <h3>How it works</h3>
        <span>{{ showExplanation ? '▼' : '▶' }}</span>
      </div>
      <p v-if="showExplanation">{{ examples[currentExample].explanation }}</p>
    </div>

    <div v-if="currentExample.startsWith('rotto')" class="practice-project">
      <h2>{{ practiceProject.title }}</h2>
      <div class="project-intro">
        {{ practiceProject.introduction }}
      </div>
      
      <div class="page-list">
        <h3>Website Pages:</h3>
        <ul>
          <li v-for="page in practiceProject.pages" :key="page.name">
            <strong>{{ page.name }}</strong>: {{ page.description }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tutorial-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.introduction {
  margin-bottom: 2rem;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.intro-content {
  white-space: pre-line;
}

.tutorial-nav {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tutorial-nav button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-brand);
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.tutorial-nav button.active {
  background: var(--vp-c-brand);
  color: white;
}

.tutorial-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.code-editor {
  width: 100%;
  height: 300px;
  font-family: monospace;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  font-size: 0.9rem;
  line-height: 1.5;
}

.preview-container {
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  min-height: 300px;
  background: white;
  overflow: auto;
}

.instructions {
  margin-bottom: 1rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.explanation {
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  border-radius: 4px;
}

.explanation-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.explanation-header h3 {
  margin: 0;
}

@media (max-width: 768px) {
  .tutorial-content {
    grid-template-columns: 1fr;
  }
  
  .tutorial-nav button {
    flex: 1 1 auto;
  }
}

.practice-project {
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border-left: 4px solid var(--vp-c-brand);
}

.project-intro {
  white-space: pre-line;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.page-list {
  margin-top: 1rem;
}

.page-list ul {
  list-style: none;
  padding-left: 0;
}

.page-list li {
  margin-bottom: 0.5rem;
}
</style> 