<script setup>
import { ref } from 'vue'

const currentExample = ref('basicForm')
const userCode = ref('')
const output = ref('')

const introduction = {
  title: 'HTML Forms',
  content: `Forms are essential for collecting user input on websites. They allow:

• User data collection
• Interactive submissions
• Search functionality
• User authentication
• Newsletter signups
• Contact forms

Understanding forms is crucial for creating interactive websites.`
}

const examples = {
  basicForm: {
    title: 'Basic Form Structure',
    template: `<form action="/submit" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>

  <button type="submit">Login</button>
</form>`,
    instructions: 'Notice the form attributes and label-input relationships.',
    explanation: 'Every form needs an action (where to send data) and method (how to send it). Labels should be linked to inputs using for/id attributes.'
  },

  inputTypes: {
    title: 'Form Input Types',
    template: `<!-- Text Inputs -->
<div class="form-group">
  <label for="text">Text Input:</label>
  <input type="text" id="text" name="text" placeholder="Regular text">
</div>

<div class="form-group">
  <label for="email">Email Input:</label>
  <input type="email" id="email" name="email" placeholder="email@example.com">
</div>

<div class="form-group">
  <label for="password">Password Input:</label>
  <input type="password" id="password" name="password" placeholder="Enter password">
</div>

<div class="form-group">
  <label for="tel">Telephone Input:</label>
  <input type="tel" id="tel" name="tel" placeholder="0412345678" pattern="[0-9]{10}">
</div>

<!-- Number Inputs -->
<div class="form-group">
  <label for="number">Number Input:</label>
  <input type="number" id="number" name="number" min="0" max="100" step="1">
</div>

<div class="form-group">
  <label for="range">Range Input:</label>
  <input type="range" id="range" name="range" min="0" max="100">
</div>

<!-- Date and Time Inputs -->
<div class="form-group">
  <label for="date">Date Input:</label>
  <input type="date" id="date" name="date">
</div>

<div class="form-group">
  <label for="time">Time Input:</label>
  <input type="time" id="time" name="time">
</div>

<div class="form-group">
  <label for="datetime-local">DateTime Input:</label>
  <input type="datetime-local" id="datetime-local" name="datetime-local">
</div>

<!-- Selection Inputs -->
<div class="form-group">
  <label for="select">Select Dropdown:</label>
  <select id="select" name="select">
    <option value="">Choose an option...</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>

<div class="form-group">
  <label for="datalist">Datalist Input:</label>
  <input list="options" id="datalist" name="datalist">
  <datalist id="options">
    <option value="Option 1">
    <option value="Option 2">
    <option value="Option 3">
  </datalist>
</div>

<!-- Checkbox and Radio -->
<fieldset>
  <legend>Checkbox Inputs:</legend>
  <div class="checkbox-group">
    <label>
      <input type="checkbox" name="checkbox1" value="1">
      Checkbox 1
    </label>
    <label>
      <input type="checkbox" name="checkbox2" value="2">
      Checkbox 2
    </label>
  </div>
</fieldset>

<fieldset>
  <legend>Radio Inputs:</legend>
  <div class="radio-group">
    <label>
      <input type="radio" name="radio" value="1">
      Radio 1
    </label>
    <label>
      <input type="radio" name="radio" value="2">
      Radio 2
    </label>
  </div>
</fieldset>

<!-- File and Color Inputs -->
<div class="form-group">
  <label for="file">File Input:</label>
  <input type="file" id="file" name="file" accept="image/*">
</div>

<div class="form-group">
  <label for="color">Color Input:</label>
  <input type="color" id="color" name="color">
</div>

<!-- Text Area -->
<div class="form-group">
  <label for="textarea">Text Area:</label>
  <textarea id="textarea" name="textarea" rows="4" placeholder="Enter multiple lines of text"></textarea>
</div>

<!-- Hidden Input -->
<input type="hidden" name="hidden" value="hidden-value">

<!-- Submit and Reset Buttons -->
<div class="button-group">
  <button type="submit">Submit Button</button>
  <button type="reset">Reset Button</button>
  <button type="button">Regular Button</button>
</div>`,
    instructions: 'Explore the different types of form inputs available in HTML5.',
    explanation: `Key points about input types:
- Each input type provides specific validation
- Mobile devices show appropriate keyboards
- Some inputs have built-in UI (date, color)
- Always use labels with inputs
- Consider using fieldset for groups
- Hidden inputs store data without display`
  },

  validation: {
    title: 'Form Validation',
    template: `<form>
  <!-- Required field -->
  <label for="email">Email: *</label>
  <input 
    type="email" 
    id="email" 
    name="email"
    required
    placeholder="your@email.com"
  >

  <!-- Pattern matching -->
  <label for="phone">Phone:</label>
  <input 
    type="tel" 
    id="phone" 
    name="phone"
    pattern="[0-9]{10}"
    placeholder="0412345678"
    title="Please enter a valid 10-digit phone number"
  >

  <!-- Length constraints -->
  <label for="bio">Bio:</label>
  <textarea 
    id="bio" 
    name="bio"
    minlength="10"
    maxlength="200"
    placeholder="Tell us about yourself (10-200 characters)"
  ></textarea>

  <button type="submit">Submit</button>
</form>`,
    instructions: 'Try submitting the form without filling required fields or with invalid data.',
    explanation: 'HTML5 provides built-in validation through attributes like required, pattern, minlength, and input types.'
  },

  rottoContact: {
    title: 'Rotto Rocks Contact',
    template: `<form class="contact-form" action="/submit" method="POST">
  <h2>Contact Us</h2>

  <div class="form-group">
    <label for="name">Name: *</label>
    <input 
      type="text" 
      id="name" 
      name="name"
      required
      placeholder="Your Name"
    >
  </div>

  <div class="form-group">
    <label for="email">Email: *</label>
    <input 
      type="email" 
      id="email" 
      name="email"
      required
      placeholder="your@email.com"
    >
  </div>

  <div class="form-group">
    <label for="subject">Subject: *</label>
    <select id="subject" name="subject" required>
      <option value="">Please select...</option>
      <option value="general">General Inquiry</option>
      <option value="booking">Tour Booking</option>
      <option value="feedback">Feedback</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div class="form-group">
    <label for="message">Message: *</label>
    <textarea 
      id="message" 
      name="message"
      required
      minlength="10"
      placeholder="Your message here..."
      rows="5"
    ></textarea>
  </div>

  <div class="form-group">
    <label class="checkbox-label">
      <input 
        type="checkbox" 
        name="newsletter" 
        id="newsletter"
      >
      Subscribe to our newsletter
    </label>
  </div>

  <button type="submit">Send Message</button>
</form>`,
    instructions: 'This is a complete contact form for the Rotto Rocks website.',
    explanation: 'The contact form includes various input types, proper labeling, and built-in validation.'
  },

  rottoBooking: {
    title: 'Tour Booking Form',
    template: `<form class="booking-form" action="/book-tour" method="POST">
  <h2>Book a Tour</h2>

  <!-- Personal Details -->
  <fieldset>
    <legend>Personal Details</legend>
    
    <div class="form-group">
      <label for="fullname">Full Name: *</label>
      <input 
        type="text" 
        id="fullname" 
        name="fullname"
        required
        placeholder="Your Full Name"
      >
    </div>

    <div class="form-group">
      <label for="bookingemail">Email: *</label>
      <input 
        type="email" 
        id="bookingemail" 
        name="email"
        required
        placeholder="your@email.com"
      >
    </div>

    <div class="form-group">
      <label for="phone">Phone: *</label>
      <input 
        type="tel" 
        id="phone" 
        name="phone"
        required
        pattern="[0-9]{10}"
        placeholder="0412345678"
      >
    </div>
  </fieldset>

  <!-- Tour Details -->
  <fieldset>
    <legend>Tour Details</legend>

    <div class="form-group">
      <label for="tour">Tour Type: *</label>
      <select id="tour" name="tour" required>
        <option value="">Select a tour...</option>
        <option value="wildlife">Wildlife Discovery</option>
        <option value="history">Historical Sites</option>
        <option value="snorkel">Snorkeling Adventure</option>
        <option value="bike">Island Cycling</option>
      </select>
    </div>

    <div class="form-group">
      <label for="date">Preferred Date: *</label>
      <input 
        type="date" 
        id="date" 
        name="date"
        required
        min="{{ today }}"
      >
    </div>

    <div class="form-group">
      <label for="participants">Number of Participants: *</label>
      <input 
        type="number" 
        id="participants" 
        name="participants"
        required
        min="1"
        max="20"
        value="1"
      >
    </div>
  </fieldset>

  <!-- Special Requirements -->
  <fieldset>
    <legend>Additional Information</legend>

    <div class="form-group">
      <label for="requirements">Special Requirements:</label>
      <textarea 
        id="requirements" 
        name="requirements"
        placeholder="Any dietary requirements or accessibility needs?"
        rows="3"
      ></textarea>
    </div>

    <div class="form-group">
      <label class="checkbox-label">
        <input 
          type="checkbox" 
          name="terms" 
          required
        >
        I agree to the terms and conditions *
      </label>
    </div>
  </fieldset>

  <button type="submit">Book Tour</button>
</form>`,
    instructions: 'This booking form shows how to organize complex forms using fieldsets and various input types.',
    explanation: 'The booking form uses fieldsets to group related inputs, includes various validation types, and demonstrates proper form organization.'
  },

  searchPattern: {
    title: 'Search Pattern',
    template: `<!-- Basic Search -->
<form role="search" aria-label="Site search">
  <div class="search-wrapper">
    <label for="search" class="sr-only">Search website</label>
    <input 
      type="search" 
      id="search" 
      name="q"
      placeholder="Search..."
      aria-label="Search through site content"
    >
    <button type="submit" aria-label="Submit search">
      <span class="sr-only">Search</span>
      <!-- Icon would go here -->
    </button>
  </div>
</form>

<!-- Advanced Search -->
<form role="search" aria-label="Advanced search">
  <fieldset>
    <legend>Advanced Search Options</legend>
    
    <div class="form-group">
      <label for="keyword">Keywords:</label>
      <input type="search" id="keyword" name="keyword">
    </div>

    <div class="form-group">
      <label for="category">Category:</label>
      <select id="category" name="category">
        <option value="">All Categories</option>
        <option value="news">News</option>
        <option value="activities">Activities</option>
        <option value="wildlife">Wildlife</option>
      </select>
    </div>

    <div class="form-group">
      <label for="date-from">Date From:</label>
      <input type="date" id="date-from" name="date-from">
    </div>
  </fieldset>
</form>`,
    instructions: 'Notice the accessibility attributes and screen reader considerations.',
    explanation: 'Search forms should use role="search" and proper aria-labels. The sr-only class hides content visually but keeps it available for screen readers.'
  },

  loginPattern: {
    title: 'Login Pattern',
    template: `<form aria-labelledby="login-heading">
  <h2 id="login-heading">Log In</h2>
  
  <!-- Show any error messages -->
  <div class="error-message" role="alert" aria-live="polite">
    <!-- Dynamic error messages appear here -->
  </div>

  <div class="form-group">
    <label for="login-email">Email</label>
    <input 
      type="email" 
      id="login-email" 
      name="email"
      autocomplete="username"
      required
      aria-required="true"
    >
  </div>

  <div class="form-group">
    <label for="login-password">Password</label>
    <div class="password-wrapper">
      <input 
        type="password" 
        id="login-password" 
        name="password"
        autocomplete="current-password"
        required
        aria-required="true"
        minlength="8"
      >
      <button 
        type="button"
        aria-label="Show password"
        onclick="togglePassword()"
      >
        Show
      </button>
    </div>
  </div>

  <div class="form-group">
    <label class="checkbox-label">
      <input 
        type="checkbox" 
        id="remember" 
        name="remember"
      >
      Remember me
    </label>
  </div>

  <button type="submit">Log In</button>

  <div class="form-links">
    <a href="/forgot-password">Forgot Password?</a>
    <a href="/signup">Create Account</a>
  </div>
</form>`,
    instructions: 'This pattern includes autocomplete attributes and password visibility toggle.',
    explanation: 'Login forms should use proper autocomplete attributes for password managers. The password toggle improves usability.'
  },

  addressPattern: {
    title: 'Address Pattern',
    template: `<form>
  <fieldset>
    <legend>Shipping Address</legend>

    <div class="form-group">
      <label for="street">Street Address</label>
      <input 
        type="text" 
        id="street" 
        name="street"
        autocomplete="street-address"
        required
      >
    </div>

    <div class="address-line2">
      <label for="unit">
        Unit/Apt/Suite
        <span class="optional">(optional)</span>
      </label>
      <input 
        type="text" 
        id="unit" 
        name="unit"
        autocomplete="address-line2"
      >
    </div>

    <div class="city-state-zip">
      <div class="form-group">
        <label for="city">City</label>
        <input 
          type="text" 
          id="city" 
          name="city"
          autocomplete="address-level2"
          required
        >
      </div>

      <div class="form-group">
        <label for="state">State</label>
        <select 
          id="state" 
          name="state"
          autocomplete="address-level1"
          required
        >
          <option value="">Select State</option>
          <option value="WA">Western Australia</option>
          <!-- Add other states -->
        </select>
      </div>

      <div class="form-group">
        <label for="postcode">Postcode</label>
        <input 
          type="text" 
          id="postcode" 
          name="postcode"
          autocomplete="postal-code"
          pattern="[0-9]{4}"
          required
        >
      </div>
    </div>
  </fieldset>
</form>`,
    instructions: 'Notice the structured layout and autocomplete attributes.',
    explanation: 'Address forms should use proper autocomplete attributes and validate postal codes. The layout should be responsive.'
  },

  accessibleValidation: {
    title: 'Accessible Validation',
    template: `<form novalidate>
  <!-- Using aria-describedby for error messages -->
  <div class="form-group">
    <label for="email">Email</label>
    <input 
      type="email" 
      id="email" 
      name="email"
      required
      aria-required="true"
      aria-describedby="email-error email-hint"
      aria-invalid="false"
    >
    <span id="email-hint" class="hint">
      Enter your email address
    </span>
    <span id="email-error" class="error" role="alert">
    </span>
  </div>

  <!-- Using aria-invalid for visual validation -->
  <div class="form-group">
    <label for="phone">Phone Number</label>
    <input 
      type="tel" 
      id="phone" 
      name="phone"
      pattern="[0-9]{10}"
      aria-describedby="phone-error"
      aria-invalid="false"
    >
    <span id="phone-error" class="error" role="alert">
    </span>
  </div>

  <!-- Using fieldset for grouped validation -->
  <fieldset>
    <legend>Password Requirements</legend>
    
    <div class="form-group">
      <label for="password">Password</label>
      <input 
        type="password" 
        id="password" 
        name="password"
        required
        minlength="8"
        aria-describedby="password-requirements"
      >
      <ul id="password-requirements" class="requirements">
        <li>Minimum 8 characters</li>
        <li>Include numbers and letters</li>
        <li>Include at least one special character</li>
      </ul>
    </div>
  </fieldset>

  <button type="submit">Submit</button>
</form>`,
    instructions: 'Test the form validation and notice how errors are announced to screen readers.',
    explanation: 'Use aria-describedby for error messages, aria-invalid for visual validation, and role="alert" for dynamic error messages.'
  }
}

// ... rest of component code similar to ImagesLinksTutorial
</script>

<template>
  <!-- Similar template structure to ImagesLinksTutorial -->
</template>

<style scoped>
.tutorial-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.introduction {
  margin-bottom: 2rem;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.intro-content {
  white-space: pre-line;
}

.tutorial-nav {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tutorial-nav button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-brand);
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.tutorial-nav button.active {
  background: var(--vp-c-brand);
  color: white;
}

.tutorial-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.code-editor {
  width: 100%;
  height: 400px;
  font-family: monospace;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  font-size: 0.9rem;
  line-height: 1.5;
}

.preview-container {
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  min-height: 400px;
  background: white;
  overflow: auto;
}

.instructions {
  margin-bottom: 1rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.explanation {
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
}

/* Form-specific styles for the preview */
.preview-container form {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.preview-container .form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.preview-container label {
  font-weight: 500;
}

.preview-container input,
.preview-container select,
.preview-container textarea {
  padding: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font-size: 0.9rem;
}

.preview-container fieldset {
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 1rem;
  margin: 0;
}

.preview-container legend {
  font-weight: 500;
  padding: 0 0.5rem;
}

.preview-container .checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.preview-container button {
  padding: 0.5rem 1rem;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  align-self: flex-start;
}

.preview-container button:hover {
  background: var(--vp-c-brand-light);
}
</style> 