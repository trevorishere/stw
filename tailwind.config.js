/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:     '#eff2dd',
        dark:      '#202020',
        accent:    '#ffe52c',
        purple:    '#5c3551',
        muted:     '#b0b2a5',
        pink:      '#ffa3a3',
        productBg: '#e8ebd5',
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        bitter:  ['Bitter', 'serif'],
        dmSans:  ['"DM Sans"', 'sans-serif'],
      },
      maxWidth: {
        site: '1440px',
      },
      screens: {
        tablet:       '900px',
        'max-tablet': { max: '900px' },
        'max-phone':  { max: '600px' },
      },
    },
  },
  plugins: [],
}
