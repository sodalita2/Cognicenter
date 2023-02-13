  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-rgba-medium": 'rgba(255, 182, 48, 0.7)',
        "orange-rgba-lighter": 'rgba(255, 182, 48, 0.4)',
        "orange-rgba-verylight": 'rgba(255, 182, 48, 0.32)',
        "pink-rgba-lighter": 'rgba(255, 67, 101, 0.3)',
      },
      animation: {
        'NavHoverShow': 'NavHoverShow 0.4s',
        'NavHoverHide': 'NavHoverHide 0.4s',
      },
      boxShadow: {
        'headerShadow': 'inset 0px 8px 12px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        lexend: ['Lexend Deca', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
