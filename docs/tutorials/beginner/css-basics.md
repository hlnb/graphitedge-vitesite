---
title: CSS Basics
description: Learn the fundamentals of CSS styling
layout: doc
prev:
  text: 'Forms'
  link: '/tutorials/beginner/forms'
next:
  text: 'JavaScript Introduction'
  link: '/tutorials/basics/javascript-introduction'
---

<script setup>
import CSSBasicsTutorial from '../../.vitepress/components/CSSBasicsTutorial.vue'
</script>

# CSS Basics

::: tip What you'll learn

- Understanding CSS selectors and properties
- Working with colors and typography
- Mastering the box model
- Creating layouts with CSS
- Building responsive designs
- Applying styles to the Rotto Rocks website
  :::

## Understanding CSS

CSS (Cascading Style Sheets) is the language we use to style HTML documents. It describes how elements should be rendered on screen, on paper, or in other media.

## Understanding the Cascade

The "Cascading" in CSS refers to how styles are applied and which styles take precedence. Understanding this is crucial for effective styling.

### Style Proximity

::: tip The Closer, The Stronger
Styles declared closer to an element typically take precedence:

1. **Inline Styles** (Strongest)

```html
<div style="color: red;">This has highest priority</div>
```

2. **Internal Styles** (Next Strongest)

```html
<head>
	<style>
		div {
			color: blue;
		}
	</style>
</head>
```

3. **External Stylesheet** (Least Strong)

```html
<head>
	<link rel="stylesheet" href="styles.css" />
</head>
```

:::

### Specificity Hierarchy

::: tip Specificity Rules
From strongest to weakest:

1. **!important** (Use sparingly!)
2. **Inline Styles**
3. **IDs**
4. **Classes, Attributes, and Pseudo-classes**
5. **Elements and Pseudo-elements**
   :::

## The Box Model

Every element in CSS is represented as a rectangular box. Understanding how these boxes are calculated and how they interact is crucial for layout control.

### Basic Box Model

::: tip Box Model Components
Every box in CSS has four parts (from inside to out):

1. **Content** - The actual content (text, image, etc.)
2. **Padding** - Clear space around the content
3. **Border** - A border around the padding
4. **Margin** - Space outside the border
   :::

### Box Sizing Behavior

::: tip Understanding box-sizing
The `box-sizing` property changes how the width and height of elements are calculated:

**1. content-box (Default)**

```css
.element {
	box-sizing: content-box;
	width: 300px;
	padding: 20px;
	border: 1px solid black;
	/* Total width = 342px (300 + 40 + 2) */
}
```

- Width/height only includes content
- Padding and border are added to the specified width/height
- Total width = width + padding + border

**2. border-box (Recommended)**

```css
.element {
	box-sizing: border-box;
	width: 300px;
	padding: 20px;
	border: 1px solid black;
	/* Total width = 300px */
}
```

- Width/height includes content, padding, and border
- Easier to predict final dimensions
- More intuitive for layout
  :::

### Best Practice

::: tip Global Box Sizing Reset
It's common to apply `border-box` to all elements:

```css
*,
*::before,
*::after {
	box-sizing: border-box;
}
```

This makes layout calculations more predictable across your entire site.
:::

### Common Box Model Patterns

::: tip Useful Patterns
**1. Fixed Width with Padding**

```css
.card {
	box-sizing: border-box;
	width: 300px;
	padding: 20px;
	/* Width stays at 300px regardless of padding */
}
```

**2. Full Width with Max-Width**

```css
.container {
	box-sizing: border-box;
	width: 100%;
	max-width: 1200px;
	padding: 0 20px;
	margin: 0 auto;
}
```

**3. Responsive Padding**

```css
.responsive-element {
	box-sizing: border-box;
	width: 100%;
	padding: 20px;
}

@media (max-width: 768px) {
	.responsive-element {
		padding: 10px;
	}
}
```

:::

### Common Box Model Issues

#### Margin Collapse

::: warning

- Vertical margins between elements can collapse
- Only the larger margin is used
- Can be prevented with padding or borders
  :::

#### Percentage Padding

::: warning

- Percentage padding is based on container width
- This applies to both horizontal and vertical padding
- Can create unexpected results
  :::

#### Auto Margins

::: warning

- `margin: auto` only works horizontally
- Needs a defined width to center elements
- Requires specific display types
  :::

## Interactive CSS Examples

Experiment with different CSS concepts using our interactive editor. Try out various examples including selectors, box model, flexbox layouts, colors, typography, and responsive design.

<CSSBasicsTutorial />

::: warning Note
The CSS in the editor only affects the preview area. Feel free to experiment - you can't break anything!
:::

## Common CSS Patterns

### Layout Patterns

::: tip
**1. Centered Content**

```css
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;
}
```

**2. Card Grid**

```css
.grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
}
```

**3. Sticky Header**

```css
.header {
	position: sticky;
	top: 0;
	background: white;
	z-index: 100;
}
```

:::

### Navigation Patterns

::: tip
**1. Horizontal Navigation**

```css
.nav-list {
	display: flex;
	gap: 2rem;
	list-style: none;
}
```

**2. Mobile Menu**

```css
@media (max-width: 768px) {
	.nav-list {
		flex-direction: column;
	}
}
```

## Troubleshooting Tips

### Layout Issues

::: warning

- Check container widths
- Verify media queries
- Inspect margin collapse
- Check flexbox/grid settings
  :::

### Selector Problems

::: warning

- Verify selector specificity
- Check for typos
- Inspect cascade order
- Validate HTML structure
  :::

### Responsive Design

::: warning

- Test different viewports
- Check media query syntax
- Verify viewport meta tag
- Test on real devices
  :::

## Browser Support

### Compatibility Checking

::: tip

- Use [Can I Use](https://caniuse.com/)
- Test in major browsers
- Provide fallbacks
- Consider progressive enhancement
  :::

### Common Browser Issues

::: tip

- Flexbox in older browsers
- Grid support variations
- CSS variable support
- New property support
  :::

## Performance Tips

### Selector Efficiency

::: tip

- Avoid deep nesting
- Limit universal selectors
- Use class selectors
- Minimize specificity
  :::

### File Organization

::: tip

- Group related styles
- Use CSS modules
- Consider CSS-in-JS
- Implement CSS architecture
  :::

## Additional Resources

### MDN Learning Path

::: tip CSS Learning Path

1. **CSS First Steps**

   - [What is CSS?](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS)
   - [Getting Started with CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)
   - [How CSS is Structured](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured)
   - [How CSS Works](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works)

2. **CSS Building Blocks**

   - [Cascade and Inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
   - [CSS Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
   - [The Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
   - [Backgrounds and Borders](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)

3. **CSS Layout**
   - [Introduction to CSS Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction)
   - [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
   - [Grid](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
   - [Positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)
     :::

### MDN References

::: tip CSS Reference

1. **Core Concepts**

   - [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
   - [CSS Properties Index](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index)
   - [CSS Selectors Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
   - [CSS Values and Units](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units)

2. **Layout**
   - [CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model)
   - [CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
   - [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
   - [CSS Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
     :::

### CSS-Tricks Resources

::: tip CSS-Tricks

1. **Guides**

   - [Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
   - [Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
   - [Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
   - [Understanding CSS Positioning](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/)

2. **CSS Almanac**

   - [Properties](https://css-tricks.com/almanac/properties/)
   - [Selectors](https://css-tricks.com/almanac/selectors/)
   - [Values](https://css-tricks.com/almanac/values/)
   - [Units](https://css-tricks.com/almanac/units/)

3. **Popular Articles**
   - [Box-Sizing: Border-Box FTW](https://css-tricks.com/box-sizing/)
   - [All About Floats](https://css-tricks.com/all-about-floats/)
   - [CSS Custom Properties](https://css-tricks.com/a-complete-guide-to-custom-properties/)
   - [Centering in CSS](https://css-tricks.com/centering-css-complete-guide/)
     :::

- [CSS Patterns](https://www.patterns.dev/posts/css-patterns/)
- [CSS Guidelines](https://cssguidelin.es/)
  :::

### Testing Tools

::: tip

- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Browser Dev Tools](https://developer.chrome.com/docs/devtools/)
- [Responsive Testing](https://responsively.app/)
- [CSS Stats](https://cssstats.com/)
  :::

::: tip Next Steps
Ready to start learning JavaScript? Head to the [JavaScript Introduction](/tutorials/basics/javascript-introduction) tutorial to begin working with dynamic web content.
:::
