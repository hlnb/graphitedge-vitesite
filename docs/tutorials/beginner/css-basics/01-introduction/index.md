---
title: Introduction to CSS
description: Learn how CSS works and how to add styles to your HTML
difficulty: beginner
tags: ['css', 'basics']
duration: '30 minutes'
prev:
  text: 'CSS Fundamentals Overview'
  link: '/tutorials/beginner/css-basics/'
next:
  text: 'Selectors & Properties'
  link: '/tutorials/beginner/css-basics/02-selectors/'
---

<div class="tutorial-container">

# Introduction to CSS

CSS (Cascading Style Sheets) is what makes the web beautiful. It transforms plain HTML into visually appealing websites.

::: highlight-box
In this tutorial, you'll learn:

- What CSS is and how it works
- Different ways to add CSS to HTML
- Basic CSS syntax
- How styles cascade
  :::

## What is CSS?

CSS is a style sheet language that describes how HTML elements should look on screen. It controls:

- Colors
- Fonts
- Spacing
- Layout
- Animations
- And much more!

## Adding CSS to HTML

There are three ways to add CSS to your HTML:

### 1. Inline CSS

Added directly to HTML elements using the `style` attribute:

```html
<p style="color: red; font-size: 16px;">This text is red.</p>
```

::: warning
Inline styles should be used sparingly as they:

- Mix content with presentation
- Are harder to maintain
- Can't be reused
  :::

### 2. Internal CSS

Added in the `<head>` section using `<style>` tags:

```html
<head>
	<style>
		p {
			color: red;
			font-size: 16px;
		}
	</style>
</head>
```

### 3. External CSS (Recommended)

Stored in a separate .css file and linked in the HTML:

```html
<head>
	<link rel="stylesheet" href="styles.css" />
</head>
```

```css
p {
	color: red;
	font-size: 16px;
}
```

## CSS Syntax

CSS rules have two main parts:

1. Selector: What to style
2. Declaration block: How to style it

```css
selector {
	property: value;
	another-property: value;
}
```

### Example:

```css
p {
	color: #ff0000;
	font-size: 16px;
	margin: 1rem;
}
```

## Understanding Color Values

CSS provides several ways to specify colors:

### 1. Color Keywords

Simple, predefined color names:

```css
p {
	color: red;
	background-color: white;
	border: 2px solid black;
}
```

### 2. Hexadecimal (Hex) Colors

Six-digit codes representing RGB values:

```css
/* Format: #RRGGBB */
.example {
	color: #ff0000; /* Red */
	color: #00ff00; /* Green */
	color: #0000ff; /* Blue */
	color: #000000; /* Black */
	color: #ffffff; /* White */
}
```

### 3. RGB Colors

Using red, green, and blue values (0-255):

```css
/* Format: rgb(red, green, blue) */
.example {
	color: rgb(255, 0, 0); /* Red */
	color: rgb(0, 255, 0); /* Green */
	color: rgb(0, 0, 255); /* Blue */
	color: rgb(0, 0, 0); /* Black */
	color: rgb(255, 255, 255); /* White */
}
```

### 4. RGBA Colors

RGB with alpha (transparency) value (0-1):

```css
/* Format: rgba(red, green, blue, alpha) */
.example {
	background-color: rgba(255, 0, 0, 0.5); /* Semi-transparent red */
	background-color: rgba(0, 0, 0, 0.3); /* Semi-transparent black */
}
```

## The Cascade

CSS stands for Cascading Style Sheets because styles can cascade from multiple sources:

<div class="cascade-demo">
  <div class="level-1">
    Browser Defaults
    <div class="level-2">
      External CSS
      <div class="level-3">
        Internal CSS
        <div class="level-4">
          Inline CSS
        </div>
      </div>
    </div>
  </div>
</div>

Later styles can override earlier ones based on:

1. Specificity
2. Source order
3. Importance

## Setting Up Your Files

### File Organization

When creating a new CSS project:

1. **Create Project Folder**

```bash
my-css-project/
├── index.html
└── styles.css
```

2. **Link CSS Correctly**
   The path in your HTML must match your file structure:

```html
<!-- If CSS is in the same folder -->
<link rel="stylesheet" href="styles.css" />

<!-- If CSS is in a css folder -->
<link rel="stylesheet" href="css/styles.css" />
```

### Using Your Text Editor

1. **Create New Files**

   - Create `index.html`
   - Create `styles.css`
   - Save files with correct extensions

2. **Check Your Work**
   - Use Live Server to view your page
   - Use browser dev tools to check if CSS is loading
   - Look for any error messages in dev tools

## Try It Yourself

Now you have all the pieces to complete the exercise:

1. File structure knowledge
2. HTML basics
3. CSS syntax
4. Color values
5. Naming conventions

### Step-by-Step Exercise

1. **Create Your Files**

```bash
my-css-project/
├── index.html
└── styles.css
```

2. **In `index.html`**:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>CSS Introduction</title>
		<link rel="stylesheet" href="styles.css" />
	</head>
	<body>
		<h1>Welcome to CSS</h1>
		<p>This is a paragraph with external CSS.</p>
		<p style="color: #0000FF;">This has inline CSS.</p>

		<!-- Add your own elements here -->
		<div class="content-box">
			<h2>My First Styled Box</h2>
			<p>Practice with different colors and styles.</p>
		</div>
	</body>
</html>
```

3. **In `styles.css`**:

```css
/* Basic styles */
h1 {
	color: #8d0000;
	font-size: 24px;
}

p {
	color: #4d4d4d;
	font-size: 16px;
	line-height: 1.5;
}

/* Your custom styles */
.content-box {
	background-color: rgb(240, 240, 240);
	padding: 20px;
	border: 2px solid #000000;
}

/* Try adding more styles! */
```

### Checklist Before Starting

- [ ] Text editor (VS Code) is ready
- [ ] Live Server extension is installed
- [ ] Files are created in correct location
- [ ] HTML file includes CSS link
- [ ] Browser dev tools are accessible

::: tip Troubleshooting
If your styles aren't working:

1. Check if the CSS file path is correct
2. Verify your CSS syntax (look for missing semicolons or braces)
3. Use browser dev tools to see if CSS is loading
4. Check for any console errors
   :::

## Practice Exercise

1. Create the files above
2. Add more HTML elements
3. Style them using all three CSS methods
4. Observe how the cascade works

::: highlight-box
Remember to:

- Use meaningful class names
- Keep styles consistent
- Test in your browser
- Use browser dev tools to inspect styles
  :::

## What's Next?

Now that you understand how to add CSS to your HTML, let's learn about selectors and properties in detail.

## CSS Naming Conventions

When writing CSS, it's important to follow proper naming conventions for classes and IDs:

### Rules for Names

1. **No Spaces Allowed**

```css
/* ❌ Wrong */
.my class {
	color: #ff0000;
}

/* ✅ Correct */
.my-class {
	color: #ff0000;
}
```

2. **No Special Characters to Start**

```css
/* ❌ Wrong */
.#my-class {
	color: #ff0000;
}

/* ❌ Wrong */
.123-class {
	color: #ff0000;
}

/* ✅ Correct */
.my-class {
	color: #ff0000;
}
```

### Common Naming Patterns

1. **Kebab Case** (Recommended)

```css
.section-title {
	font-size: 24px;
}

.main-navigation {
	background-color: #4d4d4d;
}
```

2. **Camel Case**

```css
.sectionTitle {
	font-size: 24px;
}

.mainNavigation {
	background-color: #4d4d4d;
}
```

### Best Practices

::: highlight-box
When naming CSS classes:

- Use descriptive names
- Keep names lowercase
- Use hyphens for spaces
- Start with letters
- Be consistent with your pattern
  :::

### Examples of Good Names

```css
.header {
}
.nav-menu {
}
.search-box {
}
.featured-article {
}
.sidebar-widget {
}
```

### Examples to Avoid

```css
/* ❌ Wrong */
.Header {
} /* Uppercase */
.nav_menu {
} /* Underscore */
.searchbox1 {
} /* Numbers at end */
.featured!article {
} /* Special characters */
.s {
} /* Not descriptive */
```

</div>
