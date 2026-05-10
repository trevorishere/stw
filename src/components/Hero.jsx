import Btn from './Btn'

const crossout = `${import.meta.env.BASE_URL}crossout.svg`
const heroImg  = `${import.meta.env.BASE_URL}hero.png`

export default function Hero() {
  return (
    <section
      className="[overflow-x:clip] relative"
      style={{ background: 'linear-gradient(to bottom, #96978D 23.62%, transparent 65.13%)' }}
    >
      <div className="page-container px-28 pt-[88px] pb-4
                      max-tablet:px-12 max-tablet:pt-[48px] max-tablet:pb-[80px]
                      max-phone:px-6 max-phone:pt-[64px] max-phone:pb-12">

        <div className="hero-text-block relative">
          <img src={crossout} className="hero-scratchout" aria-hidden="true" alt="" />
          <div className="hero-top-row">
            <div className="hero-fck-wrapper">
              <span className="hero-fck">F*CK</span>
            </div>
            <span className="hero-save">SAVE</span>
          </div>
          <div className="hero-the-world">THE WORLD</div>
        </div>

        <div className="flex items-center gap-24 max-tablet:flex-col max-tablet:items-start max-tablet:gap-12 max-phone:gap-10">

          <div className="flex flex-col gap-6 flex-1 min-w-0">

            <p className="font-figtree font-black text-[32px] leading-[40px] tracking-[1px] uppercase text-dark opacity-80
                          max-tablet:text-2xl max-tablet:leading-8 max-phone:text-[24px] max-phone:leading-7 max-phone:tracking-[0.75px]">
              Step Into Your Optimized Embodied Legacy of Radical Alignment
              <sup className="text-[20px] font-normal not-italic max-tablet:text-[13px] max-phone:text-[15px]">©TM©</sup>
              {' '}And Unlock Your Highest-Potential Purpose-Driven Self
            </p>

            <div className="flex flex-col gap-8">
              <p className="font-dmSans font-semibold text-[20px] leading-[32px] text-dark
                            max-phone:text-[20px] max-phone:leading-[32px]">
                We help high-performing visionaries (and normies who think wellness means meditating
                for three days and saying you 'tried everything') optimize their quantum potential,
                scale their purpose-driven entrepreneurial legacy, and finally achieve root-cause
                alignment across all dimensions of their functional self—mind, body, spirit, business,
                relationship, mitochondria, inner child, morning routine, and personal brand.
              </p>

              <Btn variant="hero" color="productBg" href="#contact" className="self-start max-tablet:w-full max-tablet:justify-center">
                begin your inititation
              </Btn>
            </div>
          </div>

          <div className="w-[294px] h-[534px] shrink-0 max-tablet:hidden">
            <img src={heroImg} alt="" className="w-full h-full object-cover object-top" />
          </div>

        </div>
      </div>
    </section>
  )
}
