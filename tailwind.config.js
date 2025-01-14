/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B1216',
        secondary: '#15231B',
        tertiary: '#134857',
        footer: '#1F2040',
        rightBar: '#F4A83A',
      },
      spacing: {
        '128': '32rem',
      },
      fontSize: {
        'number': '12rem',
      },
      animation: {
        popin: 'popin 3s ease-out',
        popout: 'popout 3s ease-out',
        slidein: 'slidein 3s ease-out',
        slideout: 'slideout 3s ease-out',
      },
      keyframes: {
        popin: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        popout: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        },
        slidein:{
          '0%': {transform: 'translateX(0)', opacity: '0'},
          '100%': {transform: 'translateX(100%)', opacity: '1'}
        },
        slideout:{
          '0%': {transform: 'translateX(100%)', opacity: '0'},
          '100%': {transform: 'translateX(0%)', opacity: '1'}
        },
      },
    },
  },
  plugins: [],
})