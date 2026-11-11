import TradeMark from './TradeMark'
import { useReveal } from '../hooks/useReveal'

const heroImg  = `${import.meta.env.BASE_URL}hero-aaron-jeans.jpg`

export default function Hero() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} className={`[overflow-x:clip] relative bg-cobalt-dark${visible ? ' in-view' : ''}`}>
      <div className="page-container px-6 pt-8 pb-10 tablet:px-16 tablet:pt-[88px] tablet:pb-[96px] expanded:px-24 expanded:pt-[88px] expanded:pb-10 desktop:px-24 desktop:pt-[88px] desktop:pb-10">

        {/* At expanded/desktop the photo row sits right under the headline (the photo has its own head room) */}
        <div className="flex flex-col gap-8 tablet:gap-8 expanded:gap-0 desktop:gap-0">

          <h1 className="reveal-heading hero-slogan">
            <span className="block">MAXIMIZE Your Life.</span>{' '}
            <span className="block">MONETIZE Your <TradeMark size="lg" word="Trauma." /></span>
          </h1>

          <div className="reveal-body flex flex-col gap-6 items-start tablet:flex-row tablet:items-center tablet:gap-8 expanded:flex-row expanded:items-center expanded:gap-14 desktop:flex-row desktop:items-center desktop:gap-14">

            <div className="flex flex-col gap-4 flex-1 min-w-0 tablet:gap-4 expanded:gap-4 desktop:gap-4">

              {/* 24px up to tablet; from 900px wide .hero-tagline (index.css) grows it to fill the space beside the photo */}
              <p className="hero-tagline font-figtree font-black text-24 leading-1-2 tracking-sm uppercase text-olive-lighter">
                Step Into Your Optimized, Purpose-Driven <TradeMark size="lg" word="Alignment" />{' '}And Scale Your Healing Into A Seven-Figure Empire
              </p>
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
