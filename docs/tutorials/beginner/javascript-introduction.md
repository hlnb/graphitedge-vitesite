---
title: JavaScript Introduction
description: Learn the fundamentals of JavaScript programming
layout: doc
prev:
  text: 'CSS Basics'
  link: '/tutorials/beginner/css-basics'
next:
  text: 'JavaScript 101'
  link: '/tutorials/beginner/javascript-101'
---

<script setup>
import JavaScriptTutorial from '../../.vitepress/components/JavaScriptTutorial.vue'
</script>

# JavaScript Introduction

::: tip What you'll learn

- Understanding JavaScript fundamentals
- Working with variables and data types
- Using functions and control flow
- Manipulating the DOM
- Handling events
  :::

## What is JavaScript?

JavaScript is a versatile programming language that adds interactivity to web pages. It's one of the core technologies of web development, alongside HTML and CSS.

## Key Features

- Client-side Execution
- Dynamic Content
- Event Handling
- DOM Manipulation
- Asynchronous Operations

## Basic Syntax

### Variables and Data Types

JavaScript uses three ways to declare variables:

```javascript
// Modern variable declarations
let name = 'John'; // Can be reassigned
const age = 30; // Cannot be reassigned
var score = 100; // Old way, avoid using
```

Common data types include:

```javascript
// Numbers
let count = 42;
let price = 19.99;
// Strings
et greeting = 'Hello';
let message = Hello, ${name}; // Template literal
// Booleans
let isActive = true;
let isLoggedIn = false;
// Arrays
let numbers = [1, 2, 3, 4, 5];
let colors = ['red', 'green', 'blue'];
// Objects
let person = {
name: 'John',
age: 30,
isStudent: false
};
```

### Functions

Functions are reusable blocks of code that perform specific tasks:

```javascript
// Function Declaration
function greet(name) {
	return `Hello, ${name}!`;
}

// Arrow Function
const add = (a, b) => {
	return a + b;
};

// Function Expression
const multiply = function (x, y) {
	return x * y;
};
```

::: tip Function Best Practices

- Use descriptive function names
- Keep functions small and focused
- Use arrow functions for callbacks
- Return values consistently
  :::

### Control Flow

Control flow helps you make decisions and repeat actions in your code:

```javascript
// If Statements
if (age >= 18) {
	console.log('Adult');
} else if (age >= 13) {
	console.log('Teenager');
} else {
	console.log('Child');
}

// Loops
for (let i = 0; i < 5; i++) {
	console.log(`Count: ${i}`);
}

// While Loop
let count = 0;
while (count < 3) {
	console.log(`While count: ${count}`);
	count++;
}

// Switch Statement
const day = 'Monday';
switch (day) {
	case 'Monday':
		console.log('Start of week');
		break;
	case 'Friday':
		console.log('Weekend coming!');
		break;
	default:
		console.log('Regular day');
}
```

::: tip Control Flow Tips

- Use switch statements for multiple conditions
- Avoid deep nesting of if statements
- Consider using ternary operators for simple conditions
- Be careful with infinite loops
  :::

### DOM Manipulation

The Document Object Model (DOM) allows JavaScript to modify webpage content and structure:

```javascript
// Selecting Elements
const element = document.getElementById('myId');
const elements = document.getElementsByClassName('myClass');
const queryElement = document.querySelector('.myClass');
const queryElements = document.querySelectorAll('p');
// Modifying Content
element.textContent = 'New text content';
element.innerHTML = '<span>HTML content</span>';
// Changing Styles
element.style.color = 'blue';
element.style.backgroundColor = 'lightgray';
element.style.padding = '10px';
// Adding/Removing Classes
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('visible');
// Creating Elements
const newDiv = document.createElement('div');
newDiv.textContent = 'New Element';
document.body.appendChild(newDiv);
// Removing Elements
element.remove();
// or
parentElement.removeChild(element);
```

::: tip DOM Best Practices

- Cache DOM selections in variables
- Use querySelector for flexible selections
- Minimize DOM manipulations
- Use classList instead of className
- Consider using template literals for complex HTML
  :::

### Event Handling

Events allow you to respond to user actions and browser events:

```javascript
// Click Events
const button = document.querySelector('button');
button.addEventListener('click', () => {
	console.log('Button clicked!');
});

// Form Events
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault(); // Prevent form submission
	console.log('Form submitted!');
});

// Keyboard Events
document.addEventListener('keydown', (event) => {
	console.log(`Key pressed: ${event.key}`);
});

// Mouse Events
element.addEventListener('mouseover', () => {
	console.log('Mouse over element');
});

// Event Delegation
document.querySelector('ul').addEventListener('click', (event) => {
	if (event.target.tagName === 'LI') {
		console.log('List item clicked:', event.target.textContent);
	}
});

// Removing Event Listeners
const handleClick = () => console.log('Clicked');
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
```

::: tip Event Handling Best Practices

- Use event delegation for dynamic elements
- Clean up event listeners when no longer needed
- Prevent default behavior when necessary
- Consider debouncing for performance
- Use appropriate event types
  :::

## Interactive Tutorial

Experiment with different JavaScript concepts using our interactive editor. Each example type focuses on different aspects of JavaScript programming.

### Example Types

#### 1. Variables & Types

- Learn about different data types in JavaScript
- Practice declaring variables with `let` and `const`
- Understand type conversion and checking
- Try working with strings, numbers, booleans, and objects

#### 2. Functions & Scope

- Create different types of functions
- Understand function parameters and return values
- Learn about arrow functions
- Explore variable scope and closures

#### 3. Arrays & Loops

- Create and modify arrays
- Use array methods like push, pop, map, and filter
- Practice different types of loops
- Work with array iteration methods

#### 4. Objects & Methods

- Create and modify objects
- Work with object properties and methods
- Understand object destructuring
- Practice with nested objects

#### 5. DOM Manipulation

- Select elements from the DOM
- Modify element content and attributes
- Add and remove elements
- Handle events and user interactions

### How to Use the Interactive Editor

1. Select different examples using the buttons above the editor
2. Modify the JavaScript code in the left panel
3. See the output in the console on the right
4. Click "Reset Code" anytime to restore the original example
5. Use the "Copy Code" button to copy the code
6. Paste the code in your browser's console (F12) to try it live

::: tip Browser Console Tips

- Press F12 or right-click and select "Inspect" to open DevTools
- Click on the "Console" tab in DevTools
- Paste the code and press Enter to run it
- Some examples might need modification to work in your specific browser
- Be careful when running code from unknown sources in your console
  :::

::: tip Debugging Tips

- Watch the console output for errors
- Read the error messages carefully - they often point to the exact issue
- Use `console.log()` to check values
- Try commenting out code to isolate problems
  :::

<JavaScriptTutorial />

::: warning Note
The JavaScript in the editor runs in an isolated environment. Feel free to experiment - you can't break anything!
:::

## Additional Resources

### MDN JavaScript Guides

::: tip Beginner Friendly

- [JavaScript First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)  
  Start your JavaScript journey here. Learn about variables, numbers, strings, and basic programming concepts.

- [JavaScript Building Blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)  
   Essential programming concepts like conditionals, loops, functions, and events.
  :::

::: tip Intermediate

- [JavaScript Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)  
  Understanding objects, object-oriented programming, and prototypes in JavaScript.

- [Client-side Web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs)  
   Learn how to use browser APIs for tasks like manipulation DOM, fetching data, and drawing graphics.
  :::

::: tip Advanced

- [Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)  
   Master promises, async/await, and handling asynchronous operations.
  :::

### MDN JavaScript Reference

::: tip All Levels

- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)  
  Comprehensive reference for all JavaScript language features and syntax.

- [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)  
  Detailed documentation for all browser APIs available to JavaScript.

- [DOM Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)  
  Complete reference for working with the Document Object Model.

- [Events Reference](https://developer.mozilla.org/en-US/docs/Web/Events)  
   List of all available events and how to handle them in JavaScript.
  :::

### MDN JavaScript Learning Pathway

Follow this recommended learning path from basics to advanced concepts:

::: tip Beginner

1. [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)  
   Your first steps with JavaScript - perfect for complete beginners.

2. [JavaScript First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)  
   Core concepts like variables, numbers, strings, and arrays.

3. [JavaScript Building Blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)  
    Fundamental programming concepts and control structures.
   :::

::: tip Intermediate

4. [Introducing JavaScript Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)  
   Working with objects, object-oriented programming concepts, and JSON.

5. [Client-side Web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs)  
    Manipulating documents and handling various browser APIs.
   :::

::: tip Advanced

6. [Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)  
    Advanced concepts for handling asynchronous operations and modern JavaScript features.
   :::

::: warning Time Commitment

- Beginner sections: 2-3 weeks
- Intermediate sections: 3-4 weeks
- Advanced sections: 2-3 weeks
- Total pathway: 2-3 months (studying part-time)
  :::
