/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}", "**/*.{css,js}"],
  theme: {
    extend: {
      colors: {
        customBg: "#0a192f",
        customFont1: "#ccd6f6",
      },
      fontFamily: {
        // Merriweater_BoldItalic: ["Merriweather_BoldItalic", "sans-serif"],
        // Merriweater_Regular: ["Merriweather_Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
