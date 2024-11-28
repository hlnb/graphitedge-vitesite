---
title: Colors & Typography in CSS
description: Learn how to style text and use colors effectively
difficulty: beginner
tags: ['css', 'colors', 'typography', 'fonts']
duration: '45 minutes'
prev:
  text: 'Selectors & Properties'
  link: '/tutorials/beginner/css-basics/02-selectors/'
next:
  text: 'Box Model & Layout'
  link: '/tutorials/beginner/css-basics/04-box-model/'
---

<div class="tutorial-container">

# Colors & Typography in CSS

Learn how to add colors and style text in your web pages.

::: warning Note on Spelling
While we use Australian English throughout our tutorials, CSS properties use American spelling:

- CSS: `color: #000000;`
- Not: `colour: #000000;`
  :::

## Working with Colors

### Color Formats

1. **Keyword Colors**
<div class="code-demo">
  <div class="code-block">

```css
p {
	color: red;
	background-color: white;
}
```

  </div>
  <div class="demo-block">
    <p style="color: red; background-color: white; padding: 10px;">
      This text is red on a white background
    </p>
  </div>
</div>

2. **Hexadecimal (Hex) Colors**
<div class="code-demo">
  <div class="code-block">

```css
.example {
	/* 6-digit hex */
	color: #ff0000;

	/* 3-digit shorthand */
	background: #f00;
}
```

  </div>
  <div class="demo-block">
    <p style="color: #FF0000; background: #F00; padding: 10px;">
      This text uses hex colors
    </p>
  </div>
</div>

3. **RGB Colors**

```css
.example {
	color: rgb(255, 0, 0); /* Red */
	background: rgba(255, 0, 0, 0.5); /* Semi-transparent red */
}
```

4. **HSL Colors** (Hue, Saturation, Lightness)

```css
.example {
	color: hsl(0, 100%, 50%); /* Red */
	background: hsla(0, 100%, 50%, 0.5); /* Semi-transparent red */
}
```

### Applying Colors

```css
.element {
	/* Text color */
	color: #333333;

	/* Background */
	background-color: #f5f5f5;

	/* Borders */
	border: 1px solid #000000;

	/* Box shadow */
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
```

## Typography

### Font Properties

1. **Font Family**
<div class="code-demo">
  <div class="code-block">

```css
.text {
	font-family: Arial, Helvetica, sans-serif;
}
.serif-text {
	font-family: Georgia, serif;
}
.mono-text {
	font-family: monospace;
}
```

  </div>
  <div class="demo-block">
    <p style="font-family: Arial, Helvetica, sans-serif;">
      This text uses Arial (sans-serif)
    </p>
    <p style="font-family: Georgia, serif;">
      This text uses Georgia (serif)
    </p>
    <p style="font-family: monospace;">
      This text uses monospace
    </p>
  </div>
</div>

2. **Font Size**
<div class="code-demo">
  <div class="code-block">

```css
.text {
	font-size: 16px;
	font-size: 1.5rem;
	font-size: 120%;
}
```

  </div>
  <div class="demo-block">
    <p style="font-size: 16px;">This is 16px text</p>
    <p style="font-size: 1.5rem;">This is 1.5rem text</p>
    <p style="font-size: 120%;">This is 120% text</p>
  </div>
</div>

3. **Font Weight**

```css
.text {
	/* Keywords */
	font-weight: normal;
	font-weight: bold;

	/* Numeric values */
	font-weight: 400; /* normal */
	font-weight: 700; /* bold */
}
```

4. **Font Style**

```css
.text {
	font-style: normal;
	font-style: italic;
	font-style: oblique;
}
```

### Text Properties

1. **Text Alignment**

```css
.text {
	text-align: left;
	text-align: center;
	text-align: right;
	text-align: justify;
}
```

2. **Line Height**

```css
p {
	/* Unitless (recommended) */
	line-height: 1.5;

	/* With units */
	line-height: 24px;
	line-height: 150%;
}
```

3. **Text Decoration**

```css
.text {
	text-decoration: none;
	text-decoration: underline;
	text-decoration: line-through;
}
```

4. **Text Transform**

```css
.text {
	text-transform: none;
	text-transform: uppercase;
	text-transform: lowercase;
	text-transform: capitalize;
}
```

## Web Fonts

### Using Google Fonts

```html
<head>
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</head>
```

```css
body {
	font-family: 'Open Sans', sans-serif;
}
```

## Practice Exercise

Style a restaurant menu using the Black Swan Bistro colors:

::: tip Project Resources
Remember to check the [Resources section](/resources/) for:

- Black Swan Bistro color palette
- Black Swan Bistro fonts
  :::

1. **HTML Structure**:

```html
<div class="menu-container">
	<h1 class="menu-title">Our Specialties</h1>

	<div class="menu-item">
		<h2>Grilled Salmon</h2>
		<p class="description">Fresh Atlantic salmon with herbs</p>
		<p class="price">$24.99</p>
	</div>

	<div class="menu-item featured">
		<h2>Black Swan Signature Steak</h2>
		<p class="description">Premium cut with red wine sauce</p>
		<p class="price">$34.99</p>
	</div>
</div>
```

2. **CSS Challenge**:

```css
/* Use the Black Swan Bistro color palette */
.menu-container {
	background-color: #f5f5f5;
	padding: 2rem;
}

.menu-title {
	color: #7d1c20; /* Bistro Red */
	font-family: 'Georgia', serif;
	/* Add:
       - Font size
       - Text alignment
       - Margins
    */
}

.menu-item {
	/* Add:
       - Background color
       - Typography
       - Spacing
    */
}

.menu-item.featured {
	/* Add:
       - Special styling
       - Different colors
       - Emphasis
    */
}

.price {
	color: #e58926; /* Bistro Orange */
	/* Add:
       - Font weight
       - Text alignment
       - Special effects
    */
}
```

::: tip Typography Tips

1. Use no more than 2-3 font families
2. Maintain consistent font sizes
3. Use relative units (rem/em) for scalability
4. Ensure sufficient contrast for readability
   :::

## Common Mistakes

1. **Poor Contrast**

```css
/* ❌ Hard to read */
.text {
	color: #cccccc;
	background: #ffffff;
}

/* ✅ Better contrast */
.text {
	color: #333333;
	background: #ffffff;
}
```

2. **Too Many Fonts**

```css
/* ❌ Too complex */
.page {
	font-family: Arial;
}
.title {
	font-family: 'Times New Roman';
}
.subtitle {
	font-family: Verdana;
}
.text {
	font-family: Georgia;
}

/* ✅ Better approach */
body {
	font-family: Arial, sans-serif;
}
h1,
h2,
h3 {
	font-family: Georgia, serif;
}
```

## What's Next?

Now that you can style text and use colors, let's learn about the CSS Box Model and layout techniques.

</div>
