---
title: CSS Selectors & Properties
description: Learn how to select and style HTML elements
difficulty: beginner
tags: ['css', 'selectors', 'properties']
duration: '45 minutes'
prev:
  text: 'Introduction to CSS'
  link: '/tutorials/beginner/css-basics/01-introduction/'
next:
  text: 'Colors & Typography'
  link: '/tutorials/beginner/css-basics/03-colors-typography/'
---

<div class="tutorial-container">

# CSS Selectors & Properties

CSS selectors are patterns that target HTML elements for styling. Understanding selectors is key to applying styles effectively.

<div class="highlight-box">
In this tutorial, you'll learn:

- Different types of selectors
- How to combine selectors
- Common CSS properties
- Selector specificity
</div>

## Basic Selectors

### 1. Element Selector

Targets all elements of a specific type:

```css
p {
	color: #4d4d4d;
}
```

### 2. Class Selector

Targets elements with a specific class:

```css
.highlight {
	background-color: #ffeb3b;
}
```

### 3. ID Selector

Targets a single element with a specific ID:

```css
#header {
	background-color: #333333;
}
```

## Combining Selectors

### 1. Descendant Selector

Targets elements inside other elements:

```css
.container p {
	margin: 10px;
}
```

### 2. Child Selector

Targets direct children only:

```css
.nav > li {
	display: inline-block;
}
```

### 3. Multiple Selectors

Apply same styles to multiple selectors:

```css
h1,
h2,
h3 {
	font-family: Arial, sans-serif;
}
```

## Common Properties

### Text Styling

```css
p {
	font-size: 16px;
	color: #333333;
	line-height: 1.5;
	text-align: center;
}
```

### Box Properties

```css
.box {
	width: 200px;
	height: 100px;
	padding: 20px;
	margin: 10px;
	border: 1px solid #000000;
}
```

### Background

```css
.section {
	background-color: #f5f5f5;
	background-image: url('pattern.png');
	background-repeat: no-repeat;
	background-position: center;
}
```

## Selector Specificity

Specificity determines which styles are applied when multiple rules target the same element:

1. **ID Selectors**: Highest specificity

```css
#header {
	/* These styles win over class and element selectors */
}
```

2. **Class Selectors**: Medium specificity

```css
.nav-item {
	/* These styles win over element selectors */
}
```

3. **Element Selectors**: Lowest specificity

```css
p {
	/* These styles can be overridden by class and ID selectors */
}
```

## Project Exercises

::: tip Project Resources
Before starting these exercises:

1. Visit the [Resources section](/resources/) for:
   - Color palettes
   - Logo files
   - Style guidelines
2. Use the Black Swan Bistro color palette for consistent branding
   :::

### Black Swan Bistro Website

Create styles for the bistro's menu page:

1. **HTML Structure**:

```html:graphitedge-workspace/graphitedge-new/docs/.vitepress/config.ts
<header class="bistro-header">
    <img src="/assets/resources/blackswan-logo.svg" alt="Black Swan Bistro">
    <nav class="main-nav">
        <ul>
            <li><a href="#" class="nav-link active">Menu</a></li>
            <li><a href="#" class="nav-link">About</a></li>
            <li><a href="#" class="nav-link">Contact</a></li>
        </ul>
    </nav>
</header>

<main class="menu-content">
    <h1>Our Menu</h1>

    <section class="menu-section">
        <h2>Appetizers</h2>
        <div class="menu-item">
            <h3>Garlic Bread</h3>
            <p class="description">Fresh baked with herbs</p>
            <p class="price">$6.99</p>
        </div>
        <div class="menu-item">
            <h3>Bruschetta</h3>
            <p class="description">Toasted bread with tomatoes</p>
            <p class="price">$8.99</p>
        </div>
    </section>
</main>
```

2. **CSS Challenge**:

```css
/* 1. Style the header using Bistro Tan background */
.bistro-header {
	background-color: #e3c5a9;
	/* Add: 
       - Padding
       - Box shadow
    */
}

/* 2. Style the navigation with Bistro Red */
.main-nav {
	/* Use color: #7D1C20 for links
       Add:
       - Flex display
       - Spacing
       - Font styles
    */
}

/* 3. Style menu sections */
.menu-section {
	/* Use Bistro Orange (#E58926) for accents
       Add:
       - Margins
       - Borders
       - Background
    */
}

/* 4. Style menu items */
.menu-item {
	/* Use colors from the palette:
       - Text: Black (#000000)
       - Background: Light Gray (#F5F5F5)
       Add:
       - Layout
       - Typography
       - Hover effects
    */
}
```

### Rottnest Rocks Project

Style the tour information cards:

1. **HTML Structure**:

```html
<section class="tour-packages">
	<h2>Island Tours</h2>

	<div class="tour-card">
		<img src="quokka-tour.jpg" alt="Quokka Tour" class="tour-image" />
		<div class="tour-info">
			<h3>Quokka Discovery</h3>
			<p class="tour-description">Meet the happiest animals on Earth!</p>
			<p class="tour-price">From $45</p>
			<a href="#" class="book-button">Book Now</a>
		</div>
	</div>

	<div class="tour-card featured">
		<img src="island-tour.jpg" alt="Island Tour" class="tour-image" />
		<div class="tour-info">
			<h3>Complete Island Tour</h3>
			<p class="tour-description">Explore all the island highlights</p>
			<p class="tour-price">From $89</p>
			<a href="#" class="book-button">Book Now</a>
		</div>
	</div>
</section>
```

2. **CSS Challenge**:

```css
/* 1. Style all tour cards */
.tour-card {
	/* Add:
       - Card layout
       - Shadow
       - Border radius
    */
}

/* 2. Style featured tours differently */
.tour-card.featured {
	/* Add:
       - Special border
       - Different background
       - Larger size
    */
}

/* 3. Style tour images */
.tour-image {
	/* Add:
       - Size constraints
       - Object fit
       - Border radius
    */
}

/* 4. Style booking buttons */
.book-button {
	/* Add:
       - Button styles
       - Hover effects
       - Transitions
    */
}
```

::: tip Project Goals
For each project:

1. Use multiple types of selectors
2. Apply specificity principles
3. Create consistent styling
4. Add hover effects
5. Test responsive behavior
   :::

## Common Mistakes

1. **Over-specific selectors**

```css
/* ❌ Too specific */
html body div.container nav ul li a {
}

/* ✅ Better */
.nav-link {
}
```

2. **Overusing IDs**

```css
/* ❌ Hard to reuse */
#nav-link {
}

/* ✅ More flexible */
.nav-link {
}
```

3. **Forgetting specificity**

```css
/* ❌ Won't override ID styles */
.button {
}

/* ✅ More specific when needed */
#submit-button {
}
```

## What's Next?

Now that you understand selectors, let's learn about colors and typography in CSS.

</div>
