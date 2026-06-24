import { useReveal } from '../hooks/useReveal'

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
}) {
  const [ref, visible] = useReveal()

  const textOrder = imageLeft
    ? 'order-2'
    : 'order-2 expanded:order-1 desktop:order-1'

  const imageDesktopOrder = imageLeft
    ? 'expanded:order-1 desktop:order-1'
    : 'expanded:order-2 desktop:order-2'

  const fitClass = imageFit === 'cover' ? 'object-cover' : 'object-contain'

  return (
    <div
      ref={ref}
      className={`reveal-heading flex flex-col gap-6 px-8 max-phone:px-4
        max-phone:max-w-[664px] max-phone:mx-auto
        tablet:px-12 tablet:max-w-[696px] tablet:mx-auto
        expanded:flex-row expanded:items-center expanded:gap-8 expanded:px-0 expanded:w-full expanded:max-w-[1144px] expanded:mx-auto
        desktop:flex-row desktop:items-center desktop:gap-8 desktop:px-0 desktop:w-full desktop:max-w-[1144px] desktop:mx-auto
        ${className}${visible ? ' in-view' : ''}`}
      style={style}
    >
      {/* Mobile/tablet image — stacks on top, hidden at expanded/desktop */}
      <div className="order-1 w-full h-[280px] tablet:h-[340px] flex items-end justify-center expanded:hidden desktop:hidden">
        <picture className="h-full">
          {imageMobile && <source media="(max-width: 899px)" srcSet={imageMobile} />}
          <img src={image} alt={alt} className={`h-full w-auto max-w-full object-contain ${imageClassName}`} loading="lazy" />
        </picture>
      </div>

      {/* Text block */}
      <div className={`${textOrder} flex flex-col gap-6 pb-16 expanded:flex-1 expanded:max-w-[600px] expanded:pb-0 desktop:flex-1 desktop:max-w-[600px] desktop:pb-0 ${textClassName}`}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <p className="eyebrow text-warm-grey-dark">{category}</p>
            <h3 className="card-heading text-olive-lighter">{title}</h3>
          </div>
          <p className="body-copy text-olive">{description}</p>
          {footnote && <p className="footnote text-white opacity-70">{footnote}</p>}
        </div>
        <a
          href={href}
          className="text-cta text-cta-olive self-start inline-flex items-center gap-2"
        >
          {cta}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Image — expanded/desktop only */}
      <div className={`hidden expanded:block expanded:flex-1 expanded:max-w-[512px] desktop:block desktop:flex-1 desktop:max-w-[512px] relative expanded:aspect-[512/440] desktop:aspect-[512/440] ${imageDesktopOrder} ${imageContainerClassName}`}>
        <img
          src={image}
          alt={alt}
          className={`absolute inset-0 w-full h-full ${fitClass} ${imageClassName}`}
          loading="lazy"
        />
      </div>
    </div>
  )
}
