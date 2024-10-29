<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Creating a Photo Gallery</h1>
    
    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">Setting Up the Gallery</h2>
        <p class="mb-4">Let's create a beautiful gallery to showcase Rottnest Island photos:</p>
        
        <div class="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 class="font-semibold mb-2">HTML Structure</h3>
          <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
&lt;div class="gallery"&gt;
    &lt;div class="gallery-item"&gt;
        &lt;img src="images/basin.jpg" alt="The Basin"&gt;
        &lt;p&gt;The Basin&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="gallery-item"&gt;
        &lt;img src="images/lighthouse.jpg" alt="Wadjemup Lighthouse"&gt;
        &lt;p&gt;Wadjemup Lighthouse&lt;/p&gt;
    &lt;/div&gt;
    &lt;!-- Add more gallery items --&gt;
&lt;/div&gt;</pre>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Flexbox Layout</h2>
        <p class="mb-4">Use Flexbox to create a responsive gallery layout:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
}

.gallery-item {
    flex: 1 1 300px;
    max-width: 400px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.gallery-item p {
    padding: 10px;
    text-align: center;
    background: white;
    margin: 0;
}</pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Adding Hover Effects</h2>
        <p class="mb-4">Make your gallery interactive with hover effects:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
.gallery-item {
    transition: transform 0.3s ease;
}

.gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.gallery-item img {
    transition: transform 0.3s ease;
}

.gallery-item:hover img {
    transform: scale(1.1);
}</pre>
      </section>

      <div class="next-steps bg-gray-50 p-4 rounded-lg mt-8">
        <h2 class="text-xl font-semibold mb-4">Next Steps</h2>
        <p>In the next tutorial, we'll learn how to:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Create a contact form</li>
          <li>Style form elements</li>
          <li>Add form validation</li>
          <li>Make forms user-friendly</li>
        </ul>
        <router-link 
          to="/tutorials/contact-form"
          class="inline-flex items-center text-primary hover:text-primary-dark transition-colors mt-4">
          Continue to "Contact Form Creation"
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>