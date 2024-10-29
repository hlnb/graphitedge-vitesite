<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Getting Started with Eleventy</h1>
    
    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">Introduction to Eleventy</h2>
        <p class="mb-4">Learn how to build a fast, static version of Rotto Rocks using Eleventy (11ty)!</p>
        
        <div class="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 class="font-semibold mb-2">Setting Up Eleventy</h3>
          <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
npm init -y
npm install @11ty/eleventy
</pre>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Creating Content with Markdown</h2>
        <p class="mb-4">Create your first markdown content file:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
<!-- src/beaches/the-basin.md -->
---
title: The Basin
layout: beach.njk
image: /images/basin.jpg
---

# The Basin

The Basin is one of Rottnest Island's most popular swimming spots, 
featuring crystal clear waters and a natural swimming pool formation.</pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Creating Layouts</h2>
        <p class="mb-4">Set up a base layout template:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
<!-- src/_includes/base.njk -->
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;{{ title }} - Rotto Rocks&lt;/title&gt;
    &lt;link rel="stylesheet" href="/css/style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    {% include "header.njk" %}
    
    &lt;main&gt;
        {{ content | safe }}
    &lt;/main&gt;
    
    {% include "footer.njk" %}
&lt;/body&gt;
&lt;/html&gt;</pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Collections and Tags</h2>
        <p class="mb-4">Organize your content with collections:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
// .eleventy.js
module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("beaches", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/beaches/*.md");
  });
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};</pre>
      </section>

      <div class="next-steps bg-gray-50 p-4 rounded-lg mt-8">
        <h2 class="text-xl font-semibold mb-4">Next Steps</h2>
        <p>In the next tutorial, we'll learn how to:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Add a weather widget to your site</li>
          <li>Work with APIs</li>
          <li>Handle dynamic data</li>
          <li>Create interactive components</li>
        </ul>
        <router-link 
          to="/tutorials/weather-widget"
          class="inline-flex items-center text-primary hover:text-primary-dark transition-colors mt-4">
          Continue to "Adding a Weather Widget"
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>