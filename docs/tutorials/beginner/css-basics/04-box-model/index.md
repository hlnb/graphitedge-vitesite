---
title: The CSS Box Model
description: Learn how CSS handles spacing and layout with the box model
difficulty: beginner
tags: ['css', 'box-model', 'layout']
duration: '45 minutes'
prev:
  text: 'Colors & Typography'
  link: '/tutorials/beginner/css-basics/03-colors-typography/'
next:
  text: 'Flexbox Basics'
  link: '/tutorials/beginner/css-basics/05-flexbox/'
---

<div class="tutorial-container">

# The CSS Box Model

Every element in HTML is treated as a box. Understanding how these boxes work is crucial for layout and spacing.

<div class="highlight-box">
<h3>In this tutorial, you'll learn:</h3>
<ul>
<li>The components of the box model</li>
<li>How to control spacing</li>
<li>Box sizing behavior</li>
<li>Display properties</li>
</ul>
</div>

## Box Model Components

### 1. Content

The actual content (text, images, etc.)

```css
.box {
	width: 200px;
	height: 100px;
}
```

### 2. Padding

Space between content and border

```css
.box {
	padding: 20px; /* All sides */
	padding-top: 10px; /* Individual side */
	padding: 10px 20px; /* Top/bottom left/right */
	padding: 10px 20px 15px 25px; /* Top right bottom left */
}
```

### 3. Border

Line around the padding

```css
.box {
	border: 1px solid black; /* Width style color */
	border-width: 2px;
	border-style: solid;
	border-color: #000000;
	border-radius: 8px; /* Rounded corners */
}
```

### 4. Margin

Space outside the border

```css
.box {
	margin: 20px; /* All sides */
	margin-top: 10px; /* Individual side */
	margin: 10px auto; /* Center horizontally */
	margin: 10px 20px 15px 25px; /* Top right bottom left */
}
```

## Box Sizing

The `box-sizing` property changes how width and height are calculated:

```css
/* Default */
.content-box {
	box-sizing: content-box;
	width: 200px;
	padding: 20px;
	border: 1px solid black;
	/* Total width = 242px */
}

/* Including padding and border */
.border-box {
	box-sizing: border-box;
	width: 200px;
	padding: 20px;
	border: 1px solid black;
	/* Total width = 200px */
}
```

<div class="tip-box">
<h3>Modern Practice</h3>
<p>Most developers use border-box for all elements:</p>

```css
* {
	box-sizing: border-box;
}
```

</div>

## Display Properties

The `display` property controls how an element behaves in the layout:

### Block Elements

- Take full width available
- Start on new line
- Can have margin and padding

```css
.block {
	display: block;
}
```

### Inline Elements

- Take only needed width
- Flow with text
- Cannot have vertical margins

```css
.inline {
	display: inline;
}
```

### Inline-Block

- Flow with text
- Can have margin and padding

```css
.inline-block {
	display: inline-block;
}
```

## Practice Exercise: Black Swan Bistro Menu Card

Create a menu item card using the box model:

<div class="tip-box">
<h3>Resources</h3>
<p>Use the <a href="/resources/">Black Swan Bistro colors and fonts</a> from our resources page.</p>
</div>

1. **HTML Structure**:

```html
<div class="menu-card">
	<h3 class="dish-name">Grilled Salmon</h3>
	<p class="description">Fresh Atlantic salmon with herbs and lemon</p>
	<p class="price">$24.99</p>
</div>
```

2. **CSS Challenge**:

```css
.menu-card {
	/* Add:
       - Width
       - Padding
       - Margin
       - Border
       - Background (use Bistro Tan)
       - Border radius
    */
}

.dish-name {
	/* Add:
       - Font family (Playfair Display)
       - Margin
       - Color (Bistro Red)
    */
}

.description {
	/* Add:
       - Font family (Source Sans Pro)
       - Padding
       - Line height
    */
}

.price {
	/* Add:
       - Color (Bistro Orange)
       - Font weight
       - Margin
    */
}
```

<div class="warning-box">
<h3>Common Mistakes</h3>
<ul>
<li>Forgetting to set box-sizing: border-box</li>
<li>Using margins when padding would be more appropriate</li>
<li>Not considering mobile screens when setting fixed widths</li>
</ul>
</div>

## What's Next?

Now that you understand the box model, let's learn about Flexbox for creating flexible layouts.

</div>
