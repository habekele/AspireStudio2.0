/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1A0E06',
          2: '#2C1A0E',
        },
        cream: '#FAF8F4',
        warm: '#F0E6D3',
        card: '#FBF7F1',
        gold: '#C4956A',
        bronze: '#8C6240',
        smoke: '#6B4830',
        footer: '#100803',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Raleway', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero:    ['clamp(4.5rem, 11vw, 9.5rem)', { lineHeight: '0.88' }],
        display: ['clamp(1.9rem, 3vw, 2.7rem)',  { lineHeight: '1.12' }],
      },
      maxWidth: {
        site: '1120px',
      },
      borderRadius: {
        '3xl': '28px',
      },
      boxShadow: {
        's': '0 2px 16px rgba(26,14,6,0.08)',
        'm': '0 8px 32px rgba(26,14,6,0.14)',
        'l': '0 20px 60px rgba(26,14,6,0.18)',
        'gold': '0 8px 28px rgba(196,149,106,0.35)',
      },
    },
  },
  plugins: [],
}
