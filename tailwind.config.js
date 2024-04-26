/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        "main":"5rem"
      },
      lineHeight:{
        'h':'1'
      },
      gridTemplateColumns: {
        'grid-cols-13':'.5fr 1fr',
        
    }
    },
  },
  plugins: [],
}

