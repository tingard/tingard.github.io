const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    colors: {
      ...colors,
      background: '#32292f',
      backgroundLighter: '#4c3e47',
      accent: '#ffeedb',
      primary: '59c3c3',
      secondary: '#c17c74',
    },
    fontFamily: {
      'sans': ['Tajawal', 'ui-sans-serif', 'system-ui'],
    },
    minWidth: {
      '0': '0',
      '1/5': '20%',
      '1/4': '25%',
      '1/3': '33%',
      '1/2': '50%',
      '2/3': '67%',
      '3/4': '75%',
      'full': '100%',
    },
    maxWidth: {
      '0': '0',
      '1/5': '20%',
      '1/4': '25%',
      '1/3': '33%',
      '1/2': '50%',
      '2/3': '67%',
      '3/4': '75%',
      'full': '100%',
    },
    // backgroundColor: theme => ({
    //   ...theme('colors'),
    // }),
    // gradientColorStops: theme => ({
    //   ...theme('colors'),
    // }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
