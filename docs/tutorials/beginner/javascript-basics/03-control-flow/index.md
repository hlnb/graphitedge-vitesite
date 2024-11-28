---
title: Control Flow in JavaScript
description: Learn how to control program flow with conditions and loops
difficulty: beginner
tags: ['javascript', 'control flow', 'conditions', 'loops']
duration: '45 minutes'
prev:
  text: 'Variables and Data Types'
  link: '/tutorials/beginner/javascript-basics/02-variables-data-types/'
next:
  text: 'Functions'
  link: '/tutorials/beginner/javascript-basics/04-functions/'
---

<div class="tutorial-container">

# Control Flow in JavaScript

Learn how to make decisions and repeat actions in your code.

<div class="highlight-box">
<h3>In this tutorial, you'll learn:</h3>
<ul>
<li>If statements and conditions</li>
<li>Different types of loops</li>
<li>Switch statements</li>
<li>Comparison operators</li>
</ul>
</div>

## Conditions with If Statements

### Basic If Statement

```javascript
let price = 24.99;

if (price > 20) {
	console.log('This is a premium dish');
}
```

### If-Else Statement

```javascript
let isVegetarian = true;

if (isVegetarian) {
	console.log('Offer vegetarian menu');
} else {
	console.log('Offer regular menu');
}
```

### If-Else If-Else

```javascript
let time = 14; // 24-hour format

if (time < 11) {
	console.log('Serve breakfast menu');
} else if (time < 16) {
	console.log('Serve lunch menu');
} else {
	console.log('Serve dinner menu');
}
```

## Comparison Operators

```javascript
// Equal to (value)
console.log(5 == '5'); // true

// Strictly equal to (value and type)
console.log(5 === '5'); // false

// Not equal to
console.log(5 != '6'); // true

// Greater than
console.log(10 > 5); // true

// Less than or equal to
console.log(5 <= 5); // true

// Logical AND
console.log(true && true); // true
console.log(true && false); // false

// Logical OR
console.log(true || false); // true
console.log(false || false); // false
```

## Loops

### For Loop

```javascript
// Basic for loop
for (let i = 0; i < 3; i++) {
	console.log(`Dish ${i + 1}`);
}

// Loop through array
let menuItems = ['Salmon', 'Steak', 'Pasta'];
for (let i = 0; i < menuItems.length; i++) {
	console.log(menuItems[i]);
}
```

### For...of Loop (Arrays)

```javascript
let prices = [24.99, 29.99, 19.99];
for (let price of prices) {
	console.log(`$${price}`);
}
```

### For...in Loop (Objects)

```javascript
let dish = {
	name: 'Salmon',
	price: 24.99,
	isAvailable: true,
};

for (let key in dish) {
	console.log(`${key}: ${dish[key]}`);
}
```

### While Loop

```javascript
let orders = 3;
while (orders > 0) {
	console.log(`Processing order: ${orders}`);
	orders--;
}
```

## Switch Statements

```javascript
let dayOfWeek = 'Monday';

switch (dayOfWeek) {
	case 'Monday':
		console.log('Chef Special: Pasta');
		break;
	case 'Tuesday':
		console.log('Chef Special: Fish');
		break;
	case 'Wednesday':
		console.log('Chef Special: Steak');
		break;
	default:
		console.log('Regular menu');
}
```

## Practice Exercise: Menu Availability Checker

<div class="tip-box">
<h3>Setup</h3>
<p>Choose one of these methods to practice:</p>
<ol>
<li><strong>Browser Console:</strong> 
    <ul>
        <li>Open DevTools (F12 or Cmd+Option+I)</li>
        <li>Go to the Console tab</li>
        <li>Type or paste the code directly</li>
    </ul>
</li>
<li><strong>HTML File:</strong>
    <ul>
        <li>Create a new file called `practice.html` or use your existing one</li>
        <li>Add this basic structure:</li>
    </ul>

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Control Flow Practice</title>
	</head>
	<body>
		<h1>Check the console for results</h1>

		<script>
			// Your practice code goes here
		</script>
	</body>
</html>
```

</li>
</ol>
</div>

<div class="warning-box">
<h3>Common Issues & Solutions</h3>
<ul>
<li><strong>Console shows nothing:</strong> Make sure you're using console.log() to see results</li>
<li><strong>Syntax Errors:</strong> Check for missing curly braces {} or semicolons ;</li>
<li><strong>File not updating:</strong> Make sure you saved the file and refreshed the browser</li>
<li><strong>Cannot find console:</strong> 
    <ul>
        <li>Chrome/Edge: Press F12 or right-click → Inspect</li>
        <li>Firefox: Press F12 or right-click → Inspect Element</li>
        <li>Safari: Enable Developer Tools in Preferences first</li>
    </ul>
</li>
</ul>
</div>

## Challenge: Black Swan Bistro Menu Filter

Create a menu filtering system:

### Step 1: Setup Menu Items

```javascript
const menuItems = [
	{
		name: 'Grilled Salmon',
		price: 24.99,
		category: 'Seafood',
		isAvailable: true,
		quantity: 5,
	},
	{
		name: 'Beef Steak',
		price: 29.99,
		category: 'Meat',
		isAvailable: true,
		quantity: 3,
	},
	{
		name: 'Vegetable Pasta',
		price: 18.99,
		category: 'Vegetarian',
		isAvailable: true,
		quantity: 8,
	},
];
```

### Step 2: Create Filter Functions

```javascript
// Your challenge: Create these functions

function getAvailableItems() {
	// Return only available items
}

function getItemsByCategory(category) {
	// Return items in a specific category
}

function getItemsByPriceRange(min, max) {
	// Return items within price range
}

function getLowStockItems(threshold) {
	// Return items with quantity below threshold
}
```

<div class="tip-box">
<h3>Hints</h3>
<ul>
<li>Use array methods like filter()</li>
<li>Check multiple conditions with && (AND) or || (OR)</li>
<li>Remember to handle edge cases</li>
</ul>
</div>

<details>
<summary>Click to see the solution</summary>

```javascript
function getAvailableItems() {
	return menuItems.filter((item) => item.isAvailable && item.quantity > 0);
}

function getItemsByCategory(category) {
	return menuItems.filter(
		(item) => item.category === category && item.isAvailable,
	);
}

function getItemsByPriceRange(min, max) {
	return menuItems.filter((item) => item.price >= min && item.price <= max);
}

function getLowStockItems(threshold = 5) {
	return menuItems.filter((item) => item.quantity <= threshold);
}

// Test the functions
console.log('Available items:', getAvailableItems());
console.log('Seafood items:', getItemsByCategory('Seafood'));
console.log('Items $15-$25:', getItemsByPriceRange(15, 25));
console.log('Low stock items:', getLowStockItems(3));
```

</details>

## Interactive Resources

<div class="tip-box">
<h3>Practice More</h3>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling" target="_blank">MDN: Control Flow</a></li>
<li><a href="https://javascript.info/logical-operators" target="_blank">JavaScript.info: Logical Operators</a></li>
<li><a href="https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-control-flow" target="_blank">Codecademy: Control Flow</a></li>
</ul>
</div>

## What's Next?

In the next tutorial, we'll learn about functions in JavaScript - how to create reusable blocks of code.

</div>
