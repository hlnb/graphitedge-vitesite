<script setup lang="ts">
import { ref } from 'vue'
import { format } from 'date-fns'

const posts = ref([
  {
    id: 1,
    title: 'Understanding Modern Web Architecture',
    date: '2024-02-20',
    category: 'Architecture',
    excerpt: 'A deep dive into modern web architecture patterns, microservices, and how they shape today\'s digital landscape.',
    author: 'Helen Burgess',
    content: `Modern web architecture has evolved significantly over the past decade. Today's web applications are more complex, distributed, and scalable than ever before.

## Key Components

- Frontend frameworks like Vue, React, and Angular
- Backend services and APIs
- Database systems and caching layers
- Content Delivery Networks (CDNs)

## Best Practices

1. Use microservices architecture when appropriate
2. Implement proper caching strategies
3. Optimize for performance and scalability
4. Follow security best practices

## Future Trends

The future of web architecture is moving towards:
- Serverless computing
- Edge computing
- WebAssembly
- Progressive Web Apps`
  },
  {
    id: 2,
    title: 'TypeScript Best Practices in 2024',
    date: '2024-02-15',
    category: 'Development',
    excerpt: 'Essential TypeScript practices and patterns for building robust applications in 2024.',
    author: 'Helen Burgess',
    content: `TypeScript has become the standard for large-scale JavaScript applications. Let's explore the best practices for 2024.

## Type Safety

- Use strict type checking
- Leverage interface and type aliases
- Implement proper error handling

## Modern Features

1. Template literal types
2. Conditional types
3. Mapped types
4. const assertions

## Performance Optimization

- Proper configuration
- Bundle size optimization
- Type-only imports
- Smart compilation strategies`
  },
  {
    id: 3,
    title: 'Vue 3 Performance Optimization Tips',
    date: '2024-02-10',
    category: 'Vue.js',
    excerpt: 'Learn how to optimize your Vue 3 applications for better performance and user experience.',
    author: 'Helen Burgess',
    content: `Optimizing Vue 3 applications is crucial for providing the best user experience. Here's how to do it effectively.

## Composition API Benefits

- Better code organization
- More efficient reactivity system
- Improved TypeScript support

## Performance Tips

1. Use computed properties wisely
2. Implement proper lazy loading
3. Optimize component rendering
4. Use v-show vs v-if appropriately

## Advanced Techniques

- Custom directives for performance
- State management optimization
- Server-side rendering considerations`
  },
  {
    id: 4,
    title: 'Building Secure Web Applications',
    date: '2024-02-05',
    category: 'Security',
    excerpt: 'Essential security practices for modern web applications to protect against common vulnerabilities.',
    author: 'Helen Burgess',
    content: `Security is paramount in web development. Let's explore essential practices for building secure applications.

## Common Vulnerabilities

- Cross-Site Scripting (XSS)
- SQL Injection
- CSRF Attacks
- Authentication Issues

## Security Best Practices

1. Input validation and sanitization
2. Proper authentication and authorization
3. Regular security audits
4. Keeping dependencies updated

## Modern Security Features

- Content Security Policy
- HTTPS everywhere
- Security headers
- OAuth 2.0 and OpenID Connect`
  }
])

const selectedPost = ref(null)

const formatContent = (content) => {
  return content
    .replace(/\n/g, '<br>')
    .replace(/## (.*)/g, '<div class="text-2xl font-bold mt-6 mb-4">$1</div>')
    .replace(/# (.*)/g, '<div class="text-3xl font-bold mt-8 mb-4">$1</div>')
    .replace(/```(\w+)?([\s\S]*?)```/g, '<pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto my-4"><code>$2</code></pre>')
    .replace(/- (.*)/g, '<div class="flex items-start mb-2"><span class="mr-2">•</span><span>$1</span></div>')
    .replace(/(\d+)\. (.*)/g, '<div class="flex items-start mb-2"><span class="mr-2">$1.</span><span>$2</span></div>')
}

const selectPost = (post) => {
  selectedPost.value = post
}

const closePost = () => {
  selectedPost.value = null
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Latest Articles</h1>
    
    <!-- Full Article Modal -->
    <div v-if="selectedPost" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <div class="flex items-center space-x-2 mb-2">
                <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{{ selectedPost.category }}</span>
                <span class="text-gray-500 text-sm">{{ format(new Date(selectedPost.date), 'MMMM d, yyyy') }}</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-800">{{ selectedPost.title }}</h2>
              <p class="text-gray-500 mt-2">By {{ selectedPost.author }}</p>
            </div>
            <button @click="closePost" class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="prose max-w-none text-text">
            <div v-html="formatContent(selectedPost.content)" class="space-y-4"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Article List -->
    <div class="space-y-6">
      <article v-for="post in posts" :key="post.id" 
               class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
               @click="selectPost(post)">
        <div class="flex items-center space-x-2 mb-3">
          <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{{ post.category }}</span>
          <span class="text-gray-500 text-sm">{{ format(new Date(post.date), 'MMMM d, yyyy') }}</span>
        </div>
        
        <h2 class="text-2xl font-bold mb-3 text-gray-800 hover:text-primary transition-colors">
          {{ post.title }}
        </h2>
        
        <p class="text-gray-600 mb-4 leading-relaxed">{{ post.excerpt }}</p>
        
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500">By {{ post.author }}</span>
          <button class="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </article>
    </div>
  </div>
</template>