<script setup lang="ts">
const tutorials = [
  {
    name: 'HTML Images',
    content: 'Learn how to properly add and optimize images in your web pages:',
    code: `<!-- Basic Image Syntax -->
<img src="path/to/image.jpg" alt="Descriptive text">

<!-- Complete Image Attributes -->
<img 
  src="quokka.jpg"
  alt="Smiling quokka on Rottnest Island"
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
>

<!-- Responsive Images -->
<img 
  src="quokka-large.jpg"
  srcset="quokka-small.jpg 300w,
          quokka-medium.jpg 600w,
          quokka-large.jpg 900w"
  sizes="(max-width: 320px) 280px,
         (max-width: 640px) 580px,
         800px"
  alt="Quokka in natural habitat"
>

<!-- Picture Element for Art Direction -->
<picture>
  <source 
    media="(min-width: 800px)"
    srcset="landscape-quokka.jpg"
  >
  <source 
    media="(min-width: 400px)"
    srcset="portrait-quokka.jpg"
  >
  <img 
    src="fallback-quokka.jpg" 
    alt="Quokka portrait"
  >
</picture>`
  },
  {
    name: 'Image Formats',
    content: 'Understanding different image formats and when to use them:',
    code: `<!-- JPEG: Best for photographs -->
<img src="beach-photo.jpg" alt="Rottnest Island beach">

<!-- PNG: Best for graphics with transparency -->
<img src="logo.png" alt="Website logo">

<!-- WebP: Modern format with better compression -->
<picture>
  <source type="image/webp" srcset="image.webp">
  <img src="image.jpg" alt="Fallback for older browsers">
</picture>

<!-- SVG: Best for logos and icons -->
<img src="icon.svg" alt="Menu icon">

<!-- Using SVG inline for better control -->
<svg width="24" height="24" viewBox="0 0 24 24">
  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
</svg>`
  },
  {
    name: 'HTML Links',
    content: 'Create various types of links and understand their attributes:',
    code: `<!-- Basic Links -->
<a href="about.html">About Us</a>

<!-- External Links -->
<a 
  href="https://external-site.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit External Site
</a>

<!-- Email Links -->
<a 
  href="mailto:contact@example.com?subject=Inquiry&body=Hello"
>
  Email Us
</a>

<!-- Phone Links -->
<a href="tel:+61234567890">Call Us</a>

<!-- File Downloads -->
<a 
  href="brochure.pdf"
  download="rottnest-guide.pdf"
>
  Download Brochure
</a>

<!-- Section Links -->
<a href="#contact">Jump to Contact</a>

<!-- Navigation with Icons -->
<nav>
  <a href="/" class="nav-link">
    <svg><!-- home icon --></svg>
    Home
  </a>
</nav>`
  },
  {
    name: 'Image Best Practices',
    content: 'Follow these best practices for better performance and accessibility:',
    code: `<!-- Image Optimization Checklist -->

1. Always include alt text
<img src="photo.jpg" alt="Descriptive text">

2. Specify dimensions to prevent layout shift
<img 
  src="photo.jpg" 
  width="800" 
  height="600" 
  alt="Description"
>

3. Use lazy loading for images below the fold
<img 
  loading="lazy" 
  src="photo.jpg" 
  alt="Description"
>

4. Provide fallbacks for modern formats
<picture>
  <source type="image/webp" srcset="image.webp">
  <source type="image/jpeg" srcset="image.jpg">
  <img src="image.jpg" alt="Description">
</picture>

5. Use appropriate image sizes
<img 
  src="image.jpg"
  srcset="image-300.jpg 300w, image-600.jpg 600w"
  sizes="(max-width: 600px) 300px, 600px"
  alt="Description"
>`
  }
];

const exercise = {
  title: 'Rotto Rocks Image Gallery',
  introduction: 'Create an image gallery for the Rotto Rocks website using proper HTML image and link techniques.',
  steps: [
    {
      name: 'Project Structure',
      content: 'Set up your project folders:',
      code: `📁 rotto-rocks/
  ├── index.html
  ├── gallery.html
  └── images/
      ├── hero/
      │   ├── hero-large.jpg
      │   ├── hero-medium.jpg
      │   └── hero-small.jpg
      ├── locations/
      │   ├── basin.jpg
      │   ├── lighthouse.jpg
      │   └── parker-point.jpg
      └── wildlife/
          ├── quokka.jpg
          ├── seals.jpg
          └── birds.jpg`
    },
    {
      name: 'Gallery Page Structure',
      content: 'Create the gallery.html page with responsive images:',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery - Rotto Rocks</title>
</head>
<body>
    <header>
        <h1>Rottnest Island Gallery</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="gallery.html" aria-current="page">Gallery</a>
        </nav>
    </header>

    <main>
        <section class="hero">
            <picture>
                <source 
                    media="(min-width: 1024px)" 
                    srcset="images/hero/hero-large.jpg"
                >
                <source 
                    media="(min-width: 640px)" 
                    srcset="images/hero/hero-medium.jpg"
                >
                <img 
                    src="images/hero/hero-small.jpg" 
                    alt="Aerial view of Rottnest Island"
                    width="1200"
                    height="600"
                >
            </picture>
        </section>

        <section class="locations">
            <h2>Popular Locations</h2>
            <div class="gallery-grid">
                <figure>
                    <img 
                        src="images/locations/basin.jpg"
                        alt="Crystal clear waters of The Basin"
                        loading="lazy"
                        width="400"
                        height="300"
                    >
                    <figcaption>The Basin</figcaption>
                </figure>
                <!-- Add more location images -->
            </div>
        </section>

        <section class="wildlife">
            <h2>Island Wildlife</h2>
            <div class="gallery-grid">
                <figure>
                    <img 
                        src="images/wildlife/quokka.jpg"
                        alt="Smiling quokka in natural habitat"
                        loading="lazy"
                        width="400"
                        height="300"
                    >
                    <figcaption>Famous Quokka</figcaption>
                </figure>
                <!-- Add more wildlife images -->
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Rotto Rocks</p>
    </footer>
</body>
</html>`
    }
  ],
  imageResources: [
    {
      name: 'Free Image Resources',
      links: [
        {
          title: 'Unsplash',
          url: 'https://unsplash.com/s/photos/rottnest-island',
          description: 'High-quality, free Rottnest Island photos'
        },
        {
          title: 'Pexels',
          url: 'https://www.pexels.com/search/rottnest%20island/',
          description: 'Free stock photos of Rottnest Island'
        },
        {
          title: 'Tourism WA',
          url: 'https://www.tourism.wa.gov.au/media-centre/image-gallery',
          description: 'Official tourism images (requires attribution)'
        }
      ]
    }
  ],
  checkpoints: [
    'Verify all images have appropriate alt text',
    'Check that responsive images load correctly at different screen sizes',
    'Ensure lazy loading is implemented for below-fold images',
    'Test that all links work correctly',
    'Validate HTML using W3C Validator',
    'Check image loading performance'
  ]
};

const resources = [
  {
    name: 'Documentation',
    links: [
      {
        title: 'MDN Images Guide',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML',
        description: 'Complete guide to HTML images'
      },
      {
        title: 'MDN Links Guide',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks',
        description: 'Comprehensive guide to HTML links'
      },
      {
        title: 'Web.dev Image Guide',
        url: 'https://web.dev/learn/images/',
        description: 'Modern image optimization techniques'
      }
    ]
  }
];

const nextTutorial = {
  name: 'CSS Basics',
  path: '/tutorials/css-basics'
} as const;

const imageSearchGuide = {
  title: 'Finding Images for Your Project',
  sections: [
    {
      name: 'Rottnest Island Images',
      platforms: [
        {
          name: 'Unsplash',
          url: 'https://unsplash.com/s/photos/rottnest-island',
          searchTips: [
            'Use search terms: "Rottnest Island", "The Basin Rottnest", "Quokka"',
            'Filter by orientation (landscape/portrait) as needed',
            'Check image resolution (prefer 2000px+ width for hero images)',
            'Download both regular and compressed versions'
          ],
          license: 'Free to use without attribution (but attribution appreciated)'
        },
        {
          name: 'Tourism WA Media Gallery',
          url: 'https://www.tourism.wa.gov.au/media-centre/image-gallery',
          searchTips: [
            'Create a free account to access the media gallery',
            'Search for "Rottnest Island" in the search bar',
            'Filter by category: Beaches, Wildlife, Activities',
            'Download high-resolution versions for better quality',
            'Check usage rights and required attributions'
          ],
          license: 'Free for promotional use with attribution to Tourism WA'
        },
        {
          name: 'Rottnest Island Authority',
          url: 'https://www.rottnestisland.com/media-centre',
          searchTips: [
            'Navigate to the Media Resources section',
            'Look for official promotional images',
            'Contact media team for high-resolution versions',
            'Check seasonal photo galleries'
          ],
          license: 'Requires permission and attribution for commercial use'
        }
      ]
    },
    {
      name: 'Image Specifications',
      recommendations: [
        {
          type: 'Hero Images',
          specs: [
            'Minimum width: 2000px',
            'Aspect ratio: 16:9 or 21:9',
            'Format: JPEG for photos, PNG for graphics',
            'Optimize for web using tools like ImageOptim'
          ]
        },
        {
          type: 'Gallery Images',
          specs: [
            'Width: 800px-1200px',
            'Aspect ratio: 4:3 or 3:2',
            'Format: JPEG with 80% quality',
            'Create thumbnails at 400px width'
          ]
        },
        {
          type: 'Thumbnail Images',
          specs: [
            'Width: 400px',
            'Aspect ratio: 1:1 (square)',
            'Format: JPEG with 70% quality',
            'Enable lazy loading'
          ]
        }
      ]
    },
    {
      name: 'Image Optimization Workflow',
      steps: [
        {
          title: 'Download and Organize',
          instructions: [
            'Create an "images-raw" folder for originals',
            'Create an "images" folder for optimized versions',
            'Use descriptive filenames (e.g., "basin-beach-aerial.jpg")',
            'Organize by category (locations, wildlife, activities)'
          ]
        },
        {
          title: 'Prepare Images',
          instructions: [
            'Crop images to required aspect ratios',
            'Resize to needed dimensions',
            'Create multiple sizes for responsive images',
            'Optimize using compression tools'
          ]
        },
        {
          title: 'Implementation',
          instructions: [
            'Use appropriate HTML structure',
            'Implement lazy loading',
            'Add descriptive alt text',
            'Test across different devices'
          ]
        }
      ]
    }
  ]
};
</script>

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

<style scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>