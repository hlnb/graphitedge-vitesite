<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Adding Images and Links</h1>
    
    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">Adding Images</h2>
        <p class="mb-4">Images make your website come alive! Let's add some pictures of Rottnest Island:</p>
        
        <div class="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 class="font-semibold mb-2">Image Syntax</h3>
          <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
&lt;img src="path/to/image.jpg" alt="Description of the image"&gt;</pre>
          <p class="mt-2">The <code>alt</code> text is important for accessibility and SEO!</p>
        </div>

        <p class="mb-4">Add these images to your page:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
&lt;h2&gt;Beautiful Beaches&lt;/h2&gt;
&lt;img src="images/basin.jpg" alt="The Basin beach with crystal clear waters"&gt;
&lt;img src="images/pinky-beach.jpg" alt="Pinky Beach with lighthouse view"&gt;

&lt;h2&gt;Meet the Quokkas&lt;/h2&gt;
&lt;img src="images/quokka.jpg" alt="Smiling quokka on Rottnest Island"&gt;</pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Creating Links</h2>
        <p class="mb-4">Links help visitors navigate your website. Let's update our navigation menu with links:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
&lt;nav&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="index.html"&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="beaches.html"&gt;Beaches&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="activities.html"&gt;Activities&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="gallery.html"&gt;Gallery&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Organizing Content</h2>
        <p class="mb-4">Let's organize our content into sections:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
&lt;header&gt;
    &lt;h1&gt;Welcome to Rotto Rocks&lt;/h1&gt;
    &lt;nav&gt;
        <!-- Navigation menu here -->
    &lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
    &lt;section&gt;
        &lt;h2&gt;About Rottnest Island&lt;/h2&gt;
        &lt;p&gt;Your content here...&lt;/p&gt;
    &lt;/section&gt;

    &lt;section&gt;
        &lt;h2&gt;Beautiful Beaches&lt;/h2&gt;
        &lt;img src="images/basin.jpg" alt="The Basin beach"&gt;
    &lt;/section&gt;
&lt;/main&gt;

&lt;footer&gt;
    &lt;p&gt;&copy; 2024 Rotto Rocks. All rights reserved.&lt;/p&gt;
&lt;/footer&gt;</pre>
      </section>

      <div class="next-steps bg-gray-50 p-4 rounded-lg mt-8">
        <h2 class="text-xl font-semibold mb-4">Next Steps</h2>
        <p>In the next tutorial, we'll learn how to:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Style your pages with CSS</li>
          <li>Add colors and backgrounds</li>
          <li>Make your text look beautiful</li>
          <li>Create attractive layouts</li>
        </ul>
        <router-link 
          to="/tutorials/css-basics"
          class="inline-flex items-center text-primary hover:text-primary-dark transition-colors mt-4">
          Continue to "Styling with CSS Basics"
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>