export default function Hero() {
  return (
    <section className="bg-cream border-b-2 border-dark px-12 pt-24 pb-[148px] overflow-hidden max-tablet:px-6 max-tablet:pt-16 max-tablet:pb-16 max-phone:px-5 max-phone:pt-12 max-phone:pb-12">

      {/* Layered display text — sizes/positions managed in index.css */}
      <div className="hero-text-block">
        <div className="hero-save">
          <div className="hero-save-wrapper">
            <span className="hero-save-word">SAVE</span>
            <div className="strike-bar strike-1" />
            <div className="strike-bar strike-2" />
          </div>
        </div>
        <div className="hero-fck">F**K</div>
        <div className="hero-the-world">THE<br />WORLD</div>
      </div>

      {/* Tagline + CTAs */}
      <div className="mt-[88px] pt-16 border-t-0 flex items-start justify-between gap-12 max-tablet:flex-col max-tablet:gap-8 max-tablet:mt-14 max-tablet:pt-10 max-phone:mt-12 max-phone:pt-10">
        <p className="max-w-[904px] font-rubik font-black italic text-[36px] leading-[48px] tracking-[-0.72px] uppercase text-grey23
                      max-tablet:text-2xl max-tablet:leading-[34px] max-phone:text-lg max-phone:leading-[26px] max-xs:text-base max-xs:leading-6">
          Step Into Your Optimized Embodied Legacy of Radical Alignment Finally Unlock Your Highest-Potential Purpose-Driven Self
        </p>

        <div className="flex flex-col flex-shrink-0 max-tablet:w-full">
          <a href="#about"
             className="inline-block px-[34px] py-[18px] font-syne font-bold text-[13px] tracking-[1.98px] uppercase no-underline cursor-pointer border-2 border-dark bg-transparent text-dark hover:bg-black/5 max-tablet:text-center">
            About Dr. Steinberg
          </a>
          <a href="#contact"
             className="inline-block px-[34px] py-[18px] font-syne font-bold text-[13px] tracking-[1.98px] uppercase no-underline cursor-pointer border-2 border-dark -mt-0.5 bg-dark text-accent hover:opacity-90 max-tablet:text-center">
            Start Today
          </a>
        </div>
      </div>
    </section>
  )
}
