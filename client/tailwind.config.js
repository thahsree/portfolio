/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    screens: {
      'mobile': '480px', // Custom mobile size
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      columns: {
        '4xs': '14rem',
      }
    },
  },
  plugins: [],
}
