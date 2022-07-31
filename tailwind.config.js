module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      bangers: ['Bangers']
    },
    extend: {
      screens: {
        xs: '375px'
      },
      colors: {
        tt: '#7130AF',
        'tt-dark': '#3F2B54',
        'tt-light': '#c5b6d8',
        'tt-yellow': '#FFD522',
        'tt-black': '#363732',
        'tt-white': '#f8f8f8',
        'tt-gray': '#707070'
      },
      zIndex: {
        '-1': '-1'
      }
    }
  }
}
