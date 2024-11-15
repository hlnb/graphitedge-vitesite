---
title: Vue Basics
description: Learn the fundamentals of Vue.js without any CSS frameworks
layout: doc
prev:
  text: 'Vue Tutorials'
  link: '/tutorials/vue/'
next:
  text: 'Vue Components'
  link: '/tutorials/vue/vue-components'
---

<script setup>
import VueTutorial from '../../.vitepress/components/VueTutorial.vue'
</script>

::: tip Prerequisites
Before starting this tutorial:

1. Complete the [Development Setup](/tutorials/tools/development-setup) guide
2. Install Node.js and npm
3. Familiarize yourself with:
   - [HTML 101](/tutorials/basics/html-101)
   - [CSS Basics](/tutorials/basics/css-basics)
   - [JavaScript Introduction](/tutorials/basics/javascript-introduction)
     :::

# Vue.js Basics

::: tip What you'll learn

- Understanding Vue.js fundamentals
- Working with Vue's template syntax
- Creating and using components
- Managing state with refs and reactive
- Handling events and user input
- Component lifecycle and composition API
  :::

## What is Vue.js?

Vue.js is a progressive JavaScript framework for building user interfaces. It's designed to be incrementally adoptable, meaning you can use as much or as little of Vue as you need.

### Key Features

- **Declarative Rendering**  
  Describe the desired HTML output based on JavaScript state

- **Reactivity System**  
  Automatically updates the UI when data changes

- **Component-Based**  
  Build encapsulated, reusable UI components

- **Single-File Components**  
  Combine template, logic, and styles in one file

## Basic Syntax

### Template Syntax

Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to your component's data:

```vue
<template>
	<div>
		<h1>{{ message }}</h1>
		<button @click="count++">Count is: {{ count }}</button>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Hello Vue!');
const count = ref(0);

const increment = () => {
	count.value++;
};
</script>

::: tip Template Syntax Features * Text Interpolation using mustache syntax `{{
}}` * Directives prefixed with `v-` (`v-if`, `v-for`, etc.) * Shorthand syntax
(`@` for `v-on`, `:` for `v-bind`) * Expression support in bindings :::
```

Vue's reactivity system automatically updates the UI when data changes:

```

### Component Basics

Components are reusable Vue instances with a name. They help you build a modular application:
```

## Interactive Vue Examples

Try out different Vue.js concepts in our interactive editor:

<VueTutorial />

### Example Types

#### 1. Basic Data Binding

- Learn about template syntax
- Try reactive data with `ref`
- Use text interpolation
- Bind attributes with `v-bind`

#### 2. Component Communication

- Create parent and child components
- Pass props down
- Emit events up
- Use provide/inject for deep passing

#### 3. Reactivity System

- Work with `ref` and `reactive`
- Create computed properties
- Watch for data changes
- Understand reactivity caveats

#### 4. Event Handling

- Handle user events
- Use event modifiers
- Work with form inputs
- Implement custom events

### How to Use the Interactive Editor

1. Select different examples using the buttons above
2. Modify the Vue code in the editor
3. See the live preview on the right
4. Click "Reset Code" to restore the example
5. Copy the code to use in your own projects

::: tip Debugging Tips

- Check the console for errors
- Verify your template syntax
- Ensure reactive data is properly declared
- Use Vue DevTools for debugging
  :::

````
```vue
<template>
	<div>
		<h1>{{ message }}</h1>
		<button @click="count++">Count is: {{ count }}</button>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Hello Vue!');
const count = ref(0);

const increment = () => {
	count.value++;
};
</script>

::: tip Template Syntax Features * Text Interpolation using mustache syntax `{{
}}` * Directives prefixed with `v-` (`v-if`, `v-for`, etc.) * Shorthand syntax
(`@` for `v-on`, `:` for `v-bind`) * Expression support in bindings :::
````

Vue's reactivity system automatically updates the UI when data changes:
