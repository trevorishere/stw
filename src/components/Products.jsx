import ProductCard from './ProductCard'
import SectionHeader from './SectionHeader'
import TradeMark from './TradeMark'
import { useReveal } from '../hooks/useReveal'

const BASE = import.meta.env.BASE_URL

export default function Products() {
  const [headerRef, headerVisible] = useReveal()
  return (
    <section id="products" className="bg-cobalt-dark scroll-mt-nav">
      <div className="page-container px-6 pt-[120px] pb-[48px] flex flex-col gap-8 tablet:px-16 tablet:pt-[120px] tablet:pb-28 tablet:gap-12 expanded:px-24 expanded:pt-[120px] expanded:pb-[136px] expanded:gap-16 desktop:px-24 desktop:pt-[120px] desktop:pb-[136px] desktop:gap-16">

        {/* Section header */}
        <div ref={headerRef} className={`reveal-heading${headerVisible ? ' in-view' : ''}`}>
          <SectionHeader
            title={<>Transformational<br />Products</>}
            subtitle="Carry the Work With You"
            titleClassName="text-olive-lighter"
            subtitleClassName="text-warm-grey-dark"
          />
        </div>

        <div className="flex flex-col gap-8 expanded:gap-16 desktop:gap-16">

          <ProductCard
            imageLeft={false}
            image={`${BASE}card.png`}
            alt="Quantum Empowerment Black Card"
            category="Empowering Product"
            title={<>The Quantum Empowerment Black <TradeMark size="lg" word="Card" gap /></>}
            description="Gain access to the VIP frequency of life, purchase your next level of consciousness, or cut your 98% pure 'spiritual guide-quality Dark Shaman certified' cocaine* with a premium card that certifies you have 'Done The Work'. Link it with your personal Consciousness Portfolio and the quiet satisfaction of knowing you are further along than everyone else at the dinner party."
            footnote="* the universe doesn't judge evolutionary medicine use when you're in integrity"
            cta="apply now"
          />

          <ProductCard
            imageLeft={true}
            image={`${BASE}tarot.png`}
            alt="STW Tarot deck"
            category="Divination & Clarity"
            title={<>The STW <TradeMark size="lg" word="Tarot" gap /></>}
            description="A secular divination deck featuring seventy-eight of Dr. Steinberg's proprietary psychological archetypes. Pull the Nine of Hogs for clarity on creative blocks. Draw the Tower of Functional Medicine for literally any question about your gut. Includes a 40-page guidebook written entirely in therapeutic jargon."
            cta="read your future"
          />

        </div>
      </div>
    </section>
  )
}
