import Btn from './Btn'
import TradeMark from './TradeMark'
import { useReveal } from '../hooks/useReveal'

const crossout = `${import.meta.env.BASE_URL}crossout.svg`
const heroImg  = `${import.meta.env.BASE_URL}hero.png`

export default function Hero() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} className={`[overflow-x:clip] relative bg-cobalt-dark${visible ? ' in-view' : ''}`}>
      <div className="page-container px-6 pt-[88px] pb-[64px] tablet:px-16 expanded:px-24 desktop:px-24">

        <div className="flex flex-col gap-[136px] tablet:gap-12 expanded:gap-12 desktop:gap-12">

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

          <div className="reveal-body flex flex-col gap-8 items-start tablet:flex-row tablet:gap-8 expanded:flex-row expanded:gap-14 desktop:flex-row desktop:gap-14">

            <div className="flex flex-col gap-4 flex-1 min-w-0 tablet:pt-8 tablet:gap-4 expanded:pt-8 expanded:gap-4 desktop:pt-8 desktop:gap-4">

              <p className="font-figtree font-black text-24 leading-1-2 tracking-sm uppercase text-olive-lighter
                            expanded:text-32 desktop:text-40">
                Step Into Your Optimized Embodied Legacy of Radical <TradeMark size="lg" word="Alignment" />{' '}And Unlock Your Highest-Potential Purpose-Driven Self
              </p>

              <div className="flex flex-col gap-8 tablet:gap-12 expanded:gap-12 desktop:gap-12">
                <p className="body-copy font-light text-olive-light">
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
