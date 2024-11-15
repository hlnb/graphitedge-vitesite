---
title: About GraphitEdge
description: Learn more about our web development tutorials and mission
sidebar: false
layout: page
---

<div class="about-container">
  <!-- Hero Section -->
  <section class="hero" style="background-image: url('https://placehold.co/1920x600/1d4ed8/ffffff/png?text=GraphitEdge')">
    <div class="hero-content">
      <h1>About GraphitEdge</h1>
      <p class="lead">Making web development accessible through practical, project-based learning</p>
    </div>
  </section>

  <!-- Mission Section -->
  <section class="mission">
    <div class="grid-2">
      <div class="content">
        <h2>Our Mission</h2>
        <p>At GraphitEdge, we're dedicated to helping aspiring developers master web technologies through hands-on learning.</p>
        <ul class="feature-list">
          <li>Step-by-step tutorials</li>
          <li>Real-world projects</li>
          <li>Modern web technologies</li>
          <li>Progressive learning paths</li>
        </ul>
      </div>
      <div class="image">
        <img src="https://placehold.co/600x400/2563eb/ffffff/png?text=Our+Mission" alt="Web development learning" />
      </div>
    </div>
  </section>

  <!-- Approach Section -->
  <section class="approach">
    <div class="grid-2 reverse">
      <div class="image">
        <img src="https://placehold.co/600x400/0f766e/ffffff/png?text=Rotto+Rocks" alt="Rottnest Island" />
      </div>
      <div class="content">
        <h2>Our Approach</h2>
        <p>Learn by building "Rotto Rocks" - a real-world project showcasing Rottnest Island's beauty.</p>
        <div class="tech-stack">
          <span class="tech-badge">HTML</span>
          <span class="tech-badge">CSS</span>
          <span class="tech-badge">JavaScript</span>
          <span class="tech-badge">Vue.js</span>
          <span class="tech-badge">Tailwind</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Learning Path Section -->
  <section class="learning-path">
    <h2>Learning Path</h2>
    <div class="grid-3">
      <div class="path-card beginner">
        <img src="https://placehold.co/400x200/22c55e/ffffff/png?text=Beginner" alt="Beginner Path" class="path-image" />
        <h3>Beginner</h3>
        <ul>
          <li>HTML & CSS foundations</li>
          <li>Basic JavaScript</li>
          <li>Working with images</li>
          <li>Web accessibility</li>
        </ul>
      </div>
      <div class="path-card intermediate">
        <img src="https://placehold.co/400x200/3b82f6/ffffff/png?text=Intermediate" alt="Intermediate Path" class="path-image" />
        <h3>Intermediate</h3>
        <ul>
          <li>Vue.js basics</li>
          <li>Tailwind CSS</li>
          <li>Interactive components</li>
          <li>Responsive layouts</li>
        </ul>
      </div>
      <div class="path-card advanced">
        <img src="https://placehold.co/400x200/6366f1/ffffff/png?text=Advanced" alt="Advanced Path" class="path-image" />
        <h3>Advanced</h3>
        <ul>
          <li>Vue.js components</li>
          <li>State management</li>
          <li>Performance optimization</li>
          <li>Advanced interactivity</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta">
    <h2>Ready to Start?</h2>
    <p>Begin your web development journey today</p>
    <div class="button-group">
      <a href="/tutorials/tools/development-setup" class="button primary">Get Started</a>
      <a href="/contact" class="button secondary">Contact Us</a>
    </div>
  </section>
</div>

<style>
/* VitePress Header customization */
:root {
  --vp-nav-height: 64px; /* Adjust header height */
}

.VPNav {
  height: var(--vp-nav-height);
  border-bottom: 1px solid var(--vp-c-divider);
  background-color: var(--vp-nav-bg-color);
}

.VPNavBar {
  height: var(--vp-nav-height);
}

.VPNavBar.has-sidebar {
  border-bottom: none;
}
.VPNav .container {
  align-items: center;
}

.about-container {
  max-width: 100%;
  overflow-x: hidden;
}

.hero {
  background-size: cover;
  background-position: center;
  color: white;
  padding: 2rem 2rem 4rem;
  margin: -6rem -1.5rem 2rem;
  position: relative;
  margin-top: var(--vp-nav-height); /* Add space below header */
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
}

.hero-content {
  position: relative;
  z-index: 1;
  padding-top: 1rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.lead {
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.4;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 4rem 1rem;
}

.grid-2.reverse {
  direction: rtl;
}

.grid-2.reverse > * {
  direction: ltr;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem 0;
}

.content, .learning-path {
  padding: 2rem;
}

.image img {
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.path-image {
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
  margin-bottom: 1rem;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: 0.5rem 0;
  padding-left: 2rem;
  position: relative;
}

.feature-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #3b82f6;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-badge {
  background: #e5e7eb;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
}

.path-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.path-card h3 {
  color: #3b82f6;
  margin-bottom: 1rem;
}

.path-card ul {
  list-style: none;
  padding: 0;
}

.path-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.cta {
  text-align: center;
  padding: 4rem 2rem;
  background: #f3f4f6;
  margin: 2rem -1.5rem -6rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
}

.button.primary {
  background: #3b82f6;
  color: white;
}

.button.primary:hover {
  background: #2563eb;
}

.button.secondary {
  background: white;
  color: #3b82f6;
  border: 1px solid #3b82f6;
}

.button.secondary:hover {
  background: #f8fafc;
}

@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .grid-3 {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .lead {
    font-size: 1.25rem;
  }
}
</style>
