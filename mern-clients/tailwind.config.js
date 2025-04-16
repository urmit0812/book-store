/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite/plugin");

module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}",       // Correct content path
    "./index.html",
    "./node_modules/flowbite-react//*.{js,jsx,ts,tsx}", 
    // "./node_modules/flowbite//*.js"    // Include flowbite styles
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite,
  ],
};