---
title: Text Elements
description: Learn how to structure and format text content in HTML
difficulty: beginner
tags: ['html', 'web fundamentals']
duration: '45 minutes'
prev:
  text: 'Your First HTML Page'
  link: '../02-first-page/'
next:
  text: 'Links and Images'
  link: '../04-links-images/'
---

# Text Elements

## Headings

HTML provides six levels of headings, from `<h1>` to `<h6>`:

```html
<h1>Main Title</h1>
<h2>Major Section</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
<h5>Minor Section</h5>
<h6>Smallest Heading</h6>
```

::: tip Best Practice
Use only one `<h1>` per page, and maintain a logical heading hierarchy. Don't skip levels (like going from `<h2>` to `<h4>`).
:::

## Paragraphs and Line Breaks

Paragraphs are created with the `<p>` tag:

```html
<p>
	This is a paragraph. It can contain multiple sentences and will maintain
	proper spacing.
</p>
<p>This is another paragraph. Notice the space between paragraphs.</p>
```

For line breaks within paragraphs, use `<br>`:

```html
<p>
	First line<br />
	Second line<br />
	Third line
</p>
```

## Text Formatting

HTML provides several ways to emphasize text:

```html
<p>This text is <strong>very important</strong>.</p>
<p>This text has <em>added emphasis</em>.</p>
<p>This is <mark>highlighted</mark> text.</p>
```

## Lists

### Unordered Lists

Use `<ul>` for bullet points:

```html
<ul>
	<li>Coffee</li>
	<li>Tea</li>
	<li>Water</li>
</ul>
```

### Ordered Lists

Use `<ol>` for numbered lists:

```html
<ol>
	<li>Preheat oven</li>
	<li>Mix ingredients</li>
	<li>Bake for 20 minutes</li>
</ol>
```

## Project: Enhancing the Black Swan Bistro

Let's add a menu section to our bistro page:

```html
<h2>Sample Menu</h2>
<h3>Starters</h3>
<ul>
	<li>Fresh Fremantle Octopus with native herbs</li>
	<li>Margaret River Brie with local honeycomb</li>
	<li>Southwest Marron Bisque</li>
</ul>

<h3>Main Courses</h3>
<ul>
	<li>Grilled Cone Bay Barramundi</li>
	<li>Stirling Ranges Beef Fillet</li>
	<li>Rottnest Island Salt and Pepper Squid</li>
</ul>
```

## Special Characters

Sometimes you need special characters that aren't on your keyboard:

```html
<p>The dinner special &mdash; Exmouth Gulf Prawns</p>
<p>Hours: 11am&ndash;9pm</p>
<p>Fresh oysters &amp; champagne</p>
```

Common special characters:

- `&mdash;` — (long dash)
- `&ndash;` – (medium dash)
- `&amp;` & (ampersand)
- `&copy;` © (copyright)

## Try It Yourself

1. Add the menu section to your bistro page
2. Create a list of local ingredients
3. Add emphasis to key words
4. Try using special characters

## What's Next?

In the next lesson, we'll learn how to add links and images to make our page more interactive and visually appealing.

::: info Practice
Before moving on:

1. Create both ordered and unordered lists
2. Try different text formatting options
3. Add a new section to the bistro page using the elements learned
4. Experiment with special characters
   :::
