---
title: Flexbox Basics
description: Learn how to create flexible layouts with CSS Flexbox
difficulty: beginner
tags: ['css', 'flexbox', 'layout']
duration: '45 minutes'
prev:
  text: 'Box Model'
  link: '/tutorials/beginner/css-basics/04-box-model/'
next:
  text: 'CSS Grid'
  link: '/tutorials/beginner/css-basics/06-grid/'
---

<div class="tutorial-container">

# Flexbox Basics

Flexbox is a powerful CSS layout model that makes it easier to design flexible responsive layouts.

<div class="highlight-box">
<h3>In this tutorial, you'll learn:</h3>
<ul>
<li>How Flexbox works</li>
<li>Main Flexbox properties</li>
<li>Common layout patterns</li>
<li>Responsive design with Flexbox</li>
</ul>
</div>

## Understanding Flexbox

Flexbox consists of:

- Flex container (parent)
- Flex items (children)

```css
/* Create a flex container */
.container {
	display: flex;
}
```

## Container Properties

### 1. Flex Direction

Controls the direction of flex items:

```css
.container {
	display: flex;
	flex-direction: row; /* Left to right (default) */
	flex-direction: column; /* Top to bottom */
	flex-direction: row-reverse; /* Right to left */
	flex-direction: column-reverse; /* Bottom to top */
}
```

### 2. Justify Content

Aligns items along the main axis:

```css
.container {
	display: flex;
	justify-content: flex-start; /* Start of container */
	justify-content: center; /* Center of container */
	justify-content: flex-end; /* End of container */
	justify-content: space-between; /* Space between items */
	justify-content: space-around; /* Space around items */
}
```

### 3. Align Items

Aligns items along the cross axis:

```css
.container {
	display: flex;
	align-items: stretch; /* Fill container height (default) */
	align-items: flex-start; /* Top of container */
	align-items: center; /* Center of container */
	align-items: flex-end; /* Bottom of container */
}
```

### 4. Flex Wrap

Controls whether items wrap to new lines:

```css
.container {
	display: flex;
	flex-wrap: nowrap; /* Single line (default) */
	flex-wrap: wrap; /* Multiple lines */
	flex-wrap: wrap-reverse; /* Multiple lines, reversed */
}
```

## Item Properties

### 1. Flex Grow

Controls how items grow:

```css
.item {
	flex-grow: 0; /* Don't grow (default) */
	flex-grow: 1; /* Grow equally */
	flex-grow: 2; /* Grow twice as much */
}
```

### 2. Flex Shrink

Controls how items shrink:

```css
.item {
	flex-shrink: 1; /* Can shrink (default) */
	flex-shrink: 0; /* Cannot shrink */
}
```

### 3. Flex Basis

Sets the initial size:

```css
.item {
	flex-basis: auto; /* Based on content (default) */
	flex-basis: 200px; /* Specific width */
}
```

### 4. Shorthand

Combine grow, shrink, and basis:

```css
.item {
	flex: 0 1 auto; /* Default */
	flex: 1; /* Can grow */
	flex: auto; /* Can grow and shrink */
}
```

## Practice Exercise: Black Swan Bistro Navigation

Create a responsive navigation bar:

<div class="tip-box">
<h3>Resources</h3>
<p>Use the <a href="/resources/">Black Swan Bistro colors and fonts</a> from our resources page.</p>
</div>

1. **HTML Structure**:

```html
<nav class="main-nav">
	<div class="logo">
		<img src="/assets/resources/blackswan-logo.svg" alt="Black Swan Bistro" />
	</div>
	<ul class="nav-links">
		<li><a href="#" class="nav-link">Home</a></li>
		<li><a href="#" class="nav-link">Menu</a></li>
		<li><a href="#" class="nav-link">About</a></li>
		<li><a href="#" class="nav-link">Contact</a></li>
	</ul>
</nav>
```

2. **CSS Challenge**:

```css
.main-nav {
	/* Add:
       - Display flex
       - Justify content
       - Align items
       - Background (Bistro Tan)
       - Padding
    */
}

.logo {
	/* Add:
       - Max width
       - Margin
    */
}

.nav-links {
	/* Add:
       - Display flex
       - Gap
       - List style
       - Margin
    */
}

.nav-link {
	/* Add:
       - Padding
       - Color (Bistro Red)
       - Text decoration
       - Hover effects
    */
}
```

## Common Flexbox Patterns

### 1. Centered Content

```css
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}
```

### 2. Navigation Bar

```css
.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
}
```

### 3. Card Layout

```css
.card-container {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}

.card {
	flex: 1 1 300px;
}
```

<div class="warning-box">
<h3>Common Mistakes</h3>
<ul>
<li>Forgetting to set display: flex on container</li>
<li>Confusing main and cross axes</li>
<li>Not considering flex-wrap for responsive layouts</li>
</ul>
</div>

## What's Next?

Congratulations! You've completed the CSS Basics series. To practice your Flexbox skills, try:

<div class="tip-box">
<h3>Practice Resource</h3>
<p>Try <a href="https://flexboxfroggy.com/" target="_blank">Flexbox Froggy</a> - a fun game to master Flexbox properties while helping frogs reach their lilypads!</p>
</div>

Ready to advance your CSS skills? Continue to our Intermediate CSS series:

- CSS Grid
- Advanced Flexbox
- Responsive Design
- CSS Variables
- Transitions & Animations

</div>
