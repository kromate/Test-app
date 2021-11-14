module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
  extend: {
     spacing: {
      128: '32rem',
     },
    colors:{
     primary:'#4A545D',
     lightGray:'#F6F6F6',
     gray:'#A4A8BA',
     }
   },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
