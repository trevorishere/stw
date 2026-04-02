/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:  '#f5f0e8',
        dark:   '#0d0d0d',
        grey23: '#3a3a3a',
        grey10: '#1a1a1a',
        grey16: '#2a2a2a',
        brand:  '#c0392b',
        accent: '#e8ff00',
        pearl:  '#eae4d8',
      },
      fontFamily: {
        syne:  ['Syne', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        slab:  ['"Roboto Slab"', 'serif'],
      },
      screens: {
        // min-width (mobile-first) breakpoint for "desktop-like" nav etc.
        tablet: '900px',
        // max-width breakpoints to mirror the original responsive CSS
        'max-tablet': { max: '900px' },
        'max-phone':  { max: '600px' },
        'max-xs':     { max: '400px' },
      },
    },
  },
  plugins: [],
}
