import Btn from './Btn'
import { useReveal } from '../hooks/useReveal'

// Product card — offering-row layout at tablet+ (≥900px), stacked at mobile.
//
// imageLeft  true  → image LEFT at tablet+ (natural DOM order)
//            false → image RIGHT at tablet+ (tablet:order-* swaps)
//
// At tablet+ both columns are flex-1 (50/50).
// Image container defaults to self-stretch (matches text height).
// Pass imageContainerClassName to override (e.g. "tablet:h-[419px]" for fixed height).
// imageFit controls object-fit on the img: "contain" (default) or "cover".

export default function ProductCard({
  className = '',
  style,
  imageLeft = false,
  image,
  alt = '',
  imageMobile,
  imageFit = 'contain',
  imageClassName = '',
  imageContainerClassName = '',
  textClassName = '',
  category,
  title,
  description,
  footnote,
  cta,
  href = '#contact',
  tabletPb = 'max-tablet:pb-16',
}) {
  const [ref, visible] = useReveal()
  const imgOrder = !imageLeft ? 'tablet:order-2' : ''
  const txtOrder = !imageLeft ? 'tablet:order-1' : ''
  const fitClass = imageFit === 'cover' ? 'tablet:object-cover' : 'tablet:object-contain'

  return (
    <div
      ref={ref}
      className={`reveal-heading offering-card
                  tablet:flex tablet:gap-6 tablet:items-center tablet:py-6
                  max-tablet:flex-col max-tablet:gap-8 max-tablet:overflow-hidden max-tablet:px-12
                  max-phone:px-8
                  ${className}${visible ? ' in-view' : ''}`}
      style={style}
    >

      {/* Image column — 45% width at tablet+, self-stretch height (matches text column).
          Image fills the container via absolute inset-0. */}
      <div
        className={`tablet:flex-none tablet:w-[45%] tablet:min-w-0 tablet:self-stretch tablet:relative tablet:overflow-hidden
                     max-tablet:flex-none max-tablet:w-full max-tablet:h-[360px] max-phone:h-[300px]
                     overflow-hidden ${imageContainerClassName} ${imgOrder}`}
      >
        <picture className="block w-full h-full tablet:absolute tablet:inset-0">
          {imageMobile && <source media="(max-width: 899px)" srcSet={imageMobile} />}
          <img
            src={image}
            alt={alt}
            className={`block w-full h-full object-contain ${fitClass} max-tablet:mx-auto ${imageClassName}`}
            loading="lazy"
          />
        </picture>
      </div>

      {/* Text column — 55% width at tablet+ */}
      <div className={`flex flex-col gap-8 max-tablet:gap-10
                       tablet:flex-none tablet:w-[55%] tablet:min-w-0
                       max-tablet:pt-0 ${tabletPb}
                       max-phone:pt-0 max-phone:pb-16
                       ${txtOrder} ${textClassName}`}>
        <div className="flex flex-col gap-4 max-phone:gap-2">
          <div className="flex flex-col gap-4">
            <p className="eyebrow text-white opacity-70">{category}</p>
            <h3 className="font-figtree font-extrabold text-[32px] leading-[34px] text-white
                           desktop:text-[36px] desktop:leading-[40px]
                           max-phone:text-[22px] max-phone:leading-[24px]">
              {title}
            </h3>
          </div>
          <p className="body-copy text-cream">{description}</p>
          {footnote && (
            <p className="font-dmSans font-normal text-[14px] leading-[21px] tracking-[0.1px] text-white opacity-70
                          max-phone:text-[12px] max-phone:leading-[18px] max-phone:tracking-normal">
              {footnote}
            </p>
          )}
        </div>
        <Btn color="white" href={href} className="self-start max-tablet:self-center">{cta}</Btn>
      </div>

    </div>
  )
}
