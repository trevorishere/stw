const scratchout = `${import.meta.env.BASE_URL}scratchout.svg`

export default function Hero() {
  return (
    <section className="bg-cream px-24 pt-[176px] pb-24 overflow-x-hidden relative
                        max-tablet:px-6 max-tablet:pt-20 max-tablet:pb-16
                        max-phone:px-5 max-phone:pt-14 max-phone:pb-12">

      {/* Display text block */}
      <div className="hero-text-block">

        {/* Line 1: [F*CK scratched out] [SAVE] — always side by side */}
        <div className="hero-top-row">
          <div className="hero-fck-wrapper">
            <span className="hero-fck">F*CK</span>
            {/* SVG scales with the wrapper width, always covers the text */}
            <img
              src={scratchout}
              className="hero-scratchout"
              aria-hidden="true"
              alt=""
            />
          </div>
          <span className="hero-save">SAVE</span>
        </div>

        {/* Lines 2–3: THE WORLD */}
        <div className="hero-the-world">THE<br />WORLD</div>

      </div>

      {/* Content below display text */}
      <div className="relative mt-12 flex flex-col gap-12 border-t border-grey23 pt-16
                      max-tablet:mt-8 max-tablet:pt-10 max-tablet:gap-8">

        {/* Subtitle */}
        <p className="font-rubik font-black italic text-[36px] leading-[48px] tracking-[0.75px] uppercase text-grey23
                      max-tablet:text-2xl max-tablet:leading-8 max-phone:text-lg max-phone:leading-7">
          Step Into Your Optimized Embodied Legacy of Radical Alignment
          <sup className="text-[18px] not-italic font-semibold">©™©</sup>
          {' '}And Finally Unlock Your Highest-Potential Purpose-Driven Self
        </p>

        {/* 2-column body copy */}
        <div className="grid grid-cols-2 gap-12 max-tablet:grid-cols-1 max-tablet:gap-6">
          <p className="font-dmSans font-medium text-[20px] leading-8 text-grey23
                        max-phone:text-base max-phone:leading-7">
            We help high-performing visionaries (and normies who think wellness means meditating for three days and
            saying you 'tried everything') optimize their quantum potential, scale their purpose-driven entrepreneurial
            legacy, and finally achieve root-cause alignment across all dimensions of their functional self — mind,
            body, spirit, business, relationship, mitochondria, inner child, morning routine, and personal brand.
          </p>
          <p className="font-dmSans font-medium text-[20px] leading-8 text-grey23
                        max-phone:text-base max-phone:leading-7">
            After decades of Hyper-Gold-Standard<sup>©™©</sup> clinical research, twelve-week containers, breathwork
            certifications, cold plunge protocols, and mastermind facilitation, Stein's Total Wellness<sup>©™©</sup> has
            distilled the entire human experience into a proprietary framework that will disrupt your collective nervous
            system, shatter your limiting beliefs, monetize your trauma, resource your somatic intelligence, and
            optimize your leadership capacity — sustainably.
          </p>
        </div>

        {/* CTA button */}
        <div>
          <a
            href="#contact"
            className="inline-block px-[34px] py-5 border-2 border-grey23 font-rubik font-extrabold
                       text-[16px] leading-4 tracking-[2px] uppercase text-grey23 no-underline
                       hover:bg-grey23 hover:text-cream transition-colors"
          >
            begin your initiation
          </a>
        </div>
      </div>
    </section>
  )
}
