---
title: Tutorial Creator's Style Guide
description: Guidelines and standards for creating GraphitEdge tutorials
---

# Tutorial Creator's Style Guide

## Core Principles

1. **Clarity First**

   - Write for beginners
   - Explain concepts thoroughly
   - Use simple, direct language
   - Break complex topics into digestible parts

2. **Consistency Matters**

   - Follow established patterns
   - Use consistent terminology
   - Maintain uniform structure
   - Apply standard formatting

3. **Progressive Learning**
   - Build on previous knowledge
   - Link to prerequisites
   - Provide clear learning paths
   - Include practice opportunities

## Tutorial Structure

### 1. Frontmatter Template

```markdown
---
title: Tutorial Title
description: Clear, SEO-friendly description
prev:
  text: 'Previous Tutorial'
  link: '/tutorials/section/previous'
next:
  text: 'Next Tutorial'
  link: '/tutorials/section/next'
---
```

### 2. Standard Sections

```markdown
# Tutorial Title

::: tip What you'll learn

- Use action verbs
- List 3-5 key outcomes
- Be specific and measurable
- Focus on practical skills
  :::

::: warning Prerequisites

- List required knowledge
- Link to prerequisite tutorials
- Mention required tools
  :::

## Introduction

Brief overview and real-world context

## Main Content Sections

Progressive steps through the material

## Interactive Examples

Hands-on practice opportunities

## Common Issues

Troubleshooting and solutions

## Next Steps

Further learning paths
```

## Writing Guidelines

### Voice and Tone

- Use active voice
- Write conversationally but professionally
- Address the reader as "you"
- Be encouraging and supportive
- Maintain a helpful, mentor-like tone

### Content Structure

- Use clear hierarchical headings
- Keep paragraphs short (3-4 sentences)
- Include regular subheadings
- Use lists for multiple items
- Break up long sections

### Code Examples

#### Format

````markdown
```language-name
// Always include comments
// Explain complex parts
// Show best practices
```
````

````

#### Best Practices
- Use meaningful variable names
- Include error handling
- Show alternative approaches
- Highlight important lines
- Keep examples focused

## Visual Elements

### Images
- Use WebP format
- Keep size under 1MB
- Include alt text
- Add descriptive captions
- Show relevant screenshots

### Diagrams
- Use Mermaid.js for diagrams
- Keep diagrams simple
- Include text explanations
- Use consistent colors
- Label important parts

## Interactive Components

### Exercise Template
```markdown
<TutorialExercise>
  <!-- Clear instructions -->
  <!-- Starting code -->
  <!-- Expected outcome -->
  <!-- Hints system -->
</TutorialExercise>
````

### Solution Format

```language
// Annotated solution
// Explain key decisions
// Show best practices
```

:::

```

## Accessibility Guidelines

1. **Content Structure**
   - Use proper heading hierarchy
   - Include descriptive link text
   - Add alt text to images
   - Use sufficient color contrast

2. **Code Examples**
   - Provide text alternatives
   - Use semantic HTML
   - Include ARIA labels
   - Consider screen readers

## SEO Best Practices

1. **Metadata**
   - Clear, descriptive titles
   - Meaningful descriptions
   - Relevant keywords
   - Proper heading structure

2. **Content**
   - Natural keyword usage
   - Internal linking
   - Updated content
   - Mobile-friendly layout

## Quality Checklist

### Before Submission
- [ ] Correct frontmatter
- [ ] Working code examples
- [ ] Tested interactive components
- [ ] Spell-checked content
- [ ] Valid links
- [ ] Optimized images
- [ ] Proper formatting
- [ ] Mobile-friendly
- [ ] Accessible content
- [ ] Clear navigation

### Common Issues to Avoid
1. Unexplained jargon
2. Missing prerequisites
3. Incomplete code examples
4. Broken links
5. Poor formatting
6. Inconsistent style
7. Unclear instructions
8. Missing context

## File Organization

```

docs/
├── tutorials/
│ ├── section-name/
│ │ ├── index.md
│ │ └── tutorial-name.md
│ └── index.md
└── .vitepress/
└── components/
└── TutorialComponents.vue

```

## Getting Help

Need assistance? Contact:
- Technical Editor: [email]
- Content Manager: [email]
- Platform Support: [email]

## Resources

- [VitePress Documentation](https://vitepress.dev/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Mermaid.js Documentation](https://mermaid-js.github.io/)
- [Vue Style Guide](https://vuejs.org/style-guide/)
```
