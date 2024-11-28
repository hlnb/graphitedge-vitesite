---
title: JavaScript Functions
description: Learn how to create and use functions in JavaScript
difficulty: beginner
tags: ['javascript', 'functions', 'methods']
duration: '45 minutes'
prev:
  text: 'Control Flow'
  link: '/tutorials/beginner/javascript-basics/03-control-flow/'
next:
  text: 'DOM Basics'
  link: '/tutorials/beginner/javascript-basics/05-dom-basics/'
---

<div class="tutorial-container">

# JavaScript Functions

Learn how to create reusable blocks of code with functions.

<div class="highlight-box">
<h3>In this tutorial, you'll learn:</h3>
<ul>
<li>How to declare functions</li>
<li>Function parameters and return values</li>
<li>Arrow functions</li>
<li>Function scope</li>
</ul>
</div>

<div class="tip-box">
<h3>Setup for This Tutorial</h3>
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
        <li>Create a new file called `functions.html`</li>
        <li>Add this basic structure:</li>
    </ul>

```html
<!DOCTYPE html>
<html>
	<head>
		<title>JavaScript Functions Practice</title>
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

## Function Basics

### Function Declaration

```javascript
function greetCustomer() {
	console.log('Welcome to Black Swan Bistro!');
}

// Call the function
greetCustomer();
```

### Functions with Parameters

```javascript
function greetCustomerByName(name) {
	console.log(`Welcome to Black Swan Bistro, ${name}!`);
}

greetCustomerByName('Alice');
```

### Return Values

```javascript
function calculateTotal(price, quantity) {
	return price * quantity;
}

let total = calculateTotal(24.99, 2);
console.log(`Total: $${total}`);
```

## Arrow Functions

Modern way to write shorter functions:

```javascript
// Regular function
function add(a, b) {
	return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

// Arrow function with multiple lines
const calculateBill = (price, tax) => {
	const taxAmount = price * tax;
	return price + taxAmount;
};
```

## Function Scope

Variables inside functions are local to that function:

```javascript
function processOrder() {
	let orderNumber = 123; // Local variable
	console.log(orderNumber); // Works
}

processOrder();
// console.log(orderNumber);  // Error - orderNumber not accessible
```

## Practice Exercise: Restaurant Calculator

<div class="tip-box">
<h3>Setup Instructions</h3>
<p>Use either:</p>
<ul>
<li>Browser console for quick testing</li>
<li>Your functions.html file for saving work</li>
</ul>
<p>All console.log() results will appear in the browser's console</p>
</div>

### Step 1: Basic Price Calculator

```javascript
// Create a function to calculate price with tax
function calculatePriceWithTax(basePrice) {
	const taxRate = 0.1; // 10% tax
	return basePrice * (1 + taxRate);
}

// Test the function
console.log(calculatePriceWithTax(20)); // Should show 22
```

### Step 2: Tip Calculator

```javascript
// Create a function to calculate tip
const calculateTip = (billAmount, tipPercentage) => {
	return billAmount * (tipPercentage / 100);
};

// Test the function
console.log(calculateTip(50, 15)); // Should show 7.5
```

## Challenge: Black Swan Bistro Order System

Create a complete order processing system:

### Step 1: Setup Order Functions

```javascript
// Start with these basic functions
function createOrder(dishName, price, quantity) {
	return {
		dish: dishName,
		price: price,
		quantity: quantity,
	};
}

// Your challenge: Create these functions
function calculateOrderTotal(order) {
	// Calculate total with tax and tip
}

function formatOrderSummary(order) {
	// Return formatted order string
}
```

<div class="tip-box">
<h3>Hints</h3>
<ul>
<li>Use template literals for formatting strings</li>
<li>Remember to handle tax and tip calculations</li>
<li>Consider edge cases like zero quantity</li>
</ul>
</div>

<div class="warning-box">
<h3>Common Issues & Solutions</h3>
<ul>
<li><strong>Function not defined:</strong> Make sure you declared the function before calling it</li>
<li><strong>NaN results:</strong> Check if all your numbers are actually numbers, not strings</li>
<li><strong>Undefined values:</strong> Verify all parameters are passed when calling functions</li>
<li><strong>Scope errors:</strong> Make sure you're not trying to access variables outside their scope</li>
</ul>
</div>

<details>
<summary>Click to see the solution</summary>

```javascript
function createOrder(dishName, price, quantity) {
	return {
		dish: dishName,
		price: price,
		quantity: quantity,
	};
}

function calculateOrderTotal(order) {
	const subtotal = order.price * order.quantity;
	const tax = subtotal * 0.1; // 10% tax
	const tip = subtotal * 0.15; // 15% tip
	return subtotal + tax + tip;
}

function formatOrderSummary(order) {
	const subtotal = order.price * order.quantity;
	const total = calculateOrderTotal(order);

	return `
        Order Summary:
        ${order.dish} x${order.quantity}
        Subtotal: $${subtotal.toFixed(2)}
        Total with tax and tip: $${total.toFixed(2)}
    `;
}

// Test the system
const myOrder = createOrder('Grilled Salmon', 24.99, 2);
console.log(formatOrderSummary(myOrder));
```

</details>

## Interactive Resources

<div class="tip-box">
<h3>Practice More</h3>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" target="_blank">MDN: Functions Guide</a></li>
<li><a href="https://javascript.info/function-basics" target="_blank">JavaScript.info: Functions</a></li>
<li><a href="https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-functions" target="_blank">Codecademy: JavaScript Functions</a></li>
</ul>
</div>

## What's Next?

In the next tutorial, we'll learn about DOM Basics - how to interact with HTML elements using JavaScript.

</div>
