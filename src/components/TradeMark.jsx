// ©TM© superscript component — centralises all size variants.
// All sizes render as inline-block with vertical-align: 1em for consistent positioning.
//
// size   "lg"      16px desktop / 13px expanded / 12px tablet / 10px mobile — offering, product & hero h3
//        "md"      11px desktop+tablet / 10px mobile                 — inline in text, nav/footer brand
//        "sm"      7px all viewports                                  — eyebrow-level

const SIZES = {
  lg: 'font-semibold text-[10px] tablet:text-[12px] expanded:text-[13px] desktop:text-[16px]',
  md: 'font-normal text-[8px] expanded:text-[9px] desktop:text-[9px]',
  sm: 'font-normal text-[7px]',
}

export default function TradeMark({ size = 'lg', word, gap = false, tracking = '' }) {
  const mark = <span className={`inline-block leading-none align-[1em] ${SIZES[size]}${tracking ? ` ${tracking}` : ''}`}>©TM©</span>

  if (word) {
    return <span className="whitespace-nowrap">{word}{gap ? <span className="ml-[2px]">{mark}</span> : mark}</span>
  }
  return mark
}
