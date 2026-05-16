// Two-state button — one size for desktop/tablet, one for mobile.
//
// Desktop/tablet: px-[28px] py-[20px], rounded-[32px], ExtraBold 14px/16lh/0.75ls
// Mobile:         px-[28px] py-[17px], rounded-[24px], ExtraBold 12px/14lh/0.5ls
//
// color    "dark"        → dark border + text, hover: bg-dark      / text-cream
//          "cream"       → cream border + text, hover: bg-cream     / text-dark
//          "white"       → white border + text, hover: bg-white     / text-dark
//          "productBg"   → filled productBg bg, subtle border, hover: bg-dark / text-cream
//          "muted"       → muted border + dark text, hover: bg-dark / text-cream
//          "mutedOnDark" → muted border + cream text, hover: bg-muted / text-dark
//
// hoverText  optional token override for hover text color only
//            e.g. hoverText="purple" for the About CTA
//
// Pass href for <a>, omit for <button>.

const COLOR_PRESETS = {
  dark:        { base: 'border-dark text-dark',                         hoverBg: 'hover:bg-dark',    defaultHoverText: 'hover:text-cream' },
  cream:       { base: 'border-cream text-cream',                       hoverBg: 'hover:bg-cream',   defaultHoverText: 'hover:text-dark'  },
  white:       { base: 'border-white text-white',                       hoverBg: 'hover:bg-white',   defaultHoverText: 'hover:text-dark'  },
  productBg:   { base: 'bg-productBg border-productBgBorder text-dark', hoverBg: 'hover:bg-dark',    defaultHoverText: 'hover:text-cream' },
  muted:       { base: 'border-muted text-dark',                        hoverBg: 'hover:bg-dark',    defaultHoverText: 'hover:text-cream' },
  mutedOnDark: { base: 'border-muted text-cream',                       hoverBg: 'hover:bg-muted',   defaultHoverText: 'hover:text-dark'  },
}

// Explicit strings so Tailwind's scanner always includes every class.
const HOVER_TEXT = {
  dark:   'hover:text-dark',
  cream:  'hover:text-cream',
  white:  'hover:text-white',
  purple: 'hover:text-purple',
}

export default function Btn({ color = 'dark', hoverText, href, children, className = '' }) {
  const preset = COLOR_PRESETS[color]
  const hoverTextClass = hoverText ? HOVER_TEXT[hoverText] : preset.defaultHoverText

  const classes = [
    'inline-flex items-center justify-center',
    'border font-figtree font-bold uppercase whitespace-nowrap no-underline transition-colors',
    'rounded-[32px] px-[28px] py-[19px] text-[14px] leading-[16px] tracking-[0.75px]',
    preset.base, preset.hoverBg, hoverTextClass,
    'max-phone:rounded-[24px] max-phone:py-[16px] max-phone:text-[12px] max-phone:leading-[14px] max-phone:tracking-[0.7px]',
    className,
  ].filter(Boolean).join(' ')

  if (href) return <a href={href} className={classes}>{children}</a>
  return <button type="button" className={classes}>{children}</button>
}
