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
      'theme-black': '#434242',
      'theme-blue': '#0b2b6b',
      'theme-gray': '#efefef',
      'theme-white': '#fff',
      'theme-sky': '#d6f0fa'
    },
    backgroundColor: {
      'theme-red' : '#e60012',
      'theme-black' : '#434242',
      'theme-blue' : '#0b2b6b',
      'theme-gray' : '#efefef',
      'theme-white' : '#fff',
      'theme-sky' : '#d6f0fa'
    },
    colors: {
      'theme-red' : '#e60012',
      'theme-black' : '#434242',
      'theme-blue' : '#0b2b6b',
      'theme-gray' : '#efefef',
      'theme-white' : '#fff',
      'theme-sky' : '#d6f0fa'
    }
  },
  },
  plugins: [],
}