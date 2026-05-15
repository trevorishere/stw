import Btn from './Btn'
import TradeMark from './TradeMark'

const crossout = `${import.meta.env.BASE_URL}crossout.svg`
const heroImg  = `${import.meta.env.BASE_URL}hero.png`

export default function Hero() {
  return (
    <section
      className="[overflow-x:clip] relative"
      style={{ background: 'linear-gradient(to bottom, #96978D 23.62%, transparent 65.13%)' }}
    >
      <div className="page-container px-28 pt-[104px] pb-4
                      max-tablet:px-16 max-tablet:pt-[104px] max-tablet:pb-[80px]
                      max-phone:px-6 max-phone:pt-[120px] max-phone:pb-4">

        <div className="flex flex-col gap-[64px] max-tablet:gap-12 max-phone:gap-[136px]">

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

          <div className="flex items-start justify-between max-phone:flex-col max-phone:gap-8">

            <div className="flex flex-col gap-4 flex-1 min-w-0 pt-8 max-tablet:pr-8 max-phone:pt-0 max-phone:pr-0">

              <p className="font-figtree font-black text-[40px] leading-[48px] tracking-[1px] uppercase text-dark
                            max-tablet:text-[26px] max-tablet:leading-[30px] max-phone:text-[28px] max-phone:leading-[34px] max-phone:tracking-[0.75px]">
                Step Into Your Optimized Embodied Legacy of Radical Alignment
                <TradeMark size="lg" />
                {' '}And Unlock Your Highest-Potential Purpose-Driven Self
              </p>

              <div className="flex flex-col gap-10 max-tablet:gap-8 max-phone:gap-[16px]">
                <p className="lead-copy text-dark">
                  We help high-performing visionaries (and normies who think wellness means meditating
                  for three days and saying you 'tried everything') optimize their quantum potential,
                  scale their purpose-driven entrepreneurial legacy, and finally achieve root-cause
                  alignment across all dimensions of their functional self—mind, body, spirit, business,
                  relationship, mitochondria, inner child, morning routine, and personal brand.
                </p>

                <Btn color="productBg" href="#contact" className="self-start">
                  begin your inititation
                </Btn>
              </div>
            </div>

            <div className="w-[294px] h-[534px] shrink-0 max-tablet:w-[140px] max-tablet:h-[255px] max-phone:hidden">
              <img src={heroImg} alt="" className="w-full h-full object-cover object-top" />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
