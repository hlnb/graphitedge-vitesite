---
title: Tailwind CSS Basics
description: Learn the fundamentals of Tailwind CSS utility-first framework
layout: doc
prev:
  text: 'Tailwind Tutorials'
  link: '/tutorials/tailwind/'
next:
  text: 'Tailwind Components'
  link: '/tutorials/tailwind/tailwind-components'
---

<script setup>
import TailwindTutorial from '../../.vitepress/components/TailwindTutorial.vue'
</script>

::: tip Prerequisites
Before starting this tutorial:

1. Complete the [Development Setup](/tutorials/tools/development-setup) guide
2. Install Node.js and npm
3. Have a good understanding of:
   - [HTML 101](/tutorials/basics/html-101)
   - [CSS Basics](/tutorials/basics/css-basics)
     :::

# Tailwind CSS Basics

::: tip What you'll learn

- Understanding utility-first CSS
- Working with Tailwind's utility classes
- Responsive design with Tailwind
- Customizing Tailwind
- Common patterns and best practices
  :::

## What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that lets you build custom designs directly in your HTML. Instead of writing traditional CSS, you apply pre-defined utility classes to elements.

### Key Features

- **Utility-First**: Apply styles directly in HTML
- **Responsive**: Built-in responsive design classes
- **Customizable**: Easy to extend and modify
- **Modern**: Built for modern web development
- **Performance**: Optimized for production

## Basic Utilities

### Typography

```html
<!-- Text size and weight -->
<p class="text-sm font-light">Small light text</p>
<p class="text-base font-normal">Normal text</p>
<p class="text-lg font-medium">Large medium text</p>
<p class="text-xl font-bold">Extra large bold text</p>
<!-- Text color and alignment -->
<p class="text-gray-500 text-center">Centered gray text</p>
<p class="text-blue-600 text-right">Right-aligned blue text</p>
```

### Spacing

```html
<!-- Margin -->
<div class="m-4">All sides margin</div>
<div class="mt-4">Top margin</div>
<div class="mb-4">Bottom margin</div>
<div class="mx-4">Horizontal margin</div>
<div class="my-4">Vertical margin</div>
<!-- Padding -->
<div class="p-4">All sides padding</div>
<div class="pt-4">Top padding</div>
<div class="pb-4">Bottom padding</div>
<div class="px-4">Horizontal padding</div>
<div class="py-4">Vertical padding</div>
```

### Layout

```html
<!-- Display -->
<div class="block">Block element</div>
<div class="inline">Inline element</div>
<div class="flex">Flex container</div>
<div class="grid">Grid container</div>

<!-- Flexbox -->
<div class="flex justify-center items-center">
	<div>Centered content</div>
</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">
	<div>Column 1</div>
	<div>Column 2</div>
	<div>Column 3</div>
</div>
```

## Responsive Design

Tailwind includes responsive breakpoints that you can use to apply different styles at different screen sizes:

```html
<div class="text-sm md:text-base lg:text-lg">
	<!-- 
    text-sm: default (mobile)
    md:text-base: medium screens (768px)
    lg:text-lg: large screens (1024px)
  -->
</div>

<div class="flex-col md:flex-row">
	<!-- 
    flex-col: Stack vertically on mobile
    md:flex-row: Side by side on medium screens
  -->
</div>
```

## Common Patterns

### Buttons

```html
<!-- Primary Button -->
<button
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
	Primary Button
</button>

<!-- Secondary Button -->
<button
	class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
>
	Secondary Button
</button>

<!-- Outline Button -->
<button
	class="border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded"
>
	Outline Button
</button>
```

### Cards

```html
<div class="max-w-sm rounded overflow-hidden shadow-lg">
	<img class="w-full" src="image.jpg" alt="Card image" />
	<div class="px-6 py-4">
		<div class="font-bold text-xl mb-2">Card Title</div>
		<p class="text-gray-700 text-base">
			Card content goes here. This is a basic card layout using Tailwind CSS.
		</p>
	</div>
	<div class="px-6 pt-4 pb-2">
		<span
			class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
		>
			#tag1
		</span>
		<span
			class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
		>
			#tag2
		</span>
	</div>
</div>
```

## Best Practices

1. **Extract Components**
   For repeated patterns, consider extracting them into components:

```html
<!-- Bad: Repetitive utility classes -->
<button
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
	Button 1
</button>
<button
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
	Button 2
</button>

<!-- Good: Use @apply in your CSS -->
<button class="btn-primary">Button 1</button>
<button class="btn-primary">Button 2</button>

<style>
	.btn-primary {
		@apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
	}
</style>
```

2. **Use Meaningful Names**
   When extracting components, use clear, semantic names:

```html
<!-- Bad -->
<div class="my-special-div">...</div>

<!-- Good -->
<div class="card-container">...</div>
```

3. **Mobile First**
   Start with mobile styles and add responsive variants as needed:

```html
<!-- Good: Mobile first approach -->
<div class="text-sm md:text-base lg:text-lg">...</div>

<!-- Bad: Desktop first approach -->
<div class="text-lg sm:text-base xs:text-sm">...</div>
```

## Interactive Examples

### How to Use the Editor

1. Select an example type using the buttons above the editor
2. The code will appear in the editor on the left
3. Edit the code to experiment with different Tailwind classes
4. See the preview on the right (when available)
5. Use the "Reset Code" button to return to the original example
6. For the Rotto Rocks exercise, try converting the traditional CSS to Tailwind classes before checking the solution

::: tip Editor Features

- **Typography**: Text styling examples
- **Spacing**: Margin and padding utilities
- **Layout**: Display and positioning examples
- **Responsive**: Breakpoint-based styling
- **Buttons**: Common button patterns
- **Cards**: Card component example
- **Rotto Rocks**: CSS to Tailwind conversion exercise
  :::

<TailwindTutorial />

## Rotto Rocks Exercise

Let's practice converting the Rotto Rocks website CSS to Tailwind CSS. Select the "Rotto Rocks Exercise" in the editor above and try to convert the traditional CSS to Tailwind utility classes.

### Key Conversions

1. Traditional CSS properties to Tailwind utilities:

   - `background` → `bg-{color}`
   - `padding` → `p-{size}`, `px-{size}`, `py-{size}`
   - `margin` → `m-{size}`, `mx-{size}`, `my-{size}`
   - `display: flex` → `flex`
   - `justify-content` → `justify-{value}`
   - `align-items` → `items-{value}`

2. Common patterns:
   - Box shadows → `shadow-{size}`
   - Max width containers → `max-w-{size}`
   - Responsive design → `{breakpoint}:{utility}`

::: tip Solution
Check the comments in the exercise code for the solution!
:::

## Next Steps {#next-steps}

After mastering these Tailwind CSS basics, you can explore more advanced topics in our Advanced Tailwind tutorial:

- Interactive Components (Dropdowns, Modals, Tabs)
- Animation and Transitions
- Custom Plugin Development
- Advanced Responsive Patterns
- Performance Optimization

::: info Ready for More?
Once you're comfortable with these basics, check out our [Advanced Tailwind CSS](/tutorials/advanced/tailwind-advanced) tutorial to learn about building interactive components and more complex layouts.
:::

## Resources {#resources}

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)
- [Tailwind Play](https://play.tailwindcss.com/)

::: tip Practice Exercise
Try building a simple card layout using the utility classes we covered:

- Add proper spacing
- Include responsive text sizes
- Use flexbox for layout
- Add hover effects
  :::
