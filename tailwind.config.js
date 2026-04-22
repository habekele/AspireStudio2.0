/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#FAF7F2',
        surface: '#FFFFFF',
        warm:    '#F0E6D3',
        gold: {
          DEFAULT: '#C4956A',
          dark:    '#A87848',
          light:   '#E8D5B8',
          mist:    '#FBF5EE',
        },
        brown: {
          DEFAULT: '#8C6240',
          dark:    '#5C3D20',
        },
        text:   '#1C0F07',
        stone:  '#6B4E38',
        muted:  '#9B7D65',
        border: '#E8D8C8',
        ink:    '#100803',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero:    ['clamp(4rem, 10vw, 9rem)',   { lineHeight: '0.9',  letterSpacing: '-0.02em' }],
        display: ['clamp(2rem, 3.2vw, 2.8rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
      },
      maxWidth: { site: '1100px' },
      boxShadow: {
        xs: '0 1px 3px rgba(28,15,7,0.05)',
        s:  '0 2px 12px rgba(28,15,7,0.08)',
        m:  '0 8px 28px rgba(28,15,7,0.12)',
        l:  '0 20px 56px rgba(28,15,7,0.15)',
        gold: '0 6px 24px rgba(196,149,106,0.30)',
      },
    },
  },
  plugins: [],
}
