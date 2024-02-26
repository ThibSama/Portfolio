/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}", "**/*.{css,js}"],
  theme: {
    extend: {
      fontFamily: {
        Merriweater_BoldItalic: ["Merriweather_BoldItalic", "sans-serif"],
        Merriweater_Regular: ["Merriweather_Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
