/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B1216',
        secondary: '#15231B',
        footer: '#1F2040',
        rightBar: '#F4A83A',
      },
    },
  },
  plugins: [],
}