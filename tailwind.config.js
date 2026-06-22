/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Palette tokens ──────────────────────────────────────────────
        cream:           '#eff2dd',
        dark:            '#202020',
        accent:          '#ffe52c',
        purple:          '#5c3551',
        muted:           '#b0b2a5',
        pink:            '#ffa3a3',
        productBg:       '#e8ebd5',
        productBgBorder: '#d6d9c5',

        // ── Section background tokens ────────────────────────────────────
        // Dark hero/nav/products
        'surface-darkest': '#202020', // = dark — hero, nav, products
        // Featured section bg (near-black warm)
        'surface-darker':  '#262626', // featured
        // Mission + Testimonial section bg (warm charcoal)
        'surface-dark':    '#2c2c2c', // mission, testimonial

        // ── UI state tokens ──────────────────────────────────────────────
        'nav-link':        '#c6c6c6', // inactive desktop nav link

        // ── Semantic aliases — intent over palette name ──────────────────
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

      borderRadius: {
        // Button pill radii
        btn:        '32px', // desktop/tablet button
        'btn-sm':   '24px', // mobile button
      },

      spacing: {
        // ── Section vertical padding scale ───────────────────────────────
        'section-y-2xs': '80px',  // mobile hero/about pt
        'section-y-xs':  '88px',  // hero py (all)
        'section-y-sm':  '104px', // hero (legacy), offerings tablet/mobile
        'section-y':     '112px', // featured, mission top, about
        'section-y-lg':  '120px', // mission pb, offerings desktop, footer desktop, donate
        'section-y-xl':  '136px', // mission pb, donate pb, products pb
        'section-y-2xl': '144px', // about pb

        // ── Nav heights ──────────────────────────────────────────────────
        'nav-h':         '80px',  // mobile nav height
        'nav-h-tablet':  '96px',  // desktop/expanded/tablet nav height

        // ── Content gaps ─────────────────────────────────────────────────
        'gap-content':   '48px',  // standard between-element gap (bio→cta, header→body, etc.)
        'gap-section':   '64px',  // between-card gap inside sections
        'gap-section-lg':'88px',  // between offering groups
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
