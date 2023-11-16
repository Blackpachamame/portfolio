/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      borderWidth: {
        DEFAULT: '.75px',
      },
      gridTemplateColumns: {
        '16': 'repeat(auto-fill, minmax(270px, 1fr))',
      }
    },
  },
  plugins: [],
}

