/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#FAF9F7',
        surface: '#FFFFFF',
        sand:    '#F2E9DF',
        clay: {
          DEFAULT: '#C8704E',
          dark:    '#AD5C3A',
          mist:    '#F7EDE6',
        },
        charcoal: '#1A1614',
        stone:    '#3D3530',
        muted:    '#7A6E68',
        border:   '#E8DDD5',
        ink:      '#120D0A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero:    ['clamp(4rem, 10vw, 8.5rem)', { lineHeight: '0.9',  letterSpacing: '-0.02em' }],
        display: ['clamp(1.9rem, 3vw, 2.6rem)',  { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
      },
      maxWidth: { site: '1120px' },
      boxShadow: {
        xs: '0 1px 4px rgba(20,12,8,0.06)',
        s:  '0 2px 12px rgba(20,12,8,0.08)',
        m:  '0 8px 28px rgba(20,12,8,0.12)',
        l:  '0 20px 60px rgba(20,12,8,0.16)',
      },
    },
  },
  plugins: [],
}
