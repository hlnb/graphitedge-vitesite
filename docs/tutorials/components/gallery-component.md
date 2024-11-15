---
title: Building an Image Gallery Component
description: Learn how to create a responsive image gallery in Vue.js
---

# Building an Image Gallery Component

::: tip What you'll learn

- Creating a responsive image gallery
- Handling image loading
- Implementing image navigation
  :::

## Basic Implementation

Here's the core structure of our gallery component:

```vue
<template>
	<div class="gallery">
		<img
			:src="image.src"
			:srcset="generateSrcSet(image)"
			:sizes="'(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'"
		/>
	</div>
</template>

<script setup>
const generateSrcSet = (image) => {
	return Object.entries(image.sizes)
		.map(([size, url]) => `${url} ${size}w`)
		.join(', ');
};
</script>
```

## Usage Example

Here's how to use the gallery component in your project:

```vue
<template>
	<ImageGallery :images="galleryImages" />
</template>

<script setup>
import { ref } from 'vue';

const galleryImages = ref([
	{
		src: '/images/example1.jpg',
		sizes: {
			640: '/images/example1-sm.jpg',
			1024: '/images/example1-md.jpg',
			1920: '/images/example1-lg.jpg',
		},
	},
]);
</script>
```
