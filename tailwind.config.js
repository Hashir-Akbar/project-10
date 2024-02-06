/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
      'theme-red': '#e60012',
    },
    backgroundColor: {
      'theme-red' : '#e60012'
    }
  },
  },
  plugins: [],
}