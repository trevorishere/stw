// Two-state button — one size for desktop/tablet/expanded, one for mobile.
//
// Desktop/tablet: px-8 h-[48px], rounded-btn-desktop (pill), Bold 14px/leading-1-1/tracking-md
// Mobile:         px-8 h-[48px], rounded-btn-mobile  (pill), Bold 12px/leading-1-1/tracking-md
//
// color    "dark"        → dark border + text, hover: bg-cobalt-dark      / text-olive-light
//          "cream"       → cream border + text, hover: bg-olive-light     / text-cobalt-dark
//          "white"       → white border + text, hover: bg-white     / text-cobalt-dark
//          "productBg"   → filled productBg bg, subtle border, hover: bg-cobalt-dark / text-olive-light
//          "muted"       → muted border + dark text, hover: bg-cobalt-dark / text-olive-light
//          "mutedOnDark" → muted border + cream text, hover: bg-warm-grey-dark / text-cobalt-dark
//
// hoverText  optional token override for hover text color only
//            e.g. hoverText="purple" for the About CTA
//
// Pass href for <a>, omit for <button>.

const COLOR_PRESETS = {
  dark:        { base: 'border-cobalt-dark/40 text-cobalt-dark',                      hoverBg: 'hover:bg-cobalt-dark',    defaultHoverText: 'hover:text-olive-light' },
  cream:       { base: 'border-white/40 text-olive-lighter',             hoverBg: 'hover:bg-olive-light',   defaultHoverText: 'hover:text-cobalt-dark'  },
  white:       { base: 'border-white/40 text-olive-lighter',             hoverBg: 'hover:bg-white',   defaultHoverText: 'hover:text-cobalt-dark'  },
  productBg:   { base: 'bg-olive-dark border-cobalt-dark/40 text-cobalt-dark',         hoverBg: 'hover:bg-cobalt-dark',    defaultHoverText: 'hover:text-olive-light' },
  muted:       { base: 'border-cobalt-dark/40 text-cobalt-dark',                      hoverBg: 'hover:bg-cobalt-dark',    defaultHoverText: 'hover:text-olive-light' },
  mutedOnDark: { base: 'border-white/40 text-olive-light',                    hoverBg: 'hover:bg-warm-grey-dark',   defaultHoverText: 'hover:text-cobalt-dark'  },
}

// Explicit strings so Tailwind's scanner always includes every class.
const HOVER_TEXT = {
  dark:   'hover:text-cobalt-dark',
  cream:  'hover:text-olive-light',
  white:  'hover:text-white',
  purple: 'hover:text-purple',
}

export default function Btn({ color = 'dark', hoverText, href, children, className = '' }) {
  const preset = COLOR_PRESETS[color]
  const hoverTextClass = hoverText ? HOVER_TEXT[hoverText] : preset.defaultHoverText

  const classes = [
    'inline-flex items-center justify-center',
    'border font-figtree font-bold uppercase whitespace-nowrap no-underline transition-colors duration-200',
    'rounded-btn-desktop h-[48px] px-8 text-14 leading-1-1 tracking-md',
    preset.base, preset.hoverBg, hoverTextClass,
    'max-phone:rounded-btn-mobile max-phone:text-12',
    className,
  ].filter(Boolean).join(' ')

  if (href) return <a href={href} className={classes}>{children}</a>
  return <button type="button" className={classes}>{children}</button>
}
