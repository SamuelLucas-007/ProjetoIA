const { mauve, violet } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      margin: {
        'custom': '350px'
      },
      fontFamily: {
        'Inter': ['Inter']
      },
      colors: {
        outline: '#CCADAF',
        cinza: '#52525F',
        background: '#FED7DA'
      },
      
      gridTemplateRows:{
        4: 'repeat(4, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}

