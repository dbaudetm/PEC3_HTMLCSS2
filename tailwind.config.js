module.exports = {
  content: ['./src/**/*.{html,js}'],
  variants: {
    textColor: ['responsive', 'hover', 'focus'],
     },
  theme: {
    extend: {

      gridTemplateAreas: {
        'body': [
          'header header header',
          'main    main   main',
          'footer   footer footer',
        ]
      },

      colors:{

        gold:'#ffd700'

      },
      fontFamily: {
        'days': ["Nova Cut", "sans-serif"],
        'days2': ["'UnifrakturCook'", "sans-serif"]
      }


    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
