/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0d0d0d",
        gold: {
          DEFAULT: "#d4af37",
          light: "#e8c872",
          dark: "#b8941f",
          muted: "rgba(212,175,55,0.15)",
        },
        amber: {
          DEFAULT: "#d97706",
          light: "#f59e0b",
        },
      },
      fontFamily: {
        instrument: ['"Instrument Serif"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '1440': '1440px',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
