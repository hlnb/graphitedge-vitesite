---
title: Building the Rotto Rocks Photo Gallery
description: Create an accessible and responsive photo gallery showcasing Rottnest Island's beauty
difficulty: Intermediate
prerequisites:
  - HTML Basics
  - CSS Basics
  - Image Links
prev:
  text: 'Image Links'
  link: '/tutorials/beginner/image-links'
next:
  text: 'Tailwind Gallery'
  link: '/tutorials/intermediate/photo-gallery/tailwind-gallery'
---

# Building the Rotto Rocks Photo Gallery

::: tip Skill Level - Intermediate
This tutorial builds upon beginner concepts and introduces:

- Advanced CSS Grid layouts
- Responsive design techniques
- Interactive hover effects
- Accessibility best practices
- Image optimization strategies
  :::

# Building the Rotto Rocks Photo Gallery

::: tip Project Context
In this tutorial, we'll build a photo gallery for Rotto Rocks, a website showcasing the natural beauty of Rottnest Island. The gallery will feature:

- Local wildlife (especially quokkas!)
- Beautiful beaches and bays
- Historic landmarks
- Natural landscapes
  :::

## Prerequisites

Before starting this tutorial, make sure you:

- Completed the [Image Links](/tutorials/basics/image-links) tutorial
- Have your Rottnest Island images ready
- Understand basic HTML structure
- Have basic CSS knowledge

## Project Setup

First, let's organize our project files:

```bash
rotto-rocks/
├── images/
│   ├── quokka-selfie.jpg
│   ├── basin-beach.jpg
│   ├── lighthouse.jpg
│   ├── cycling-path.jpg
│   ├── pinky-beach.jpg
│   └── wadjemup-lighthouse.jpg
├── index.html
└── styles.css
```

## Creating the Gallery Structure

Let's build our gallery to showcase Rottnest's highlights:

```html
<div class="gallery">
	<!-- Wildlife Section -->
	<div class="gallery-item">
		<img
			src="images/quokka-selfie.jpg"
			alt="A friendly quokka posing for a selfie at Rottnest Island"
			width="800"
			height="600"
			loading="lazy"
		/>
		<p class="caption" data-type="wildlife">
			Meet the world's happiest animal - our friendly Rottnest quokka!
		</p>
	</div>

	<!-- Beaches Section -->
	<div class="gallery-item">
		<img
			src="images/basin-beach.jpg"
			alt="Crystal clear turquoise waters of The Basin"
			width="800"
			height="600"
			loading="lazy"
		/>
		<p class="caption" data-type="landscape">
			The Basin - Rottnest's natural swimming pool
		</p>
	</div>

	<!-- Landmarks Section -->
	<div class="gallery-item">
		<img
			src="images/wadjemup-lighthouse.jpg"
			alt="Historic Wadjemup Lighthouse against a blue sky"
			width="800"
			height="600"
			loading="lazy"
		/>
		<p class="caption" data-type="landmark">
			Wadjemup Lighthouse - Standing tall since 1896
		</p>
	</div>

	<!-- Activities Section -->
	<div class="gallery-item">
		<img
			src="images/cycling-path.jpg"
			alt="Scenic cycling path along Rottnest's coastline"
			width="800"
			height="600"
			loading="lazy"
		/>
		<p class="caption" data-type="activity">
			Explore 22km of cycling paths around the island
		</p>
	</div>
</div>
```

## Styling the Gallery

Let's create a responsive grid that showcases Rottnest's beauty:

```css
/* Gallery Container */
.gallery {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
	padding: 2rem;
	max-width: 1200px;
	margin: 0 auto;
	background-color: #f8fafc; /* Light background to complement island photos */
}

/* Gallery Items */
.gallery-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	background: white;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease;
}

.gallery-item:hover {
	transform: translateY(-4px);
}

/* Images */
.gallery-item img {
	width: 100%;
	height: 300px;
	object-fit: cover;
}

/* Captions */
.caption {
	padding: 1rem;
	font-size: 1.1rem;
	line-height: 1.4;
	color: #333;
}

/* Category-specific styling */
.caption[data-type='wildlife'] {
	color: #2c5282; /* Blue for wildlife */
}

.caption[data-type='landscape'] {
	color: #2f855a; /* Green for landscapes */
}

.caption[data-type='landmark'] {
	color: #975a16; /* Brown for historic sites */
}

.caption[data-type='activity'] {
	color: #c05621; /* Orange for activities */
}
```

## Adding Navigation

Let's add a "Back to Top" button for easy navigation:

```css
.back-to-top {
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	background: #2b6cb0; /* Ocean blue to match Rottnest's waters */
	color: white;
	padding: 0.75rem 1.25rem;
	border-radius: 9999px;
	text-decoration: none;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s ease;
}

.back-to-top:hover {
	transform: translateY(-2px);
	background: #2c5282;
}

.back-to-top:focus {
	outline: 3px solid #90cdf4;
	outline-offset: 2px;
}
```

## Complete Implementation

Here's the full code for our Rotto Rocks gallery:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Rotto Rocks - Discover Rottnest Island's Beauty</title>
		<link rel="stylesheet" href="styles.css" />
	</head>
	<body>
		<header>
			<h1>Discover Rottnest Island</h1>
			<p>
				Experience the natural wonders of Western Australia's favorite island
				getaway
			</p>
		</header>

		<!-- Gallery implementation from above -->

		<a href="#top" class="back-to-top" aria-label="Scroll back to top">
			Back to Top
		</a>
	</body>
</html>
```

::: tip Content Tips

- Use high-quality images that showcase Rottnest's unique features
- Write descriptive captions that inform visitors about the location
- Include a mix of wildlife, landscapes, and activities
- Ensure all images are optimized for web use
  :::

::: warning Important Checks

- Test gallery responsiveness on different devices
- Verify all image alt text is descriptive
- Ensure captions are accurate and informative
- Check color contrast for accessibility
- Test loading performance with multiple images
  :::

## Next Steps

Now that you've built the Rotto Rocks gallery, you can:

1. Move on to the [Tailwind Gallery](/tutorials/tailwind/photo-gallery) tutorial to learn a utility-first approach
2. Add more Rottnest Island images to your gallery
3. Implement image filtering by category
4. Add image click interactions
5. Enhance the gallery with more animations
