/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette tokens
        cream:     '#eff2dd',
        dark:      '#202020',
        accent:    '#ffe52c',
        purple:    '#5c3551',
        muted:     '#b0b2a5',
        pink:      '#ffa3a3',
        productBg:       '#e8ebd5',
        productBgBorder: '#d6d9c5',
        // Semantic aliases — express intent rather than palette name
        'color-bg':          '#eff2dd', // page background
        'color-surface':     '#e8ebd5', // card / section surface
        'color-text':        '#202020', // primary text
        'color-text-muted':  '#b0b2a5', // subdued labels, captions
        'color-interactive': '#ffe52c', // CTAs, highlights
        'color-brand':       '#5c3551', // brand accent
        'color-highlight':   '#ffa3a3', // about / footer accent
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        bitter:  ['Bitter', 'serif'],
        dmSans:  ['"DM Sans"', 'sans-serif'],
      },
      maxWidth: {
        site: '1440px',
      },
      spacing: {
        // Section vertical padding scale — used by py-*/pt-*/pb-* on page-container divs
        'section-y-sm': '104px', // Hero (all), Offerings (tablet/mobile)
        'section-y':    '112px', // Featured, Mission (top), About
        'section-y-lg': '120px', // Offerings (desktop), Footer (desktop)
      },
      scrollMargin: {
        nav:       '80px',
        navMobile: '80px',
      },
      zIndex: {
        nav:       '100',
        navDrawer: '99',
      },
      screens: {
        tablet:         '900px',
        'max-tablet':   { max: '899px' },
        expanded:       { min: '900px', max: '1199px' },
        desktop:        '1200px',
        'max-expanded': { max: '1199px' },
        'max-phone':    { max: '600px' },
      },
    },
  },
  plugins: [],
}
