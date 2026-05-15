// ©TM© superscript component — centralises all size variants.
//
// size   "xl"      26px desktop / 23px tablet / 14px mobile  — offering & product h3
//        "empire"  26px desktop / 21px tablet / 14px mobile  — empire h3
//        "product" 23px desktop+tablet / 22px mobile         — product card h3
//        "lg"      26px desktop / 17px tablet / 18px mobile  — hero tagline
//        "body"    11px desktop+tablet / 10px mobile         — body-copy inline
//        "sm"      12px desktop+tablet / 10px mobile         — nav brand
//        "footer"  12px desktop+tablet / 8px mobile          — footer brand (medium weight)
//        "xs"      8px desktop+tablet / 7px mobile           — eyebrow-level

const SIZES = {
  xl:      'font-normal text-[26px] max-tablet:text-[23px] max-phone:text-[14px]',
  empire:  'font-normal text-[26px] max-tablet:text-[21px] max-phone:text-[14px]',
  product: 'font-normal text-[23px] max-phone:text-[22px]',
  lg:      'font-normal not-italic text-[26px] max-tablet:text-[17px] max-phone:text-[18px]',
  body:    'font-normal text-[11px] max-phone:text-[10px]',
  sm:      'font-normal text-[12px] max-tablet:text-[10px]',
  footer:  'font-medium text-[12px] tracking-normal max-phone:text-[8px]',
  xs:      'font-normal text-[8px] max-phone:text-[7px]',
}

export default function TradeMark({ size = 'xl' }) {
  return <sup className={SIZES[size]}>©TM©</sup>
}
