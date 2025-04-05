/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          primary: '#967BB6',
          secondary: '#6A0DAD',
          tertiary: '#C8A2C8',
          accent: '#9D00FF',
          highlight: '#50C878',
          amber: {
            400: '#FBBF24',
            200: '#FDE68A'
          }
        }
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}