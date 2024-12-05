---
title: Project Resources
description: Download assets and resources for tutorial projects
---

<div class="tutorial-container">

# Project Resources

Welcome to our resources page! Here you'll find all the assets and materials needed for the tutorial projects.

## Logos and Branding

### Black Swan Logo

- [Download Black Swan Logo (SVG)](/assets/resources/blackswan-logo.svg)

::: tip Using Logos
To use logos in your HTML:

```html
<img src="images/blackswan-logo.svg" alt="Black Swan Logo" />
```

Remember to:

1. Create an `images` folder in your project
2. Save the logo in your project's images folder
3. Use relative paths in your HTML
   :::

## Style Guides

## Project Color Palettes

### Black Swan Bistro Colors

<div class="color-palette">
  <div class="color-swatch">
    <div class="swatch" style="background-color: #E58926;"></div>
    <div class="color-details">
      <p class="color-name">Bistro Orange</p>
      <p class="color-hex">#E58926</p>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="swatch" style="background-color: #7D1C20;"></div>
    <div class="color-details">
      <p class="color-name">Bistro Red</p>
      <p class="color-hex">#7D1C20</p>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="swatch" style="background-color: #E3C5A9;"></div>
    <div class="color-details">
      <p class="color-name">Bistro Tan</p>
      <p class="color-hex">#E3C5A9</p>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="swatch" style="background-color: #000000;"></div>
    <div class="color-details">
      <p class="color-name">Black</p>
      <p class="color-hex">#000000</p>
    </div>
  </div>

  <div class="color-swatch">
    <div class="swatch" style="background-color: #F5F5F5;"></div>
    <div class="color-details">
      <p class="color-name">Light Gray</p>
      <p class="color-hex">#F5F5F5</p>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="swatch" style="background-color: #FFFFFF;"></div>
    <div class="color-details">
      <p class="color-name">White</p>
      <p class="color-hex">#FFFFFF</p>
    </div>
  </div>
</div>

::: tip Color Usage

- **Bistro Orange (#E58926)**: Primary accent color, calls-to-action
- **Bistro Red (#7D1C20)**: Secondary color, headers
- **Bistro Tan (#E3C5A9)**: Header and footer backgrounds
- **Black (#000000)**: Text, icons
- **Light Gray (#F5F5F5)**: Content backgrounds, cards
- **White (#FFFFFF)**: Text on dark backgrounds, spacing
  :::

## Typography Guidelines

### Black Swan Bistro Fonts

::: tip Getting the Fonts

1. Visit [Google Fonts](https://fonts.google.com) to find:
   - [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
   - [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro)
2. Click the "+ Select this style" button for each weight needed
3. Copy the generated `<link>` tag for your HTML
   :::

<div class="font-demo">
  <div class="font-family">
    <h3>Headings & Brand Name: Playfair Display</h3>
    <div class="font-example" style="font-family: 'Playfair Display', serif;">
      <p class="large">Black Swan Bistro</p>
      <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p>abcdefghijklmnopqrstuvwxyz</p>
      <p>1234567890</p>
    </div>
    ```html
    <!-- Add to your HTML head -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
    ```
    ```css
    /* CSS usage */
    h1, h2, h3, .brand-name {
        font-family: 'Playfair Display', serif;
    }
    ```
    
    <div class="font-weights">
      <p style="font-weight: 400">Regular (400): The quick brown fox</p>
      <p style="font-weight: 600">Semi-bold (600): The quick brown fox</p>
      <p style="font-weight: 700">Bold (700): The quick brown fox</p>
    </div>
  </div>

  <div class="font-family">
    <h3>Body Text: Source Sans Pro</h3>
    <div class="font-example" style="font-family: 'Source Sans Pro', sans-serif;">
      <p class="large">Menu Descriptions & Content</p>
      <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p>abcdefghijklmnopqrstuvwxyz</p>
      <p>1234567890</p>
    </div>
    ```html
    <!-- Add to your HTML head -->
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet">
    ```
    ```css
    /* CSS usage */
    body {
        font-family: 'Source Sans Pro', sans-serif;
    }
    ```
  </div>
</div>

::: warning Important
Always include both fonts in your HTML `<head>` section:

```html
<!-- Add both font families -->
<link
	href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+Pro:wght@400;600&display=swap"
	rel="stylesheet"
/>
```

This combined link is more efficient than using separate links.
:::

::: tip Typography Usage

- **Playfair Display**

  - Restaurant name
  - Page headings (h1, h2, h3)
  - Menu section titles
  - Font weights: 400 (regular), 600 (semi-bold), 700 (bold)

- **Source Sans Pro**
  - Body text
  - Menu descriptions
  - Navigation links
  - Buttons
  - Font weights: 400 (regular), 600 (semi-bold)

:::

### Font Sizes

```css
/* Recommended sizes */
h1,
.page-title {
	font-size: 2.5rem; /* 40px */
	line-height: 1.2;
}

h2,
.section-title {
	font-size: 2rem; /* 32px */
	line-height: 1.3;
}

h3,
.menu-item-title {
	font-size: 1.5rem; /* 24px */
	line-height: 1.4;
}

body,
p {
	font-size: 1rem; /* 16px */
	line-height: 1.5;
}

.small-text {
	font-size: 0.875rem; /* 14px */
	line-height: 1.4;
}
```

## Extension Project: Rotto Rocks Website

### Content Resources

Build a website for Rottnest Island (Rotto Rocks) using these content files:

- [Main Content](./RottoRocks/content.txt) - Contains general information, history, and key facts about Rottnest Island
- [Attractions](./RottoRocks/attractions.txt) - Details about beaches, trails, activities, and points of interest
- [Visitor Information](./RottoRocks/visitor-info.txt) - Transport, accommodation, and practical visitor information

::: tip Project Requirements

1. Use semantic HTML to structure the content
2. Create a responsive layout
3. Include appropriate images (source your own)
4. Implement navigation between different sections
5. Style the content to be visually appealing and readable
   :::

## Project Assets

Coming soon:

- Sample images
- Icon sets
- Background patterns
- Placeholder content

## Code Templates

Coming soon:

- HTML boilerplates
- CSS frameworks
- JavaScript snippets
- Project starter files

<div class="highlight-box">
All resources are:
- Free to use in tutorials
- Optimized for web
- Regularly updated
</div>
</div>
