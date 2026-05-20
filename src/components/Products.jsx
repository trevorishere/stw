import ProductCard from './ProductCard'
import SectionHeader from './SectionHeader'
import TradeMark from './TradeMark'
import { useReveal } from '../hooks/useReveal'

const BASE = import.meta.env.BASE_URL

export default function Products() {
  const [headerRef, headerVisible] = useReveal()
  return (
    <section id="products" className="bg-dark scroll-mt-nav max-phone:scroll-mt-navMobile">
      <div className="page-container px-24 max-tablet:px-16 pt-[280px] pb-[136px] flex flex-col gap-[48px] tablet:gap-20
                      max-tablet:pb-28
                      max-phone:px-6 max-phone:pt-[224px] max-phone:pb-[48px] max-phone:gap-8">

        {/* Section header */}
        <div ref={headerRef} className={`reveal-heading${headerVisible ? ' in-view' : ''}`}>
          <SectionHeader
            title={<>Transformational<br />Products</>}
            subtitle="Carry the Work With You"
            titleClassName="text-cream"
            subtitleClassName="text-cream opacity-70"
          />
        </div>

        {/* Cards — 4px gap */}
        <div className="flex flex-col gap-1 tablet:gap-20">

          <ProductCard
            imageLeft={false}
            image={`${BASE}card_bg.png`}
            alt="Quantum Empowerment Black Card"
            imageFit="contain"
            imageContainerClassName="tablet:p-[10px]"
            category="Empowering Product"
            title={<>The Quantum Empowerment Black <TradeMark size="xl" word="Card" /></>}
            description="Gain access to the VIP frequency of life, purchase your next level of consciousness, or cut your 98% pure 'spiritual guide-quality Dark Shaman certified' cocaine* with a premium card that certifies you have 'Done The Work'. Link it with your personal Consciousness Portfolio and the quiet satisfaction of knowing you are further along than everyone else at the dinner party."
            footnote="* the universe doesn't judge evolutionary medicine use when you're in integrity"
            cta="apply now"
            tabletPb="max-tablet:pb-16"
          />

          <ProductCard
            imageLeft={true}
            image={`${BASE}tarot_bg.png`}
            alt="STW Tarot deck"
            imageFit="contain"
            imageContainerClassName="tablet:h-[419px] tablet:self-auto"
            category="Divination & Clarity"
            title={<>The STW <TradeMark size="xl" word="Tarot" /></>}
            description="A secular divination deck featuring seventy-eight of Dr. Steinberg's proprietary psychological archetypes. Pull the Nine of Hogs for clarity on creative blocks. Draw the Tower of Functional Medicine for literally any question about your gut. Includes a 40-page guidebook written entirely in therapeutic jargon."
            cta="read your future"
            tabletPb="max-tablet:pb-16"
          />

        </div>
      </div>
    </section>
  )
}
