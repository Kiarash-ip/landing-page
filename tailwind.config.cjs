/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      main: "#F79489",
      secondary: "#FADCD9",
      secondary_dark: "#F79489",
      white: colors.white,
      typo: "#564E4E",
    },
    extend: {},
  },
  plugins: [],
}
