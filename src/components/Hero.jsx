import TradeMark from './TradeMark'
import { useReveal } from '../hooks/useReveal'

const heroImg  = `${import.meta.env.BASE_URL}hero-aaron-jeans.jpg`

export default function Hero() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} className={`[overflow-x:clip] relative bg-cobalt-dark${visible ? ' in-view' : ''}`}>
      <div className="page-container px-6 pt-8 pb-10 tablet:px-16 tablet:pt-[88px] tablet:pb-[96px] expanded:px-24 expanded:pt-[88px] expanded:pb-[96px] desktop:px-24 desktop:pt-[88px] desktop:pb-[96px]">

        <div className="flex flex-col gap-8 tablet:gap-8 expanded:gap-8 desktop:gap-8">

          <h1 className="reveal-heading hero-slogan">
            <span className="block">MAXIMIZE Your Life.</span>{' '}
            <span className="block">MONETIZE Your <TradeMark size="lg" word="Trauma." /></span>
          </h1>

          <div className="reveal-body flex flex-col gap-6 items-start tablet:flex-row tablet:items-center tablet:gap-8 expanded:flex-row expanded:items-center expanded:gap-14 desktop:flex-row desktop:items-center desktop:gap-14">

            <div className="flex flex-col gap-4 flex-1 min-w-0 tablet:gap-4 expanded:gap-4 desktop:gap-4">

              <p className="font-figtree font-black text-24 leading-1-2 tracking-sm uppercase text-olive-lighter
                            expanded:text-32 desktop:text-40">
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
