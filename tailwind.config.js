/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1.75rem',
        sm: '1.75rem',
        md: '1.75rem',
        lg: '2.5rem',
        xl: '3rem',
      },
      center: true
    },
    extend: {
      
    },
  },
  plugins: [],
}

