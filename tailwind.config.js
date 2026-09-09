/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./script/**/*.{js,css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Montserrat"', 'sans-serif'],
        'display': ['"League Spartan"', 'sans-serif'],
        'special': ['"Cinzel"', 'serif']
      },
      colors: {
        'olympus-tan': '#B98E68',
        'olympus-crema': '#EEE9D7',
        'olympus-cafe': '#7D5A46',
        'olympus-negro': '#0B0908',
        'olympus-gris': '#9B9C98',
        'olympus-azul-zeus': '#0A3767',
        'olympus-verde': '#003B28',
        'olympus-dorado': '#E5AA2D',

        'olympus-gold': '#E5AA2D',
        'olympus-blue': '#0A3767',
        'olympus-black': '#0B0908',
        'olympus-dark': '#17130F',
        'olympus-card': '#1D1712',
        'olympus-white': '#EEE9D7'
      }
    }
  },
  plugins: [],
}