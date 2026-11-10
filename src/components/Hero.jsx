import TradeMark from './TradeMark'
import { useReveal } from '../hooks/useReveal'

const heroImg  = `${import.meta.env.BASE_URL}hero.png`

export default function Hero() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} className={`[overflow-x:clip] relative bg-cobalt-dark${visible ? ' in-view' : ''}`}>
      <div className="page-container px-6 pt-[88px] pb-[96px] tablet:px-16 expanded:px-24 desktop:px-24">

        <div className="flex flex-col gap-[136px] tablet:gap-12 expanded:gap-12 desktop:gap-12">

          <h1 className="reveal-heading hero-slogan">
            <span className="block">MAXIMIZE Your Life.</span>{' '}
            <span className="block">MONETIZE Your <TradeMark size="lg" word="Trauma." /></span>
          </h1>

          <div className="reveal-body flex flex-col gap-8 items-start tablet:flex-row tablet:gap-8 expanded:flex-row expanded:gap-14 desktop:flex-row desktop:gap-14">

            <div className="flex flex-col gap-4 flex-1 min-w-0 tablet:pt-8 tablet:gap-4 expanded:pt-8 expanded:gap-4 desktop:pt-8 desktop:gap-4">

              <p className="font-figtree font-black text-24 leading-1-2 tracking-sm uppercase text-olive-lighter
                            expanded:text-32 desktop:text-40">
                Step Into Your Optimized, Purpose-Driven <TradeMark size="lg" word="Alignment" />{' '}And Scale Your Healing Into A Seven-Figure Empire – Sustainably
              </p>

              <div className="flex flex-col gap-8 tablet:gap-12 expanded:gap-12 desktop:gap-12">
                <p className="body-copy font-light text-olive-lighter">
                  We help people actualize the fullest, most resourced expression of their one precious
                  human life — integrating mind, body, heart, relationships, and your connection to something
                  greater than yourself into one embodied whole —
                  and then translate all of that into a category-defining thought-leadership legacy and
                  personal brand dynasty.
                </p>
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
