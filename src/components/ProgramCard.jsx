import ArrowRight from './ArrowRight'

/**
 * ProgramCard — used in both Offerings and Products.
 *
 * wide=true  → centered text, used for the signature container card
 * wide=false → left-aligned text, used for all grid cards
 *
 * title accepts a ReactNode so callers can embed <sup> elements.
 *
 * Layout: content area is flex-1 (grows to fill available space),
 * which naturally pushes the CTA to the bottom. This avoids
 * justify-between overflow issues when cards share a grid row.
 */
export default function ProgramCard({ category, title, description, cta, href = '#contact', wide = false, noBorder = false }) {
  return (
    <article className={`flex flex-col pt-8 pb-10 px-8 overflow-hidden
                         max-phone:px-5 max-phone:pt-6 max-phone:pb-8
                         ${noBorder ? '' : 'border border-dark'}
                         ${wide ? 'text-center' : ''}`}>

      {/* Content — flex-1 pushes CTA to the bottom regardless of card height */}
      <div className={`flex flex-col gap-6 w-full flex-1 ${wide ? 'items-center' : 'items-start'}`}>
        <div className={`flex flex-col gap-4 w-full ${wide ? 'items-center' : 'items-start'}`}>
          <p className="font-dmMono text-[16px] leading-6 tracking-[2px] uppercase text-grey23">
            {category}
          </p>
          <h3 className="font-rubik font-semibold text-[40px] leading-[48px] text-grey10
                         max-phone:text-[28px] max-phone:leading-9">
            {title}
          </h3>
        </div>

        <p className="font-dmSans font-medium text-[20px] leading-8 text-grey23
                      max-phone:text-base max-phone:leading-7">
          {description}
        </p>
      </div>

      {/* CTA — sits below flex-1 content, no mt-auto or justify-between needed */}
      <div className={`pt-8 flex-shrink-0 ${wide ? 'flex justify-center' : ''}`}>
        <a
          href={href}
          className="inline-flex items-center gap-1 font-rubik font-bold italic text-[20px] leading-[30px]
                     tracking-[0.6px] uppercase text-dark no-underline hover:opacity-70
                     max-phone:text-base"
        >
          {cta}
          <ArrowRight className="w-5 h-5 flex-shrink-0" />
        </a>
      </div>
    </article>
  )
}
