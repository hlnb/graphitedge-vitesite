/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: 'rgb(255, 255, 255)',     // Primary white
          gray: 'rgb(216, 216, 216)',      // Light gray
          darkgray: 'rgb(77, 77, 77)',     // Dark gray
          red: {
            light: 'rgb(141, 0, 0)',       // Light red
            DEFAULT: 'rgb(106, 8, 8)',      // Primary red
            dark: 'rgb(162, 17, 17)',      // Dark red
          }
        },
        accent: {
          pink: 'rgb(255, 249, 251)',      // Light pink
          green: {
            light: '#C9E4CA',              // rgb(201, 228, 202)
            DEFAULT: '#87BBA2',            // rgb(135, 187, 162)
          },
          blue: '#4B88A2',                 // rgb(75, 136, 162)
          gray: {
            light: '#D3D4D9',              // rgb(211, 212, 217)
            DEFAULT: 'rgb(211, 212, 217)'  // Alternative reference
          }
        },
        text: {
          primary: 'rgb(115, 130, 144)',    // Main text color
          dark: 'rgb(68, 68, 68)'           // Dark text color
        },
        primary: {
          DEFAULT: '#3B82F6', // This is a blue color, you can change it to your preferred primary color
          dark: '#2563EB',    // Darker shade for hover states
          light: '#60A5FA',   // Lighter shade if needed
        }
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}