---
title: Variables and Data Types
description: Learn about JavaScript variables and different types of data
difficulty: beginner
tags: ['javascript', 'variables', 'data types']
duration: '45 minutes'
prev:
  text: 'Introduction to JavaScript'
  link: '/tutorials/beginner/javascript-basics/01-introduction/'
next:
  text: 'Control Flow'
  link: '/tutorials/beginner/javascript-basics/03-control-flow/'
---

<div class="tutorial-container">

# Variables and Data Types

Learn how to store and work with different types of data in JavaScript.

<div class="highlight-box">
<h3>In this tutorial, you'll learn:</h3>
<ul>
<li>How to declare variables</li>
<li>Different types of data</li>
<li>Working with strings and numbers</li>
<li>Basic arrays and objects</li>
</ul>
</div>

## Declaring Variables

There are three ways to declare variables in JavaScript:

```javascript
let name = 'Black Swan Bistro'; // Can be changed later
const price = 19.99; // Cannot be changed
var oldWay = 'Not recommended'; // Old way, avoid using
```

### Try in Console:

```javascript
let restaurant = 'Black Swan';
console.log(restaurant); // Black Swan

restaurant = 'Black Swan Bistro';
console.log(restaurant); // Black Swan Bistro

const tax = 0.1;
// This will cause an error:
// tax = 0.2;    // Cannot reassign a constant
```

## Data Types

### 1. Strings

Text data enclosed in quotes:

```javascript
let dishName = 'Grilled Salmon';
let description = 'Fresh Atlantic salmon';
let special = `Today's special: ${dishName}`; // Template literal

// String methods
console.log(dishName.length); // 13
console.log(dishName.toUpperCase()); // GRILLED SALMON
console.log(description.toLowerCase()); // fresh atlantic salmon
```

### 2. Numbers

Both integers and decimals:

```javascript
let price = 24.99;
let quantity = 2;
let total = price * quantity;

console.log(total); // 49.98
console.log(Math.round(total)); // 50
```

### 3. Booleans

True or false values:

```javascript
let isAvailable = true;
let isVegetarian = false;

console.log(isAvailable); // true
console.log(!isAvailable); // false
```

### 4. Arrays

Lists of values:

```javascript
let menuItems = ['Salmon', 'Steak', 'Pasta'];
let prices = [24.99, 29.99, 19.99];

console.log(menuItems[0]); // Salmon
console.log(menuItems.length); // 3
menuItems.push('Salad'); // Add new item
```

### 5. Objects

Collections of related data:

```javascript
let menuItem = {
	name: 'Grilled Salmon',
	price: 24.99,
	isAvailable: true,
	ingredients: ['salmon', 'herbs', 'lemon'],
};

console.log(menuItem.name); // Grilled Salmon
console.log(menuItem.price); // 24.99
```

## Practice Exercise: Menu Item Creator

<div class="tip-box">
<h3>Setup</h3>
<p>You can practice these exercises in two ways:</p>
<ol>
<li><strong>Browser Console:</strong>
    <ul>
        <li>Open your browser's DevTools (F12 or Cmd+Option+I)</li>
        <li>Go to the Console tab</li>
        <li>Type or paste the code directly</li>
    </ul>
</li>
<li><strong>HTML File:</strong>
    <ul>
        <li>Create a new file called `practice.html`</li>
        <li>Add this basic structure:</li>
    </ul>

```html
<!DOCTYPE html>
<html>
	<head>
		<title>JavaScript Practice</title>
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

[Rest of exercise content...]

## Challenge: Black Swan Bistro Menu Manager

Create a program to manage menu items:

### Step 1: Create Menu Items

```javascript
// Create variables for different menu items
let dish1 = {
	name: 'Grilled Salmon',
	price: 24.99,
	isAvailable: true,
	ingredients: ['salmon', 'herbs', 'lemon'],
};

// Your turn: Create dish2 and dish3
```

### Step 2: Create Menu Array

```javascript
// Create an array of menu items
let menu = [dish1];

// Your turn: Add dish2 and dish3 to the menu array
```

### Step 3: Menu Functions

```javascript
// Calculate total value of menu
function calculateMenuValue() {
	// Your code here: Add up all item prices
}

// List available items
function listAvailableItems() {
	// Your code here: Show only available items
}
```

<div class="tip-box">
<h3>Hints</h3>
<ul>
<li>Use array methods like push() to add items</li>
<li>Use dot notation to access object properties</li>
<li>Remember to check data types with typeof</li>
</ul>
</div>

<details>
<summary>Click to see the solution</summary>

```javascript
// Create menu items
let dish1 = {
	name: 'Grilled Salmon',
	price: 24.99,
	isAvailable: true,
	ingredients: ['salmon', 'herbs', 'lemon'],
};

let dish2 = {
	name: 'Beef Steak',
	price: 29.99,
	isAvailable: true,
	ingredients: ['beef', 'garlic', 'butter'],
};

let dish3 = {
	name: 'Pasta Primavera',
	price: 19.99,
	isAvailable: false,
	ingredients: ['pasta', 'vegetables', 'olive oil'],
};

// Create menu array
let menu = [dish1, dish2, dish3];

// Calculate total value
function calculateMenuValue() {
	let total = 0;
	for (let dish of menu) {
		total += dish.price;
	}
	return total;
}

// List available items
function listAvailableItems() {
	let available = menu.filter((dish) => dish.isAvailable);
	return available.map((dish) => dish.name);
}

// Test the functions
console.log('Total menu value: $' + calculateMenuValue());
console.log('Available items:', listAvailableItems());
```

</details>

## Interactive Resources

<div class="tip-box">
<h3>Practice More</h3>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables" target="_blank">MDN: JavaScript Variables</a></li>
<li><a href="https://javascript.info/variables" target="_blank">JavaScript.info: Variables</a></li>
<li><a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript" target="_blank">freeCodeCamp: Basic JavaScript</a></li>
</ul>
</div>

## What's Next?

In the next tutorial, we'll learn about control flow in JavaScript - how to make decisions and repeat actions.

</div>
