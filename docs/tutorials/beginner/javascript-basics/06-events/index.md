---
title: JavaScript Events
description: Learn how to handle user interactions with JavaScript events
difficulty: beginner
tags: ['javascript', 'events', 'DOM', 'interaction']
duration: '45 minutes'
prev:
  text: 'DOM Basics'
  link: '/tutorials/beginner/javascript-basics/05-dom-basics/'
next:
  text: 'JavaScript Basics Overview'
  link: '/tutorials/beginner/javascript-basics/'
---

<div class="tutorial-container">

# JavaScript Events

Learn how to make your webpage interactive by responding to user actions.

<div class="highlight-box">
<h3>In this tutorial, you'll learn:</h3>
<ul>
<li>What events are</li>
<li>How to handle different types of events</li>
<li>Event listeners and handlers</li>
<li>Common event patterns</li>
</ul>
</div>

<div class="tip-box">
<h3>Setup for This Tutorial</h3>
<p>Create a new file called `events-practice.html` with this starter code:</p>

```html:graphitedge-workspace/graphitedge-new/docs/tutorials/beginner/javascript-basics/06-events/index.md
<!DOCTYPE html>
<html>
<head>
    <title>Events Practice</title>
    <style>
        .highlight { background-color: #FFE4B5; }
        .menu-item { padding: 10px; margin: 5px; border: 1px solid #ddd; }
        .btn { padding: 5px 10px; margin: 5px; }
    </style>
</head>
<body>
    <h1 id="main-title">Black Swan Bistro</h1>

    <div id="menu-section">
        <h2>Our Menu</h2>
        <button id="add-item-btn" class="btn">Add Item</button>

        <ul id="menu-list">
            <li class="menu-item">Grilled Salmon - $24.99</li>
            <li class="menu-item">Beef Steak - $29.99</li>
            <li class="menu-item">Pasta Primavera - $19.99</li>
        </ul>
    </div>

    <div id="order-form">
        <h2>Place Order</h2>
        <input type="text" id="customer-name" placeholder="Your name">
        <select id="dish-select">
            <option value="">Select a dish</option>
            <option value="salmon">Grilled Salmon</option>
            <option value="steak">Beef Steak</option>
            <option value="pasta">Pasta Primavera</option>
        </select>
        <button id="order-btn" class="btn">Place Order</button>
    </div>

    <div id="order-status"></div>

    <script>
        // Your JavaScript code will go here
    </script>
</body>
</html>
```

</div>

## Basic Event Handling

### Click Events

```javascript
// Using onclick attribute
function handleClick() {
	alert('Button clicked!');
}

// Using addEventListener
const button = document.getElementById('order-btn');
button.addEventListener('click', function () {
	alert('Order button clicked!');
});
```

### Mouse Events

```javascript
const menuItem = document.querySelector('.menu-item');

// Mouse over
menuItem.addEventListener('mouseover', function () {
	this.classList.add('highlight');
});

// Mouse out
menuItem.addEventListener('mouseout', function () {
	this.classList.remove('highlight');
});
```

### Form Events

```javascript
const nameInput = document.getElementById('customer-name');
const dishSelect = document.getElementById('dish-select');

// Input change
nameInput.addEventListener('input', function (event) {
	console.log('Name:', event.target.value);
});

// Select change
dishSelect.addEventListener('change', function (event) {
	console.log('Selected dish:', event.target.value);
});
```

## Event Object

```javascript
document.addEventListener('click', function (event) {
	console.log('Click position:', event.clientX, event.clientY);
	console.log('Target element:', event.target);
	console.log('Event type:', event.type);
});
```

## Practice Exercise: Interactive Menu

<div class="tip-box">
<h3>Setup Instructions</h3>
<ol>
<li>Use the HTML template provided above</li>
<li>Add your JavaScript code inside the script tags</li>
<li>Open the file in your browser</li>
<li>Use the browser console (F12) to check for errors</li>
</ol>
</div>

### Step 1: Highlight Menu Items

```javascript
function setupMenuHighlight() {
	const menuItems = document.querySelectorAll('.menu-item');

	menuItems.forEach((item) => {
		item.addEventListener('mouseover', function () {
			this.classList.add('highlight');
		});

		item.addEventListener('mouseout', function () {
			this.classList.remove('highlight');
		});
	});
}

// Initialize
setupMenuHighlight();
```

### Step 2: Handle Orders

```javascript
function setupOrderForm() {
	const orderBtn = document.getElementById('order-btn');
	const statusDiv = document.getElementById('order-status');

	orderBtn.addEventListener('click', function () {
		const name = document.getElementById('customer-name').value;
		const dish = document.getElementById('dish-select').value;

		if (!name || !dish) {
			statusDiv.textContent = 'Please fill in all fields';
			return;
		}

		statusDiv.textContent = `Order received: ${dish} for ${name}`;
	});
}

// Initialize
setupOrderForm();
```

## Challenge: Complete Order System

Create a full ordering system with these features:

- Add items to cart
- Remove items from cart
- Calculate total
- Form validation
- Order confirmation

### Step 1: Setup Cart

```javascript
// Your challenge: Implement these functions

function addToCart(dishName, price) {
	// Add item to cart
}

function removeFromCart(dishName) {
	// Remove item from cart
}

function updateTotal() {
	// Calculate and display total
}
```

<div class="warning-box">
<h3>Common Issues & Solutions</h3>
<ul>
<li><strong>Event not firing:</strong> Check if element exists when adding listener</li>
<li><strong>Wrong this context:</strong> Be careful with arrow functions and this</li>
<li><strong>Event bubbling issues:</strong> Use stopPropagation() when needed</li>
<li><strong>Form submission issues:</strong> Remember to prevent default behavior</li>
</ul>
</div>

<details>
<summary>Click to see the solution</summary>

```javascript
let cart = [];

function addToCart(dishName, price) {
	cart.push({ dish: dishName, price: price });
	updateCartDisplay();
	updateTotal();
}

function removeFromCart(index) {
	cart.splice(index, 1);
	updateCartDisplay();
	updateTotal();
}

function updateCartDisplay() {
	const cartList = document.getElementById('cart-items') || createCartElement();

	cartList.innerHTML = '';
	cart.forEach((item, index) => {
		const li = document.createElement('li');
		li.textContent = `${item.dish} - $${item.price}`;

		const removeBtn = document.createElement('button');
		removeBtn.textContent = 'Remove';
		removeBtn.onclick = () => removeFromCart(index);

		li.appendChild(removeBtn);
		cartList.appendChild(li);
	});
}

function updateTotal() {
	const total = cart.reduce((sum, item) => sum + item.price, 0);
	document.getElementById('cart-total').textContent = `Total: $${total.toFixed(
		2,
	)}`;
}

function createCartElement() {
	const cartSection = document.createElement('div');
	cartSection.id = 'cart-section';

	const cartTitle = document.createElement('h2');
	cartTitle.textContent = 'Your Cart';

	const cartList = document.createElement('ul');
	cartList.id = 'cart-items';

	const totalDiv = document.createElement('div');
	totalDiv.id = 'cart-total';

	cartSection.appendChild(cartTitle);
	cartSection.appendChild(cartList);
	cartSection.appendChild(totalDiv);

	document.body.appendChild(cartSection);
	return cartList;
}

// Initialize the cart system
document.querySelectorAll('.menu-item').forEach((item) => {
	item.addEventListener('click', function () {
		const [dish, price] = this.textContent.split(' - $');
		addToCart(dish, parseFloat(price));
	});
});
```

</details>

## Interactive Resources

<div class="tip-box">
<h3>Practice More</h3>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Event" target="_blank">MDN: Event Reference</a></li>
<li><a href="https://javascript.info/events" target="_blank">JavaScript.info: Events</a></li>
<li><a href="https://www.w3schools.com/js/js_events.asp" target="_blank">W3Schools: JavaScript Events</a></li>
</ul>
</div>

## What's Next?

Congratulations! You've completed the JavaScript Basics series. Consider exploring:

- AJAX and Fetch API
- JavaScript Objects and Classes
- Error Handling
- Modern JavaScript Features

</div>
