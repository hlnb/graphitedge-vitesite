---
title: Links and Images
description: Learn how to add hyperlinks and images to your web pages
difficulty: beginner
tags: ['html', 'web fundamentals']
duration: '45 minutes'
prev:
  text: 'Text Elements'
  link: '../03-text-elements/'
next:
  text: 'Document Structure'
  link: '../05-document-structure/'
---

# Links and Images

## Hyperlinks

Links are created with the `<a>` tag and the `href` attribute:

```html
<a href="https://example.com">Click here</a>
```

### Types of Links

1. **External Links** (to other websites):

```html
<a href="https://www.westernaustralia.com">Visit Western Australia</a>
```

2. **Internal Links** (to pages on your site):

```html
<a href="/menu.html">View Our Menu</a>
```

3. **Email Links**:

```html
<a href="mailto:info@blackswanbistro.com.au">Email Us</a>
```

4. **Phone Links**:

```html
<a href="tel:+61893214567">Call Us</a>
```

::: tip Best Practice
Always make your link text descriptive. Avoid using "click here" or "read more" alone.
:::

## Images

Images are added with the `<img>` tag:

```html
<img src="swan.jpg" alt="Black Swan on the river" />
```

The `alt` attribute provides:

- Text for screen readers
- Fallback if image fails to load
- SEO benefits

### Image Formats

- `.jpg` - Photos and complex images
- `.png` - Graphics, logos, transparency
- `.gif` - Simple animations
- `.svg` - Scalable graphics, logos
- `.webp` - Modern format for web images

## File Paths

Understanding file paths is crucial for links and images:

```
your-site/
├── index.html
├── menu.html
├── images/
│   ├── logo.png
│   └── restaurant.jpg
└── about/
    └── contact.html
```

### Path Examples

```html
<!-- From index.html -->
<img src="images/logo.png" />
<!-- Relative path -->
<img src="/images/logo.png" />
<!-- Root-relative path -->
<img src="https://example.com/logo.png" />
<!-- Absolute path -->
```

## Project: Enhancing Black Swan Bistro

Let's add images and links to our bistro page:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Black Swan Bistro</title>
	</head>
	<body>
		<h1>Black Swan Bistro</h1>

		<img
			src="images/restaurant-front.jpg"
			alt="Black Swan Bistro riverside dining area"
		/>

		<h2>The Restaurant</h2>
		<p>
			The Black Swan Bistro offers casual lunch and dinner fare in a relaxed
			riverside atmosphere. The menu changes seasonally to highlight the
			freshest Western Australian ingredients.
		</p>

		<h2>Quick Links</h2>
		<ul>
			<li><a href="menu.html">Our Menu</a></li>
			<li><a href="reservations.html">Make a Reservation</a></li>
			<li><a href="https://maps.google.com">Find Us</a></li>
			<li><a href="tel:+61893214567">Call Us</a></li>
		</ul>
	</body>
</html>
```

## Image Best Practices

1. **Size Images Appropriately**

   - Don't use larger images than needed
   - Consider mobile users

2. **Use Descriptive Alt Text**

   ```html
   <!-- Good -->
   <img src="dish.jpg" alt="Grilled Cone Bay Barramundi with native herbs" />

   <!-- Not as helpful -->
   <img src="dish.jpg" alt="Fish dish" />
   ```

3. **Specify Image Dimensions**
   ```html
   <img src="logo.png" width="200" height="100" alt="Black Swan Bistro logo" />
   ```

## Try It Yourself

1. Add the restaurant logo to your page
2. Create a navigation menu with links
3. Add images of featured dishes
4. Create an email contact link

## What's Next?

In the next lesson, we'll learn about document structure and semantic HTML to better organize our content.

::: info Practice
Before moving on:

1. Create a gallery of food images
2. Add social media links
3. Create a contact section with various link types
4. Experiment with different image formats
   :::
