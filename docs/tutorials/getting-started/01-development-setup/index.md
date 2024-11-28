---
title: Development Environment Setup
description: Set up your computer for web development
difficulty: beginner
tags: ['setup', 'tools']
duration: '45 minutes'
prev:
  text: 'Getting Started'
  link: '/tutorials/getting-started/'
next:
  text: 'Web Development Basics'
  link: '/tutorials/getting-started/02-web-basics/'
---

<div class="tutorial-container">  
<h1>Setting Up Your Development Environment</h1>

A proper development environment helps you write, test, and debug code efficiently. Let's set up the essential tools you'll need.
[Previous content remains...]

## Web Browser

A modern web browser is your primary tool for viewing and testing websites.

### Recommended Browser: Google Chrome

1. Download from [chrome.google.com](https://www.google.com/chrome/)
2. Install following your system's standard process
3. Make Chrome your default browser (recommended)

::: tip Alternative Browsers
While we use Chrome in these tutorials, you can also use:

- Firefox
- Safari (Mac)
- Microsoft Edge
  :::

## Code Editor

Visual Studio Code (VS Code) is a free, powerful editor for web development.

### Installing VS Code

1. Visit [code.visualstudio.com](https://code.visualstudio.com/)
2. Download the version for your operating system
3. Install with default settings

### Essential VS Code Extensions

Install these extensions to enhance your coding experience:

1. **Live Server**

   - Click the Extensions icon (or press Ctrl+Shift+X)
   - Search for "Live Server"
   - Click Install

2. **HTML CSS Support**

   - Search for "HTML CSS Support"
   - Click Install

3. **Auto Rename Tag**
   - Search for "Auto Rename Tag"
   - Click Install

## File Organization

Good file organization is crucial for web development.

### Creating Your Workspace

1. Create a main projects folder:

   ```bash
   Documents/
   └── web-projects/      # Main development folder
   ```

2. For each new project:
   ```bash
   web-projects/
   └── project-name/      # e.g., "my-first-website"
       ├── index.html     # Main HTML file
       ├── css/           # CSS folder
       ├── images/        # Images folder
       └── js/           # JavaScript folder
   ```

## Project Resources

Throughout these tutorials, you'll need certain assets. You can find all project resources in our [Resources section](/resources/).

::: tip Project Assets
Remember to:

1. Download assets from the Resources page
2. Create appropriate folders in your project
3. Follow the usage instructions provided
   :::

## Try It Yourself

1. Create your workspace:

   - Make a `web-projects` folder
   - Create a test project folder inside it
   - Add the standard subfolders

2. Test VS Code:

   - Open VS Code
   - Go to File > Open Folder
   - Select your project folder
   - Create a new file called `index.html`

3. Test Live Server:
   - Add some basic HTML to your file
   - Right-click in the editor
   - Select "Open with Live Server"

::: info Practice Task
Create this simple HTML file and view it with Live Server:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>My First Page</title>
	</head>
	<body>
		<h1>Hello, Web Development!</h1>
		<p>My development environment is ready!</p>
	</body>
</html>
```

:::

## Troubleshooting Common Issues

### VS Code Installation

- **Windows**: Make sure to run as administrator if installation fails
- **Mac**: Drag to Applications folder
- **Linux**: Use package manager or .deb/.rpm file

### Live Server

- If "Open with Live Server" doesn't appear, reinstall the extension
- Check bottom bar for port number (usually 5500)
- Make sure no other server is running on the same port

## What's Next?

<div class="highlight-box">
Make sure you have:
- Chrome installed and working
- VS Code installed with extensions
- Project folders organized
- Live Server successfully running
</div>

</div>
