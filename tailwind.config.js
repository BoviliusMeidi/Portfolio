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
      }
    },
  },
  plugins: [],
})