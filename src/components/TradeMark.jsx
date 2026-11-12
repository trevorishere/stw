// ©TM© superscript component — centralises all size variants.
// All sizes render as inline-block with vertical-align: 1em for consistent positioning.
//
// size   "xl"      0.3em of the headline at expanded/desktop and mobile / 12px tablet — hero headline only
//        "tagline" 0.48em of the tagline (about half the letter height, so it sits above the top of the
//                  letters) plus a small gap at phone and expanded/desktop / 12px tablet — hero tagline only
//        "lg"      16px desktop / 13px expanded / 12px tablet / 10px mobile — offering & product h3
//        "nav"     11px desktop+expanded / 10px tablet+mobile        — nav brand
//        "md"      9px desktop+expanded / 8px tablet+mobile          — inline in text, footer brand
//        "sm"      7px all viewports                                  — eyebrow-level

const SIZES = {
  xl: 'font-semibold text-[0.3em] tablet:text-[12px]',
  tagline: 'font-semibold text-[0.48em] ml-[0.17em] tablet:text-[12px] tablet:ml-0 expanded:text-[0.48em] expanded:ml-[0.17em] desktop:text-[0.48em] desktop:ml-[0.17em]',
  lg: 'font-semibold text-[10px] tablet:text-[12px] expanded:text-[13px] desktop:text-[16px]',
  nav: 'font-normal text-[10px] expanded:text-[11px] desktop:text-[11px]',
  md: 'font-normal text-[8px] expanded:text-[9px] desktop:text-[9px]',
  sm: 'font-normal text-[7px]',
}

// className     — extra classes for the word and its ©TM© together (e.g. a color for both); needs `word`
// markClassName — extra classes for the ©TM© itself (e.g. a color)
export default function TradeMark({ size = 'lg', word, gap = false, tracking = '', className = '', markClassName = '' }) {
  const mark = <span className={`inline-block leading-none align-[1em] ${SIZES[size]}${tracking ? ` ${tracking}` : ''}${markClassName ? ` ${markClassName}` : ''}`}>©TM©</span>

  if (word) {
    return <span className={`whitespace-nowrap${className ? ` ${className}` : ''}`}>{word}{gap ? <span className="ml-[2px]">{mark}</span> : mark}</span>
  }
  return mark
}
