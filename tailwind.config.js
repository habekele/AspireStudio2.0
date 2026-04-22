/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#FEFCF9',
        surface: '#FFFFFF',
        linen:   '#F5EDE5',
        blush:   '#EDD5CC',
        rose: {
          DEFAULT: '#B8756A',
          dark:    '#9E5E54',
          mist:    '#FAF0EE',
        },
        petal:   '#F0E0DB',
        text:    '#2A1E1A',
        stone:   '#6E5C56',
        muted:   '#A09088',
        border:  '#EDE5DC',
        ink:     '#1A1210',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero:    ['clamp(3.8rem, 9.5vw, 8rem)', { lineHeight: '0.92', letterSpacing: '-0.015em' }],
        display: ['clamp(1.8rem, 2.8vw, 2.5rem)', { lineHeight: '1.1',  letterSpacing: '-0.01em'  }],
      },
      maxWidth: { site: '1100px' },
      boxShadow: {
        xs: '0 1px 3px rgba(42,30,26,0.05)',
        s:  '0 2px 12px rgba(42,30,26,0.07)',
        m:  '0 8px 28px rgba(42,30,26,0.10)',
        l:  '0 20px 56px rgba(42,30,26,0.13)',
      },
    },
  },
  plugins: [],
}
