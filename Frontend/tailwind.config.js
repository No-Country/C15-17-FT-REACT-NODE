/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'border-box' : '#CDCDCD',
        primary : '#3498db',
        'sky-light' : '#DAFFF6',
        'green-dark' : '#006B6C'
      },
      backgroundImage : {
        'grid-players' : 'url(/images/grid.webp)'
      }
    },
  },
  plugins: [],
}