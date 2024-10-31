<template>
  <article class="prose prose-lg max-w-4xl mx-auto px-4 py-12">
    <h1>Building Responsive Websites: Best Practices for 2024</h1>
    
    <div class="lead">
      With the ever-growing variety of devices accessing the web, building truly responsive 
      websites has never been more crucial. Drawing from years of experience and current 
      industry standards, here's your comprehensive guide to creating responsive websites 
      that work seamlessly across all devices.
    </div>

    <h2>Core Principles of Responsive Design</h2>
    <div class="principles-grid">
      <div class="principle-card">
        <h3>Fluid Grids</h3>
        <p>Use relative units and flexible grid systems</p>
      </div>
      <div class="principle-card">
        <h3>Flexible Images</h3>
        <p>Implement responsive images that scale appropriately</p>
      </div>
      <div class="principle-card">
        <h3>Media Queries</h3>
        <p>Adapt layouts based on device characteristics</p>
      </div>
      <div class="principle-card">
        <h3>Mobile First</h3>
        <p>Design for mobile devices before desktop</p>
      </div>
    </div>

    <h2>Modern CSS Techniques</h2>

    <h3>1. Fluid Typography</h3>
    <pre><code class="language-css text-white">
/* Responsive font size using clamp */
:root {
  --fluid-type-min: 1rem;    /* 16px */
  --fluid-type-max: 1.25rem; /* 20px */
}

body {
  font-size: clamp(
    var(--fluid-type-min),
    calc(1rem + 0.5vw),
    var(--fluid-type-max)
  );
}

/* Responsive headings */
h1 {
  font-size: clamp(2rem, 5vw + 1rem, 4rem);
}
    </code></pre>

    <h3>2. Modern Layout Techniques</h3>
    <pre><code class="language-css text-white">
/* Responsive grid layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 300px), 1fr)
  );
  gap: clamp(1rem, 3vw, 2rem);
}

/* Flexible container with max-width */
.container {
  width: min(100% - 2rem, 1200px);
  margin-inline: auto;
}
    </code></pre>

    <h3>3. Container Queries</h3>
    <pre><code class="language-css text-white">
/* Modern container query */
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 1rem;
  }
}

.card-container {
  container-type: inline-size;
  container-name: card;
}
    </code></pre>

    <h2>Responsive Images Best Practices</h2>

    <h3>1. Art Direction</h3>
    <pre><code class="language-html text-white">
&lt;picture&gt;
  &lt;source
    media="(min-width: 800px)"
    srcset="hero-desktop.jpg"
  &gt;
  &lt;source
    media="(min-width: 400px)"
    srcset="hero-tablet.jpg"
  &gt;
  &lt;img 
    src="hero-mobile.jpg" 
    alt="Hero image"
    loading="lazy"
  &gt;
&lt;/picture&gt;
    </code></pre>

    <h3>2. Resolution Switching</h3>
    <pre><code class="language-html text-white">
&lt;img
  srcset="
    image-320w.jpg 320w,
    image-480w.jpg 480w,
    image-800w.jpg 800w
  "
  sizes="
    (max-width: 320px) 280px,
    (max-width: 480px) 440px,
    800px
  "
  src="image-800w.jpg"
  alt="Responsive image"
  loading="lazy"
&gt;
    </code></pre>

    <h2>Performance Considerations</h2>
    <div class="performance-grid">
      <div class="performance-card">
        <h3>Image Optimization</h3>
        <ul>
          <li>Use modern formats (WebP, AVIF)</li>
          <li>Implement lazy loading</li>
          <li>Optimize for different resolutions</li>
          <li>Compress effectively</li>
        </ul>
      </div>
      <div class="performance-card">
        <h3>CSS Optimization</h3>
        <ul>
          <li>Minimize unused CSS</li>
          <li>Use CSS containment</li>
          <li>Implement critical CSS</li>
          <li>Leverage CSS variables</li>
        </ul>
      </div>
    </div>

    <h2>Testing Strategies</h2>
    <div class="testing-section">
      <h3>Device Testing</h3>
      <ul>
        <li>Test on real devices when possible</li>
        <li>Use browser developer tools</li>
        <li>Implement automated testing</li>
        <li>Check various orientations</li>
      </ul>

      <h3>Browser Testing</h3>
      <ul>
        <li>Test across major browsers</li>
        <li>Check older versions</li>
        <li>Verify fallback behavior</li>
        <li>Monitor analytics for usage patterns</li>
      </ul>
    </div>

    <h2>Common Pitfalls to Avoid</h2>
    <div class="pitfalls-grid">
      <div class="pitfall-card">
        <h3>Fixed Dimensions</h3>
        <p>Avoid hard-coded widths and heights that break responsiveness</p>
      </div>
      <div class="pitfall-card">
        <h3>Desktop-Only Testing</h3>
        <p>Test across multiple devices and screen sizes regularly</p>
      </div>
      <div class="pitfall-card">
        <h3>Ignoring Touch Interfaces</h3>
        <p>Ensure adequate touch targets and touch-friendly interactions</p>
      </div>
    </div>

    <h2>Tools and Resources</h2>
    <div class="resources-section">
      <ul>
        <li>Browser DevTools</li>
        <li>Responsive Design Checker</li>
        <li>Mobile-Friendly Test</li>
        <li>Performance Testing Tools</li>
      </ul>
    </div>

    <div class="conclusion mt-8">
      <p><em>Building responsive websites is no longer optional – it's a fundamental 
      requirement. By following these best practices and staying updated with modern 
      CSS features, you can create websites that provide an optimal experience across 
      all devices and screen sizes.</em></p>
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

.principles-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 my-8;
}

.principle-card {
  @apply bg-gray-50 p-6 rounded-lg;
}

pre {
  @apply bg-gray-800 p-4 rounded-lg overflow-x-auto my-4;
}

code {
  @apply text-sm;
}

.performance-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 my-8;
}

.performance-card {
  @apply bg-gray-50 p-6 rounded-lg;
}

.testing-section {
  @apply bg-gray-50 p-6 rounded-lg my-8;
}

.pitfalls-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6 my-8;
}

.pitfall-card {
  @apply bg-gray-50 p-6 rounded-lg;
}

.resources-section {
  @apply bg-gray-50 p-6 rounded-lg;
}

.conclusion {
  @apply border-t border-gray-200 pt-8 text-gray-600;
}
</style> 