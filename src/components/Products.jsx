import ProductCard from './ProductCard'
import SectionHeader from './SectionHeader'
import TradeMark from './TradeMark'

const BASE = import.meta.env.BASE_URL

export default function Products() {
  return (
    <section id="products" className="scroll-mt-nav max-phone:scroll-mt-navMobile">
      <div className="page-container px-28 pt-[48px] pb-[112px] flex flex-col gap-[48px]
                      max-tablet:px-16 max-tablet:pt-12 max-tablet:pb-28
                      max-phone:px-6 max-phone:py-12 max-phone:gap-8">

        {/* Section header */}
        <SectionHeader title="Transformational Products" subtitle="Carry the Work With You" />

        {/* Cards — 4px gap */}
        <div className="flex flex-col gap-1 max-phone:gap-6">

          <ProductCard
            className="bg-dark"
            imageLeft={false}
            image={`${BASE}card.png`}
            imageContainerClassName="tablet:h-[580px]"
            category="Empowering Product"
            title={<>The Quantum Empowerment Black Card<TradeMark size="xl" /></>}
            description="Gain access to the VIP frequency of life, purchase your next level of consciousness, or cut your 98% pure 'spiritual guide-quality Dark Shaman certified' cocaine* with a premium card that certifies you have 'Done The Work'. Link it with your personal Consciousness Portfolio and the quiet satisfaction of knowing you are further along than everyone else at the dinner party."
            footnote="* the universe doesn't judge evolutionary medicine use when you're in integrity"
            cta="apply now"
            tabletPb="max-tablet:pb-16"
          />

          <ProductCard
            style={{ background: 'linear-gradient(117.19deg, #5c3551 28.455%, #3e2137 98.062%)' }}
            imageLeft={true}
            image={`${BASE}tarot.png`}
            imageContainerClassName="tablet:h-[516px]"
            textClassName="tablet:pl-0 tablet:pr-[64px] tablet:py-[96px]"
            category="Divination & Clarity"
            title={<>The STW Tarot<TradeMark size="xl" /></>}
            description="A secular divination deck featuring seventy-eight of Dr. Steinberg's proprietary psychological archetypes. Pull the Nine of Hogs for clarity on creative blocks. Draw the Tower of Functional Medicine for literally any question about your gut. Includes a 40-page guidebook written entirely in therapeutic jargon."
            cta="read your future"
            tabletPb="max-tablet:pb-12"
          />

        </div>
      </div>
    </section>
  )
}
