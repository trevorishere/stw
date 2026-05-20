// ©TM© superscript component — centralises all size variants.
// Header/title sizes are ~40% of parent font size at each breakpoint.
//
// size   "xl"      14px desktop / 13px expanded+tablet / 9px mobile  — offering & product h3
//        "empire"  16px desktop / 13px expanded+tablet / 9px mobile  — empire h3
//        "product" 23px desktop+tablet / 22px mobile                 — product card h3
//        "lg"      16px desktop / 10px tablet / 11px mobile          — hero tagline
//        "body"    11px desktop+tablet / 10px mobile                 — body-copy inline
//        "sm"      12px desktop+tablet / 10px mobile                 — nav brand
//        "footer"  12px desktop+tablet / 8px mobile                  — footer brand (medium weight)
//        "xs"      8px desktop+tablet / 7px mobile                   — eyebrow-level
//
// xl / empire / lg render as inline-block <span> so vertical-align positions the
// box top flush with the parent's cap height. All other sizes use native <sup>.

const SIZES = {
  xl:      'font-semibold text-[13px] desktop:text-[14px] max-phone:text-[9px]',
  empire:  'font-semibold text-[13px] desktop:text-[16px] max-phone:text-[9px]',
  product: 'font-normal text-[23px] max-phone:text-[22px]',
  lg:      'font-semibold not-italic text-[16px] max-tablet:text-[10px] max-phone:text-[11px]',
  body:    'font-normal text-[11px] max-phone:text-[10px]',
  sm:      'font-normal text-[12px] max-tablet:text-[10px]',
  footer:  'font-medium text-[12px] tracking-normal max-phone:text-[8px]',
  xs:      'font-normal text-[8px] max-phone:text-[7px]',
}

// Header/title sizes: inline-block + leading-none so box height = font-size.
// vertical-align: 1em lifts the box bottom to 1× the symbol's font-size above
// the parent baseline, placing the box top at approximately the parent cap height.
// Adjust the em value up/down to fine-tune alignment.
const HEADER_SIZES = new Set(['xl', 'empire', 'lg'])

export default function TradeMark({ size = 'xl' }) {
  if (HEADER_SIZES.has(size)) {
    return (
      <span className={`inline-block leading-none align-[1em] ${SIZES[size]}`}>©TM©</span>
    )
  }
  return <sup className={SIZES[size]}>©TM©</sup>
}
