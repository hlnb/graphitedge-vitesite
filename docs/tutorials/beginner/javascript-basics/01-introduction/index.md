---
title: Introduction to JavaScript
description: Get started with JavaScript programming
difficulty: beginner
tags: ['javascript', 'basics', 'web development']
duration: '45 minutes'
prev:
  text: 'JavaScript Basics Overview'
  link: '/tutorials/beginner/javascript-basics/'
next:
  text: 'Variables and Data Types'
  link: '/tutorials/beginner/javascript-basics/02-variables-data-types/'
---

<div class="tutorial-container">

# Introduction to JavaScript

JavaScript is the programming language that makes websites interactive.

<div class="highlight-box">
<h3>In this tutorial, you'll learn:</h3>
<ul>
<li>What JavaScript is and why we use it</li>
<li>How to add JavaScript to HTML</li>
<li>Using the browser console</li>
<li>Basic DOM manipulation</li>
<li>Simple conditions</li>
</ul>
</div>

## What is JavaScript?

JavaScript is a programming language that:

- Adds interactivity to websites
- Responds to user actions
- Updates content dynamically
- Communicates with servers

## Adding JavaScript to HTML

There are three ways to add JavaScript to your webpage:

1. **Inline JavaScript**:

```html
<button onclick="alert('Hello!')">Click me</button>
```

2. **Internal JavaScript**:

```html
<script>
	function sayHello() {
		alert('Hello from internal JavaScript!');
	}
</script>
```

3. **External JavaScript** (recommended):

```html
<script src="script.js"></script>
```

## Using the Console

The browser console is your best friend for learning JavaScript:

1. Open your browser's DevTools:

   - Windows/Linux: Press `F12` or `Ctrl + Shift + I`
   - Mac: Press `Cmd + Option + I`

2. Try these commands:

```javascript
// Output text
console.log('Hello, World!');

// Simple math
console.log(2 + 2);

// Check data type
console.log(typeof 'JavaScript');

// Test a condition
console.log(5 > 3); // true
console.log(5 < 3); // false
```

## Working with the DOM

The DOM (Document Object Model) lets JavaScript interact with HTML elements.

### 1. Finding Elements

```javascript
// Get element by ID
const element = document.getElementById('myElement');

// Check what we found
console.log(element);
```

### 2. Changing Content

```javascript
// Get the element
const message = document.getElementById('message');

// Change its text
message.textContent = 'New message';

// Check the result
console.log(message.textContent);
```

### 3. Simple Conditions

```javascript
// Basic if/else structure
if (condition) {
	// do something
} else {
	// do something else
}

// Example:
const age = 18;
if (age >= 18) {
	console.log('Adult');
} else {
	console.log('Minor');
}
```

## Simple Practice Exercise

Let's try a basic counter:

1. **HTML**:

```html
<div>
	<p id="counter">0</p>
	<button onclick="increment()">Add One</button>
</div>
```

2. **JavaScript**:

```javascript
function increment() {
	// Get the counter element
	const counterElement = document.getElementById('counter');

	// Get current value and convert to number
	const currentValue = Number(counterElement.textContent);

	// Add one
	const newValue = currentValue + 1;

	// Update the display
	counterElement.textContent = newValue;
}
```

Try this example first to understand:

- Getting elements by ID
- Reading content
- Updating content
- Using functions

## Practice Exercise: Black Swan Bistro Menu Counter

Now let's try something similar with the bistro menu:

1. **HTML Structure**:

```html
<div class="menu-section">
	<h2>Today's Specials</h2>
	<p id="dish-count">Number of dishes: 0</p>
	<button onclick="addDish()">Add Dish</button>
</div>
```

2. **JavaScript Code**:

```javascript
let dishCount = 0;

function addDish() {
	dishCount = dishCount + 1;
	document.getElementById('dish-count').textContent =
		'Number of dishes: ' + dishCount;
}
```

## Challenge: Menu Item Toggle

Let's build this challenge step by step:

### Step 1: Understanding the HTML

```html
<div class="menu-item">
	<h3>Grilled Salmon</h3>
	<p>Fresh Atlantic salmon with herbs</p>
	<p id="availability">Available</p>
	<button onclick="toggleAvailability()">Toggle Availability</button>
</div>
```

Notice:

- The `id="availability"` will help us find this element
- The button calls `toggleAvailability()` when clicked

### Step 2: Getting the Element

First, write code to get the element:

```javascript
function toggleAvailability() {
	// Get the element with id="availability"
	const availabilityElement = document.getElementById('availability');

	// Check if we found it
	console.log(availabilityElement);
}
```

### Step 3: Reading Current Status

Add code to check the current text:

```javascript
function toggleAvailability() {
	const availabilityElement = document.getElementById('availability');

	// Get current text
	const currentStatus = availabilityElement.textContent;

	// Check what we got
	console.log('Current status:', currentStatus);
}
```

### Step 4: Making the Decision

Add the if/else statement:

```javascript
function toggleAvailability() {
	const availabilityElement = document.getElementById('availability');

	// If it's "Available", change to "Sold Out"
	if (availabilityElement.textContent === 'Available') {
		availabilityElement.textContent = 'Sold Out';
	} else {
		// Otherwise, change to "Available"
		availabilityElement.textContent = 'Available';
	}
}
```

<div class="tip-box">
<h3>Try Each Step</h3>
<ol>
<li>Start with Step 2 and use console.log to make sure you can find the element</li>
<li>Add Step 3 to verify you can read the current status</li>
<li>Finally, add the if/else logic from Step 4</li>
</ol>
</div>

<details>
<summary>Click to see the complete solution with comments</summary>

```javascript
function toggleAvailability() {
	// Step 2: Get the element
	const availabilityElement = document.getElementById('availability');

	// Step 3: Check current status
	// Step 4: Make the change based on current status
	if (availabilityElement.textContent === 'Available') {
		availabilityElement.textContent = 'Sold Out';
	} else {
		availabilityElement.textContent = 'Available';
	}
}
```

</details>

### Bonus Challenge

Try these modifications:

1. Add a color change (green for Available, red for Sold Out)
2. Add a counter for how many times the status has changed
3. Display how long an item has been sold out

<div class="warning-box">
<h3>Common Mistakes</h3>
<ul>
<li>Forgetting to link the JavaScript file</li>
<li>Missing semicolons at line ends</li>
<li>Case sensitivity in JavaScript</li>
</ul>
</div>

## Interactive Resources

<div class="tip-box">
<h3>Practice More</h3>
<ul>
<li><a href="https://console.learn.co" target="_blank">JavaScript Console Practice</a> - Try JavaScript in an online console</li>
<li><a href="https://javascript.info" target="_blank">JavaScript.info</a> - Comprehensive JavaScript guide</li>
<li><a href="https://www.codecademy.com/learn/introduction-to-javascript" target="_blank">Codecademy's JavaScript Course</a> - Interactive JavaScript lessons</li>
</ul>
</div>

## What's Next?

In the next tutorial, we'll learn about variables and data types in JavaScript.

</div>
