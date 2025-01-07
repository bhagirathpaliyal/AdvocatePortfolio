/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a243f', 
        secondary: '#f4b50e',
        accent: '',
        neutral: '', 
      },
      backgroundImage: {
        'call-bg': "url('/public/assets/background_04.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      animation: {
        slideIn: 'slideIn 0.6s ease-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}