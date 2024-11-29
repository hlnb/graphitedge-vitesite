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

# Text Elements and Headings

## Understanding Heading Hierarchy

HTML provides six levels of headings, from `<h1>` to `<h6>`. Let's see how they work together:

<div class="codepen-wrapper">
<iframe height="400" style="width: 100%;" scrolling="no" title="HTML-Basics-03-text-elements" src="https://codepen.io/hlnbee/embed/emOmRoX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
</div>

<div class="tip-box">
<h3>Best Practices for Headings</h3>
<ul>
<li>Use only one <code>&lt;h1&gt;</code> per page</li>
<li>Don't skip heading levels (e.g., don't go from h2 to h4)</li>
<li>Keep your heading hierarchy logical</li>
<li>Use headings to create a clear content structure</li>
</ul>
</div>

## Interactive Exercise: Restaurant Menu Headings

Create a restaurant menu structure using appropriate heading levels:

- Main title (Restaurant Name)
- Sections (Appetizers, Main Courses, Desserts)
- Subsections (Vegetarian Options, Chef's Specials)

<div class="codepen-wrapper">
<iframe height="400" style="width: 100%;" scrolling="no" title="HTML-Basics-03-restaurant-menu-exercise" src="https://codepen.io/hlnbee/embed/WbebOVJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
</div>

<details>
<summary>Click to see a solution</summary>

```html:graphitedge-workspace/graphitedge-new/docs/tutorials/beginner/html-basics/03-text-elements/index.md
<h1>Black Swan Bistro</h1>

<h2>Appetizers</h2>
<h3>Chef's Specials</h3>
<h3>Vegetarian Options</h3>

<h2>Main Courses</h2>
<h3>From the Grill</h3>
<h3>Seafood Specialties</h3>

<h2>Desserts</h2>
<h3>House Favorites</h3>
```

</details>

## Text Formatting

HTML provides various ways to format and structure your text. Here's how to use them:

<div class="codepen-wrapper">
<iframe height="400" style="width: 100%;" scrolling="no" title="HTML-Basics-03-text-formats" src="https://codepen.io/hlnbee/embed/ogvgwRb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
</div>

<div class="highlight-box">
<h3>Key Text Elements</h3>
<ul>
<li><code>&lt;p&gt;</code> - Paragraphs</li>
<li><code>&lt;strong&gt;</code> - Important text</li>
<li><code>&lt;em&gt;</code> - Emphasized text</li>
<li><code>&lt;br&gt;</code> - Line break</li>
<li><code>&lt;hr&gt;</code> - Horizontal rule</li>
<li><code>&lt;small&gt;</code> - Smaller text</li>
<li><code>&lt;mark&gt;</code> - Highlighted text</li>
</ul>
</div>

## Interactive Exercise: Restaurant Description

Create a formatted description for a restaurant using various text elements:

- Restaurant name (strong)
- Tagline (emphasized)
- Description paragraph
- Special note (marked)
- Hours (small text)
- Separator (horizontal rule)

<div class="codepen-wrapper">
<iframe height="400" style="width: 100%;" scrolling="no" title="HTML-Basics-03-exercise-2" src="https://codepen.io/hlnbee/embed/pvzvrzQ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
</div>

<details>
<summary>Click to see a solution</summary>

```html
<p><strong>Black Swan Bistro</strong></p>
<p><em>Where elegance meets culinary excellence</em></p>

<p>
	Experience fine dining in a relaxed atmosphere. Our chef creates seasonal
	menus using the finest local ingredients.
</p>

<p><mark>Now taking bookings for Valentine's Day!</mark></p>

<hr />

<p>
	<small>
		Open Monday-Saturday: 5pm-10pm<br />
		Sunday Brunch: 10am-3pm
	</small>
</p>
```

</details>

## Practice Project: Restaurant Homepage

Combine everything you've learned to create a homepage for a restaurant:

1. Use appropriate heading levels
2. Format text for readability
3. Include special announcements
4. Add operating hours
5. Create sections for different content

<div class="tip-box">
<h3>Remember</h3>
<p>Focus on creating a clear structure with your headings and using text formatting to enhance readability and emphasis.</p>
</div>

## Lists

HTML provides two types of lists for organizing content:

### Unordered Lists

Use `<ul>` for bullet points when the order doesn't matter:

<div class="codepen-wrapper">
<iframe height="400" style="width: 100%;" scrolling="no" title="HTML-Basics-03-lists-example" src="https://codepen.io/hlnbee/embed/emOmEYo?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
</div>

<div class="highlight-box">
<h3>List Elements</h3>
<ul>
<li><code>&lt;ul&gt;</code> - Unordered list (bullet points)</li>
<li><code>&lt;ol&gt;</code> - Ordered list (numbers)</li>
<li><code>&lt;li&gt;</code> - List items</li>
</ul>
</div>

### Interactive Exercise: Restaurant Features and Menu

Create lists for your restaurant including:

- Features list (unordered)
- Daily specials (ordered)
- Opening times (ordered)

<div class="codepen-wrapper">
<iframe height="400" style="width: 100%;" scrolling="no" title="HTML-Basics-03-lists-exercise" src="https://codepen.io/hlnbee/embed/VYZYzYK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
</div>

<details>
<summary>Click to see a solution</summary>

```html
<!-- Restaurant Features -->
<h2>Why Choose Us?</h2>
<ul>
	<li>Farm-to-table ingredients</li>
	<li>Award-winning chef</li>
	<li>Waterfront location</li>
	<li>Private dining available</li>
</ul>

<!-- Daily Specials -->
<h2>Today's Specials</h2>
<ol>
	<li>Butternut Squash Soup</li>
	<li>Grilled Sea Bass</li>
	<li>Chocolate Lava Cake</li>
</ol>

<!-- Opening Times -->
<h2>Service Times</h2>
<ol>
	<li>Breakfast: 7am - 10am</li>
	<li>Lunch: 12pm - 3pm</li>
	<li>Dinner: 6pm - 10pm</li>
</ol>
```

</details>
