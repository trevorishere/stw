const crossout    = `${import.meta.env.BASE_URL}crossout.svg`
const heroImg     = `${import.meta.env.BASE_URL}hero.png`
const gradientsImg = `${import.meta.env.BASE_URL}gradients.svg`

export default function Hero() {
  return (
    <section className="bg-dark [overflow-x:clip] relative pb-[136px] max-phone:pb-0">
      <img src={gradientsImg} className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" aria-hidden="true" alt="" />
      <div className="max-w-[1440px] mx-auto w-full px-28 pt-28 pb-34
                      max-tablet:px-6 max-tablet:pt-20 max-tablet:pb-20
                      max-phone:px-6 max-phone:pt-12 max-phone:pb-12">

        {/* Display text block */}
        <div className="hero-text-block">
          <div className="hero-top-row">
            <div className="hero-fck-wrapper">
              <span className="hero-fck">F*CK</span>
              <img src={crossout} className="hero-scratchout" aria-hidden="true" alt="" />
            </div>
            <span className="hero-save">SAVE</span>
          </div>
          <div className="hero-the-world">THE WORLD</div>
        </div>

        {/* Content row below display text */}
        <div className="relative mt-18 flex gap-0 max-tablet:mt-10 max-phone:mt-8">

          {/* Left: tagline + body + CTA */}
          <div className="flex flex-col gap-16 max-w-[600px] max-tablet:max-w-full max-tablet:gap-10">

            <p className="font-figtree font-black text-[36px] leading-[40px] tracking-[1.5px] uppercase text-accent
                          max-tablet:text-2xl max-tablet:leading-8 max-phone:text-[16px] max-phone:leading-5 max-phone:tracking-[1.5px]">
              Step Into Your Optimized Embodied Legacy of Radical Alignment
              <sup className="text-[23px] font-normal not-italic max-phone:text-[10px]">©TM©</sup>
              {' '}And Unlock Your Highest-Potential Purpose-Driven Self
            </p>

            <div className="flex flex-col gap-16 max-tablet:gap-10">
              <p className="font-dmSans text-[20px] leading-[30px] tracking-[0.2px] text-cream max-w-[595px]
                            max-phone:text-[14px] max-phone:leading-6">
                After decades of Hyper-Gold-Standard<sup className="text-[13px] max-phone:text-[9px]">©TM©</sup> clinical research,
                twelve-week containers, breathwork certifications, cold plunge protocols, and mastermind
                facilitation, Stein's Total Wellness<sup className="text-[13px] max-phone:text-[9px]">©TM©</sup> has distilled the
                entire human experience into a proprietary framework that will disrupt your collective nervous
                system, shatter your limiting beliefs, monetize your trauma, resource your somatic intelligence,
                and optimize your leadership capacity—sustainably.
              </p>

              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 pl-8 pr-5 py-5 border border-white
                             font-figtree font-extrabold text-[16px] leading-4 tracking-[2px]
                             uppercase text-white no-underline hover:bg-white hover:text-dark transition-colors
                             max-phone:border-0 max-phone:p-0 max-phone:text-[11px] max-phone:tracking-[1.5px] max-phone:leading-4"
                >
                  begin your inititation
                  <svg className="w-4 h-4 ml-1 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: hero photo (hidden on small screens) */}
          <div className="absolute right-0 bottom-[-192px] w-[449px] h-[816px] pointer-events-none
                          max-tablet:hidden">
            <img src={heroImg} alt="" className="w-full h-full object-cover object-top" />
          </div>

        </div>
      </div>
    </section>
  )
}
