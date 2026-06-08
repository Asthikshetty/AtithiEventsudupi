/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          light: '#9e1b32',
          DEFAULT: '#800020',
          dark: '#4A0404',
          rich: '#2D0202',
        },
        gold: {
          light: '#FFEAA7',
          DEFAULT: '#D4AF37',
          bright: '#FFD700',
          dark: '#AA7C11',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Poppins"', '"Inter"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
