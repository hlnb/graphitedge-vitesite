<template>
  <article class="prose prose-lg max-w-4xl mx-auto px-4 py-12">
    <h1>Getting Started with Web Development: A Beginner's Guide</h1>
    
    <div class="lead">
      After 20+ years in web development and training countless students, I've developed 
      a clear pathway for beginners to enter the field. This guide combines proven learning 
      strategies with modern best practices to help you start your web development journey.
    </div>

    <h2>The Foundation Triangle</h2>

    <h3>1. HTML - Structure First</h3>
    <ul>
      <li>Understanding semantic markup</li>
      <li>Document structure</li>
      <li>Forms and input elements</li>
      <li>Accessibility basics</li>
    </ul>

    <pre><code class="language-html text-white">
<!-- Example of semantic HTML -->
<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Welcome to Web Development</h1>
    <p>This is a semantic HTML example.</p>
  </article>
</main>

<footer>
  <p>&copy; 2024 Your Name</p>
</footer>
    </code></pre>

    <h3>2. CSS - Styling and Layout</h3>
    <ul>
      <li>Selectors and specificity</li>
      <li>Box model and layout</li>
      <li>Flexbox and Grid</li>
      <li>Responsive design</li>
    </ul>

    <pre><code class="language-css">
/* Modern CSS example */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .card {
    margin-bottom: 1rem;
  }
}
    </code></pre>

    <h3>3. JavaScript - Interactivity</h3>
    <ul>
      <li>Basic syntax and data types</li>
      <li>DOM manipulation</li>
      <li>Event handling</li>
      <li>Async programming</li>
    </ul>

    <pre><code class="language-javascript">
// Modern JavaScript example
const form = document.querySelector('#contactForm');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  submitButton.disabled = true;
  
  try {
    const formData = new FormData(form);
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) throw new Error('Submission failed');
    
    showSuccess('Message sent successfully!');
  } catch (error) {
    showError('Failed to send message. Please try again.');
  } finally {
    submitButton.disabled = false;
  }
});
    </code></pre>

    <h2>Learning Path</h2>

    <h3>Phase 1: Basics (2-3 months)</h3>
    <ul>
      <li>HTML structure and elements</li>
      <li>CSS fundamentals and layouts</li>
      <li>Basic JavaScript and DOM</li>
      <li>Version control with Git</li>
    </ul>

    <h3>Phase 2: Advanced Concepts (3-4 months)</h3>
    <ul>
      <li>Responsive design patterns</li>
      <li>CSS frameworks (Tailwind, Bootstrap)</li>
      <li>JavaScript frameworks (Vue, React)</li>
      <li>API integration</li>
    </ul>

    <h3>Phase 3: Professional Skills (2-3 months)</h3>
    <ul>
      <li>Build tools and deployment</li>
      <li>Testing and debugging</li>
      <li>Performance optimization</li>
      <li>Code review practices</li>
    </ul>

    <h2>Essential Tools</h2>
    <ul>
      <li>Code Editor: VS Code with extensions</li>
      <li>Browser DevTools</li>
      <li>Git for version control</li>
      <li>Terminal basics</li>
    </ul>

    <h2>Practice Projects</h2>
    <ol>
      <li>Personal portfolio website</li>
      <li>Interactive form with validation</li>
      <li>API-driven dashboard</li>
      <li>Responsive landing page</li>
      <li>Full-stack web application</li>
    </ol>

    <div class="tips mt-8">
      <h2>Pro Tips</h2>
      <ul>
        <li>Code every day, even if just for 30 minutes</li>
        <li>Build real projects, not just tutorials</li>
        <li>Join developer communities</li>
        <li>Read documentation thoroughly</li>
        <li>Learn keyboard shortcuts</li>
      </ul>
    </div>

    <div class="conclusion mt-8">
      <p><em>Remember: Web development is a journey, not a destination. Focus on understanding 
      core concepts deeply before moving to advanced topics. Practice regularly and don't 
      be afraid to make mistakes – they're valuable learning opportunities.</em></p>
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

pre {
  @apply bg-gray-500 p-4 rounded-lg overflow-x-auto my-4;
}

code {
  @apply text-sm text-white;
}

/* If you need to specifically target HTML code blocks */
code.language-html {
  @apply text-white;
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

ul, ol {
  @apply list-disc list-inside mb-4 ml-4;
}

ol {
  @apply list-decimal;
}

li {
  @apply text-gray-700 mb-2;
}

.tips {
  @apply bg-gray-50 p-6 rounded-lg;
}

.conclusion {
  @apply border-t border-gray-200 pt-8 text-gray-600;
}
</style> 