<script setup lang="ts">
import { ref } from 'vue'
import type { Tutorial, Exercise } from '@/types'

const activeStep = ref(0)

const tutorial = ref<Tutorial>({
  title: 'Development Setup Guide',
  description: 'Set up your development environment with essential tools for web development',
  difficulty: 'Beginner',
  category: 'Setup',
  duration: '2-3 hours',
  steps: [
    {
      title: 'Essential Development Tools Overview',
      content: `
        <div class="step-content">
          <p class="mb-6">Before starting web development, you'll need these essential tools:</p>
          
          <ul class="mb-6">
            <li>Code Editor (Visual Studio Code)</li>
            <li>Version Control System (Git)</li>
            <li>Runtime Environment (Node.js and npm)</li>
            <li>Web Browser with Developer Tools</li>
            <li>Command Line Terminal</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://code.visualstudio.com/docs" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   VS Code Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `# Essential Tools Checklist
1. Code Editor: Visual Studio Code
2. Version Control: Git
3. Node.js and npm
4. Web Browser: Chrome/Firefox with DevTools
5. Terminal (built into macOS/Linux, use Git Bash for Windows)`
    },
    {
      title: 'Setting Up Visual Studio Code',
      content: `
        <div class="step-content">
          <p class="mb-6">VS Code is a powerful, free code editor with excellent web development features. Let's set it up properly:</p>
          
          <ul class="mb-6">
            <li>Download and install VS Code</li>
            <li>Install essential extensions</li>
            <li>Configure basic settings</li>
            <li>Set up your workspace</li>
          </ul>

          <div class="example-section mb-6">
            <h4>Recommended Extensions:</h4>
            <ul>
              <li>Live Server - Local development server</li>
              <li>Prettier - Code formatting</li>
              <li>ESLint - Code quality</li>
              <li>Vue Language Features - Vue.js support</li>
              <li>Tailwind CSS IntelliSense - Tailwind support</li>
            </ul>
          </div>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://code.visualstudio.com/docs/getstarted/tips-and-tricks" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   VS Code Tips and Tricks
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `# 1. Download VS Code
https://code.visualstudio.com/

# 2. Install Extensions
- Live Server
- Prettier
- ESLint
- Vue Language Features
- Tailwind CSS IntelliSense
- GitLens
- Auto Rename Tag

# 3. Basic Settings (settings.json)
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}`
    },
    {
      title: 'Setting Up Your Operating System',
      content: `
        <div class="step-content">
          <p class="mb-6">Different operating systems require different setup steps. Choose your OS below:</p>
          
          <div class="example-section mb-6">
            <h4>Windows Setup:</h4>
            <ul>
              <li>Install Windows Terminal (recommended) from Microsoft Store</li>
              <li>Install Git Bash or WSL2 (Windows Subsystem for Linux)</li>
              <li>Enable Windows Developer Mode in Settings</li>
              <li>Install PowerShell 7 (recommended)</li>
            </ul>
          </div>

          <div class="example-section mb-6">
            <h4>macOS Setup:</h4>
            <ul>
              <li>Install Homebrew package manager</li>
              <li>Install Xcode Command Line Tools</li>
              <li>Configure Terminal or install iTerm2 (recommended)</li>
              <li>Set up .zshrc configuration</li>
            </ul>
          </div>

          <div class="example-section mb-6">
            <h4>Linux Setup:</h4>
            <ul>
              <li>Update package manager (apt, dnf, etc.)</li>
              <li>Install build essentials</li>
              <li>Configure your preferred terminal</li>
              <li>Set up necessary permissions</li>
            </ul>
          </div>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://docs.microsoft.com/en-us/windows/dev-environment/overview" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   Windows Dev Environment Setup
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `# Windows Setup
winget install Microsoft.WindowsTerminal
winget install Git.Git
# Enable WSL2 (PowerShell as Admin):
wsl --install

# macOS Setup
# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# Install Xcode Command Line Tools
xcode-select --install

# Linux Setup (Ubuntu/Debian)
sudo apt update
sudo apt install build-essential
sudo apt install git`
    },
    {
      title: 'Installing Visual Studio Code',
      content: `
        <div class="step-content">
          <p class="mb-6">VS Code installation varies by operating system:</p>
          
          <div class="example-section mb-6">
            <h4>Windows:</h4>
            <ul>
              <li>Download the Windows installer (.exe)</li>
              <li>Run installer with "Add to PATH" selected</li>
              <li>Enable "Open with Code" context menu options</li>
            </ul>
          </div>

          <div class="example-section mb-6">
            <h4>macOS:</h4>
            <ul>
              <li>Download the macOS version (.dmg)</li>
              <li>Drag to Applications folder</li>
              <li>Install 'code' command in PATH</li>
            </ul>
          </div>

          <div class="example-section mb-6">
            <h4>Linux:</h4>
            <ul>
              <li>Use package manager (apt, snap, etc.)</li>
              <li>Add Microsoft repository</li>
              <li>Install through Software Center or terminal</li>
            </ul>
          </div>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://code.visualstudio.com/docs/setup/setup-overview" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   VS Code Setup Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `# Windows (Using winget)
winget install Microsoft.VisualStudioCode

# macOS (Using Homebrew)
brew install --cask visual-studio-code

# Linux (Ubuntu/Debian)
sudo apt-get install wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt install apt-transport-https
sudo apt update
sudo apt install code`
    },
    {
      title: 'Installing Node.js and npm',
      content: `
        <div class="step-content">
          <p class="mb-6">Node.js and npm are essential for modern web development. We'll use Node Version Manager (nvm) for installation:</p>
          
          <ul class="mb-6">
            <li>Install Node Version Manager (nvm)</li>
            <li>Install the LTS version of Node.js</li>
            <li>Verify your installation</li>
            <li>Learn basic npm commands</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   Introduction to Node.js
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `# Using Node Version Manager (nvm)
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
      title: 'Browser Developer Tools',
      content: `
        <div class="step-content">
          <p class="mb-6">Browser Developer Tools are crucial for debugging and development. Learn how to:</p>
          
          <ul class="mb-6">
            <li>Access Developer Tools in your browser</li>
            <li>Use the Elements panel for HTML/CSS inspection</li>
            <li>Debug JavaScript using the Console</li>
            <li>Monitor network requests</li>
            <li>Analyze page performance</li>
          </ul>

          <div class="example-section mb-6">
            <h4>Key Features:</h4>
            <ul>
              <li>Elements: Inspect and modify HTML/CSS</li>
              <li>Console: JavaScript debugging</li>
              <li>Network: Monitor requests</li>
              <li>Sources: Debug JavaScript</li>
              <li>Application: Inspect storage</li>
            </ul>
          </div>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.chrome.com/docs/devtools/" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   Chrome DevTools Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `Chrome DevTools Shortcuts:

macOS:
- Open DevTools: Cmd + Option + I
- Elements Panel: Cmd + Option + C
- Console: Cmd + Option + J

Windows/Linux:
- Open DevTools: Ctrl + Shift + I
- Elements Panel: Ctrl + Shift + C
- Console: Ctrl + Shift + J`
    },
    {
      title: 'Terminal Basics',
      content: `
        <div class="step-content">
          <p class="mb-6">The terminal is a powerful tool for developers. Learn essential commands for:</p>
          
          <ul class="mb-6">
            <li>File system navigation</li>
            <li>File and directory operations</li>
            <li>Package management with npm</li>
            <li>Git version control</li>
          </ul>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://www.learnenough.com/command-line-tutorial" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   Command Line Tutorial
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
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
npm run build # Build for production`
    },
    {
      title: 'Git and Version Control',
      content: `
        <div class="step-content">
          <p class="mb-6">Version control is essential for modern web development. Let's set up Git and understand its core concepts:</p>
          
          <div class="example-section mb-6">
            <h4>Key Concepts:</h4>
            <ul>
              <li>Understanding Git vs GitHub/GitLab</li>
              <li>Basic Git workflow and commands</li>
              <li>Collaboration and teamwork features</li>
              <li>Security and authentication</li>
            </ul>
          </div>

          <div class="example-section mb-6">
            <h4>Essential Setup:</h4>
            <ul>
              <li>Install Git on your system</li>
              <li>Create a GitHub account</li>
              <li>Set up SSH/GPG keys for security</li>
              <li>Configure Git identity</li>
            </ul>
          </div>

          <div class="example-section mb-6">
            <h4>Good Practices:</h4>
            <ul>
              <li>Keep local repos in sync with remote</li>
              <li>Use .gitignore properly</li>
              <li>Manage branches effectively</li>
              <li>Handle merge conflicts</li>
            </ul>
          </div>

          <div class="read-more-links">
            <h4>Read More:</h4>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/curriculum/core/version-control/" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   MDN: Version Control Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
      `,
      code: `# Basic Git Setup
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Create and Push a Repository
git init
git add .
git commit -m "Initial commit"
git remote add origin <repository-url>
git push -u origin main

# Collaboration Workflow
git checkout -b feature-branch
git add .
git commit -m "Add new feature"
git push origin feature-branch

# Keeping in Sync
git pull origin main
git fetch --all
git merge origin/main

# Good Housekeeping
echo "node_modules/" >> .gitignore
echo ".DS_Store" >> .gitignore
git branch -d old-branch  # Delete local branch
git push origin --delete old-branch  # Delete remote branch`
    }
  ],
  resources: [
    {
      title: 'MDN: Getting started with the web',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web',
      description: 'Complete beginner\'s guide to web development setup and basics',
      usage: 'Follow this guide for a comprehensive introduction to web development tools and concepts.'
    },
    {
      title: 'MDN: Installing basic software',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software',
      description: 'Guide to installing essential web development tools',
      usage: 'Use this as a checklist for setting up your development environment.'
    },
    {
      title: 'MDN: Development Tools',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools',
      description: 'Introduction to browser developer tools',
      usage: 'Learn how to use browser developer tools for debugging and development.'
    },
    {
      title: 'VS Code Documentation',
      url: 'https://code.visualstudio.com/docs',
      description: 'Official Visual Studio Code documentation',
      usage: 'Complete reference for VS Code features, shortcuts, and extensions.'
    },
    {
      title: 'Git Documentation',
      url: 'https://git-scm.com/doc',
      description: 'Complete Git reference and guides',
      usage: 'Learn Git concepts and commands in depth.'
    },
    {
      title: 'Node.js Documentation',
      url: 'https://nodejs.org/docs/latest-v18.x/api/',
      description: 'Node.js documentation',
      usage: 'Reference for Node.js features and APIs.'
    },
    {
      title: 'Windows Development Setup',
      url: 'https://docs.microsoft.com/en-us/windows/dev-environment/overview',
      description: 'Microsoft\'s guide to setting up Windows for development',
      usage: 'Follow for Windows-specific setup instructions and best practices.'
    },
    {
      title: 'macOS Development Setup',
      url: 'https://developer.apple.com/support/xcode/',
      description: 'Apple\'s developer tools documentation',
      usage: 'Reference for setting up macOS development environment.'
    },
    {
      title: 'Chrome DevTools',
      url: 'https://developer.chrome.com/docs/devtools/',
      description: 'Learn to use Chrome Developer Tools',
      usage: 'Master browser debugging and development tools.'
    },
    {
      title: 'Command Line Tutorial',
      url: 'https://www.learnenough.com/command-line-tutorial',
      description: 'Learn essential command line skills',
      usage: 'Build your command line proficiency from basics to advanced usage.'
    },
    {
      title: 'MDN: Version Control Curriculum',
      url: 'https://developer.mozilla.org/en-US/curriculum/core/version-control/',
      description: 'MDN\'s comprehensive guide to version control concepts and Git basics',
      usage: 'Follow this curriculum to understand version control fundamentals and Git workflow.'
    }
  ]
})

const exercise = ref<Exercise>({
  title: 'Development Environment Setup',
  description: 'Set up your complete development environment for the Rotto Rocks project',
  objectives: [
    'Install and configure all necessary development tools',
    'Set up a new project using Git',
    'Initialize a Node.js project',
    'Configure VS Code for optimal web development',
    'Practice using the terminal and DevTools'
  ],
  structure: `development-setup/
├── .vscode/
│   └── settings.json
├── .gitignore
├── package.json
└── README.md`,
  requirements: [
    'Install VS Code with all recommended extensions',
    'Set up Git and create a GitHub account',
    'Install Node.js using nvm',
    'Configure VS Code settings for web development',
    'Initialize a new Git repository',
    'Create a package.json file using npm init',
    'Add appropriate files to .gitignore',
    'Create a basic README.md file for your project'
  ],
  tips: [
    'Follow the installation steps in order',
    'Test each tool after installation',
    'Use terminal commands to create project structure',
    'Commit your configuration files to Git',
    'Document any custom settings in README.md',
    'Practice using keyboard shortcuts for efficiency'
  ]
})

const nextStep = () => {
  if (activeStep.value < tutorial.value.steps.length - 1) {
    activeStep.value++
  }
}

const previousStep = () => {
  if (activeStep.value > 0) {
    activeStep.value--
  }
}

const scrollToExercise = () => {
  document.querySelector('#exercise')?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  })
}
</script>

<template>
  <article class="tutorial-content">
    <!-- Header Section -->
    <header class="tutorial-header">
      <h1>{{ tutorial.title }}</h1>
      <p class="description">{{ tutorial.description }}</p>
      <div class="metadata">
        <span class="difficulty">{{ tutorial.difficulty }}</span>
        <span class="category">{{ tutorial.category }}</span>
        <span class="duration">{{ tutorial.duration }}</span>
      </div>
    </header>

    <!-- Tutorial Content -->
    <section class="tutorial-step">
      <h2>{{ tutorial.steps[activeStep].title }}</h2>
      <div 
        class="content"
        v-html="tutorial.steps[activeStep].content"
      ></div>
      <pre 
        v-if="tutorial.steps[activeStep].code"
        class="code-block"
      ><code>{{ tutorial.steps[activeStep].code }}</code></pre>
    </section>

    <!-- Progress Section -->
    <div class="progress-section">
      <div class="progress-bar">
        <div 
          class="progress"
          :style="`width: ${(activeStep + 1) / tutorial.steps.length * 100}%`"
        ></div>
      </div>
      <nav class="tutorial-navigation">
        <button 
          @click="previousStep" 
          :disabled="activeStep === 0"
          class="nav-button"
        >
          Previous
        </button>
        <span class="step-indicator">
          Step {{ activeStep + 1 }} of {{ tutorial.steps.length }}
        </span>
        <button 
          @click="nextStep" 
          :disabled="activeStep === tutorial.steps.length - 1"
          class="nav-button"
        >
          Next
        </button>
      </nav>
    </div>

    <!-- Call to Action -->
    <div class="cta-section">
      <h2>Ready to Set Up Your Environment?</h2>
      <p>Now that you understand the tools, let's set up your development environment!</p>
      <button class="cta-button" @click="scrollToExercise">Start the Setup</button>
    </div>

    <!-- Exercise Section -->
    <section class="exercise-section" id="exercise">
      <h2>Practice Exercise: {{ exercise.title }}</h2>
      <div class="exercise-content">
        <div class="exercise-intro">
          <p>{{ exercise.description }}</p>
          <h3>Learning Objectives:</h3>
          <ul class="learning-objectives">
            <li v-for="objective in exercise.objectives" :key="objective">
              {{ objective }}
            </li>
          </ul>
        </div>

        <div class="site-structure mt-6">
          <h3>Project Structure</h3>
          <pre class="font-mono text-sm bg-gray-100 p-4 rounded-lg mt-2">{{ exercise.structure }}</pre>
        </div>

        <div class="requirements mt-6">
          <h3>Requirements:</h3>
          <ul>
            <li v-for="req in exercise.requirements" :key="req">
              {{ req }}
            </li>
          </ul>
        </div>

        <div class="tips mt-6">
          <h3>Tips for Success:</h3>
          <ul>
            <li v-for="tip in exercise.tips" :key="tip">
              {{ tip }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Separator -->
    <div class="section-separator">
      <span class="separator-text">Additional Resources</span>
    </div>

    <!-- Additional Resources -->
    <section class="additional-resources">
      <h2>Additional Learning Resources</h2>
      <div class="resources-grid">
        <a 
          v-for="resource in tutorial.resources" 
          :key="resource.url"
          :href="resource.url"
          target="_blank"
          rel="noopener noreferrer"
          class="resource-card"
        >
          <h3>{{ resource.title }}</h3>
          <p class="description">{{ resource.description }}</p>
          <p class="usage">How to use: {{ resource.usage }}</p>
        </a>
      </div>
    </section>

    <!-- Next Steps Section -->
    <div class="section-separator">
      <span class="separator-text">Navigation</span>
    </div>

    <section class="tutorial-navigation-section">
      <div class="navigation-grid">
        <!-- Previous Tutorial -->
        <router-link 
          to="/tutorials" 
          class="tutorial-card all-tutorials"
        >
          <div class="card-content">
            <span class="direction-label">Tutorial Index</span>
            <h3>All Tutorials</h3>
            <p>Browse our complete collection of web development tutorials.</p>
          </div>
        </router-link>

        <!-- Next Tutorial -->
        <router-link 
          to="/tutorials/HTML101" 
          class="tutorial-card next-tutorial"
        >
          <div class="card-content">
            <span class="direction-label">Next Tutorial →</span>
            <h3>HTML101</h3>
            <p>Learn the basics of HTML and start building your first web pages.</p>
          </div>
        </router-link>
      </div>
    </section>
  </article>
</template>

<style scoped>
.tutorial-content {
  @apply max-w-4xl mx-auto px-4;
}

.tutorial-header {
  @apply mb-8;
}

.tutorial-header h1 {
  @apply text-3xl font-bold mb-2;
}

.metadata {
  @apply flex gap-4 text-sm text-gray-600 mt-2;
}

.progress-section {
  @apply my-8 bg-gray-50 p-4 rounded-lg;
}

.progress-bar {
  @apply h-2 bg-gray-200 rounded-full overflow-hidden;
}

.progress {
  @apply h-full bg-primary transition-all duration-300;
}

.tutorial-navigation {
  @apply flex justify-between items-center mt-4;
}

.nav-button {
  @apply px-4 py-2 bg-primary text-white rounded-lg
    hover:bg-primary-dark transition-colors duration-200
    disabled:opacity-50 disabled:cursor-not-allowed;
}

.cta-section {
  @apply my-12 text-center p-8 bg-gray-50 rounded-lg;
}

.cta-button {
  @apply px-6 py-3 bg-primary text-white rounded-lg
    hover:bg-primary-dark transition-colors duration-200
    font-semibold text-lg;
}

.exercise-content {
  @apply space-y-6;
}

.learning-objectives {
  @apply list-disc ml-6 mt-4 space-y-2;
}

.resources-grid {
  @apply grid gap-4 md:grid-cols-2 mt-4;
}

.resource-card {
  @apply p-4 bg-white rounded-lg shadow-sm hover:shadow-md
    transition-shadow duration-200;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-6 rounded-lg mt-4 overflow-x-auto font-mono;
}

/* Syntax highlighting colors - similar to VS Code dark theme */
.code-block :deep(code) {
  @apply text-sm leading-relaxed;
}

.code-block :deep(.tag) {
  @apply text-blue-400;
}

.code-block :deep(.attr-name) {
  @apply text-cyan-300;
}

.code-block :deep(.attr-value) {
  @apply text-orange-300;
}

.code-block :deep(.comment) {
  @apply text-gray-500;
}

/* Add a subtle border and shadow for depth */
pre {
  @apply border border-gray-800 shadow-lg;
}

/* Optional: Add a subtle gradient background */
.code-block {
  background: linear-gradient(to bottom, #1a1a1a, #2d2d2d);
}

/* Optional: Add a copy button */
.code-block-wrapper {
  @apply relative;
}

.copy-button {
  @apply absolute top-2 right-2 px-3 py-1 
    bg-gray-700 text-gray-300 rounded
    hover:bg-gray-600;
}

.section-separator {
  @apply my-16 relative text-center;
}

.section-separator::before {
  content: '';
  @apply absolute w-full h-px bg-gray-200 top-1/2 left-0;
}

.separator-text {
  @apply relative px-4 bg-white text-gray-500 text-sm uppercase tracking-wider;
}

.step-content p {
  @apply text-gray-700 leading-relaxed;
}

.step-content ul {
  @apply list-disc pl-6 text-gray-700 space-y-2;
}

.read-more-links {
  @apply mt-8 p-4 bg-gray-50 rounded-lg;
}

.read-more-links h4 {
  @apply text-sm font-semibold text-gray-600 mb-2;
}

.tutorial-navigation-section {
  @apply my-16 bg-gray-50 p-4 rounded-lg;
}

.navigation-grid {
  @apply grid gap-4 md:grid-cols-3 mt-4;
}

.tutorial-card {
  @apply p-4 bg-white rounded-lg shadow-sm hover:shadow-md
    transition-shadow duration-200;
}

.card-content {
  @apply text-gray-700 leading-relaxed;
}

.direction-label {
  @apply text-sm font-semibold text-gray-600 mb-2;
  }
.example-section {
  @apply bg-gray-50 p-4 rounded-lg;
}

.example-section h4 {
  @apply text-sm font-semibold text-gray-600 mb-2;
}

.example-section ul {
  @apply list-disc pl-6 text-gray-700 space-y-1;
}
</style> 