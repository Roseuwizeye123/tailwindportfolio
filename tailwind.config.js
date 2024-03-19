/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**.{html,js}"],
  theme: {
    extend: {
    screens: {
    sm:"480px",
    md:"768px",

    }

    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}