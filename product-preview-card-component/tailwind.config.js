/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'fraunces': ['Fraunces', 'serif'],
        'montserrat-500' : ['Montserrat', 'serif']
      }
    },
  },
  plugins: [],
}
