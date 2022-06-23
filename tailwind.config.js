/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'dark-gray': '#1D1C1A',
      'yellow': {
        light: '#FFD54D',
        DEFAULT: '#FCB415',
        dark: '#C29400'
      },
      'white': '#FFFFFF'
    }
  },
  plugins: []
}
