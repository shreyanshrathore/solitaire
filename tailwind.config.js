/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'base': ['Crimson Pro', 'serif'],
      },
      colors: {
        generic: '#9D0A17', // Add your custom color here
        non: '#C31424',
        secondCard: '#279DA9',
        thirdCard: '#FFA621',
      },
    },
  },
  plugins: [],
}
