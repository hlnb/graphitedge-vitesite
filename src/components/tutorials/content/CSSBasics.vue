<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Styling with CSS Basics</h1>
    
    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">What is CSS?</h2>
        <p class="mb-4">CSS (Cascading Style Sheets) is what makes websites look beautiful. It controls colors, layouts, spacing, and more!</p>
        
        <div class="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 class="font-semibold mb-2">Creating Your First CSS File</h3>
          <p class="mb-2">Create a new file called <code>styles.css</code> and link it in your HTML:</p>
          <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
&lt;!-- Add this in your &lt;head&gt; section --&gt;
&lt;link rel="stylesheet" href="styles.css"&gt;</pre>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Colors and Backgrounds</h2>
        <p class="mb-4">Let's add some colors to our Rotto Rocks website:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
/* styles.css */
body {
    background-color: #f0f8ff;
    color: #333333;
    font-family: Arial, sans-serif;
}

header {
    background-color: #0066cc;
    color: white;
    padding: 20px;
}

h1 {
    color: #003366;
}</pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Text Styling</h2>
        <p class="mb-4">Make your text more attractive:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
h1 {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
}

p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 15px;
}

.highlight {
    color: #0066cc;
    font-weight: bold;
}</pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Navigation Styling</h2>
        <p class="mb-4">Style your navigation menu:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}

nav li {
    margin: 0 15px;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

nav a:hover {
    color: #99ccff;
}</pre>
      </section>

      <div class="next-steps bg-gray-50 p-4 rounded-lg mt-8">
        <h2 class="text-xl font-semibold mb-4">Next Steps</h2>
        <p>In the next tutorial, we'll learn how to:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Create a photo gallery layout</li>
          <li>Make your design responsive</li>
          <li>Add cool hover effects</li>
          <li>Work with Flexbox for better layouts</li>
        </ul>
        <router-link 
          to="/tutorials/photo-gallery"
          class="inline-flex items-center text-primary hover:text-primary-dark transition-colors mt-4">
          Continue to "Creating a Photo Gallery"
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>