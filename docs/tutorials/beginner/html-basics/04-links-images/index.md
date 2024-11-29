---
title: Links and Images
description: Learn how to add links and images to your web pages
difficulty: beginner
tags: ['html', 'web fundamentals']
duration: '45 minutes'
prev:
  text: 'Text Elements'
  link: '../03-text-elements/'
next:
  text: 'Lists and Tables'
  link: '../05-lists-tables/'
---

# Links and Images

## Understanding Links

HTML links (anchor tags) allow users to navigate between pages and resources. Let's explore different types of links:

<div class="codepen-wrapper">
<iframe height="400" 
        style="width: 100%;" 
        scrolling="no" 
        title="HTML-Basics-04-links" 
        src="https://codepen.io/hlnbee/embed/bNbNrdM?default-tab=html%2Cresult" 
        frameborder="no" 
        loading="lazy" 
        allowtransparency="true" 
        allowfullscreen="true">
</iframe>
</div>

<div class="highlight-box">
<h3>Link Types and Attributes</h3>
<ul>
<li><code>href</code> - The URL the link points to</li>
<li><code>target="_blank"</code> - Opens link in new tab</li>
<li><code>mailto:</code> - Creates email links</li>
<li><code>tel:</code> - Creates phone number links</li>
</ul>
</div>

## Interactive Exercise: Restaurant Navigation

Create a navigation section for a restaurant website:

- Menu link
- Reservation link
- Contact information links
- Social media links

<div class="codepen-wrapper">
<iframe height="400" 
        style="width: 100%;" 
        scrolling="no" 
        title="HTML-Basics-04-links-exercise" 
        src="https://codepen.io/hlnbee/embed/XJrJamv?default-tab=html%2Cresult" 
        frameborder="no" 
        loading="lazy" 
        allowtransparency="true" 
        allowfullscreen="true">
</iframe>
</div>

<div class="tip-box">
<h3>Best Practices for Links</h3>
<ul>
<li>Use descriptive link text (avoid "click here")</li>
<li>Make links visually distinct</li>
<li>Use target="_blank" for external links</li>
<li>Ensure links are keyboard accessible</li>
</ul>
</div>

## Working with Images

Images make your web pages visually engaging. Here's how to use them effectively:

<div class="codepen-wrapper">
<iframe height="400" 
        style="width: 100%;" 
        scrolling="no" 
        title="HTML-Basics-04-images" 
        src="https://codepen.io/hlnbee/embed/pvzvrJq?default-tab=html%2Cresult"
        frameborder="no" 
        loading="lazy" 
        allowtransparency="true" 
        allowfullscreen="true">
</iframe>
</div>

<div class="highlight-box">
<h3>Image Attributes</h3>
<ul>
<li><code>src</code> - Image source URL</li>
<li><code>alt</code> - Alternative text description</li>
<li><code>width</code> and <code>height</code> - Image dimensions</li>
<li><code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> - Image with caption</li>
</ul>
</div>

## Interactive Exercise: Restaurant Gallery

Create a gallery section for a restaurant:

- Restaurant exterior
- Featured dishes
- Interior shots
- Chef profiles

<div class="codepen-wrapper">
<iframe height="400" 
        style="width: 100%;" 
        scrolling="no" 
        title="HTML-Basics-04-images-exercise" 
        src="https://codepen.io/hlnbee/embed/PwYwKZO?default-tab=html%2Cresult" 
        frameborder="no" 
        loading="lazy" 
        allowtransparency="true" 
        allowfullscreen="true">
</iframe>
</div>

<div class="tip-box">
<h3>Best Practices for Images</h3>
<ul>
<li>Always include meaningful alt text</li>
<li>Use appropriate image formats (JPG, PNG, WebP)</li>
<li>Optimize images for web use</li>
<li>Consider responsive image techniques</li>
</ul>
</div>

## Combining Links and Images

Often, you'll want to make images clickable. Here's how:

<div class="codepen-wrapper">
<iframe height="400" 
        style="width: 100%;" 
        scrolling="no" 
        title="HTML-Basics-04-linked-images" 
        src="https://codepen.io/hlnbee/embed/jENELWe?default-tab=html%2Cresult" 
        frameborder="no" 
        loading="lazy" 
        allowtransparency="true" 
        allowfullscreen="true">
</iframe>
</div>

## Practice Project: Restaurant Homepage Header

Create a header section that includes:

1. Restaurant logo (linked to home)
2. Navigation menu
3. Social media icons (linked)
4. Contact information
5. Featured image

<details>
<summary>Click to see a solution</summary>

```html
<header>
	<a href="index.html">
		<img src="logo.png" alt="Black Swan Bistro logo" width="200" />
	</a>

	<nav>
		<a href="#menu">Menu</a>
		<a href="#reservations">Book a Table</a>
		<a href="#about">About Us</a>
		<a href="#contact">Contact</a>
	</nav>

	<div class="social">
		<a href="https://instagram.com/blackswanbistro" target="_blank">
			<img src="instagram.png" alt="Follow us on Instagram" width="32" />
		</a>
		<a href="https://facebook.com/blackswanbistro" target="_blank">
			<img src="facebook.png" alt="Like us on Facebook" width="32" />
		</a>
	</div>

	<div class="contact">
		<a href="tel:+61234567890">📞 (02) 3456 7890</a>
		<a href="mailto:info@blackswanbistro.com">✉️ Email Us</a>
	</div>

	<figure class="hero">
		<img
			src="restaurant-front.jpg"
			alt="Black Swan Bistro storefront at sunset"
			width="1200"
		/>
		<figcaption>Welcome to Black Swan Bistro</figcaption>
	</figure>
</header>
```

</details>
