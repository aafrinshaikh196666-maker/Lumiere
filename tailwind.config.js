/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lumiere: {
          ivory: '#F8F5EF',
          cream: '#FAF7F2',
          sand: '#F2EDE4',
          sage: '#A8B5A0',
          sageLight: '#EBF0E8',
          sageDark: '#7A8C70',
          forest: '#263B32',
          forestDark: '#1A2922',
          forestLight: '#365044',
          terracotta: '#C98570',
          terracottaLight: '#F7ECE7',
          charcoal: '#282A27',
          muted: '#656A63',
          border: '#E7E2D8',
          card: '#FFFFFF'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        editorial: '.08em',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(38, 59, 50, 0.05)',
        'premium': '0 10px 30px -4px rgba(38, 59, 50, 0.08), 0 4px 10px -2px rgba(38, 59, 50, 0.03)',
        'drawer': '-10px 0 40px rgba(38, 59, 50, 0.12)',
        'modal': '0 25px 50px -12px rgba(38, 59, 50, 0.25)',
      }
    },
  },
  plugins: [],
}
