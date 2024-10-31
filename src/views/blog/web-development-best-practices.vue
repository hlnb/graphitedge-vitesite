<template>
  <article class="prose prose-lg max-w-4xl mx-auto px-4 py-12">
    <h1>Web Development Best Practices for 2024</h1>
    
    <div class="lead">
      Drawing from my 20+ years of industry experience and keeping current with modern standards, 
      here are the essential best practices for web development in 2024.
    </div>

    <h2>Core Principles</h2>

    <h3>1. Performance First</h3>
    <ul>
      <li>Optimise images and assets</li>
      <li>Implement lazy loading</li>
      <li>Minimise HTTP requests</li>
      <li>Use appropriate caching strategies</li>
    </ul>

    <h3>2. Accessibility (A11y)</h3>
    <ul>
      <li>Semantic HTML</li>
      <li>ARIA labels when needed</li>
      <li>Keyboard navigation</li>
      <li>Colour contrast compliance</li>
      <li>Screen reader compatibility</li>
    </ul>

    <h3>3. Security</h3>
    <ul>
      <li>Input validation</li>
      <li>XSS prevention</li>
      <li>HTTPS implementation</li>
      <li>Secure authentication practices</li>
    </ul>

    <h2>Code Examples</h2>

    <h3>Code Organisation</h3>
    <pre><code class="language-javascript">
// Poor Practice
const userData = {
    name: 'John',
    email: 'john@example.com',
    validateUser: function() { /* ... */ },
    processData: function() { /* ... */ },
    updateUI: function() { /* ... */ },
    handleAPICall: function() { /* ... */ }
};

// Better Practice - Separation of Concerns
class UserValidator {
    validate(user) {
        // Validation logic
    }
}

class UserProcessor {
    process(userData) {
        // Processing logic
    }
}
    </code></pre>

    <h3>Error Handling</h3>
    <pre><code class="language-javascript">
// Poor Practice
try {
    doSomething();
} catch (error) {
    console.log(error);
}

// Better Practice
try {
    await userService.updateProfile(userData);
} catch (error) {
    if (error instanceof ValidationError) {
        notifyUser('Please check your input');
        logger.warn('Validation failed', { userData, error });
    } else {
        notifyUser('An unexpected error occurred');
        logger.error('Unhandled error', { error });
    }
}
    </code></pre>

    <h2>Modern Development Workflow</h2>

    <h3>1. Planning and Documentation</h3>
    <ul>
      <li>Clear requirements documentation</li>
      <li>API documentation</li>
      <li>Code comments for complex logic</li>
      <li>README maintenance</li>
    </ul>

    <h3>2. Development Environment</h3>
    <ul>
      <li>Consistent formatting</li>
      <li>Linting</li>
      <li>Automated testing</li>
      <li>CI/CD implementation</li>
    </ul>

    <h3>3. Testing Strategy</h3>
    <ul>
      <li>Unit tests</li>
      <li>Integration tests</li>
      <li>End-to-end testing</li>
      <li>Performance testing</li>
    </ul>

    <div class="mt-8">
      <p><em>Remember: These practices evolve constantly. Stay updated with industry trends and adjust accordingly.</em></p>
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
  @apply bg-gray-800 text-white p-4 rounded-lg overflow-x-auto my-4;
}

code {
  @apply text-sm;
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
</style> 