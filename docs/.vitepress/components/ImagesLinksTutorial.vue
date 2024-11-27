<script setup>
import { ref, onMounted } from 'vue'

const currentExample = ref('basicLinks') // Set default example
const userCode = ref('')
const output = ref('')

const introduction = {
  title: 'Images and Links in HTML',
  content: `Images and links are fundamental elements that make the web interactive and visually engaging:

• Images (img) add visual content to your pages
• Links (a) create connections between pages and resources
• Both elements require careful consideration for accessibility
• Proper structure helps with SEO and user experience`
}

const examples = {
  basicLinks: {
    title: 'Basic Links',
    template: `<!-- Internal page link -->
<a href="about.html">About Us</a>

<!-- External website link -->
<a href="https://example.com">Visit Example</a>

<!-- Link with title attribute -->
<a href="contact.html" title="Contact our team">Contact Us</a>

<!-- Link that opens in new tab -->
<a href="https://example.com" target="_blank" rel="noopener">
  Open in new tab
</a>`,
    instructions: 'Try modifying the href attributes and link text.',
    explanation: 'Links can point to internal pages or external websites. The target="_blank" attribute opens links in a new tab.'
  },
  basicImages: {
    title: 'Basic Images',
    template: `<!-- Basic image -->
<img src="quokka.jpg" alt="A smiling quokka on Rottnest Island">

<!-- Image with width and height -->
<img 
  src="beach.jpg" 
  alt="The Basin beach at sunset"
  width="800" 
  height="600"
>

<!-- Image with loading attribute -->
<img 
  src="cycling.jpg" 
  alt="Cyclists on coastal path"
  loading="lazy"
>`,
    instructions: 'Note how alt text describes the image content clearly.',
    explanation: 'Always include descriptive alt text for accessibility. The loading="lazy" attribute helps with performance.'
  },
  rottoHeader: {
    title: 'Rotto Rocks Header',
    template: `<header class="site-header">
  <!-- Logo as a link to home -->
  <a href="index.html" class="logo">
    <img 
      src="/images/rotto-rocks-logo.png" 
      alt="Rotto Rocks - Your Guide to Rottnest Island"
      width="200"
      height="60"
    >
  </a>

  <!-- Main Navigation -->
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="news.html">Island News</a></li>
      <li><a href="activities.html">Activities</a></li>
      <li><a href="wildlife.html">Wildlife</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
</header>`,
    instructions: 'This example shows how to create a header with logo and navigation. Note how the logo is both an image and a link.',
    explanation: 'The header combines a linked logo image with semantic navigation. The alt text on the logo provides context for screen readers.'
  },

  rottoNewsCard: {
    title: 'News Article Card',
    template: `<article class="news-card">
  <a href="news/new-ferry-service.html">
    <!-- Article thumbnail -->
    <img 
      src="/images/ferry-service.jpg"
      alt="New high-speed ferry arriving at Thomson Bay"
      width="400"
      height="300"
    >
    
    <h3>New High-Speed Ferry Service Announced</h3>
  </a>
  
  <p>Journey times to be cut by 30% with new vessel addition...</p>
  
  <footer>
    <time datetime="2024-03-15">March 15, 2024</time>
    <a href="news/new-ferry-service.html" class="read-more">
      Read full article
      <span class="sr-only">about new ferry service</span>
    </a>
  </footer>
</article>`,
    instructions: 'This example demonstrates a news card with linked image and title, plus an accessible "read more" link.',
    explanation: 'The article card uses semantic HTML with accessible links. Note the sr-only span that provides context for screen readers.'
  },

  rottoGallery: {
    title: 'Wildlife Gallery',
    template: `<section class="wildlife-gallery">
  <h2>Island Wildlife</h2>
  
  <div class="gallery-grid">
    <!-- Quokka Gallery Item -->
    <a href="wildlife/quokkas.html" class="gallery-item">
      <img 
        src="/images/quokka.jpg"
        alt="A smiling quokka in natural habitat"
        width="300"
        height="300"
        loading="lazy"
      >
      <h3>Quokkas</h3>
    </a>

    <!-- Osprey Gallery Item -->
    <a href="wildlife/ospreys.html" class="gallery-item">
      <img 
        src="/images/osprey.jpg"
        alt="Osprey perched on nest at West End"
        width="300"
        height="300"
        loading="lazy"
      >
      <h3>Ospreys</h3>
    </a>

    <!-- Seals Gallery Item -->
    <a href="wildlife/seals.html" class="gallery-item">
      <img 
        src="/images/seals.jpg"
        alt="New Zealand Fur Seals at Cathedral Rocks"
        width="300"
        height="300"
        loading="lazy"
      >
      <h3>New Zealand Fur Seals</h3>
    </a>
  </div>
</section>`,
    instructions: 'This gallery section shows how to create clickable image cards with lazy loading for better performance.',
    explanation: 'Each gallery item combines an image and heading in a link. The loading="lazy" attribute helps optimize page load times.'
  },

  rottoActivities: {
    title: 'Activities Section',
    template: `<section class="activities">
  <h2>Popular Activities</h2>
  
  <div class="activities-grid">
    <!-- Cycling Activity -->
    <a href="activities/cycling.html" class="activity-card">
      <img 
        src="/images/cycling.jpg"
        alt="Cyclists on coastal path near The Basin"
        width="400"
        height="300"
        loading="lazy"
      >
      <div class="activity-content">
        <h3>Island Cycling</h3>
        <p>Explore the island on two wheels</p>
      </div>
    </a>

    <!-- Snorkeling Activity -->
    <a href="activities/snorkeling.html" class="activity-card">
      <picture>
        <!-- Large screens -->
        <source
          media="(min-width: 800px)"
          srcset="/images/snorkeling-large.jpg"
        >
        <!-- Small screens -->
        <img 
          src="/images/snorkeling-small.jpg"
          alt="Snorkeler at Little Salmon Bay"
          width="400"
          height="300"
          loading="lazy"
        >
      </picture>
      <div class="activity-content">
        <h3>Snorkeling</h3>
        <p>Discover underwater treasures</p>
      </div>
    </a>
  </div>
</section>`,
    instructions: 'This example shows activity cards with responsive images using the picture element.',
    explanation: 'The activity cards use the picture element for art direction, serving different image crops based on screen size.'
  },

  rottoFooter: {
    title: 'Footer Links',
    template: `<footer class="site-footer">
  <div class="footer-content">
    <img 
      src="/images/footer-logo.png"
      alt="Rotto Rocks"
      width="150"
      height="45"
      class="footer-logo"
    >
    
    <nav class="footer-nav">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="privacy.html">Privacy Policy</a></li>
        <li><a href="sitemap.html">Sitemap</a></li>
      </ul>
    </nav>

    <div class="social-links">
      <h2>Follow Us</h2>
      <ul>
        <li>
          <a href="https://facebook.com/rottorocks" target="_blank" rel="noopener">
            <img 
              src="/images/facebook-icon.png"
              alt=""
              width="24"
              height="24"
            >
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/rottorocks" target="_blank" rel="noopener">
            <img 
              src="/images/instagram-icon.png"
              alt=""
              width="24"
              height="24"
            >
            <span>Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>`,
    instructions: 'This footer example shows different types of links including social media links with icons.',
    explanation: 'The footer includes both internal and external links. Social media icons have empty alt text since the visible text provides context.'
  }
}

const updatePreview = (code) => {
  output.value = code
}

const selectExample = (key) => {
  currentExample.value = key
  userCode.value = examples[key].template
  updatePreview(userCode.value)
}

// Initialize first example
onMounted(() => {
  selectExample('basicLinks')
})
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

    <div v-if="examples[currentExample]" class="tutorial-content">
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

    <div v-if="examples[currentExample]" class="explanation">
      <h3>How it works</h3>
      <p>{{ examples[currentExample].explanation }}</p>
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