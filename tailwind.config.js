/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:     '#eff2dd',
        dark:      '#202020',
        grey23:    '#3a3a3a',
        grey10:    '#1a1a1a',
        grey16:    '#2a2a2a',
        accent:    '#ffe52c',
        pearl:     '#eae4d8',
        purple:    '#5c3551',
        muted:     '#b0b2a5',
        pink:      '#ffa3a3',
        productBg: '#e8ebd5',
      },
      fontFamily: {
        figtree:   ['Figtree', 'sans-serif'],
        bitter:    ['Bitter', 'serif'],
        dmSans:    ['"DM Sans"', 'sans-serif'],
        dmMono:    ['"DM Mono"', 'monospace'],
      },
      screens: {
        tablet:       '900px',
        'max-tablet': { max: '900px' },
        'max-phone':  { max: '600px' },
        'max-xs':     { max: '400px' },
      },
    },
  },
  plugins: [],
}
