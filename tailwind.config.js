/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Palette tokens ──────────────────────────────────────────────
        'olive-light':   '#eff2dd',
        'olive-lighter': '#F4F6EA',
        'cobalt-light':  '#2c2c2c',
        cobalt:          '#262626',
        'cobalt-dark':   '#202020',
        'deep-gray':     '#4B4B4B',
        yellow:          '#ffe52c',
        purple:          '#5c3551',
        'warm-grey-light': '#7E8076',
        'warm-grey-dark':  '#98998D',
        pink:            '#ffa3a3',
        'olive-dark':    '#e8ebd5',
        olive:           '#d6d9c5',

        // ── Semantic aliases — intent over palette name ──────────────────
        'surface-bg':       '#eff2dd', // = olive-light — page background
        'surface-card':     '#e8ebd5', // = olive-dark — about, product cards
        'surface-dark':     '#2c2c2c', // = cobalt-light — mission, testimonial
        'surface-darker':   '#262626', // = cobalt — featured
        'surface-darkest':  '#202020', // = cobalt-dark — hero, nav, products
        'text-dark':     '#202020', // primary text on dark or high-contrast surfaces
        'text-muted':    '#b0b2a5', // subdued labels, captions
        'brand-yellow':  '#ffe52c', // CTAs, highlights
        'brand-purple':  '#5c3551', // brand accent
        'brand-pink':    '#ffa3a3', // about / footer accent
      },

      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        bitter:  ['Bitter', 'serif'],
        dmSans:  ['"DM Sans"', 'sans-serif'],
      },

      fontSize: {
        11: 'var(--text-11)',
        12: 'var(--text-12)',
        13: 'var(--text-13)',
        14: 'var(--text-14)',
        16: 'var(--text-16)',
        18: 'var(--text-18)',
        20: 'var(--text-20)',
        24: 'var(--text-24)',
        32: 'var(--text-32)',
        36: 'var(--text-36)',
        40: 'var(--text-40)',
        56: 'var(--text-56)',
      },

      maxWidth: {
        site: '1440px',
      },

      lineHeight: {
        '1':   '1',
        '1-1': '1.1',
        '1-2': '1.2',
        '1-3': '1.3',
        '1-5': '1.5',
      },

      letterSpacing: {
        xs:   'var(--ls-xs)',
        sm:   'var(--ls-sm)',
        md:   'var(--ls-md)',
        lg:   'var(--ls-lg)',
        caps: 'var(--ls-caps)',
      },

      borderRadius: {
        'btn-desktop': 'var(--radius-full)',
        'btn-mobile':  'var(--radius-full)',
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
        'nav-mobile':    '80px',  // mobile nav height
        nav:             '96px',  // desktop/expanded/tablet nav height

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
        'max-phone': { max: '599px' },
        tablet:      { min: '600px', max: '899px' },
        expanded:    { min: '900px', max: '1199px' },
        desktop:     '1200px',
      },
    },
  },
  plugins: [],
}
