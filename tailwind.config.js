
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
        libertinus: ['"Libertinus Math"', 'serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
