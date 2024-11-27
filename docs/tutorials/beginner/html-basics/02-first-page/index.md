---
title: Your First HTML Page
description: Learn the essential structure of an HTML document and create your first web page
difficulty: beginner
tags: ['html', 'web fundamentals']
duration: '45 minutes'
prev:
  text: 'Introduction to HTML'
  link: '../01-introduction/'
next:
  text: 'Text Elements'
  link: '../03-text-elements/'
---

# Your First HTML Page

## Basic HTML Document Structure

Every HTML page needs a basic structure. Here's the template:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Page Title</title>
	</head>
	<body>
		<!-- Your content goes here -->
	</body>
</html>
```

Let's understand each part:

- `<!DOCTYPE html>` tells browsers this is an HTML5 document
- `<html>` is the root element of the page
- `<head>` contains metadata about the document
- `<body>` contains the visible content

## Essential Head Elements

The `<head>` section contains important information about your page:

```html
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Black Swan Bistro</title>
</head>
```

- `charset` defines the character encoding
- `viewport` helps with mobile responsiveness
- `title` sets the page title shown in browser tabs

## Project: Black Swan Bistro

Let's create a real webpage for a Perth restaurant. Here's our content:

::: details Content to Use

```text
Black Swan Bistro

The Restaurant
The Black Swan Bistro offers casual lunch and dinner fare in a relaxed riverside atmosphere.
The menu changes seasonally to highlight the freshest Western Australian ingredients.

Catering
You enjoy the Swan River views. We'll handle the cooking. Black Swan Catering can handle events
from casual sundowners to elegant corporate functions.

Location and Hours
Elizabeth Quay, Perth;
Monday through Thursday 11am to 9pm;
Friday and Saturday, 11am to midnight
```

:::

Let's structure this content with HTML:

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

		<h2>The Restaurant</h2>
		<p>
			The Black Swan Bistro offers casual lunch and dinner fare in a relaxed
			riverside atmosphere. The menu changes seasonally to highlight the
			freshest Western Australian ingredients.
		</p>

		<h2>Catering</h2>
		<p>
			You enjoy the Swan River views. We'll handle the cooking. Black Swan
			Catering can handle events from casual sundowners to elegant corporate
			functions.
		</p>

		<h2>Location and Hours</h2>
		<p>
			Elizabeth Quay, Perth;<br />
			Monday through Thursday 11am to 9pm;<br />
			Friday and Saturday, 11am to midnight
		</p>
	</body>
</html>
```

::: tip
Notice how we used:

- `<h1>` for the main title
- `<h2>` for section headings
- `<p>` for paragraphs
- `<br>` for line breaks
  :::

## Understanding the Code

1. **Headings**: We used `<h1>` for the restaurant name and `<h2>` for section titles
2. **Paragraphs**: Each block of text is wrapped in `<p>` tags
3. **Line Breaks**: We used `<br>` to create line breaks in the address and hours

## Try It Yourself

1. Create a new file named `index.html`
2. Copy the HTML structure above
3. Save and open in your browser
4. Try making these changes:
   - Add your own restaurant name
   - Change the hours
   - Add more sections

## What's Next?

In the next lesson, we'll learn more about text elements and how to create lists, which will help us enhance our bistro page further.

::: info Practice
Before moving on:

1. Create the bistro page as shown
2. Try changing the content to a different business
3. Experiment with different headings (`<h1>` through `<h6>`)
   :::
