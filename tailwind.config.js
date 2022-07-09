/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: 'Elsie Swash Caps, cursive',
      montserrat: 'Montserrat, sans-serif'
    },
    extend: {
      backgroundImage: {
        background: 'url("/assets/vector/background.svg")',
      },
      colors: {
        text: {
          DEFAULT: '#202020',
        },
        yellow: {
          DEFAULT: '#FFCB47',
        },
      },
    },
  },
  plugins: [],
}