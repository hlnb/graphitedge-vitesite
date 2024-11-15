---
title: HTML Forms
description: Learn how to create and validate forms in HTML
layout: doc
prev:
  text: 'Images & Links'
  link: '/tutorials/beginner/images-links'
next:
  text: 'CSS 101'
  link: '/tutorials/beginner/css-basics'
---

<script setup>
import FormsTutorial from '../../.vitepress/components/FormsTutorial.vue'
import InputExplorer from '../../.vitepress/components/InputExplorer.vue'
</script>

# HTML Forms

::: tip What you'll learn

- Creating HTML forms with proper structure
- Understanding different input types
- Implementing form validation
- Building accessible forms
- Creating real-world form examples
  :::

## Understanding Forms

Forms are the primary way to collect user input on websites. They're essential for:

- User registration and login
- Contact forms
- Search functionality
- Booking systems
- Newsletter subscriptions
- Survey and feedback collection

<FormsTutorial />

## HTML Form Input Types

Explore the different types of form inputs available in HTML:

<InputExplorer />

::: tip Input Attributes
Common attributes you can add to inputs:

- `required` - Field must be filled
- `disabled` - Field cannot be used
- `readonly` - Field cannot be modified
- `placeholder` - Hint text
- `pattern` - Regex validation
- `min` and `max` - Value limits
- `step` - Number intervals
- `autocomplete` - Browser autofill
- `name` - Form data key
- `value` - Default value
  :::

### Interactive Input Examples

Experiment with the different input types below to understand their behavior and built-in features:

<FormsTutorial />

::: warning Input Type Benefits

- Built-in validation
- Appropriate mobile keyboards
- Native UI elements
- Better accessibility
- Improved user experience
  :::

::: tip When to Use Each Input

- **text**: General text input
- **email**: Email addresses
- **tel**: Phone numbers
- **number**: Numeric values
- **date**: Calendar dates
- **time**: Time selection
- **checkbox**: Multiple selections
- **radio**: Single selection from options
- **file**: File uploads
- **color**: Color selection
- **range**: Numeric range with slider
- **search**: Search functionality
  :::

## Practice Project: Rotto Rocks Forms

Now that you understand HTML forms, let's implement them in the Rotto Rocks website!

### Project Requirements

Create the following forms for the Rotto Rocks website:

1. **Contact Form**

   - Name (required)
   - Email (required)
   - Subject selection
   - Message
   - Newsletter signup checkbox

2. **Tour Booking Form**
   - Personal details
   - Tour selection
   - Date and time
   - Number of participants
   - Special requirements
   - Terms acceptance

::: tip Using the Examples
The interactive examples above (especially the Rotto Rocks forms) can be used as templates for your project. Feel free to:

- Copy and modify the code
- Adjust fields as needed
- Add your own validation
- Customize the structure
  :::

### Form Best Practices

::: warning Remember

1. Always include proper labels
2. Use appropriate input types
3. Add helpful placeholder text
4. Implement proper validation
5. Group related fields with fieldset
6. Provide clear error messages
7. Mark required fields
8. Ensure keyboard accessibility
   :::

### Accessibility Checklist

- [ ] All inputs have associated labels
- [ ] Required fields are clearly marked
- [ ] Error messages are descriptive
- [ ] Form works with keyboard navigation
- [ ] Color is not the only indicator
- [ ] Instructions are clear and visible
- [ ] ARIA attributes used where needed

## Form Processing

::: warning Note
This tutorial focuses on HTML form structure only. Form processing with backend systems will be covered in later tutorials. For now:

- Use "#" or "javascript:void(0)" as form action
- Focus on structure and validation
- Ensure all inputs have name attributes
- Test form validation
  :::

## Common Form Patterns

### Search Forms

- Use `role="search"`
- Include clear submit button
- Consider auto-suggest
- Add advanced search options

### Login Forms

- Use proper autocomplete attributes
- Include password visibility toggle
- Show clear error messages
- Provide password reset link

### Address Forms

- Use appropriate autocomplete attributes
- Validate postal codes
- Consider address lookup
- Make layout responsive

## Troubleshooting Tips

### Form Submission Issues

::: warning

- Check form action attribute
- Verify method (GET/POST)
- Ensure all required fields are filled
- Check for JavaScript errors
  :::

### Validation Issues

::: warning

- Add required attribute
- Check input types
- Verify pattern attribute
- Test with different browsers
  :::

### Autocomplete Issues

::: warning

- Verify autocomplete attributes
- Check field names
- Test with password managers
- Clear browser cache
  :::

### Layout Issues

::: warning

- Check responsive design
- Test on different devices
- Verify CSS specificity
- Check form group structure
  :::

### Browser-Specific Issues

::: warning
**Safari**

- Provide fallback format for date inputs
- Consider polyfills
- Test across versions

**Firefox**

- Check custom validity
- Test constraint validation
- Verify CSS pseudo-classes

**Mobile Browsers**

- Test virtual keyboards
- Check input zooming
- Verify touch targets
  :::

## Accessibility Guidelines

### Keyboard Navigation

::: tip

- All form controls are focusable
- Logical tab order
- Visible focus indicators
- No keyboard traps
  :::

### Screen Reader Support

::: tip

- Proper label associations
- Meaningful error messages
- Status updates (aria-live)
- Clear instructions
  :::

### Visual Design

::: tip

- Sufficient color contrast (4.5:1)
- Don't rely on color alone
- Clear error states
- Visible focus states
- Text resizing support
- Clear visual hierarchy
  :::

### Form Structure

::: tip

- Logical grouping (fieldset)
- Clear headings
- Consistent layout
- Progressive disclosure
- Error association
- Recovery instructions
  :::

### Accessibility Testing

::: tip

**Keyboard Testing**

- Tab through all controls
- Verify focus order
- Check focus indicators
- Test keyboard shortcuts

**Screen Reader Testing**

- Test with VoiceOver
- Test with NVDA
- Verify announcements
- Check aria attributes

**Visual Testing**

- Check color contrast
- Test text zoom
- Verify error states
- Check responsive layout
  :::

## Next Steps

After completing the forms for the Rotto Rocks website:

1. Test all form validation
2. Ensure forms are responsive
3. Check accessibility
4. Prepare for styling (covered in CSS tutorial)
5. Consider form processing (covered in backend tutorials)

## Additional Resources

::: tip MDN Documentation
**Form Basics**

- [Your first form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
- [How to structure a web form](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form)
- [Form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

**Form Controls**

- [Basic native form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5 input types](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)
- [Other form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/Other_form_controls)

**Advanced Topics**

- [Form data validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Styling web forms](https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms)
- [Advanced form styling](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling)
  :::

::: tip Accessibility Resources

- [WAI Form Tutorials](https://www.w3.org/WAI/tutorials/forms/)
- [Form Accessibility](https://webaim.org/techniques/forms/)
- [ARIA in Forms](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms)

- [WAVE Web Accessibility Tool](https://wave.webaim.org/)
- [Axe DevTools](https://www.deque.com/axe/)
- [Accessibility Insights](https://accessibilityinsights.io/)
  :::

::: tip Validation Resources

- [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Constraint validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation)
- [ValidityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState)

- [Form Design Patterns (Smashing Magazine)](https://www.smashingmagazine.com/2018/10/form-design-patterns-download-chapter/)
- [Form UX (Nielsen Norman Group)](https://www.nngroup.com/articles/web-form-design/)
- [Form Validation UX](https://www.smashingmagazine.com/2012/06/form-validation-ux-design/)
  :::

::: tip Additional Tools
**HTML Form Validators**

- [W3C Markup Validator](https://validator.w3.org/)
- [HTML5 Validator](https://html5.validator.nu/)
- [Can I Use](https://caniuse.com/) (for checking HTML5 form features support)

**Testing & Debugging**

- [Chrome DevTools Forms Guide](https://developer.chrome.com/docs/devtools/forms/)
- [Firefox Form Debugging](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#forms)

**Accessibility Testing**

- [WAVE Web Accessibility Tool](https://wave.webaim.org/)
- [HTML_CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)
- [aXe Browser Extension](https://www.deque.com/axe/browser-extensions/)
  :::
