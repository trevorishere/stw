/**
 * ProgramCard — used in both Offerings and Products.
 *
 * compact=true  → smaller title (40px), larger desc (20px), smaller link (16px)
 *               Used for the 2-column offering cards.
 * compact=false → larger title (48px), standard desc (16px), larger link (20px)
 *               Used for the wide offering card and all product cards.
 *
 * title accepts a ReactNode so callers can embed <sup> elements.
 */
export default function ProgramCard({ category, title, description, cta, href = '#contact', compact = false }) {
  return (
    <article className="bg-cream border border-dark flex flex-col p-0.5">
      <div className="bg-pearl flex items-center justify-center flex-shrink-0 h-[400px] max-tablet:h-[280px] max-phone:h-[200px]">
        <span className="font-syne font-bold text-[10px] tracking-[2px] uppercase text-black/20">
          Program image
        </span>
      </div>

      <div className="p-8 pb-12 max-phone:p-6 max-phone:pb-9 flex flex-col gap-4 flex-1">
        <p className="font-syne font-bold text-base tracking-[3px] uppercase text-grey23">
          {category}
        </p>

        <h3 className={`font-rubik font-bold text-grey10 leading-[1.08] ${
          compact
            ? 'text-[40px] tracking-[-0.8px] max-phone:text-[28px]'
            : 'text-[48px] tracking-[-1px] max-phone:text-[32px]'
        }`}>
          {title}
        </h3>

        <p className={`font-rubik font-normal text-grey23 ${
          compact ? 'text-xl leading-8 max-phone:text-base max-phone:leading-[26px]' : 'text-base leading-[26px]'
        }`}>
          {description}
        </p>

        <div className="mt-auto pt-[47px]">
          <a
            href={href}
            className={`block border-t border-dark pt-[17px] font-rubik font-bold uppercase text-dark no-underline hover:opacity-70 ${
              compact ? 'text-base font-extrabold' : 'text-xl'
            }`}
          >
            {cta} →
          </a>
        </div>
      </div>
    </article>
  )
}
