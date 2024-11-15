---
title: Development Setup
description: Set up your web development environment
prev:
  text: 'Tools & Setup'
  link: '/tutorials/tools '
next:
  text: 'HTML 101'
  link: '/tutorials/basics/html-101'
---

# Development Setup

::: tip What you'll learn

- Installing and configuring VS Code
- Essential VS Code extensions
- Basic terminal commands
- Git setup and configuration
- Node.js and npm installation
  :::

## Visual Studio Code Setup

### Installation

1. Visit the [VS Code download page](https://code.visualstudio.com/download)
2. Download the appropriate version for your operating system
3. Run the installer
4. Follow the installation prompts

### Essential Extensions

Install these extensions to enhance your development experience:

1. **HTML/CSS Support**

   - HTML CSS Support
   - Live Server
   - Auto Rename Tag
   - HTML Preview

2. **JavaScript Support**

   - JavaScript (ES6) code snippets
   - ESLint
   - Prettier - Code formatter

3. **Vue.js Support**

   - Vue Language Features (Volar)
   - Vue VSCode Snippets

4. **Git Integration**
   - GitLens
   - Git History

#### Browser Preview & Live Server

1. **Live Server**

   - Instantly launches a local server
   - Auto-reloads on file changes
   - Right-click HTML file and select "Open with Live Server"

   ```bash
   # No configuration needed - just click "Go Live" in the status bar
   ```

2. **Browser Preview**

   - Preview web pages directly in VS Code
   - Multiple viewports for responsive design
   - Install: "Browser Preview" by Kenneth Auchenberg

3. **Live Preview**
   - Microsoft's built-in preview
   - Faster than Browser Preview
   - Install: "Live Preview" by Microsoft

#### Browser Developer Tools

1. **Browser Developer Tools**
   - Debug browser code directly in VS Code
   - Set breakpoints and inspect variables
   - Install: "Debugger for Chrome" or "Debugger for Firefox"

#### Multi-Browser Testing

1. **Browser Sync**
   - Test across multiple browsers simultaneously
   - Auto-refresh all connected browsers
   - Install via npm:
   ```bash
   npm install -g browser-sync
   ```
   Usage:
   ```bash
   browser-sync start --server --files "*.html, css/*.css"
   ```

#### Responsive Design Tools

1. **View In Browser**

   - Quick browser launch shortcuts
   - Customizable browser selection
   - Install: "View In Browser" by qinjia

2. **Window Resizer**
   - Test different screen sizes
   - Predefined device dimensions
   - Install: "Window Resizer" extension

::: tip Installing Extensions

1. Click the Extensions icon in the sidebar (or press `Ctrl+Shift+X`)
2. Search for the extension name
3. Click "Install"
   :::

### Recommended VS Code Settings for Browser Development

```json
{
	"editor.formatOnSave": true,
	"editor.tabSize": 2,
	"editor.wordWrap": "on",
	"files.autoSave": "onFocusChange",
	"editor.defaultFormatter": "esbenp.prettier-vscode",

	// Live Server settings
	"liveServer.settings.donotShowInfoMsg": true,
	"liveServer.settings.donotVerifyTags": true,
	"liveServer.settings.port": 5500,
	// Browser Preview settings
	"browserPreview.startUrl": "http://localhost:5500",
	"browserPreview.verbose": true,
	// Auto Save (helpful when using live preview)
	"files.autoSave": "afterDelay",
	"files.autoSaveDelay": 1000,
	// Enable Emmet for HTML/CSS
	"emmet.includeLanguages": {
		"javascript": "javascriptreact",
		"vue-html": "html"
	},
	"emmet.triggerExpansionOnTab": true,
	// Format HTML/CSS on save
	"[html]": {
		"editor.defaultFormatter": "vscode.html-language-features",
		"editor.formatOnSave": true
	},
	"[css]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode",
		"editor.formatOnSave": true
	}
}
```

### Browser Development Workflow Tips

1. **Multiple Preview Methods**

   ```bash
   # Method 1: Live Server
   # Click "Go Live" in VS Code status bar

   # Method 2: Browser Sync
   browser-sync start --server --files "**/*"

   # Method 3: Browser Preview
   # Use Cmd/Ctrl + Shift + P and type "Browser Preview"
   ```

2. **Quick Browser Testing Shortcuts**

   - `Alt + B`: Open in default browser
   - `Alt + Shift + B`: Open in specific browser
   - Configure in VS Code keyboard shortcuts

3. **Device Testing Setup**
   ```json
   // Add to settings.json
   "browserPreview.deviceTypes": [
     {
       "name": "Mobile",
       "width": 375,
       "height": 667
     },
     {
       "name": "Tablet",
       "width": 768,
       "height": 1024
     },
     {
       "name": "Desktop",
       "width": 1920,
       "height": 1080
     }
   ]
   ```

::: tip Browser Development Best Practices

1. Always test in multiple browsers
2. Use responsive design tools regularly
3. Keep DevTools open while developing
4. Enable auto-save to see instant changes
5. Use Live Server for dynamic content
   :::

::: warning Common Issues

- If Live Server doesn't start, check if port 5500 is already in use
- Browser Preview may need a browser restart to work properly
- Some extensions may conflict with each other
  :::

<!-- Continue with Terminal Basics section -->

## Terminal Basics

### Essential Commands

```bash
# Directory navigation
pwd           # Print working directory
ls            # List files and directories
cd directory  # Change directory
cd ..         # Go up one directory

# File operations
mkdir folder  # Create directory
touch file    # Create file
rm file       # Remove file
rm -r folder  # Remove directory

# Clear terminal
clear         # Clear screen
```

### Terminal Tips

- Use `Tab` for auto-completion
- Use `↑` and `↓` arrows to navigate command history
- Use `Ctrl+C` to stop running processes

## Git Installation and Setup

### Installation

1. Visit [Git's download page](https://git-scm.com/downloads)
2. Download and run the installer for your OS
3. Accept the default settings (unless you have specific preferences)

### Initial Configuration

```bash
# Set your name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default branch name
git config --global init.defaultBranch main
```

### Basic Git Commands

```bash
# Initialize repository
git init

# Check status
git status

# Stage changes
git add filename
git add .  # Stage all changes

# Commit changes
git commit -m "Your commit message"

# View commit history
git log
```

## Node.js and npm Setup

### Why Install Node.js?

Node.js is essential for modern web development for several reasons:

1. **Package Management**

   - Access to npm (Node Package Manager), the world's largest software registry
   - Easy installation of development tools and libraries
   - Manage project dependencies efficiently

2. **Development Tools**

   - Run development servers (like Live Server)
   - Use build tools (webpack, Vite)
   - Execute task runners (Grunt, Gulp)

3. **Modern Framework Requirements**

   - Required for Vue.js development
   - Needed for Tailwind CSS installation
   - Essential for most JavaScript frameworks

4. **Development Workflow**

   - Run scripts to automate tasks
   - Compile and bundle code
   - Process CSS and JavaScript
   - Test your applications

5. **Local Development Environment**
   - Run servers locally
   - Test API endpoints
   - Simulate production environment

### Installation

::: code-group

```sh [Windows]
# Windows Installation Steps

1. Download the Windows Installer
   - Visit https://nodejs.org/
   - Download the LTS (Long Term Support) version
   - Choose the Windows (.msi) installer

2. Run the Installer
   - Double-click the downloaded .msi file
   - Accept the license agreement
   - Keep the default installation path (recommended)
   - Allow the installer to set up necessary environment variables
   - Click "Install"

3. Verify Installation
   - Open Command Prompt or PowerShell
   - Run these commands:
     node --version
     npm --version

4. Troubleshooting
   - If commands aren't recognized, restart your computer
   - Check if Node.js is in your PATH environment variable
   - Try running Command Prompt as administrator

Note: Windows users might need to use Node.js command prompt instead of regular command prompt for some operations.
```

```sh [macOS]
# macOS Installation Steps

Option 1: Using Homebrew (Recommended)
1. Install Homebrew if not already installed:
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

2. Install Node.js:
   brew install node

3. Verify Installation:
   node --version
   npm --version

Option 2: Using the Official Installer
1. Visit https://nodejs.org/
2. Download the macOS (.pkg) installer
3. Double-click the downloaded file
4. Follow the installation wizard
5. Verify installation in Terminal

Troubleshooting:
- If using Homebrew, run: brew doctor
- Check permissions: ls -la $(which node)
- Repair disk permissions if needed
```

```sh [Linux]
# Linux Installation Steps

Option 1: Using Package Manager (Ubuntu/Debian)
1. Update package list:
   sudo apt update

2. Install Node.js and npm:
   sudo apt install nodejs npm

3. Verify Installation:
   node --version
   npm --version

Option 2: Using Node Version Manager (nvm) - Recommended
1. Install nvm:
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

2. Restart terminal or run:
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

3. Install Node.js:
   nvm install --lts
   nvm use --lts

4. Verify Installation:
   node --version
   npm --version

Troubleshooting:
- Check system architecture: uname -m
- Verify permissions: ls -la $(which node)
- Check package manager status: which npm
```

:::

::: tip Version Management
For all platforms, we recommend using a version manager:

- Windows: Use [nvm-windows](https://github.com/coreybutler/nvm-windows)
- macOS/Linux: Use [nvm](https://github.com/nvm-sh/nvm)

This allows you to:

1. Install multiple Node.js versions
2. Switch between versions easily
3. Avoid permission issues
4. Keep your development environment consistent
   :::

::: warning Platform-Specific Notes

- **Windows**: Some npm packages may require Windows Build Tools
  ```bash
  npm install --global windows-build-tools
  ```
- **macOS**: Some packages may require Xcode Command Line Tools
  ```bash
  xcode-select --install
  ```
- **Linux**: You might need development tools
  ```bash
  # Ubuntu/Debian
  sudo apt install build-essential
  ```
  :::

### Basic npm Commands

```bash
# Initialize a new project
npm init  # Creates package.json file

# Install a package
npm install package-name  # Adds to dependencies
npm install -g package-name  # Install globally

# Install development dependency
npm install --save-dev package-name

# Run scripts
npm run script-name
```

### Managing Dependencies

1. **package.json**

   ```json
   {
   	"name": "your-project",
   	"version": "1.0.0",
   	"dependencies": {
   		"vue": "^3.0.0",
   		"tailwindcss": "^3.0.0"
   	},
   	"devDependencies": {
   		"vite": "^4.0.0"
   	}
   }
   ```

2. **Common Scripts**
   ```json
   {
   	"scripts": {
   		"dev": "vite",
   		"build": "vite build",
   		"serve": "vite preview"
   	}
   }
   ```

### Best Practices

1. **Version Control**

   - Add `node_modules` to `.gitignore`
   - Always include `package.json` and `package-lock.json`
   - Document any specific Node.js version requirements

2. **Security**

   - Regularly update dependencies
   - Use `npm audit` to check for vulnerabilities
   - Review package sources before installation

3. **Performance**
   - Use `npm ci` for clean installs
   - Consider using `npm cache clean` periodically
   - Remove unused dependencies

::: tip Node Version Management
Consider using a version manager like `nvm` (Node Version Manager):

```bash
# Install nvm (follow instructions for your OS)
# Then you can:
nvm install 16  # Install Node.js v16
nvm use 16      # Switch to Node.js v16
nvm list        # List installed versions
```

:::

::: warning Common npm Issues

- Permission errors: Use `sudo` (Mac/Linux) or run as administrator (Windows)
- Global installs failing: Check npm prefix settings
- Package conflicts: Clear npm cache or delete node_modules
  :::

## Browser Development Tools

### Chrome DevTools

1. Open Chrome
2. Press `F12` or `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac)
3. Explore key features:
   - Elements panel for HTML/CSS inspection
   - Console for JavaScript debugging
   - Network tab for request monitoring
   - Application tab for storage inspection

## Workspace Organization

### Recommended Structure

```
projects/
├── personal/
│   ├── project1/
│   └── project2/
├── work/
│   ├── client1/
│   └── client2/
└── learning/
    ├── tutorials/
    └── experiments/
```

### Best Practices

1. Use consistent naming conventions
2. Keep projects separated
3. Regular backups
4. Use version control for all projects

## Troubleshooting

### Common Issues

1. **Path not found**

   - Check environment variables
   - Restart terminal/VS Code

2. **Permission errors**

   - Use `sudo` (Mac/Linux) or run as administrator (Windows)
   - Check file permissions

3. **Port already in use**
   - Find and stop the process using the port
   - Choose a different port

## Next Steps

Now that your development environment is set up, you're ready to start coding! Continue to:

1. [HTML 101](/tutorials/basics/html-101)
2. [CSS Basics](/tutorials/basics/css-basics)
3. [JavaScript Introduction](/tutorials/basics/javascript-introduction)

::: tip Need Help?
If you encounter any issues during setup, check our [troubleshooting guide](/tutorials/tools/troubleshooting) or join our community for support.
:::
