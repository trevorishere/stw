// Three-size button component — no arrow icon.
//
// variant  "hero"    → large (desktop only): px-6 py-5 text-[16px] tracking-[1.5px]
//          "default" → standard:             px-5 py-4 text-[14px] tracking-[1px]
//          Mobile is always the same for both variants.
//
// color    "dark"  → dark border + text, hover: bg-dark  / text-cream
//          "cream" → cream border + text, hover: bg-cream / text-dark
//          "white" → white border + text, hover: bg-white / text-dark
//
// hoverText  optional token override for hover text color only
//            e.g. hoverText="purple" for the About CTA
//
// Pass href for <a>, omit for <button>.

const COLOR_PRESETS = {
  dark:  { base: 'border-dark text-dark',   hoverBg: 'hover:bg-dark',  defaultHoverText: 'hover:text-cream' },
  cream: { base: 'border-cream text-cream', hoverBg: 'hover:bg-cream', defaultHoverText: 'hover:text-dark'  },
  white: { base: 'border-white text-white', hoverBg: 'hover:bg-white', defaultHoverText: 'hover:text-dark'  },
}

// Explicit strings so Tailwind's scanner always includes every class.
const HOVER_TEXT = {
  dark:   'hover:text-dark',
  cream:  'hover:text-cream',
  white:  'hover:text-white',
  purple: 'hover:text-purple',
}

export default function Btn({ variant = 'default', color = 'dark', hoverText, href, children, className = '' }) {
  const preset = COLOR_PRESETS[color]
  const hoverTextClass = hoverText ? HOVER_TEXT[hoverText] : preset.defaultHoverText

  const sizeClasses = variant === 'hero'
    ? 'px-6 py-5 text-[16px] leading-4 tracking-[1.5px]'
    : 'px-5 py-4 text-[14px] leading-4 tracking-[1px]'

  const classes = [
    'inline-flex items-center justify-center',
    'border font-figtree font-bold uppercase whitespace-nowrap no-underline transition-colors',
    preset.base, preset.hoverBg, hoverTextClass,
    sizeClasses,
    // Mobile — identical for all variants
    'max-phone:px-4 max-phone:py-[13px] max-phone:text-[12px] max-phone:leading-[14px] max-phone:tracking-[1px]',
    className,
  ].filter(Boolean).join(' ')

  if (href) return <a href={href} className={classes}>{children}</a>
  return <button type="button" className={classes}>{children}</button>
}
