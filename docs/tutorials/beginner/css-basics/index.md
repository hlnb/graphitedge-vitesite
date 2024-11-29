---
title: CSS Fundamentals
description: Learn how to style web pages with CSS
difficulty: beginner
tags: ['css', 'styling', 'design']
duration: '4-5 hours'
prerequisites:
  - HTML Basics
  - Text editor (VS Code)
  - Web browser
---

<div class="tutorial-container">

# CSS Fundamentals

CSS (Cascading Style Sheets) is the language that brings visual style and layout to your web pages. In this tutorial series, you'll learn how to transform plain HTML into beautifully styled websites.

<div class="highlight-box">
Before starting CSS, make sure you:

- Understand basic HTML structure
- Have completed the [HTML Basics](/tutorials/beginner/html-basics/) tutorials
- Are comfortable using your text editor

</div>

## What You'll Learn

1. **CSS Basics**

   - Selectors and properties
   - Colors and typography
   - Box model and spacing
   - Units and values

2. **Layout Fundamentals**

   - Display properties
   - Positioning
   - Flexbox basics
   - Simple grid layouts

3. **Styling Elements**

   - Text and fonts
   - Backgrounds and borders
   - Lists and tables
   - Links and buttons

4. **Responsive Design**
   - Media queries
   - Viewport units
   - Mobile-first approach
   - Breakpoints

## Core Concepts

### 1. The Cascade

CSS rules "cascade" down through your document, with later rules potentially overriding earlier ones. Understanding this hierarchy is crucial for:

- Specificity
- Inheritance
- Rule order

### 2. Selectors

Different ways to target HTML elements:

```css
/* Element selector */
p {
}

/* Class selector */
.highlight {
}

/* ID selector */
#header {
}

/* Combination */
.container p {
}
```

### 3. Box Model

Every element in CSS follows the box model:

<div class="box-model-demo">
  <div class="margin">
    margin
    <div class="border">
      border
      <div class="padding">
        padding
        <div class="content">
          content
        </div>
      </div>
    </div>
  </div>
</div>

### 4. Responsive Design

Websites should look good on all devices:

- Mobile phones
- Tablets
- Desktops
- Large screens

## Tutorial Structure

1. **CSS Introduction**

   - How CSS works
   - Adding styles to HTML
   - Basic syntax

2. **Selectors & Properties**

   - Targeting elements
   - Common properties
   - Values and units

3. **Colors & Typography**

   - Color systems
   - Font properties
   - Text styling

4. **Layout Basics**

   - Box model
   - Display types
   - Positioning

5. **Flexbox**
   - Flexible layouts
   - Alignment
   - Responsive design

## Best Practices

::: highlight-box
Throughout these tutorials, you'll learn:

- Clean, maintainable CSS
- Efficient selectors
- Modern layout techniques
- Browser compatibility
  :::

## Tools We'll Use

1. **Browser Tools**

   - Chrome DevTools
   - CSS inspection
   - Live editing

2. **VS Code Features**
   - CSS IntelliSense
   - Live Server
   - Color previews

## Projects

You'll build several projects, including:

1. Styled text content
2. Navigation menus
3. Card layouts
4. Responsive pages

## Time Commitment

Each section takes about 30-45 minutes to complete. Practice exercises are included to reinforce your learning.

::: tip Learning Approach
CSS is best learned by doing. We encourage you to:

- Experiment with properties
- Use browser dev tools
- Modify example code
- Build small projects
  :::

## Prerequisites Check

Before starting, verify you can:

1. Write basic HTML
2. Use your text editor
3. View pages in a browser
4. Use browser developer tools

## Ready to Begin?

Start with [CSS Introduction](./01-introduction/) to learn how CSS works and how to add styles to your HTML pages.

</div>
