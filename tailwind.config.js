/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 100
          }
        },
        slideIn: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 100
          }
        },
        slideOut: {
          '0%': {
            transform: 'translateX(0)',
            opacity: 100
          },
          '100%': {
            transform: 'translateX(100%)',
            opacity: 0
          }
        },
        dropDown: {
          '0%': {
            transform: 'translateY(-50%)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 100
          }
        }
      }
    },
  },
  plugins: [],
}

