<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Contact Form Creation</h1>
    
    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">Creating the Form</h2>
        <p class="mb-4">Let's create a contact form for visitors to get in touch:</p>
        
        <div class="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 class="font-semibold mb-2">HTML Structure</h3>
          <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
&lt;form class="contact-form"&gt;
    &lt;div class="form-group"&gt;
        &lt;label for="name"&gt;Name:&lt;/label&gt;
        &lt;input type="text" id="name" name="name" required&gt;
    &lt;/div&gt;

    &lt;div class="form-group"&gt;
        &lt;label for="email"&gt;Email:&lt;/label&gt;
        &lt;input type="email" id="email" name="email" required&gt;
    &lt;/div&gt;

    &lt;div class="form-group"&gt;
        &lt;label for="message"&gt;Message:&lt;/label&gt;
        &lt;textarea id="message" name="message" rows="4" required&gt;&lt;/textarea&gt;
    &lt;/div&gt;

    &lt;button type="submit"&gt;Send Message&lt;/button&gt;
&lt;/form&gt;</pre>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Styling the Form</h2>
        <p class="mb-4">Make your form look professional:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
.contact-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input, textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    background: #0066cc;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background: #0052a3;
}</pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Form Validation</h2>
        <p class="mb-4">Add basic form validation:</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
input:invalid, textarea:invalid {
    border-color: #ff4444;
}

.error-message {
    color: #ff4444;
    font-size: 14px;
    margin-top: 5px;
}

/* Add this JavaScript to your page */
&lt;script&gt;
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message!');
    form.reset();
});
&lt;/script&gt;</pre>
      </section>

      <div class="next-steps bg-gray-50 p-4 rounded-lg mt-8">
        <h2 class="text-xl font-semibold mb-4">Congratulations!</h2>
        <p>You've completed the fundamentals of web development! You now know how to:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Create web pages with HTML</li>
          <li>Style them beautifully with CSS</li>
          <li>Add images and create galleries</li>
          <li>Build user-friendly forms</li>
        </ul>
        <p class="mt-4">Keep practicing and experimenting with your Rotto Rocks website!</p>
        <router-link 
          to="/tutorials"
          class="inline-flex items-center text-primary hover:text-primary-dark transition-colors mt-4">
          Return to Tutorials
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>