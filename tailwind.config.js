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
    boxShadow: {
      "custom-shadow": "10px 10px 30px #0000000f",
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