/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white-sm': '0 1px 2px 0 rgba(255, 255, 255, 0.05)',
        'white-md': '0 4px 6px -1px rgba(255, 255, 255, 0.1)',
        'white-lg': '0 10px 15px -3px rgba(255, 255, 255, 0.1)',
        'white-xl': '0 20px 25px -5px rgba(255, 255, 255, 0.1)',
        'white-2xl': '0 25px 50px -12px rgba(255, 255, 255, 0.25)',
        'white-inner': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}