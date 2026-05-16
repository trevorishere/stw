import Btn from './Btn'
import TradeMark from './TradeMark'
import { useReveal } from '../hooks/useReveal'

const crossout = `${import.meta.env.BASE_URL}crossout.svg`
const heroImg  = `${import.meta.env.BASE_URL}hero.png`

export default function Hero() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} className={`[overflow-x:clip] relative bg-dark${visible ? ' in-view' : ''}`}>
      <div className="page-container px-24 max-tablet:px-16 py-[104px]
                      max-phone:px-6">

        <div className="flex flex-col gap-[64px] max-tablet:gap-12 max-phone:gap-[136px]">

          <div className="reveal-heading hero-text-block relative">
            <img src={crossout} className="hero-scratchout" aria-hidden="true" alt="" />
            <div className="hero-top-row">
              <div className="hero-fck-wrapper">
                <span className="hero-fck">F*CK</span>
              </div>
              <span className="hero-save">SAVE</span>
            </div>
            <div className="hero-the-world">THE WORLD</div>
          </div>

          <div className="reveal-body flex items-start gap-14 max-tablet:gap-8 max-phone:flex-col max-phone:gap-8">

            <div className="flex flex-col gap-4 flex-1 min-w-0 pt-8 max-phone:pt-0">

              <p className="font-figtree font-black text-[40px] leading-[48px] tracking-[1px] uppercase text-cream
                            max-tablet:text-[26px] max-tablet:leading-[30px] max-phone:text-[28px] max-phone:leading-[34px] max-phone:tracking-[0.75px]">
                Step Into Your Optimized Embodied Legacy of Radical Alignment
                <TradeMark size="lg" />
                {' '}And Unlock Your Highest-Potential Purpose-Driven Self
              </p>

              <div className="flex flex-col gap-10 max-tablet:gap-8 max-phone:gap-8">
                <p className="body-copy text-cream max-w-[760px]">
                  We help high-performing visionaries (and normies who think wellness means meditating
                  for three days and saying you 'tried everything') optimize their quantum potential,
                  scale their purpose-driven entrepreneurial legacy, and finally achieve root-cause
                  alignment across all dimensions of their functional self—mind, body, spirit, business,
                  relationship, mitochondria, inner child, morning routine, and personal brand.
                </p>

                <Btn color="white" href="#contact" className="self-start">
                  begin your inititation
                </Btn>
              </div>
            </div>

            <div className="hero-img">
              <img src={heroImg} alt="Dr. Aaron Steinberg" className="w-full h-full object-cover object-top" />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
