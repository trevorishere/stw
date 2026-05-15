import Btn from './Btn'

// Reusable product card — handles all three breakpoints.
//
// imageLeft  true  → image on LEFT at desktop (natural DOM order, no reordering)
//            false → image on RIGHT at desktop (image still first in DOM for
//                    natural top-stacking at tablet/mobile; tablet:order-* swaps at desktop)
//
// tabletPb   Tailwind class controlling tablet bottom padding on the text block.
//            Pass the full responsive class, e.g. 'max-tablet:pb-16' (default, 64px)
//            or 'max-tablet:pb-12' (48px) for the Tarot card.
//
// imageClassName   Extra classes on <img> — use for object-position overrides.
// className        Extra classes on the outer card div (background color, etc.)
// style            Inline style on the outer div (for gradient backgrounds).

export default function ProductCard({
  className = '',
  style,
  imageLeft = false,
  image,
  imageClassName = '',
  category,
  title,
  description,
  cta,
  href = '#contact',
  tabletPb = 'max-tablet:pb-16',
}) {
  // Image is always first in DOM → naturally on top at tablet/mobile (flex-col).
  // At desktop (≥900px), tablet:order-* repositions image right when imageLeft=false.
  const imgOrder = !imageLeft ? 'tablet:order-2' : ''
  const txtOrder = !imageLeft ? 'tablet:order-1' : ''

  return (
    <div
      className={`flex overflow-hidden max-tablet:flex-col ${className}`}
      style={style}
    >

      {/* Image — first in DOM, top on tablet/mobile, left/right on desktop */}
      <div className={`flex-1 min-w-0 self-stretch overflow-hidden
                       max-tablet:flex-none max-tablet:w-full max-tablet:h-[561px]
                       max-phone:h-auto max-phone:aspect-[472/385] ${imgOrder}`}>
        <img
          src={image}
          alt=""
          className={`w-full h-full object-cover block ${imageClassName}`}
          loading="lazy"
        />
      </div>

      {/* Text content */}
      <div className={`flex-1 min-w-0 flex flex-col gap-8
                       pl-16 py-16
                       max-tablet:px-12 max-tablet:pt-0 ${tabletPb}
                       max-phone:px-12 max-phone:pt-0 max-phone:pb-14
                       ${txtOrder}`}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <p className="eyebrow text-cream opacity-70">{category}</p>
            <h3 className="font-figtree font-extrabold text-[36px] leading-[44px] tracking-[0.2px] text-cream
                           max-phone:leading-[40px]">
              {title}
            </h3>
          </div>
          <p className="body-copy text-cream">{description}</p>
        </div>
        <Btn color="mutedOnDark" href={href} className="self-start">{cta}</Btn>
      </div>

    </div>
  )
}
