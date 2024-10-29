<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Getting Started with HTML</h1>
    
    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">What is HTML?</h2>
        <p class="mb-4">HTML (HyperText Markup Language) is the building block of every website. Think of it as the skeleton that gives structure to web pages. We'll use HTML to create our first webpage for Rotto Rocks!</p>
        
        <div class="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 class="font-semibold mb-2">Your First HTML File</h3>
          <p class="mb-2">Create a new file called <code>index.html</code> and add this code:</p>
          <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Welcome to Rotto Rocks&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to Rotto Rocks&lt;/h1&gt;
    &lt;p&gt;Discover the beauty of Rottnest Island&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Basic Page Structure</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><code>&lt;!DOCTYPE html&gt;</code> - Tells browsers this is an HTML5 document</li>
          <li><code>&lt;html&gt;</code> - The container for all HTML content</li>
          <li><code>&lt;head&gt;</code> - Contains metadata about the page</li>
          <li><code>&lt;body&gt;</code> - Contains the visible content</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Adding More Content</h2>
        <p class="mb-4">Let's add more content about Rottnest Island:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
&lt;body&gt;
    &lt;h1&gt;Welcome to Rotto Rocks&lt;/h1&gt;
    
    &lt;h2&gt;About Rottnest Island&lt;/h2&gt;
    &lt;p&gt;Rottnest Island is a beautiful paradise located off the coast of Western Australia.&lt;/p&gt;
    
    &lt;h2&gt;What to Expect&lt;/h2&gt;
    &lt;ul&gt;
        &lt;li&gt;Beautiful beaches&lt;/li&gt;
        &lt;li&gt;Friendly quokkas&lt;/li&gt;
        &lt;li&gt;Amazing cycling trails&lt;/li&gt;
        &lt;li&gt;Crystal clear waters&lt;/li&gt;
    &lt;/ul&gt;
&lt;/body&gt;</pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Creating a Navigation Menu</h2>
        <p class="mb-4">Add this navigation menu at the top of your &lt;body&gt; section:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
&lt;nav&gt;
    &lt;ul&gt;
        &lt;li&gt;Home&lt;/li&gt;
        &lt;li&gt;Beaches&lt;/li&gt;
        &lt;li&gt;Activities&lt;/li&gt;
        &lt;li&gt;Gallery&lt;/li&gt;
        &lt;li&gt;Contact&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</pre>
      </section>

      <div class="next-steps bg-gray-50 p-4 rounded-lg mt-8">
        <h2 class="text-xl font-semibold mb-4">Next Steps</h2>
        <p>In the next tutorial, we'll learn how to:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Add images of beautiful Rottnest Island</li>
          <li>Create links between different pages</li>
          <li>Organize your content better</li>
        </ul>
        <router-link 
          to="/tutorials/images-links"
          class="inline-flex items-center text-primary hover:text-primary-dark transition-colors mt-4">
          Continue to "Adding Images and Links"
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>