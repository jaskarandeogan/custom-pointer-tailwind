/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'button':['Open Sans Condensed', 'sans-serif']
          },
      extend: {
        colors: {
            'blue': 'rgba(5,8,114,1)',
            'dark-blue': 'rgba(7,3,53,1)',
            'orange' : 'rgba(245, 118, 26,1)',
          },
      },
    },
    plugins: [],
  }
