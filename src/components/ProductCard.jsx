import Btn from './Btn'

// Reusable product card — handles all three breakpoints.
//
// imageLeft  true  → image LEFT at desktop (natural DOM order)
//            false → image RIGHT at desktop (tablet:order-* swaps)
//
// Desktop layout: side-by-side flex row. Image fills its column at a fixed
// height (passed via imageContainerClassName, e.g. tablet:h-[580px]).
// Tablet/mobile: image stacks on top, fixed h-[561px], object-cover.
//
// Props:
//   imageContainerClassName  Extra classes on the image wrapper — use for
//                            per-card desktop height (e.g. tablet:h-[580px]).
//   imageContainerStyle      Inline style on the image container.
//   imageClassName           Classes on <img> — object positioning overrides.
//   textClassName            Extra classes on the text block (desktop padding
//                            overrides, e.g. tablet:pl-0 tablet:pr-[64px]).
//   tabletPb                 Tailwind class for tablet bottom padding on text.
//   footnote                 Optional small-print line below the CTA button.
//   className / style        Applied to the outer card div.

export default function ProductCard({
  className = '',
  style,
  imageLeft = false,
  image,
  imageMobile,
  imageClassName = '',
  imageContainerClassName = '',
  imageContainerStyle,
  textClassName = '',
  category,
  title,
  description,
  footnote,
  cta,
  href = '#contact',
  tabletPb = 'max-tablet:pb-16',
}) {
  const imgOrder = !imageLeft ? 'tablet:order-2' : ''
  const txtOrder = !imageLeft ? 'tablet:order-1' : ''

  return (
    <div
      className={`tablet:flex tablet:items-start max-tablet:flex-col max-tablet:overflow-hidden ${className}`}
      style={style}
    >

      {/* Image column
          Desktop : flex-1, fixed height via imageContainerClassName, object-cover.
          Tablet/mobile : full-width, auto height (hugs image contents). */}
      <div
        className={`tablet:flex-1 tablet:min-w-0 tablet:overflow-hidden
                     max-tablet:flex-none max-tablet:w-full
                     overflow-hidden ${imageContainerClassName} ${imgOrder}`}
        style={imageContainerStyle}
      >
        <picture className="block w-full tablet:h-full">
          {imageMobile && <source media="(max-width: 1024px)" srcSet={imageMobile} />}
          <img
            src={image}
            alt=""
            className={`block w-full tablet:h-full tablet:object-cover max-tablet:mx-auto ${imageClassName}`}
            loading="lazy"
          />
        </picture>
      </div>

      {/* Text column
          Desktop : flex-1, padding via pl-16 py-16 default (override with textClassName).
          Tablet/mobile : stacked, px-12. */}
      <div className={`flex flex-col gap-8 max-tablet:gap-10 tablet:flex-1 tablet:min-w-0 tablet:justify-center
                       pl-16 py-16
                       max-tablet:px-12 max-tablet:pt-0 ${tabletPb}
                       max-phone:px-8 max-phone:pt-8 max-phone:pb-16
                       ${txtOrder} ${textClassName}`}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <p className="eyebrow text-white opacity-70">{category}</p>
            <h3 className="font-figtree font-extrabold text-[40px] leading-[44px] tracking-[0.2px] text-white
                           max-tablet:text-[36px] max-tablet:leading-[40px]
                           max-phone:text-[22px] max-phone:leading-[24px]">
              {title}
            </h3>
          </div>
          <p className="body-copy text-white">{description}</p>
        </div>
        <Btn color="white" href={href} className="self-start">{cta}</Btn>
        {footnote && (
          <p className="font-dmSans font-normal text-[14px] leading-[21px] text-white opacity-70
                        max-phone:text-[12px] max-phone:leading-[18px]">
            {footnote}
          </p>
        )}
      </div>

    </div>
  )
}
