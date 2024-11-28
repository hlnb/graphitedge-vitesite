---
title: HTML Forms
description: Learn how to create interactive forms in HTML
difficulty: beginner
tags: ['html', 'forms', 'input']
duration: '30 minutes'
prev:
  text: 'Lists and Tables'
  link: '/tutorials/beginner/html-basics/04-lists-tables/'
next:
  text: 'HTML Basics Overview'
  link: '/tutorials/beginner/html-basics/'
---

<div class="tutorial-container">

# HTML Forms

Learn how to create forms to collect user input.

<div class="highlight-box">
<h3>In this tutorial, you'll learn:</h3>
<ul>
<li>How to create forms</li>
<li>Different types of form inputs</li>
<li>Form validation</li>
<li>Best practices for forms</li>
</ul>
</div>

## Basic Form Structure

```html
<form action="/submit" method="POST">
	<!-- Form elements go here -->
</form>
```

## Common Form Elements

### Text Input

```html
<!-- Single line text -->
<input type="text" name="username" placeholder="Enter username" />

<!-- Password field -->
<input type="password" name="password" placeholder="Enter password" />

<!-- Multi-line text -->
<textarea name="message" rows="4" cols="50">Enter your message</textarea>
```

### Selection Inputs

```html
<!-- Dropdown menu -->
<select name="food">
	<option value="">Select a dish</option>
	<option value="salmon">Grilled Salmon</option>
	<option value="steak">Beef Steak</option>
	<option value="pasta">Pasta</option>
</select>

<!-- Radio buttons -->
<input type="radio" name="size" value="small" id="small" />
<label for="small">Small</label>

<input type="radio" name="size" value="large" id="large" />
<label for="large">Large</label>

<!-- Checkboxes -->
<input type="checkbox" name="toppings" value="cheese" id="cheese" />
<label for="cheese">Extra Cheese</label>

<input type="checkbox" name="toppings" value="bacon" id="bacon" />
<label for="bacon">Bacon</label>
```

### Other Input Types

```html
<!-- Number input -->
<input type="number" name="quantity" min="1" max="10" />

<!-- Email input -->
<input type="email" name="email" />

<!-- Date input -->
<input type="date" name="reservation" />

<!-- Submit button -->
<button type="submit">Submit Order</button>
```

## Practice Exercise: Restaurant Order Form

Create a basic order form for Black Swan Bistro:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Order Form</title>
	</head>
	<body>
		<h1>Black Swan Bistro - Order Form</h1>

		<form action="/submit-order" method="POST">
			<!-- Customer Information -->
			<fieldset>
				<legend>Customer Information</legend>

				<label for="name">Name:</label>
				<input type="text" id="name" name="name" required />

				<label for="email">Email:</label>
				<input type="email" id="email" name="email" required />

				<label for="phone">Phone:</label>
				<input type="tel" id="phone" name="phone" />
			</fieldset>

			<!-- Order Details -->
			<fieldset>
				<legend>Order Details</legend>

				<label for="dish">Select Dish:</label>
				<select id="dish" name="dish" required>
					<option value="">Choose a dish</option>
					<option value="salmon">Grilled Salmon - $24.99</option>
					<option value="steak">Beef Steak - $29.99</option>
					<option value="pasta">Pasta Primavera - $19.99</option>
				</select>

				<label for="quantity">Quantity:</label>
				<input
					type="number"
					id="quantity"
					name="quantity"
					min="1"
					max="10"
					value="1"
					required
				/>

				<p>Special Instructions:</p>
				<textarea
					name="instructions"
					rows="4"
					cols="50"
					placeholder="Any special requests?"
				></textarea>
			</fieldset>

			<!-- Submit Button -->
			<button type="submit">Place Order</button>
		</form>
	</body>
</html>
```

## Form Validation

### Required Fields

```html
<input type="text" name="name" required />
<input type="email" name="email" required />
```

### Input Patterns

```html
<!-- Phone number format -->
<input
	type="tel"
	name="phone"
	pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
	placeholder="123-456-7890"
/>

<!-- Password requirements -->
<input
	type="password"
	name="password"
	pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
	title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
/>
```

## Challenge: Advanced Order Form

Enhance the basic order form with:

- Delivery options
- Payment method selection
- Special requests
- Terms and conditions checkbox

<div class="warning-box">
<h3>Common Form Issues</h3>
<ul>
<li>Always include labels for accessibility</li>
<li>Use appropriate input types</li>
<li>Add placeholder text for guidance</li>
<li>Implement proper validation</li>
<li>Make forms mobile-friendly</li>
</ul>
</div>

<details>
<summary>Click to see the solution</summary>

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Advanced Order Form</title>
	</head>
	<body>
		<h1>Black Swan Bistro - Advanced Order Form</h1>

		<form action="/submit-order" method="POST">
			<!-- Customer Information -->
			<fieldset>
				<legend>Customer Information</legend>

				<div class="form-group">
					<label for="name">Full Name:</label>
					<input type="text" id="name" name="name" required />
				</div>

				<div class="form-group">
					<label for="email">Email:</label>
					<input type="email" id="email" name="email" required />
				</div>

				<div class="form-group">
					<label for="phone">Phone:</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						placeholder="123-456-7890"
					/>
				</div>
			</fieldset>

			<!-- Order Details -->
			<fieldset>
				<legend>Order Details</legend>

				<div class="form-group">
					<label for="dish">Select Dish:</label>
					<select id="dish" name="dish" required>
						<option value="">Choose a dish</option>
						<option value="salmon">Grilled Salmon - $24.99</option>
						<option value="steak">Beef Steak - $29.99</option>
						<option value="pasta">Pasta Primavera - $19.99</option>
					</select>
				</div>

				<div class="form-group">
					<label for="quantity">Quantity:</label>
					<input
						type="number"
						id="quantity"
						name="quantity"
						min="1"
						max="10"
						value="1"
						required
					/>
				</div>

				<div class="form-group">
					<p>Dietary Restrictions:</p>
					<input type="checkbox" id="gluten" name="dietary" value="gluten" />
					<label for="gluten">Gluten-Free</label>

					<input type="checkbox" id="dairy" name="dietary" value="dairy" />
					<label for="dairy">Dairy-Free</label>

					<input type="checkbox" id="nuts" name="dietary" value="nuts" />
					<label for="nuts">Nut-Free</label>
				</div>
			</fieldset>

			<!-- Delivery Options -->
			<fieldset>
				<legend>Delivery Options</legend>

				<div class="form-group">
					<input
						type="radio"
						id="pickup"
						name="delivery"
						value="pickup"
						required
					/>
					<label for="pickup">Pickup</label>

					<input type="radio" id="delivery" name="delivery" value="delivery" />
					<label for="delivery">Delivery</label>
				</div>

				<div class="form-group" id="address-group">
					<label for="address">Delivery Address:</label>
					<textarea
						id="address"
						name="address"
						rows="3"
						placeholder="Enter delivery address"
					></textarea>
				</div>
			</fieldset>

			<!-- Payment -->
			<fieldset>
				<legend>Payment Method</legend>

				<div class="form-group">
					<select id="payment" name="payment" required>
						<option value="">Select payment method</option>
						<option value="credit">Credit Card</option>
						<option value="debit">Debit Card</option>
						<option value="cash">Cash on Delivery</option>
					</select>
				</div>
			</fieldset>

			<!-- Terms -->
			<div class="form-group">
				<input type="checkbox" id="terms" name="terms" required />
				<label for="terms">I agree to the terms and conditions</label>
			</div>

			<!-- Submit -->
			<button type="submit">Place Order</button>
		</form>
	</body>
</html>
```

</details>

## Interactive Resources

<div class="tip-box">
<h3>Practice More</h3>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/Forms" target="_blank">MDN: Web Forms</a></li>
<li><a href="https://web.dev/learn/forms/" target="_blank">web.dev: Learn Forms</a></li>
<li><a href="https://www.w3schools.com/html/html_forms.asp" target="_blank">W3Schools: HTML Forms</a></li>
</ul>
</div>

## What's Next?

Now that you understand HTML forms, you're ready to learn how to style them with CSS and make them interactive with JavaScript!

</div>
