---
title: DOM Basics
description: Learn how to interact with HTML elements using JavaScript
difficulty: beginner
tags: ['javascript', 'DOM', 'web development']
duration: '45 minutes'
prev:
  text: 'Functions'
  link: '/tutorials/beginner/javascript-basics/04-functions/'
next:
  text: 'Events'
  link: '/tutorials/beginner/javascript-basics/06-events/'
---

<div class="tutorial-container">

# DOM Basics

Learn how to manipulate HTML elements with JavaScript.

<div class="highlight-box">
<h3>In this tutorial, you'll learn:</h3>
<ul>
<li>What the DOM is</li>
<li>How to select elements</li>
<li>Modifying content and styles</li>
<li>Creating and removing elements</li>
</ul>
</div>

<div class="tip-box">
<h3>Setup for This Tutorial</h3>
<p>For this tutorial, you'll need to create an HTML file to practice with:</p>

1. Create a new file called `dom-practice.html`
2. Add this starter code:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>DOM Practice</title>
	</head>
	<body>
		<h1 id="main-title">Black Swan Bistro</h1>

		<div id="menu-section">
			<h2>Our Menu</h2>
			<ul id="menu-list">
				<li class="menu-item">Grilled Salmon</li>
				<li class="menu-item">Beef Steak</li>
				<li class="menu-item">Pasta Primavera</li>
			</ul>
		</div>

		<div id="special-section">
			<p id="daily-special">
				Today's Special: <span id="special-item">Grilled Salmon</span>
			</p>
		</div>

		<script>
			// Your JavaScript code will go here
		</script>
	</body>
</html>
```

</div>

## Selecting Elements

### By ID

```javascript
// Get single element by ID
const title = document.getElementById('main-title');
console.log(title.textContent);

const specialItem = document.getElementById('special-item');
console.log(specialItem.textContent);
```

### By Class Name

```javascript
// Get multiple elements by class
const menuItems = document.getElementsByClassName('menu-item');
console.log(menuItems.length); // Number of items

// Loop through items
for (let item of menuItems) {
	console.log(item.textContent);
}
```

### By Query Selector

```javascript
// Select first matching element
const firstMenuItem = document.querySelector('.menu-item');
console.log(firstMenuItem.textContent);

// Select all matching elements
const allMenuItems = document.querySelectorAll('.menu-item');
allMenuItems.forEach((item) => console.log(item.textContent));
```

## Modifying Content

### Text Content

```javascript
// Change text content
const special = document.getElementById('special-item');
special.textContent = 'Beef Steak';

// Change HTML content
const menuSection = document.getElementById('menu-section');
menuSection.innerHTML = '<h2>Updated Menu</h2><p>Coming Soon!</p>';
```

### Attributes

```javascript
// Add or modify attributes
const title = document.getElementById('main-title');
title.setAttribute('class', 'highlight');
title.style.color = 'darkred';
title.style.fontSize = '24px';
```

## Creating and Removing Elements

### Create Elements

```javascript
// Create new element
const newItem = document.createElement('li');
newItem.textContent = 'Chocolate Cake';
newItem.className = 'menu-item';

// Add to menu list
const menuList = document.getElementById('menu-list');
menuList.appendChild(newItem);
```

### Remove Elements

```javascript
// Remove an element
const itemToRemove = document.querySelector('.menu-item');
itemToRemove.remove();

// Remove child element
menuList.removeChild(menuList.lastElementChild);
```

## Practice Exercise: Menu Manager

<div class="tip-box">
<h3>Setup Instructions</h3>
<ol>
<li>Use the HTML template provided above</li>
<li>Add your JavaScript code inside the script tags</li>
<li>Open the file in your browser</li>
<li>Use the browser console (F12) to check for errors</li>
</ol>
</div>

### Step 1: Update Special

```javascript
function updateSpecial(dishName, price) {
	const specialItem = document.getElementById('special-item');
	specialItem.textContent = `${dishName} - $${price}`;
}

// Test the function
updateSpecial('Grilled Salmon', 24.99);
```

### Step 2: Add Menu Item

```javascript
function addMenuItem(dishName) {
	// Create new list item
	const newItem = document.createElement('li');
	newItem.textContent = dishName;
	newItem.className = 'menu-item';

	// Add to menu list
	document.getElementById('menu-list').appendChild(newItem);
}

// Test the function
addMenuItem('Caesar Salad');
```

## Challenge: Dynamic Menu System

Create a complete menu management system:

### Step 1: Setup HTML

Add this to your body section:

```html
<div id="menu-controls">
	<input type="text" id="dish-input" placeholder="Enter dish name" />
	<input type="number" id="price-input" placeholder="Enter price" />
	<button onclick="addNewDish()">Add Dish</button>
</div>
```

### Step 2: Create the Functions

```javascript
// Your challenge: Create these functions

function addNewDish() {
	// Get input values and add new dish
}

function removeDish(dishName) {
	// Remove dish from menu
}

function updateDishPrice(dishName, newPrice) {
	// Update dish price
}
```

<div class="warning-box">
<h3>Common Issues & Solutions</h3>
<ul>
<li><strong>Element not found:</strong> Double-check your ID and class names</li>
<li><strong>Cannot read property of null:</strong> Make sure the element exists before accessing it</li>
<li><strong>Changes not visible:</strong> Verify your selectors and DOM manipulation code</li>
<li><strong>Script running too early:</strong> Move script to bottom of body or use DOMContentLoaded</li>
</ul>
</div>

<details>
<summary>Click to see the solution</summary>

```javascript
function addNewDish() {
	const dishName = document.getElementById('dish-input').value;
	const price = document.getElementById('price-input').value;

	if (!dishName || !price) {
		alert('Please enter both dish name and price');
		return;
	}

	const newItem = document.createElement('li');
	newItem.className = 'menu-item';
	newItem.textContent = `${dishName} - $${price}`;

	const deleteButton = document.createElement('button');
	deleteButton.textContent = 'Remove';
	deleteButton.onclick = () => newItem.remove();

	newItem.appendChild(deleteButton);
	document.getElementById('menu-list').appendChild(newItem);

	// Clear inputs
	document.getElementById('dish-input').value = '';
	document.getElementById('price-input').value = '';
}

function removeDish(dishName) {
	const menuItems = document.querySelectorAll('.menu-item');
	menuItems.forEach((item) => {
		if (item.textContent.includes(dishName)) {
			item.remove();
		}
	});
}

function updateDishPrice(dishName, newPrice) {
	const menuItems = document.querySelectorAll('.menu-item');
	menuItems.forEach((item) => {
		if (item.textContent.includes(dishName)) {
			item.textContent = `${dishName} - $${newPrice}`;
		}
	});
}
```

</details>

## Interactive Resources

<div class="tip-box">
<h3>Practice More</h3>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" target="_blank">MDN: DOM Introduction</a></li>
<li><a href="https://javascript.info/document" target="_blank">JavaScript.info: DOM Nodes</a></li>
<li><a href="https://www.w3schools.com/js/js_htmldom.asp" target="_blank">W3Schools: JavaScript HTML DOM</a></li>
</ul>
</div>

## What's Next?

In the next tutorial, we'll learn about Events - how to make your webpage interactive with user actions.

</div>
