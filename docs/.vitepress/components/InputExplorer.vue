<script setup>
import { ref } from 'vue'

const currentCategory = ref('text')

const categories = {
  text: {
    title: 'Text Inputs',
    description: 'Different types of text-based input fields',
    inputs: [
      {
        title: 'Regular Text',
        code: `<input type="text" id="name" name="name" placeholder="Enter your name">`,
        notes: 'Basic text input for general use'
      },
      {
        title: 'Email',
        code: `<input type="email" id="email" name="email" placeholder="your@email.com">`,
        notes: 'Validates email format, shows email keyboard on mobile'
      },
      {
        title: 'Password',
        code: `<input type="password" id="password" name="password">`,
        notes: 'Masks input, can be toggled with showPassword button'
      },
      {
        title: 'Telephone',
        code: `<input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="0412345678">`,
        notes: 'Shows number keyboard on mobile, can include pattern validation'
      },
      {
        title: 'URL',
        code: `<input type="url" id="website" name="website" placeholder="https://example.com">`,
        notes: 'Validates URL format, shows URL keyboard on mobile'
      },
      {
        title: 'Search',
        code: `<input type="search" id="search" name="search" placeholder="Search...">`,
        notes: 'Includes clear button, optimized for search'
      }
    ]
  },
  numeric: {
    title: 'Numeric Inputs',
    description: 'Inputs for numerical values',
    inputs: [
      {
        title: 'Number',
        code: `<input type="number" id="quantity" name="quantity" min="0" max="100" step="1">`,
        notes: 'Includes spinners, can set min/max/step'
      },
      {
        title: 'Range',
        code: `<input type="range" id="rating" name="rating" min="0" max="5" step="0.5">`,
        notes: 'Slider control for selecting from a range'
      }
    ]
  },
  datetime: {
    title: 'Date & Time',
    description: 'Inputs for dates and times',
    inputs: [
      {
        title: 'Date',
        code: `<input type="date" id="birthdate" name="birthdate">`,
        notes: 'Calendar picker for dates'
      },
      {
        title: 'Time',
        code: `<input type="time" id="meeting" name="meeting">`,
        notes: 'Time picker with hours and minutes'
      },
      {
        title: 'DateTime-Local',
        code: `<input type="datetime-local" id="appointment" name="appointment">`,
        notes: 'Combined date and time picker'
      },
      {
        title: 'Month',
        code: `<input type="month" id="expiry" name="expiry">`,
        notes: 'Month and year picker'
      },
      {
        title: 'Week',
        code: `<input type="week" id="weekNum" name="weekNum">`,
        notes: 'Week picker within a year'
      }
    ]
  },
  selection: {
    title: 'Selection Inputs',
    description: 'Inputs for choosing from options',
    inputs: [
      {
        title: 'Select Dropdown',
        code: `<select id="country" name="country">
  <option value="">Select a country...</option>
  <option value="au">Australia</option>
  <option value="nz">New Zealand</option>
</select>`,
        notes: 'Dropdown menu for selecting from a list'
      },
      {
        title: 'Radio Buttons',
        code: `<fieldset>
  <legend>Preferred Contact:</legend>
  <label>
    <input type="radio" name="contact" value="email"> Email
  </label>
  <label>
    <input type="radio" name="contact" value="phone"> Phone
  </label>
</fieldset>`,
        notes: 'Single selection from multiple options'
      },
      {
        title: 'Checkboxes',
        code: `<fieldset>
  <legend>Interests:</legend>
  <label>
    <input type="checkbox" name="interests" value="sports"> Sports
  </label>
  <label>
    <input type="checkbox" name="interests" value="music"> Music
  </label>
</fieldset>`,
        notes: 'Multiple selections allowed'
      },
      {
        title: 'Datalist',
        code: `<input list="browsers" id="browser" name="browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
</datalist>`,
        notes: 'Combines text input with suggestions'
      }
    ]
  },
  special: {
    title: 'Special Inputs',
    description: 'Special-purpose input types',
    inputs: [
      {
        title: 'File Upload',
        code: `<input type="file" id="document" name="document" accept=".pdf,.doc,.docx">`,
        notes: 'File selection with type filtering'
      },
      {
        title: 'Multiple Files',
        code: `<input type="file" id="photos" name="photos" accept="image/*" multiple>`,
        notes: 'Multiple file selection'
      },
      {
        title: 'Color Picker',
        code: `<input type="color" id="theme" name="theme" value="#ff0000">`,
        notes: 'Color selection with visual picker'
      },
      {
        title: 'Hidden Field',
        code: `<input type="hidden" id="userId" name="userId" value="123">`,
        notes: 'Hidden data field'
      }
    ]
  }
}
</script>

<template>
  <div class="input-explorer">
    <div class="category-nav">
      <button 
        v-for="(category, key) in categories" 
        :key="key"
        :class="{ active: currentCategory === key }"
        @click="currentCategory = key"
      >
        {{ category.title }}
      </button>
    </div>

    <div class="category-content">
      <h3>{{ categories[currentCategory].title }}</h3>
      <p>{{ categories[currentCategory].description }}</p>

      <div class="input-list">
        <div 
          v-for="input in categories[currentCategory].inputs" 
          :key="input.title"
          class="input-item"
        >
          <h4>{{ input.title }}</h4>
          <div class="input-demo" v-html="input.code"></div>
          <pre><code>{{ input.code }}</code></pre>
          <p class="input-notes">{{ input.notes }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-explorer {
  margin: 2rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.category-nav {
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  overflow-x: auto;
}

.category-nav button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-brand);
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
}

.category-nav button.active {
  background: var(--vp-c-brand);
  color: white;
}

.category-content {
  padding: 1rem;
}

.input-list {
  display: grid;
  gap: 2rem;
  margin-top: 1rem;
}

.input-item {
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 1rem;
}

.input-demo {
  margin: 1rem 0;
  padding: 1rem;
  background: white;
  border-radius: 4px;
}

pre {
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}

.input-notes {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .category-nav {
    flex-wrap: wrap;
  }
  
  .category-nav button {
    flex: 1 1 auto;
  }
}
</style> 