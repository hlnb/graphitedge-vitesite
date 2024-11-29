---
title: Introduction to HTML
description: Learn the basics of HTML and start building web pages
difficulty: beginner
tags: ['html', 'basics']
duration: '30 minutes'
prev:
  text: 'Browser Developer Tools'
  link: '/tutorials/getting-started/04-browser-tools/'
next:
  text: 'Your First HTML Page'
  link: '/tutorials/beginner/html-basics/02-first-page/'
---

<div class="tutorial-container">

# Introduction to HTML

Welcome to HTML Basics! In this tutorial series, you'll learn how to create web pages using HTML.

::: tip Prerequisites
If you've completed the Getting Started section, you'll already have:

- VS Code installed with extensions
- A basic understanding of web technologies
- Browser developer tools ready

If you haven't completed Getting Started, you might want to [start there first](/tutorials/getting-started/).
:::

## What is HTML?

HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the structure and content of a webpage, like:

- Headings
- Paragraphs
- Links
- Images
- Forms

## How Websites Work

When you visit a website:

1. Your browser requests files from a web server
2. The server sends back HTML files
3. Your browser reads the HTML and displays the content
4. Additional files (CSS for styling, JavaScript for interactivity) enhance the basic HTML structure

## Basic Tools You'll Need

To start writing HTML, you only need two things:

1. **A Text Editor**
   - VS Code (recommended)
   - Sublime Text
   - Notepad++ (Windows)
2. **A Web Browser**
   - Chrome (recommended)
   - Firefox
   - Safari
   - Edge

::: tip
While you can use any text editor, we recommend VS Code because it offers helpful features like:

- Syntax highlighting
- Auto-completion
- Live preview extensions
  :::

## HTML Elements

HTML uses "elements" to structure content. An element typically consists of:

- An opening tag: `<tagname>`
- The content
- A closing tag: `</tagname>`

For example:

```html
<p>This is a paragraph.</p>
```

## Try It Yourself

Let's write your first piece of HTML:

1. Open your text editor
2. Type this simple HTML:

```html
<h1>Hello, World!</h1>
<p>This is my first HTML element.</p>
```

3. Save the file as `hello.html`
4. Open it in your web browser

<div class="tip-box">
<h3>About CodePen Examples</h3>
<p>Throughout these tutorials, our CodePen examples focus on content that goes inside the <code>&lt;body&gt;</code> tag. CodePen automatically provides the basic HTML structure (<code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code> tags).</p>
</div>

## Your First HTML Elements

Let's start with a simple example:

<div class="codepen-wrapper">
<iframe height="300" 
        style="width: 100%;" 
        scrolling="no" 
        title="HTML-Basics-01-first-elements" 
        src="https://codepen.io/hlnbee/embed/JoPoJBg?default-tab=html%2Cresult" 
        frameborder="no" 
        loading="lazy" 
        allowtransparency="true" 
        allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hlnbee/pen/JoPoJBg">
  HTML-Basics-01-first-elements</a> by Helen Burgess (<a href="https://codepen.io/hlnbee">@hlnbee</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
</div>

## What's Next?

In the next lesson, we'll create your first complete HTML page and learn about the essential elements every HTML document needs.

::: info Practice
Before moving on, try:

1. Creating different headings (`<h1>` through `<h6>`)
2. Writing multiple paragraphs
3. Opening your files in different browsers to see how they look
   :::

Try changing the text inside the paragraph tags. Click "Edit on CodePen" to make your own changes!

## Interactive Exercise: Create a Simple Profile

Using what you've learned, create a simple profile with:

- A heading with your name
- A paragraph about yourself
- Another heading for "My Hobbies"
- A paragraph listing your hobbies

<div class="codepen-wrapper">
<iframe height="300" 
        style="width: 100%;" 
        scrolling="no" 
        title="HTML-Basics-01-first-elements" 
        src="https://codepen.io/hlnbee/embed/PwYwjym?default-tab=html%2Cresult" 
        frameborder="no" 
        loading="lazy" 
        allowtransparency="true" 
        allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hlnbee/pen/PwYwjym">
  HTML-Basics-01-first-elements</a> by Helen Burgess (<a href="https://codepen.io/hlnbee">@hlnbee</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
</div>

<details>
<summary>Click to see a solution</summary>

```html
<h1>John Smith</h1>
<p>Hi! I'm John, a web development student.</p>

<h2>My Hobbies</h2>
<p>I enjoy reading, hiking, and learning to code!</p>
```

</details>

</div>
