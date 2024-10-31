<script setup lang="ts">
const tutorials = [
  {
    name: 'Essential Development Tools',
    content: 'Before starting web development, you\'ll need these essential tools:',
    code: `1. Code Editor: Visual Studio Code
2. Version Control: Git
3. Node.js and npm
4. Web Browser: Chrome/Firefox with DevTools
5. Terminal (built into macOS/Linux, use Git Bash for Windows)`
  },
  {
    name: 'Installing Visual Studio Code',
    content: 'VS Code is a powerful, free code editor with excellent web development features:',
    code: `1. Download VS Code:
   https://code.visualstudio.com/

2. Recommended Extensions:
   - Live Server
   - Prettier
   - ESLint
   - Vue Language Features
   - Tailwind CSS IntelliSense
   - GitLens
   - Auto Rename Tag`
  },
  {
    name: 'Setting Up Git',
    content: 'Git is essential for version control and collaboration:',
    code: `# Install Git
# macOS (using Homebrew):
brew install git

# Windows:
Download from https://git-scm.com/

# Basic Git Configuration
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Generate SSH Key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add SSH Key to GitHub:
1. Copy key: cat ~/.ssh/id_ed25519.pub
2. Add to GitHub Settings > SSH Keys`
  },
  {
    name: 'Installing Node.js',
    content: 'Node.js and npm are required for modern web development:',
    code: `# Using Node Version Manager (nvm) - Recommended
# Install nvm (macOS/Linux):
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install nvm (Windows):
# Download nvm-windows from:
https://github.com/coreybutler/nvm-windows/releases

# Install and use Node.js LTS version
nvm install --lts
nvm use --lts

# Verify installation
node --version
npm --version`
  },
  {
    name: 'Browser DevTools',
    content: 'Browser Developer Tools are crucial for debugging and development:',
    code: `Chrome DevTools Shortcuts:

macOS:
- Open DevTools: Cmd + Option + I
- Elements Panel: Cmd + Option + C
- Console: Cmd + Option + J

Windows/Linux:
- Open DevTools: Ctrl + Shift + I
- Elements Panel: Ctrl + Shift + C
- Console: Ctrl + Shift + J

Key Features:
- Elements: Inspect and modify HTML/CSS
- Console: JavaScript debugging
- Network: Monitor requests
- Sources: Debug JavaScript
- Application: Inspect storage`
  },
  {
    name: 'Terminal Basics',
    content: 'Essential terminal commands for web development:',
    code: `# Navigation
pwd           # Print working directory
ls            # List files
cd directory  # Change directory
cd ..         # Go up one directory

# File Operations
mkdir folder  # Create directory
touch file    # Create file
rm file       # Remove file
rm -r folder  # Remove folder

# npm Commands
npm init      # Create package.json
npm install   # Install dependencies
npm run dev   # Run development server
npm run build # Build for production

# Git Commands
git init      # Initialize repository
git add .     # Stage all changes
git commit -m "message"  # Commit changes
git push      # Push to remote
git pull      # Pull from remote`
  }
];

const resources = [
  {
    name: 'Official Documentation',
    links: [
      {
        title: 'VS Code Docs',
        url: 'https://code.visualstudio.com/docs',
        description: 'Official Visual Studio Code documentation'
      },
      {
        title: 'Git Documentation',
        url: 'https://git-scm.com/doc',
        description: 'Complete Git reference and guides'
      },
      {
        title: 'Node.js Docs',
        url: 'https://nodejs.org/docs/latest-v18.x/api/',
        description: 'Node.js documentation'
      }
    ]
  },
  {
    name: 'Learning Resources',
    links: [
      {
        title: 'Chrome DevTools',
        url: 'https://developer.chrome.com/docs/devtools/',
        description: 'Learn to use Chrome Developer Tools'
      },
      {
        title: 'Command Line Tutorial',
        url: 'https://www.learnenough.com/command-line-tutorial',
        description: 'Learn essential command line skills'
      },
      {
        title: 'Git Tutorial',
        url: 'https://www.atlassian.com/git/tutorials',
        description: 'Comprehensive Git tutorials by Atlassian'
      }
    ]
  }
];

const nextTutorial = {
  name: 'HTML Fundamentals',
  path: '/tutorials/html101'
} as const;
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Development Setup Guide</h1>
    
    <div class="space-y-8">
      <section v-for="tutorial in tutorials" :key="tutorial.name">
        <h2 class="text-2xl font-semibold mb-4">{{ tutorial.name }}</h2>
        <p class="mb-4">{{ tutorial.content }}</p>
        
        <div class="bg-gray-50 p-4 rounded-lg mb-4">
          <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code>{{ tutorial.code }}</code></pre>
        </div>
      </section>

      <!-- Resources Section -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold mb-6">Additional Resources</h2>
        
        <div class="grid md:grid-cols-2 gap-6">
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

      <!-- Next Steps -->
      <div class="next-steps bg-gray-50 p-4 rounded-lg mt-8">
        <h2 class="text-xl font-semibold mb-4">Next Steps</h2>
        <p>Now that you have your development environment set up, let's start learning HTML:</p>
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