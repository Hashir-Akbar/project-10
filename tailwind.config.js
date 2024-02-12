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
      ,'theme-light-white' : "#f8f8f8"
    },
    colors: {
      'theme-red' : '#e60012',
      'theme-black' : '#434242',
      'theme-blue' : '#0b2b6b',
      'theme-gray' : '#efefef',
      'theme-white' : '#fff',
      'theme-sky' : '#d6f0fa'
    },
    backgroundImage:{
      'NavPattern' : "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDVweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgNDUgMTQiIHZlcnNpb249IjEuMSIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5TdG9yZWZyb250LWF3bmluZy1wYXR0ZXJuPC90aXRsZT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJTdG9yZWZyb250LWF3bmluZy1wYXR0ZXJuIiBmaWxsPSIjRTYwMDEyIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNNDUsMCBMMCwwIEwwLDEzLjc3MzY4IEMxLjMzMzAyMDAxLDEzLjgzNzcxOTMgMi42NDkxNDAxMywxMy40NTM5MDE4IDMuNzM4NzcsMTIuNjgzMzUgTDE5LjI4NDQ4LDEuNjI4NjYgQzIxLjM2NjIzOTQsMC4xNDgzMTg1OTggMjQuMTU3MDEwNiwwLjE0ODMxODU5OCAyNi4yMzg3NywxLjYyODY2IEw0MS43ODQ0OCwxMi42ODMzNSBDNDIuNzI4MzU2MywxMy4zNTAwNDM4IDQzLjg0NTI4NSwxMy43Mjg3NzYgNDUsMTMuNzczNjggTDQ1LDAgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==')"
    },
    keyframes: {
      wiggle: {
        '0%, 50%': { transform: 'scale(1.05)' },
        '50%, 100%': { transform: 'scale(1.01)' },
      }
    },
    animation: {
      wiggle: 'wiggle 500ms ease-in-out 1',
    }
   
   
  },
  },
  plugins: [],
}