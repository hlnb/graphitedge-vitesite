<script setup lang="ts">
import { computed } from 'vue';

interface Tutorial {
  name: string;
  content: string;
  code: string;
}

const tutorials = computed(() => [
  {
    name: 'HTML Document Structure',
    content: 'Every HTML document follows a standard structure that tells browsers how to interpret and display the content:',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>`
  },
  {
    name: 'Essential HTML Elements',
    content: 'HTML uses semantic elements to give meaning to content. Here are the most important ones you should know:',
    code: `<!-- Headings for different levels of importance -->
<h1>Main Title</h1>
<h2>Subtitle</h2>
<h3>Section Header</h3>

<!-- Paragraph text -->
<p>This is a paragraph of text. HTML will automatically handle the line breaks and spacing.</p>

<!-- Lists -->
<ul>
    <li>Unordered list item</li>
    <li>Another bullet point</li>
</ul>

<ol>
    <li>First ordered item</li>
    <li>Second ordered item</li>
</ol>

<!-- Text emphasis -->
<p>This is <strong>important</strong> and this is <em>emphasized</em>.</p>

<!-- Semantic sectioning -->
<header>
    <nav>Navigation menu goes here</nav>
</header>

<main>
    <article>
        <section>A logical section of content</section>
    </article>
</main>

<footer>
    <p>Copyright information or site links</p>
</footer>`
  },
  {
    name: 'HTML Attributes',
    content: 'Attributes provide additional information or functionality to HTML elements:',
    code: `<!-- Basic attributes -->
<div id="unique-identifier" class="styling-class">
    Content with identification and styling hooks
</div>

<!-- Image with required attributes -->
<img src="path/to/image.jpg" alt="Descriptive text for accessibility">

<!-- Links with different attributes -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    Opens in new tab
</a>

<!-- Form input attributes -->
<input type="text" name="username" required placeholder="Enter username">
<input type="email" name="email" disabled value="admin@example.com">

<!-- Custom data attributes -->
<div data-user-id="123" data-role="admin">
    Custom data for JavaScript use
</div>`
  },
  {
    name: 'Forms and User Input',
    content: 'Forms are essential for collecting user input. Here\'s how to create accessible and user-friendly forms:',
    code: `<form action="/submit" method="POST">
    <!-- Group related fields -->
    <fieldset>
        <legend>Personal Information</legend>
        
        <!-- Text input with label -->
        <div class="form-group">
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        
        <!-- Email input -->
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <!-- Select dropdown -->
        <div class="form-group">
            <label for="country">Country:</label>
            <select id="country" name="country">
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
            </select>
        </div>
        
        <!-- Radio buttons -->
        <div class="form-group">
            <p>Preferred Contact Method:</p>
            <input type="radio" id="email-pref" name="contact" value="email">
            <label for="email-pref">Email</label>
            
            <input type="radio" id="phone-pref" name="contact" value="phone">
            <label for="phone-pref">Phone</label>
        </div>
        
        <!-- Checkbox -->
        <div class="form-group">
            <input type="checkbox" id="subscribe" name="subscribe">
            <label for="subscribe">Subscribe to newsletter</label>
        </div>
    </fieldset>
    
    <!-- Form buttons -->
    <button type="submit">Submit</button>
    <button type="reset">Reset Form</button>
</form>`
  },
  {
    name: 'HTML Best Practices',
    content: 'Following these best practices will make your HTML more maintainable and accessible:',
    code: `<!-- Use semantic elements for better accessibility -->
<header role="banner">
    <nav role="navigation" aria-label="Main navigation">
        <ul>
            <li><a href="#" aria-current="page">Home</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
</header>

<!-- Use ARIA labels when semantic HTML isn't enough -->
<div role="alert" aria-live="polite">
    Important notification
</div>

<!-- Properly structure content -->
<article>
    <h1>Main Article Title</h1>
    <p>Introduction paragraph...</p>
    
    <section>
        <h2>Section Title</h2>
        <p>Section content...</p>
    </section>
</article>

<!-- Use tables for tabular data only -->
<table>
    <caption>Monthly Sales Data</caption>
    <thead>
        <tr>
            <th scope="col">Month</th>
            <th scope="col">Sales</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>January</td>
            <td>$10,000</td>
        </tr>
    </tbody>
</table>

<!-- Proper use of buttons vs links -->
<a href="/about">About Page</a> <!-- For navigation -->
<button type="button" onclick="showModal()">Open Modal</button> <!-- For actions -->`
  }
] as Tutorial[]);

const resources = [
  {
    name: 'MDN References',
    links: [
      {
        title: 'HTML Elements Reference',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
        description: 'Comprehensive reference for all HTML elements'
      },
      {
        title: 'HTML Attributes Reference',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes',
        description: 'Complete list of HTML attributes and their usage'
      },
      {
        title: 'HTML Global Attributes',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes',
        description: 'Attributes that can be used on any HTML element'
      }
    ]
  },
  {
    name: 'MDN Guides',
    links: [
      {
        title: 'Introduction to HTML',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML',
        description: 'Beginner-friendly guide to HTML basics'
      },
      {
        title: 'HTML Forms Guide',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms',
        description: 'In-depth guide to creating and handling forms'
      },
      {
        title: 'HTML Accessibility',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML',
        description: 'Learn how to write accessible HTML'
      }
    ]
  },
  {
    name: 'Learning Path',
    links: [
      {
        title: 'HTML Basics',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
        description: 'Start here if you\'re new to HTML'
      },
      {
        title: 'Structuring Web Content',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure',
        description: 'Learn about semantic structure and document layout'
      },
      {
        title: 'HTML Best Practices',
        url: 'https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML',
        description: 'MDN\'s guide to writing better HTML'
      }
    ]
  }
];

const nextTutorial = {
  name: 'Images and Links',
  path: '/tutorials/images-links'
} as const;

// Add new practical exercise section
const exercise = {
  title: 'Build Rotto Rocks: Your First Website',
  introduction: 'Let\'s put your HTML knowledge to work by building the Rotto Rocks website. This exercise will help you practice semantic HTML and proper document structure.',
  steps: [
    {
      name: 'Project Setup',
      content: 'Create a new directory and set up the basic HTML structure:',
      code: `📁 rotto-rocks/
  ├── index.html
  └── about.html`
    },
    {
      name: 'Homepage Structure',
      content: 'Create the main page (index.html) with proper semantic structure:',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rotto Rocks - Explore Rottnest Island</title>
</head>
<body>
    <header>
        <h1>Rotto Rocks</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="#locations">Locations</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <h2>Welcome to Rottnest Island</h2>
            <p>Discover the natural beauty and unique wildlife of Western Australia's favorite island getaway.</p>
        </section>

        <section id="locations">
            <h2>Popular Locations</h2>
            <article>
                <h3>The Basin</h3>
                <p>Crystal clear waters perfect for swimming and snorkeling.</p>
            </article>
            
            <article>
                <h3>Wadjemup Lighthouse</h3>
                <p>Historic lighthouse offering panoramic views of the island.</p>
            </article>
            
            <article>
                <h3>Parker Point</h3>
                <p>Prime spot for coral viewing and marine life.</p>
            </article>
        </section>

        <section id="activities">
            <h2>Things to Do</h2>
            <ul>
                <li>Snorkeling</li>
                <li>Cycling</li>
                <li>Quokka Watching</li>
                <li>Swimming</li>
                <li>Hiking</li>
            </ul>
        </section>

        <section id="contact">
            <h2>Contact Us</h2>
            <form>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                
                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Rotto Rocks. All rights reserved.</p>
        <nav>
            <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Use</a></li>
            </ul>
        </nav>
    </footer>
</body>
</html>`
    },
    {
      name: 'About Page',
      content: 'Create the about page (about.html) with information about Rottnest Island:',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - Rotto Rocks</title>
</head>
<body>
    <header>
        <!-- Same navigation as index.html -->
    </header>

    <main>
        <article>
            <h1>About Rottnest Island</h1>
            
            <section>
                <h2>History</h2>
                <p>Rottnest Island, known as Wadjemup to the Noongar people, has a rich history spanning thousands of years...</p>
            </section>
            
            <section>
                <h2>Wildlife</h2>
                <p>Home to the famous quokka and diverse marine life...</p>
            </section>
            
            <section>
                <h2>Conservation</h2>
                <p>Learn about our efforts to preserve the island's unique ecosystem...</p>
            </section>
        </article>
    </main>

    <footer>
        <!-- Same footer as index.html -->
    </footer>
</body>
</html>`
    }
  ],
  checkpoints: [
    'Verify all HTML files have proper doctype and meta tags',
    'Check that semantic elements are used appropriately',
    // ... other checkpoints ...
  ],
  extensions: [
    'Add more detailed content to each section',
    'Create additional pages for specific locations',
    // ... other extensions ...
  ]
};
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">HTML Fundamentals</h1>
    
    <div class="space-y-8">
      <section v-for="tutorial in tutorials" :key="tutorial.name">
        <h2 class="text-2xl font-semibold mb-4">{{ tutorial.name }}</h2>
        <p class="mb-4">{{ tutorial.content }}</p>
        
        <div class="bg-gray-50 p-4 rounded-lg mb-4">
          <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code>{{ tutorial.code }}</code></pre>
        </div>
      </section>

      <section class="mt-12 space-y-8">
        <h2 class="text-3xl font-bold">Practical Exercise</h2>
        <div class="bg-blue-50 p-6 rounded-lg">
          <h3 class="text-2xl font-semibold mb-4">{{ exercise.title }}</h3>
          <p class="mb-6">{{ exercise.introduction }}</p>
          
          <!-- Exercise Steps -->
          <div class="space-y-6">
            <div v-for="step in exercise.steps" :key="step.name" class="bg-white p-6 rounded-lg shadow-sm">
              <h4 class="text-xl font-semibold mb-3">{{ step.name }}</h4>
              <p class="mb-4">{{ step.content }}</p>
              <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code>{{ step.code }}</code></pre>
            </div>
          </div>

          <!-- Checkpoints -->
          <div class="mt-8">
            <h4 class="text-xl font-semibold mb-4">Checkpoints</h4>
            <ul class="list-disc list-inside space-y-2">
              <li v-for="checkpoint in exercise.checkpoints" :key="checkpoint">
                {{ checkpoint }}
              </li>
            </ul>
          </div>

          <!-- Extension Ideas -->
          <div class="mt-8">
            <h4 class="text-xl font-semibold mb-4">Extension Ideas</h4>
            <ul class="list-disc list-inside space-y-2">
              <li v-for="extension in exercise.extensions" :key="extension">
                {{ extension }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mt-12">
        <h2 class="text-2xl font-semibold mb-6">Additional Resources</h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="resource in resources" :key="resource.name" class="space-y-4">
            <h3 class="text-xl font-semibold text-primary">{{ resource.name }}</h3>
            <ul class="space-y-3">
              <li v-for="link in resource.links" :key="link.url" class="border-l-4 border-gray-200 pl-4">
                <a 
                  :href="link.url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-primary hover:text-primary-dark font-medium"
                >
                  {{ link.title }}
                </a>
                <p class="text-sm text-gray-600 mt-1">{{ link.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div class="next-steps bg-gray-50 p-4 rounded-lg mt-8">
        <h2 class="text-xl font-semibold mb-4">Next Steps</h2>
        <p>Ready to learn more? Continue to the next tutorial:</p>
        <router-link 
          :to="nextTutorial.path"
          class="inline-flex items-center text-primary hover:text-primary-dark transition-colors mt-4"
        >
          Continue to "{{ nextTutorial.name }}"
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