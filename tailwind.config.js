/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8d0000',
        'primary-light': '#a62626',
        'primary-dark': '#660000',
        text: '#213640',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#213640',
            h1: {
              color: '#213640',
            },
            h2: {
              color: '#213640',
            },
            h3: {
              color: '#213640',
            },
          },
        },
      },
    },
  },
  plugins: [],
}