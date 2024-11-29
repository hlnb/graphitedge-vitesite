---
title: CSS Grid Layout
description: Learn how to create complex layouts with CSS Grid
difficulty: intermediate
tags: ['css', 'grid', 'layout']
duration: '60 minutes'
prev:
  text: 'CSS Basics Overview'
  link: '/tutorials/beginner/css-basics/'
next:
  text: 'Advanced Flexbox'
  link: '/tutorials/intermediate/css-advanced/02-advanced-flexbox/'
---

<div class="tutorial-container">

# CSS Grid Layout

Learn how to create powerful two-dimensional layouts with CSS Grid.

<div class="highlight-box">
<h3>In this tutorial, you'll learn:</h3>
<ul>
<li>CSS Grid fundamentals</li>
<li>Grid container and item properties</li>
<li>Creating responsive layouts</li>
<li>Common grid patterns</li>
</ul>
</div>

<div class="tip-box">
<h3>Setup for This Tutorial</h3>
<p>Create a new file called `grid-practice.html` with this starter code:</p>

```html
<!DOCTYPE html>
<html>
	<head>
		<title>CSS Grid Practice</title>
		<style>
			/* Your CSS will go here */
		</style>
	</head>
	<body>
		<div class="grid-container">
			<header>Black Swan Bistro</header>
			<nav>Navigation</nav>
			<main>Main Content</main>
			<aside>Sidebar</aside>
			<footer>Footer</footer>
		</div>
	</body>
</html>
```

</div>

## Grid Fundamentals

### Creating a Grid Container

```css
.grid-container {
	display: grid;
	grid-template-columns: repeat(3, 1fr); /* Creates 3 equal columns */
	grid-template-rows: auto; /* Rows adjust to content */
	gap: 20px; /* Space between grid items */
}
```

### Grid Template Areas

```css
.grid-container {
	display: grid;
	grid-template-areas:
		'header header header'
		'nav    main   aside'
		'footer footer footer';
	gap: 20px;
}

header {
	grid-area: header;
}
nav {
	grid-area: nav;
}
main {
	grid-area: main;
}
aside {
	grid-area: aside;
}
footer {
	grid-area: footer;
}
```

## Practice Exercise: Restaurant Layout

<div class="tip-box">
<h3>Setup Instructions</h3>
<p>Create this layout for the Black Swan Bistro website:</p>
</div>

### Step 1: Basic Grid Structure

```css
.grid-container {
	display: grid;
	grid-template-columns: 200px 1fr 200px;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
	gap: 20px;
	padding: 20px;
}

/* Basic styling */
.grid-container > * {
	padding: 20px;
	background: #f9f9f9;
	border-radius: 8px;
}
```

### Step 2: Menu Grid

```css
.menu-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 20px;
}

.menu-item {
	padding: 20px;
	background: white;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

## Challenge: Advanced Restaurant Layout

Create a responsive restaurant website layout with these features:

- Header with logo and navigation
- Featured dishes section
- Menu categories grid
- Contact information
- Footer with multiple columns

<div class="warning-box">
<h3>Common Grid Issues</h3>
<ul>
<li>Grid items overflowing container</li>
<li>Unexpected gaps between items</li>
<li>Responsive layout breaking points</li>
<li>Content alignment issues</li>
</ul>
</div>

<details>
<summary>Click to see the solution</summary>

```css
/* Grid Container */
.restaurant-layout {
	display: grid;
	grid-template-areas:
		'header header header'
		'hero   hero   hero'
		'menu   menu   sidebar'
		'footer footer footer';
	gap: 20px;
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
}

/* Header */
.header {
	grid-area: header;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	gap: 20px;
}

/* Hero Section */
.hero {
	grid-area: hero;
	height: 400px;
	background-size: cover;
	display: grid;
	place-items: center;
}

/* Menu Grid */
.menu {
	grid-area: menu;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 20px;
}

/* Sidebar */
.sidebar {
	grid-area: sidebar;
}

/* Footer */
.footer {
	grid-area: footer;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
	.restaurant-layout {
		grid-template-areas:
			'header'
			'hero'
			'menu'
			'sidebar'
			'footer';
	}

	.footer {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 480px) {
	.footer {
		grid-template-columns: 1fr;
	}
}
```

</details>

## Interactive Resources

<div class="tip-box">
<h3>Practice More</h3>
<ul>
<li><a href="https://cssgridgarden.com/" target="_blank">Grid Garden</a> - Learn Grid while watering your garden!</li>
<li><a href="https://gridbyexample.com/" target="_blank">Grid by Example</a> - Real examples and patterns</li>
<li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">CSS-Tricks: Complete Guide to Grid</a> - Comprehensive reference</li>
<li><a href="https://codepip.com/games/grid-garden/" target="_blank">Grid Garden on Codepip</a> - The official site with more coding games</li>
</ul>
</div>

## What's Next?

In the next tutorial, we'll explore advanced Flexbox concepts and how to combine Grid with Flexbox for complex layouts.

</div>
