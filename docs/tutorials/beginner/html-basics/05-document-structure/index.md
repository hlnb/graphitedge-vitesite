---
title: Document Structure
description: Learn how to organize your HTML content with semantic elements
difficulty: beginner
tags: ['html', 'web fundamentals']
duration: '45 minutes'
prev:
  text: 'Links and Images'
  link: '../04-links-images/'
---

# Document Structure

## Semantic HTML

Semantic elements clearly describe their meaning to both the browser and the developer:

```html
<header>
	<nav>
		<!-- Navigation content -->
	</nav>
</header>

<main>
	<article>
		<!-- Main content -->
	</article>
</main>

<footer>
	<!-- Footer content -->
</footer>
```

## Common Semantic Elements

### Page Sections

```html
<header>
	<!-- Page header, introductory content -->
	<nav>
		<!-- Navigation links -->
		<main>
			<!-- Main content of the page -->
			<article>
				<!-- Self-contained content -->
				<section>
					<!-- Thematic grouping of content -->
					<aside>
						<!-- Sidebar content -->
						<footer><!-- Page footer --></footer>
					</aside>
				</section>
			</article>
		</main>
	</nav>
</header>
```

### Content Elements

```html
<figure>
	<!-- Self-contained content like images -->
	<figcaption>
		<!-- Caption for a figure -->
		<time>
			<!-- Dates and times -->
			<address><!-- Contact information --></address></time
		>
	</figcaption>
</figure>
```

## Project: Restructuring Black Swan Bistro

Let's improve our bistro page with semantic HTML:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Black Swan Bistro</title>
	</head>
	<body>
		<header>
			<h1>Black Swan Bistro</h1>
			<nav>
				<ul>
					<li><a href="menu.html">Menu</a></li>
					<li><a href="reservations.html">Reservations</a></li>
					<li><a href="about.html">About</a></li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>
		</header>

		<main>
			<article>
				<h2>The Restaurant</h2>
				<figure>
					<img
						src="images/restaurant-front.jpg"
						alt="Black Swan Bistro riverside dining area"
					/>
					<figcaption>Our riverside dining area at Elizabeth Quay</figcaption>
				</figure>
				<p>
					The Black Swan Bistro offers casual lunch and dinner fare in a relaxed
					riverside atmosphere. The menu changes seasonally to highlight the
					freshest Western Australian ingredients.
				</p>
			</article>

			<section>
				<h2>Sample Menu</h2>
				<h3>Starters</h3>
				<ul>
					<li>Fresh Fremantle Octopus with native herbs</li>
					<li>Margaret River Brie with local honeycomb</li>
					<li>Southwest Marron Bisque</li>
				</ul>
			</section>

			<aside>
				<h2>Hours &amp; Location</h2>
				<address>
					Elizabeth Quay, Perth<br />
					Western Australia
				</address>
				<p>
					<time>Monday-Thursday: 11:00</time> - <time>21:00</time><br />
					<time>Friday-Saturday: 11:00</time> - <time>00:00</time>
				</p>
			</aside>
		</main>

		<footer>
			<p>&copy; 2024 Black Swan Bistro. All rights reserved.</p>
			<nav>
				<ul>
					<li><a href="privacy.html">Privacy Policy</a></li>
					<li><a href="terms.html">Terms of Service</a></li>
				</ul>
			</nav>
		</footer>
	</body>
</html>
```

## Benefits of Semantic HTML

1. **Accessibility**

   - Screen readers can better understand the content
   - Keyboard navigation is improved

2. **SEO**

   - Search engines better understand your content
   - Can lead to improved rankings

3. **Maintainability**
   - Code is easier to read and understand
   - Structure is clearer for other developers

## Common Page Layouts

### Basic Layout

```html
<body>
	<header>
		<nav>...</nav>
	</header>
	<main>
		<article>...</article>
		<aside>...</aside>
	</main>
	<footer>...</footer>
</body>
```

### Blog Layout

```html
<main>
	<article>
		<header>
			<h2>Article Title</h2>
			<time datetime="2024-03-20">March 20, 2024</time>
		</header>
		<section>...</section>
		<footer>
			<p>Written by Author Name</p>
		</footer>
	</article>
</main>
```

## Try It Yourself

1. Convert your bistro page to use semantic HTML
2. Add appropriate sections for different content types
3. Include proper time and address elements
4. Create a navigation structure

::: info Practice
Before finishing:

1. Create a blog post layout
2. Build a contact page with address elements
3. Add time elements for business hours
4. Experiment with different semantic structures
   :::

## Extension Project: Rotto Rocks

Now that you've mastered basic HTML with the Black Swan Bistro, let's create a tourism website for Rottnest Island!

### Project Requirements

Create a website called "Rotto Rocks" that includes:

1. **Home Page** (`index.html`)

   - Header with navigation
   - Welcome section with a featured image of a quokka
   - Brief introduction to Rottnest Island
   - Key attractions preview

2. **Activities Page** (`activities.html`)

   - List of activities (cycling, snorkeling, surfing)
   - Images of each activity
   - Description and locations

3. **Accommodation Page** (`stay.html`)

   - Different accommodation options
   - Images of accommodation types
   - Contact information for bookings

4. **Getting There** (`transport.html`)
   - Ferry information
   - Bus services
   - Bike hire details

### Sample Content Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rotto Rocks - Experience Rottnest Island</title>
</head>
<body>
    <header>
        <h1>Rotto Rocks</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="activities.html">Activities</a></li>
                <li><a href="stay.html">Accommodation</a></li>
                <li><a href="transport.html">Getting There</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>Welcome to Rottnest Island</h2>
            <figure>
                <img src="images/quokka.jpg"
                     alt="Smiling quokka on Rottnest Island">
                <figcaption>Meet our friendly local quokkas!</figcaption>
            </figure>
            <p>Just 19 kilometers off the coast of Fremantle, Rottnest Island
            is Western Australia's premier island destination.</p>
        </article>

        <section>
            <h2>Must-Do Activities</h2>
            <ul>
                <li>Take a quokka selfie</li>
                <li>Cycle around the island</li>
                <li>Snorkel at The Basin</li>
                <li>Visit Wadjemup Lighthouse</li>
            </ul>
        </section>

        <aside>
            <h2>Quick Info</h2>
            <address>
                Rottnest Island<br>
                Western Australia
            </address>
            <p>Ferry services run daily from:
                <ul>
                    <li>Fremantle</li>
                    <li>Hillarys Boat Harbour</li>
                    <li>Perth City</li>
                </ul>
            </p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 Rotto Rocks. All rights reserved.</p>
        <nav>
            <ul>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="about.html">About</a></li>
            </ul>
        </nav>
    </footer>
</body>
</html>
```

::: tip Challenge Yourself
Try to:

1. Add more semantic elements
2. Include real ferry timetables
3. Create a photo gallery
4. Add a booking enquiry form (we'll learn forms later)
   :::

## Congratulations!

You've completed the HTML basics tutorial series! You now have a solid foundation in:

- Basic HTML syntax
- Text elements and lists
- Links and images
- Semantic document structure

Continue practicing by:

1. Building more pages for the bistro
2. Creating your own projects
3. Exploring CSS to style your pages
4. Learning about HTML forms
